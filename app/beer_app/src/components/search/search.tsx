import {ReactElement, SetStateAction, useState} from "react";

interface Props {
    userID: string
    setUserID: Function
}

export const Search = ({userID, setUserID}: Props): ReactElement => {

    const [inputValue, setInputValue] = useState(userID);
    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setInputValue(e.target.value);
    };

    const searchUser = () => {
        if(inputValue === userID) {
            setUserID("")
        }
        setUserID(inputValue);
    };


    return <div className="max-w-md mx-auto">
            <label htmlFor="default-search"
                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search Order Status</label>
            <div className="relative">
                <input type="search" id="default-search"
                       className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="user id"
                       value={inputValue}
                       onChange={handleInputChange}
                       required/>
                <button type="button"
                        onClick={searchUser}
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search Order Status
                </button>
            </div>
    </div>
}