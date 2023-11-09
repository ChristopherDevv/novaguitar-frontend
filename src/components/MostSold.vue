<script setup>
import { Rating } from 'flowbite-vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useGuitarStore } from '../stores/guitar'
import { ref, onMounted, computed } from 'vue';
import { wishListStore } from '../stores/wishList'
import { useAuthStore } from '../stores/auth';
import { cartStore } from '../stores/cart'
import Alert from './Alert.vue';
import usePriceFormat from '../composables/priceFormat';

const { formatPrice } = usePriceFormat()
const router = useRouter();
const guitar = useGuitarStore();
const auth = useAuthStore();
const wish = wishListStore();
const cart = cartStore();

const guitars = ref([]);
onMounted( async() => {
    guitars.value = await guitar.indexGuitar();
})

const soldGuitars = computed(() => {
    return guitars.value.slice(0, 4);
})

const addToCart = (guitar) => {
    if(auth.isAuth){
        cart.addItem(guitar)
    }else {
        router.push({name: 'login'})
    }
}

</script>

<template>
    <div class="px-4 md:px-4 lg:px-0 mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-[1130px]">
        <div >
            <div class="flex items-center gap-2 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current bg-[#FE497B] rounded-full p-1 w-6 md:w-7 text-white" viewBox="0 0 24 24"><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg>
                <h2 class="font-semibold text-sm text-[#FE497B]">Most sold</h2>
            </div>
            <h3 class="font-bold text-3xl md:text-4xl leading-normal mt-3 text-center">Most Sold in eGuitar Store</h3>
        </div>
        <div class="my-10">
            <div  class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 w-full">
                <div  v-for="guitar in soldGuitars" :key="guitar.id" data-aos="fade-right">
                <div class="duration-500 hover:shadow-xl transition-all w-full rounded-lg bg-slate-800 shadow-md min-h-[150px] px-3 py-2 md:px-5 md:py-5 flex items-center justify-between gap-5">
                    <div class="w-2/5 p-2 rounded-md bg-gradient-to-tr from-slate-800 to-slate-600 flex items-center justify-center relative">
                        <img class="w-[60%] md:w-[40%] transform rotate-[20deg] inline" :src="guitar.image_url" :alt="'image'+guitar.full_name">
                        <div class="p-1 bg-green-400 h-8 w-8 font-bold rounded-full text-white absolute top-[-6px] border-4 border-slate-800 left-[-6px] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-8" viewBox="0 0 24 24"><path d="M5 12H4v8a2 2 0 0 0 2 2h5V12H5zm13 0h-5v10h5a2 2 0 0 0 2-2v-8h-2zm.791-5A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H2v4h9V9h2v2h9V7h-3.209zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM15.5 4c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.477c.51-1.576 1.251-3 1.977-3z"></path></svg>
                        </div>
                    </div>
                    <div class="w-2/5 flex flex-col gap-3">
                        <Rating :rating="guitar.rating">
                            <template #besideText>
                                <p class="hidden md:block text-sm font-medium text-gray-400 ml-2">{{ guitar.rating }} of 5</p>
                              </template>
                          </Rating>
                        <RouterLink :to="{name: 'guitar', params: {id: guitar.id}}">
                            <div class="md:font-semibold hover:text-blue-500 inline-block">{{ guitar.full_name }}</div>
                        </RouterLink>
                        <div class="flex items-center gap-2 md:gap-5">
                            <p class="md:text-xl font-bold">{{ formatPrice(guitar.actual_price) }}</p>
                            <p class="md:text-xl font-bold text-gray-500 line-through">{{ formatPrice(guitar.price) }}</p>
                        </div>
                    </div>
                    <div class="w-1/5 flex flex-col items-center gap-3">
                        <button @click="addToCart(guitar)">
                            <div class="bg-[#FE497B] text-white p-2 rounded-lg  inline-flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-6" viewBox="0 0 24 24"><path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="16.5" cy="19.5" r="1.5"></circle></svg>
                            </div>
                        </button>
                        <button @click="wish.addWish(guitar)">
                            <div class="hover:bg-[#FE497B] hover:text-white duration-500 transition-colors p-2 rounded-lg border border-gray-500 inline-flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-6" viewBox="0 0 24 24"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            </div>
        </div>

        <Alert :alertType="'success'" v-if="wish.hasSuccess">
                {{ wish.hasSuccess }}
        </Alert>
        <Alert :alertType="'success'" v-if="cart.hasSuccess">
                {{ cart.hasSuccess }}
        </Alert>
    </div>
</template>

