import  {Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Contacto } from "../modelos/contacto";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'

})

export class Contactoservicio{
    readonly BASE_URL: string='http://137.184.120.127:5000'
    //readonly BASE_URL: string='http://localhost:8080'
    constructor(private http: HttpClient){

    }
    getContactos(): Observable<Contacto[]>{
        return this.http.get<Contacto[]>(`${this.BASE_URL}/contactos`);
    }

    registrarContacto(form:any){
        return this.http.post(`${this.BASE_URL}/new`,form);

    }
}