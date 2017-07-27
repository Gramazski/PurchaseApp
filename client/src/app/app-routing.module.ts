/**
 * Created by Stanislau_Hramatskiu on 7/21/2017.
 */
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserGuard } from './shared/user/user.guard';
import {ProductListComponent} from "./products/product-list/product-list.component";
import {ProductComponent} from "./products/product/product.component";
import {ProductOverviewComponent} from "./products/product-overview/product-overview.component";
import {ProductSpecsComponent} from "./products/product-specs/product-specs.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [UserGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'products', component: ProductListComponent, canActivate: [UserGuard]},
    { path: 'products/:id', component: ProductComponent, canActivate: [UserGuard], canActivateChild: [UserGuard], children: [
        {path: 'overview', component: ProductOverviewComponent},
        {path: 'specs', component: ProductSpecsComponent}
    ]},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);