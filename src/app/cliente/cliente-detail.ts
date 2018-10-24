import { Domicilio } from "../domicilio/domicilio";
import { Reserva } from "../reserva/reserva";

import { Cliente } from "./cliente"
export class ClienteDetail extends Cliente {
    
    /** Los domicilios del cliente **/
    domicilios : Domicilio[];

    /** Las reservas del cliente **/
    reservas : Reserva[];
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