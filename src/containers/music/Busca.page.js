import React from 'react'
import {StyledView} from "../../components/base/View";
import chroma from 'chroma-js'
import styled from 'styled-components'
import {Compose} from "../../components/common/Compose";

export const BuscaPage = Compose({

    inject: ['player'],

    render({player: playerStore}) {

        React.useEffect(() => {
            playerStore.gradientBgColor = "black"
        }, [])

        return <Container>

            <SearchBar>
                <Input autoFocus placeholder={"Comece a escrever..."}/>
            </SearchBar>

        </Container>

    }

});

const Container = StyledView.attrs()(({bgColor}) => `

       > * {
        padding-left: 12% !important;
        padding-right: 20% !important;
    }
`);

const SearchBar = StyledView(props => `

    padding: 20px;
    background-color: ${chroma("gray").alpha(0.4)};
    width: 100%;
    
`);

const Input = styled.input(({theme}) => `
    background-color: transparent;
    border-color: none;
    border-style: none;
    font-size: 23pt;
    font-weight: bold;
    max-width: 50%;
    color: white;
    outline: none;
    caret-color: ${theme.colorPrimaryActive};
`);