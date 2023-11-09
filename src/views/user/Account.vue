<script setup>
import PrimaryButton from '../../components/PrimaryButton.vue';
import { useAuthStore } from '../../stores/auth'
import { Toast, Spinner } from 'flowbite-vue'
import { ref, onMounted } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { useForm, useField } from 'vee-validate'
import { registerSchema } from '../../validation/registerSchema'
import Modal from '../../components/Modal.vue';
import useDate from '../../composables/useDate';
import Alert from '../../components/Alert.vue'

const { friendlyDate } = useDate();
const auth = useAuthStore();

const categories = ref({
  Account: { message: 'Details account'},
  Coupons: { message: 'eGuitar coupons'},
  Delete: { message: 'Delete account'},
})

const { handleSubmit, meta } = useForm({ validationSchema: registerSchema })
const firstName = useField('firstName');
const lastName = useField('lastName');
const email = useField('email');
const password = useField('password');
const submitTry = handleSubmit(() => {});
onMounted(() => {
  firstName.value.value = auth.isAuth.user.first_name;
  lastName.value.value = auth.isAuth.user.last_name;
  email.value.value = auth.isAuth.user.email;
});

const userLogout = () => {
    auth.logout();
}
const userUpdate = handleSubmit((values) => {
    auth.userUpdate(values);
})

const userDelete = () => {
   auth.userDelete();
}

</script>

