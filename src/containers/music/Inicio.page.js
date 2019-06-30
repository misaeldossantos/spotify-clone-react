import React from 'react'
import {inject} from 'mobx-react'

export const InicioPage = inject("player")(({player: playerStore}) => {

    React.useEffect(() => {
        playerStore.gradientBgColor = "blue"
    }, []);

    return <div>INICIO</div>
})