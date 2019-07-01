import React, {useEffect} from 'react'
import {StyledView, View} from "../../components/base/View";
import chroma from 'chroma-js'
import styled from 'styled-components'
import {Compose} from "../../components/common/Compose";
import {Helmet} from "react-helmet";
import {Text} from "../../components/base/Text";
import {FadeAnimate, HighlightButton} from "../../components/common/Animations";


export const BuscaPage = Compose({

    inject: ['player', 'routing', 'common'],

    render({player: playerStore, routing, match}) {
        const {replace} = routing;

        const q = match.params.q;

        useEffect(() => {

            if (q) {
                playerStore.setGradientBgColor(chroma("black").alpha(0.9))
            } else {
                playerStore.setGradientBgColor("black")
            }

        }, [q]);

        return <Container>
            <Helmet>
                <title>Busca {q ? `por ${q}` : ''}</title>
            </Helmet>

            <SearchBar>
                <Input autoFocus placeholder={"Comece a escrever..."}
                       onChange={el => replace("/music/busca/" + el.target.value)}
                       value={q}
                />
            </SearchBar>

            {q ? <FadeAnimate key={"results"}>
                    <Results>
                        <Text bold size={20}>Mostrando resultados para {q}</Text>
                    </Results>
                </FadeAnimate> :

                <FadeAnimate key={"history"}>
                    <History/>
                </FadeAnimate>}

        </Container>

    }

});

const Container = StyledView.attrs()(({bgColor}) => `

       > * {
        padding: 20px 20% 20px 12% !important;
    }
`);

const SearchBar = StyledView(props => `

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

const Results = StyledView``;

const ItemHistory = ({name = "", category = ""}) => {
    return <View internalDistance={5}>
        <HighlightButton activeColor={"white"} inactiveColor={chroma("white").darken(1.4)} bold size={20}>{name}</HighlightButton>
        <Text size={9} color={chroma("white").darken(2)}>{category.toUpperCase()}</Text>
    </View>
};

const History = Compose({
    inject: ['common'],

    render({common: commonStore}) {
        const history = commonStore.history || [];

        return <View internalDistance={15}>

            <Text color={chroma("white").darken(1)}>O que você ouviu recentemente: </Text>

            <View internalDistance={10}>
                {history.map((item, index) => <ItemHistory key={index} {...item}/>)}
            </View>

        </View>
    }

});