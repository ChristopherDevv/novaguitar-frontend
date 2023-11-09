export const guitarSchema = {
    name(value){
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
    fullName(value){
        if (value) {
            value = value.trim(); // Elimina los espacios en blanco
        }
        if (!value) {
            return 'This field is required';
        }
        return true;
    },
    category(value){
        if (value) {
            value = value.trim(); // Elimina los espacios en blanco
        }
        if (!value) {
            return 'This field is required';
        }
        return true;
    },
    color(value){
        if (value) {
            value = value.trim(); // Elimina los espacios en blanco
        }
        if (!value) {
            return 'This field is required';
        }
        return true;
    },
    description(value){
        if (value) {
            value = value.trim(); // Elimina los espacios en blanco
        }
        if (!value) {
            return 'This field is required';
        }
        if (value.length > 255) {
            return 'Description must be 255 characters or less';
        }
        return true;
    },
    specifications(value){
        if (value) {
            value = value.trim(); // Elimina los espacios en blanco
        }
        if (!value) {
            return 'This field is required';
        }
        if (value.length > 255) {
            return 'Description must be 255 characters or less';
        }
        return true;
    },
    care_maintenance(value){
        if (value) {
            value = value.trim(); // Elimina los espacios en blanco
        }
        if (!value) {
            return 'This field is required';
        }
        if (value.length > 255) {
            return 'Description must be 255 characters or less';
        }
        return true;
    },
    rating(value){
        if (/^[1-5]$/.test(value)) return true
        return 'Rating must be between a range of 1 and 5';
    },
    price(value){
        if (/^[1-9][0-9]*(\.[0-9]+)?$/.test(value)) return true;
        return 'Stock must be greater than 0';
    },
    discount(value){
        if (!Number.isInteger(Number(value))) {
            return 'Discount must be an integer';
        }
        value = Number(value);
        if (value < 1 || value > 100) {
            return 'Discount must be between a range of 1 and 100';
        }
        return true;
    },
    stock(value){
        if (/^[1-9][0-9]*$/.test(value)) return true
        return 'Stock must be greater than 0';
    },
    image_url(value){
        if (!value) {
            return 'This field is required';
        }
        
        return true;
    }
}