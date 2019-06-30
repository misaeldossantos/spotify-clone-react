import React from 'react'
import {StyledView, View} from "../../components/base/View";
import Player from "../../components/player/Player";
import {MenuLateral} from "./MenuLateral";
import {Route, Router} from "react-router-dom";
import {InicioPage} from "./Inicio.page";
import {BuscaPage} from "./Busca.page";
import {observer} from 'mobx-react-lite'
import BgGradient from "../../components/common/BgGradient";
import {inject} from 'mobx-react'

const preventContextMenuClick = (e) => e.preventDefault();

export const MusicPage = inject("playerStore")(observer(({match, children, playerStore}) => {


    return <Container onContextMenu={preventContextMenuClick}>

        <BgGradient bgColor={playerStore.gradientBgColor} />

        <View id={"main"} flex direction={"row"}>

            <MenuLateral/>

            <Content>

                <Route path={`${match.url}/inicio`} component={InicioPage}/>

                <Route path={`${match.url}/busca`} component={BuscaPage}/>

            </Content>

        </View>

        <Player/>

    </Container>
}));

const Container = StyledView.attrs({absolute: {all: true}, primary: true})(({bgColor}) => `
`);

const Content = StyledView(props => `
    flex: 1;
`);
