import React from 'react';

const Modal = ({open, onClose}) => {
    if (!open) return null;
    return (
        <div onClick={onClose} className='overlay'>
            <div onClick = {(e) => {
                e.stopPropagation();
            }} className='modalContainer'>
                <img src='https://raw.githubusercontent.com/fireclint/react-modal/main/src/nft.jpg' alt='/' />
                <div className='modalRight'>
                    <button className='closebtn' onClick={onClose}>
                        x
                    </button>
                    <div className='content'>
                        <p>Do you want a</p>
                        <h1 className='heading'>$20 CREDIT</h1>
                        <p>for your first trade?</p>
                    </div>
                    <div className='btnContainer'>
                        <button className='btnPrimary'>
                        <span className='bold'>YES</span>, I love NFT's
                        </button>
                        <button className='btnOutline'>
                        <span className='bold'>NO</span>, thanks
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;