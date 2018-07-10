import {Component} from '@angular/core';
import {RopaService} from '../services/ropa.services';
 
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})

export class HomeComponent{
    public titulo = "Pagina principal";
    public listadoRopa: Array<string>;
    public prendaGuardar: string;
    constructor(
        private _ropaServices:RopaService
    ){}

    ngOnInit(){
        this.listadoRopa=this._ropaServices.getRopa();
        console.log(this._ropaServices.prueba('Camiseta Nike'));
    }

    guardarPrenda(){
        this._ropaServices.addRopa(this.prendaGuardar);
        this.prendaGuardar = null;
    }
}