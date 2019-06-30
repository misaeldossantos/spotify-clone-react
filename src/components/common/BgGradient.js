import React from 'react'
import {StyledView} from "../base/View";

export default StyledView.attrs({absolute: {all: true}, primary: true})(({bgColor}) => `
       ${bgColor ? `background-image: linear-gradient(to right bottom, ${bgColor}, rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%);` : ''}
       position: fixed;
       zIndex: -1;
`);
