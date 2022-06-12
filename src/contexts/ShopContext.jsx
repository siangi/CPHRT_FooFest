import React from 'react'
import { createContext } from "react";
import { useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const baseImagePath = process.env.PUBLIC_URL + "/images/";
    const [shopData, setShopData] = useState({
        tickets: [{
            id: 0,
            title:"Regular",
            price:799,
            description:"- Access to our 3 stages and 5 campgrounds.",
            description2:"- 13 bars with a Copenhagens biggest selection of tap-beer, as well as a variaty alcohol and non-alcohol beverages.",
            description3:"- 15 food trucks and stands with a broad selection of food and snacks.",
            description4:"- 24/7 access to hygiene facilities, including approxamatly 20 hot showers (20 kr per shower) and over 100 free cold showers.",
            imagePath: baseImagePath + "barcode_regular.svg",
            amount: 0,
            
          },{
            id: 1,
            title:"VIP",
            price:1299,
            description:"The VIP-ticket will give you the benefits of the regular ticket, plus:",
            description2:"- Access to our raised plattforms to get the best view, and VIP-bar.",
            description3:"- 50% on all warm-water showers located at our hygiene facilites.",
            description4:"- Free access to our refresh-tents with mirrors, electricity, hairdryers and powerbanks.",    
            imagePath: baseImagePath + "barcode_vip_gold.svg",
            amount: 0,
          }],
        tents: [
            {
                id: 0,
                title:"2 Person Tent",
                price:299,
                description:"This tent comfortably fits two people and their luggage, so you can skip the annoying set-up and get to partying immediatly. It will be completely set up and ready as soon as you arrive. Marked and reserved und your name.",
                imagePath: baseImagePath + "2PersonTent.jpg",
                spaceForPeople: 2,
                amountOfTents: 0,
                
            },
            {
                id: 1,
                title:"3 Person Tent",
                price:399,
                description:"You can leave all your tent related worries at home, as long as you book this spacious three person tent. It will be completely set up and ready as soon as you arrive. Marked and reserved und your name.",
                imagePath: baseImagePath + "3PersonTent.jpg",
                spaceForPeople: 3,
                amountOfTents: 0,
            }
        ],
        campground: "",
        greenCamping: {
            title: "Green Camping",
            price:249,
            selected: false,
            description: "The climate crisis is no joke and a big festival like this puts a lot of strain on the ground it's standing on. That's why we give you the option to compensate any damages to the environment you cause while camping. The money will go to maintaing water treatment facilities in the area and restoring plant life on the festival grounds",
            labelText: "add green Camping",
            imagePath: process.env.PUBLIC_URL + "/icons/leaf.svg"
        },
        bookingFee: {
            title: "Booking Fee",
            price:99,
            description: "Lorem Ipsum dolor Sit amet",
        },
        persons: [],
        activeStep: 0
    });
    const value = {
        shopData,
        setShopData
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
