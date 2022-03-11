import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  apiURL:string="http://localhost:8080/api/pacientes"

  constructor(private httpobject: HttpClient) { }

  resultados=Array();

  upload(file:any):Promise<any[]>{
    return new Promise<any[]>(
      (resolve,reject)=>{
        var lector = new FileReader();//abre y lee el archivo
        lector.onloadend=(e)=>{
          let contenido:string = lector.result as string;
          let lineas_separadas=contenido.split("\n");

          for(let linea_actual of lineas_separadas){
            linea_actual.replace(";", ",");
            let columnas = linea_actual.split(",");
            
            this.httpobject.post(this.apiURL,
              {
              "tipodoc":columnas[0],
              "cedula":columnas[1],
              "primernombre":columnas[2],
              "segundonombre":columnas[3],
              "primerapellido":columnas[4],
              "segundoapellido":columnas[5],
              "fechanacimiento":columnas[6],
              "email":columnas[7],
              "genero":columnas[8],
              "pais":columnas[9],
              "ciudad":columnas[10],
              "telefono":columnas[11],
              "movil":columnas[12],
              "direccion":columnas[13],
              "sede":columnas[14],
              "estadopaciente":columnas[15]
            },{
              observe:'response'
            }).subscribe(
              (response:any)=>{
                this.resultados.push(response.status);
              }
            );
          }
          resolve(this.resultados);
        }
        lector.readAsText(file);
      }
    );

  }
}
