import '../layout/$layout.js';
import './trds-loader.js';
import TrdsIntersectionObserver from '../libs/IntersectionObserver.js';
import createStyle from '../libs/createStyle.js';

createStyle(`

    trds-image{
        display: block;
        width: 100%;
        max-width: var(--element--max-width);
        position: relative;
        object-fit: contain;
        object-position: center center;
        --image-padding-bottom: 56.25%;
    }

    trds-image aspect-ratio-box{
        padding-bottom: var(--image-padding-bottom);
        display: block;
        box-sizing: border-box;
    }

    trds-image img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: inherit;
        object-position: inherit;
    }

`)

customElements.define('trds-image', class extends HTMLElement{

    connectedCallback(){

        this.innerHTML = `

            <trds-loader active></trds-loader>
            <aspect-ratio-box></aspect-ratio-box>
            <img>

        `;

        this.Image = this.querySelector('img');

        this.Image.addEventListener('load', () => {
            requestAnimationFrame(() => {requestAnimationFrame(() => { 
                this.querySelector('trds-loader').removeAttribute('active'); 
            })});
        });

        this.Image.setAttribute('alt', this.getAttribute('alt'));

        if(this.hasAttribute('aspect-ratio')){
            const aspectRatio = this.getAttribute('aspect-ratio').split(':');
            const calculatedPaddingBottom = `${(parseInt(aspectRatio[1])/parseInt(aspectRatio[0]))*100}%`;
            this.style.setProperty('--image-padding-bottom', calculatedPaddingBottom);
        }

        if(this.hasAttribute('lazy')) TrdsIntersectionObserver.observe(this);
        else this.isIntersecting();

    }

    isIntersecting = () => {

        this.Image.src = this.getAttribute('src');
        this.removeAttribute('lazy');

    }

});