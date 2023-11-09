<script setup>
import { useAuthStore } from '../../stores/auth'
import { useGuitarStore } from '../../stores/guitar'
import Alert from '../../components/Alert.vue'
import { RouterLink, RouterView } from 'vue-router'
import { Toast, Spinner, Rating } from 'flowbite-vue'
import ModalItem from '../../components/ModalItem.vue'
import { ref, onMounted } from 'vue';

const auth = useAuthStore();
const guitar = useGuitarStore();
const guitars = ref([]);

onMounted(async () => {
    guitars.value = await guitar.indexGuitar();
})

const deleteItem = async (id) => {
    guitars.value = await guitar.deleteGuitar(id);
}

</script>

<template>
   <div v-if="auth.isAuth" class="my-28 md:my-36 px-4 md:px-4 lg:px-0 mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-[1130px]">
        <div class="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-0">
            <div class="w-full lg:w-1/3 flex flex-col items-center justify-center lg:items-start lg:justify-start">
                <div class="relative">
                    <img class="w-20 h-20 rounded-full" src="/img/profile1.jpg" alt="">
                    <div class="bottom-0 left-14 absolute">
                        <span class="relative flex h-4 w-4">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-4 w-4 bg-blue-400"></span>
                        </span>
                    </div>
                </div>
                <h2 class="mt-1 font-bold text-2xl">{{ auth.isAuth.user.first_name }} administration</h2>
                <div class="flex items-center gap-5 mt-1">
                    <p class="text-gray-400 font-medium">Article management</p>
                    <spinner v-if="guitar.showSpinner" color="blue" size="6" />
                </div>
                <div class="w-full md:max-w-xs px-8 py-5 bg-slate-800 rounded-lg mt-5">
                    <RouterLink :to="{name: 'admin-guitar'}" exact-active-class="text-green-400">
                        <div class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-current text-green-400" viewBox="0 0 24 24"><path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path></svg>
                            <p class="hover:text-green-500 transition duration-300">Administration</p>
                        </div>
                    </RouterLink>
                    <RouterLink :to="{name: 'new-guitar'}" exact-active-class="text-blue-500">
                        <div class="flex items-center gap-3 mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-current text-blue-600" viewBox="0 0 24 24"><path d="M17.895 3.553A1.001 1.001 0 0 0 17 3H7c-.379 0-.725.214-.895.553l-4 8a1 1 0 0 0 0 .895l4 8c.17.338.516.552.895.552h10c.379 0 .725-.214.895-.553l4-8a1 1 0 0 0 0-.895l-4-7.999zM19.382 11h-7.764l-3-6h7.764l3 6zM4.118 12 7 6.236 9.882 12 7 17.764 4.118 12zm12.264 7H8.618l3-6h7.764l-3 6z"></path></svg>
                            <p class="hover:text-blue-600 transition duration-300">Add item</p>
                        </div>
                    </RouterLink>
                        
                </div>
            </div>
            <div class="w-full lg:w-2/3 min-h-[200px]">
                <div v-if="guitars" class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div v-for="guitar in guitars" :key="guitar.id">
                        <div class="duration-500 hover:shadow-xl transition-all w-full rounded-lg bg-slate-800 shadow-md min-h-[150px] px-3 py-2 md:px-5 md:py-5 flex items-center justify-between gap-5">
                            <div class="w-2/5 flex items-center justify-center">
                                <img class="w-[50%] md:w-[50%] inline" :src="guitar.image_url" alt="guitar image">
                            </div>
                            <div class="w-2/5 flex flex-col gap-2">
                                <Rating :rating="guitar.rating"></Rating>
                                <div>
                                    <RouterLink :to="{name: 'guitar', params: {id: guitar.id}}">
                                        <p class="font-semibold hover:text-blue-500 transition duration-300 cursor-pointer inline-block text-sm">{{ guitar.full_name }}</p>
                                    </RouterLink>
                                </div>
                                <div class="flex items-center gap-2 md:gap-3">
                                    <p class="md:text-base font-bold">${{ guitar.actual_price }}</p>
                                    <p class="md:text-base font-bold text-gray-300 line-through opacity-50">${{ guitar.price }}</p>
                                </div>
                            </div>
                            <div class="w-1/5 flex flex-col items-center gap-3">
                                <RouterLink :to="{name: 'update-guitar', params: { id: guitar.id }}">
                                    <div class="bg-cyan-500 text-white p-2 rounded-lg inline-flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5" viewBox="0 0 24 24"><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path></svg>
                                    </div>
                                </RouterLink>
                                <ModalItem :guitar="guitar.id" @deleteItem="deleteItem">
                                    <template v-slot:button >
                                        <button>
                                            <div class="bg-pink-500 text-white p-2 rounded-lg inline-flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg>                                
                                            </div>
                                        </button>
                                    </template>
                                    <template #title>Delete guitar</template>
                                    <template #message>Are you sure to delete this guitar?</template>
                                </ModalItem>           
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <p>No guitars yet</p>
                </div>
            </div>
        </div>
        <Alert :alertType="'danger'" v-if="guitar.hasError">
                {{ auguitarth.hasError }}
        </Alert>
        <Alert :alertType="'success'" v-if="guitar.hasSuccess">
                {{ guitar.hasSuccess }}
        </Alert>
    </div>
</template>



