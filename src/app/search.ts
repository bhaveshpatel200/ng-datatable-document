import { Component } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Global Serach</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/search.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <div class="mb-5">
                <input [(ngModel)]="params.search" type="text" class="form-input max-w-xs" placeholder="Search..." />
            </div>

            <ng-datatable
                [rows]="rows"
                [columns]="cols"
                [loading]="loading"
                [totalRows]="total_rows"
                [isServerMode]="true"
                [pageSize]="params.pagesize"
                [search]="params.search"
                (changeServer)="changeServer($event)"
            >
            </ng-datatable>

            <!-- specific column search -->
            <div class="flex items-center justify-between mb-5 border-t border-gray mt-10 pt-10">
                <h2 class="text-3xl">Specific Column Search</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/search.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <div class="mb-5">
                <input [(ngModel)]="params1.search" type="text" class="form-input max-w-xs" placeholder="Search Firsname and Lastname..." />
            </div>

            <ng-datatable
                [rows]="rows1"
                [columns]="cols1"
                [loading]="loading1"
                [totalRows]="total_rows1"
                [isServerMode]="true"
                [pageSize]="params1.pagesize"
                [search]="params1.search"
                (changeServer)="changeServer1($event)"
            >
            </ng-datatable>
        </div>
    `,
})
export class SearchComponent {
    constructor() {
        this.getUsers();
        this.getUsers1();
    }

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
    params = {
        current_page: 1,
        pagesize: 10,
        search: '',
        column_filters: [],
    };
    controller: any;
    timer: any;

    filterUsers() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.getUsers();
        }, 300);
    }
    async getUsers() {
        // cancel request if previous request still pending before next request fire
        if (this.controller) {
            this.controller.abort();
        }
        this.controller = new AbortController();
        const signal = this.controller.signal;

        try {
            this.loading = true;

            const response = await fetch('https://vue3-datatable-document.vercel.app/api/user', {
                method: 'POST',
                body: JSON.stringify(this.params),
                signal: signal, // Assign the signal to the fetch request
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
        this.params.search = data.search;
        this.params.column_filters = data.column_filters;

        if (data.change_type === 'search') {
            this.filterUsers();
        } else {
            this.getUsers();
        }
    }

    // specific column search
    loading1: boolean = true;
    cols1: Array<colDef> = [
        { field: 'id', title: 'ID', isUnique: true, search: false },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email', search: false },
        { field: 'age', title: 'Age', type: 'number', search: false },
        { field: 'dob', title: 'Birthdate', type: 'date', search: false },
        { field: 'address.city', title: 'City', search: false },
        { field: 'isActive', title: 'Active', type: 'bool', search: false },
    ];
    rows1: Array<any> = [];
    total_rows1: number = 0;
    params1 = {
        current_page: 1,
        pagesize: 10,
        search: '',
        column_filters: [],
    };
    controller1: any;
    timer1: any;

    filterUsers1() {
        clearTimeout(this.timer1);
        this.timer = setTimeout(() => {
            this.getUsers1();
        }, 300);
    }
    async getUsers1() {
        // cancel request if previous request still pending before next request fire
        if (this.controller1) {
            this.controller1.abort();
        }
        this.controller1 = new AbortController();
        const signal = this.controller1.signal;

        try {
            this.loading1 = true;

            const response = await fetch('https://vue3-datatable-document.vercel.app/api/user', {
                method: 'POST',
                body: JSON.stringify(this.params1),
                signal: signal, // Assign the signal to the fetch request
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
        this.params1.search = data.search;
        this.params1.column_filters = data.column_filters;

        if (data.change_type === 'search') {
            this.filterUsers1();
        } else {
            this.getUsers1();
        }
    }
}
