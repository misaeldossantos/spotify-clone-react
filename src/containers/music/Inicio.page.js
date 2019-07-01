import React from 'react'
import {inject} from 'mobx-react'
import {Helmet} from "react-helmet";

export const InicioPage = inject("player")(({player: playerStore}) => {

    React.useEffect(() => {
        playerStore.setGradientBgColor("blue")
    }, []);

    return <>
        <Helmet>
            <title>Inicio</title>
        </Helmet>

        Inicio!
    </>
})