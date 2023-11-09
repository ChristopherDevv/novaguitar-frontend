<script setup>
import { Rating, StackedAvatars, Avatar, StackedAvatarsCounter } from 'flowbite-vue'
import PrimaryButton from './PrimaryButton.vue';
import { RouterLink, RouterView, useRouter } from "vue-router";
</script>

<template>
    <header class="min-h-screen bg-gradient-to-br from-slate-800 to-slate-950 relative overflow-hidden pb-20">
        <div class="bg-gradient"></div>
    <!-- imagne background -->
    <div class="absolute bottom-[-90px] hidden  md:left-[40%] lg:left-[62%] transform md:-translate-x-[40%] lg:-translate-x-[60%] md:flex md:items-end">
        <img class="w-[450px] h-auto grayscale opacity-[0.02]" src="/img/shape-1.png" alt="image shape">
        <img class="w-96 h-auto grayscale opacity-[0.01]" src="/img/shape-2.png" alt="image shape">
    </div>
     <!-- header content -->
     <div class="relative px-4 md:px-4 lg:px-0 mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-[1130px]">
        <div data-aos="fade-up" data-aos-duration="1000"  class="flex flex-col lg:flex-row gap-16 lg:gap-11 pt-28 pb-14 lg:pb-7 md:pt-44 items-start">
            <div class="lg:w-1/2">
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flame bg-[#FE497B] rounded-full p-1 w-6 md:w-7" viewBox="0 0 24 24" stroke-width="3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
                    </svg>
                    <h2 class="font-semibold text-sm text-[#FE497B]">Hot deal in this week</h2>
                    </div>
                    <h1 class="font-bold text-[40px] md:text-[55px] mt-3 leading-tight">Get your electric <span class="block">guitar</span></h1>
                    <p class="my-5 leading-relaxed text-[16px] md:text-base font-medium">Delve into the fascinating world of Electric Guitars: Your Exclusive Destination to Discover and Create the Best Music, get yours now</p>
                    <div class="flex flex-col md:flex-row items-start gap-10 mt-10">
                    <div>
                        <RouterLink :to="{ name: 'shop' }">
                            <PrimaryButton>Shop now</PrimaryButton>
                        </RouterLink>
                    </div>
                    <div class="flex items-center gap-3 mt-1">
                        <StackedAvatars>
                            <Avatar size="md" stacked img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded />
                            <Avatar size="md" stacked img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" rounded />
                            <Avatar size="md" stacked img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                            <StackedAvatarsCounter size="md" :total="99" href="#" />
                        </StackedAvatars>
                        <div>
                            <Rating :rating="4" />
                            <p class="text-sm font-semibold">99+ <span class="font-normal">Reviews</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/2 relative">
               <div class="flex justify-center gap-10 lg:gap-0 lg:justify-start items-start">
                <img class="w-[40%] md:w-[25%] lg:w-[44%] transform lg:rotate-[20deg] inline lg:mt-[-60px]" src="/img/guitar_02.png" alt="image guitar">
                <div class="z-10 absolute top-0 w-20 h-20 rounded-full shadow-md bg-gradient-to-tr from-slate-800 to-slate-500 flex justify-center transform -translate-x-[70%] md:-translate-x-[60%] left-[55%]">
                    <div class="flex items-center justify-center flex-col">
                        <p class="font-thin text-xs md:text-sm text-white">From</p>
                        <p class="text-white font-bold text-sm md:text-base">$399.00</p>
                    </div>
                </div>
                <img class="w-[42%] md:w-[25%] lg:w-[44%] transform lg:rotate-[15deg] inline lg:mt-[-30px]" src="/img/guitar_12.png" alt="image guitar">
               </div>
            </div>
        </div>


     </div>
    </header>
</template>

<style>
.grayscale {
    filter: grayscale(100%);
}
.bg-gradient{
    position: absolute;
    background-color: rgb(7, 148, 173);
    border-radius: 50%;
    filter: blur(96px);
    width: 500px;
    height: 170px;
    left: 0;
    top: -50px;
}
</style>
