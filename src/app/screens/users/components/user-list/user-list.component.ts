import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

import { UpsertType } from '../../../../helpers/enums/upsert-type';
import { UserPayload } from '../../../../helpers/interfaces/user-payload';
import { UserUpsertModalData, UserUpsertComponent } from '../user-upsert/user-upsert.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users$!: Observable<UserPayload[]>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<UserPayload>;
  displayedColumns: string[] = ['id', 'name', 'phone', 'address', 'actions'];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.users$.subscribe((res: UserPayload[]) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  edit(user: UserPayload): void {
    const config: MatDialogConfig<UserUpsertModalData> = {
      data: {
        user,
        upsertType: UpsertType.Edit,
        title: 'Editar usuario'
      }
    };
    this.dialog.open(UserUpsertComponent, config);
  }
}
