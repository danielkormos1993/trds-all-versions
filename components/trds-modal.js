import '../layout/layout-vars.js';
import '../elements/trds-icon.js';

customElements.define('trds-modal', class extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'}).innerHTML = `

            <style>

                :host{

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
                    
                    z-index: 1000;
                    
                }

                :host([opened]){
                    opacity: 1;
                    visibility: visible;
                    transform: scale(1.0);
                }

                modal_container{
                    display: block;
                    width: 90%;
                    max-width: var(--element--max-width);
                    max-height: 100%;
                    overflow: auto;
                }

                modal_header{
                    display: flex;
                    align-items: center;
                    padding: var(--space--m);
                    box-sizing: border-box;
                    background-color: var(--color--primary);
                    justify-content: space-between;
                }

                modal_body{
                    display: block;
                    padding: var(--space--l);
                    box-sizing: border-box;
                    background-color: var(--color--secondary-bg);
                    overflow: auto;
                    max-height: 90vh;
                }

                modal_header trds-icon{
                    --icon-src: url('/assets/icons/solid/times.svg');
                    cursor: pointer;
                    flex-shrink: 0;
                }

                modal_header ::slotted([slot="title"]){
                    margin-right: var(--space--m);
                }

            </style>
        
            <modal_container>
                <modal_header>
                    <slot name="title">Default title</slot>
                    <trds-icon tabindex="0" title="Close modal"></trds-icon>
                </modal_header>
                <modal_body>
                    <slot></slot>
                </modal_body>
            </modal_container>

        `;

        this.shadowRoot.querySelector('modal_header trds-icon').addEventListener('click', () => {
            this.removeAttribute('opened');
        });

        this.addEventListener('click', () => {
            this.removeAttribute('opened');
        });

        this.shadowRoot.querySelector('modal_container').addEventListener('click', e => e.stopPropagation());

    }

    static get observedAttributes(){
        return ['opened'];
    }

    attributeChangedCallback() {

        if(this.hasAttribute('opened')){

            if(window.currentModal && window.currentModal.hasAttribute('opened') && window.currentModal != this) window.currentModal.removeAttribute('opened');

            window.currentModal = this;

        }

    }

});