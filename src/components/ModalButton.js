import React, { useState } from 'react';
import Modal from './Modal';

const ModalButton = () => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className='modal-button'>
            <button onClick={() => setOpenModal(true)} className='modalbtn'>Modal</button>
            <Modal 
            open={openModal} 
            onClose={() => setOpenModal(false)} />
        </div>
    );
};

export default ModalButton;