import React from 'react';
import {ThemeProvider} from 'styled-components'
import {defaultTheme} from "./core/style/Theme";
import {observer} from 'mobx-react-lite'
import {GlobalStyle} from "./core/style/Global.styled";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import {MusicPage} from "./containers/music/Music.page";
import {syncHistoryWithStore} from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import {Provider} from 'mobx-react'
import stores from "./core/stores/stores";

const history = syncHistoryWithStore(createBrowserHistory(), stores.routing);

const App = observer(() => {

    return <ThemeProvider theme={defaultTheme}>

        <>
            <GlobalStyle/>

            <Provider {...stores}>
                <Router history={history}>
                    <Switch>

                        <Redirect to={"/music"} from={'/'} exact />

                        <Route path={'/music'} component={MusicPage}/>

                    </Switch>
                </Router>
            </Provider>

        </>

    </ThemeProvider>

});

export default App;