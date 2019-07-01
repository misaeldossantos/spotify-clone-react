import React from 'react'
import {StyledView, View} from "../../components/base/View";
import Player from "./Player";
import {MenuLateral} from "./MenuLateral";
import {Route, Switch} from "react-router-dom";
import {InicioPage} from "./Inicio.page";
import {BuscaPage} from "./Busca.page";
import BgGradient from "../../components/common/BgGradient";
import {Compose} from "../../components/common/Compose";
import posed, {PoseGroup} from 'react-pose';

const preventContextMenuClick = (e) => e.preventDefault();

export const MusicPage = Compose({
    inject: ["player", "routing"],

    render({match, player: playerStore, location}) {

        return <Container onContextMenu={preventContextMenuClick}>

            <BgGradient bgColor={playerStore.gradientBgColor} />

            <View flex direction={"row"}>

                <MenuLateral/>

                <Content>

                    {/*<Routes match={match} location={location}/>*/}

                    {/*<PoseGroup>*/}
                        {/*<RoutesContainer key={location.key}>*/}
                            <Switch location={location}>
                                <Route path={`${match.url}/inicio`} component={InicioPage} />

                                <Route path={`${match.url}/busca`} component={BuscaPage} exact />

                                <Route path={`${match.url}/busca/:q`} component={BuscaPage} />
                            </Switch>
                        {/*</RoutesContainer>*/}
                    {/*</PoseGroup>*/}
                </Content>

            </View>

            <Player/>

        </Container>
    }
});

const RoutesContainer = posed.div({
    open: {
        y: "-100%",
        type: 'tween'
    },
    closed: {
        x: "-100%",
        type: 'tween'
    }
});

const Container = StyledView.attrs({absolute: {all: true}, primary: true})(({bgColor}) => ``);

const Content = StyledView(props => `
    flex: 1;
`);
