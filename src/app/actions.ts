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

            <ng-datatable [rows]="rows" [columns]="cols" [loading]="loading" [totalRows]="total_rows" [isServerMode]="true" (changeServer)="changeServer($event)">
                <ng-template slot="id" let-value="data">
                    <strong>#{{ value.id }}</strong>
                </ng-template>
                <ng-template slot="actions" let-value="data">
                    <div class="flex gap-4">
                        <button type="button" class="btn btn-success py-1" (click)="viewUser(value)">View</button>
                        <button type="button" class="btn btn-danger py-1" (click)="deleteUser(value)">Delete</button>
                    </div>
                </ng-template>
            </ng-datatable>
        </div>
    `,
})
export class ActionsComponent {
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
        { field: 'actions', title: 'Actions' },
    ];
    rows: Array<any> = [];
    total_rows: number = 0;
    params = {
        current_page: 1,
        pagesize: 10,
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

        this.getUsers();
    }

    viewUser(user: any) {
        alert('View User \n' + user.id + ', ' + user.firstName + ', ' + user.lastName + ', ' + user.email);
    }
    deleteUser(user: any) {
        alert('Delete User \n' + user.id + ', ' + user.firstName + ', ' + user.lastName + ', ' + user.email);
    }
}
