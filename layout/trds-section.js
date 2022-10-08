import $layout from './$layout.js' assert { type: "css" };
import './trds-container.js';
import TrdsIntersectionObserver from '../libs/IntersectionObserver.js';

customElements.define('trds-section', class extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'}).innerHTML = `
        
            <style>

                :host{
                    display: block;
                    padding: var(--space--xxl) 0;
                }

                :host(:last-child){
                    flex: 1;
                }

                :host([bg-image]){
                    --bg-image-overlay: var(--color--primary-bg);
                    background: var(--bg-image-src) var(--bg-image-overlay);
                    background-position: center center;
                    background-size: cover;
                    background-blend-mode: overlay;
                }

                :host([lazy]){
                    background: var(--bg-image-overlay);
                }

            </style>

            <trds-container>
                <slot></slot>
            </trds-container>

        `;

        document.adoptedStyleSheets = [...document.adoptedStyleSheets, $layout];

    }

    connectedCallback(){

        if(this.hasAttribute('lazy'))
            TrdsIntersectionObserver.observe(this);

    }

    isIntersecting = () => this.removeAttribute('lazy');

});