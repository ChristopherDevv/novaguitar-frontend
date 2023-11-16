import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {

    const errorMsg = ref('');
    const successMsg = ref('');
    const spinner = ref(false);
    const authUser = ref('');
    const router = useRouter();

    //carga informacion de usuario
    onMounted(() => {
        const saveUser = localStorage.getItem('authUser');
        if(saveUser){
            authUser.value = JSON.parse(saveUser);
        }
       /*  console.log(authUser.value) */
    })

    const login = async ({email, password}) => {
        spinner.value = true;
       try {
        const response = await axios.post('https://oyster-app-ww52a.ondigitalocean.app/api/user/login', {
            email: email,
            password: password
        });

        if(response.data.access_token){
            authUser.value = response.data;
            //lamacenando en local
            localStorage.setItem('authUser', JSON.stringify(response.data));
             //redireccionamos
             router.push({name: 'user-account'})
        } else {
            errorMsg.value = response.data.message;
            setTimeout(() => {
                errorMsg.value = '';
            }, 5000);
        }

       } catch (error) {
         errorMsg.value = 'Authentication has failed';
         console.log(error)

         setTimeout(() => {
            errorMsg.value = '';
        }, 5000);

       } finally {
        spinner.value = false;
       }
    }

    const register = async ({firstName, lastName, email, password}) => {
        spinner.value = true;
        try {
            const response = await axios.post('https://oyster-app-ww52a.ondigitalocean.app/api/user/register', {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password
            })

            if(response.data.access_token){
                localStorage.removeItem('authUser');
                authUser.value = response.data;
                localStorage.setItem('authUser', JSON.stringify(response.data));
                //console.log('success');
                router.push({name: 'user-account'})
            }else{
                errorMsg.value = response.data.message;
                setTimeout(() => {
                    errorMsg.value = '';
                }, 5000);
            }

        } catch (error) {
            if (error.response && error.response.status === 409) {
                errorMsg.value = error.response.data.message;
            } else {
                errorMsg.value = 'registration failed, invalid credentials';
            }
            setTimeout(() => {
                errorMsg.value = '';
            }, 5000);
        } finally {
            spinner.value = false;
        }
    }

    const logout = async () => {
        spinner.value = true; 
        try {
            const response = axios.get('https://oyster-app-ww52a.ondigitalocean.app/api/user/logout', {
                headers: {
                    'Authorization': `Bearer ${authUser.value.access_token}`
                }
            });
            //limpiamos informacion del usuario
            authUser.value = '';
            localStorage.removeItem('authUser');
            //redireccionamos
            router.push({name: 'login'})
        } catch (error) {
            errorMsg.value = 'Deleted failed try again';
            setTimeout(() => {
                errorMsg.value = '';
            }, 5000);
        } finally {
            spinner.value = false;
        }
    }

    const userUpdate = async ({firstName, lastName, email, password}) => {
        spinner.value = true;    
        try {
            const response = await axios.put(`https://oyster-app-ww52a.ondigitalocean.app/api/user/update/${authUser.value.user.id}`,{
                first_name: firstName,
                last_name: lastName,
                email: email,
                is_admin: false,
                password: password      
            },{
                headers: {
                    'Authorization': `Bearer ${authUser.value.access_token}`
                }
            });

            if(response.data.message){
                let tempToken = authUser.value.access_token;
                localStorage.removeItem('authUser');
                authUser.value = response.data;
                // Agrega nuevamente el access_token a la información del usuario
                authUser.value.access_token = tempToken;
                localStorage.setItem('authUser', JSON.stringify(response.data));
                successMsg.value = response.data.message;
                setTimeout(() => {
                    successMsg.value = '';
                }, 5000);

            }else{
                errorMsg.value = 'Has failed update';
                setTimeout(() => {
                    errorMsg.value = '';
                }, 5000);
            }
            
        } catch (error) {
            errorMsg.value = 'Update failed invalid credentials';
            setTimeout(() => {
                errorMsg.value = '';
            }, 5000);
        } finally {
            spinner.value = false;
        }
    }

    const userDelete = async () => {
        spinner.value = true; 
       try {
        const response = await axios.delete(`https://oyster-app-ww52a.ondigitalocean.app/api/user/destroy/${authUser.value.user.id}`, {
            headers: {
                'Authorization': `Bearer ${authUser.value.access_token}`
            }
        });
        //limpiamos informacion del usuario
        authUser.value = '';
        localStorage.removeItem('authUser')
        router.push({name: 'register'})

       } catch (error) {
        errorMsg.value = 'Deleted failed try again';
        setTimeout(() => {
            errorMsg.value = '';
        }, 5000);
       } finally {
        spinner.value = false;
    }
    }

    const hasError = computed(() => {
        return errorMsg.value
    })
    const showSpinner = computed(() => {
        return spinner.value
    })
    const isAuth = computed(() => {
        return authUser.value
    })
    const hasSuccess = computed(() => {
        return successMsg.value 
    })

    return {
        login,
        logout,
        register,
        userUpdate,
        userDelete,
        hasError,
        errorMsg,
        hasSuccess,
        showSpinner,
        isAuth
    }
})
