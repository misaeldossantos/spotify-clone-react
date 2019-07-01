import {PlayerStore} from "./player.store";
import {RouterStore} from "mobx-react-router";
import {CommonStore} from "./common.store";

export default {
    player: new PlayerStore(),
    routing: new RouterStore(),
    common: new CommonStore()
}