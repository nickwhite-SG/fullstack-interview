import { Routes } from '@angular/router';
import { PermitListComponent } from './components/permit-list/permit-list.component';
import { CreatePermitComponent } from './components/create-permit/create-permit.component';

export const routes: Routes = [
  { path: '', redirectTo: '/permits', pathMatch: 'full' },
  { path: 'permits', component: PermitListComponent },
  { path: 'create', component: CreatePermitComponent },
  { path: '**', redirectTo: '/permits' },
];
