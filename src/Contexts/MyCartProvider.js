import React, {useState} from "react";
import MyCartContext from "./MyCartContext";

const MyCartProvider = (props)=>{
    const [cartItems, setCartItems] = useState([]);
    return (
        <MyCartContext.Provider value={{cartItems, setCartItems}}>
            {props.children}
        </MyCartContext.Provider>
    )
}

export default MyCartProvider;