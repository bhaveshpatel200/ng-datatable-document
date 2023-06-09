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
                <input [(ngModel)]="search" type="text" class="form-input max-w-xs" placeholder="Search..." />
            </div>

            <ng-datatable [rows]="rows" [columns]="cols" [loading]="loading" [search]="search"> </ng-datatable>

            <!-- specific column search -->
            <div class="flex items-center justify-between mb-5 border-t border-gray mt-10 pt-10">
                <h2 class="text-3xl">Specific Column Search</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/search.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <div class="mb-5">
                <input [(ngModel)]="search1" type="text" class="form-input max-w-xs" placeholder="Search Firsname and Lastname..." />
            </div>

            <ng-datatable [rows]="rows" [columns]="cols1" [loading]="loading1" [search]="search1"> </ng-datatable>
        </div>
    `,
})
export class SearchComponent {
    cols: Array<colDef> = [];
    cols1: Array<colDef> = [];
    rows: Array<any> = [];
    search = '';
    search1 = '';
    loading = false;
    loading1 = false;
    constructor() {
        this.initData();
    }
    async initData() {
        this.loading = true;
        this.loading1 = true;
        this.cols = [
            { field: 'id', title: 'ID', isUnique: true },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
        ];
        this.cols1 = [
            { field: 'id', title: 'ID', isUnique: true, search: false },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email', search: false },
            { field: 'phone', title: 'Phone', search: false },
        ];
        try {
            const url = '../assets/data.json';
            const response = await fetch(url);
            this.rows = await response.json();
        } catch (error) {}
        this.loading = false;
        this.loading1 = false;
    }
}
