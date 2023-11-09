import { defineStore } from "pinia";
import { ref, onMounted, computed, watch } from "vue";

export  const wishListStore = defineStore('wish', () => {

    const wishes = ref([]);
    const successMsg = ref('');

    onMounted(() => {
      /*   const wishStorage = localStorage.getItem('wishList');
        if(wishStorage){
            wishes.value = JSON.parse(wishStorage);
           
        } */
        let wishStorage = JSON.parse(localStorage.getItem('wishList')) || [];
        wishes.value = wishStorage;
       /*  console.log(wishStorage) */
    })

    watch(wishes, () => {
        saveLocalStorage();
    }, {
        deep: true
    })

    const saveLocalStorage = () => {
        localStorage.setItem('wishList', JSON.stringify(wishes.value));
    }

    const listWishes = computed(() => {
        return wishes.value
    })

    const addWish = (item) => {
        const exitsGuitar = wishes.value.findIndex(guitar => guitar.id === item.id );
        if(exitsGuitar >= 0){
            if(wishes.value[exitsGuitar].amount >= 5) return
            wishes.value[exitsGuitar].amount++;
        }else {
            item.amount = 1;
            wishes.value.push(item);
        }
        successMsg.value = 'Guitar added successfully'
        setTimeout(() => {
            successMsg.value = '';
        }, 5000);
    }

    const hasSuccess = computed(() => {
        return successMsg.value;
    })
    
    const subTotal = computed(() => {
        return wishes.value.reduce((total, guitar) => total + (guitar.amount * guitar.actual_price), 0);
    })

    const deleteItem = (id) => {
        const index = wishes.value.findIndex(item => item.id === id);
        if(index >= 0){
            wishes.value.splice(index, 1);
        }
    }

    const emptyListWish = () => {
        wishes.value.splice(0, wishes.value.length);
    }

    return {
        listWishes,
        addWish,
        subTotal,
        emptyListWish,
        deleteItem,
        wishes,
        hasSuccess
    }

})