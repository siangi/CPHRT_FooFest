import React from 'react'
import { createContext } from "react";
import { useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const baseIconPath = process.env.PUBLIC_URL + "/icons/";
    const baseImagePath = process.env.PUBLIC_URL + "/images/";
    const [shopData, setShopData] = useState({
        tickets: [{
            id: 0,
            title:"Regular",
            price:799,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
            imagePath: baseIconPath + "RegularTicketGold.svg",
            amount: 0,
          },{
            id: 1,
            title:"VIP",
            price:1299,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
            imagePath: baseIconPath + "VIPGold.svg",
            amount: 0,
          }],
        tents: [
            {
                id: 0,
                title:"3 Person Tent",
                price:399,
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
                imagePath: baseImagePath + "3PersonTent.jpg",
                spaceForPeople: 3,
                amountOfTents: 0,
            },
            {
                id: 1,
                title:"2 Person Tent",
                price:299,
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
                imagePath: baseImagePath + "2PersonTent.jpg",
                spaceForPeople: 2,
                amountOfTents: 0,
            }
        ],
        campground: "",
        greenCamping: {
            title: "Green Camping",
            price:249,
            selected: false,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
            labelText: "add green Camping",
            imagePath: process.env.PUBLIC_URL + "/icons/leaf.svg"
        },
        bookingFee: {
            title: "Booking Fee",
            price:99,
            description: "Lorem Ipsum dolor Sit amet",
        },
        persons: [],
        activeStep: 0,
    });
    const value = {
        shopData,
        setShopData
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
