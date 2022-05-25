import React from 'react'
import { createContext } from "react";
import { useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [shopData, setShopData] = useState({
        tickets: [],
        tents: [],
        campground: "",
        greenCamping: {},
        persons: [],
        activeStep: 0,
    });
    const value = {
        shopData,
        setShopData
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
