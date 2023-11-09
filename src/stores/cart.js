import { defineStore } from "pinia";
import { ref, onMounted, computed, watch } from "vue";
import { wishListStore } from './wishList'
import { useRouter } from 'vue-router'

export const cartStore = defineStore('cart', () => {

    const cart = ref([]);
    const wish = wishListStore();
    const wishes = ref([]);
    const router = useRouter();
    const successMsg = ref('');

    onMounted(() => {
        wishes.value = wish.wishes;
        const cartStorage = localStorage.getItem('cart');
        if(cartStorage){
            /* utilizamos Array.prototype.push.apply para asegurarnos de que cada item del carrito se añade individualmente al array cart.value. */
            Array.prototype.push.apply(cart.value, JSON.parse(cartStorage));
        }
    })

    watch(cart, () => {
        saveLocalStorage();
    }, {
        deep: true
    })

    const saveLocalStorage = () => {
        localStorage.setItem('cart', JSON.stringify(cart.value))
    }

    const addItem = (guitar) => {
        const indexItem = cart.value.findIndex(item => item.id === guitar.id);
        if(indexItem >= 0){
            if(cart.value[indexItem].amount >= 5) return
            cart.value[indexItem].amount++;
        }else {
            guitar.amount = 1;
            cart.value.push(guitar);
        }
        successMsg.value = 'Guitar added successfully'
        setTimeout(() => {
            successMsg.value = '';
        }, 5000);
    }

    const increaseQuantity = (id) => {
       const index = cart.value.findIndex(item => item.id === id);
       if(index >= 0){
           if(cart.value[index].amount >= 5) return
           cart.value[index].amount++;
       }
    }
    const decreaseQuantity = (id) => {
        const index = cart.value.findIndex(item => item.id === id);
        if(index >= 0){
            if(cart.value[index].amount <= 1) return
            cart.value[index].amount--;
        }
    }

    const deleteItem = (id) => {
        const index = cart.value.findIndex(item => item.id === id);
        if(index >= 0){
            cart.value.splice(index, 1);
        }
    }

    const emptyCart = () => {
        cart.value.splice(0, cart.value.length);
    }

    /* es un comportamiento común en JavaScript cuando se trata de objetos y arrays, que son tipos de datos por referencia.
    Cuando haces cart.value.push(item), estás agregando una referencia al objeto item en el array cart.value. Esto significa 
    que item en cart.value y item en wishes.value apuntan al mismo objeto en la memoria. Por lo tanto, cuando modificas uno, 
    también modificas el otro.
    Para evitar este comportamiento, puedes crear una copia del objeto antes de agregarlo al carrito. Esto se puede hacer con 
    el operador de propagación (...),  */
    const addWishtoCart = () => {
        /* {...item}: Los tres puntos ... antes de item se llaman el operador de propagación (spread operator) en 
        JavaScript. Este operador toma un objeto o un array y lo expande en sus elementos individuales. En este caso, 
        {...item} crea una copia del objeto item, con todas sus propiedades. , amount: item.amount > 5 ? 5 : item.amount: 
        Después de la coma, estamos agregando o sobrescribiendo la propiedad amount en el nuevo objeto que estamos creando. 
        item.amount > 5 ? 5 : item.amount es un operador ternario, que es una forma concisa de escribir una instrucción if-else. 
        Está comprobando si item.amount es mayor que 5. Si es así, devuelve 5. Si no, devuelve el valor actual de item.amount.
        Por lo tanto, {...item, amount: item.amount > 5 ? 5 : item.amount} crea una copia del objeto item, pero con 
        la propiedad amount posiblemente modificada para asegurar que no sea mayor que 5. */
        wishes.value.forEach(item => {
            let index = cart.value.findIndex(guitar => guitar.id === item.id);
            if(index >= 0){
               // Si el item ya existe en el carrito, incrementa su cantidad pero no más de 5
                let newAmount = cart.value[index].amount + item.amount;
                cart.value[index].amount = newAmount >= 5 ? 5 : newAmount;
            }else{
                //cart.value.push(item)
                /* Crea una nueva copia del objeto item utilizando el operador de propagación (...). Esto asegura que el objeto que se 
                agrega al carrito es un nuevo objeto, no una referencia al objeto original en la lista de deseos.
                Modifica la propiedad amount en la nueva copia del objeto. Si item.amount es mayor que 5, establece amount a 5. Si no, 
                deja amount como está. */
                 // Si el item no existe en el carrito, agrégalo
                 cart.value.push({...item, amount: item.amount >= 5 ? 5 : item.amount})
            }
        });

        wish.emptyListWish();
        router.push({name: 'user-cart' })
    }

    const hasSuccess = computed(() => {
        return successMsg.value;
    })

    const cartList = computed(() => {
        return cart.value
    })

    const totalCart = computed(() => {
        return cart.value.reduce((total, item) => total + (item.price * item.amount), 0);
    })

    return {
        addWishtoCart,
        addItem,
        increaseQuantity,
        decreaseQuantity,
        deleteItem,
        emptyCart,
        cartList,
        totalCart,
        hasSuccess,
        cart
    }
})