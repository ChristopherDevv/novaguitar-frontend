<script setup>
import { ref, computed, onMounted } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import Logo from "./Logo.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { useAuthStore } from '../stores/auth'
import WishList from "./WishList.vue";
import PrimaryButton from "./PrimaryButton.vue";
import SecondaryButton from "./SecondaryButton.vue";
import { wishListStore } from '../stores/wishList';
import { cartStore } from '../stores/cart'
import Modal from "./Modal.vue";
import usePriceFormat from '../composables/priceFormat'

const { formatPrice } = usePriceFormat()

const router = useRouter();

const wish = wishListStore();
const cart = cartStore();

const auth = useAuthStore();
const isOpen = ref(false);
const itemsOpen = ref(false);

const addAndClose = () => {
  if(auth.isAuth){
    cart.addWishtoCart();
  }else{
    router.push({name: 'login'})
  }

  itemsOpen.value = false;
  
}

</script>

<template>
    <div class="w-full md:max-w-4xl lg:max-w-5xl xl:max-w-[1130px] mx-auto fixed top-0 md:top-3 left-0 right-0 z-20"><!--  fixed top-3 left-0 right-0 z-10 -->
        <div class="flex items-center justify-between lg:min-h-[75px] bg-slate-950 py-2 md:py-2 px-4 md:px-6 lg:px-9 md:rounded-lg shadow-md bg-opacity-80 backdrop-filter backdrop-blur-sm">
            <div class="">
                <Logo></Logo>
            </div>
            <div class="hidden md:flex items-center justify-center gap-12 font-semibold">
                <RouterLink :to="{ name: 'home' }"  class="py-1  duration-500 transition-colors border-b-2 border-transparent hover:border-b-cyan-500" exact-active-class="border-b-2 border-b-cyan-500">
                    Home
                </RouterLink>
                <RouterLink :to="{ name: 'shop' }" class="py-1  duration-500 transition-colors border-b-2 border-transparent hover:border-b-cyan-500" exact-active-class="border-b-2 border-b-cyan-500">
                    Shop
                </RouterLink>
                <RouterLink :to="{ name: 'about' }" class="py-1  duration-500 transition-colors border-b-2 border-transparent hover:border-b-cyan-500" exact-active-class="border-b-2 border-b-cyan-500">
                    About
                </RouterLink>
                <RouterLink :to="{ name: 'blog' }" class="py-1  duration-500 transition-colors border-b-2 border-transparent hover:border-b-cyan-500" exact-active-class="border-b-2 border-b-cyan-500">
                    Blog
                </RouterLink>
                <RouterLink :to="{ name: 'contact' }" class="py-1  duration-500 transition-colors border-b-2 border-transparent hover:border-b-cyan-500" exact-active-class="border-b-2 border-b-cyan-500">
                    Contact
                </RouterLink>
            </div>

            <div class="text-gray-400 flex items-center gap-1 md:gap-3">
                <button @click="itemsOpen = !itemsOpen" class="focus:outline-none">
                  <div class="hover:bg-[#FE497B] hover:text-white duration-500 relative transition-colors p-2 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-6" viewBox="0 0 24 24"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                      <!-- <div v-if="wish.wishes.length > 0" class="p-[3px] bg-green-400 h-[18px] w-[18px] font-bold rounded-full text-white absolute top-[-1px]  right-[-1px] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5" viewBox="0 0 24 24"><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>  
                      </div> -->
                  </div>
                </button>
                <RouterLink :to="{name: 'user-cart'}">
                  <div class="hover:bg-[#FE497B] relative hover:text-white duration-500 transition-colors p-2 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-6" viewBox="0 0 24 24"><path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="16.5" cy="19.5" r="1.5"></circle></svg>
                      <div v-if="auth.isAuth">
                        <div v-if="cart.cart.length > 0" class="p-[3px] bg-[#FE497B] h-[18px] w-[18px] font-bold rounded-full text-white absolute top-[-1px]  right-[-1px] flex items-center justify-center">
                          <p class="text-xs">{{ cart.cart.length }}</p>
                        </div>
                      </div>
                  </div>
                </RouterLink>
                
                <Menu as="div" class="relative inline-block">
                  <div>
                    <MenuButton>
                      <div class="hover:bg-[#FE497B] hover:text-white duration-500 transition-colors p-2 rounded-full flex items-center justify-center">
                          <div class="relative">
                              <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-6" viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
                              <div  v-if="!auth.isAuth" class="bottom-0 left-4 top-3 absolute">
                                  <span class="relative flex h-3 w-3">
                                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FE497B] opacity-75"></span>
                                      <span class="relative inline-flex rounded-full h-3 w-3 bg-[#FE497B]"></span>
                                  </span>
                              </div>
                        </div>
                      </div>
                    </MenuButton>
                  </div>

                  <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                  >
                    <MenuItems class="absolute right-0 mt-2 w-36 p-1 origin-top-right text-gray-700 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div v-if="auth.isAuth" class="px-1 py-1">
                          <div v-if="auth.isAuth.user.is_admin">
                            <MenuItem>
                              <RouterLink :to="{ name: 'user-account' }" class="hover:bg-[#FE497B] hover:text-white text-left w-full rounded-md px-2 py-2 text-sm block" exact-active-class="bg-[#FE497B] text-white">
                                <button class="" >
                                  Account
                                </button>
                              </RouterLink>
                            </MenuItem>
                            <MenuItem>
                              <RouterLink :to="{ name: 'admin-guitar' }" class="hover:bg-[#FE497B] hover:text-white text-left w-full rounded-md px-2 py-2 text-sm block mt-1" exact-active-class="bg-[#FE497B] text-white">
                                <button  >
                                  Administration
                                </button>
                              </RouterLink>
                            </MenuItem>
                            <MenuItem>
                              <RouterLink :to="{ name: 'user-cart' }" class="hover:bg-[#FE497B] hover:text-white text-left w-full rounded-md px-2 py-2 text-sm block mt-1" exact-active-class="bg-[#FE497B] text-white">
                                <button  >
                                  Cart
                                </button>
                              </RouterLink>
                            </MenuItem>
                          </div>
                          <div v-else>
                            <MenuItem>
                              <RouterLink :to="{ name: 'user-account' }" class="hover:bg-[#FE497B] hover:text-white text-left w-full rounded-md px-2 py-2 text-sm block" exact-active-class="bg-[#FE497B] text-white">
                                <button  >
                                  Account
                                </button>
                              </RouterLink>
                            </MenuItem>
                            <MenuItem>
                              <RouterLink :to="{ name: 'user-cart' }" class="hover:bg-[#FE497B] hover:text-white text-left w-full rounded-md px-2 py-2 text-sm block mt-1" exact-active-class="bg-[#FE497B] text-white">
                                <button  >
                                  Cart
                                </button>
                              </RouterLink>
                            </MenuItem>
                          </div>
                      </div>
                      <div v-else class="px-1 py-1">
                        <MenuItem>
                          <RouterLink :to="{ name: 'register' }" class="hover:bg-[#FE497B] hover:text-white text-left w-full rounded-md px-2 py-2 text-sm block" exact-active-class="bg-[#FE497B] text-white">
                            <button >
                              Register
                            </button>
                          </RouterLink>
                        </MenuItem>
                        <MenuItem>
                          <RouterLink :to="{ name: 'login' }" class="hover:bg-[#FE497B] hover:text-white text-left w-full rounded-md px-2 py-2 text-sm block" exact-active-class="bg-[#FE497B] text-white">
                            <button >
                              Login
                            </button>
                          </RouterLink>
                        </MenuItem>
                      </div>
                      
                    </MenuItems>
                  </transition>
                </Menu>

                <div class="flex items-center justify-center md:hidden ml-1">
                    <button @click="isOpen = !isOpen" class="focus:outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    </button>
                </div>
            </div>
            
        </div>
    </div>

    <!-- mobile -->

    <div>
      <transition name="fade" mode="out-in">
    <div v-if="isOpen" @click="isOpen = !isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-20"></div>
  </transition>
    <transition name="slide" mode="out-in">
      <div
        v-if="isOpen"
        class="bg-slate-900 fixed top-0 right-0 h-full w-[60%] z-30 text-gray-200"
        key="menu"
      >
        <nav>
            <div class="mt-16 flex justify-center">
                <div class="inline-flex items-center justify-center">
                    <img class="h-auto w-16" src="https://img.icons8.com/3d-fluency/94/shopping-bag.png" alt="shopping-bag"/>
                    <h2 class="font-bold text-xl text-[#138FE2]"><span class="text-[#24C3EE]">e</span>Guitar</h2>
                </div>
            </div>
            <div class="flex flex-col gap-5 mt-6 text-right font-semibold">
                <RouterLink @click="isOpen = !isOpen" :to="{ name: 'home' }" class="py-1 px-10" exact-active-class="bg-slate-50 border-l-8 border-l-blue-500 text-gray-700">
                    Home
                </RouterLink>
                <RouterLink @click="isOpen = !isOpen" :to="{ name: 'shop' }" class="py-1 px-10" exact-active-class="bg-slate-50 border-l-8 border-l-blue-500 text-gray-700">
                    Shop
                </RouterLink>
                <RouterLink  @click="isOpen = !isOpen" :to="{ name: 'about' }" class="py-1 px-10" exact-active-class="bg-slate-50 border-l-8 border-l-blue-500 text-gray-700">
                    About
                </RouterLink>
                <RouterLink  @click="isOpen = !isOpen" :to="{ name: 'blog' }" class="py-1 px-10" exact-active-class="bg-slate-50 border-l-8 border-l-blue-500 text-gray-700">
                    Blog
                </RouterLink>
                <RouterLink  @click="isOpen = !isOpen" :to="{ name: 'contact' }" class="py-1 px-10" exact-active-class="bg-slate-50 border-l-8 border-l-blue-500 text-gray-700">
                    Contact
                </RouterLink>
            </div>
        </nav>
        <button @click="isOpen = false" class="focus:outline-none absolute top-4 right-6 p-2 rounded-full bg-slate-800 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </transition>
  </div>

  <!-- menu items -->

  <div>
    <transition name="fade" mode="out-in">
      <div v-if="itemsOpen" @click="itemsOpen = !itemsOpen" class="fixed inset-0 bg-black bg-opacity-50 z-20"></div>
    </transition>
    <transition name="slide" mode="out-in">
      <div v-if="itemsOpen" class="bg-slate-50 fixed py-5 px-2 top-0 right-0 h-full w-[100%] md:w-[50%] lg:w-[43%] xl:w-[35%] z-30 text-gray-500" key="menuItems">
        <h2 class="font-bold px-3 text-2xl pb-5 ">My Wish List </h2>  
        <div class="overflow-y-auto px-3" style="max-height: calc(84% - 50px);"> 
          <WishList></WishList>
        </div>
        <button @click="itemsOpen = false" class="focus:outline-none absolute top-4 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition duration-300 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"  stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div class="h-[118px] w-full left-0 px-5 bottom-0 absolute">
          <div class="h-full flex flex-col gap-4 pt-3">
            <div class="font-bold text-lg flex items-center justify-between">
                <p>Subtotal</p>
                <p>{{ formatPrice(wish.subTotal) }}</p>
            </div>
            <div class="flex items-center justify-between gap-5">
              <div class="flex-1">
                <Modal :onAccept="wish.emptyListWish">
                  <template v-slot:button >
                    <button type="button" class="w-full flex justify-center rounded-md transition duration-300 bg-red-200 px-8 py-3 text-sm font-medium text-red-900 hover:bg-red-300 focus:outline-none" >
                      Emty wish list
                    </button>
                  </template>
                  <template #title> Emty wish list</template>
                  <template #message>Are you sure to emty wish list?</template>
              </Modal>        
              </div> 
              <div class="flex-1">
                <button @click="addAndClose" type="button" class="w-full flex justify-center rounded-md transition duration-300 bg-blue-200 px-8 py-3 text-sm font-medium text-blue-900 hover:bg-blue-300 focus:outline-none">
                Add to cart
              </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>

</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
::-webkit-scrollbar {
  width: 9px;
}
/* Track del scrollbar */
::-webkit-scrollbar-track {
  background: #94a3b8;
}

/* Handle del scrollbar */
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 5px;
}

/* Handle del scrollbar al hacer hover */
::-webkit-scrollbar-thumb:hover {
  background: #b3c3d6;
}

</style>

