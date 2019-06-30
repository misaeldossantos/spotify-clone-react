import React from 'react'
import styled from 'styled-components'

export const Text = styled.span((props) => `
    ${props.spacing ? `line-height: ${props.spacing};`: ''}
    ${props.title? `color: ${props.theme.colors.title}`: ''}
    ${props.subtitle? `color: ${props.theme.colors.subtitle}`: ''}
    ${props.bold? 'font-weight: bold;': ''}
    ${props.size? `font-size: ${props.size}pt;`: ''}
`);