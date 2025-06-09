import { makeAutoObservable, observable } from "mobx";
import NavigationStore from "./NavigationStore";

export default class MainStore {

    navigationStore:NavigationStore = new NavigationStore();
    
    constructor() {
        makeAutoObservable(this)
    }
}
