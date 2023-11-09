<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed, onMounted } from "vue";


</script>

<template>

    <RouterView />

</template>

<style>

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #020617;

}

::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #192333;
}

.vue-dropdown-item.highlighted {
    background-color: #1e293b !important;
}
.vue-dropdown-item.selected{
    background-color: #475569 !important;
}
.vue-dropdown{
    border: 1px solid #334155 !important;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3); 
    background: #334155;
}
.vue-dropdown-item{
    padding: 5px 10px !important;
}
.vue-input input{
    font-size: 14px !important;
    line-height: 20px !important;
}
</style>
