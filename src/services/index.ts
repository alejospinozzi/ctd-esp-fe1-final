import { ContenedorPadre } from "../types/character";

/**
 * Used to get an object with informarion of pages and an array of characters
 * @author Spinozzi Alejo Marcelo
 * @param {string} name 
 * @returns {ContenedorPadre} 
 */
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

/**
 * Used to bring the data of the next or prev page
 * 
 * @author Spinozzi Alejo Marcelo
 * @param {string} page 
 * @returns {ContenedorPadre} 
 */

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



