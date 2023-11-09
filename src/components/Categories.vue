<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import PrimaryButtonVue from './PrimaryButton.vue';
import SecondaryButton from './SecondaryButton.vue';
import OfertButton from './OfertButton.vue';
import { RouterLink, RouterView, useRouter } from "vue-router";

const countdown = ref(48 * 60 * 60); // 48 horas de oferta
let intervalId = null;

const updateCountdown = () => {
  if (countdown.value > 0) {
    countdown.value--;
  }
};

onMounted(() => {
  intervalId = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const days = computed(() => Math.floor(countdown.value / 86400));
const hours = computed(() => Math.floor((countdown.value % 86400) / 3600));
const minutes = computed(() => Math.floor((countdown.value % 3600) / 60));
const seconds = computed(() => countdown.value % 60);
</script>

<template>
    <div class="bg-slate-800 pt-10 pb-16 bg-opacity-30  backdrop-filter backdrop-blur-[33px] -mt-28 lg:-mt-20">
    <div class="px-4 md:px-4 lg:px-0 mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-[1130px] ">
        <div class="py-10">
            <div data-aos="fade-up">
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flame bg-[#FE497B] rounded-full p-1 w-6 md:w-7" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z" />
                        <path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116" />
                        <path d="M6 9h-.01" />
                    </svg>
                    <h2 class="font-semibold text-sm text-[#FE497B]">Categories</h2>
                </div>
                <h3 class="font-bold text-3xl md:text-4xl mt-3">Browse by Category</h3>
            </div>
            <div data-aos="fade-up" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-14">
                <div class="bg-gradient-to-tr from-pink-500 to-pink-300 px-2 py-6 md:py-9 transition duration-500 ease-in-out transform hover:translate-y-[-5px] rounded-lg shadow-md flex items-center justify-center gap-3 flex-col">
                    <img class="w-11 md:w-16 h-auto" src="https://img.icons8.com/3d-fluency/94/musical-notes.png" alt="musical-notes"/>
                    <p class="text-sm">Solid-Body Guitar</p>
                </div>
                <div class="bg-gradient-to-tr from-slate-800 to-slate-600 px-2 py-6 md:py-9 transition duration-500 ease-in-out transform hover:translate-y-[-5px] rounded-lg shadow-md flex items-center justify-center gap-3 flex-col">
                    <img class="w-11 md:w-16 h-auto" src="https://img.icons8.com/3d-fluency/94/music-record.png" alt="music-record"/>
                    <p class="text-sm">Stratocaster guitar</p>
                </div>
                <div class="bg-gradient-to-tr from-blue-600 to-blue-400 px-2 py-6 md:py-9 transition duration-500 ease-in-out transform hover:translate-y-[-5px] rounded-lg shadow-md flex items-center justify-center gap-3 flex-col">
                    <img class="w-11 md:w-16 h-auto" src="https://img.icons8.com/3d-fluency/94/loudspeaker.png" alt="loudspeaker"/>
                    <p class="text-sm">Les Paul type guitar</p>
                </div>
                <div class="bg-gradient-to-tr from-purple-600 to-purple-400 px-2 py-6 md:py-9 transition duration-500 ease-in-out transform hover:translate-y-[-5px] rounded-lg shadow-md flex items-center justify-center gap-3 flex-col">
                    <img class="w-11 md:w-16 h-auto" src="https://img.icons8.com/3d-fluency/94/treble-clef.png" alt="treble-clef"/>
                    <p class="text-sm">Telecaster type guitar</p>
                </div>
                <div class="bg-gradient-to-tr from-pink-600 to-pink-400 px-2 py-6 md:py-9 transition duration-500 ease-in-out transform hover:translate-y-[-5px] rounded-lg shadow-md flex items-center justify-center gap-3 flex-col">
                    <img class="w-11 md:w-16 h-auto" src="https://img.icons8.com/3d-fluency/94/music.png" alt="music"/>
                    <p class="text-sm">SG type guitar</p>
                </div>
                <div class="bg-gradient-to-tr from-slate-700 to-slate-500 px-2 py-6 md:py-9 transition duration-500 ease-in-out transform hover:translate-y-[-5px] rounded-lg shadow-md flex items-center justify-center gap-3 flex-col">
                    <img class="w-11 md:w-16 h-auto" src="https://img.icons8.com/3d-fluency/94/microphone.png" alt="microphone"/>
                    <p class="text-sm">Superstrat guitar</p>
                </div>
            </div>
        </div>
        <div class="py-10  lg:mt-20">
            <div class="pt-10 px-4 md:px-16 pb-8 rounded-lg flex flex-col gap-8 lg:gap-3 lg:flex-row items-start bg-gradient-to-tr from-blue-600 to-blue-400">
                <div data-aos="fade-right" class="w-full lg:w-1/2">
                    <div class="flex items-center gap-2 justify-center lg:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gift bg-[#FE497B] rounded-full p-1 w-6 md:w-7" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
                            <path d="M12 8l0 13" />
                            <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
                            <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
                        </svg>
                        <h2 class="font-semibold text-sm">Don't miss!!</h2>
                    </div>
                    <h3 class="font-bold text-3xl md:text-4xl leading-normal mt-3 text-center lg:text-start">Enhance Your <span class="lg:block">Music</span> <span class="block lg:flex-none">Experience</span></h3>
                    <div class="my-10 flex items-center justify-center lg:justify-start gap-3 text-gray-500">
                        <div class="w-14 md:w-20 h-14 md:h-20 rounded-full shadow-md bg-white flex justify-center">
                            <div class="flex items-center justify-center flex-col">
                                <p class="font-semibold text-xl md:text-3xl">{{ days }}</p>
                                <p class="font-thin text-xs md:text-sm">Day</p>
                            </div>
                        </div>
                        <div class="w-14 md:w-20 h-14 md:h-20 rounded-full shadow-md bg-white flex justify-center">
                            <div class="flex items-center justify-center flex-col">
                                <p class="font-semibold text-xl md:text-3xl">{{hours}}</p>
                                <p class="font-thin text-xs md:text-sm">Hrs</p>
                            </div>
                        </div>
                        <div class="w-14 md:w-20 h-14 md:h-20 rounded-full shadow-md bg-white flex justify-center">
                            <div class="flex items-center justify-center flex-col">
                                <p class="font-semibold text-xl md:text-3xl">{{ minutes }}</p>
                                <p class="font-thin text-xs md:text-sm">Min</p>
                            </div>
                        </div>
                        <div class="w-14 md:w-20 h-14 md:h-20 rounded-full shadow-md bg-white flex justify-center">
                            <div class="flex items-center justify-center flex-col">
                                <p class="font-semibold text-xl md:text-3xl">{{ seconds }}</p>
                                <p class="font-thin text-xs md:text-sm">Sec</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center lg:justify-start">
                        <RouterLink :to="{name: 'guitar', params: {id: 1}}">
                            <PrimaryButtonVue>Check it out</PrimaryButtonVue>
                        </RouterLink>
                    </div>
                </div>

                <div data-aos="fade-left" class="lg:w-1/2 inline-flex items-end justify-center lg:justify-start gap-7 relative w-full">
                    <div class="z-10 absolute top-[30px] right-[35%] md:right-[40%] lg:top-0 lg:-translate-x-[60%] lg:right-[39%]">
                        <OfertButton class="text-xs md:text-sm">35% OFF</OfertButton>
                    </div>
                    <!-- <img class="w-[50%] md:w-[37%] lg:w-[57%] transform rotate-[20deg] inline lg:mt-[-150px]" src="../../public/img/guitar_01.png" alt="guitar image"> -->
                    <img class="w-[50%] md:w-[37%] lg:w-[57%] inline lg:mt-[-150px]" src="/img/guitar_01.png" alt="guitar image">
                    <img class="w-[24%] md:w-[17%] lg:w-[25%] inline " src="/img/guitar-girl.png" alt="girl image">
                </div>
            </div>
        </div>
    </div>
</div>
</template>



