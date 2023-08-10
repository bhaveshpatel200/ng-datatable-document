import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Methods</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/methods.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <div class="my-6 flex items-center flex-wrap gap-4 font-semibold">
                <button type="button" class="btn btn-outline" (click)="getSelectedRows()">Get Selected Rows</button>
                <button type="button" class="btn btn-outline" (click)="clearSelectedRows()">Clear Selected Rows</button>
                <button type="button" class="btn btn-outline" (click)="selectRow(1)">Select 2<sup class="mr-1">nd</sup> Rows</button>
                <button type="button" class="btn btn-outline" (click)="unselectRow(1)">Unselect 2<sup class="mr-1">nd</sup> Row</button>
                <button type="button" class="btn btn-outline" (click)="isRowSelected(1)">Check 2<sup class="mr-1">nd</sup> Row Selected</button>
                <button type="button" class="btn btn-outline" (click)="getColumnFilters()">Get Column Filters</button>
                <button type="button" class="btn btn-outline" (click)="reset()">Reset</button>
            </div>

            <ng-datatable #datatable [rows]="rows" [columns]="cols" [loading]="loading" [hasCheckbox]="true" [sortable]="true" [columnFilter]="true" class="column-filter">
            </ng-datatable>
        </div>
    `,
    styles: [
        `
            .bh-datatable .bh-table-responsive {
                @apply min-h-[300px];
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
})
export class MethodsComponent {
    @ViewChild('datatable') datatable: any;
    loading: boolean = true;
    cols: Array<colDef> = [
        { field: 'id', title: 'ID', isUnique: true },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'age', title: 'Age', type: 'number' },
        { field: 'dob', title: 'Birthdate', type: 'date' },
        { field: 'address.city', title: 'City' },
        { field: 'isActive', title: 'Active', type: 'bool' },
    ];
    rows: Array<any> = [];

    constructor() {
        this.getUsers();
    }

    async getUsers() {
        try {
            this.loading = true;

            const response = await fetch('https://vue3-datatable-document.vercel.app/api/user', {
                method: 'POST',
                body: JSON.stringify({ pagesize: 500 }),
            });

            const data = await response.json();

            this.rows = data?.data;
        } catch {}

        this.loading = false;
    }

    // methods
    getSelectedRows() {
        const selected = this.datatable.getSelectedRows();
        console.log(selected);
        alert('Rows selected: ' + selected?.length || 0);
    }
    clearSelectedRows() {
        const selected = this.datatable.getSelectedRows();
        this.datatable.clearSelectedRows();
        alert('Rows unselected: ' + selected?.length || 0);
    }
    selectRow(index: number) {
        this.datatable.selectRow(index);
        alert('Rows selected with position: ' + (index + 1));
    }
    unselectRow(index: number) {
        this.datatable.unselectRow(index);
        alert('Rows unselected with position: ' + (index + 1));
    }
    isRowSelected(index: number) {
        const selected = this.datatable.isRowSelected(index);
        alert('Rows with position ' + (index + 1) + ' selected: ' + selected);
    }
    getColumnFilters() {
        console.log(this.datatable.getColumnFilters());
        alert('Check console log to see the column filters');
    }
    reset() {
        this.datatable.reset();
        alert('All options like selected rows, filter, search, currennt page, pagesize etc successfully resets');
    }
}
