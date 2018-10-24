import { Domicilio } from "../domicilio/domicilio";
import { Reserva } from "../reserva/reserva";

import { Cliente } from "./cliente"
import { Tarjeta } from "../tarjeta/tarjeta";

export class ClienteDetail extends Cliente {
    
    /** Los domicilios del cliente **/
    domicilios : Domicilio[];

    /** Las reservas del cliente **/
    reservas : Reserva[];

    /** La tarjeta del cliente **/
    tarjeta : Tarjeta;
}

/*
{
    "type": "clienteDetailDTO",
    "id": 20,
    "metodoPago": "tarjeta",
    "nombre": "Peppa",
    "domicilios": [],
    "reservas": [],
    "tarjeta": {}
}
*/