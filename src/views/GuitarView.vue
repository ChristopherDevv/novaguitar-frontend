<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGuitarStore } from '../stores/guitar';
import { wishListStore } from '../stores/wishList';
import { cartStore } from '../stores/cart';
import OfertButton from '../components/OfertButton.vue';
import { Rating } from 'flowbite-vue'
import usePriceFormat from '../composables/priceFormat';
import SecondaryButton from '../components/SecondaryButton.vue';
import CarouselProducts from '../components/CarouselProducts.vue';
import Alert from '../components/Alert.vue';
import { useAuthStore } from '../stores/auth';


const auth = useAuthStore();
const route = useRoute();
const router = useRouter();
const guitar = useGuitarStore();
const wish = wishListStore();
const cart = cartStore();
const dataGuitar = ref({});
const { formatPrice } = usePriceFormat()

onMounted(async() => {
    dataGuitar.value = await guitar.showGuitar(route.params.id)
})

watch(() => route.params.id, async (newId) => {
    dataGuitar.value = await guitar.showGuitar(newId)
});

const addToCart = (guitar) => {
    if(auth.isAuth){
        cart.addItem(guitar)
    }else {
        router.push({name: 'login'})
    }
}
</script>

<template>
     <div class="my-28 md:mt-36 mb-0 px-4 md:px-4 lg:px-0 mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-[1130px]">
        <div v-if="!dataGuitar.full_name" role="status" class="w-full animate-pulse">
            <div class="w-full flex flex-col md:flex-row items-start justify-between gap-6 md:gap-20">
                <div class="w-full md:w-1/3 h-60 rounded-lg bg-gray-700"></div>
                <div class="w-full md:w-2/3 md:h-[360px] rounded-lg bg-gray-700 p-5 md:p-10">
                    <div class="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-10">
                        <div class="hidden md:block w-full md:w-80 h-40 rounded-lg bg-gray-600"></div>
                        <div class="w-full md:w-40 h-20 md:h-32 rounded-lg bg-gray-600"></div>
                    </div>
                    <div class="w-[70%] lg:w-[500px] h-10 rounded-lg bg-gray-600 mt-5"></div>
                    <div class="w-[70%] lg:w-[500px] h-10 rounded-lg bg-gray-600 mt-5"></div>
                </div>
            </div>
        </div>
        <div v-else class="w-full">
            <div class="w-full flex flex-col md:flex-row items-start justify-between gap-10 md:gap-10 xl:gap-20">
            <div class="w-full md:w-1/3">
                <div class="bg-slate-200 w-full rounded-lg relative flex items-center justify-center p-5">
                    <img class="w-36 md:w-40" :src="dataGuitar.image_url" :alt="'image'+dataGuitar.full_name">
                    <div class="absolute top-0 right-10 md:right-[-15px] mt-7">
                        <OfertButton class="text-xs">{{ dataGuitar.discount }}% off</OfertButton>
                    </div>
                </div>
            </div>
            <div class="md:w-2/3">
                <div class="px-4 py-9 md:px-10 md:py-10 bg-slate-800 rounded-lg">
                   <div class="flex flex-col md:flex-row items-start justify-between gap-7">
                        <div class="md:w-2/3">
                            <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 bg-white rounded-full p-1 fill-current text-[#FE497B]" viewBox="0 0 24 24"><path d="M6 18.573c2.206 0 4-1.794 4-4V4.428L19 7.7v7.43a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V7a.998.998 0 0 0-.658-.939l-11-4A.999.999 0 0 0 8 3v8.13a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4z"></path></svg>
                                <h3>{{ dataGuitar.category }}</h3>
                            </div>
                            <h2 class="font-bold text-3xl md:text-[43px] mt-2">{{ dataGuitar.full_name }}</h2>  
                            <div class="flex items-center gap-7 md:gap-5 mt-5 md:mt-4">
                                <p class="text-2xl font-semibold">{{ formatPrice(dataGuitar.actual_price) }}</p>
                                <p class="text-2xl font-semibold text-gray-500 line-through">{{ formatPrice(dataGuitar.price) }}</p>
                            </div>
                            <div class="mt-5 md:mt-4">
                                <Rating :rating="guitar.rating">
                                    <template #besideText>
                                        <p class="hidden md:block text-sm font-medium text-gray-400 ml-2">{{ dataGuitar.rating }} of 5</p>
                                    </template>
                                </Rating>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 flex flex-col gap-2">
                            <div class="flex items-center pl-3 gap-3 text-blue-200 bg-slate-700 rounded p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 fill-current" viewBox="0 0 24 24"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                                <p>In stock</p>
                            </div>
                            <div class="flex items-center pl-3 gap-3 text-blue-200 bg-slate-700 rounded p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 fill-current" viewBox="0 0 24 24"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                                <p>Free delivery</p>
                            </div>
                            <div class="flex items-center pl-3 gap-3 text-blue-200 bg-slate-700 rounded p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 fill-current" viewBox="0 0 24 24"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                                <p>Sales {{ dataGuitar.discount }}% Off</p>
                            </div>
                            
                        </div>
                   </div>

                   <div class="mt-5 text-gray-400">
                        <p>{{ dataGuitar.description }}</p>
                   </div>
                   <div class="flex items-center gap-5 mt-5 md:mt-3">
                        <div class="flex items-center gap-2">
                            <div :class="`h-4 w-4 rounded-sm bg-${dataGuitar.color}-500`"></div>
                            <div :class="`h-4 w-4 rounded-sm bg-${dataGuitar.color}-400`"></div>
                            <div :class="`h-4 w-4 rounded-sm bg-${dataGuitar.color}-300`"></div>
                        </div>
                        <div class="flex items-center gap-2">
                            <p>Stock:</p>
                            <p>{{ dataGuitar.stock }}</p>
                        </div>
                   </div>

                   <div class="mt-5 flex items-center gap-5">
                        <div class="">
                            <button @click="wish.addWish(dataGuitar)">
                                <div class="hover:bg-[#FE497B] hover:text-white duration-500 transition-colors p-2 rounded-lg border border-gray-500 inline-flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-7" viewBox="0 0 24 24"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                                </div>
                            </button>
                        </div>
                        <div class="w-full md:w-auto">
                            <SecondaryButton @click="addToCart(dataGuitar)" class="w-full md:w-auto">Add to cart</SecondaryButton>
                        </div>
                   </div>
                   
                </div>
            </div>
            </div>

            <div class="mt-10 flex flex-col md:flex-row items-start justify-between gap-10 w-full">
                <div class="w-full bg-slate-800 p-5 rounded-lg">
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 fill-current text-gray-200" viewBox="0 0 24 24"><path d="M21.993 7.95a.96.96 0 0 0-.029-.214c-.007-.025-.021-.049-.03-.074-.021-.057-.04-.113-.07-.165-.016-.027-.038-.049-.057-.075-.032-.045-.063-.091-.102-.13-.023-.022-.053-.04-.078-.061-.039-.032-.075-.067-.12-.094-.004-.003-.009-.003-.014-.006l-.008-.006-8.979-4.99a1.002 1.002 0 0 0-.97-.001l-9.021 4.99c-.003.003-.006.007-.011.01l-.01.004c-.035.02-.061.049-.094.073-.036.027-.074.051-.106.082-.03.031-.053.067-.079.102-.027.035-.057.066-.079.104-.026.043-.04.092-.059.139-.014.033-.032.064-.041.1a.975.975 0 0 0-.029.21c-.001.017-.007.032-.007.05V16c0 .363.197.698.515.874l8.978 4.987.001.001.002.001.02.011c.043.024.09.037.135.054.032.013.063.03.097.039a1.013 1.013 0 0 0 .506 0c.033-.009.064-.026.097-.039.045-.017.092-.029.135-.054l.02-.011.002-.001.001-.001 8.978-4.987c.316-.176.513-.511.513-.874V7.998c0-.017-.006-.031-.007-.048zm-10.021 3.922L5.058 8.005 7.82 6.477l6.834 3.905-2.682 1.49zm.048-7.719L18.941 8l-2.244 1.247-6.83-3.903 2.153-1.191zM13 19.301l.002-5.679L16 11.944V15l2-1v-3.175l2-1.119v5.705l-7 3.89z"></path></svg>
                        <h3 class="text-xl font-bold">Specifications</h3>
                    </div>
                    <p class="text-gray-400 mt-5">{{ dataGuitar.specifications }}</p>
                </div>
                <div class="w-full bg-slate-800 p-5 rounded-lg">
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 fill-current text-gray-200" viewBox="0 0 24 24"><path d="M20 3H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-5 5h-2V6h2zm4 0h-2V6h2zm1 5H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-5 5h-2v-2h2zm4 0h-2v-2h2z"></path></svg>
                        <h3 class="text-xl font-bold">Care & Maintenance</h3>
                    </div>
                    <p class="text-gray-400 mt-5">{{ dataGuitar.care_maintenance }}</p>
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
    <CarouselProducts class="overflow-hidden"></CarouselProducts>
</template>

