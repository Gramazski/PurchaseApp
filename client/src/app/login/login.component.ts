/**
 * Created by Stanislau_Hramatskiu on 7/21/2017.
 */
import {Component} from '@angular/core'
import {Router, ActivatedRoute} from "@angular/router";
import {LoginService} from "./login.service";
import {AlertService} from "../shared/alert/alert.service";

@Component({
    selector: "login-component",
    templateUrl: "./src/app/login/login.component.html"
})
export class LoginComponent{
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.loginService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.loginService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}