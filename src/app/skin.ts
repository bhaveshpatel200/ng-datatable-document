import { Component, ViewEncapsulation } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Skin - Striped</h2>
            </div>

            <ng-datatable [rows]="rows" [columns]="cols" skin="bh-table-striped"> </ng-datatable>

            <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
                <h2 class="text-3xl">Skin - Hover</h2>
            </div>

            <ng-datatable [rows]="rows" [columns]="cols" skin="bh-table-hover"> </ng-datatable>

            <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
                <h2 class="text-3xl">Skin - Bordered</h2>
            </div>

            <ng-datatable [rows]="rows" [columns]="cols" skin="bh-table-bordered"> </ng-datatable>

            <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
                <h2 class="text-3xl">Skin - Compact</h2>
            </div>

            <ng-datatable [rows]="rows" [columns]="cols" skin="bh-table-compact"> </ng-datatable>

            <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
                <h2 class="text-3xl">Skin - All</h2>
            </div>

            <ng-datatable [rows]="rows" [columns]="cols" skin="bh-table-striped bh-table-hover bh-table-bordered bh-table-compact"> </ng-datatable>
        </div>
    `,
})
export class SkinComponent {
    cols: Array<colDef> = [];
    rows: Array<any> = [];
    constructor() {
        this.initData();
    }
    initData() {
        this.cols = [
            { field: 'id', title: 'ID', isUnique: true },
            { field: 'name', title: 'Name' },
            { field: 'username', title: 'Username' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
            { field: 'date', title: 'Date', type: 'date' },
            { field: 'active', title: 'Active', type: 'bool' },
            { field: 'age', title: 'Age', type: 'number' },
            { field: 'company.name', title: 'Company' },
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
