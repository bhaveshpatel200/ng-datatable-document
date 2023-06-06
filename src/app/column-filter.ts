import { Component, ViewEncapsulation } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Column Filter</h2>
            </div>

            <ng-datatable [rows]="rows" [columns]="cols" [columnFilter]="true" class="column-filter"> </ng-datatable>
        </div>
    `,
    styles: [
        `
            .column-filter .bh-table-responsive {
                @apply min-h-[300px];
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
})
export class ColumnFilterComponent {
    cols: Array<colDef> = [];
    cols1: Array<colDef> = [];
    rows: Array<any> = [];
    constructor() {
        this.initData();
    }
    initData() {
        this.cols = [
            {
                field: 'id',
                title: 'ID',
                isUnique: true,
                cellRenderer: (params: any) => {
                    return '<strong>#' + params.id + '</strong>';
                },
            },
            { field: 'name', title: 'Name' },
            { field: 'username', title: 'Username' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
            { field: 'date', title: 'Date', type: 'date' },
            { field: 'active', title: 'Active', type: 'bool' },
            { field: 'age', title: 'Age', type: 'number' },
            { field: 'company.name', title: 'Company' },
        ];

        this.cols1 = [
            {
                field: 'id',
                title: 'ID',
                isUnique: true,
                cellRenderer: (params: any) => {
                    return '<strong>#' + params.id + '</strong>';
                },
                search: false,
            },
            { field: 'name', title: 'Name' },
            { field: 'username', title: 'Username' },
            { field: 'email', title: 'Email', search: false },
            { field: 'phone', title: 'Phone', search: false },
            { field: 'date', title: 'Date', type: 'date', search: false },
            { field: 'active', title: 'Active', type: 'bool', search: false },
            { field: 'age', title: 'Age', type: 'number', search: false },
            { field: 'company.name', title: 'Company', search: false },
        ];

        const arr = [];
        for (let i = 0; i < 50; i++) {
            const obj = {
                id: i + 1,
                name: 'Leanne Graham - ' + i,
                username: 'Bret - ' + i,
                email: 'Sincere@april.biz' + i,
                address: {
                    street: 'Kulas Light - ' + i,
                    suite: 'Apt. 556 - ' + i,
                    city: 'Gwenborough - ' + i,
                    zipcode: '92998-3874 - ' + i,
                    geo: {
                        lat: '-37.3159 - ' + i,
                        lng: '81.1496 - ' + i,
                    },
                },
                phone: '1-770-736-8031 x56442 - ' + i,
                website: 'hildegard.org - ' + i,
                company: {
                    name: 'Romaguera-Crona - ' + i,
                    catchPhrase: 'Multi-layered client-server neural-net - ' + i,
                    bs: 'harness real-time e-markets - ' + i,
                },
                date: 'Tue Sep 27 2022 22:19:57',
                active: i % 2 === 0 ? true : false,
                age: i % 2 === 0 ? i + 2 : i + 1,
            };
            arr.push(obj);
        }
        this.rows = arr;
    }
}
