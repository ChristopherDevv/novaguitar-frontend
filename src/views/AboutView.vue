<script setup>
import { ref, computed } from "vue";

</script>

<template>
   <div class="my-28 md:my-36 px-4 md:px-4 lg:px-0 mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-[1130px] overflow-hidden">
        <div>
        <div class="overflow-hidden">
            <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current bg-[#FE497B] rounded-full p-1 w-6 md:w-7 text-white" viewBox="0 0 24 24"><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg>
                <h2 class="font-semibold text-sm text-[#FE497B]">About</h2>
            </div>
            <h3 class="font-bold text-3xl md:text-4xl mt-3">Know about us</h3>
        </div>
        <div class="my-10">
            <div class="flex items-center flex-col lg:flex-row justify-between gap-10 md:gap-20">
                <div class="lg:w-1/3 rounded-lg overflow-hidden h-96 w-full md:w-1/2">
                    <img class="w-full h-full object-cover object-bottom" src="/img/about-image.jpg" alt="about image">
                </div>
                <div class="lg:w-2/3 overflow-hidden" >
                    <h2 class="text-2xl md:text-3xl font-semibold">eGuitar can help you create experiences with a special guitar for your and your friends</h2>
                    <p class="text-lg md:text-xl mt-5 md:mt-7">This store eGuitar can help you create unified, intelligent digital commerce experiences — both online and in the store.</p>
                    <div class="flex items-center justify-between gap-5 md:gap-10 text-gray-400 mt-5 md:mt-7 text-sm">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque facere ex tempora maiores voluptate reiciendis distinctio quo incidunt dignissimos corrupti iusto nobis, voluptas delectus minima itaque. Quis, numquam? Quo!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque facere ex tempora maiores voluptate reiciendis distinctio quo incidunt dignissimos corrupti iusto nobis, voluptas delectus minima itaque. Quis, numquam? Quo!</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div class="relative rounded-lg overflow-hidden h-64 md:h-52 w-full mt-20" data-aos="fade-up">
            <img class="absolute inset-0 w-full h-full object-cover object-center" src="/img/about-image2.jpg" alt="about image two">
            <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="flex flex-col lg:flex-row items-start justify-around gap-10 mt-[-80px] z-10 relative opacity-80" data-aos="fade-up" >
            <div class="min-h-[200px] rounded-lg w-[90%] mx-auto lg:w-80  bg-gradient-to-tr from-purple-700 to-purple-400 px-5 py-6">
                <img class="w-16" src="https://img.icons8.com/3d-fluency/94/collaboration-female-male--v2.png" alt="collaboration-female-male--v2"/>
                <h3 class="font-bold text-lg mt-3">10,000+ Happy Customer</h3>
                <p class="mt-3 text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error sapiente tenetur harum neque placeat ut, dolores quisquam ad recusandae, deserunt laborum reiciendis voluptas accusamus iste non fuga eos facilis nobis!</p>
            </div>
            <div class="min-h-[200px] rounded-lg w-[90%] mx-auto lg:w-80  bg-gradient-to-tr from-pink-700 to-pink-400 px-5 py-6">
                <img class="w-16" src="https://img.icons8.com/3d-fluency/94/conference-call--v2.png" alt="conference-call--v2"/>
                <h3 class="font-bold text-lg mt-3">5 Years of Experiences</h3>
                <p class="mt-3 text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error sapiente tenetur harum neque placeat ut, dolores quisquam ad recusandae, deserunt laborum reiciendis voluptas accusamus iste non fuga eos facilis nobis!</p>
            </div>
            <div class="min-h-[200px] rounded-lg w-[90%] mx-auto lg:w-80  bg-gradient-to-tr from-blue-700 to-blue-400 px-5 py-6">
                <img class="w-16" src="https://img.icons8.com/3d-fluency/94/inspection.png" alt="inspection"/>
                <h3 class="font-bold text-lg mt-3">The best products</h3>
                <p class="mt-3 text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error sapiente tenetur harum neque placeat ut, dolores quisquam ad recusandae, deserunt laborum reiciendis voluptas accusamus iste non fuga eos facilis nobis!</p>
            </div>
            
        </div>
    </div>
</template>

