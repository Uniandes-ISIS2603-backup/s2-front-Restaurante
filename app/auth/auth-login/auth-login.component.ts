import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { User } from '../user';

import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../../cliente/cliente.service';
import { ClienteDetail } from '../../cliente/cliente-detail';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
        private clienteService: ClienteService
    ) { }

    user: User;

    roles: String[];

    cliente_id: number;

     clienteDetail: ClienteDetail;
     clienteDetail1: ClienteDetail;
    /**
    * Logs the user in with the selected role
    */
    async login(): Promise<void> {




        if(this.user.password === 'admin')
        {
          this.authService.login('Administrator');
          this.toastrService.success('¡Bienvenide Admin!')
        }

        else{

          this.getClienteDetail();
          await this.sleep(1000);

          if(this.clienteDetail!= null)
          {
            console.log(this.clienteDetail);
            this.authService.login('CLIENT');
            this.toastrService.success('¡Bienvenide ' + this.clienteDetail.nombre + "!")
            localStorage.setItem('id', this.user.password);
          }

          else
            this.toastrService.error("No se pudo ingresar");

        }


    }



    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.roles = ['Administrator', 'Client'];
        this.clienteDetail = null;
        this.clienteDetail1 = null;
    }


    /**
    * El método que obtiene el cliente cuyos detalles quieren visualizarse.
    */
    getClienteDetail(): void {
      this.clienteService.getClienteDetail(this.user.password)
        .subscribe(clienteDetail => {
          this.clienteDetail = clienteDetail
        });
    }

    sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
    }


}
