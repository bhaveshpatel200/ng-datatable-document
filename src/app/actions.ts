import { Component } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Actions</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/actions.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <ng-datatable [rows]="rows" [columns]="cols">
                <ng-template slot="id" let-value="data">
                    <strong>#{{ value.id }}</strong>
                </ng-template>
                <ng-template slot="actions" let-value="data">
                    <div class="flex gap-4">
                        <button type="button" class="btn btn-success" (click)="viewUser(value)">View</button>
                        <button type="button" class="btn btn-danger" (click)="deleteUser(value)">Delete</button>
                    </div>
                </ng-template>
            </ng-datatable>
        </div>
    `,
})
export class ActionsComponent {
    cols: Array<colDef> = [];
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
            { field: 'actions', title: 'Actions' },
        ];

        try {
            const url = '../assets/data.json';
            const response = await fetch(url);
            this.rows = await response.json();
        } catch (error) {}
    }

    viewUser(user: any) {
        alert('View User \n' + user.id + ', ' + user.firstName + ', ' + user.lastName + ', ' + user.email);
    }
    deleteUser(user: any) {
        alert('Delete User \n' + user.id + ', ' + user.firstName + ', ' + user.lastName + ', ' + user.email);
    }
}
