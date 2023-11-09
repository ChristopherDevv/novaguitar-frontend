<script setup>
  import { ref, watchEffect } from 'vue'
  import { cartStore } from '../stores/cart';
  import usePriceFormat from '../composables/priceFormat';
  import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle,} from '@headlessui/vue'
  
  const isOpen = ref(false)
  const cart = cartStore();
  const items = cart.cartList;
  const { formatPrice } = usePriceFormat()

  function closeModal() {
    isOpen.value = false
    cart.emptyCart();
  }
  function openModal() {
    isOpen.value = true
  }

  const props = defineProps({
        datailsCart: {
            type: Object
        }
  })
 
const year = ref('')
const day = ref('')
const month = ref('') 
const hour = ref('')
const minutes = ref('')
const seconds = ref('')

  watchEffect(() => {
  if (props.datailsCart.modal) {
    const date = ref(new Date());
    year.value = date.value.getFullYear();
    day.value = date.value.getDate();
    month.value = date.value.getMonth() + 1;
    hour.value = date.value.getHours()
    minutes.value = date.value.getMinutes()
    seconds.value = date.value.getSeconds()
    isOpen.value = true;
  }
});



</script>

<template>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-20">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0" >
          <div class="fixed inset-0 bg-black bg-opacity-80" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">

              <DialogPanel class="w-full max-w-sm transform overflow-hidden  text-left align-middle shadow-xl transition-all">
                
                <div class="flex flex-col items-center justify-center bg-center bg-cover text-gray-600">
                    <div class="max-w-sm w-full h-full mx-auto z-10 bg-blue-700 rounded-3xl">
                        <div class="flex flex-col">
                            <div class="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
                                <div class="flex-none sm:flex">
                                    <div class="flex-auto justify-evenly">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center  my-1">
                                                <span class="mr-1 rounded-full bg-white w-8 h-8">
                                                <img class="h-auto w-8" src="https://img.icons8.com/3d-fluency/94/shopping-bag.png" alt="shopping-bag"/>
                                                </span>
                                                <h2 class="font-medium text-[#138FE2]"><span class="text-[#24C3EE]">e</span>Guitar</h2>
                                            </div>
                                            <button @click="closeModal"><svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-8 p-1 text-gray-600 rounded-md bg-gray-100" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg></button>
                                        </div>
                                        <div class="flex items-center justify-between text-xs mt-1 mb-3">
                                            <p>{{ datailsCart.firstName + ' ' + datailsCart.lastName }}</p>
                                            <p>{{ datailsCart.email }}</p>
                                        </div>
                                        <div class="border-dashed border-b-2 mb-5"></div>
                                        <div class="flex items-center">
                                            <div class="flex flex-col">
                                                <div class="flex-auto text-xs text-gray-400 my-1">
                                                    <span class="mr-1 ">{{ month }}</span><span>{{ year }}</span>
                                                </div>
                                                <div class="w-full flex-none text-lg text-blue-800 font-bold leading-none">USD</div>
                                                <div class="text-xs">Dollar</div>

                                            </div>
                                            <div class="flex flex-col mx-auto">
                                                <img class="h-auto w-[65px]" src="https://img.icons8.com/3d-fluency/94/bank-cards.png" alt="bank-cards"/>
                                                </div>
                                                <div class="flex flex-col ">
                                                    <div class="flex-auto text-xs text-gray-400 my-1">
                                                        <span class="mr-1">{{ month }}</span><span>{{ year }}</span>
                                                    </div>
                                                    <div class="w-full flex-none text-lg text-blue-800 font-bold leading-none">MXN</div>
                                                    <div class="text-xs">Peso</div>

                                                </div>
                                            </div>
                                            <div class="border-dashed border-b-2 my-1 pt-5">
                                                <div class="absolute rounded-full w-5 h-5 bg-blue-700 -mt-2 -left-2"></div>
                                                <div class="absolute rounded-full w-5 h-5 bg-blue-700 -mt-2 -right-2"></div>
                                            </div>
                                            <div class="mt-5 text-sm h-[130px] overflow-y-auto">
      
                                                <div class="w-full">
                                                    <table class="table-auto w-full text-left whitespace-no-wrap table">
                                                        <thead>
                                                            <tr>
                                                                <th class="px-4 py-2 text-xs">Product</th>
                                                                <th class="px-4 py-2 text-xs">Quantity</th>
                                                                <th class="px-4 py-2 text-xs">Subtotal</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody v-for="item in items" :key="item.id">
                                                            <tr class="border-y">
                                                                <td class=" px-4 py-2 text-xs">{{ item.full_name }}</td>
                                                                <td class=" px-4 py-2 text-xs">{{ item.amount }}</td>
                                                                <td class=" px-4 py-2 text-xs">{{formatPrice(item.price * item.amount) }}</td> 
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                               
                                            </div>
                                            
                                            <div class=" border-dashed border-b-2 my-1 pt-5">
                                                <div class="absolute rounded-full w-5 h-5 bg-blue-700 -mt-2 -left-2"></div>
                                                <div class="absolute rounded-full w-5 h-5 bg-blue-700 -mt-2 -right-2"></div>
                                            </div>
                                            <div class="flex items-center px-5 pt-3 text-sm justify-between">
                                                <div class="flex flex-col">
                                                    <span class="font-semibold">Hour</span>
                                                    <div class="">{{ hour }}:{{ minutes }}:{{ seconds }}</div>

                                                </div>
                                                <div class="flex flex-col">
                                                    <span class="font-semibold">Day</span>
                                                    <div class="">{{ day }}</div>

                                                </div>
                                                <div class="flex flex-col ">
                                                    <span class="font-semibold">Month</span>
                                                    <div class="">{{ month }}</div>

                                                </div>
                                                <div class="flex flex-col">
                                                    <span class="font-semibold">Year</span>
                                                    <div class="">{{ year }}</div>

                                                </div>
                                            </div>
                                            <div class="flex flex-col pt-5 pb-3  justify-center text-sm ">
                                                <h6 class="font-bold text-center">Total: {{ formatPrice(cart.totalCart) }}</h6>

                                                <div class="barcode h-14 w-0 inline-block mt-4 relative left-auto"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
    
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>

