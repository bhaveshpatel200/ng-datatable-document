import { Component, ViewEncapsulation } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Column Filter</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/column-filter.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <div class="column-filter">
                <ng-datatable [rows]="rows" [columns]="cols" [columnFilter]="true"> </ng-datatable>
            </div>
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
    rows: Array<any> = [];
    constructor() {
        this.initData();
    }
    async initData() {
        this.cols = [
            { field: 'id', title: 'ID', isUnique: true, filter: false },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'age', title: 'Age', type: 'number' },
            { field: 'dob', title: 'Birthdate', type: 'date' },
            { field: 'isActive', title: 'Active', type: 'bool' },
        ];

        try {
            const url = '../assets/data.json';
            const response = await fetch(url);
            this.rows = await response.json();
        } catch (error) {}
    }
}
