import { makeAutoObservable, observable } from "mobx";
import * as React from "react";
import { Navigate } from "react-router-dom";

export default class NavigationStore {

    currentRoute: string = ""
    title: string = ""
    
    constructor() {
        makeAutoObservable(this)
    }
}
