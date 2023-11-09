<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { RouterLink, useRouter } from 'vue-router';
import { Rating } from 'flowbite-vue'
import OfertButton from './OfertButton.vue';
import { useGuitarStore } from '../stores/guitar'
import { wishListStore } from '../stores/wishList'
import { cartStore } from '../stores/cart';
import { useAuthStore } from '../stores/auth';
import { ref, onMounted, computed } from 'vue';


export default {
  name: 'App',
  name: 'WrapAround',
  components: {
    Rating,
    OfertButton,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  }, setup() {
    const auth = useAuthStore();
    const guitar = useGuitarStore();
    const guitars = ref([]);
    const wish = wishListStore();
    const cart = cartStore();
    const router = useRouter();
    
    onMounted( async () => {
      guitars.value = await guitar.indexGuitar();
    })

    const firstGuitars = computed(() => {
      return guitars.value.slice(0, 6);
    });

    const addToCart = (guitar) => {
        if(auth.isAuth){
          cart.addItem(guitar)
        }else {
          router.push({name: 'login'})
        }
    }
    return {
      addToCart,
      firstGuitars,
      wish,
      cart
     
    }
  },
  data() {
    return {
      currentSlide: 0,
      breakpoints: {
        576: { itemsToShow: 2 },
        992: { itemsToShow: 3 },
      },
    };
  },
  methods: {
  next() {
    this.$refs.carousel.next();
  },
  prev() {
    this.$refs.carousel.prev();
  },
},
};
</script>

