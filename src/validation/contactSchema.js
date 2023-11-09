
export const contactSchema = {
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
    phone(value){
        if (!Number.isInteger(Number(value))) {
            return 'Phone must be an integer';
        }
        if(Number(value) <= 0){
            return 'Phone must not be negative';
        }
        value = String(value);
        if (value.length > 10) {
            return 'Phone must have 10 numbers';
        }
        return true;
    },
    message(value){
        if (value) {
            value = value.trim(); // Elimina los espacios en blanco
           }
           if (!value) {
            return 'This field is required';
           }
           if (value.length < 5) {
               return 'The message must be 5 characters';
           } 
           return true;
    }
}