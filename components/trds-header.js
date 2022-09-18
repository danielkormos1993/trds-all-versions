import '../layout.js';
import '../layout/trds-container.js';
import '../elements/trds-hamburger.js';

customElements.define('trds-header', class extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'}).innerHTML = `

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
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
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
                    gap: var(--space--s);
                }

                @media (min-width: ${this.getAttribute('breakpoint')}){
                    
                    trds-hamburger{
                        display: none;
                    }

                    nav{
                        flex-direction: row;
                        width: auto;
                        align-items: center;
                        gap: var(--space--l);
                        padding: 0;
                    }

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

    disconnectedCallback(){
        document.removeEventListener('click', this.closeMenuOnOutsideClick);
    }

    toggleMenu = (e) => {
        e.stopPropagation();
        this.hasAttribute('opened') ? this.closeMenu() : this.openMenu();
    }

    openMenu = () => {
        this.setAttribute('opened', '');
        document.addEventListener('click', this.closeMenuOnOutsideClick);
    }

    closeMenu = () => {
        this.removeAttribute('opened');
        document.removeEventListener('click', this.closeMenuOnOutsideClick);
    }

    closeMenuOnOutsideClick = (e) => {

            this.Slot.assignedNodes().forEach(navElement => {
                if(!navElement.contains(e.target)){
                    this.closeMenu();
                    this.scrollTop = 0;
                }
            });
        
    }

    static get observedAttributes(){
        return ['opened'];
    }

    attributeChangedCallback() {

        this.hasAttribute('opened') ? this.Hamburger.setAttribute('active', '') : this.Hamburger.removeAttribute('active');

    }

});