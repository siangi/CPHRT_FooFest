import React from 'react'
import { useState } from 'react'

function CampgroundsMap(props) {
    const [activeCampGround, setactiveCampGround] = useState("");
    const activeClassString = "transition-all duration-300 origin-center scale-110 opacity-100";
    const nonActiveClass = "transition-all duration-300 origin-center opacity-90";

    function clickHandler(campground, event){
        setactiveCampGround(campground);
        props.clickFunc(campground, event)
    }
    
  return (
    <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="-20 -30 527 559" className='h-96 md:h-auto max-h-full max-w-full flex-auto'>
        <g>
            <path fill="#545463" d="M185.6,75.7l72.7-66.8L379,65.5l-87.6,66.3l-96.9-8.3L185.6,75.7z"/>
            <path fill="#0E0E0E" d="M250.3,88.5V103h-3.1V88.5H250.3z M255.8,96.7v6.3h-3V92.1h2.9V94h0.1c0.2-0.6,0.6-1.1,1.2-1.5
                c0.6-0.4,1.3-0.6,2.1-0.6c0.8,0,1.4,0.2,2,0.5c0.6,0.3,1,0.8,1.3,1.4c0.3,0.6,0.5,1.3,0.5,2.2v6.9h-3v-6.4c0-0.7-0.2-1.2-0.5-1.6
                c-0.3-0.4-0.8-0.6-1.4-0.6c-0.4,0-0.8,0.1-1.1,0.3c-0.3,0.2-0.5,0.4-0.7,0.8C255.9,95.8,255.8,96.2,255.8,96.7z M271.1,92.1v2.3
                h-6.7v-2.3H271.1z M265.9,103V91.3c0-0.8,0.2-1.4,0.5-2c0.3-0.5,0.7-0.9,1.3-1.2c0.5-0.3,1.2-0.4,1.8-0.4c0.5,0,0.9,0,1.3,0.1
                c0.4,0.1,0.7,0.1,0.9,0.2l-0.5,2.3c-0.1,0-0.3-0.1-0.4-0.1c-0.2,0-0.3,0-0.5,0c-0.4,0-0.8,0.1-0.9,0.3c-0.2,0.2-0.3,0.5-0.3,0.9
                V103H265.9z M272.9,103V92.1h3V103H272.9z M274.5,90.7c-0.4,0-0.8-0.1-1.2-0.4c-0.3-0.3-0.5-0.7-0.5-1.1c0-0.4,0.2-0.8,0.5-1.1
                c0.3-0.3,0.7-0.5,1.2-0.5c0.4,0,0.8,0.2,1.2,0.5c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1C275.3,90.5,274.9,90.7,274.5,90.7z
                M283.4,103.2c-1.1,0-2.1-0.2-2.9-0.7c-0.8-0.5-1.4-1.1-1.9-1.9c-0.4-0.8-0.7-1.8-0.7-3c0-1.1,0.2-2.1,0.7-3c0.4-0.8,1-1.5,1.8-2
                c0.8-0.5,1.7-0.7,2.8-0.7c0.7,0,1.4,0.1,2,0.3c0.6,0.2,1.2,0.6,1.6,1c0.5,0.5,0.8,1,1.1,1.7c0.3,0.7,0.4,1.5,0.4,2.4v0.8h-9.2v-1.9
                h6.4c0-0.4-0.1-0.8-0.3-1.2c-0.2-0.3-0.5-0.6-0.8-0.8c-0.3-0.2-0.7-0.3-1.2-0.3c-0.5,0-0.9,0.1-1.2,0.3c-0.4,0.2-0.6,0.5-0.8,0.8
                c-0.2,0.4-0.3,0.7-0.3,1.2v1.8c0,0.5,0.1,1,0.3,1.4c0.2,0.4,0.5,0.7,0.9,0.9c0.4,0.2,0.8,0.3,1.3,0.3c0.3,0,0.6,0,0.9-0.1
                c0.3-0.1,0.5-0.2,0.7-0.4c0.2-0.2,0.4-0.4,0.5-0.7l2.8,0.2c-0.1,0.7-0.4,1.3-0.9,1.8c-0.4,0.5-1,0.9-1.7,1.2
                C285.1,103.1,284.3,103.2,283.4,103.2z M293.4,88.5V103h-3V88.5H293.4z M299.8,103.2c-0.8,0-1.6-0.2-2.3-0.6
                c-0.7-0.4-1.2-1.1-1.6-1.9c-0.4-0.8-0.6-1.9-0.6-3.1c0-1.2,0.2-2.3,0.6-3.1c0.4-0.8,0.9-1.5,1.6-1.9c0.7-0.4,1.4-0.6,2.2-0.6
                c0.6,0,1.1,0.1,1.5,0.3c0.4,0.2,0.7,0.5,1,0.8c0.3,0.3,0.5,0.6,0.6,0.9h0.1v-5.5h3V103h-3v-1.7h-0.1c-0.1,0.3-0.3,0.6-0.6,0.9
                c-0.3,0.3-0.6,0.5-1,0.7C300.9,103.1,300.4,103.2,299.8,103.2z M300.8,100.8c0.5,0,0.9-0.1,1.2-0.4c0.3-0.3,0.6-0.6,0.8-1.1
                c0.2-0.5,0.3-1,0.3-1.7c0-0.6-0.1-1.2-0.3-1.7c-0.2-0.5-0.4-0.8-0.8-1.1c-0.3-0.3-0.8-0.4-1.2-0.4c-0.5,0-0.9,0.1-1.3,0.4
                c-0.3,0.3-0.6,0.6-0.8,1.1c-0.2,0.5-0.3,1-0.3,1.7c0,0.6,0.1,1.2,0.3,1.7c0.2,0.5,0.4,0.9,0.8,1.1
                C299.9,100.6,300.3,100.8,300.8,100.8z"/>
            <path d="M313.6,45.7l4.2,3.2l-12.7,9.7l14.3,11l-4.2,3.2l-18.5-14.1L313.6,45.7z M313.4,58.6l4.2-3.2l18.5,14.1l-16.9,12.9
                l-4.3-3.1l12.8-9.8L313.4,58.6z"/>
            <path d="M276.6,45.7v28.1l-8-6.4l-2.6,3.2l14.7,11.8V54.3l8,6.4l2.6-3.2L276.6,45.7z"/>
            
                <rect x="225.3" y="50.3" transform="matrix(0.687 -0.7266 0.7266 0.687 28.4346 193.3564)" fill="none" stroke="#000000" strokeWidth="4" width="26.7" height="26.7"/>
        </g>
        <g onClick={(event) => clickHandler("Svartheim", event)} className={activeCampGround === "Svartheim" ? activeClassString : nonActiveClass}>
            <path fill="#B85C38" d="M151.3,0H42.6L20.7,198.6l51.7,63.6l69.6-74.1l52.7-62.9l-9.1-50.8L151.3,0z"/>
            <path fill="#0E0E0E" d="M56.8,120.1c-0.1-0.7-0.4-1.3-1-1.7c-0.6-0.4-1.3-0.6-2.2-0.6c-0.6,0-1.2,0.1-1.7,0.3
                c-0.5,0.2-0.9,0.5-1.1,0.9c-0.3,0.4-0.4,0.8-0.4,1.2c0,0.4,0.1,0.7,0.3,1c0.2,0.3,0.4,0.5,0.7,0.7c0.3,0.2,0.6,0.3,0.9,0.4
                c0.3,0.1,0.6,0.2,0.9,0.3l1.5,0.4c0.4,0.1,0.8,0.2,1.3,0.4c0.5,0.2,0.9,0.4,1.3,0.7c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.4,1,0.4,1.7
                c0,0.8-0.2,1.5-0.6,2.1c-0.4,0.6-1,1.1-1.8,1.5c-0.8,0.4-1.7,0.6-2.8,0.6c-1,0-1.9-0.2-2.7-0.5c-0.8-0.3-1.4-0.8-1.8-1.4
                c-0.4-0.6-0.7-1.3-0.7-2.1H50c0,0.5,0.2,1,0.6,1.4c0.3,0.4,0.7,0.6,1.2,0.8c0.5,0.2,1,0.3,1.6,0.3c0.7,0,1.3-0.1,1.8-0.3
                c0.5-0.2,1-0.5,1.3-0.9c0.3-0.4,0.5-0.9,0.5-1.4c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.6-0.5-1.1-0.7c-0.4-0.2-0.9-0.4-1.4-0.5
                l-1.8-0.5c-1.1-0.3-2-0.8-2.7-1.4c-0.7-0.6-1-1.4-1-2.4c0-0.8,0.2-1.5,0.7-2.1c0.4-0.6,1-1.1,1.8-1.4c0.8-0.3,1.6-0.5,2.5-0.5
                c0.9,0,1.8,0.2,2.5,0.5c0.7,0.3,1.3,0.8,1.7,1.4c0.4,0.6,0.7,1.2,0.7,2H56.8z M70.3,120.1l-4,10.9h-1.7l-4-10.9h1.8l3,8.7h0.1
                l3-8.7H70.3z M75.4,131.3c-0.7,0-1.3-0.1-1.9-0.4c-0.6-0.3-1-0.6-1.3-1.1c-0.3-0.5-0.5-1.1-0.5-1.8c0-0.6,0.1-1.1,0.4-1.5
                c0.2-0.4,0.6-0.7,1-0.9c0.4-0.2,0.9-0.4,1.4-0.5c0.5-0.1,1-0.2,1.5-0.3c0.7-0.1,1.2-0.1,1.6-0.2c0.4,0,0.7-0.1,0.9-0.2
                c0.2-0.1,0.3-0.3,0.3-0.6v-0.1c0-0.7-0.2-1.2-0.6-1.6c-0.4-0.4-1-0.6-1.7-0.6c-0.8,0-1.4,0.2-1.9,0.5c-0.5,0.3-0.8,0.7-1,1.1
                l-1.6-0.6c0.3-0.7,0.7-1.2,1.1-1.5c0.5-0.4,1-0.6,1.6-0.8c0.6-0.2,1.1-0.2,1.7-0.2c0.4,0,0.8,0,1.2,0.1c0.5,0.1,0.9,0.2,1.3,0.5
                c0.4,0.3,0.8,0.6,1.1,1.2c0.3,0.5,0.4,1.2,0.4,2.1v7.2h-1.7v-1.5h-0.1c-0.1,0.2-0.3,0.5-0.6,0.8c-0.3,0.3-0.6,0.5-1.1,0.7
                C76.5,131.2,76,131.3,75.4,131.3z M75.6,129.7c0.7,0,1.2-0.1,1.7-0.4c0.5-0.3,0.8-0.6,1-1c0.2-0.4,0.4-0.8,0.4-1.3v-1.5
                c-0.1,0.1-0.2,0.2-0.5,0.2c-0.2,0.1-0.5,0.1-0.8,0.2c-0.3,0-0.6,0.1-0.9,0.1c-0.3,0-0.5,0.1-0.7,0.1c-0.4,0.1-0.8,0.1-1.2,0.3
                c-0.4,0.1-0.7,0.3-0.9,0.6c-0.2,0.2-0.3,0.6-0.3,1c0,0.6,0.2,1,0.6,1.3C74.4,129.6,74.9,129.7,75.6,129.7z M83.4,131v-10.9H85v1.6
                h0.1c0.2-0.5,0.6-1,1.1-1.3c0.5-0.3,1.1-0.5,1.8-0.5c0.1,0,0.3,0,0.5,0c0.2,0,0.3,0,0.4,0v1.7c-0.1,0-0.2,0-0.4-0.1
                c-0.2,0-0.4,0-0.6,0c-0.5,0-1,0.1-1.4,0.3c-0.4,0.2-0.7,0.5-1,0.9c-0.2,0.4-0.4,0.8-0.4,1.3v6.9H83.4z M96.3,120.1v1.4h-5.7v-1.4
                H96.3z M92.3,117.5H94v10.4c0,0.5,0.1,0.8,0.2,1.1c0.1,0.2,0.3,0.4,0.5,0.5c0.2,0.1,0.5,0.1,0.7,0.1c0.2,0,0.3,0,0.5,0
                c0.1,0,0.2,0,0.3-0.1l0.3,1.5c-0.1,0-0.3,0.1-0.5,0.1c-0.2,0-0.5,0.1-0.8,0.1c-0.5,0-0.9-0.1-1.4-0.3c-0.4-0.2-0.8-0.5-1.1-0.9
                c-0.3-0.4-0.4-0.9-0.4-1.6V117.5z M100.7,124.4v6.6H99v-14.5h1.7v5.3h0.1c0.3-0.6,0.6-1,1.2-1.3c0.5-0.3,1.2-0.5,2.1-0.5
                c0.7,0,1.4,0.1,2,0.4c0.6,0.3,1,0.7,1.3,1.4c0.3,0.6,0.5,1.4,0.5,2.3v6.9h-1.7v-6.8c0-0.9-0.2-1.5-0.7-2c-0.4-0.5-1.1-0.7-1.9-0.7
                c-0.5,0-1,0.1-1.5,0.3c-0.4,0.2-0.8,0.6-1,1C100.8,123.3,100.7,123.8,100.7,124.4z M115.4,131.2c-1.1,0-2-0.2-2.7-0.7
                c-0.8-0.5-1.3-1.1-1.8-2c-0.4-0.8-0.6-1.8-0.6-2.9c0-1.1,0.2-2.1,0.6-3c0.4-0.9,1-1.5,1.7-2c0.7-0.5,1.6-0.7,2.6-0.7
                c0.6,0,1.1,0.1,1.7,0.3c0.6,0.2,1.1,0.5,1.5,0.9c0.5,0.4,0.8,1,1.1,1.7c0.3,0.7,0.4,1.6,0.4,2.6v0.7h-8.4v-1.4h6.7
                c0-0.6-0.1-1.2-0.4-1.6c-0.2-0.5-0.6-0.9-1-1.1c-0.4-0.3-1-0.4-1.6-0.4c-0.7,0-1.2,0.2-1.7,0.5c-0.5,0.3-0.9,0.8-1.1,1.3
                c-0.3,0.5-0.4,1.1-0.4,1.7v1c0,0.8,0.1,1.5,0.4,2.1c0.3,0.6,0.7,1,1.2,1.3c0.5,0.3,1.1,0.4,1.8,0.4c0.4,0,0.8-0.1,1.2-0.2
                c0.4-0.1,0.7-0.3,0.9-0.6c0.3-0.3,0.5-0.6,0.6-1l1.6,0.5c-0.2,0.5-0.5,1-0.9,1.4c-0.4,0.4-0.9,0.7-1.5,1
                C116.8,131.1,116.2,131.2,115.4,131.2z M122.5,131v-10.9h1.7V131H122.5z M123.4,118.3c-0.3,0-0.6-0.1-0.8-0.3
                c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.4,0.5,0.4,0.8
                c0,0.3-0.1,0.6-0.4,0.8C124,118.2,123.7,118.3,123.4,118.3z M127.2,131v-10.9h1.6v1.7h0.1c0.2-0.6,0.6-1,1.1-1.4
                c0.5-0.3,1.1-0.5,1.8-0.5c0.7,0,1.3,0.2,1.8,0.5c0.5,0.3,0.9,0.8,1.1,1.4h0.1c0.3-0.6,0.7-1,1.3-1.3c0.6-0.3,1.2-0.5,2-0.5
                c1,0,1.8,0.3,2.4,0.9c0.6,0.6,0.9,1.6,0.9,2.8v7.3h-1.7v-7.3c0-0.8-0.2-1.4-0.7-1.7s-1-0.5-1.6-0.5c-0.8,0-1.4,0.2-1.8,0.7
                c-0.4,0.5-0.6,1-0.6,1.7v7.1h-1.7v-7.5c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.2,0.3
                c-0.4,0.2-0.7,0.6-0.9,1c-0.2,0.4-0.3,0.9-0.3,1.4v6.8H127.2z"/>
            <path d="M87,70v26.8l11.2-9V106h4.1V79.2l-11.2,9V70H87z"/>
        </g>
        <g onClick={(event) => clickHandler("Nilfheim", event)} className={activeCampGround === "Nilfheim" ? activeClassString : nonActiveClass}>
            <path fill="#61A9BD" d="M433.2,23.6L291.4,131.8l17.3,171.4L451,319.7L477,211L433.2,23.6z"/>
            <path fill="#0E0E0E" d="M354.6,198.5V213h-1.7l-7.9-11.4h-0.1V213h-1.8v-14.5h1.7l8,11.4h0.1v-11.4H354.6z M357.9,213v-10.9h1.7V213
                H357.9z M358.8,200.3c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3
                c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.4,0.5,0.4,0.8c0,0.3-0.1,0.6-0.4,0.8C359.4,200.2,359.1,200.3,358.8,200.3z M364.3,198.5V213
                h-1.7v-14.5H364.3z M372.3,202.1v1.4h-5.9v-1.4H372.3z M368.1,213v-12.4c0-0.6,0.1-1.1,0.4-1.6c0.3-0.4,0.7-0.7,1.1-0.9
                c0.5-0.2,1-0.3,1.5-0.3c0.4,0,0.7,0,1,0.1c0.3,0.1,0.5,0.1,0.6,0.2l-0.5,1.4c-0.1,0-0.2-0.1-0.4-0.1c-0.1,0-0.3-0.1-0.6-0.1
                c-0.6,0-1,0.1-1.2,0.4c-0.2,0.3-0.4,0.7-0.4,1.2v12H368.1z M376.3,206.4v6.6h-1.7v-14.5h1.7v5.3h0.1c0.3-0.6,0.6-1,1.2-1.3
                c0.5-0.3,1.2-0.5,2.1-0.5c0.7,0,1.4,0.1,2,0.4c0.6,0.3,1,0.7,1.3,1.4c0.3,0.6,0.5,1.4,0.5,2.3v6.9h-1.7v-6.8c0-0.9-0.2-1.5-0.7-2
                c-0.4-0.5-1.1-0.7-1.9-0.7c-0.5,0-1,0.1-1.5,0.3c-0.4,0.2-0.8,0.6-1,1C376.4,205.3,376.3,205.8,376.3,206.4z M391,213.2
                c-1.1,0-2-0.2-2.7-0.7c-0.8-0.5-1.3-1.1-1.8-2c-0.4-0.8-0.6-1.8-0.6-2.9c0-1.1,0.2-2.1,0.6-3c0.4-0.9,1-1.5,1.7-2
                c0.7-0.5,1.6-0.7,2.6-0.7c0.6,0,1.1,0.1,1.7,0.3c0.6,0.2,1.1,0.5,1.5,0.9c0.5,0.4,0.8,1,1.1,1.7c0.3,0.7,0.4,1.6,0.4,2.6v0.7h-8.4
                v-1.4h6.7c0-0.6-0.1-1.2-0.4-1.6c-0.2-0.5-0.6-0.9-1-1.1c-0.4-0.3-1-0.4-1.6-0.4c-0.7,0-1.2,0.2-1.7,0.5c-0.5,0.3-0.9,0.8-1.1,1.3
                c-0.3,0.5-0.4,1.1-0.4,1.7v1c0,0.8,0.1,1.5,0.4,2.1c0.3,0.6,0.7,1,1.2,1.3c0.5,0.3,1.1,0.4,1.8,0.4c0.4,0,0.8-0.1,1.2-0.2
                c0.4-0.1,0.7-0.3,0.9-0.6c0.3-0.3,0.5-0.6,0.6-1l1.6,0.5c-0.2,0.5-0.5,1-0.9,1.4c-0.4,0.4-0.9,0.7-1.5,1
                C392.4,213.1,391.7,213.2,391,213.2z M398.1,213v-10.9h1.7V213H398.1z M398.9,200.3c-0.3,0-0.6-0.1-0.8-0.3
                c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.4,0.5,0.4,0.8
                c0,0.3-0.1,0.6-0.4,0.8C399.5,200.2,399.2,200.3,398.9,200.3z M402.8,213v-10.9h1.6v1.7h0.1c0.2-0.6,0.6-1,1.1-1.4
                c0.5-0.3,1.1-0.5,1.8-0.5c0.7,0,1.3,0.2,1.8,0.5c0.5,0.3,0.9,0.8,1.1,1.4h0.1c0.3-0.6,0.7-1,1.3-1.3c0.6-0.3,1.2-0.5,2-0.5
                c1,0,1.8,0.3,2.4,0.9c0.6,0.6,0.9,1.6,0.9,2.8v7.3h-1.7v-7.3c0-0.8-0.2-1.4-0.7-1.7c-0.4-0.3-1-0.5-1.6-0.5c-0.8,0-1.4,0.2-1.8,0.7
                c-0.4,0.5-0.6,1-0.6,1.7v7.1h-1.7v-7.5c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.2,0.3
                c-0.4,0.2-0.7,0.6-0.9,1c-0.2,0.4-0.3,0.9-0.3,1.4v6.8H402.8z"/>
            <path d="M377.5,155v13.7l-7.9-6.3l-2.6,3.2l10.5,8.4v17h4.1v-13.7l7.9,6.3l2.6-3.2l-10.4-8.4v-17H377.5z"/>
        </g>
        <g onClick={(event) => clickHandler("Muspelheim", event)} className={activeCampGround === "Muspelheim" ? activeClassString : nonActiveClass}>
            <path fill="#EABB85" d="M307.9,303.2l-62.1,45.5L292,495.9l150.7-53.8l22.5-120.6L307.9,303.2z"/>
            <path fill="#0E0E0E" d="M300.9,393.5h2.1l4.9,12.1h0.2l4.9-12.1h2.1V408h-1.6v-11.1h-0.1l-4.5,11.1h-1.6l-4.5-11.1h-0.1V408h-1.6
                V393.5z M325.4,403.5v-6.4h1.7V408h-1.7v-1.8h-0.1c-0.3,0.6-0.7,1-1.2,1.4c-0.5,0.4-1.2,0.6-2,0.6c-0.7,0-1.3-0.1-1.8-0.4
                c-0.5-0.3-0.9-0.8-1.2-1.4c-0.3-0.6-0.5-1.4-0.5-2.3v-6.9h1.7v6.8c0,0.8,0.2,1.4,0.7,1.9c0.4,0.5,1,0.7,1.7,0.7
                c0.4,0,0.8-0.1,1.3-0.3c0.4-0.2,0.8-0.5,1.1-1C325.2,404.8,325.4,404.2,325.4,403.5z M337.8,399.5l-1.5,0.4
                c-0.1-0.3-0.2-0.5-0.4-0.7c-0.2-0.2-0.4-0.4-0.7-0.6c-0.3-0.2-0.7-0.2-1.2-0.2c-0.7,0-1.2,0.2-1.7,0.5c-0.4,0.3-0.7,0.7-0.7,1.2
                c0,0.4,0.2,0.7,0.5,1c0.3,0.2,0.8,0.4,1.4,0.6l1.6,0.4c1,0.2,1.7,0.6,2.2,1.1c0.5,0.5,0.7,1.1,0.7,1.9c0,0.6-0.2,1.2-0.5,1.7
                c-0.4,0.5-0.9,0.9-1.5,1.2s-1.4,0.4-2.2,0.4c-1.1,0-2-0.2-2.8-0.7s-1.2-1.2-1.4-2.1l1.6-0.4c0.2,0.6,0.4,1,0.9,1.3
                c0.4,0.3,1,0.4,1.7,0.4c0.8,0,1.4-0.2,1.9-0.5c0.5-0.3,0.7-0.7,0.7-1.2c0-0.4-0.1-0.7-0.4-1c-0.3-0.3-0.7-0.5-1.2-0.6l-1.8-0.4
                c-1-0.2-1.7-0.6-2.2-1.1c-0.5-0.5-0.7-1.1-0.7-1.9c0-0.6,0.2-1.2,0.5-1.6c0.4-0.5,0.8-0.8,1.4-1.1c0.6-0.3,1.3-0.4,2.1-0.4
                c1.1,0,1.9,0.2,2.5,0.7C337.1,398.1,337.6,398.8,337.8,399.5z M340.5,412.1v-15h1.6v1.7h0.2c0.1-0.2,0.3-0.4,0.5-0.7
                c0.2-0.3,0.5-0.6,1-0.8c0.4-0.2,1-0.4,1.7-0.4c0.9,0,1.7,0.2,2.4,0.7c0.7,0.5,1.2,1.1,1.6,2c0.4,0.8,0.6,1.8,0.6,3
                c0,1.2-0.2,2.2-0.6,3c-0.4,0.8-0.9,1.5-1.6,2c-0.7,0.5-1.5,0.7-2.4,0.7c-0.7,0-1.3-0.1-1.7-0.3c-0.4-0.2-0.7-0.5-1-0.8
                c-0.2-0.3-0.4-0.6-0.5-0.8h-0.1v5.8H340.5z M342.2,402.5c0,0.8,0.1,1.6,0.4,2.2c0.2,0.6,0.6,1.1,1.1,1.5c0.5,0.3,1,0.5,1.7,0.5
                c0.7,0,1.3-0.2,1.8-0.6c0.5-0.4,0.8-0.9,1.1-1.5c0.2-0.6,0.4-1.3,0.4-2.1c0-0.8-0.1-1.5-0.4-2.1c-0.2-0.6-0.6-1.1-1.1-1.5
                c-0.5-0.4-1.1-0.5-1.8-0.5c-0.7,0-1.3,0.2-1.7,0.5c-0.5,0.3-0.8,0.8-1.1,1.4C342.3,401,342.2,401.7,342.2,402.5z M357.3,408.2
                c-1.1,0-2-0.2-2.7-0.7c-0.8-0.5-1.3-1.1-1.8-2c-0.4-0.8-0.6-1.8-0.6-2.9c0-1.1,0.2-2.1,0.6-3c0.4-0.9,1-1.5,1.7-2
                c0.7-0.5,1.6-0.7,2.6-0.7c0.6,0,1.1,0.1,1.7,0.3c0.6,0.2,1.1,0.5,1.5,0.9c0.5,0.4,0.8,1,1.1,1.7c0.3,0.7,0.4,1.6,0.4,2.6v0.7h-8.4
                v-1.4h6.7c0-0.6-0.1-1.2-0.4-1.6c-0.2-0.5-0.6-0.9-1-1.1c-0.4-0.3-1-0.4-1.6-0.4c-0.7,0-1.2,0.2-1.7,0.5c-0.5,0.3-0.9,0.8-1.1,1.3
                c-0.3,0.5-0.4,1.1-0.4,1.7v1c0,0.8,0.1,1.5,0.4,2.1c0.3,0.6,0.7,1,1.2,1.3c0.5,0.3,1.1,0.4,1.8,0.4c0.4,0,0.8-0.1,1.2-0.2
                c0.4-0.1,0.7-0.3,0.9-0.6c0.3-0.3,0.5-0.6,0.6-1l1.6,0.5c-0.2,0.5-0.5,1-0.9,1.4c-0.4,0.4-0.9,0.7-1.5,1
                C358.7,408.1,358,408.2,357.3,408.2z M366.1,393.5V408h-1.7v-14.5H366.1z M370.8,401.4v6.6h-1.7v-14.5h1.7v5.3h0.1
                c0.3-0.6,0.6-1,1.1-1.3c0.5-0.3,1.2-0.5,2.1-0.5c0.7,0,1.4,0.1,2,0.4c0.6,0.3,1,0.7,1.3,1.4c0.3,0.6,0.5,1.4,0.5,2.3v6.9h-1.7v-6.8
                c0-0.9-0.2-1.5-0.7-2c-0.4-0.5-1.1-0.7-1.9-0.7c-0.5,0-1,0.1-1.5,0.3c-0.4,0.2-0.8,0.6-1,1C370.9,400.3,370.8,400.8,370.8,401.4z
                M385.5,408.2c-1.1,0-2-0.2-2.7-0.7c-0.8-0.5-1.3-1.1-1.8-2c-0.4-0.8-0.6-1.8-0.6-2.9c0-1.1,0.2-2.1,0.6-3c0.4-0.9,1-1.5,1.7-2
                c0.7-0.5,1.6-0.7,2.6-0.7c0.6,0,1.1,0.1,1.7,0.3c0.6,0.2,1.1,0.5,1.5,0.9c0.5,0.4,0.8,1,1.1,1.7c0.3,0.7,0.4,1.6,0.4,2.6v0.7h-8.4
                v-1.4h6.7c0-0.6-0.1-1.2-0.4-1.6c-0.2-0.5-0.6-0.9-1-1.1c-0.4-0.3-1-0.4-1.6-0.4c-0.7,0-1.2,0.2-1.7,0.5c-0.5,0.3-0.9,0.8-1.1,1.3
                c-0.3,0.5-0.4,1.1-0.4,1.7v1c0,0.8,0.1,1.5,0.4,2.1c0.3,0.6,0.7,1,1.2,1.3c0.5,0.3,1.1,0.4,1.8,0.4c0.4,0,0.8-0.1,1.2-0.2
                c0.4-0.1,0.7-0.3,0.9-0.6c0.3-0.3,0.5-0.6,0.6-1l1.6,0.5c-0.2,0.5-0.5,1-0.9,1.4c-0.4,0.4-0.9,0.7-1.5,1
                C386.9,408.1,386.3,408.2,385.5,408.2z M392.6,408v-10.9h1.7V408H392.6z M393.4,395.3c-0.3,0-0.6-0.1-0.8-0.3
                c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3s0.6,0.1,0.8,0.3c0.2,0.2,0.4,0.5,0.4,0.8
                c0,0.3-0.1,0.6-0.4,0.8C394,395.2,393.8,395.3,393.4,395.3z M397.3,408v-10.9h1.6v1.7h0.1c0.2-0.6,0.6-1,1.1-1.4
                c0.5-0.3,1.1-0.5,1.8-0.5c0.7,0,1.3,0.2,1.8,0.5c0.5,0.3,0.9,0.8,1.1,1.4h0.1c0.3-0.6,0.7-1,1.3-1.3c0.6-0.3,1.2-0.5,2-0.5
                c1,0,1.8,0.3,2.4,0.9c0.6,0.6,0.9,1.6,0.9,2.8v7.3H410v-7.3c0-0.8-0.2-1.4-0.7-1.7c-0.4-0.3-1-0.5-1.6-0.5c-0.8,0-1.4,0.2-1.8,0.7
                c-0.4,0.5-0.6,1-0.6,1.7v7.1h-1.7v-7.5c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.2,0.3
                c-0.4,0.2-0.7,0.6-0.9,1c-0.2,0.4-0.3,0.9-0.3,1.4v6.8H397.3z"/>
            <path d="M369.5,353l-13.2,10.6L343,353v36h4.1v-12.8l9.2-7.3l9.2,7.3V389h4.1V353z M347.1,361.5l5.9,4.7l-5.9,4.7V361.5z
                M359.5,366.2l5.9-4.7v9.5L359.5,366.2z"/>
        </g>
        <g onClick={(event) => clickHandler("Helheim", event)} className={activeCampGround === "Helheim" ? activeClassString : nonActiveClass}>
            <path fill="#CA7553" d="M84.6,306.2L15.5,348l28.2,151.6l156-35.4l47-116.2L84.6,306.2z"/>
            <path fill="#0E0E0E" d="M79.7,424v-14.5h1.8v6.5h7.8v-6.5h1.8V424h-1.8v-6.5h-7.8v6.5H79.7z M98.8,424.2c-1.1,0-2-0.2-2.7-0.7
                c-0.8-0.5-1.3-1.1-1.8-2c-0.4-0.8-0.6-1.8-0.6-2.9c0-1.1,0.2-2.1,0.6-3c0.4-0.9,1-1.5,1.7-2c0.7-0.5,1.6-0.7,2.6-0.7
                c0.6,0,1.1,0.1,1.7,0.3c0.6,0.2,1.1,0.5,1.5,0.9c0.5,0.4,0.8,1,1.1,1.7s0.4,1.6,0.4,2.6v0.7h-8.4v-1.4h6.7c0-0.6-0.1-1.2-0.4-1.6
                c-0.2-0.5-0.6-0.9-1-1.1c-0.4-0.3-1-0.4-1.6-0.4c-0.7,0-1.2,0.2-1.7,0.5c-0.5,0.3-0.9,0.8-1.1,1.3c-0.3,0.5-0.4,1.1-0.4,1.7v1
                c0,0.8,0.1,1.5,0.4,2.1c0.3,0.6,0.7,1,1.2,1.3c0.5,0.3,1.1,0.4,1.8,0.4c0.4,0,0.8-0.1,1.2-0.2c0.4-0.1,0.7-0.3,0.9-0.6
                c0.3-0.3,0.5-0.6,0.6-1l1.6,0.5c-0.2,0.5-0.5,1-0.9,1.4c-0.4,0.4-0.9,0.7-1.5,1C100.2,424.1,99.5,424.2,98.8,424.2z M107.5,409.5
                V424h-1.7v-14.5H107.5z M112.3,417.4v6.6h-1.7v-14.5h1.7v5.3h0.1c0.3-0.6,0.6-1,1.2-1.3c0.5-0.3,1.2-0.5,2.1-0.5
                c0.7,0,1.4,0.1,2,0.4c0.6,0.3,1,0.7,1.3,1.4c0.3,0.6,0.5,1.4,0.5,2.3v6.9h-1.7v-6.8c0-0.9-0.2-1.5-0.7-2c-0.4-0.5-1.1-0.7-1.9-0.7
                c-0.5,0-1,0.1-1.5,0.3c-0.4,0.2-0.8,0.6-1,1C112.4,416.3,112.3,416.8,112.3,417.4z M127,424.2c-1.1,0-2-0.2-2.7-0.7
                c-0.8-0.5-1.3-1.1-1.8-2c-0.4-0.8-0.6-1.8-0.6-2.9c0-1.1,0.2-2.1,0.6-3c0.4-0.9,1-1.5,1.7-2c0.7-0.5,1.6-0.7,2.6-0.7
                c0.6,0,1.1,0.1,1.7,0.3s1.1,0.5,1.5,0.9c0.5,0.4,0.8,1,1.1,1.7s0.4,1.6,0.4,2.6v0.7h-8.4v-1.4h6.7c0-0.6-0.1-1.2-0.4-1.6
                c-0.2-0.5-0.6-0.9-1-1.1c-0.4-0.3-1-0.4-1.6-0.4c-0.7,0-1.2,0.2-1.7,0.5c-0.5,0.3-0.9,0.8-1.1,1.3c-0.3,0.5-0.4,1.1-0.4,1.7v1
                c0,0.8,0.1,1.5,0.4,2.1c0.3,0.6,0.7,1,1.2,1.3c0.5,0.3,1.1,0.4,1.8,0.4c0.4,0,0.8-0.1,1.2-0.2c0.4-0.1,0.7-0.3,0.9-0.6
                c0.3-0.3,0.5-0.6,0.6-1l1.6,0.5c-0.2,0.5-0.5,1-0.9,1.4c-0.4,0.4-0.9,0.7-1.5,1C128.4,424.1,127.7,424.2,127,424.2z M134.1,424
                v-10.9h1.7V424H134.1z M134.9,411.3c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.3,0.1-0.6,0.3-0.8
                c0.2-0.2,0.5-0.3,0.8-0.3c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.4,0.5,0.4,0.8c0,0.3-0.1,0.6-0.4,0.8
                C135.5,411.2,135.3,411.3,134.9,411.3z M138.8,424v-10.9h1.6v1.7h0.1c0.2-0.6,0.6-1,1.1-1.4c0.5-0.3,1.1-0.5,1.8-0.5
                c0.7,0,1.3,0.2,1.8,0.5c0.5,0.3,0.9,0.8,1.1,1.4h0.1c0.3-0.6,0.7-1,1.3-1.3c0.6-0.3,1.2-0.5,2-0.5c1,0,1.8,0.3,2.4,0.9
                c0.6,0.6,0.9,1.6,0.9,2.8v7.3h-1.7v-7.3c0-0.8-0.2-1.4-0.7-1.7c-0.4-0.3-1-0.5-1.6-0.5c-0.8,0-1.4,0.2-1.8,0.7
                c-0.4,0.5-0.6,1-0.6,1.7v7.1h-1.7v-7.5c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.2,0.3
                c-0.4,0.2-0.7,0.6-0.9,1c-0.2,0.4-0.3,0.9-0.3,1.4v6.8H138.8z"/>
            <path d="M120.2,364v18.2l-7.1-5.7V364H109v36h4.1v-18.2l7.1,5.7V400h4.1v-36H120.2z"/>
        </g>
        <g onClick={(event) => clickHandler("Alfheim", event)} className={activeCampGround === "Alfheim" ? activeClassString : nonActiveClass}>
            <path fill="#448FA3" d="M291.3,131l-96.9-7.5L44.9,292.3l39.7,13.9L246.7,348l61.9-45.6L291.3,131z"/>
            <path fill="#0E0E0E" d="M164.9,280.1H163l5.3-14.5h1.8l5.3,14.5h-1.8l-4.3-12.2h-0.1L164.9,280.1z M165.5,274.4h7.4v1.6h-7.4V274.4z
                M179.2,265.5v14.5h-1.7v-14.5H179.2z M187.2,269.2v1.4h-5.9v-1.4H187.2z M183,280.1v-12.4c0-0.6,0.1-1.1,0.4-1.6
                c0.3-0.4,0.7-0.7,1.1-0.9c0.5-0.2,1-0.3,1.5-0.3c0.4,0,0.7,0,1,0.1c0.3,0.1,0.5,0.1,0.6,0.2l-0.5,1.4c-0.1,0-0.2-0.1-0.4-0.1
                c-0.1,0-0.3-0.1-0.6-0.1c-0.6,0-1,0.1-1.2,0.4c-0.2,0.3-0.4,0.7-0.4,1.2v12H183z M191.2,273.5v6.6h-1.7v-14.5h1.7v5.3h0.1
                c0.3-0.6,0.6-1,1.2-1.3c0.5-0.3,1.2-0.5,2.1-0.5c0.7,0,1.4,0.1,2,0.4c0.6,0.3,1,0.7,1.3,1.4c0.3,0.6,0.5,1.4,0.5,2.3v6.9h-1.7v-6.8
                c0-0.9-0.2-1.5-0.7-2c-0.4-0.5-1.1-0.7-1.9-0.7c-0.5,0-1,0.1-1.5,0.3c-0.4,0.2-0.8,0.6-1,1C191.3,272.3,191.2,272.9,191.2,273.5z
                M205.9,280.3c-1.1,0-2-0.2-2.7-0.7c-0.8-0.5-1.3-1.1-1.8-2c-0.4-0.8-0.6-1.8-0.6-2.9s0.2-2.1,0.6-3c0.4-0.9,1-1.5,1.7-2
                c0.7-0.5,1.6-0.7,2.6-0.7c0.6,0,1.1,0.1,1.7,0.3c0.6,0.2,1.1,0.5,1.5,0.9c0.5,0.4,0.8,1,1.1,1.7c0.3,0.7,0.4,1.6,0.4,2.6v0.7H202
                v-1.4h6.7c0-0.6-0.1-1.2-0.4-1.6c-0.2-0.5-0.6-0.9-1-1.1c-0.4-0.3-1-0.4-1.6-0.4c-0.7,0-1.2,0.2-1.7,0.5c-0.5,0.3-0.9,0.8-1.1,1.3
                c-0.3,0.5-0.4,1.1-0.4,1.7v1c0,0.8,0.1,1.5,0.4,2.1c0.3,0.6,0.7,1,1.2,1.3c0.5,0.3,1.1,0.4,1.8,0.4c0.4,0,0.8-0.1,1.2-0.2
                c0.4-0.1,0.7-0.3,0.9-0.6c0.3-0.3,0.5-0.6,0.6-1l1.6,0.5c-0.2,0.5-0.5,1-0.9,1.4c-0.4,0.4-0.9,0.7-1.5,1
                C207.3,280.2,206.6,280.3,205.9,280.3z M213,280.1v-10.9h1.7v10.9H213z M213.8,267.3c-0.3,0-0.6-0.1-0.8-0.3
                c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.4,0.5,0.4,0.8
                c0,0.3-0.1,0.6-0.4,0.8C214.4,267.2,214.1,267.3,213.8,267.3z M217.7,280.1v-10.9h1.6v1.7h0.1c0.2-0.6,0.6-1,1.1-1.4
                c0.5-0.3,1.1-0.5,1.8-0.5c0.7,0,1.3,0.2,1.8,0.5c0.5,0.3,0.9,0.8,1.1,1.4h0.1c0.3-0.6,0.7-1,1.3-1.3c0.6-0.3,1.2-0.5,2-0.5
                c1,0,1.8,0.3,2.4,0.9c0.6,0.6,0.9,1.6,0.9,2.8v7.3h-1.7v-7.3c0-0.8-0.2-1.4-0.7-1.7c-0.4-0.3-1-0.5-1.6-0.5c-0.8,0-1.4,0.2-1.8,0.7
                c-0.4,0.5-0.6,1-0.6,1.7v7.1H224v-7.5c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.2,0.3
                c-0.4,0.2-0.7,0.6-0.9,1c-0.2,0.4-0.3,0.9-0.3,1.4v6.8H217.7z"/>
            <path fill="none" stroke="#000000" strokeWidth="4" d="M203.4,217L193,227l10.4,8.9l-10.4,7.7l10.4,9.4"/>
        </g>
    </svg>
  )
}

export default CampgroundsMap