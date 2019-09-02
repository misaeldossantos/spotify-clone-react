import React, {useEffect} from 'react'
import {StyledView, View} from "../../components/base/View";
import chroma from 'chroma-js'
import styled from 'styled-components'
import {Compose} from "../../components/common/Compose";
import {Helmet} from "react-helmet";
import {Text} from "../../components/base/Text";
import {FadeAnimate, FromLeftAnimate, HighlightButton, LetterAnimate} from "../../components/common/Animations";
import { Trail, animated } from 'react-spring/renderprops'

export const BuscaPage = Compose({

    inject: ['player', 'routing', 'common'],

    render({player: playerStore, routing, match}) {
        const {replace} = routing;

        const q = match.params.q;

        useEffect(() => {

            if (q) {
                playerStore.setGradientBgColor(chroma("black").alpha(0.9))
                console.log("pesquisando por " + q)


            } else {
                playerStore.setGradientBgColor("black")
            }

        }, [q]);

        const search = (value) => {
            replace("/music/busca/" + value)
        };

        return <Container>
                <Helmet>
                    <title>{q ? `Buscando por ${q}` : 'Busca'}</title>
                </Helmet>

                <SearchBar>
                    <Input autoFocus placeholder={"Comece a escrever..."}
                           onChange={(el) => search(el.target.value)}
                           value={q}
                    />
                </SearchBar>

            <FadeAnimate delay={100} key={!!q}>

                    {q ? <Results>
                        <Text bold size={20}>Mostrando resultados para {q}</Text>
                    </Results> : <History/>}

                </FadeAnimate>

            </Container>
    }

});

const Container = StyledView.attrs()(({bgColor}) => `

       > * {
        padding: 20px 20% 20px 12% !important;
    }
`);

const SearchBar = StyledView(props => `

    background-color: ${chroma("gray").alpha(0.2)};
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

export const ItemHistory = ({name = "", category = ""}) => {
    return <View internalDistance={5}>
        <HighlightButton activeColor={"white"} inactiveColor={chroma("white").darken(1.4)} bold
                         size={20}>{name}</HighlightButton>
        <Text size={9} color={chroma("white").darken(2)}>{category.toUpperCase()}</Text>
    </View>
};

const History = Compose({
    inject: ['common'],

    render({common: commonStore}) {
        const history = commonStore.history || [];

        return <View internalDistance={15}>

            <Text color={chroma("white").darken(1)}>
                <LetterAnimate str={"O que você ouviu recentemente:"} />
            </Text>

            <View internalDistance={10}>

                <Trail
                    native
                    items={history}
                    from={{ x: -100 }}
                    to={{ x: 0 }}
                    delay={200}
                >
                    {item => ({ x, opacity }) => (
                        <animated.div
                            style={{
                                opacity,
                                transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                            }}
                        ><ItemHistory {...item}/></animated.div>
                    )}
                </Trail>

            </View>

        </View>
    }

});