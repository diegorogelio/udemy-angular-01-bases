import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ["Spiderman", "Batman", "Wolverine", "Pantera negra"];
  papelera: string[] = [];

  borrarHeroe(){
    let arrayListas: any[] = this.cambiaHeroeDeLista(this.heroes, this.papelera);
    this.heroes = arrayListas[0];
    this.papelera = arrayListas[1];
  }

  reestablecerHeroe(){
    let arrayListas: any[] = this.cambiaHeroeDeLista(this.papelera, this.heroes);
    this.papelera = arrayListas[0];
    this.heroes = arrayListas[1];
  }

  cambiaHeroeDeLista(listaOrigen: string[], listaDestino: string[]): [string[], string[]]{
    if(listaOrigen.length > 0){
      let p = listaOrigen.length-1;
      listaDestino.push(listaOrigen[p]);
      listaOrigen.splice(p);
    }

    return [listaOrigen, listaDestino];
  }

  vaciaPapelera(){
    console.log("limpiando papelera de reciclaje");
    this.papelera = []
  }

}
