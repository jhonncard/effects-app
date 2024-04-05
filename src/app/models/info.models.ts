import { Usuario } from "./usuario.model";

export interface Info{

    data:Usuario[];
    page:number;
    per_page:number;
    suport:Support;
    total:number;
    total_pages: number;

}
export interface Support{

    text: string;
    url:string;

}
