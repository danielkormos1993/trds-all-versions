import TrdsElement from '../trds-element.js';
import './container.js';

const TrdsSectionIntersectionHandler = new IntersectionObserver(function(entries){
    entries.forEach(function(entry) {
        if(entry.isIntersecting){
            entry.target.loadBgImage();
            TrdsSectionIntersectionHandler.unobserve(entry.target);
        }
    });
}, {rootMargin: "0px 0px 200px 0px"});

class TrdsSection extends TrdsElement{

    constructor(){
        super()
    }

    render(){

        const container = document.createElement('container');
        container.append(...this.children);

        this.appendChild(container);

        if(this.classList.contains('lazy'))
            TrdsSectionIntersectionHandler.observe(this);

    }

    loadBgImage = () => this.classList.remove('lazy');

}

customElements.define('trds-section', TrdsSection);

TrdsElement.addStyle(`

    trds-section{
        display: block;
        padding: var(--space--xxl) 0;
    }

    trds-section:last-child{
        flex: 1;
    }

    trds-section.bg-image{
        --bg-image-overlay: var(--color--primary-bg);
        background: var(--bg-image-url) var(--bg-image-overlay);
        background-position: center center;
        background-size: cover;
        background-blend-mode: overlay;
    }

    trds-section.lazy{
        background: var(--bg-image-overlay);
    }

`);