<template>
    <div class="px-4 md:px-4 lg:px-0 lg:py-10 mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-[1130px]">
        <div class="py-10 relative">
          <div data-aos="fade-right" >
            <div class="bg-gradient-carousel"></div>
              <div class="flex items-center gap-2 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="bg-purple-500 text-white fill-current rounded-full p-1 w-6 md:w-7" viewBox="0 0 24 24"><path d="M21 9h-1.42l-3.712-6.496-1.736.992L17.277 9H6.723l3.146-5.504-1.737-.992L4.42 9H3a1.001 1.001 0 0 0-.965 1.263l2.799 10.264A2.005 2.005 0 0 0 6.764 22h10.473c.898 0 1.692-.605 1.93-1.475l2.799-10.263A.998.998 0 0 0 21 9zm-3.764 11v1-1H6.764L4.31 11h15.38l-2.454 9z"></path><path d="M9 13h2v5H9zm4 0h2v5h-2z"></path></svg>
                  <h2 class="font-semibold text-sm text-purple-500">Products</h2>
              </div>
              <div class="flex items-center justify-between">
                <h3 class="font-bold text-3xl md:text-4xl">Explore our products</h3>
                <div class="flex items-center gap-3 lg:mr-5">
                    <button @click="prev" class="px-4 py-3 rounded-md bg-slate-300 transition duration-500 ease-in-out hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-current text-gray-500" viewBox="0 0 24 24"><path d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"></path></svg>
                    </button>
                    <button @click="next" class="px-4 py-3 rounded-md bg-slate-300 transition duration-500 ease-in-out hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-current text-gray-500" viewBox="0 0 24 24"><path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path></svg>
                    </button>
                </div>
              </div>
          </div>
          
            <div class="my-10" data-aos="fade-up">
                <div v-if="firstGuitars.length <= 0" role="status" class="w-full animate-pulse">
                  <div class="flex flex-col md:flex-row items-start justify-between gap-10">
                    <div class="w-full">
                      <div class="w-full h-60 rounded-lg bg-gray-700"></div>
                      <div class="w-full h-10 rounded-lg bg-gray-700 mt-5"></div>
                    </div>
                    <div class="w-full hidden md:block">
                      <div class="w-full h-60 rounded-lg bg-gray-700"></div>
                      <div class="w-full h-10 rounded-lg bg-gray-700 mt-5"></div>
                    </div>
                    <div class="w-full hidden md:block">
                      <div class="w-full h-60 rounded-lg bg-gray-700"></div>
                      <div class="w-full h-10 rounded-lg bg-gray-700 mt-5"></div>
                    </div>
                  </div>
                </div>
                <carousel v-else ref="carousel" :items-to-show="1" :breakpoints="breakpoints" :wrap-around="true">
                    <slide v-for="guitar in firstGuitars" :key="guitar.id" class="my-slide">
                    <div class="max-w-[300px] md:max-w-[320px] min-h-[100px]">
                      <div class="px-4 pb-7 rounded-lg bg-slate-200 flex flex-col items-center justify-center relative group">
                          <img class="w-[50%] mt-[-60px]" :src="guitar.image_url" :alt="guitar.full_name">
                          <div class="absolute top-0 right-[-15px] mt-7">
                            <OfertButton class="text-xs">{{ guitar.discount }}% off</OfertButton>
                          </div>
                          <div class="flex w-full gap-2 items-center justify-between text-white absolute bottom-0 mb-7 px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div class="block  w-1/5">
                              <RouterLink :to="{name: 'guitar', params: {id: guitar.id}}">
                              <div class="p-2 bg-white transition text-gray-500 duration-300 hover:bg-blue-500 hover:text-white shadow-md rounded-md w-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5" viewBox="0 0 24 24"><path d="M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.736a1 1 0 0 0-.686.894zm16.464-3.971-4.182 12.73-2.534-5.522a.998.998 0 0 0-.492-.492L5.734 9.841l12.732-4.182z"></path></svg>
                              </div>
                            </RouterLink>
                            </div>
                            <button @click="addToCart(guitar)" class="p-2 bg-[#FE497B] shadow-md rounded-md w-3/5 text-white text-center font-semibold">Get now</button>
                            <button @click="wish.addWish(guitar)" class="w-1/5 block">
                              <div class="p-2 bg-white text-gray-500 transition duration-300 hover:bg-blue-500 hover:text-white shadow-md rounded-md flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5" viewBox="0 0 24 24"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                              </div>
                            </button>
                          </div>
                        </div>
                        <div class="mt-5">
                        <div class="flex items-start justify-between">
                          <RouterLink :to="{name: 'guitar', params: {id: guitar.id}}">
                             <p class="font-semibold text-start text-gray-400 hover:text-blue-500 transition duration-300 cursor-pointer text-lg ">{{ guitar.full_name }}</p>
                          </RouterLink>
                          <div class="mt-1">
                            <Rating :rating="guitar.rating"></Rating>
                            <p class="ml-2 text-sm text-start font-medium text-gray-400 ">{{ guitar.rating }} of 5</p>
                          </div>
                        </div>
                          <div class="flex items-center gap-5 mt-2">
                            <p class="text-[21px] font-bold">${{ guitar.actual_price }}</p>
                            <p class="text-[21px] font-bold text-gray-500 line-through">${{ guitar.price }}</p>
                          </div>
                          
                          <div class="mt-3 flex items-center gap-2">
                            <div :class="`h-4 w-4 rounded-sm bg-${guitar.color}-500`"></div>
                            <div :class="`h-4 w-4 rounded-sm bg-${guitar.color}-400`"></div>
                            <div :class="`h-4 w-4 rounded-sm bg-${guitar.color}-300`"></div>
                          </div>
                          <div class="hidden">
                            <div class="bg-indigo-500"></div>
                            <div class="bg-indigo-400"></div>
                            <div class="bg-indigo-300"></div>
                            <div class="bg-blue-500"></div>
                            <div class="bg-blue-400"></div>
                            <div class="bg-blue-300"></div>
                            <div class="bg-cyan-500"></div>
                            <div class="bg-cyan-400"></div>
                            <div class="bg-cyan-300"></div>
                            <div class="bg-orange-500"></div>
                            <div class="bg-orange-400"></div>
                            <div class="bg-orange-300"></div>
                            <div class="bg-red-500"></div>
                            <div class="bg-red-400"></div>
                            <div class="bg-red-300"></div>
                            <div class="bg-gray-500"></div>
                            <div class="bg-gray-400"></div>
                            <div class="bg-gray-300"></div>
                          </div>
                        </div>
                      </div>
                    </slide>

                    <template #addons>
                    <!-- <navigation /> -->
                    <pagination />
                    </template>
                </carousel>
            </div>
        </div>
    </div>
</template>

  
<style>
.my-slide {
    padding: 70px 10px 25px 10px;
    /* border: 1px solid black; */
}
.carousel__pagination-button::after {
    display: block;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #1e293b;
}
@media (min-width: 768px) {
    .carousel__pagination-button::after {
        width: 13px;
        height: 13px;
    }
}
.carousel__pagination-button--active::after {
    background-color: rgb(173, 173, 173);
}
.carousel__pagination-button:hover::after {
  background-color: rgb(173, 173, 173);
}

.bg-gradient-carousel{
    position: absolute;
    background-color: rgb(7, 148, 173);
    border-radius: 50%;
    filter: blur(96px);
    width: 400px;
    height: 180px;
    left: 170px;
    top: 100px;
    z-index: -1;
}

</style>
