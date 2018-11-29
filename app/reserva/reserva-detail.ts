import { Cliente } from "../cliente/cliente";

import { Reserva } from "./reserva";

export class ReservaDetail extends Reserva {

    /** Los clientes de la reserva**/
    clientes : Cliente[];
}
