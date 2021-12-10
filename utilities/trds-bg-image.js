/* 
usage -> add trds-bg-image class to the element
-> set bg position with style attr
-> set image with style attr --trds-bg-image-url: url('...')
-> set overlay with style attr --trds-bg-image-overlay: color
*/

import '../base/theme.js';

let styleTag = document.createElement('style');
styleTag.id = 'trds-bg-image-style';
styleTag.textContent = `
 
    .trds-bg-image{
        --trds-bg-image-overlay: var(--trds-theme--primary-bg);
        background: var(--trds-bg-image-url)  var(--trds-bg-image-overlay);
        background-position: center center;
        background-size: cover;
        background-blend-mode: overlay;
    }
    .trds-bg-image--lazy{
        background: var(--trds-bg-image-overlay);
    }
`;
document.head.appendChild(styleTag);

const TrdsBgImageIntersectionHandler = new IntersectionObserver(function(entries){
    entries.forEach(function(entry) {
        if(entry.isIntersecting){
            entry.target.loadBgImage();
            TrdsBgImageIntersectionHandler.unobserve(entry.target);
        }
    });
}, {rootMargin: "0px 0px 100px 0px"});

[...document.querySelectorAll('.trds-bg-image--lazy')].map(element => {

    element.loadBgImage = () => element.classList.remove('trds-bg-image--lazy');
    TrdsBgImageIntersectionHandler.observe(element);

});