import '../elements/icon.js';

let TrdsToastStyle = document.createElement('style');
TrdsToastStyle.textContent = `
    trds-toasts-container{
        display: grid;
        width: 90%;
        max-width: var(--element--max-width);
        gap: var(--space--m);
        position: fixed;
        z-index: 100;
        bottom: var(--space--m);
        left: 5%;
    }
`;
document.head.appendChild(TrdsToastStyle);

class TrdsToast extends HTMLElement{

    constructor(){ 
        super();

        this.attachShadow({mode: 'open'}).innerHTML = `
            <style>

                :host{
                    display: flex;
                    align-items: center;
                    width: 100%;
                    max-width: var(--element--max-width);
                    padding: var(--space--m);
                    background-color: var(--color--secondary-bg);
                    animation: TrdsToastAnimation .5s;
                }
            
                @keyframes TrdsToastAnimation{
                    from { transform: translateY(100vh) }
                    to { transform: translateY(0) }
                }
            
                :host(.danger){
                    background-color: var(--color--primary);
                }
            
                :host(.success){
                    background-color: var(--color--success);
                }
            
                trds-toast__content{
                    display: block;
                    flex: 1;
                }
            
                trds-toast__close-icon-container{
                    display: block;
                    padding: var(--space--m);
                }
            
            </style>
            <trds-toast__content>
                <slot></slot>
            </trds-toast__content>
            <trds-toast__close-icon-container>
                <trds-icon icon="solid/times" onclick="this.getRootNode().host.remove()"></trds-icon>
            </trds-toast__close-icon-container>
        `;

    }

    show = (options) => {

        if(options && options.hasOwnProperty('after')) options.after.parentNode.insertBefore(this, options.after.nextSibling);
        else if(options && options.hasOwnProperty('before')) options.before.parentNode.insertBefore(this, options.before);

        else{
            
            if(document.body.querySelectorAll('trds-toasts-container trds-toast').length === 0)
                document.body.appendChild(document.createElement('trds-toasts-container'));
            
            document.body.querySelector('trds-toasts-container').appendChild(this);

        } 

    }

}

customElements.define('trds-toast', TrdsToast);