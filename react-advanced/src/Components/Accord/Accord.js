import React, { useState, useRef, useEffect } from 'react';
import './Accord.css'
import chevron from './chevron4.svg'

export default function Accord() {
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState()


    const toogleState = () => {
        setToggle(!toggle);
    }
    const refHeight = useRef();


    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)

    }, [])








    return (
        <div className="Accord">
            <div
                onClick={toogleState}
                className="accord-visible">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <img src={chevron} alt="chevron down" />

            </div>
            <div ref={refHeight}
                className={toggle ? "accord-toggle animated"
                    : "accord-toggle"}

                style={{ height: toggle ? `${heightEl}` : "0px" }}
                >


                <p aria-hidden = {toggle ? "true" : "false"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur voluptatum, ipsa eius corporis dolore, perspiciatis soluta sit atque earum consectetur exercitationem velit necessitatibus? Laudantium asperiores dolore quis non qui molestias.</p>
            </div>

        </div>
    )
}
