// onClose must be wrapped in useCallback

import createStyle from '../libs/createStyle';
import '../layout/$layout.css';
import '../typhography/$typhography.css';
import Icon from '../elements/Icon';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import generateId from '../libs/generateId';

createStyle(`

    trds-modal{

        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
        padding: var(--space--m) 0;
        background-color: var(--color--overlay);
        
        position: fixed;

        display: flex;
        align-items: center;
        justify-content: center;

        visibility: hidden;
        opacity: 0;
        transform: scale(1.1);
        transition: opacity 0.25s, transform 0.25s;
        
        z-index: 10;
        
    }

    trds-modal.opened{
        opacity: 1;
        visibility: visible;
        transform: scale(1.0);
    }

    trds-modal_container{
        display: block;
        width: 90%;
        max-width: var(--element--max-width);
        max-height: 100%;
    }

    trds-modal_header{
        display: flex;
        align-items: center;
        padding: var(--space--m);
        box-sizing: border-box;
        background-color: var(--color--primary);
        justify-content: space-between;
    }

    trds-modal_body{
        display: block;
        padding: var(--space--l);
        box-sizing: border-box;
        background-color: var(--color--secondary-bg);
        overflow: auto;
        max-height: 90vh;
        overscroll-behavior: contain;
    }

    trds-modal_header i{
        cursor: pointer;
    }

    trds-modal_header h2{
        text-transform: uppercase;
        letter-spacing: .2em;
        font-size: var(--size--xs);
        line-height: var(--size--xs--line-height);
        margin: 0 var(--space--m) 0 0;
    }

`);

export const modalContext = createContext();

export function Modal({title, isOpen, children, onClose}){

    const modalId = useMemo(() => generateId(), []);

    const [currentModalId, setCurrentModalId] = useContext(modalContext);

    useEffect(() => {

        if(isOpen){
            setCurrentModalId(modalId);
        }

    }, [isOpen, setCurrentModalId, modalId]);

    useEffect(() => {

        if(currentModalId !== modalId) onClose();

    }, [currentModalId, modalId, onClose]);

    return(
        createPortal(
        <trds-modal class={isOpen ? 'opened': ''} onClick={onClose}>
            <trds-modal_container onClick={e => e.stopPropagation()}>
                <trds-modal_header>
                    <h2>{title}</h2>
                    <Icon icon="x" onClick={onClose} />
                </trds-modal_header>
                <trds-modal_body>
                    {children}
                </trds-modal_body>
            </trds-modal_container>
        </trds-modal>, document.body)
    )

}

export function ModalContextProvider({children}){

    const [currentModalId, setCurrentModalId] = useState(null);

    return(

        <modalContext.Provider value={[currentModalId, setCurrentModalId]}>
            {children}
        </modalContext.Provider>

    )

}