export class HoraMinutos {
    /**
    * El id de la mesa
    */
    hora : number;


    /**
     * El minuto a mostrar de la mesa
     */
    minuto : any;

    minutos : number;


   setHoraMinuto(hora: number, minuto: any, minutos: number): HoraMinutos  {
     this.hora = hora;
     this.minuto = minuto;
     this.minutos = minutos;
     return this;
   }

}
