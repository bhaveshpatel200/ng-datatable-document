import { Component, ViewEncapsulation } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Static Mode</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/static-mode.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <ng-datatable [rows]="rows" [columns]="cols" [loading]="loading" [sortable]="true" [columnFilter]="true"> </ng-datatable>
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
export class StaticModeComponent {
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
}
