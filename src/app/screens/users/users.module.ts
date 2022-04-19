import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomComponentsModule } from '../../components/custom-components.module';
import { MaterialModule } from '../../helpers/modules/material.module';
import { UserService } from '../../services/user.service';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserUpsertComponent } from './components/user-upsert/user-upsert.component';

@NgModule({
  declarations: [UsersComponent, UserListComponent, UserUpsertComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CustomComponentsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService]
})
export class UsersModule {}
