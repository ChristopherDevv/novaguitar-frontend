<script setup>
import TableCart from "../../components/TableCart.vue";
import { cartStore } from '../../stores/cart'
import { cartSchema } from '../../validation/cartSchema';
import PrimaryButton from "../../components/PrimaryButton.vue";
import { useForm, useField } from 'vee-validate'
import Modal from '../../components/Modal.vue';
import ModalGuitar from "../../components/ModalGuitar.vue";
import { ref, onMounted } from 'vue'
import usePriceFormat from "../../composables/priceFormat";

const { formatPrice } = usePriceFormat()

const cart = cartStore();
const items = cart.cartList;
const datails = ref({});

const { handleSubmit, meta, resetForm } = useForm({ validationSchema: cartSchema })
const firstName = useField('firstName');
const lastName = useField('lastName');
const email = useField('email');
const address = useField('address');
const phone = useField('phone');
const submitTry = handleSubmit(() => {});

const payGuitar = handleSubmit((values) => {
    datails.value = { ...values, modal: true };
    resetForm();
})

</script>

<template>
    <div class="my-28 md:my-36 px-4 md:px-4 lg:px-0 mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-[1130px]">
       <div class="px-7 pt-7 pb-3 rounded-xl bg-slate-800">
            <TableCart></TableCart>
       </div>
        
       <form @submit.prevent="submitTry" class="mt-10 flex flex-col lg:flex-row items-start justify-between gap-10 min-h-[200px] w-full" novalidate>
            <div class="w-full lg:w-1/2 min-h-[200px] bg-slate-800 px-7 py-10 rounded-lg">
                <h3 class="mb-5 text-xl">Billing details</h3>
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
                            <input v-model="address.value.value"  type="text" id="floating_address" :class="{'border-red-500' : address.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                            <label for="floating_address" :class="{'text-red-500' : address.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2  origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Address</label>
                        </div>
                        <p class="text-red-500 text-sm font-medium mt-1">{{ address.errorMessage.value }}</p>
                    </div>
                </div>
                <div class="w-full mt-5">
                    <div class="relative">
                        <input v-model="phone.value.value"  type="number" min="1" id="floating_phone" :class="{'border-red-500' : phone.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                        <label for="floating_phone" :class="{'text-red-500' : phone.errorMessage.value}" class="absolute text-sm text-gray-400 duration-200 transform -translate-y-4 scale-75 top-2  origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Phone</label>
                    </div>
                    <p class="text-red-500 text-sm font-medium mt-1">{{ phone.errorMessage.value }}</p>
                </div>
            </div>
            <div class="w-full lg:w-1/2 min-h-[200px] bg-slate-800 shadow-2xl shadow-neutral-950 px-4 py-7 md:p-7 rounded-lg">
                <div class="bg-white min-h-[200px] rounded w-full p-5 text-gray-600">
                    <div class="w-full hidden md:block">
                        <table class="table-auto w-full text-left whitespace-no-wrap hidden md:table">
                        <thead>
                            <tr>
                                <th class="px-4 py-2">Product</th>
                                <th class="px-4 py-2">Quantity</th>
                                <th class="px-4 py-2">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody v-for="item in items" :key="item.id">
                            <tr class="border-y">
                                <td class=" px-4 py-2">{{ item.full_name }}</td>
                                <td class=" px-4 py-2">{{ item.amount }}</td>
                                <td class=" px-4 py-2"><span class="text-[10px] p-1 font-medium rounded-sm bg-neutral-950 text-cyan-300">USD</span> {{formatPrice(item.price * item.amount) }}</td> 
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div class="overflow-x-auto md:hidden">
                        <div class="inline-block min-w-full align-middle sm:table">
                            <div class="thead">
                            <div class="pb-3">
                                <h3 class="font-bold text-lg">Order summary</h3>
                            </div>
                            </div>
                            <div class="tbody" v-for="item in items" :key="item.id">
                            <div class="tr border-y">
                                <div class="td py-2">Name: {{ item.full_name }}</div>
                                <div class="td py-2">Quantity: {{ item.amount }}</div>
                                <div class="td py-2">Subtotal: <span class="text-[10px] p-1 font-medium rounded-sm bg-slate-900 text-cyan-300">USD</span> {{formatPrice(item.price * item.amount) }}</div> 
                            </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="items.length <= 0" class="flex flex-col gap-5 items-center justify-center mt-8 mb-3">
                        <p class="text-xl opacity-70 text-center font-bold">No items yet</p>
                        <img class="w-20 md:w-28 h-auto" src="/img/emty-cart.png" alt="shopping-cart"/>
                    </div>

                </div>
                <div class="text-gray-400 font-bold flex items-center justify-end gap-5 md:gap-10 text-sm mt-5">
                    <p>Subtotal:</p>
                    <p>{{ formatPrice(cart.totalCart) }}</p>
                </div>
                <div class="text-white font-bold flex items-center justify-end gap-5 md:gap-10 text-xl mt-2">
                    <p>Total:</p>
                    <p>{{ formatPrice(cart.totalCart) }}</p>
                </div>
                <div class="w-full mt-5 flex justify-between items-center gap-3 md:gap-5">
                    <div class="flex-1">
                        <Modal :onAccept="cart.emptyCart">
                            <template v-slot:button >
                                <button type="button" class="w-full flex justify-center rounded-md transition duration-300 bg-red-200 px-8 py-3 text-sm font-medium text-red-900 hover:bg-red-300 focus:outline-none" >
                                    Emty cart
                                </button>
                            </template>
                            <template #title>Emty cart</template>
                            <template #message>Are you sure to emty cart?</template>
                        </Modal>        
                    </div> 
                    <div class="flex-1">
                        <div v-if="items.length <= 0">
                            <div class="w-full flex justify-center rounded-md opacity-30 cursor-not-allowed bg-blue-200 px-5 py-3 text-sm font-medium text-blue-900 focus:outline-none">
                                Process to buy
                            </div>
                        </div>
                        <div v-else>
                            <Modal v-if="meta.valid" :onAccept="payGuitar">
                                <template v-slot:button>
                                    <button type="submit" class="w-full flex justify-center rounded-md transition duration-300 bg-blue-200 px-5 py-3 text-sm font-medium text-blue-900 hover:bg-blue-300 focus:outline-none">
                                        Process to buy
                                    </button>
                                </template>
                                <template #title>Process to buy</template>
                                <template #message>Are you sure you are going through the payment process?</template>
                            </Modal>
                            <button v-else type="submit" class="w-full flex justify-center rounded-md transition duration-300 bg-blue-200 px-5 py-3 text-sm font-medium text-blue-900 hover:bg-blue-300 focus:outline-none">
                                Process to buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
       </form>
       <ModalGuitar :datailsCart="datails"></ModalGuitar>
    </div>
</template>