<template>
    <div v-if="auth.isAuth" class="my-28 md:my-36 px-4 md:px-4 lg:px-0 mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-[1130px]">
        <div class="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-0">
            <div class="w-full lg:w-1/3 flex flex-col items-center justify-center lg:items-start lg:justify-start">
                <div class="relative">
                    <img class="w-20 h-20 rounded-full" src="/img/profile1.jpg" alt="">
                    <div class="bottom-0 left-14 absolute">
                        <span class="relative flex h-4 w-4">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-4 w-4 bg-green-400"></span>
                        </span>
                    </div>
                </div>
                <h2 class="mt-1 font-bold text-2xl">Hello <span>{{ auth.isAuth.user.first_name }}!!</span></h2>
                <p class="mt-1 text-gray-400 font-medium">eGuitar member sice {{ friendlyDate(auth.isAuth.user.created_at) }}</p>
                <div class="w-full md:max-w-xs px-8 py-5 bg-slate-800 rounded-lg mt-5">
                    <div class="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-current text-gray-200" viewBox="0 0 24 24"><path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path></svg>
                        <p class="">Acccount</p>
                    </div>
                    <Modal :onAccept="userLogout">
                        <template v-slot:button >
                            <button class="transition duration-300 flex shadow-md hover:bg-red-200 font-normal items-center justify-center w-full gap-3 mt-5 text-red-500 bg-red-100 py-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-current" viewBox="0 0 24 24"><path d="m10.998 16 5-4-5-4v3h-9v2h9z"></path><path d="M12.999 2.999a8.938 8.938 0 0 0-6.364 2.637L8.049 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051S20 10.13 20 12s-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637C21.063 16.665 22 14.405 22 12s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"></path></svg>
                                <span class="font-medium">Logout</span>
                            </button>
                        </template>
                        <template #title>Logout</template>
                        <template #message>Are you sure you should log out?</template>
                    </Modal>
                </div>
                <div class="w-full md:max-w-xs px-8 py-5 bg-slate-800 rounded-lg mt-5 text-xs">
                    <h3 class="font-bold text-lg">Roles de usuario</h3>
                    <p class="mt-2">Al crear una cuenta nueva tienes el rol de 'miembro', para probar el rol de administrador puedes actualizar tu cuenta en el boton de 'Update account' (Una vez actualizada, en el boton de user de la navegacion tendras la opcion de 'Administration')</p>
                </div>
                <Toast class="mt-5 shadow-md text-slate-400 dark max-w-md" :type="'warning'" closable divide>
                    Esta cuenta se eliminara en un par de dias
                </Toast>
                
            </div>

            <div class="w-full lg:w-2/3">

                <div class="w-full">
                    <TabGroup>
                    <TabList class="flex space-x-1 rounded-md bg-gray-300 p-1">
                        <Tab
                        v-for="category in Object.keys(categories)"
                        as="template"
                        :key="category"
                        v-slot="{ selected }"
                        >
                        <button
                            :class="[
                            'w-full rounded-lg py-2.5 text-sm md:text-sm font-medium leading-5 text-blue-500 focus:outline-none',
                            selected
                                ? 'bg-white shadow'
                                : 'hover:bg-gray-50 transition duration-300',
                            ]"
                        >
                            {{ category }}
                        </button>
                        </Tab>
                    </TabList>
                        <TabPanels class="mt-5">
                            <TabPanel
                            v-for="(category, idx) in Object.values(categories)"
                            :key="idx"
                            :class="[
                                'rounded-xl bg-slate-800 focus:outline-none shadow-lg min-h-[220px] p-7'
                            ]"
                            >
                            <h2 v-if="category === categories.Delete" class="font-bold text-xl text-red-500">{{ category.message }}</h2>
                            <h2 v-else class="font-bold text-xl">{{ category.message }}</h2>

                            <div v-if="category === categories.Account">
                                <div class="flex items-center gap-5">
                                    <p class="text-gray-400 text-sm">last account update {{ friendlyDate(auth.isAuth.user.updated_at) }}</p>
                                    <spinner v-if="auth.showSpinner" color="blue" size="6" />
                                </div>
                                <div class="mt-5 flex flex-col md:flex-row items-start gap-10 lg:gap-5 justify-between">
                               <div class="w-full lg:w-1/2"> 
                                <form @submit.prevent="submitTry" class="">
                                    <div class="relative">
                                        <input v-model="firstName.value.value" type="text" id="floating_first_name" :class="{'border-red-500' : firstName.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-6500 peer" placeholder=" " />
                                        <label for="floating_first_name" :class="{'text-red-500' : firstName.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2  origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">First name</label>
                                    </div>
                                    <p class="text-red-500 text-sm font-medium mt-1">{{ firstName.errorMessage.value }}</p>
                                    
                                    <div class="relative mt-5">
                                        <input v-model="lastName.value.value" type="text" id="floating_last_name" :class="{'border-red-500' : lastName.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-6500 peer" placeholder=" " />
                                        <label for="floating_last_name" :class="{'text-red-500' : lastName.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2 origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">last name</label>
                                    </div>
                                    <p class="text-red-500 text-sm font-medium mt-1">{{ lastName.errorMessage.value }}</p>
                                    
                                    <div class="relative mt-5">
                                        <input v-model="email.value.value" type="text" id="floating_email" :class="{'border-red-500' : email.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-6500 peer" placeholder=" " />
                                        <label for="floating_email" :class="{'text-red-500' : email.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2 origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">E-mail</label>
                                    </div>
                                    <p class="text-red-500 text-sm font-medium mt-1">{{ email.errorMessage.value }}</p>
                                    
                                    <div class="relative mt-5">
                                        <input v-model="password.value.value" type="password" id="floating_password" :class="{'border-red-500' : password.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-6500 peer" placeholder=" " />
                                        <label for="floating_password" :class="{'text-red-500' : password.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2 origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
                                    </div>
                                    <p class="text-red-500 text-sm font-medium mt-1">{{ password.errorMessage.value }}</p>

                                    <div class="mt-8">
                                        <Modal v-if="meta.valid" :onAccept="userUpdate">
                                            <template v-slot:button>
                                                <PrimaryButton type="submit">Update account</PrimaryButton>
                                            </template>
                                            <template #title>Update account</template>
                                            <template #message>Are you sure you should update account?</template>
                                        </Modal>
                                        <PrimaryButton v-else type="submit">Update account</PrimaryButton>
                                    </div>
                                    </form>
                                    <Alert :alertType="'danger'" v-if="auth.hasError">
                                            {{ auth.hasError }}
                                    </Alert>
                                    <Alert :alertType="'success'" v-if="auth.hasSuccess">
                                            {{ auth.hasSuccess }}
                                    </Alert>
                                </div>
                                <div class="w-full lg:w-1/2 text-center flex flex-col items-center justify-center text-green-500 rounded-lg bg-green-100 min-h-[270px]">
                                    <h3 class="text-base font-bold">Welcome to eGuitar</h3>
                                    <p class="text-sm">Now you can add items to your cart</p>
                                    <img class="w-20 mt-2" src="https://img.icons8.com/3d-fluency/94/shopping-basket.png" alt="shopping-basket"/>
                                </div>
                                </div>
                            </div>
                            <div v-else-if="category === categories.Coupons">
                                <p class="text-sm text-gray-400">Redeem coupons when making a purchase</p>
                                <div class="flex flex-col items-center justify-center gap-5 mt-5 mb-2 "> 
                                    <p class="py-2 px-5 border-2 border-blue-200 border-dashed text-center inline">No eGuitar coupons yet</p>                                 
                                    <img class="w-40" src="/img/coupons.png" alt="coupons image">
                                </div>
                            </div>
                            <div v-else>
                                <div class="flex items-center gap-5">
                                    <p class="text-red-400 text-sm">All items in yuor cart will be removed</p>
                                    <spinner v-if="auth.showSpinner" color="blue" size="6" />
                                </div>
                                <div class="w-full md:w-1/2 mt-8 mb-5 mx-auto text-center flex flex-col items-center justify-center text-red-500 rounded-lg bg-red-50 min-h-[200px]">
                                    <h3 class="text-base font-bold">Delete account</h3>
                                    <p class="text-sm">Are you sure to delete account?</p>
                                    <Modal :onAccept="userDelete">
                                        <template v-slot:button >
                                            <button class="w-full flex shadow-md bg-red-200 font-normal items-center justify-center mx-auto gap-3 mt-5 text-red-500 hover:bg-red-300 transition duration-300 py-2 px-4 rounded-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-current" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg>
                                                <span>Delete account</span>
                                            </button>
                                        </template>
                                        <template #title>Delete account</template>
                                        <template #message>Are you sure you should delete account?</template>
                                    </Modal>

                                </div>
                            </div>
                            </TabPanel>
                        </TabPanels>     
                    </TabGroup>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#toast-default{
    background: #1e293b !important;
}
</style>


