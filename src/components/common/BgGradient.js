import React from 'react'
import {StyledView} from "../base/View";
import {Compose} from "./Compose";
import posed, {PoseGroup} from "react-pose";

export default Compose({
    render({...props}) {
        return <PoseGroup>
            <TransitionContainer key={props.bgColor}>
                <Container {...props} />
            </TransitionContainer>
        </PoseGroup>
    }
})


const Container = StyledView.attrs({absolute: {all: true}, primary: true})(({bgColor, opacity = 1}) => `
       ${bgColor ? `background-image: linear-gradient(to right bottom, ${bgColor}, rgba(0, 0, 0, 0.85));` : ''}
       position: fixed;
       zIndex: -1;
       background-color: white;
       transition: opacity 0.2s ease-in-out;
       opacity: ${opacity};
       animation: op;
       
       @keyframes op {
            from {
                opacity: 0;
            }
            
            to {
                opacity: 1;
            }
       }
`);

const TransitionContainer = posed.div({
    enter: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
});