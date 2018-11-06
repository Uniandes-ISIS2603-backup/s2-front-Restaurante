import { Domicilio } from "../domicilio/domicilio";
import { Reserva } from "../reserva/reserva";

import { Sucursal } from "./sucursal"
import {Mesa} from "../mesa/mesa";
export class SucursalDetail extends Sucursal {
   
    //Las mesas de la sucursal//
    mesas : Mesa[];   
    
}



