import {PlayerStore} from "./player.store";
import {RouterStore} from "mobx-react-router";

export default {
    player: new PlayerStore(),
    routing: new RouterStore()
}