import { defineStore } from "pinia";
import { useAuthStore } from './auth'
import { ref, onMounted, computed } from "vue";
import { useRouter } from 'vue-router';
import axios from "axios";

export const useGuitarStore = defineStore('guitar', () => {

    const errorMsg = ref('');
    const auth = useAuthStore();
    const accesToken = computed(() => auth.isAuth.access_token);
    const successMsg = ref('');
    const spinner = ref(false);
    const router = useRouter();
    /* onMounted(() => {
        accesToken.value = auth.isAuth.access_token;
    }) */


    const createGuitar = async ({name, fullName, category, color, description, specifications, care_maintenance, price, rating, discount, stock, image_url}) => {
        spinner.value = true;
        try {
            const response = await axios.post('https://oyster-app-ww52a.ondigitalocean.app/api/admin/guitars/store', {
                name: name,
                full_name: fullName, 
                category: category,
                color: color,
                description: description,
                specifications: specifications,
                care_maintenance: care_maintenance,
                price: price,
                rating: rating,
                discount: discount,
                stock: stock,
                image_url: image_url
            }, {
                headers: {
                    'Authorization': `Bearer ${accesToken.value}`
                }
            });

            if(response.data.message){
                router.push({name: 'admin-guitar'})
                successMsg.value = response.data.message;
                setTimeout(() => {
                    successMsg.value = '';
                }, 5000);
                
            }else {
                errorMsg.value = 'There was an error, please try again'
                setTimeout(() => {
                    errorMsg.value = '';
                }, 5000);

            }

        } catch (error) {
           
            if (error.response) {
                // La petición se hizo y el servidor respondió con un código
                errorMsg.value = error.response.data.error;
                setTimeout(() => {
                    errorMsg.value = '';
                }, 5000);
            }else {
                errorMsg.value = 'There was an error, please try again'
                setTimeout(() => {
                    errorMsg.value = '';
                }, 5000);
            }
           

        } finally {
            spinner.value = false;
        }
    }

    const indexGuitar = async() => {
        spinner.value = true;
        try {
            const response = await axios.get('https://oyster-app-ww52a.ondigitalocean.app/api/guitars');
            /* console.log(response); */
            if(response.data){
                return response.data.data
            }else{
                console.log('has a error')
            }
        } catch (error) {
            console.log(error)
        }finally {
            spinner.value = false;
        }
    }

    const showGuitar = async(id) => {
        try {
            
            const response = await axios.get(`https://oyster-app-ww52a.ondigitalocean.app/api/guitar/${id}`);

            if(response.data){
                return response.data.data
            }

        } catch (error) {
            console.log(error)
        }
    }

    const UpdateGuitar = async ({name, fullName, category, color, description, specifications, care_maintenance, price, rating, discount, stock, image_url}, id) => {
        try {
            const response = await axios.put(`https://oyster-app-ww52a.ondigitalocean.app/api/admin/guitars/update/${id}`, {
                name: name,
                full_name: fullName, 
                category: category,
                color: color,
                description: description,
                specifications: specifications,
                care_maintenance: care_maintenance,
                price: price,
                rating: rating,
                discount: discount,
                stock: stock,
                image_url: image_url
            }, {
                headers: {
                    'Authorization': `Bearer ${accesToken.value}`
                }
            });
            if(response.data.message){
                router.push({name: 'admin-guitar'})
                successMsg.value = response.data.message;
                setTimeout(() => {
                    successMsg.value = '';
                }, 5000);                
            }else {
                errorMsg.value = 'There was an error, please try again'
                setTimeout(() => {
                    errorMsg.value = '';
                }, 5000); 
            }

        } catch (error) {
            errorMsg.value = 'There was an error, please try again'
            setTimeout(() => {
                errorMsg.value = '';
            }, 5000); 
        }
    }

    const deleteGuitar = async (id) => {
        spinner.value = true;
        try {
            const response = await axios.delete(`https://oyster-app-ww52a.ondigitalocean.app/api/admin/guitars/destroy/${id}`, {
                headers: {
                    'Authorization': `Bearer ${accesToken.value}`
                }
            });
            if(response.data.message){
                successMsg.value = response.data.message;
                setTimeout(() => {
                    successMsg.value = '';
                }, 5000);  
                return indexGuitar();           
            }
           
        } catch (error) {
            errorMsg.value = 'There was an error, please try again'
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
    const hasSuccess = computed(() => {
        return successMsg.value
    })
    const showSpinner = computed(() => {
        return spinner.value
    })

    return {
        createGuitar,
        indexGuitar,
        showGuitar,
        UpdateGuitar,
        deleteGuitar,
        hasError,
        hasSuccess,
        showSpinner
    }
   
})