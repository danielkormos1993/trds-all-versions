﻿import '../layout/$layout.js';
import '../elements/trds-icon.js';
import createStyle from '../libs/createStyle.js';

createStyle(`

    trds-toasts{
        display: grid;
        width: 90%;
        max-width: var(--element--max-width);
        gap: var(--space--m);
        position: fixed;
        z-index: 100;
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
        from { transform: translateY(100vh) }
        to { transform: translateY(0) }
    }

    trds-toast.error{
        background-color: var(--color--error);
    }

    trds-toast.success{
        background-color: var(--color--success);
    }

    trds-toast toast_content{
        display: block;
        flex: 1;
    }

    trds-toast trds-icon{
        --icon-src: url('/assets/icons/solid/times.svg');
        cursor: pointer;
        flex-shrink: 0;
    }

`);

class Toast extends HTMLElement{
    constructor(){
        super();

        this.innerHTML = `
        
            <toast_content>
                
            </toast_content>
            <trds-icon tabindex="0" title="Close toast"></trds-icon>

        `;

        this.querySelector('trds-icon').addEventListener('click', () => {
            this.remove();
        });

    }

    connectedCallback(){

        this.querySelector('toast-content').textContent = this.getAttribute('content');

        setTimeout(() => {
            this.remove();
        }, 8000);

    }

    static launchToast(content, type){



        const toast = document.createElement('trds-toast');
        if(type) toast.classList.add(type);
        toast.setAttribute('content', content);

        let toasts = document.querySelector('trds-toasts');

        if(!toasts)
            toasts = document.createElement('trds-toasts');
            document.body.appendChild(toasts);

        toasts.appendChild(toast);

    }

}

customElements.define('trds-toast', Toast);

export default Toast.launchToast;