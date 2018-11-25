import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { CompanyComponent } from "./company/company.component";
import { FormCompanyComponent } from "./company/form/form.component";
import { HomeComponent } from "./home/home.component";
import { ShowCompanyComponent } from "./company/show/show.component";

const appRoutes: Routes = [
    { path: '',                 component: HomeComponent},
    { path: 'home',             component: HomeComponent},
    { path: 'companies',        component: CompanyComponent},
    { path: 'companies/:id',    component: ShowCompanyComponent},
    { path: 'company/new',      component: FormCompanyComponent},
    { path: 'company/:id/edit', component: FormCompanyComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
