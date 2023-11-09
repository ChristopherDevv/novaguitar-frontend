<script setup>
import { cartStore } from '../stores/cart'
import usePriceFormat from '../composables/priceFormat';

const { formatPrice } = usePriceFormat()

const cart = cartStore();
const items = cart.cartList;

</script>

<template>
    <div class="overflow-x-auto min-h-[200px]">
        <h3 class="text-xl mb-5 font-semibold">your shopping cart</h3>
        <table class="table-auto w-full mb-10 md:mb-0">
                <thead class="text-left border-t border-b border-gray-500">
                    <tr>
                        <th class="px-4 py-5 font-normal text-sm text-gray-400 w-2/5">
                            <div class="inline-flex items-center gap-2 font-bold">
                                <span>Product</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-cyan-400 w-5" viewBox="0 0 24 24"><path d="M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.5l3.5 4 3.5-4H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM9 12a2 2 0 1 1 .001-4.001A2 2 0 0 1 9 12zm6 0a2 2 0 1 1 .001-4.001A2 2 0 0 1 15 12z"></path></svg>
                            </div>
                        </th>
                        <th class="px-4 py-5 font-normal text-sm text-gray-400 w-1/5">
                            <div class="inline-flex items-center gap-2 font-bold">
                                <span>Price</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-green-400 w-5" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 14.915V18h-2v-1.08c-2.339-.367-3-2.002-3-2.92h2c.011.143.159 1 2 1 1.38 0 2-.585 2-1 0-.324 0-1-2-1-3.48 0-4-1.88-4-3 0-1.288 1.029-2.584 3-2.915V6.012h2v1.109c1.734.41 2.4 1.853 2.4 2.879h-1l-1 .018C13.386 9.638 13.185 9 12 9c-1.299 0-2 .516-2 1 0 .374 0 1 2 1 3.48 0 4 1.88 4 3 0 1.288-1.029 2.584-3 2.915z"></path></svg>
                            </div>
                        </th>
                        <th class="px-4 py-5 font-normal text-sm text-gray-400 w-1/5">
                            <div class="inline-flex items-center gap-2 font-bold">
                                <span>Quantity</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-orange-300 w-5" viewBox="0 0 24 24"><path d="M2 3h20v4H2zm17 5H3v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8h-2zm-3 6H8v-2h8v2z"></path></svg>
                            </div>
                        </th>
                        <th class="px-4 py-5 font-normal text-sm text-gray-400 w-1/5">
                            <div class="inline-flex items-center gap-2 font-bold">
                                <span>Subtotal</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-pink-400 w-5" viewBox="0 0 24 24"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7.5 12a2.5 2.5 0 1 1 0-5 2.47 2.47 0 0 1 1.5.512c-.604.456-1 1.173-1 1.988s.396 1.532 1 1.988a2.47 2.47 0 0 1-1.5.512zm4 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody v-for="item in items" :key="item.id">
                    <tr>
                    <td class="px-4 py-4">
                        <div class="flex items-center gap-3 md:gap-5">
                            <div class="w-1/2 h-auto p-2 rounded-md bg-slate-700 flex items-center justify-center relative">
                                <img class="w-10 inline" :src="item.image_url" :alt="'image'+item.full_name">
                                <button @click="cart.deleteItem(item.id)">
                                    <div class="p-1 bg-[#FE497B] hover:bg-[#f75784] transition duration-300 h-6 md:h-8 w-6 md:w-8 font-bold rounded-full text-white absolute top-[-6px] md:border-4 md:border-slate-800 left-[-6px] flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-6 md:w-8" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg>
                                    </div>
                                </button>
                            </div>
                            <div class="w-1/2">
                                <p>{{ item.full_name }}</p>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-4"><span class="text-[10px] p-1 font-medium rounded-sm bg-neutral-950 text-cyan-300">USD</span> {{ item.price }}</td> 
                    <td class="px-4 py-4">
                        <div class="flex justify-start items-center md:text-lg font-bold gap-7 text-gray-200">
                            <button @click="cart.decreaseQuantity(item.id)" class="bg-slate-700 hover:bg-slate-900 transition duration-300 h-8 w-8 rounded-full flex items-center justify-center">
                                <span>-</span>
                            </button>
                            <p class="text-gray-200">{{ item.amount }}</p>
                            <button @click="cart.increaseQuantity(item.id)" class="bg-slate-700 hover:bg-slate-900 transition duration-300 h-8 w-8 rounded-full flex items-center justify-center">
                                <span>+</span>
                            </button>
                        </div>
                    </td> 
                    <td class="px-4 py-4">
                        <p>{{ formatPrice(item.price * item.amount) }}</p>
                    </td>
                    </tr>
                </tbody>
        </table>
        <div v-if="items.length <= 0" class="flex flex-col gap-5 items-center justify-center mt-8 mb-3">
            <p class="text-xl opacity-70 text-center font-bold">No items yet</p>
            <img class="w-24 md:w-36 h-auto" src="/img/emty-cart.png" alt="shopping-cart"/>
        </div>
    </div>
</template>

<style scoped>
/* Ancho del scrollbar */
::-webkit-scrollbar {
  width: 5px !important;
}

/* Track del scrollbar */
::-webkit-scrollbar-track {
  background: #020617;

}

/* Handle del scrollbar */
::-webkit-scrollbar-thumb {
  background: #2a374d;
}

/* Handle del scrollbar al hacer hover */
::-webkit-scrollbar-thumb:hover {
  background: #0f172a;
}

</style>
