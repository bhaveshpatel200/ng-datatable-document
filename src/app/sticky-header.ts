import { Component, ViewEncapsulation } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div class="sticky-table">
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Sticky Header</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/sticky-header.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <ng-datatable
                [rows]="rows"
                [columns]="cols"
                [loading]="loading"
                [totalRows]="total_rows"
                [isServerMode]="true"
                [sortable]="true"
                [pageSize]="params.pagesize"
                [hasCheckbox]="true"
                [stickyHeader]="true"
                (changeServer)="changeServer($event)"
            >
                <ng-template slot="id" let-value="data">
                    <strong>#{{ value.id }}</strong>
                </ng-template>
                <ng-template slot="email" let-value="data">
                    <a [href]="'mailto:' + value.email" class="text-primary hover:underline">{{ value.email }}</a>
                </ng-template>
            </ng-datatable>

            <div class="flex items-center justify-between mb-5 border-t border-gray mt-10 pt-10">
                <h2 class="text-3xl">Sticky First Column</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/sticky-header.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <ng-datatable
                [rows]="rows1"
                [columns]="cols1"
                [loading]="loading1"
                [totalRows]="total_rows1"
                [isServerMode]="true"
                [sortable]="true"
                [pageSize]="params1.pagesize"
                [hasCheckbox]="true"
                [stickyFirstColumn]="true"
                (changeServer)="changeServer1($event)"
            >
                <ng-template slot="id" let-value="data">
                    <strong>#{{ value.id }}</strong>
                </ng-template>
                <ng-template slot="email" let-value="data">
                    <a [href]="'mailto:' + value.email" class="text-primary hover:underline">{{ value.email }}</a>
                </ng-template>
            </ng-datatable>

            <div class="flex items-center justify-between mb-5 border-t border-gray mt-10 pt-10">
                <h2 class="text-3xl">Sticky Header & First Column</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/sticky-header.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <ng-datatable
                [rows]="rows2"
                [columns]="cols2"
                [loading]="loading2"
                [totalRows]="total_rows2"
                [isServerMode]="true"
                [sortable]="true"
                [pageSize]="params2.pagesize"
                [hasCheckbox]="true"
                [stickyHeader]="true"
                [stickyFirstColumn]="true"
                (changeServer)="changeServer2($event)"
            >
                <ng-template slot="id" let-value="data">
                    <strong>#{{ value.id }}</strong>
                </ng-template>
                <ng-template slot="email" let-value="data">
                    <a [href]="'mailto:' + value.email" class="text-primary hover:underline">{{ value.email }}</a>
                </ng-template>
            </ng-datatable>
        </div>
    `,
    styles: [
        `
            .sticky-table .bh-table-responsive table thead tr th {
                @apply whitespace-nowrap;
            }
            .sticky-table .bh-table-responsive table tbody tr td {
                @apply lg:whitespace-nowrap;
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
})
export class StickyHeaderComponent {
    constructor() {
        this.getUsers();
        setTimeout(() => {
            this.getUsers1();
        }, 10);
        setTimeout(() => {
            this.getUsers2();
        }, 20);
    }

    // sticky header
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
    total_rows: number = 0;
    params = { current_page: 1, pagesize: 20, sort_column: 'id', sort_direction: 'asc' };

    async getUsers() {
        try {
            this.loading = true;

            const response = await fetch('https://vue3-datatable-document.vercel.app/api/user', {
                method: 'POST',
                body: JSON.stringify(this.params),
            });

            const data = await response.json();

            this.rows = data?.data;
            this.total_rows = data?.meta?.total;
        } catch {}

        this.loading = false;
    }

    changeServer(data: any) {
        this.params.current_page = data.current_page;
        this.params.pagesize = data.pagesize;
        this.params.sort_column = data.sort_column;
        this.params.sort_direction = data.sort_direction;

        this.getUsers();
    }

    // sticky first column
    loading1: boolean = true;
    cols1: Array<colDef> = [
        { field: 'id', title: 'ID', isUnique: true },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'phone', title: 'Phone' },
        { field: 'company', title: 'Company' },
        { field: 'address.street', title: 'Address' },
        { field: 'address.city', title: 'City' },
        { field: 'age', title: 'Age', type: 'number' },
        { field: 'dob', title: 'Birthdate', type: 'date' },
        { field: 'isActive', title: 'Active', type: 'bool' },
    ];
    rows1: Array<any> = [];
    total_rows1: number = 0;
    params1 = { current_page: 1, pagesize: 20, sort_column: 'id', sort_direction: 'asc' };

    async getUsers1() {
        try {
            this.loading1 = true;

            const response = await fetch('https://vue3-datatable-document.vercel.app/api/user', {
                method: 'POST',
                body: JSON.stringify(this.params1),
            });

            const data = await response.json();

            this.rows1 = data?.data;
            this.total_rows1 = data?.meta?.total;
        } catch {}

        this.loading1 = false;
    }

    changeServer1(data: any) {
        this.params1.current_page = data.current_page;
        this.params1.pagesize = data.pagesize;
        this.params1.sort_column = data.sort_column;
        this.params1.sort_direction = data.sort_direction;

        this.getUsers1();
    }

    // sticky header & first column
    loading2: boolean = true;
    cols2: Array<colDef> = [
        { field: 'id', title: 'ID', isUnique: true },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'phone', title: 'Phone' },
        { field: 'company', title: 'Company' },
        { field: 'address.street', title: 'Address' },
        { field: 'address.city', title: 'City' },
        { field: 'age', title: 'Age', type: 'number' },
        { field: 'dob', title: 'Birthdate', type: 'date' },
        { field: 'isActive', title: 'Active', type: 'bool' },
    ];
    rows2: Array<any> = [];
    total_rows2: number = 0;
    params2 = { current_page: 1, pagesize: 20, sort_column: 'id', sort_direction: 'asc' };

    async getUsers2() {
        try {
            this.loading2 = true;

            const response = await fetch('https://vue3-datatable-document.vercel.app/api/user', {
                method: 'POST',
                body: JSON.stringify(this.params2),
            });

            const data = await response.json();

            this.rows2 = data?.data;
            this.total_rows2 = data?.meta?.total;
        } catch {}

        this.loading2 = false;
    }

    changeServer2(data: any) {
        this.params2.current_page = data.current_page;
        this.params2.pagesize = data.pagesize;
        this.params2.sort_column = data.sort_column;
        this.params2.sort_direction = data.sort_direction;

        this.getUsers2();
    }
}
