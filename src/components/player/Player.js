import React, {Component, useState, useEffect} from 'react';
import {StyledView, View} from "../base/View";
import chroma from 'chroma-js'
import {observer} from 'mobx-react-lite'
import {PlayerIndicator} from "./PlayerIndicator";
import {RangeIndicator} from "../common/RangeIndicator";
import {Text} from "../base/Text";

const Player = observer((props) => {

    const total = 200;

    const [current, setCurrent] = useState(0);


    if (current <= total) {
        setTimeout(() => {
            setCurrent(current + 1)
        }, 20);
    }


    return (
        <Container alignCenter>

            <AlbumDetail>

                <img src={"https://image.freepik.com/vetores-gratis/album-de-musica-electro_53876-67221.jpg"}
                     height={'auto'} width={60} draggable={false}
                />

                <View alignCenter spacing={1.5}>
                    <Text title>Nome do artista</Text>
                    <Text subtitle>Nome do album</Text>
                </View>

            </AlbumDetail>

            <PlayerIndicator setCurrent={setCurrent} currentSg={current} total={total}/>

            <View>

                <RangeIndicator width={300} total={10} value={5} />

            </View>

        </Container>
    );
});

const Container = StyledView.attrs({
    direction: 'row',
})(props => `
    background-color: ${chroma(props.theme.bgPrimary).brighten(0.6).alpha(0.8)};
    padding: 15px;
    justify-content: space-between;
        
    * {
        font-size: 10pt;
    }
`);

const AlbumDetail = StyledView.attrs({
    direction: 'row',
    internalDistance: 20
})`
    align-items: center;
`;

export default Player;