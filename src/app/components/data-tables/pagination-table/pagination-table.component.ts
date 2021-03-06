import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

import { Ingredient } from '@app/models/index';

@Component({
    selector: 'app-pagination-table',
    templateUrl: './pagination-table.component.html'
})
export class PaginationTableComponent implements OnInit {
    public dataSource: MatTableDataSource<Ingredient>;
    public displayedColumns: string[];

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private http: HttpClient) {
        this.displayedColumns = ['num', 'categoryID', 'name', 'calories', 'IG'];
    }

    ngOnInit() {
        this.http.get('/assets/mocks/data-table.json').subscribe(
            (data: Array<Ingredient>) => {
                this.dataSource = new MatTableDataSource(data);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            }
        );
    }

}

