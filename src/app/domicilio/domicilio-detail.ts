import { Domicilio } from "../domicilio/domicilio";
import { Plato } from "../plato/plato";


export class DomicilioDetail extends Domicilio {
    
    /** Los domicilios del Domicilio **/
    domicilios : Domicilio[];

    /** Las platos del Domicilio **/
    platos : Plato[];

}
