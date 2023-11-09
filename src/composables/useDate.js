
export default function useDate() {

    const friendlyDate = (dateUser) => {
        const date = new Date(dateUser);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        
        return `${day}/${month}/${year}`
    }

    return {
        friendlyDate
    }
}