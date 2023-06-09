import { Component, ViewEncapsulation } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Custom text for no data and pagination info</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/custom-message.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <div class="mb-5">
                <input
                    [(ngModel)]="search"
                    type="text"
                    class="w-full max-w-sm bh-border bh-border-solid bh-bg-white bh-p-2 bh-outline-0 bh-border-gray focus:bh-border-gray bh-rounded"
                    placeholder="Search..."
                />
            </div>

            <ng-datatable
                [rows]="rows"
                [columns]="cols"
                [search]="search"
                [loading]="loading"
                noDataContent="Записи в базе данных не найдены."
                paginationInfo="Отображение от {0} до {1} записей из {2} записей"
            ></ng-datatable>
        </div>
    `,
})
export class CustomMessageComponent {
    cols: Array<colDef> = [];
    rows: Array<any> = [];
    search = '';
    loading = false;
    constructor() {
        this.initData();
    }
    async initData() {
        this.loading = true;
        this.cols = [
            { field: 'id', title: 'ID', isUnique: true },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
        ];

        try {
            const url = '../assets/data.json';
            const response = await fetch(url);
            this.rows = await response.json();
        } catch (error) {}
        this.loading = false;
    }
}
