<script setup>
import PrimaryButton from '../components/PrimaryButton.vue';
import { useForm, useField } from 'vee-validate'
import { Toast, Spinner } from 'flowbite-vue'
import { ref, onMounted } from 'vue'
import { contactSchema } from '../validation/contactSchema'
import Alert from '../components/Alert.vue';
import Testimonials from '../components/Testimonials.vue';

const { handleSubmit, meta, resetForm } = useForm({ validationSchema: contactSchema })
const firstName = useField('firstName');
const lastName = useField('lastName');
const email = useField('email');
const phone = useField('phone');
const message = useField('message');

const showSpinner = ref(false);
const showAlert = ref(false);

const sendMessage = handleSubmit((values) => {
    showSpinner.value = true;
    setTimeout(() => {
        showSpinner.value = false;
        showAlert.value = true;
        resetForm();
    }, 3000);
    setTimeout(() => {
        showAlert.value = false;
    }, 8000);
})

</script>

<template>

   <div class="py-28 md:py-36 px-4 md:px-4 lg:px-0 mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-[1130px] overflow-hidden">
        <div>
            <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current bg-[#FE497B] rounded-full p-1 w-6 md:w-7 text-white" viewBox="0 0 24 24"><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg>
                <h2 class="font-semibold text-sm text-[#FE497B]">Contact</h2>
            </div>
            <h3 class="font-bold text-3xl md:text-4xl mt-3">Contact us</h3>
        </div>
        <div class="mt-10 flex flex-col-reverse lg:flex-row items-start justify-between gap-10 w-full">
            <div class="w-full lg:w-2/3 min-h-[200px]">

                        
       <form @submit.prevent="sendMessage" class="w-full" novalidate>
            <div class="w-full min-h-[200px] bg-slate-800 px-7 py-10 rounded-lg">
                <div class="flex mb-5 items-center gap-5">
                    <h3 class="text-xl">Message details</h3>
                    <spinner v-if="showSpinner" color="blue" size="6" />
                </div>
                
                <div class="flex flex-col md:flex-row items-center justify-between w-full gap-5">
                    <div class="w-full">
                        <div class="relative">
                            <input v-model="firstName.value.value" type="text" id="floating_firstName" :class="{'border-red-500' : firstName.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                            <label for="floating_firstName" :class="{'text-red-500' : firstName.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2  origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">First name</label>
                        </div>
                        <p class="text-red-500 text-sm font-medium mt-1">{{ firstName.errorMessage.value }}</p>
                    </div>
                    <div class="w-full">
                        <div class="relative">
                            <input v-model="lastName.value.value"  type="text" id="floating_lastName" :class="{'border-red-500' : lastName.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                            <label for="floating_lastName" :class="{'text-red-500' : lastName.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2  origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Last name</label>
                        </div>
                        <p class="text-red-500 text-sm font-medium mt-1">{{ lastName.errorMessage.value }}</p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center justify-between w-full gap-5 mt-5">
                    <div class="w-full">
                        <div class="relative">
                            <input v-model="email.value.value" type="email" id="floating_email" :class="{'border-red-500' : email.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                            <label for="floating_email" :class="{'text-red-500' : email.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2  origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">E-mail</label>
                        </div>
                        <p class="text-red-500 text-sm font-medium mt-1">{{ email.errorMessage.value }}</p>
                    </div>
                    <div class="w-full">
                        <div class="relative">
                            <input v-model="phone.value.value"  type="number" min="1" id="floating_phone" :class="{'border-red-500' : phone.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                            <label for="floating_phone" :class="{'text-red-500' : phone.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2  origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Phone</label>
                        </div>
                        <p class="text-red-500 text-sm font-medium mt-1">{{ phone.errorMessage.value }}</p>
                    </div>
                </div>
                <div class="w-full mt-5">
                    <div class="relative">
                        <textarea v-model="message.value.value" id="floating_message" :class="{'border-red-500' : message.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer fixed-height" placeholder=" " ></textarea>
                        <label for="floating_message" :class="{'text-red-500' : message.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2  origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Message</label>
                    </div>
                    <p class="text-red-500 text-sm font-medium mt-1">{{ message.errorMessage.value }}</p>
                </div>
                <PrimaryButton type="submit" class="mt-7">Send Message</PrimaryButton>
            </div>
           
       </form>

            </div>
            <div class="w-full lg:w-1/3 min-h-[200px] rounded-lg border border-gray-700 px-4 py-7">
                <h3 class="font-semibold text-lg">Our store</h3>
                <div class="min-h-[100px] rounded-md bg-slate-50 mt-5 p-3 text-sm text-gray-700 flex flex-col justify-center gap-2">
                    <p><span class="font-bold">Support:</span> 685 Market Street, Veracruz, Mx 234456, Mexico Mexico.</p>
                    <p><span class="font-bold">Phone:</span> +173 456 7890</p>
                    <p><span class="font-bold">Email:</span> eguitar@gmail.com</p>
                </div>
                <div class="min-h-[100px] rounded-md bg-slate-50 mt-5 p-3 text-sm text-gray-700 flex flex-col justify-center gap-2">
                    <p><span class="font-bold">Opening Hours:</span></p>
                    <p>Monday to Saturday: 9am - 10pm</p>
                    <p>Sundays: 10am - 6pm</p>
                </div>

            </div>
        </div>
       
        <Alert :alertType="'success'" v-if="showAlert">
                <span>Message sent succesfully</span>
        </Alert> 

        <Testimonials class="overflow-hidden"></Testimonials>
    </div>
</template>

<style>
.fixed-height {
    height: 100px; /* Ajusta esto al alto que prefieras */
    resize: none; /* Evita que el textarea se pueda redimensionar */
}
</style>
