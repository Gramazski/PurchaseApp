/**
 * Created by Stanislau_Hramatskiu on 7/24/2017.
 */
import {Component} from '@angular/core'
import {LoggedControlService} from "../helpers/logged-control.service";
import {Router} from "@angular/router";

@Component({
    selector: 'top-menu',
    templateUrl: './src/app/shared/menu/top-menu.component.html'
})
export class TopMenuComponent{
    constructor(private loggedControlService: LoggedControlService, private router: Router){}

    logout(): void{
        this.loggedControlService.logout();
        this.router.navigate(['login']);
    }
}