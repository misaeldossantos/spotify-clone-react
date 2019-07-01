import React from 'react'
import {Text} from "../base/Text";
import {Spring} from "react-spring/renderprops-universal";
import {View} from "../base/View";
import styled from 'styled-components'

export const FadeAnimate = ({children}) => {
    return <Spring
        from={{opacity: 0}}
        to={{opacity: 1}}
        config={{duration: 1000}}
    >
        {(props) => <View style={props}>
            {children}
        </View>}

    </Spring>
}

export const HighlightButton =  styled(Text)(({activeColor = 'white', inactiveColor = 'gray', active}) => `
   
    color: ${active? activeColor: inactiveColor};
    transition: all 0.3s;
    cursor: pointer;
    
    :hover {
        color: ${activeColor};
    }
    
`);