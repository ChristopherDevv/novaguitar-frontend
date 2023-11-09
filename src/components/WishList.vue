<script setup>
import { wishListStore } from '../stores/wishList';
import { Rating } from 'flowbite-vue'
import { computed } from 'vue';
import usePriceFormat from '../composables/priceFormat';

const { formatPrice } = usePriceFormat()

const wish = wishListStore();
const guitarList = wish.listWishes;

const increaseQuantity = (id) => {
    const guitar = wish.wishes.findIndex(item => item.id === id);
    if( wish.wishes[guitar].amount >= 5){
        return
    }
     wish.wishes[guitar].amount++;
}

const decreaseQuantity = (id) => {
    const guitar = wish.wishes.findIndex(item => item.id === id);
    if( wish.wishes[guitar].amount <= 1){
        return
    }
    wish.wishes[guitar].amount--;
}

const deleteGuitar = (id) => {
   wish.deleteItem(id);
}

</script>

<template>
    <div class="w-full h-full">
        <div class="min-h-[50px]  pt-5 pb-10 border-t border-t-gray-200">
            <ul class="flex flex-col gap-3">
                <li v-for="guitar in guitarList" :key="guitar.id">
                    <div class="duration-500 shadow-md md:shadow-[0] hover:shadow-lg transition-all w-full h-full rounded-lg px-3 py-2 md:px-3 md:py-3 flex items-center justify-between gap-4">
                        <div class="w-1/5 h-full p-2 rounded-md bg-slate-300 flex items-center justify-center relative">
                            <img class="w-[90%] md:w-[90%] inline" :src="guitar.image_url" :alt="'image'+guitar.full_name">
                            <button @click="deleteGuitar(guitar.id)">
                                <div class="p-1 bg-[#FE497B] hover:bg-[#f75784] transition duration-300 h-7 w-7 font-bold rounded-full text-white absolute top-[-6px] border-2 border-white left-[-6px] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-7" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg>
                                </div>
                            </button>
                        </div>
                        <div class="w-2/5 flex items-start flex-col gap-1">
                            <div class="scale-75 ml-[-15px]"><Rating :rating="guitar.rating"></Rating></div>
                            <div class="md:font-semibold inline-block text-sm">{{ guitar.full_name }}</div>
                            <div class="flex items-center gap-2 md:gap-2">
                                <p class="md:text-sm font-bold ">{{ formatPrice( guitar.actual_price) }}</p>
                                <p class="md:text-sm font-bold text-gray-300 line-through">{{ formatPrice(guitar.price) }}</p>
                            </div>
                        </div>
                        <div class="w-2/5 flex justify-around items-center md:text-lg font-bold gap-2 text-gray-400">
                            <button @click="decreaseQuantity(guitar.id)" class="bg-slate-100 hover:bg-slate-200 transition duration-300 h-8 w-8 rounded-full flex items-center justify-center">
                                <span>-</span>
                            </button>
                            <p class="text-gray-500">{{ guitar.amount }}</p>
                            <button @click="increaseQuantity(guitar.id)" class="bg-slate-100 hover:bg-slate-200 transition duration-300 h-8 w-8 rounded-full flex items-center justify-center">
                                <span>+</span>
                            </button>
                        </div>
                    </div>              
                </li>
            </ul>
            <div v-if="guitarList.length <= 0" class="flex flex-col gap-5 items-center justify-center mt-32 ">
                <p class="text-xl opacity-70 text-center font-bold">No wish list yet</p>
                <img class="w-28 h-auto" src="/img/emty-cart.png" alt="shopping-cart"/>
            </div>
        </div> 
       
    </div>
</template>


