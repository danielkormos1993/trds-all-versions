// usage: trds-image[src(required), lazy(optional), alt(required), aspect-ratio="w h"(optional)]
// default its 16:9 aspect ratio

import '../base/theme.js';
import '../base/layout.js';
import './trds-loader.js';

const TrdsImageIntersectionHandler = new IntersectionObserver(function(entries){
    entries.forEach(function(entry) {
        if(entry.isIntersecting){
            entry.target.loadImage();
            TrdsImageIntersectionHandler.unobserve(entry.target);
        }
    });
}, {rootMargin: "0px 0px 100px 0px"});

customElements.define('trds-image', class TrdsImage extends HTMLElement{
    
    constructor(){ 
        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: block;
                    max-width: var(--trds-element-max-width);
                    position: relative;
                    overflow: hidden;
                    background-color: var(--trds-theme--secondary-bg);

                    --trds-image-padding-bottom: 56.25%;
                }
                :host #aspect-ratio-box{
                    padding-bottom: var(--trds-image-padding-bottom);
                }
                :host img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                    object-position: center center;
                }
            </style>
            <div id="aspect-ratio-box"></div>
            <img>
            <slot></slot>
        `;
    }

    connectedCallback(){

        if(!this.hasAttribute('src') || this.getAttribute('src') === '') 
            return console.error('trds-image src attribute must be declared.');
        if(!this.hasAttribute('alt') || this.getAttribute('alt') === '')
            return console.error('trds-image alt attribute must be declared.');

        this.appendChild(document.createElement('trds-loader')).enable();

        this.image = this.shadowRoot.querySelector('img');
        this.image.setAttribute('alt', this.getAttribute('alt'));

        if(this.hasAttribute('aspect-ratio')){
            const aspectRatio = this.getAttribute('aspect-ratio').split(' ');
            const w = parseInt(aspectRatio[0]);
            const h = parseInt(aspectRatio[1]);
            const calculatedPaddingBottom = `${(h/w)*100}%`;
            this.style.setProperty('--trds-image-padding-bottom', calculatedPaddingBottom);
        }

        if(this.hasAttribute('lazy')) TrdsImageIntersectionHandler.observe(this);
        else this.loadImage();

    }

    loadImage = () => {

        this.image.addEventListener('load', () => {
            requestAnimationFrame(() => {requestAnimationFrame(() => { this.loader.disable() })});
        });
        
        this.image.src = this.getAttribute('src');

    }

});