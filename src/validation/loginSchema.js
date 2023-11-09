export const loginSchema = {
    email(value) {
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
    password(value) {
        if(value){
          value = value.trim();
        }
        if (value) return true
        return 'This field is required'
    }
}