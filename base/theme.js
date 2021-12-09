// need to find a way to add bg opacity from these rgbs: play with background blend mode !!!
import { getHostUrl } from '../libs/getHostUrl.js';

let styleTag = document.createElement('style');
styleTag.id = 'trds-theme';
styleTag.textContent = `

    :root{

        --trds-theme--primary: rgb(204, 46, 40);
        --trds-theme--accent: rgb(40, 198, 204);

        --trds-theme--primary-bg: rgb(28, 28, 28);
        --trds-theme--secondary-bg: rgb(18, 18, 18);

        --trds-theme--primary-text: rgb(237, 242, 244);
        --trds-theme--secondary-text: rgb(204, 204, 204);
        --trds-theme--tertiary-text: rgb(133, 133, 133);

        --trds-theme--success: rgb(69, 133, 53);
        --trds-theme--warning: rgb(231, 113, 27);
        --trds-theme--error: rgb(204, 46, 40);

        --trds-theme--overlay-opacity: .72;

    }

    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-display: block;
        src: local('Montserrat Regular'), local('Montserrat-Regular'), url('${getHostUrl(import.meta.url)}/assets/fonts/montserrat400.woff2') format('woff2');
        font-weight: 400;
    }

    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-display: block;
        src: local('Montserrat Bold'), local('Montserrat-Bold'), url('${getHostUrl(import.meta.url)}/assets/fonts/montserrat700.woff2') format('woff2');
        font-weight: 700;
    }

    html{
        font-family: 'Montserrat';
        line-height: 1.5;
    }

`;
document.head.appendChild(styleTag);