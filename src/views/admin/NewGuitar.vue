<script setup>
import { useAuthStore } from '../../stores/auth'
import { useGuitarStore } from '../../stores/guitar'
import PrimaryButton from '../../components/PrimaryButton.vue';
import Alert from '../../components/Alert.vue'
import Modal from '../../components/Modal.vue';
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router';
import { Toast, Spinner } from 'flowbite-vue'
import { useForm, useField } from 'vee-validate'
import { guitarSchema } from '../../validation/guitarSchema';

const auth = useAuthStore();
const guitar = useGuitarStore();

const { handleSubmit, meta } = useForm({ validationSchema: guitarSchema })
const name = useField('name');
const fullName = useField('fullName');
const category = useField('category');
const color = useField('color');
const description = useField('description');
const specifications = useField('specifications');
const care_maintenance = useField('care_maintenance');
const price = useField('price');
const rating = useField('rating');
const discount = useField('discount');
const stock = useField('stock');
const image_url = useField('image_url');
const submitTry = handleSubmit(() => {});

const addItem = handleSubmit((values) => {
    guitar.createGuitar(values);
})
let categoryOptions = ['Stratocaster guitar', 'Les Paul guitar', 'Telecaster guitar'];
let colorOptions = ['indigo', 'blue', 'cyan', 'orange', 'red', 'gray'];

let file = ref(null);
const handleFileUpload = (event) => {
  file.value = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    image_url.value.value = reader.result;
  };
  reader.readAsDataURL(file.value);
};
/* Cuando llamas a este método, el FileReader comienza a leer el contenido del archivo especificado (file.value) y lo convierte 
en una cadena de datos codificada en Base64. El evento onloadend se dispara cuando se completa la lectura del archivo. 
En este punto, reader.result contiene la cadena Base64 que representa el archivo, y esta cadena se asigna a image_url.value */

</script>

