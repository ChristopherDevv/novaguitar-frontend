<script setup>
import { ref } from 'vue';
import { Toast } from 'flowbite-vue';

defineProps({
  alertType: {
    type: String
  }
})

const show = ref(true);

setTimeout(() => {
  show.value = false;
}, 4000);
</script>

<template>
    <transition name="slide-fade">
        <div v-if="show" class="fixed z-20 top-4 right-4 animate-slideInFromRight">
            <Toast :type="alertType" divide class="border shadow-lg ">
                <span :class="`t-${alertType}`"><slot></slot></span>
            </Toast>
        </div>
    </transition>
</template>

<style scoped>
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.animate-slideInFromRight {
  animation: slideInFromRight 0.3s ease-out;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
@keyframes slideOutToRight {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
.animate-slideOutToRight {
  animation: slideOutToRight 0.3s ease-out;
}

.t-danger{
  color: rgb(223, 78, 78);
}
.t-success{
  color: rgb(17, 150, 94);
}
.t-warning{
  color: rgb(212, 132, 41);
}
</style>