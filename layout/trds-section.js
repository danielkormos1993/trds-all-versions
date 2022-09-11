import './trds-container.js';

const TrdsSectionIntersectionHandler = new IntersectionObserver(function(entries){
    entries.forEach(function(entry) {
        if(entry.isIntersecting){
            entry.target.loadBgImage();
            TrdsSectionIntersectionHandler.unobserve(entry.target);
        }
    });
}, {rootMargin: "0px 0px 200px 0px"});

export default class Section extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            <style>

                :host{
                    display: block;
                    padding: var(--space--xxl) 0;
                }

                :host(:last-child){
                    flex: 1;
                }

                :host(.bg-image){
                    --bg-image-overlay: var(--color--primary-bg);
                    background: var(--bg-image-src) var(--bg-image-overlay);
                    background-position: center center;
                    background-size: cover;
                    background-blend-mode: overlay;
                }

                :host(.lazy){
                    background: var(--bg-image-overlay);
                }

            </style>

            <trds-container>
                <slot></slot>
            </trds-container>

        `;

    }

    connectedCallback(){

        if(this.classList.contains('lazy'))
            TrdsSectionIntersectionHandler.observe(this);

    }

    loadBgImage = () => this.classList.remove('lazy');

}

customElements.define('trds-section', Section);