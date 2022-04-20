import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

import { UpsertType } from '../../../../helpers/enums/upsert-type';
import { ClientPayload } from '../../../../helpers/interfaces/client-payload';
import { ClientUpsertComponent, ClientUpsertModalData } from '../client-upsert/client-upsert.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() clients$!: Observable<ClientPayload[]>;

  dataSource!: MatTableDataSource<ClientPayload>;
  displayedColumns: string[] = ['id', 'name', 'phone', 'address', 'actions'];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.clients$.subscribe((res: ClientPayload[]) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  edit(client: ClientPayload): void {
    const config: MatDialogConfig<ClientUpsertModalData> = {
      data: {
        client,
        upsertType: UpsertType.Edit,
        title: 'Editar cliente'
      }
    };
    this.dialog.open(ClientUpsertComponent, config);
  }
}
