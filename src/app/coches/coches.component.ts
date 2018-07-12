import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesServices } from '../services/peticiones.service';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesServices]
})

export class CochesComponent {
    public titulo = "Componente de coches";

    public coche: Coche;
    public coches: Array<Coche>;
    public articulos;
    constructor(private _peticionesServices: PeticionesServices) {
        this.coche = new Coche("", "", "");
        this.coches = [
            new Coche("Renault Symbol", "1200", "Azul"),
            new Coche("JAC S2", "1500", "Plata")];
    }

    ngOnInit() {
        this._peticionesServices.getArticulos().subscribe(
            result => {
                this.articulos = result;
                if(this.articulos){
                    console.log("Error en el servidor");
                    
                }

            },
            error => {
                var errorMensaje = <any>error;
                console.log(errorMensaje);
            }
        );

    }

    onSubmit() {
        this.coches.push(this.coche);
        this.coche = new Coche("", "", "");
    }
}