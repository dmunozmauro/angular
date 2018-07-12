import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversor' })

export class ConversorPipe implements PipeTransform {
    transform(numeroUno, numeroDos) {
        let valorUno = parseInt(numeroUno);
        let valorDos = parseInt(numeroDos);

        let resultado = "La multiplicación: " + valorUno + " x " + valorDos + " = " + (valorUno * valorDos);
        return resultado;
    }
}