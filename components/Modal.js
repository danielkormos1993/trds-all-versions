import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import './trds-modal.js';

export default function Modal({children, title, isOpen, onClose}){

    const Modal = useRef();
    const ModalRoot = document.body;

    useEffect(() => {
        const modal = Modal.current;
        modal.addEventListener('onClose', onClose);
        return () => modal.removeEventListener('onClose', onClose);
    }, [onClose]);

    useEffect(() => {
        if(isOpen) Modal.current.setAttribute('opened', '');
        else Modal.current.removeAttribute('opened');
    }, [isOpen]);

    return createPortal(
        <trds-modal ref={Modal} title={title}>
            {children}
        </trds-modal>, ModalRoot)

}