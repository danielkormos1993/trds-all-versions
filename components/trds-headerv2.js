import '../layout/trds-container.js';
import '../elements/trds-hamburger.js';

customElements.define('trds-header', class extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        
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

        this.addEventListener('click', this.closeMenuOnOutsideClick);
        this.shadowRoot.querySelector('trds-hamburger').addEventListener('click', this.toggleMenu);
        this.Slot.assignedNodes().forEach(navElement => {
            navElement.addEventListener('focus', this.openMenu);
        });

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