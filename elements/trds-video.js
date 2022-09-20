import '../libs/wc-polyfill.js';
import '../layout/layout-vars.js';
import TrdsIntersectionObserver from '../libs/IntersectionObserver.js';

const TrdsVideoStyle = document.createElement('style');
TrdsVideoStyle.id = 'trds-video';
TrdsVideoStyle.textContent = `

    video[is="trds-video"]{
        display: block;
        max-width: var(--element--max-width);
        width: 100%;
        height: auto;
        object-fit: contain;           
    }

`;
document.head.appendChild(TrdsVideoStyle);

customElements.define('trds-video', class extends HTMLVideoElement{
    
    constructor(){ 
        super();

        if(this.hasAttribute('lazy-poster') || this.hasAttribute('poster'))
            this.setAttribute('preload', 'none');

        if(this.hasAttribute('lazy-src')){
            
            this.load = () => this.src = this.getAttribute('lazy-src');
            TrdsIntersectionObserver.observe(this)

        }

        else if(this.hasAttribute('lazy-poster')){

            this.load = () => this.poster = this.getAttribute('lazy-poster');
            TrdsIntersectionObserver.observe(this);

        }
            
    }

}, {extends: 'video'});