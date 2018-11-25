import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { CompanyComponent } from "./company/company.component";
import { FormCompanyComponent } from "./company/form/form.component";
import { HomeComponent } from "./home/home.component";
import { ViewCompanyComponent } from "./company/view/view.component";

const appRoutes: Routes = [
    { path: '',                   component: HomeComponent},
    { path: 'home',               component: HomeComponent},
    { path: 'companies',          component: CompanyComponent},
    { path: 'companies/:id',      component: ViewCompanyComponent},
    { path: 'companies/form',     component: FormCompanyComponent},
    { path: 'companies/form/:id', component: FormCompanyComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
