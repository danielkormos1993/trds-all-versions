// usage: trds-video
// add lazy-src or lazy-poster for lazy resources
// dont need to add preload none as it will be automatically added to if there is a poster

import '../base/layout.js';
import { copyAttributes } from '../libs/copyAttributes.js';

const TrdsVideoSrcIntersectionHandler = new IntersectionObserver(function(entries){
    entries.forEach(function(entry) {
        if(entry.isIntersecting){
            entry.target.loadVideo();
            TrdsVideoSrcIntersectionHandler.unobserve(entry.target);
        }
    });
}, {rootMargin: "0px 0px 100px 0px"});

const TrdsVideoPosterIntersectionHandler = new IntersectionObserver(function(entries){
    entries.forEach(function(entry) {
        if(entry.isIntersecting){
            entry.target.loadPoster();
            TrdsVideoPosterIntersectionHandler.unobserve(entry.target);
        }
    });
}, {rootMargin: "0px 0px 100px 0px"});

customElements.define('trds-video', class TrdsVideo extends HTMLElement{
    
    constructor(){ 
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: block;
                    max-width: var(--trbs-element-max-width);              
                }
                :host video{
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                }
            </style>
            <video></video>
        `;
    }

    connectedCallback(){

        this.video = this.shadowRoot.querySelector('video');
        copyAttributes(this, ['autoplay', 'muted', 'controls', 'loop', 'src', 'poster'], this.video);
        
        if(this.hasAttribute('lazy-poster') || this.hasAttribute('poster'))
            this.video.setAttribute('preload', 'none');

        if(this.hasAttribute('lazy-src')) 
            TrdsVideoSrcIntersectionHandler.observe(this)

        if(this.hasAttribute('lazy-poster'))
            TrdsVideoPosterIntersectionHandler.observe(this);

    }

    loadPoster = () => this.video.poster = this.getAttribute('lazy-poster');
    loadVideo = () => this.video.src = this.getAttribute('lazy-src');

});