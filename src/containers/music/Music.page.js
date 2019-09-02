import React from 'react'
import {StyledView, View} from "../../components/base/View";
import Player from "./Player";
import {MenuLateral} from "./MenuLateral";
import {Redirect, Route, Switch} from "react-router-dom";
import {InicioPage} from "./Inicio.page";
import {BuscaPage} from "./Busca.page";
import BgGradient from "../../components/common/BgGradient";
import {Compose} from "../../components/common/Compose";
import {animated, Transition} from 'react-spring/renderprops'

const preventContextMenuClick = (e) => e.preventDefault();

export const MusicPage = Compose({
    inject: ["player", "routing"],

    render({match, player: playerStore, location}) {

        return <Container onContextMenu={preventContextMenuClick}>

            <BgGradient bgColor={playerStore.gradientBgColor}/>

            <View flex direction={"row"}>

                <MenuLateral/>

                <Content>

                    <Transition
                        native
                        items={location}
                        key={location.pathname.split('/')[2]}
                        from={{transform: 'translateY(100px)', opacity: 0}}
                        enter={{transform: 'translateY(0px)', opacity: 1}}
                        leave={{transform: 'translateY(100px)', opacity: 0}}>
                        {(loc, state) => style => (
                            <View>
                                <animated.div style={style}>
                                    <Switch location={state === 'update' ? location : loc}>
                                        <Redirect from={"/"} exact to={`${match.url}/inicio`}/>
                                        <Route path={`${match.url}/inicio`} component={InicioPage}/>

                                        <Route path={`${match.url}/busca`} component={BuscaPage} exact/>

                                        <Route path={`${match.url}/busca/:q`} component={BuscaPage}/>
                                    </Switch>
                                </animated.div>
                            </View>
                        )}
                    </Transition>

                </Content>

            </View>

            <Player/>

        </Container>
    }
});


const Container = StyledView.attrs({absolute: {all: true}, primary: true})(({bgColor}) => ``);

const Content = StyledView(props => `
    flex: 1;
`);
