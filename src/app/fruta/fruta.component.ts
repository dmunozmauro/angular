import { Component, Class } from '@angular/core';
import { ftruncate } from 'fs';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent {
    public titulo = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

    public nombre: string;
    public edad: number;
    public mayorDeEdad: boolean;
    public trabajos: Array<any> = ['Carpintero', 44, 'Fontanero'];
    comodin: any;

    constructor() {
        this.nombre = 'Diego Muñoz';
        this.edad = 28;
        this.mayorDeEdad = true;
        this.comodin = 'Si';
    }

    ngOnInit() {
        this.cambiarNombre();
        this.cambiarEdad(this.edad);
        //alert('Hola ' + this.nombre + ", tu edad es " + this.edad);

        //VARIABLES Y ALCANCES
        var uno = 8;
        var dos = 15;

        if(uno===8){
            let uno = 3;
            var dos = 88;
            console.log("dentro del if" + uno);
        }console.log("dentro del if" + uno);
    }

    cambiarNombre() {
        this.nombre = "Pepito poto";
    }

    cambiarEdad(edad) {
        this.edad = edad;
    }
}