<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Logo from '../components/Logo.vue';
import { Spinner } from 'flowbite-vue'
import SecondaryButton from '../components/SecondaryButton.vue';
import PrimaryButton from '../components/PrimaryButton.vue';
import { useForm, useField } from 'vee-validate'
import { onMounted, ref } from 'vue';
import { useAuthStore } from '../stores/auth'
import Alert from '../components/Alert.vue'
import { loginSchema } from '../validation/loginSchema'
import { registerSchema } from '../validation/registerSchema'

const auth = useAuthStore();

const { handleSubmit } = useForm({ validationSchema: registerSchema })
const firstName = useField('firstName');
const lastName = useField('lastName');
const email = useField('email');
const password = useField('password');

const submit = handleSubmit((values) => {
    auth.register(values);
})

</script>

<template>
    
    <div class="lg:min-h-screen flex justify-center lg:justify-start">
        <div class="hidden w-[32%] bg-gradient-to-tr from-blue-400 to-blue-200 lg:flex lg:flex-col lg:justify-between">
            <div class="h-[17.5%] pl-20 mt-10">
                <Logo></Logo>
            </div>
            <div class="h-[17.5%] pl-20 mt-1">
                <h3 class="text-2xl font-bold text-gray-700">We Offer the Best <span class="block">Products</span></h3>
            </div>
            <div class="h-[65%] overflow-hidden flex justify-center mb-5">
                <img class="h-[90%] w-auto" src="../../public/img/register.png" alt="">
            </div>
        </div>
        <div class="lg:w-[68%] w-full flex flex-col  gap-20 lg:gap-0 lg:justify-between px-6 md:px-10 pt-10 lg:py-12 lg:px-20">
            <div class="lg:h-[15%] ">
                <div class="flex items-center justify-between">
                    <RouterLink :to="{ name: 'home' }">
                        <button class="h-10 w-10  rounded-md border border-gray-600 shadow-sm flex items-center justify-center">
                         <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-current" viewBox="0 0 24 24"><path d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"></path></svg>
                        </button>
                    </RouterLink>
                <div class="flex items-center gap-2 md:gap-10">
                    <p class="font-semibold hidden md:block">Already a member?</p>
                    <RouterLink :to="{name: 'login'}">
                        <SecondaryButton>Sing in</SecondaryButton>
                    </RouterLink>
                </div>
                </div>
            </div>
            <div class="lg:h-[85%] flex justify-center mb-20 lg:mb-0 w-full pt-5 bg-slate-800 lg:bg-slate-900 rounded-lg px-4 py-7 lg:px-0 lg:py-0" >
                <div class="w-full max-w-sm">
                <div>
                    <h3 class="font-bold text-2xl">I'm New Here.</h3>
                    <div class="mt-3 mb-10 flex items-center gap-5">
                        <p class="font-thin">Enter your detail below</p>
                        <spinner v-if="auth.showSpinner" color="blue" size="6" />
                    </div>
                    
                </div>

                <form @submit.prevent="submit" class="lg:pb-8">
                    <div class="relative">
                        <input v-model="firstName.value.value" type="text" id="floating_first_name" :class="{'border-red-500' : firstName.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                        <label for="floating_first_name" :class="{'text-red-500' : firstName.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-800 lg:bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">First name</label>
                    </div>
                    <p class="text-red-500 text-sm font-medium mt-1">{{ firstName.errorMessage.value }}</p>
                    
                    <div class="relative mt-5">
                        <input v-model="lastName.value.value" type="text" id="floating_last_name" :class="{'border-red-500' : lastName.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                        <label for="floating_last_name" :class="{'text-red-500' : lastName.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-800 lg:bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">last name</label>
                    </div>
                    <p class="text-red-500 text-sm font-medium mt-1">{{ lastName.errorMessage.value }}</p>
                    
                    <div class="relative mt-5">
                        <input v-model="email.value.value" type="text" id="floating_email" :class="{'border-red-500' : email.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                        <label for="floating_email" :class="{'text-red-500' : email.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-800 lg:bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">E-mail</label>
                    </div>
                    <p class="text-red-500 text-sm font-medium mt-1">{{ email.errorMessage.value }}</p>
                    
                    <div class="relative mt-5">
                        <input v-model="password.value.value" type="password" id="floating_password" :class="{'border-red-500' : password.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                        <label for="floating_password" :class="{'text-red-500' : password.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-800 lg:bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
                    </div>
                    <p class="text-red-500 text-sm font-medium mt-1">{{ password.errorMessage.value }}</p>

                    <div class="flex flex-col  md:flex-row md:items-center gap-5 md:gap-0 justify-between mt-8">
                        <PrimaryButton type="submit" class="w-full md:w-auto">Create account</PrimaryButton>
                        <RouterLink :to="{name: 'login'}">
                            <p class="text-blue-500">Already a member?</p>
                        </RouterLink>
                       
                    </div>
                </form>

                   <Alert :alertType="'danger'" v-if="auth.hasError">
                        {{ auth.hasError }}
                   </Alert>
                    
             </div>
            </div>
        </div>
    </div>
    
</template>

<!-- <style>
  .flip-image {
    transform: scaleX(-1);
  }
</style> -->
