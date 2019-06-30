import {action, computed, observable} from 'mobx'

export const PlayerStatus = {
    PAUSED: "PAUSED",
    PLAYING: "PLAYING",
    STOPED: "STOPED"
};

export class PlayerStore {

    constructor() {
        // this.status = PlayerStatus.PLAYING;
    }

    @observable
    status;

    @observable
    gradientBgColor = "blue";

    @observable
    song = {
        duration: 200,
        name: 'Musica exemplo',
        artist: 'Artista',
        album: 'Album',
        albumArtUrl: 'https://image.freepik.com/vetores-gratis/album-de-musica-electro_53876-67221.jpg',
        url: "http://www.lukeduncan.me/oslo.mp3"
    };

    @observable
    playProgress = 0;

    @action
    setPlayProgress(progress) {
        this.playProgress = progress;
    }

    @action
    pause() {
        this.status = PlayerStatus.PAUSED;
    }

    @action
    play() {
        this.status = PlayerStatus.PLAYING;
    }

    @action
    playSong(song) {
        this.song = song;
        this.playProgress = 0;
        this.status = PlayerStatus.PLAYING;
    }

}
