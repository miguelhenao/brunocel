import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

import { UpsertType } from '../../../../helpers/enums/upsert-type';
import { ProviderPayload } from '../../../../helpers/interfaces/provider-payload';
import { ProviderUpsertComponent, ProviderUpsertData } from '../provider-upsert/provider-upsert.component';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss']
})
export class ProviderListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() providers$!: Observable<ProviderPayload[]>;

  dataSource!: MatTableDataSource<ProviderPayload>;
  displayedColumns: string[] = ['id', 'name', 'phone', 'address', 'actions'];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.providers$.subscribe((res: ProviderPayload[]) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  edit(provider: ProviderPayload): void {
    const config: MatDialogConfig<ProviderUpsertData> = {
      data: {
        provider,
        upsertType: UpsertType.Edit,
        title: 'Editar proveedor'
      }
    };
    this.dialog.open(ProviderUpsertComponent, config);
  }
}
