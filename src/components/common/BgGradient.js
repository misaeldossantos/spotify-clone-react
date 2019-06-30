import React from 'react'
import {StyledView} from "../base/View";

export default StyledView.attrs({absolute: {all: true}, primary: true})(({bgColor}) => `
       ${bgColor ? `background-image: linear-gradient(to right bottom, ${bgColor}, rgba(0, 0, 0, 0.85));` : ''}
       position: fixed;
       zIndex: -1;
       background-color: white;
       transition: all 0.5s;
`);
