import {createContext, useState} from "react";

const Context = createContext(null);
const ContextProvider = ({children}) => {
    const episode = useState(null);

    return (
        <Context.Provider value={episode}>
            {children}
        </Context.Provider>
    );
}

export {
    ContextProvider,
    Context
}