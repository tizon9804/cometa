"use client";

import {ReactElement, useEffect, useMemo, useState} from "react";
import {Search} from "@/components/search/search";
import {Round} from "@/components/round/round";
import {OrderStatus, RoundPayload, useOrder} from "@/services/order/orderService";


export const Order = (): ReactElement => {
    const {getOrderStatus}  = useOrder()
    const [orderStatus, setOrderStatus] = useState<OrderStatus|undefined>(undefined);
    const [rounds, setRounds] = useState<RoundPayload[]>([]);
    const [userID, setUserID] = useState("");

    useEffect(() => {
        if(userID != "") {
            getOrderStatus(setOrderStatus, userID).then()
        }
    }, [userID])

    useEffect(() => {
        if(orderStatus) {
            setRounds([...orderStatus.round])
        }
    }, [orderStatus])

    const roundsMemo = useMemo(() => {
        return rounds?.map((round, key) => {
            return <div key={key}>
                <Round roundPayload={round}/>
            </div>
        });
    }, [rounds]);

    const orderStatusMemo =  useMemo(()=> {
        if(orderStatus?.round.length == 0) {
            return <div>No Data</div>
        }
        return <>
            <div className="relative mt-2">
                <input type="text" id="floating_filled"
                       className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder=" " value={orderStatus?.subtotal} disabled/>
                <label htmlFor="floating_filled"
                       className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                    Sub Total
                </label>
            </div>
            <div className="relative mt-2">
                <input type="text" id="floating_filled"
                       className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder=" " value={orderStatus?.taxes} disabled/>
                <label htmlFor="floating_filled"
                       className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                    Taxes
                </label>
            </div>
            <div className="relative mt-2">
                <input type="text" id="floating_filled"
                       className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder=" " value={orderStatus?.discounts} disabled/>
                <label htmlFor="floating_filled"
                       className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                    Discounts
                </label>
            </div>
        </>
    }, [orderStatus])

    return <div className="w-full">
        <Search userID={userID} setUserID={setUserID}></Search>
        {roundsMemo}
        {orderStatusMemo}
    </div>
}