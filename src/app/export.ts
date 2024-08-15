import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    template: `
        <div>
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-3xl">Export</h2>
                <a target="_blank" href="https://github.com/bhaveshpatel200/ng-datatable-document/blob/main/src/app/export.ts" class="btn">
                    <icon-github class="w-5 h-5 mr-2" />
                    View Source
                </a>
            </div>

            <div class="mb-5 flex items-center gap-2">
                <button type="button" class="btn btn-small" (click)="exportTable('csv')">
                    <icon-file />
                    CSV
                </button>
                <button type="button" class="btn btn-small" (click)="exportTable('txt')">
                    <icon-file-text />
                    TXT
                </button>
                <button type="button" class="btn btn-small" (click)="exportTable('print')">
                    <icon-printer />
                    PRINT
                </button>
            </div>

            <ng-datatable #datatable [rows]="rows" [columns]="cols" [loading]="loading" [hasCheckbox]="true" [selectRowOnClick]="true" [sortable]="true" [columnFilter]="true">
            </ng-datatable>
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
export class ExportComponent {
    @ViewChild('datatable') datatable: any;
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

    exportTable(type: string) {
        let records = this.datatable.getSelectedRows();
        if (!records?.length) {
            records = this.rows;
        }
        const filename = 'table';

        if (type === 'csv' || type === 'txt') {
            // CSV or TXT
            const coldelimiter = ',';
            const linedelimiter = '\n';
            let result = this.cols
                .filter((d: any) => !d.hide)
                .map((d: any) => {
                    return d.title;
                })
                .join(coldelimiter);
            result += linedelimiter;
            records.map((item: any) => {
                this.cols
                    .filter((d: any) => !d.hide)
                    .map((d: any, index: number) => {
                        if (index > 0) {
                            result += coldelimiter;
                        }
                        const val = d.field.split('.').reduce((acc: any, part: any) => acc && acc[part], item);
                        result += val;
                    });
                result += linedelimiter;
            });

            if (result === null) return;

            if (type === 'csv') {
                var data = 'data:application/csv;charset=utf-8,' + encodeURIComponent(result);
                var link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename + '.csv');
                link.click();
            }

            if (type === 'txt') {
                var data = 'data:application/txt;charset=utf-8,' + encodeURIComponent(result);
                var link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename + '.txt');
                link.click();
            }
        } else if (type === 'print') {
            // PRINT
            let rowhtml = '<p>' + filename + '</p>';
            rowhtml +=
                '<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ';
            this.cols
                .filter((d: any) => !d.hide)
                .map((d: any) => {
                    rowhtml += '<th>' + d.title + '</th>';
                });
            rowhtml += '</tr></thead>';
            rowhtml += '<tbody>';

            records.map((item: any) => {
                rowhtml += '<tr>';
                this.cols
                    .filter((d: any) => !d.hide)
                    .map((d: any) => {
                        const val = d.field.split('.').reduce((acc: any, part: any) => acc && acc[part], item);
                        rowhtml += '<td>' + val + '</td>';
                    });
                rowhtml += '</tr>';
            });
            rowhtml +=
                '<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>';
            rowhtml += '</tbody></table>';
            const winPrint: any = window.open('', '', 'left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0');
            winPrint.document.write('<title>' + filename + '</title>' + rowhtml);
            winPrint.document.close();
            winPrint.focus();
            winPrint.onafterprint = () => {
                winPrint.close();
            };
            winPrint.print();
        }
    }
}
