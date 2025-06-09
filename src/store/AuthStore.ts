import { makeAutoObservable, observable } from "mobx";

export default class AuthStore {

    currentRoute:string = ""
    
    constructor() {
        makeAutoObservable(this)
    }
}