<style scoped>

.barcode {
    left: 50%;
    box-shadow: 1px 0 0 1px, 5px 0 0 1px, 10px 0 0 1px, 11px 0 0 1px, 15px 0 0 1px, 18px 0 0 1px, 22px 0 0 1px, 23px 0 0 1px, 26px 0 0 1px, 30px 0 0 1px, 35px 0 0 1px, 37px 0 0 1px, 41px 0 0 1px, 44px 0 0 1px, 47px 0 0 1px, 51px 0 0 1px, 56px 0 0 1px, 59px 0 0 1px, 64px 0 0 1px, 68px 0 0 1px, 72px 0 0 1px, 74px 0 0 1px, 77px 0 0 1px, 81px 0 0 1px, 85px 0 0 1px, 88px 0 0 1px, 92px 0 0 1px, 95px 0 0 1px, 96px 0 0 1px, 97px 0 0 1px, 101px 0 0 1px, 105px 0 0 1px, 109px 0 0 1px, 110px 0 0 1px, 113px 0 0 1px, 116px 0 0 1px, 120px 0 0 1px, 123px 0 0 1px, 127px 0 0 1px, 130px 0 0 1px, 131px 0 0 1px, 134px 0 0 1px, 135px 0 0 1px, 138px 0 0 1px, 141px 0 0 1px, 144px 0 0 1px, 147px 0 0 1px, 148px 0 0 1px, 151px 0 0 1px, 155px 0 0 1px, 158px 0 0 1px, 162px 0 0 1px, 165px 0 0 1px, 168px 0 0 1px, 173px 0 0 1px, 176px 0 0 1px, 177px 0 0 1px, 180px 0 0 1px;
    display: inline-block;
    transform: translateX(-90px);
}

::-webkit-scrollbar {
  width: 8px;
}
/* Track del scrollbar */
::-webkit-scrollbar-track {
  background: #94a3b8;
}

/* Handle del scrollbar */
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
}

/* Handle del scrollbar al hacer hover */
::-webkit-scrollbar-thumb:hover {
  background: #b3c3d6;
}

</style>