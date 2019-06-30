import React, {useState} from 'react';
import {StyledView, View} from "../../components/base/View";
import chroma from 'chroma-js'
import {PlayerIndicator} from "../../components/player/PlayerIndicator";
import {RangeIndicator} from "../../components/common/RangeIndicator";
import {Text} from "../../components/base/Text";
import {Compose} from "../../components/common/Compose";

const Player = Compose({
    inject: ['player'],

    render({player}) {

        const {song = {}} = player;

        return (
            <Container alignCenter>

                <AlbumDetail>

                    <img src={song.albumArtUrl}
                         height={'auto'} width={60} draggable={false}
                    />

                    <View alignCenter spacing={1.5}>
                        <Text title>{song.artist}</Text>
                        <Text subtitle>{song.album}</Text>
                    </View>

                </AlbumDetail>

                <PlayerIndicator status={player.status}
                                 setCurrent={n => player.setPlayProgress(n)}
                                 currentSg={player.playProgress}
                                 total={song.duration || 0}
                                 play={() => player.play()}
                                 pause={() => player.pause()}
                />

                <View allowOverflow>

                    <RangeIndicator width={100} total={10} value={5}/>

                </View>

            </Container>
        );
    }

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