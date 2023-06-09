import { Component } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Skeleton Loader</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/skeleton-loader.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <ng-datatable [rows]="rows" [columns]="cols" [loading]="loading"> </ng-datatable>
        </div>
    `,
})
export class SkeletonLoaderComponent {
    cols: Array<colDef> = [];
    rows: Array<any> = [];
    loading = false;
    constructor() {
        this.initData();
    }
    initData() {
        this.loading = true;
        this.cols = [
            { field: 'id', title: 'ID', isUnique: true },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
        ];

        setTimeout(async () => {
            try {
                const url = '../assets/data.json';
                const response = await fetch(url);
                this.rows = await response.json();
            } catch {}
            this.loading = false;
        }, 3000);
    }
}