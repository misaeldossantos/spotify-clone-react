import React from 'react'
import {Text} from "../base/Text";
import {animated, Spring, Trail} from "react-spring/renderprops";
import {View} from "../base/View";
import styled from 'styled-components'
import {ItemHistory} from "../../containers/music/Busca.page";
import {Compose} from "./Compose";

export const FadeAnimate = ({children, ...config}) => {
    return <Spring
        from={{opacity: 0}}
        to={{opacity: 1}}
        config={{duration: 1000, ...config}}
    >
        {(props) => <View style={props}>
            {children}
        </View>}

    </Spring>
};


export const FromLeftAnimate = ({children, ...config}) => {
    return <Spring
        from={{x: -100}}
        to={{x: 0}}
        config={{duration: 1000, ...config}}
    >
        {(props) => <View style={props}>
            {children}
        </View>}

    </Spring>
};

// export const LetterAnimate = ({delay = 10, str}) => {
//     const items = str.split("");
//
//     return <Trail
//         native
//         items={items}
//         from={{opacity: 0}}
//         style={{display: 'flex', flexDirection: 'row'}}
//         duration={delay}
//         to={{opacity: 1}}
//     >
//         {item => ({x, opacity}) => (
//             <animated.span
//                 style={{
//                     opacity,
//                     // transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
//                 }}
//             >{item}</animated.span>
//         )}
//     </Trail>
// };

export const LetterAnimate = Compose({
    render({str, delay = 10}) {
        const [letters, setLetters] = React.useState([]);

        const [i, setI] = React.useState(0);

        React.useEffect(() => {
            if (str[i]) {
                setTimeout(() => {
                    letters.push(str[i]);
                    setI(i + 1);
                }, delay);
            }
        }, [i]);

        return <>
            {letters.map((l, index) => <span key={index}>{l}</span>)}
        </>
    }
})

export const HighlightButton = styled(Text)(({activeColor = 'white', inactiveColor = 'gray', active}) => `
   
    color: ${active ? activeColor : inactiveColor};
    transition: all 0.3s;
    cursor: pointer;
    
    :hover {
        color: ${activeColor};
    }
    
`);