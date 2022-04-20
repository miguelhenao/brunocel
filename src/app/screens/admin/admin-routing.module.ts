import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'usuarios', loadChildren: () => import('../users/users.module').then(m => m.UsersModule) },
      { path: 'clientes', loadChildren: () => import('../clients/clients.module').then(m => m.ClientsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
