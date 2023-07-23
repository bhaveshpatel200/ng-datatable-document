import { Component, ViewEncapsulation } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Alt Pagination</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/alt-pagination.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <div class="alt-pagination">
                <ng-datatable
                    [rows]="rows"
                    [columns]="cols"
                    [loading]="loading"
                    [totalRows]="total_rows"
                    [isServerMode]="true"
                    [pageSize]="params.pagesize"
                    firstArrow="First"
                    lastArrow="Last"
                    previousArrow="Prev"
                    nextArrow="Next"
                    [showNumbersCount]="3"
                    (changeServer)="changeServer($event)"
                >
                </ng-datatable>
            </div>

            <div class="flex items-center justify-between mb-5 border-t border-gray mt-10 pt-10">
                <h2 class="text-3xl">Disable First Last Pagination</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/alt-pagination.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <div>
                <ng-datatable
                    [rows]="rows1"
                    [columns]="cols1"
                    [loading]="loading1"
                    [totalRows]="total_rows1"
                    [isServerMode]="true"
                    [pageSize]="params1.pagesize"
                    [showFirstPage]="false"
                    [showLastPage]="false"
                    (changeServer)="changeServer1($event)"
                >
                </ng-datatable>
            </div>

            <div class="flex items-center justify-between mb-5 border-t border-gray mt-10 pt-10">
                <h2 class="text-3xl">Pagination Without number</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/alt-pagination.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <div>
                <ng-datatable
                    [rows]="rows2"
                    [columns]="cols2"
                    [loading]="loading2"
                    [totalRows]="total_rows2"
                    [isServerMode]="true"
                    [pageSize]="params2.pagesize"
                    [showNumbers]="false"
                    (changeServer)="changeServer2($event)"
                >
                </ng-datatable>
            </div>

            <div class="flex items-center justify-between mb-5 border-t border-gray mt-10 pt-10">
                <h2 class="text-3xl">Next Previous</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/alt-pagination.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <div class="next-prev-pagination">
                <ng-datatable
                    [rows]="rows3"
                    [columns]="cols3"
                    [loading]="loading3"
                    [totalRows]="total_rows3"
                    [isServerMode]="true"
                    [pageSize]="params3.pagesize"
                    [showNumbers]="false"
                    [showFirstPage]="false"
                    [showLastPage]="false"
                    previousArrow="Previous"
                    nextArrow="Next"
                    paginationInfo="{0} to {1} of {2}"
                    [showPageSize]="false"
                    (changeServer)="changeServer3($event)"
                >
                </ng-datatable>
            </div>
        </div>
    `,
    styles: [
        `
            /* alt-pagination */
            .alt-pagination .bh-pagination .bh-page-item {
                @apply !w-max min-w-[32px] !rounded;
            }

            /* next-prev-pagination */
            .next-prev-pagination .bh-pagination .bh-page-item {
                @apply !w-max min-w-[100px] !rounded;
            }
            .next-prev-pagination .bh-pagination > div:first-child {
                @apply flex-col font-semibold;
            }
            .next-prev-pagination .bh-pagination .bh-pagination-number {
                @apply mx-auto gap-3;
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
})
export class AltPaginationComponent {
    // alt pagination
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
    params = { current_page: 1, pagesize: 10 };

    constructor() {
        this.getUsers();
        setTimeout(() => {
            this.getUsers1();
        }, 10);
        setTimeout(() => {
            this.getUsers2();
        }, 20);
        setTimeout(() => {
            this.getUsers3();
        }, 30);
    }

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

        this.getUsers();
    }

    // disable first last pagination
    loading1: boolean = true;
    cols1: Array<colDef> = [
        { field: 'id', title: 'ID', isUnique: true },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'age', title: 'Age', type: 'number' },
        { field: 'dob', title: 'Birthdate', type: 'date' },
        { field: 'address.city', title: 'City' },
        { field: 'isActive', title: 'Active', type: 'bool' },
    ];
    rows1: Array<any> = [];
    total_rows1: number = 0;
    params1 = { current_page: 1, pagesize: 10 };

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

        this.getUsers1();
    }

    // pagination without number
    loading2: boolean = true;
    cols2: Array<colDef> = [
        { field: 'id', title: 'ID', isUnique: true },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'age', title: 'Age', type: 'number' },
        { field: 'dob', title: 'Birthdate', type: 'date' },
        { field: 'address.city', title: 'City' },
        { field: 'isActive', title: 'Active', type: 'bool' },
    ];
    rows2: Array<any> = [];
    total_rows2: number = 0;
    params2 = { current_page: 1, pagesize: 10 };
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

        this.getUsers2();
    }

    // next previous
    loading3: boolean = true;
    cols3: Array<colDef> = [
        { field: 'id', title: 'ID', isUnique: true },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'age', title: 'Age', type: 'number' },
        { field: 'dob', title: 'Birthdate', type: 'date' },
        { field: 'address.city', title: 'City' },
        { field: 'isActive', title: 'Active', type: 'bool' },
    ];
    rows3: Array<any> = [];
    total_rows3: number = 0;
    params3 = { current_page: 1, pagesize: 10 };
    async getUsers3() {
        try {
            this.loading3 = true;

            const response = await fetch('https://vue3-datatable-document.vercel.app/api/user', {
                method: 'POST',
                body: JSON.stringify(this.params3),
            });

            const data = await response.json();

            this.rows3 = data?.data;
            this.total_rows3 = data?.meta?.total;
        } catch {}

        this.loading3 = false;
    }

    changeServer3(data: any) {
        this.params3.current_page = data.current_page;
        this.params3.pagesize = data.pagesize;

        this.getUsers3();
    }
}
