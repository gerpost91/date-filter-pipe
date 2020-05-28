import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroFecha'
})
export class FiltroFechaPipe implements PipeTransform {

  transform(row: any, f1: Date, f2?: Date): any {

    const resultadoFiltro = [];
    // si es menor a la fecha final
    if (f1 >= f2 || f1 == null) {
      return row;
    }
    // si el argumento de fecha final es invalido, se setea a la fecha actual
    if (f2 == null) {
      f2 = new Date();
    }
    // si ambos arreglos son correctos entonces se crea el nuevo arrego
    for (const filteredRow of row) {
      if (row.fecha >= f1 && row.fecha <= f2) {
        resultadoFiltro.push(filteredRow);
      }
    }
    return resultadoFiltro;


  }

}
