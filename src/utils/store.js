import { createContext, useState } from "react";

export const storeContext = createContext();

export const StoreProvider = ({children}) => {
    const [eventsData, setEventsData] = useState()
    const store = {
        eventsData : eventsData,
        fetchData : (apiUrl) => {
            fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(typeof(data.item))
                setEventsData(data.item)
            })
            .catch(error => console.log(error.message))
        },
    };

    return(
        <storeContext.Provider value={store}>
            {children}
        </storeContext.Provider>
    )
};
