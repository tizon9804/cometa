import {ReactElement} from "react";
import {Item, RoundPayload} from "@/services/order/orderService";

interface Props {
    roundPayload: RoundPayload
}

export const Round = ({roundPayload}: Props): ReactElement => {
    return <div className="mt-3">
        <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Round</div>
                {
                    roundPayload.items.map((item: Item, key) => {
                        return <>
                            <div key={key} className="grid grid-cols-3 gap-4">
                                <div>{item.name}</div>
                                <div>{item.quantity}</div>
                                <div>${item.price}</div>
                            </div>
                        </>
                    })
                }
            </div>
            <div className="px-6 pt-4 pb-2">
                   <span
                       className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">created: {roundPayload.created}</span>
            </div>
        </div>
    </div>
}