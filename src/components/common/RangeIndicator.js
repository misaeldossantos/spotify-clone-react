import React, {useEffect, useRef} from 'react'
import {StyledView} from "../base/View";
import chroma from "chroma-js";
import styled from "styled-components";
import {useLocalStore, observer} from "mobx-react-lite";

export const RangeIndicator = observer(({total, value, setValue = () => {}, width}) => {

    const state = useLocalStore(() => ({
        active: false,
        movePoint: false
    }));

    useEffect(() => {
        console.log(state.movePoint)
        if(state.movePoint && !state.active) {
            state.active = true
        } else if(state.active) {
            state.active = false;
        }
    }, [state.movePoint]);

    const barRef = useRef(null);

    function mouseEventDuration(e) {
        e.persist();
        const percElem = (e.nativeEvent.offsetX * 100) / barRef.current.clientWidth;
        const second = (total * percElem) / 100;
        if(second !== value && second <= total) {
            setValue(second)
        }
    }

    return <Bar width={width} onMouseEnter={() => state.active = true}
                 onMouseLeave={() => state.active = false}
                 onClick={mouseEventDuration}
                 onMouseDown={() => {
                     state.movePoint = true;
                 }}
                 onMouseUp={() => state.movePoint = false}
                 onMouseMove={(e) => {
                     if(state.movePoint) {
                         mouseEventDuration(e)
                     }
                 }}
                 ref={barRef}
    >
        <ActiveBar
            active={state.active}
            progressInPercent={(value * 100) / total}
        >

            {state.active && <Pointer/>}

        </ActiveBar>
    </Bar>
})

const Bar = StyledView(({width, theme}) => `
    background-color: ${chroma(theme.bgPrimary).brighten(2)};
    height: 4px;
    ${width? `width: ${width}px;`:'flex: 1;'}
    border-radius: 10px;
    overflow: visible;
`);

const ActiveBar = styled(Bar).attrs({
    absolute: {all: true}
})(props => `
    
    width: ${props.progressInPercent || 0}%;
    align-items: center;
    justify-content: center;
    background-color: ${props.active? props.theme.colorPrimaryActive: chroma(props.theme.bgPrimary).brighten(4)}
`);

const Pointer = StyledView(props => `
    overflow: visible;
    background-color: white;
    border-radius: 10px;
    padding: 6px;
    position: absolute;
    right: 0;
    
    animation: appear 0.5s;
    
    @keyframes appear {
        from {opacity: 0; transform: scale(0.2);}
        to {opacity: 1;  transform: scale(1);}
    }
    
`);