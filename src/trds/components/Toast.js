import { createContext, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from '../elements/Icon';
import createStyle from '../libs/createStyle';
import generateId from '../libs/generateId';
import '../layout/$layout.css';

createStyle(`

    trds-toasts{
        display: grid;
        width: 90%;
        max-width: var(--element--max-width);
        gap: var(--space--m);
        position: fixed;
        z-index: 11;
        bottom: var(--space--m);
        left: 5%;
    }

    trds-toast{

        display: flex;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        max-width: var(--element--max-width);
        padding: var(--space--m);
        background-color: var(--color--secondary-bg);
        animation: TrdsToastAnimation .5s;
        gap: var(--space--m);
        
    }

    @keyframes TrdsToastAnimation{
        from { 
            transform: translateY(100vh);
        }
        to {
            transform: translateY(0);
        }
    }

    trds-toast.error{
        background-color: var(--color--error);
    }

    trds-toast.success{
        background-color: var(--color--success);
    }

    trds-toast span{
        display: block;
        flex: 1;
    }

    trds-toast i{
        cursor: pointer;
    }

`);

export const toastContext = createContext();

export const ToastContextProvider = ({children}) => {

    const [toasts, setToasts] = useState([]);

    const launchToast = useCallback((content, type) => {

        const id = generateId();

        setToasts(prevState => ([...prevState, {id, content, type}]));

        setTimeout(() => {
            removeToast(id)
        }, 8000);

    }, []);

    const removeToast = (id) => {
        setToasts(prevState => prevState.filter(toast => toast.id !== id))
    }

    return (
        <toastContext.Provider value={launchToast}>
            { children }
            {createPortal(
                <trds-toasts>
                    {toasts.map(toast => 
                        <trds-toast key={toast.id} class={toast.type}>
                            <span>{toast.content}</span>
                            <Icon icon="x" onClick={() => removeToast(toast.id)} />
                        </trds-toast>
                    )}
                </trds-toasts>
                , document.body
            )}
        </toastContext.Provider>
    )

}