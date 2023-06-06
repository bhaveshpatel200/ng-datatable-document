import { Component, ViewEncapsulation } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Column Chooser</h2>
            </div>

            <div class="mb-5 relative">
                <button
                    type="button"
                    class="inline-flex items-center border bg-blue-500 border-blue-500 rounded px-4 py-1 text-white hover:bg-white hover:text-blue-500 transition duration-300 gap-2"
                    (click)="isOpen = !isOpen"
                >
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

            <ng-datatable [rows]="rows" [columns]="cols" [sortable]="true"> </ng-datatable>
        </div>
    `,
})
export class ColumnChooserComponent {
    cols: Array<colDef> = [];
    rows: Array<any> = [];
    isOpen = false;
    constructor() {
        this.initData();
    }
    initData() {
        this.cols = [
            { field: 'id', title: 'ID', isUnique: true },
            { field: 'name', title: 'Name' },
            { field: 'username', title: 'Username' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
            { field: 'date', title: 'Date', type: 'date' },
            { field: 'active', title: 'Active', type: 'bool' },
            { field: 'age', title: 'Age', type: 'number' },
            { field: 'company.name', title: 'Company' },
        ];

        const arr = [];
        for (let i = 0; i < 50; i++) {
            const obj = {
                id: i + 1,
                name: 'Leanne Graham - ' + i,
                username: 'Bret - ' + i,
                email: 'Sincere@april.biz' + i,
                address: {
                    street: 'Kulas Light - ' + i,
                    suite: 'Apt. 556 - ' + i,
                    city: 'Gwenborough - ' + i,
                    zipcode: '92998-3874 - ' + i,
                    geo: {
                        lat: '-37.3159 - ' + i,
                        lng: '81.1496 - ' + i,
                    },
                },
                phone: '1-770-736-8031 x56442 - ' + i,
                website: 'hildegard.org - ' + i,
                company: {
                    name: 'Romaguera-Crona - ' + i,
                    catchPhrase: 'Multi-layered client-server neural-net - ' + i,
                    bs: 'harness real-time e-markets - ' + i,
                },
                date: 'Tue Sep 27 2022 22:19:57',
                active: i % 2 === 0 ? true : false,
                age: i % 2 === 0 ? i + 2 : i + 1,
            };
            arr.push(obj);
        }
        this.rows = arr;
    }

    updateColumn(col: colDef) {
        col.hide = !col.hide;
        this.cols = [...this.cols]; // Create a new reference of the array
    }
}
