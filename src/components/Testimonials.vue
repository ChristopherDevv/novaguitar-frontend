<script >
import { Avatar } from 'flowbite-vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import OfertButton from './OfertButton.vue';
import { ref, onMounted, onUnmounted } from 'vue';


export default {
  name: 'App',
  name: 'WrapAround',
  name: 'Autoplay',
  components: {
    Avatar,
    OfertButton,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  }, setup(){
    const autoplay = ref(false);

    const updateAutoplay = () => {
        autoplay.value = window.innerWidth > 768;
    };

    onMounted(() => {
        window.addEventListener('resize', updateAutoplay);
        updateAutoplay();
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateAutoplay);
    });

    return { autoplay };
  },
  data() {
    return {
      currentSlide: 0,
      products: [
        { id: 1, name: 'Camilo sam', image: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg', comment: 'The best online guitar store! Wide variety of makes and models, with detailed!'},
        { id: 2, name: 'Lila patiño', image: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg', comment: 'The information and guides on guitars are very useful for beginners like me.'},
        { id: 4, name: 'Miku rus ', image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg', comment: 'I was amazed by the quality of the guitars they offer. I bought a Gibson Les Paul!'},
        { id: 3, name: 'Any lucia', image: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg', comment: 'This platform is a paradise for guitar lovers. I love the accessories and equipment.'},

      ],
      breakpoints: {
        576: { itemsToShow: 2 },
        992: { itemsToShow: 3 },
      },
    };
  },
};
</script>

<template>
    <div class="px-4 md:px-4 lg:px-0 mx-auto md:max-w-4xl pb-10 lg:max-w-5xl xl:max-w-[1130px]">
        <div class="py-10">
            <div data-aos="fade-right"  data-aos-duration="800">
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current rounded-full p-1 w-6 md:w-7 bg-purple-500 text-white" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"></path></svg>
                    <h2 class="font-semibold text-sm text-purple-500">Testimomonials</h2>
                </div>
                <h3 class="font-bold text-3xl md:text-4xl mt-3">Users Feedback</h3>
            </div>
            <div data-aos="fade-up" data-aos-duration="800" class="mt-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div class="md:w-1/4 flex items-center justify-center">
                    <img class="w-40 md:w-52" src="/img/girl-shop2.png" alt="girl image">
                </div>

                <div class=" md:w-3/4 min-h-[100px] ">
                    <Carousel  :autoplay="autoplay ? 2000 : false" :transition="1500" ref="carousel" :items-to-show="1" :breakpoints="breakpoints" :wrap-around="true">
                        <slide v-for="product in products" :key="product.id" class="my-slide">
                            <div class="card p-5 rounded-lg bg-slate-50 text-gray-600">
                                <div class="flex items-center gap-5">
                                    <Avatar  size="md" status="online" rounded :img="product.image" />
                                    <p class="font-semibold leading-tight text-start">{{ product.name }}<span class="font-thin block text-sm">eGuitar user</span></p>
                                </div>
                                <p class="text-[13px] mt-2 text-start">{{ product.comment }}</p>
                            </div>
                        </slide>

                        <template #addons>
                        <pagination />
                        </template>
                    </Carousel>
                </div>

            </div>
        </div>
    </div>
</template>



<style scoped>
.card {
    position: relative;
}

.card::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 25px solid #f8fafc;
    border-right: 50px solid rgba(0,0,0,0);
    position: absolute;
    bottom: -25px;
    left: 100px;
}

.my-slide {
    padding: 10px 10px 35px 10px;
    /* border: 1px solid black; */
} 

</style>