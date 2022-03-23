import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'G51';

  //login
  user_correcto: string ="admininicial";
  pass_correcto: string ="admin123456";

  //variables para almacenar datos que insertan en el formulario
  user:string="";
  pass:string="";

  //variable para avisos de error
  correcto: number =-1;

  //variable prueba api
  res:any;
  contenido:any;
  urlapi:string ="http://universities.hipolabs.com/search?country=Colombia";

  //variables para almacenar datos que insertan en el formulario usuario
cedula!:string;
nombrecompleto!:string;
email!:string;
username!:string;
password!:string;
ciudad!:string;
direccion!:string;

  comparar(){
    if (this.user===this.user_correcto){
      this.correcto=1; //si es correcto
      if (this.pass===this.pass_correcto){
        this.correcto=1;
      }else{
        this.correcto=0;
      }
    }else{
      this.correcto=0;
    }
  }

  constructor(private objetohttp:HttpClient){}
  
  ngOnInit(): void {
    this.res=this.objetohttp.get(this.urlapi);
    this.res.subscribe((data:any[])=>{
      this.contenido=data;
      console.log(this.contenido);
    });
  }

  //variables para probar método post
  codigorespuesta!:number;

  postData(){
    this.objetohttp.post<any>(
      "http://localhost:8080/api/usuarios",
      {
        "cedula": this.cedula,
        "nombrecompleto": this.nombrecompleto,
        "email": this.email,
        "username": this.username,
        "password": this.password,
        "ciudad": this.ciudad,
        "direccion": this.direccion
      
    },
    {observe:'response'}
    ).subscribe(response=>{
      this.codigorespuesta=response.status;
    });
  }


}
