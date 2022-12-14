import { AnyAction } from "@reduxjs/toolkit";


export interface FavoriteAction extends AnyAction{
    payload?:Result
    type:string;    
    id?:number
}

export interface ContenedorPadre {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    next:  string;
    pages: number;
    prev:  string;
}

export interface Result {
    created:  Date;
    episode:  string[];
    gender:   Gender;
    id:       number;
    image:    string;
    location: Location;
    name:     string;
    origin:   Location;
    species:  Species;
    status:   Status;
    type:     string;
    url:      string;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}  