<template>
   <div v-if="auth.isAuth" class="my-28 md:my-36 px-4 md:px-4 lg:px-0 mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-[1130px]">
        <div class="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-0">
            <div class="w-full lg:w-1/3 flex flex-col items-center justify-center lg:items-start lg:justify-start">
                <img class="w-20 h-auto" src="https://img.icons8.com/3d-fluency/94/sell-stock.png" alt="sell-stock"/>
                <h2 class="mt-1 font-bold text-2xl">Add new article to store</h2>
                <div class="flex items-center gap-5 mt-1">
                    <p class="text-gray-400 font-medium">Article management</p>
                    <spinner v-if="guitar.showSpinner" color="blue" size="6" />
                </div>
                
                <div class="w-full md:max-w-xs px-8 py-5 bg-slate-800 rounded-lg mt-5">
                    <RouterLink :to="{name: 'admin-guitar'}" exact-active-class="text-green-400">
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-current text-green-400" viewBox="0 0 24 24"><path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path></svg>
                            <p class="hover:text-green-400 transition duration-300">Administration</p>
                        </div>
                    </RouterLink>
                    <RouterLink :to="{name: 'new-guitar'}" exact-active-class="text-blue-500">
                        <div class="flex items-center gap-3 mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-current text-blue-600" viewBox="0 0 24 24"><path d="M17.895 3.553A1.001 1.001 0 0 0 17 3H7c-.379 0-.725.214-.895.553l-4 8a1 1 0 0 0 0 .895l4 8c.17.338.516.552.895.552h10c.379 0 .725-.214.895-.553l4-8a1 1 0 0 0 0-.895l-4-7.999zM19.382 11h-7.764l-3-6h7.764l3 6zM4.118 12 7 6.236 9.882 12 7 17.764 4.118 12zm12.264 7H8.618l3-6h7.764l-3 6z"></path></svg>
                            <p class="hover:text-blue-600 transition duration-300">Add item</p>
                        </div>
                    </RouterLink>
                        
                </div>
            </div>
            <div class="w-full lg:w-2/3 min-h-[200px]">
                <div class="w-full bg-slate-800 px-4 py-8 md:p-8 rounded-lg"> 
                    <form @submit.prevent="submitTry" class="w-full" novalidate>
                        <div class="flex flex-col md:flex-row items-center justify-between w-full gap-5">
                            <div class="w-full">
                                <div class="relative">
                                    <input v-model="name.value.value" type="text" id="floating_name" :class="{'border-red-500' : name.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                                    <label for="floating_name" :class="{'text-red-500' : name.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2  origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>
                                </div>
                                <p class="text-red-500 text-sm font-medium mt-1">{{ name.errorMessage.value }}</p>
                            </div>
                            <div class="w-full">
                                <div class="relative">
                                    <input v-model="fullName.value.value"  type="text" id="floating_full_name" :class="{'border-red-500' : fullName.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                                    <label for="floating_full_name" :class="{'text-red-500' : fullName.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2  origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Full name</label>
                                </div>
                                <p class="text-red-500 text-sm font-medium mt-1">{{ fullName.errorMessage.value }}</p>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row items-center justify-between w-full gap-5 mt-5">
                            <div class="w-full">
                                <vue-select v-model="category.value.value" placeholder="Select a category" :options="categoryOptions" close-on-select :class="{'border-red-500' : category.errorMessage.value}" class="py-3 px-2 w-full border border-gray-600 rounded-lg"></vue-select>
                                <p class="text-red-500 text-sm font-medium mt-1">{{ category.errorMessage.value }}</p>
                            </div>
                            <div class="w-full">
                                <vue-select v-model="color.value.value" placeholder="Select a color" :options="colorOptions" close-on-select :class="{'border-red-500' : color.errorMessage.value}" class="py-3 px-2 w-full border border-gray-600 rounded-lg"></vue-select>
                                <p class="text-red-500 text-sm font-medium mt-1">{{ color.errorMessage.value }}</p>
                            </div>
                        </div>
                        <div class="w-full mt-5">
                            <div class="relative">
                                <textarea v-model="description.value.value" id="floating_description" :class="{'border-red-500' : description.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer fixed-height" placeholder=" " ></textarea>
                                <label for="floating_description" :class="{'text-red-500' : description.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2  origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Description</label>
                            </div>
                            <p class="text-red-500 text-sm font-medium mt-1">{{ description.errorMessage.value }}</p>
                        </div>
                        <div class="flex flex-col md:flex-row items-center justify-between w-full gap-5 mt-5">
                            <div class="w-full">
                                <div class="relative">
                                    <textarea v-model="specifications.value.value" id="floating_specifications" :class="{'border-red-500' : specifications.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer fixed-height" placeholder=" " ></textarea>
                                    <label for="floating_specifications" :class="{'text-red-500' : specifications.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2  origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Specifications</label>
                                </div>
                                <p class="text-red-500 text-sm font-medium mt-1">{{ specifications.errorMessage.value }}</p>
                            </div>
                            <div class="w-full">
                                <div class="relative">
                                    <textarea v-model="care_maintenance.value.value" id="floating_maintenance" :class="{'border-red-500' : care_maintenance.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer fixed-height" placeholder=" " ></textarea>
                                    <label for="floating_maintenance" :class="{'text-red-500' : care_maintenance.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2  origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Care maintenance</label>
                                </div>
                                <p class="text-red-500 text-sm font-medium mt-1">{{ care_maintenance.errorMessage.value }}</p>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row items-center justify-between w-full gap-5 mt-5">
                            <div class="w-full">
                                <div class="relative">
                                    <input v-model="price.value.value"  type="number" id="floating_price" :class="{'border-red-500' : price.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                                    <label for="floating_price" :class="{'text-red-500' : price.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2  origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">price</label>
                                </div>
                                <p class="text-red-500 text-sm font-medium mt-1">{{ price.errorMessage.value }}</p>
                            </div>
                            <div class="w-full">
                                <div class="relative">
                                    <input v-model="rating.value.value"  type="number" id="floating_rating" :class="{'border-red-500' : rating.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                                    <label for="floating_rating" :class="{'text-red-500' : rating.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2  origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Rating</label>
                                </div>
                                <p class="text-red-500 text-sm font-medium mt-1">{{ rating.errorMessage.value }}</p>
                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row items-center justify-between w-full gap-5 mt-5">
                            <div class="w-full">
                                <div class="relative">
                                    <input v-model="discount.value.value"  type="number" id="floating_discount" :class="{'border-red-500' : discount.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                                    <label for="floating_discount" :class="{'text-red-500' : discount.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2  origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Discount</label>
                                </div>
                                <p class="text-red-500 text-sm font-medium mt-1">{{ discount.errorMessage.value }}</p>
                            </div>
                            <div class="w-full">
                                <div class="relative">
                                    <input v-model="stock.value.value"  type="number" id="floating_stock" :class="{'border-red-500' : stock.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                                    <label for="floating_stock" :class="{'text-red-500' : stock.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2  origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Stock</label>
                                </div>
                                <p class="text-red-500 text-sm font-medium mt-1">{{ stock.errorMessage.value }}</p>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row items-center justify-center w-full mt-5">
                            <label for="dropzone-file" class="flex md:gap-5 items-center flex-col md:flex-row justify-center w-full md:h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-bray-800 bg-gray-700 border-gray-600 hover:border-gray-500 hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-400">SVG, PNG or JPG (MAX. 800x400px)</p>
                                </div>
                                <div v-if="image_url.value.value" class="pb-5 md:pb-0">
                                    <img class="w-20 h-auto" :src="image_url.value.value" alt="Imagen seleccionada" />
                                </div>
                                <input @change="handleFileUpload" id="dropzone-file" accept="image/png, image/jpeg, image/svg" type="file" class="hidden" />
                            </label>
                        </div> 
                        <p class="text-red-500 text-sm font-medium mt-1">{{ image_url.errorMessage.value }}</p>
                       

                        <div class="mt-8">
                            <Modal v-if="meta.valid" :onAccept="addItem">
                                <template v-slot:button>
                                    <PrimaryButton type="submit">Add item</PrimaryButton>
                                </template>
                                <template #title>Add new item</template>
                                <template #message>Are you sure to add new item?</template>
                            </Modal>
                            <PrimaryButton v-else type="submit">Add item</PrimaryButton>
                        </div>
                        </form>
                        <Alert :alertType="'danger'" v-if="guitar.hasError">
                                {{ guitar.hasError }}
                        </Alert> 
                    </div>
            </div>
        </div>
    </div>
</template>

<style>
.vue-dropdown-item.highlighted {
    background-color: #1e293b !important;
}
.vue-dropdown-item.selected{
    background-color: #475569 !important;
}
.vue-dropdown{
    border: 1px solid #334155 !important;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3); 
    background: #334155;
    z-index: 10;
}
.vue-dropdown-item{
    padding: 5px 10px !important;
}
.vue-input input{
    font-size: 14px !important;
    line-height: 20px !important;
}
.fixed-height {
    height: 100px; /* Ajusta esto al alto que prefieras */
    resize: none; /* Evita que el textarea se pueda redimensionar */
}
</style>