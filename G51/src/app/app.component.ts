import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'G51';

  //login
  user_correcto: string ="admininicial";
  pass_correcto: string ="admin123456";

  //variables para almacenar datos que insertan en el formulario
  user:string="";
  pass:string="";

  //variable para avisos de error
  correcto: number =-1;

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
}
