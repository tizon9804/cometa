import axios from "axios";

export interface Item {
    id: string
    name: string
    price: number
    quantity: number
}

export interface RoundPayload {
    created: string
    user_id: string
    items: Item[]
}

export interface OrderStatus {
    created: string
    paid: boolean
    subtotal: number
    taxes: number
    discounts: number
    round: RoundPayload[]
}

export const useOrder = () => {

    const getOrderStatus = async (setOrder: Function, userID: string) => {
        const response =  await axios.get(`http://localhost:8000/api/order/?user_id=${userID}`).catch((e)=> {
            console.error(e)
            return {data: {}}
        });
        setOrder({...response.data})
    }

    return {
        getOrderStatus
    }
}