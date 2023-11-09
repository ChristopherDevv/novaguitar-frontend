<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";

</script>

<template>
    <div class="px-4 md:px-4 lg:px-0 mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-[1130px] w-full text-gray-300 relative overflow-hidden">
        <div data-aos="fade-up" data-aos-duration="800">
            <div class="bg-gradient-footer md:right-[180px]"></div>
            <div class="bg-slate-50 text-gray-600 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-3 p-5">
                <div class="flex items-center justify-center lg:justify-start gap-5">
                    <img class="w-11" src="../../public/img/service1.png" alt="">
                    <div class="font-bold">
                        <p>Fast & Secure Delivery</p>
                        <p class="font-thin">Tell about your service.</p> 
                    </div>
                </div>
                <div class="flex items-center justify-center lg:justify-start gap-5">
                    <img class="w-11" src="../../public/img/service2.png" alt="">
                    <div class="font-bold">
                        <p>Money Back Guarantee</p>
                        <p class="font-thin">Within 10 days.</p> 
                    </div>
                </div>
                <div class="flex items-center justify-center lg:justify-start gap-5">
                    <img class="w-11" src="../../public/img/service3.png" alt="">
                    <div class="font-bold">
                        <p>24 Hour Return Policy</p>
                        <p class="font-thin">No question ask.</p> 
                    </div>
                </div>
                <div class="flex items-center justify-center lg:justify-start gap-5">
                    <img class="w-11" src="../../public/img/service4.png" alt="">
                    <div class="font-bold">
                        <p>Pro Quality Support</p>
                        <p class="font-thin">24/7 Live support.</p> 
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-3 mt-7">
                <div>
                    <p class="font-bold mb-3">Support</p>
                    <p>685 Market Street,
                       <span class="block">Veracruz, Mx 234456,</span>
                        Mexico Mexico.
                    </p>
                </div>
                <div>
                    <p class="font-bold mb-3">Quick Link</p>
                    <ul>
                        <div class="flex flex-col gap-2">
                            <li>
                                <RouterLink :to="{ name: 'contact' }" class="hover:text-blue-500 transition duration-500 inline-block">
                                    Contact
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'about' }" class="hover:text-blue-500 transition duration-500 inline-block">
                                    About
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'blog' }" class="hover:text-blue-500 transition duration-500 inline-block">
                                    Blog
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'home' }"  class="hover:text-blue-500 transition duration-500 inline-block">
                                    Home
                                </RouterLink>
                            </li>
                        </div>
                    </ul>
                </div>
                <div>
                    <p class="font-bold mb-3">Access</p>
                    <ul>
                        <div class="flex flex-col gap-2">
                            <li><a href="#" class="hover:text-blue-500 transition duration-500 inline-block">My account</a></li>
                            <li><a href="#" class="hover:text-blue-500 transition duration-500 inline-block">Cart</a></li>
                            <li><a href="#" class="hover:text-blue-500 transition duration-500 inline-block">Login / Register</a></li>
                            <li><a href="#" class="hover:text-blue-500 transition duration-500 inline-block">Shop</a></li>
                        </div>
                    </ul>
                </div>
                <div>
                    <p class="font-bold mb-3">Download App</p>
                   <p>Save $3 With App & New User only</p>
                   <div class="flex items-center gap-3 mt-3">
                    <img class="w-10 md:w-16" src="https://img.icons8.com/3d-fluency/94/qr-code.png" alt="qr-code"/>
                    <img class="w-10 md:w-14" src="../../public/img/playstore-svg.svg" alt="imgae playstore"/>
                    <svg class="fill-current text-blue-500 w-10 md:w-14" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>App Store</title><path d="M8.8086 14.9194l6.1107-11.0368c.0837-.1513.1682-.302.2437-.4584.0685-.142.1267-.2854.1646-.4403.0803-.3259.0588-.6656-.066-.9767-.1238-.3095-.3417-.5678-.6201-.7355a1.4175 1.4175 0 0 0-.921-.1924c-.3207.043-.6135.1935-.8443.4288-.1094.1118-.1996.2361-.2832.369-.092.1463-.175.2979-.259.4492l-.3864.6979-.3865-.6979c-.0837-.1515-.1667-.303-.2587-.4492-.0837-.1329-.1739-.2572-.2835-.369-.2305-.2353-.5233-.3857-.844-.429a1.4181 1.4181 0 0 0-.921.1926c-.2784.1677-.4964.426-.6203.7355-.1246.311-.1461.6508-.066.9767.038.155.0962.2984.1648.4403.0753.1564.1598.307.2437.4584l1.248 2.2543-4.8625 8.7825H2.0295c-.1676 0-.3351-.0007-.5026.0092-.1522.009-.3004.0284-.448.0714-.3108.0906-.5822.2798-.7783.548-.195.2665-.3006.5929-.3006.9279 0 .3352.1057.6612.3006.9277.196.2683.4675.4575.7782.548.1477.043.296.0623.4481.0715.1675.01.335.009.5026.009h13.0974c.0171-.0357.059-.1294.1-.2697.415-1.4151-.6156-2.843-2.0347-2.843zM3.113 18.5418l-.7922 1.5008c-.0818.1553-.1644.31-.2384.4705-.067.1458-.124.293-.1611.452-.0785.3346-.0576.6834.0645 1.0029.1212.3175.3346.583.607.7549.2727.172.5891.2416.9013.1975.3139-.044.6005-.1986.8263-.4402.1072-.1148.1954-.2424.2772-.3787.0902-.1503.1714-.3059.2535-.4612L6 19.4636c-.0896-.149-.9473-1.4704-2.887-.9218m20.5861-3.0056a1.4707 1.4707 0 0 0-.779-.5407c-.1476-.0425-.2961-.0616-.4483-.0705-.1678-.0099-.3352-.0091-.503-.0091H18.648l-4.3891-7.817c-.6655.7005-.9632 1.485-1.0773 2.1976-.1655 1.0333.0367 2.0934.546 3.0004l5.2741 9.3933c.084.1494.167.299.2591.4435.0837.131.1739.2537.2836.364.231.2323.5238.3809.8449.4232.3192.0424.643-.0244.9217-.1899.2784-.1653.4968-.4204.621-.7257.1246-.3072.146-.6425.0658-.9641-.0381-.1529-.0962-.2945-.165-.4346-.0753-.1543-.1598-.303-.2438-.4524l-1.216-2.1662h1.596c.1677 0 .3351.0009.5029-.009.1522-.009.3007-.028.4483-.0705a1.4707 1.4707 0 0 0 .779-.5407A1.5386 1.5386 0 0 0 24 16.452a1.539 1.539 0 0 0-.3009-.9158Z"/></svg>
                   </div>
                </div>

            </div>

            <div class="mt-7 border-t border-gray-700 grid grid-cols-1 md:grid-cols-3 gap-3 py-5">
                <div class="flex items-center justify-center md:justify-start gap-2">
                    <a href="#"><img class="w-7 md:w-9" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new"/></a>
                    <a href="#"><img class="w-7 md:w-9" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/></a>
                    <a href="#"><img class="w-7 md:w-9" src="https://img.icons8.com/fluency/48/tiktok.png" alt="tiktok"/></a>
                    <a href="#"><img class="w-7 md:w-9" src="https://img.icons8.com/fluency/48/twitterx--v1.png" alt="twitterx--v1"/></a>
                </div>
                <div class="flex items-center justify-center">
                    <p>© 2023. All rights reserved by eGuitar.</p>
                </div>
                <div class="flex items-center justify-center md:justify-end gap-2">
                    <p>Acept for</p>
                    <div class="flex items-center  gap-2">
                        <img class="w-6 md:w-9" src="https://img.icons8.com/color/48/paypal.png" alt="paypal"/>
                        <img class="w-6 md:w-9" src="https://img.icons8.com/fluency/48/mastercard.png" alt="mastercard"/>
                        <img class="w-6 md:w-9" src="https://img.icons8.com/color/48/visa.png" alt="visa"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<style>
.bg-gradient-footer{
    position: absolute;
    background-color: rgb(7, 148, 173);
    border-radius: 50%;
    filter: blur(55px);
    width: 800px;
    height: 40px;
    bottom: 0;
    z-index: -1;
}
</style>