import '../layout.js';
import './trds-container.js';
import TrdsIntersectionObserver from '../IntersectionObserver.js';

import launchToast from '../components/trds-toast.js';

launchToast('error', 'Hát ez szar');
launchToast('success', 'Hát ez faszar');

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

                :host(.bg-image){
                    --bg-image-overlay: var(--color--primary-bg);
                    background: var(--bg-image-src) var(--bg-image-overlay);
                    background-position: center center;
                    background-size: cover;
                    background-blend-mode: overlay;
                }

                :host(.lazy){
                    background: var(--bg-image-overlay);
                }

            </style>

            <trds-container>
                <slot></slot>
            </trds-container>

        `;

    }

    connectedCallback(){

        if(this.classList.contains('lazy'))
            TrdsIntersectionObserver.observe(this);

    }

    load = () => this.classList.remove('lazy');

});