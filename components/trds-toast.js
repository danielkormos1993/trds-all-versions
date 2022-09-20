import '../layout/layout-vars.js';
import '../elements/trds-icon.js';

const TrdsToastsStyle = document.createElement('style');
TrdsToastsStyle.id = 'trds-toasts';
TrdsToastsStyle.textContent = `

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

`;
document.head.appendChild(TrdsToastsStyle);

class Toast extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'}).innerHTML = `

            <style>

                :host{

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

                :host(.error){
                    background-color: var(--color--error);
                }
            
                :host(.success){
                    background-color: var(--color--success);
                }
            
                toast_content{
                    display: block;
                    flex: 1;
                }
            
                trds-icon{
                    --icon-src: url('/assets/icons/solid/times.svg');
                    cursor: pointer;
                    flex-shrink: 0;
                }

            </style>
        
            <toast_content>
                <slot></slot>
            </toast_content>
            <trds-icon tabindex="0" title="Close toast"></trds-icon>

        `;

        this.shadowRoot.querySelector('trds-icon').addEventListener('click', () => {
            this.remove();
        });

    }

    connectedCallback(){

        setTimeout(() => {
            this.remove();
        }, 8000);

    }

    static launchToast(type, content){

        const toast = `<trds-toast class="${type}">${content}</trds-toast>`;
        let toasts = document.querySelector('trds-toasts');

        if(!toasts)
            toasts = document.createElement('trds-toasts');
            document.body.appendChild(toasts);

        toasts.innerHTML += toast;

    }

}

customElements.define('trds-toast', Toast);

export default Toast.launchToast;