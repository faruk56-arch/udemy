import React, { useState } from 'react'
import './Modal.css'

export default function Modal() {

    const [modal, setModel] = useState(true);

    const toogleModal = () => {
        setModel(!modal)
    }
    return (
        <>

            <button
                onClick={toogleModal}
                className="btn-modal">Open</button>

            {modal && (
                <div className="overlay">
                    <div className="modal" >
                        <div className="modal-content">
                            <h2>hello</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quo in alias blanditiis, harum quod quos deleniti possimus fugit suscipit! Perferendis totam quas odit mollitia ratione alias eos blanditiis, voluptate minus adipisci sed velit et provident ut vel fugiat odio dolore. Magnam, quos. Quasi sapiente adipisci, numquam fuga laudantium aperiam?</p>
                            <button
                                onClick={toogleModal}
                                className="close-modal">Close</button>
                        </div>
                    </div>
                </div>
            )}


        </>
    )
}
