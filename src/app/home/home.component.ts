import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.services';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})

export class HomeComponent {
    public titulo = "Página principal";
    public listadoRopa: Array<string>;
    public prendaGuardar: string;
    public fecha;

    constructor(
        private _ropaServices: RopaService
    ) {
        this.fecha = new Date(2018, 6, 12);
    }

    ngOnInit() {
        this.listadoRopa = this._ropaServices.getRopa();
        console.log(this._ropaServices.prueba('Camiseta Nike'));
    }

    guardarPrenda() {
        this._ropaServices.addRopa(this.prendaGuardar);
        this.prendaGuardar = null;
    }

    eliminarPrenda(index: number) {
        this._ropaServices.deleteRopa(index);
    }

}