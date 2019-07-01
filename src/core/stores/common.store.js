import {autorun, observable} from "mobx";
import services from "../services/services";

export class CommonStore {

    constructor() {
        this.init()
    }

    async init() {
        this.history = await services.search.getHistory();
    }

    @observable
    history = [];

}