import { Cliente } from "../cliente/cliente";
import { Mesa } from "../mesa/mesa";
import { Sucursal } from "../sucursal/sucursal";

/**
* This class represents an reserva of the Restaourant.
* It contains all the information relevant to the reserva.
*/
export class Reserva {
    /**
    * The editorial's id
    */
    id: number;

    /**
    * The editorial's name
    */
    cantidadPersonas: number;

    /**
    * The reserva name
    */
    hora: any;

    cliente: Cliente;

    mesa: Mesa;

    sucursal: Sucursal;
}
