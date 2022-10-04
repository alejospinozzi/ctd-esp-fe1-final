import { ContenedorPadre } from "../types/character";

export const getCharacters = async (name:string):Promise <ContenedorPadre>=> {
    try{
        const response:Response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}`
        );
        return response.json();
    }
    catch(error:any){
        throw new Error(error);
    }
};

export const getNewPage = async (page:string):Promise <ContenedorPadre>=> {
    try{ 
        const response:Response = await fetch(
        `${page}`
        );
        return response.json();
    }
    catch(error:any){
        throw new Error(error);
    }
};



