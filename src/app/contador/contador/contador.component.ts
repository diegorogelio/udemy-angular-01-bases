import { Component } from '@angular/core'

@Component({
        selector: 'app-contador',
        template:`
            
            <h2>{{titulo}}</h2>

            <button (click)="acumular(-base)">- {{base}}</button>

            <span>{{numero}}</span>

            <button (click)="acumular(base)">+ {{base}}</button>

            <h3>Incremento: {{base}}</h3>
        `
      }
)
export class ContadorComponent{

    titulo = 'Contador APP';
    numero:number = 10;
    base: number = 5;
  
    incremento(){
      this.numero ++;
    }
  
    decremento(){
      this.numero --;
    }
    acumular(valor:number){
      this.numero += valor;
    }
  }
  