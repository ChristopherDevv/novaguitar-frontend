<script setup>
import { ref, computed } from "vue";

</script>

<template>
    <div class="bg-gradient-to-tr from-slate-950 to-slate-900">
   <div class="py-28 md:py-36 px-4 mb-20 md:px-4 lg:px-0 mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-[1130px] overflow-hidden">
        <div>
            <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current bg-[#FE497B] rounded-full p-1 w-6 md:w-7 text-white" viewBox="0 0 24 24"><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg>
                <h2 class="font-semibold text-sm text-[#FE497B]">Blog</h2>
            </div>
            <h3 class="font-bold text-3xl md:text-4xl mt-3">eGuitar blog</h3>
        </div>
        <div class="mt-10 flex flex-col-reverse lg:flex-row items-start justify-between gap-10 w-full">
            <div class="w-full lg:w-3/4 min-h-[200px]">

                <div class="w-full flex items-start flex-col md:flex-row justify-between gap-7">
                    <div class="rounded-lg overflow-hidden w-full md:w-1/2">
                        <img class="w-full h-full object-cover object-center" alt="blog image" src="/img/image-blog3.jpg">
                    </div>
                    <div class="w-full md:w-1/2">
                        <h2 class="text-2xl font-semibold">The best guitar solos with Fender Stratocaster guitar</h2>
                        <p class="text-lg mt-5">The Fender Stratocaster is more than just a guitar; is an icon in the music industry.</p>
                        <p class="mt-3 text-xs text-gray-400">September 25, 2023</p>
                        <div class="flex items-start justify-between gap-3 text-gray-400 mt-3 text-sm">
                            <p class="w-1/2">The three single-coil pickups offer an impressive range of tones, from the bright, crystalline sound of the neck pickups to the biting, energetic tone of the bridge pickup. This makes it the perfect choice for a wide variety of musical styles, from blues and rock to jazz and pop. Musicians like Jimi Hendrix, Eric Clapton and Stevie Ray Vaughan have relied on the Stratocaster to create some of the most iconic guitar solos of all time.</p>
                            <p class="w-1/2">The Fender Stratocaster is not only notable for its versatility, but has also left an indelible mark on music history. Its legacy lives on through generations of musicians who continue to use this guitar to inspire and create new music, ensuring that its status as a timeless rock icon endures for many years to come.</p>
                        </div>
                    </div>
                </div>
                <div class="w-full flex items-start flex-col-reverse md:flex-row justify-between gap-7 mt-10">
                    <div class="w-full md:w-1/2">
                        <h2 class="text-2xl font-semibold">Gibson Les Paul Guitar</h2>
                        <p class="text-lg mt-5">When it comes to classic rock, the Gibson Les Paul is synonymous with power, sustain and attitude.</p>
                        <p class="mt-3 text-xs text-gray-400">October 10, 2023</p>
                        <div class="flex items-start justify-between gap-3 text-gray-400 mt-3 text-sm">
                            <p class="w-1/2">What makes the Les Paul stand out is its ability to produce thick, warm tones with impressive sustain. This makes it the ideal choice for the guitar riffs and solos that have defined classic rock. The combination of Gibson humbucker pickups creates a powerful, nuanced sound that has powered anthems like Led Zeppelin's "Whole Lotta Love" and Guns N' Roses' "Sweet Child o' Mine."</p>
                            <p class="w-1/2">In addition to its powerful sound, the Gibson Les Paul has left a lasting mark on rock culture. Iconic guitarists like Jimmy Page, Slash and Eric Clapton have trusted this guitar to create music that has stood the test of time. Its timeless design and legacy in music history make it a fundamental piece in any classic rock guitarist's arsenal.</p>
                        </div>
                    </div>
                    <div class="rounded-lg overflow-hidden h-auto w-full md:w-1/2">
                        <img class="w-full h-full object-cover object-top" alt="blog image" src="/img/image-blog4.jpg">
                    </div>
                </div>

            </div>
            <div class="w-full lg:w-1/4 min-h-[200px] rounded-lg border border-gray-600 px-4 py-7">
                <h3 class="font-semibold text-lg">Latest Posts</h3>
                <div class="min-h-[100px] rounded-md bg-slate-200 mt-5 p-2 flex items-center justify-between gap-3">
                    <div class="w-1/3 rounded-lg overflow-hidden h-20 md:h-40 lg:h-20">
                        <img class="w-full h-full object-cover object-center" alt="blog image" src="/img/image-blog3.jpg">
                    </div>
                    <div class="w-2/3 text-xs text-gray-700">
                        <h4 class="font-semibold">The best guitar solos with Fender Stratocaster guitar</h4>
                        <p class="mt-2">September 25, 2023</p>
                    </div>

                </div>
                <div class="min-h-[100px] rounded-md bg-slate-200 mt-5 p-2 flex items-center justify-between gap-3">
                    <div class="w-1/3 rounded-lg overflow-hidden h-20 md:h-40 lg:h-20 ">
                        <img class="w-full h-full object-cover object-top" alt="blog image" src="/img/image-blog4.jpg">
                    </div>
                    <div class="w-2/3 text-xs text-gray-700">
                        <h4 class="font-semibold">Gibson Les Paul Guitar</h4>
                        <p class="mt-2">October 10, 2023</p>
                    </div>

                </div>
            </div>
        </div>
       
    </div>
    </div>
</template>

