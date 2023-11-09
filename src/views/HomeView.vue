<script setup>
import HeaderVue from '../components/Header.vue';
import Categories from '../components/Categories.vue';
import CarouselProducts from '../components/CarouselProducts.vue';
import MostSold from '../components/MostSold.vue';
import Testimonials from '../components/Testimonials.vue';
import WhyUs from '../components/WhyUs.vue';
import PrimaryButton from '../components/PrimaryButton.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
  <HeaderVue></HeaderVue>
  <Categories class="overflow-hidden"></Categories>
  <CarouselProducts class="overflow-hidden"></CarouselProducts>
  <MostSold class="overflow-hidden"></MostSold>
  <Testimonials class="overflow-hidden"></Testimonials>
  <WhyUs class="overflow-hidden"></WhyUs>

  <div class="mb-28 w-full overflow-hidden relative bg-gray-800 h-[600px] md:h-[350px] lg:h-[330px]">
    <img class="absolute h-full w-full opacity-50 object-cover" src="/img/img-guitar.jpg" alt="image guitar">
    <!-- <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl">Contactanos</p> -->
    <div class="absolute top-0 px-4 lg:px-0 lg:top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 py-10 text-gray-100 flex gap-14 lg:gap-0 flex-col md:flex-row items-start justify-between">
        <div data-aos="fade-up" data-aos-duration="1000" class="flex-1 mt-5">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current bg-white rounded-full p-1 w-6 md:w-7 text-[#FE497B]" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.897 5.516 5 6.934V22l5.34-4.004C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm-2.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
            <h2 class="font-semibold text-sm">Newsletter</h2>
          </div>
          <h3 class="font-bold text-3xl md:text-4xl mt-3">See weekly update</h3>

          <div class="mt-10">
            <RouterLink :to="{name: 'blog'}">
              <PrimaryButton>See shop news</PrimaryButton>
            </RouterLink>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" class="flex-1 flex items-center justify-center">
          <img class="w-[50%]" src="/img/girl-newspaper.png" alt="image girl">
        </div>
    </div>
  </div>
</div>
</template>
