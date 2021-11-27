// usage: trds-image[src(required), lazy(optional), alt(required), aspect-ratio="w h"(optional)]
// default its 16:9 aspect ratio

import '../base/theme.js';
import '../base/layout.js';
import './trds-loader.js';

let TrbsImageStyle = document.createElement('style');
TrbsImageStyle.id = 'trbs-image-style';
TrbsImageStyle.textContent = `
    trbs-image{
        display: block;
        max-width: var(--trbs-element-max-width);
        position: relative;
        overflow: hidden;
        --trbs-image-padding-bottom: 56.25%;
        background-color: var(--trbs-color--darkgrey);
    }
    trbs-image aspect-ratio-box{
        display: block;
        width: 100%;
        padding-bottom: var(--trbs-image-padding-bottom);
    }
    trbs-image img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        object-position: center center;
    }
`;
document.head.appendChild(TrbsImageStyle);

const TrbsImageIntersectionHandler = new IntersectionObserver(function(entries){
    entries.forEach(function(entry) {
        if(entry.isIntersecting){
            entry.target.loadImage();
            TrbsImageIntersectionHandler.unobserve(entry.target);
        }
    });
}, {rootMargin: "0px 0px 100px 0px"});

customElements.define('trbs-image', class TrbsImage extends HTMLElement{
    
    constructor(){ 
        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    
                }
            </style>
        `;
    }

    connectedCallback(){

        if(!this.hasAttribute('src') || this.getAttribute('src') === '') 
            return console.error('Image src must be declared.');
        if(!this.hasAttribute('alt') || this.getAttribute('alt') === '')
            return console.error('Image alt must be declared.');

        this.classList.add('trbs-loader--active');

        this.innerHTML = `
            <aspect-ratio-box></aspect-ratio-box>
            <img alt="${this.getAttribute('alt')}">
        `;

        if(this.hasAttribute('aspect-ratio')){
            const aspectRatio = this.getAttribute('aspect-ratio').split(' ');
            const w = parseInt(aspectRatio[0]);
            const h = parseInt(aspectRatio[1]);
            const calculatedPaddingBottom = `${(h/w)*100}%`;
            this.style.setProperty('--trbs-image-padding-bottom', calculatedPaddingBottom);
        }

        if(this.hasAttribute('lazy')) TrbsImageIntersectionHandler.observe(this);
        else this.loadImage();

    }

    loadImage = () => {

        this.querySelector('img').addEventListener('load', () => {
            requestAnimationFrame(() => {requestAnimationFrame(() => { this.classList.remove('trbs-loader--active') })});
        });
        
        this.querySelector('img').src = this.getAttribute('src');

    }

});