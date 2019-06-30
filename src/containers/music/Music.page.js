import React from 'react'
import {StyledView, View} from "../../components/base/View";
import Player from "./Player";
import {MenuLateral} from "./MenuLateral";
import {Route, Switch} from "react-router-dom";
import {InicioPage} from "./Inicio.page";
import {BuscaPage} from "./Busca.page";
import BgGradient from "../../components/common/BgGradient";
import {Compose} from "../../components/common/Compose";
import Fade from 'react-fade-opacity'
import posed, {PoseGroup} from 'react-pose';

const preventContextMenuClick = (e) => e.preventDefault();

export const MusicPage = Compose({
    inject: ["player"],

    render({match, player: playerStore}) {


        return <Container onContextMenu={preventContextMenuClick}>

            <BgGradient bgColor={playerStore.gradientBgColor}/>

            <View flex direction={"row"}>

                <MenuLateral/>

                <Content>

                    <PoseGroup>
                        <RoutesContainer key={match.url}>
                            <Switch>
                                <Route path={`${match.url}/inicio`} component={InicioPage}/>

                                <Route path={`${match.url}/busca`} component={BuscaPage}/>
                            </Switch>
                        </RoutesContainer>
                    </PoseGroup>

                </Content>

            </View>

            <Player/>

        </Container>
    }
});

const RoutesContainer = posed.div({
    enter: {
        y: "-100%",
        type: 'tween'
    },
    exit: {
        x: "-100%",
        type: 'tween'
    }
});

const Container = StyledView.attrs({absolute: {all: true}, primary: true})(({bgColor}) => ``);

const Content = StyledView(props => `
    flex: 1;
`);
