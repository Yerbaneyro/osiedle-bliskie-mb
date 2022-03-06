import { createGlobalStyle } from "styled-components";
import "@fontsource/work-sans";

const GlobalStyle = createGlobalStyle`

    .swiper {
        padding-bottom: 38px !important;
    }
    .swiper-pagination-bullets.swiper-pagination-horizontal {
    left: 159px !important;
    }
    .swiper-pagination-bullet {
        width: 12px !important;; 
        height: 12px !important;;
        border-radius: 2px !important;;
    }
    .swiper-pagination-bullet-active {
        
        background-color: #739143 !important;
    }


    

    body {
        display: block;
        font-family: "Work Sans" ;

        line-height: 1; 
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, font, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td {
    background: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    }


    input, select {
        vertical-align:middle;
    }


    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    .bold {
        font-weight: bold;
    }

    .floatLeft {
        float: left;
    }
    .floatRight {
        float: right;
    }

    .clear {
        clear: both;
    }
`;

export default GlobalStyle;
