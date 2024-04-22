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
            return <Round key={key} roundPayload={round}/>
        });
    }, [rounds]);

    return <div className="w-full">
        <Search userID={userID} setUserID={setUserID}></Search>
        {roundsMemo}
    </div>
}