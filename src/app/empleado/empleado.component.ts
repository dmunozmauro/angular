import { Component } from '@angular/core';
import { Empleado } from './empleado';
@Component({
    selector: 'empleado-tag',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent {
    public titulo = 'Componente Empleados';
    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    public trabajadorExterno: boolean;


    constructor() {
        this.empleado = new Empleado('Diego', 28, 'Desarrollador', true);
        this.trabajadores = [
            new Empleado('Diego', 28, 'Desarrollador', true),
            new Empleado('Manuel', 20, 'UX', true),
            new Empleado('Sofia', 18, 'Arquitecto', false)
        ];
        this.trabajadorExterno = true;
    }

    ngOnInit() {
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor) {
        this.trabajadorExterno = valor;
        
    }

}