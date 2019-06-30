import React from 'react';
import styled from 'styled-components'

export const View = styled.div(props => `
    user-select: ${props.selection? 'text': 'none'};
    ${!props.allowOverflow? `overflow: ${props.scroll? 'auto': 'hidden'}`: ''};
    display: flex;
    flex-direction: ${props.direction? props.direction: 'column'};
    ${props.alignCenter? 'align-items: center;': ''}
    ${props.flex? 'flex: 1;': ''}
    position: ${props.absolute? 'absolute': 'relative'};
    ${typeof props.absolute === 'object' && props.absolute.all? 'top: 0; right: 0; left: 0; bottom: 0;':''}
    ${props.primary && props.theme? `background-color: ${props.theme.bgPrimary}; color: ${props.theme.colorPrimary};`: ''}
    ${props.paddingHorizontal? 
        props.paddingHorizontal === 'default'? `padding-left: ${props.theme.defaultPadding}px; padding-right: ${props.theme.defaultPadding}px;`: 
            `padding-left: ${props.paddingHorizontal}px; padding-right: ${props.paddingHorizontal}px;`
        :  ''
    }
    ${props.spacing? `line-height: ${props.spacing};`: ''}
    
    > * {
        ${props.internalDistance? 
            (props.direction === 'row'? `
                margin-right: ${props.internalDistance}px;
            `: `
                margin-bottom: ${props.internalDistance}px;
            `)
        : ''}
    }
`);

export const StyledView = styled(View)