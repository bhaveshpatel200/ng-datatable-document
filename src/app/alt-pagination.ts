import { Component, ViewEncapsulation } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Alt Pagination</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/alt-pagination.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <div class="alt-pagination">
                <ng-datatable [rows]="rows" [columns]="cols1" firstArrow="First" lastArrow="Last" previousArrow="Prev" nextArrow="Next" [showNumbersCount]="3"> </ng-datatable>
            </div>

            <div class="flex items-center justify-between mb-5 border-t border-gray mt-10 pt-10">
                <h2 class="text-3xl">Disable First Last Pagination</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/alt-pagination.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <div>
                <ng-datatable [rows]="rows" [columns]="cols2" [showFirstPage]="false" [showLastPage]="false"> </ng-datatable>
            </div>

            <div class="flex items-center justify-between mb-5 border-t border-gray mt-10 pt-10">
                <h2 class="text-3xl">Pagination Without number</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/alt-pagination.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <div>
                <ng-datatable [rows]="rows" [columns]="cols3" [showNumbers]="false"> </ng-datatable>
            </div>

            <div class="flex items-center justify-between mb-5 border-t border-gray mt-10 pt-10">
                <h2 class="text-3xl">Next Previous</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/alt-pagination.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <div class="next-prev-pagination">
                <ng-datatable
                    [rows]="rows"
                    [columns]="cols4"
                    [showNumbers]="false"
                    [showFirstPage]="false"
                    [showLastPage]="false"
                    previousArrow="Previous"
                    nextArrow="Next"
                    paginationInfo="{0} to {1} of {2}"
                    [showPageSize]="false"
                >
                </ng-datatable>
            </div>
        </div>
    `,
    styles: [
        `
            /* alt-pagination */
            .alt-pagination .bh-pagination .bh-page-item {
                @apply !w-max min-w-[32px] !rounded;
            }

            /* next-prev-pagination */
            .next-prev-pagination .bh-pagination .bh-page-item {
                @apply !w-max min-w-[100px] !rounded;
            }
            .next-prev-pagination .bh-pagination > div:first-child {
                @apply flex-col font-semibold;
            }
            .next-prev-pagination .bh-pagination .bh-pagination-number {
                @apply mx-auto gap-3;
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
})
export class AltPaginationComponent {
    cols1: Array<colDef> = [];
    rows: Array<any> = [];
    cols2: Array<colDef> = [];
    cols3: Array<colDef> = [];
    cols4: Array<colDef> = [];
    constructor() {
        this.initData();
    }
    async initData() {
        this.cols1 = [
            { field: 'id', title: 'ID' },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
        ];
        this.cols2 = [
            { field: 'id', title: 'ID' },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
        ];
        this.cols3 = [
            { field: 'id', title: 'ID' },
            { field: 'firstName', title: 'First Name' },
            { field: 'lastName', title: 'Last Name' },
            { field: 'email', title: 'Email' },
            { field: 'phone', title: 'Phone' },
        ];
        this.cols4 = [
            { field: 'id', title: 'ID' },
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
    }
}
