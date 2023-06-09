import { Component, ViewEncapsulation } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Sticky Header</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/sticky-header.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <ng-datatable [rows]="rows" [columns]="cols" [sortable]="true" [pageSize]="20" [hasCheckbox]="true" [stickyHeader]="true">
                <ng-template slot="id" let-value="data">
                    <strong>#{{ value.id }}</strong>
                </ng-template>
            </ng-datatable>

            <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
                <h2 class="text-3xl">Sticky First Column</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/sticky-header.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <ng-datatable [rows]="rows" [columns]="cols1" [sortable]="true" [hasCheckbox]="true" [stickyFirstColumn]="true">
                <ng-template slot="id" let-value="data">
                    <strong>#{{ value.id }}</strong>
                </ng-template>
                <ng-template slot="email" let-value="data">
                    <a [href]="'mailto:' + value.email" class="text-primary hover:underline">{{ value.email }}</a>
                </ng-template>
            </ng-datatable>

            <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
                <h2 class="text-3xl">Sticky Header & First Column</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/sticky-header.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <ng-datatable [rows]="rows" [columns]="cols2" [sortable]="true" [pageSize]="20" [hasCheckbox]="true" [stickyHeader]="true" [stickyFirstColumn]="true"> </ng-datatable>
        </div>
    `,
})
export class StickyHeaderComponent {
    cols: Array<colDef> = [];
    cols1: Array<colDef> = [];
    cols2: Array<colDef> = [];
    rows: Array<any> = [];
    constructor() {
        this.initData();
    }
    async initData() {
        this.cols = [
            { field: 'id', title: 'ID', isUnique: true },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
        ];
        this.cols1 = [
            { field: 'id', title: 'ID', isUnique: true, filter: false },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
            { field: 'company', title: 'Company' },
            { field: 'address.street', title: 'Address' },
            { field: 'age', title: 'Age', type: 'number' },
            { field: 'dob', title: 'Birthdate', type: 'date' },
            { field: 'isActive', title: 'Active', type: 'bool' },
        ];
        this.cols2 = [
            { field: 'id', title: 'ID', isUnique: true, filter: false },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
            { field: 'company', title: 'Company' },
            { field: 'address.street', title: 'Address' },
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
