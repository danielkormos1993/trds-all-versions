import '../layout/$layout.js';
import TrdsIntersectionObserver from '../libs/IntersectionObserver.js';
import createStyle from '../libs/createStyle.js';

createStyle(`

    video[is="trds-video"]{
        display: block;
        max-width: var(--element--max-width);
        width: 100%;
        height: auto;
        object-fit: contain;           
    }

`);

customElements.define('trds-video', class extends HTMLVideoElement{
    
    constructor(){ 
        super();

        if(this.hasAttribute('lazy-poster') || this.hasAttribute('poster'))
            this.setAttribute('preload', 'none');

        if(this.hasAttribute('lazy-src')){
            
            this.isIntersecting = () => this.src = this.getAttribute('lazy-src');
            TrdsIntersectionObserver.observe(this)

        }

        else if(this.hasAttribute('lazy-poster')){

            this.isIntersecting = () => this.poster = this.getAttribute('lazy-poster');
            TrdsIntersectionObserver.observe(this);

        }
            
    }

}, {extends: 'video'});