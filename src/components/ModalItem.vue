<script setup>
  import { ref } from 'vue'
  import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle,} from '@headlessui/vue'
  
  const isOpen = ref(false)
  
  function closeModal() {
    isOpen.value = false
  }
  function openModal() {
    isOpen.value = true
  }
    /* Pasas una función a tu componente Modal2 a través de la propiedad onAccept */
  const props = defineProps({
    guitar: {
    type: Number,
  }
})

const emits = defineEmits(['deleteItem']);

const acceptAndClose = () => {
  closeModal()
  emits('deleteItem', props.guitar);
}

</script>

<template>
    <div class="">
      <div @click="openModal">
        <slot name="button"></slot>
      </div>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-20">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0" >
          <div class="fixed inset-0 bg-black bg-opacity-40" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">

              <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 flex items-center justify-between">
                  <slot name="title"></slot>
                  <button @click="closeModal"><svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-8 p-1 text-gray-600 rounded-md bg-gray-100" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg></button>
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    <slot name="message"></slot>
                  </p>
                </div>
  
                <div class="mt-6 flex items-center gap-5">
                  <button @click="closeModal" type="button" class="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none" >
                    Cancel
                  </button>
                  <button  @click="acceptAndClose" type="button" class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none">
                    Accept
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  

  