import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {

    public nombrePrenda = 'Pantalones';
    public coleccionRopa = ['Pantalones Blancos', 'Camiseta Roja'];

    prueba(nombrePrenda) {
        return nombrePrenda;
    }

    addRopa(nombrePrenda: string): Array<string> {
        this.coleccionRopa.push(nombrePrenda);
        return this.getRopa();
    }

    getRopa() {
        return this.coleccionRopa;
    }

}