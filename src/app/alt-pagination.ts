import { Component, ViewEncapsulation } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Alt Pagination</h2>
            </div>

            <ng-datatable [rows]="rows" [columns]="cols" firstArrow="First" lastArrow="Last" previousArrow="Prev" nextArrow="Next" [showNumbersCount]="3" class="alt-pagination"> </ng-datatable>

            <!-- disable first last pagination -->
            <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
                <h2 class="text-3xl">Disable First Last Pagination</h2>
            </div>

            <ng-datatable [rows]="rows" [columns]="cols" [showFirstPage]="false" [showLastPage]="false"> </ng-datatable>

            <!-- pagination without number -->
            <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
                <h2 class="text-3xl">Pagination Without number</h2>
            </div>

            <ng-datatable [rows]="rows" [columns]="cols" [showNumbers]="false"> </ng-datatable>

            <!-- next previous -->
            <div class="flex items-center justify-between mb-5 border-t border-gray-200 mt-10 pt-10">
                <h2 class="text-3xl">Next Previous</h2>
            </div>

            <ng-datatable
                [rows]="rows"
                [columns]="cols"
                [showNumbers]="false"
                [showFirstPage]="false"
                [showLastPage]="false"
                previousArrow="Previous"
                nextArrow="Next"
                class="next-prev-pagination"
                paginationInfo="{0} to {1} of {2}"
                [showPageSize]="false"
            >
            </ng-datatable>
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
    cols: Array<colDef> = [];
    rows: Array<any> = [];
    constructor() {
        this.initData();
    }
    initData() {
        this.cols = [
            {
                field: 'id',
                title: 'ID',
                isUnique: true,
                cellRenderer: (params: any) => {
                    return '<strong>#' + params.id + '</strong>';
                },
            },
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
}
