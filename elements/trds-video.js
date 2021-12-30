// usage: video is trds-video
// add lazy-src or lazy-poster for lazy resources
// dont need to add preload none as it will be automatically added to if there is a poster

import '../base/layout.js';

let styleTag = document.createElement('style');
styleTag.id = 'trds-video-style';
styleTag.innerText = `
    video[is=trds-video]{
        display: block;
        max-width: var(--trds-element--max-width);
        width: 100%;
        height: auto;
        object-fit: contain;           
    }
`;
document.head.appendChild(styleTag);

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

customElements.define('trds-video', class TrdsVideo extends HTMLVideoElement{
    
    constructor(){ 
        super();
    }

    connectedCallback(){      

        if(this.hasAttribute('lazy-poster') || this.hasAttribute('poster'))
            this.setAttribute('preload', 'none');

        if(this.hasAttribute('lazy-src')) 
            TrdsVideoSrcIntersectionHandler.observe(this)

        if(this.hasAttribute('lazy-poster'))
            TrdsVideoPosterIntersectionHandler.observe(this);

    }

    loadPoster = () => this.poster = this.getAttribute('lazy-poster');
    loadVideo = () => this.src = this.getAttribute('lazy-src');

}, {extends: 'video'});