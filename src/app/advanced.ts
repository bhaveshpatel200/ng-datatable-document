import { Component, ViewEncapsulation } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Basic</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/advanced.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <div class="advanced-table whitespace-nowrap">
                <ng-datatable [rows]="rows" [columns]="cols" [sortable]="true" [loading]="loading">
                    <ng-template slot="id" let-value="data">
                        <strong class="text-info">#{{ value.id }}</strong>
                    </ng-template>
                    <ng-template slot="firstName" let-value="data">
                        <div class="flex items-center gap-2">
                            <img
                                *ngIf="value.profileId"
                                [src]="'/assets/images/profile/profile-' + value.profileId + '.jpeg'"
                                class="h-9 w-9 max-w-none rounded-full"
                                alt="user-profile"
                            />
                            <div class="font-medium">{{ value.firstName + ' ' + value.lastName }}</div>
                        </div>
                    </ng-template>
                    <ng-template slot="country" let-value="data">
                        <div class="flex items-center gap-2">
                            <img *ngIf="value.countryCode" width="24" [src]="'/assets/images/flags/' + value.countryCode + '.svg'" class="max-w-none" alt="user profile" />
                            <div>{{ value.country }}</div>
                        </div>
                    </ng-template>
                    <ng-template slot="email" let-value="data">
                        <a [href]="'mailto:' + value.email" class="text-primary hover:underline">{{ value.email }}</a>
                    </ng-template>
                    <ng-template slot="age" let-value="data">
                        <div class="flex h-2.5 w-4/5 min-w-[100px] rounded-full bg-[#ebedf2] dark:bg-dark/40">
                            <div class="h-2.5 rounded-full rounded-bl-full text-center text-xs text-white" [ngStyle]="{ width: value.age + '%', background: value.color }"></div>
                        </div>
                    </ng-template>
                    <ng-template slot="rating" let-value="data">
                        <div class="flex items-center justify-center text-warning">
                            <div *ngFor="let i of getRandomArray(value.rating)">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-warning">
                                    <path
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                    />
                                </svg>
                            </div>
                        </div>
                    </ng-template>
                    <ng-template slot="series" let-value="data">
                        <div style="width: 150px">
                            <apx-chart
                                [series]="chartOptions.series"
                                [chart]="chartOptions.chart"
                                [stroke]="chartOptions.stroke"
                                [markers]="chartOptions.markers"
                                [colors]="chartOptions.colors"
                                [grid]="chartOptions.grid"
                                [tooltip]="chartOptions.tooltip"
                            ></apx-chart>
                        </div>
                    </ng-template>
                    <ng-template slot="status" let-value="data">
                        <span class="badge" [ngClass]="value.statusColor">{{ value.status }}</span>
                    </ng-template>
                </ng-datatable>
            </div>
        </div>
    `,
    styles: [
        `
            .advanced-table .progress-bar {
                width: 80%;
                min-width: 120px;
                height: 8px;
                background-color: #ebedf2;
                border-radius: 9999px;
                display: flex;
            }

            .advanced-table .progress-line {
                height: 8px;
                border-radius: 9999px;
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
})
export class AdvancedComponent {
    cols: Array<colDef> = [];
    rows: Array<any> = [];
    countryList: Array<any> = [];
    loading = false;
    constructor() {
        this.initData();
    }
    async initData() {
        this.loading = true;
        this.cols = [
            { field: 'id', title: 'ID', isUnique: true },
            { field: 'firstName', title: 'User' },
            { field: 'country', title: 'Country', sort: false },
            { field: 'email', title: 'Email' },
            { field: 'age', title: 'Progress', sort: false },
            { field: 'phone', title: 'Phone' },
            { field: 'rating', title: 'Rate', sort: false, minWidth: '120px', headerClass: 'justify-center', cellClass: 'justify-center' },
            { field: 'series', title: 'Progress', sort: false },
            { field: 'status', title: 'Status', sort: false },
        ];

        try {
            const url = '../assets/data.json';
            const response = await fetch(url);
            this.rows = await response.json();
            const data = await fetch('../assets/country.json');
            this.countryList = await data.json();
        } catch (error) {}

        this.rows = this.rows.map((row) => {
            return {
                ...row,
                profileId: this.getRandomNumber(1, 32),
                age: this.getRandomNumber(15, 100),
                status: this.randomStatus(),
                color: this.randomColor(),
                statusColor: this.randomStatusColor(),
                rating: this.getRandomNumber(1, 5),
                country: this.getCountry().name,
                countryCode: this.getCountry().code,
            };
        });

        this.loading = false;
    }

    chartOptions: any;
    async ngOnInit() {
        this.chartOptions = {
            series: [{ data: [21, 9, 36, 12, 44, 25, 59] }],
            chart: { height: 30, type: 'line', sparkline: { enabled: true } },
            stroke: { curve: 'smooth', width: 2 },
            markers: { size: [4, 7], strokeWidth: 0 },
            colors: [this.randomColor()],
            grid: { padding: { top: 5, bottom: 5 } },
            tooltip: {
                x: { show: false },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        };
    }

    randomColor() {
        const color = ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f', '#2196f3'];
        const random = Math.floor(Math.random() * color.length);
        return color[random];
    }

    randomStatusColor() {
        const color = ['primary', 'success', 'danger', 'warning', 'info'];
        const random = Math.floor(Math.random() * color.length);
        return color[random];
    }

    randomStatus() {
        const status = ['PAID', 'APPROVED', 'FAILED', 'CANCEL', 'SUCCESS', 'PENDING', 'COMPLETE'];
        const random = Math.floor(Math.random() * status.length);
        return status[random];
    }

    getRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomArray(len: number) {
        return Array.from({ length: len }, (_, i) => i);
    }

    getCountry() {
        const random = Math.floor(Math.random() * this.countryList.length);
        return this.countryList[random];
    }
}
