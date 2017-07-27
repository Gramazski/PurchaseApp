/**
 * Created by Stanislau_Hramatskiu on 7/21/2017.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {RegisterService} from "./register.service";
import {AlertService} from "../shared/alert/alert.service";

@Component({
    selector: 'register-component',
    templateUrl: './src/app/register/register.component.html'
})
export class RegisterComponent{
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private registerService: RegisterService,
        private  alertService: AlertService) { }

    register() {
        this.loading = true;
        this.registerService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}