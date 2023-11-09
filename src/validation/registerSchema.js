export const registerSchema = {
    firstName(value){
        if (value) {
         value = value.trim(); // Elimina los espacios en blanco
        }
        if (!value) {
         return 'This field is required';
        }
        if (value.length > 15) {
            return 'First name must be no more than 15 characters';
        } 
        return true;
    },
    lastName(value){
        if (value) {
            value = value.trim(); // Elimina los espacios en blanco
        }
        if (!value) {
            return 'This field is required';
        }
        if (value.length > 15) {
            return 'First name must be no more than 15 characters';
        } 
        return true;
    },
    email(value){
        if (value) {
            value = value.trim(); // Elimina los espacios en blanco
        }
        if (!value) {
            return 'This field is required';
        }
         // si es un email válido
         const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
         if (!regex.test(value)) {
           return 'Invalid E-mail field';
         }
        return true;
    },
    password(value){
        if (value) {
            value = value.trim(); // Elimina los espacios en blanco
        }
        if (!value) {
            return 'This field is required';
        }
        if (value.length < 6) {
            return 'Password must be at least 6 characters';
        } 
        return true;
    }
}