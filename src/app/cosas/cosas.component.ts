import { Component } from '@angular/core';
@Component({
    selector: 'cosas',
    templateUrl: './cosas.component.html'
})

export class CosasComponent {
    public nombre_component = 'Componente de cosas';
    public listado_cosas = 'Mesa, silla, auto, casa';
}