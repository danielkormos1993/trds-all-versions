import '../layout/trds-container.js';
import '../elements/trds-hamburger.js';

customElements.define('trds-header', class extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `

            <style>

                :host{
                    background-color: var(--color--secondary-bg);
                    height: 5rem;
                    width: 100%;
                    overflow: hidden;
                }

                :host([opened]){
                    height: auto;
                    overflow: visible;
                }

                trds-container{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    flex-wrap: wrap;
                }

                top-bar{
                    height: 5rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-shrink: 0;
                }

                ::slotted([slot="logo"]){
                    width: 7rem;
                }

                nav{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    align-items: start;
                    padding: var(--space--l) 0;
                    gap: var(--space--l);
                }

            </style>
        
            <trds-container>
                <top-bar>
                    <slot name="logo"></slot>
                    <trds-hamburger></trds-hamburger>
                </top-bar>
                <nav>
                    <slot></slot>
                </nav>
            </trds-container>
        
        `;

        this.Slot = this.shadowRoot.querySelector('nav slot');
        this.Hamburger = this.shadowRoot.querySelector('trds-hamburger');

        this.Hamburger.addEventListener('click', this.toggleMenu);
        this.Slot.assignedNodes().forEach(navElement => {
            navElement.addEventListener('focus', this.openMenu);
        });

    }

    connectedCallback(){
        document.addEventListener('click', this.closeMenuOnOutsideClick);
    }

    disconnectedCallback(){
        document.removeEventListener('click', this.closeMenuOnOutsideClick);
    }

    toggleMenu = () => {
        this.hasAttribute('opened') ? this.removeAttribute('opened') : this.setAttribute('opened', '');
    }

    openMenu = () => {
        this.setAttribute('opened', '');
    }

    closeMenuOnOutsideClick = (e) => {
        if(this.hasAttribute('opened')){
            this.Slot.assignedNodes().forEach(navElement => {
                if(!navElement.contains(e.target)){
                    this.removeAttribute('opened');
                    this.scrollTop = 0;
                }
            });
        }
    }

    open

    static get observedAttributes(){
        return ['opened'];
    }

    attributeChangedCallback() {

        this.hasAttribute('opened') ? this.Hamburger.setAttribute('active', '') : this.Hamburger.removeAttribute('active');

    }

});