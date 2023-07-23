import { Component, ViewEncapsulation } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Column Chooser</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/columnchooser.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <div class="mb-5 relative">
                <button type="button" class="btn gap-2" (click)="isOpen = !isOpen">
                    Column Chooser
                    <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="transition"
                        [ngClass]="{ 'rotate-180': isOpen }"
                    >
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <ul *ngIf="isOpen" class="absolute left-0 mt-0.5 p-2.5 min-w-[150px] bg-white rounded shadow-md space-y-1 z-10">
                    <li *ngFor="let col of cols">
                        <label class="flex items-center gap-2 w-full cursor-pointer text-gray-600 hover:text-black">
                            <input #chk type="checkbox" class="form-checkbox" [(ngModel)]="!col.hide" (change)="updateColumn(col)" />
                            <span>{{ col.title }}</span>
                        </label>
                    </li>
                </ul>
            </div>

            <ng-datatable [rows]="rows" [columns]="cols" [loading]="loading" [totalRows]="total_rows" [isServerMode]="true" [sortable]="true" (changeServer)="changeServer($event)">
            </ng-datatable>
        </div>
    `,
})
export class ColumnChooserComponent {
    isOpen: boolean = false;
    loading: boolean = true;
    cols: Array<colDef> = [
        { field: 'id', title: 'ID', isUnique: true, hide: false },
        { field: 'firstName', title: 'First Name', hide: false },
        { field: 'lastName', title: 'Last Name', hide: false },
        { field: 'email', title: 'Email', hide: false },
        { field: 'phone', title: 'Phone', hide: false },
        { field: 'company', title: 'Company', hide: false },
        { field: 'address.city', title: 'City', hide: false },
        { field: 'age', title: 'Age', type: 'number', hide: true },
        { field: 'dob', title: 'Birthdate', type: 'date', hide: true },
        { field: 'isActive', title: 'Active', type: 'bool', hide: true },
    ];
    rows: Array<any> = [];
    total_rows: number = 0;
    params = {
        current_page: 1,
        pagesize: 10,
        sort_column: 'id',
        sort_direction: 'asc',
        column_filters: [],
    };
    constructor() {
        this.getUsers();
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
        this.params.sort_column = data.sort_column;
        this.params.sort_direction = data.sort_direction;
        this.params.column_filters = data.column_filters;

        this.getUsers();
    }

    updateColumn(col: colDef) {
        col.hide = !col.hide;
        this.cols = [...this.cols]; // Create a new reference of the array
    }
}
