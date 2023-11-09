<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
     <RouterLink :to="{ name: 'home' }">
        <div class="inline-flex items-center justify-center">
            <img class="h-auto w-11 md:w-14" src="https://img.icons8.com/3d-fluency/94/shopping-bag.png" alt="shopping-bag"/>
            <h2 class="font-bold text-base md:text-xl text-[#138FE2]"><span class="text-[#24C3EE]">e</span>Guitar</h2>
        </div>
    </RouterLink>
</template>