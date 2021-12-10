// usage: trds-showcase
// put images inside slots
// slot name -> before
// slot name -> after
// toggleAfterImg function for toggling after image

import '../base/theme.js';
import '../base/layout.js';
import '../elements/trds-image.js';

customElements.define('trds-showcase', class TrdsShowcase extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: block;
                    max-width: var(--trds-element--max-width);
                    position: relative;
                    background-color: var(--trds-theme--secondary-bg);
                }
                trds-showcase__before,
                trds-showcase__after{
                    display: block;
                    transition: opacity .5s;
                    position: relative;
                }
                trds-showcase__before:before,
                trds-showcase__after:before{
                    content: 'Előtte';
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    padding: var(--trds-space--xs) var(--trds-space--s);
                    font-size: var(--trds-size--s);
                    text-transform: uppercase;
                    font-weight: bold;
                    background-color: var(--trds-theme--primary-bg);
                    mix-blend-mode: overlay;
                    z-index: 1;
                }
                trds-showcase__after:before{
                    content: 'Utána';
                }
                trds-showcase__after{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                }
                :host([after-image-active]) trds-showcase__after{
                    opacity: 1;
                }
                :host([after-image-active]) trds-showcase__before{
                    opacity: 0;
                }
            </style>
            <trds-showcase__before>
                <slot name="before"></slot>
            </trds-showcase__before>
            <trds-showcase__after>
                <slot name="after"></slot>
            </trds-showcase__after>
        `;

        this.addEventListener('click', this.toggleAfterImg);
                
    }

    toggleAfterImg = () => {
        this.hasAttribute('after-image-active') ? this.removeAttribute('after-image-active') : this.setAttribute('after-image-active', '');
    }

});