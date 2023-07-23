import { Component, ViewEncapsulation } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Skin - Striped</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/skin.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <!-- <ng-datatable [rows]="rows" [columns]="cols" [loading]="loading1" skin="bh-table-striped"> </ng-datatable> -->
            <ng-datatable
                [rows]="rows"
                [columns]="cols"
                [loading]="loading"
                [totalRows]="total_rows"
                [isServerMode]="true"
                skin="bh-table-striped"
                (changeServer)="changeServer($event)"
            >
            </ng-datatable>

            <div class="flex items-center justify-between mb-5 border-t border-gray mt-10 pt-10">
                <h2 class="text-3xl">Skin - Hover</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/skin.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <!-- <ng-datatable [rows]="rows" [columns]="cols" [loading]="loading2" skin="bh-table-hover"> </ng-datatable> -->
            <ng-datatable
                [rows]="rows1"
                [columns]="cols1"
                [loading]="loading1"
                [totalRows]="total_rows1"
                [isServerMode]="true"
                skin="bh-table-hover"
                (changeServer)="changeServer1($event)"
            >
            </ng-datatable>

            <div class="flex items-center justify-between mb-5 border-t border-gray mt-10 pt-10">
                <h2 class="text-3xl">Skin - Bordered</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/skin.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <!-- <ng-datatable [rows]="rows" [columns]="cols" [loading]="loading3" skin="bh-table-bordered"> </ng-datatable> -->
            <ng-datatable
                [rows]="rows2"
                [columns]="cols2"
                [loading]="loading2"
                [totalRows]="total_rows2"
                [isServerMode]="true"
                skin="bh-table-bordered"
                (changeServer)="changeServer2($event)"
            >
            </ng-datatable>

            <div class="flex items-center justify-between mb-5 border-t border-gray mt-10 pt-10">
                <h2 class="text-3xl">Skin - Compact</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/skin.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <!-- <ng-datatable [rows]="rows" [columns]="cols" [loading]="loading4" skin="bh-table-compact"> </ng-datatable> -->
            <ng-datatable
                [rows]="rows3"
                [columns]="cols3"
                [loading]="loading3"
                [totalRows]="total_rows3"
                [isServerMode]="true"
                skin="bh-table-compact"
                (changeServer)="changeServer3($event)"
            >
            </ng-datatable>

            <div class="flex items-center justify-between mb-5 border-t border-gray mt-10 pt-10">
                <h2 class="text-3xl">Skin - All</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/skin.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <!-- <ng-datatable [rows]="rows" [columns]="cols" [loading]="loading5" skin="bh-table-striped bh-table-hover bh-table-bordered bh-table-compact"> </ng-datatable> -->
            <ng-datatable
                [rows]="rows4"
                [columns]="cols4"
                [loading]="loading4"
                [totalRows]="total_rows4"
                [isServerMode]="true"
                skin="bh-table-striped bh-table-hover bh-table-bordered bh-table-compact"
                (changeServer)="changeServer4($event)"
            >
            </ng-datatable>
        </div>
    `,
})
export class SkinComponent {
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
        setTimeout(() => {
            this.getUsers4();
        }, 40);
    }

    // skin - striped
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

    // skin - hover
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

    // skin - bordered
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

    // skin - compact
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

    // skin -  all
    loading4: boolean = true;
    cols4: Array<colDef> = [
        { field: 'id', title: 'ID', isUnique: true },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'age', title: 'Age', type: 'number' },
        { field: 'dob', title: 'Birthdate', type: 'date' },
        { field: 'address.city', title: 'City' },
        { field: 'isActive', title: 'Active', type: 'bool' },
    ];
    rows4: Array<any> = [];
    total_rows4: number = 0;
    params4 = { current_page: 1, pagesize: 10 };

    async getUsers4() {
        try {
            this.loading4 = true;

            const response = await fetch('https://vue3-datatable-document.vercel.app/api/user', {
                method: 'POST',
                body: JSON.stringify(this.params4),
            });

            const data = await response.json();

            this.rows4 = data?.data;
            this.total_rows4 = data?.meta?.total;
        } catch {}

        this.loading4 = false;
    }

    changeServer4(data: any) {
        this.params4.current_page = data.current_page;
        this.params4.pagesize = data.pagesize;

        this.getUsers4();
    }
}
