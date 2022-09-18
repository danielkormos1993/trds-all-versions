import '../layout.js';
import './trds-loader.js';
import TrdsIntersectionObserver from '../IntersectionObserver.js';

customElements.define('trds-image', class extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `

            <style>

                :host{
                    display: block;
                    width: 100%;
                    max-width: var(--element--max-width);
                    position: relative;
                    background-color: var(--color--secondary-bg);
                    object-fit: contain;
                    object-position: center center;
                    --image-padding-bottom: 56.25%;
                }
            
                aspect-ratio-box{
                    padding-bottom: var(--image-padding-bottom);
                    display: block;
                    box-sizing: border-box;
                }
            
                img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: inherit;
                    object-position: inherit;
                }

            </style>

            <trds-loader active></trds-loader>
            <aspect-ratio-box></aspect-ratio-box>
            <img alt="${this.getAttribute('alt')}">

        `;

        if(this.hasAttribute('aspect-ratio')){

            const aspectRatio = this.getAttribute('aspect-ratio').split(':');

            const calculatedPaddingBottom = `${(parseInt(aspectRatio[1])/parseInt(aspectRatio[0]))*100}%`;

            this.style.setProperty('--image-padding-bottom', calculatedPaddingBottom);

        }

        if(this.hasAttribute('lazy')) TrdsIntersectionObserver.observe(this);
        else this.load();

    }

    load = () => {

        const ImageTag = this.shadowRoot.querySelector('img');

        ImageTag.src = this.getAttribute('src');

        ImageTag.addEventListener('load', () => {
            requestAnimationFrame(() => {requestAnimationFrame(() => { 
                this.shadowRoot.querySelector('trds-loader').removeAttribute('active'); 
            })});
        });

    }

});