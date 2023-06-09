import { Component } from '@angular/core';

@Component({
    template: `
        <div class="space-y-8">
            <div id="install">
                <div>
                    <h2 class="text-3xl py-3 border-b border-black/10 mb-4">Installation</h2>
                    <div class="px-2 space-y-3">
                        <div>
                            <h3 class="text-lg py-2">NPM</h3>
                            <div class="p-3 bg-gray rounded-lg font-medium">npm install @bhplugin/ng-datatable --save</div>
                        </div>
                        <div>
                            <h3 class="text-lg py-2">Yarn</h3>
                            <div class="p-3 bg-gray rounded-lg font-medium">yarn add @bhplugin/ng-datatable</div>
                        </div>
                        <div>
                            <h3 class="text-lg py-2">Bower</h3>
                            <div class="p-3 bg-gray rounded-lg font-medium">bower install @bhplugin/ng-datatable --save</div>
                        </div>
                    </div>
                </div>

                <div class="mt-4">
                    <h2 class="text-3xl py-3 border-b border-black/10 mb-4">Include</h2>
                    <div class="px-2 space-y-3">
                        <div>
                            <h3 class="text-lg py-2">Component</h3>
                            <div class="p-3 bg-gray rounded-lg font-medium">import Vue3Datatable from '@bhplugin/ng-datatable'</div>
                        </div>
                        <div>
                            <h3 class="text-lg py-2">CSS</h3>
                            <div class="p-3 bg-gray rounded-lg font-medium">import '@bhplugin/ng-datatable/dist/style.css'</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="props">
                <div>
                    <h2 class="text-3xl py-3 border-b border-black/10 mb-4">Props</h2>
                    <div class="props-table table-responsive">
                        <table class="bh-table-striped">
                            <thead>
                                <tr>
                                    <th>Props</th>
                                    <th align="left">Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="font-medium">columns (required)</td>
                                    <td align="left">array</td>
                                    <td>[]</td>
                                    <td>table columns <a href="#column-props" class="text-primary hover:underline">Column Props</a></td>
                                </tr>
                                <tr>
                                    <td class="font-medium">rows (required)</td>
                                    <td align="left">array</td>
                                    <td>[]</td>
                                    <td>table rows</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">totalRows (required)</td>
                                    <td align="left">number</td>
                                    <td>0</td>
                                    <td>total number of rows</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">skin</td>
                                    <td align="left">string</td>
                                    <td>"bh-table-striped bh-table-hover"</td>
                                    <td>
                                        custom class for skin <br />
                                        <strong>bh-table-striped</strong> - for stripe row <br />
                                        <strong>bh-table-hover</strong> - for hover row <br />
                                        <strong>bh-table-bordered</strong> - for bordered row <br />
                                        <strong>bh-table-compact</strong> - for compact table
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-medium">loading</td>
                                    <td align="left">boolean</td>
                                    <td>false</td>
                                    <td>enable loader</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">hasCheckbox</td>
                                    <td align="left">boolean</td>
                                    <td>false</td>
                                    <td>enable checkbox</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">search</td>
                                    <td align="left">string</td>
                                    <td>""</td>
                                    <td>enable global search</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">page</td>
                                    <td align="left">number</td>
                                    <td>1</td>
                                    <td>current page</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">pageSize</td>
                                    <td align="left">number</td>
                                    <td>10</td>
                                    <td>number of rows per page</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">pageSizeOptions</td>
                                    <td align="left">array</td>
                                    <td>[10, 20, 30, 50, 100]</td>
                                    <td>pagesize options</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">showPageSize</td>
                                    <td align="left">boolean</td>
                                    <td>true</td>
                                    <td>enable pagesize options</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">rowClass</td>
                                    <td align="left">array, function</td>
                                    <td>""</td>
                                    <td>custom row class</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">cellClass</td>
                                    <td align="left">array, function</td>
                                    <td>""</td>
                                    <td>custom cell class</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">sortable</td>
                                    <td align="left">boolean</td>
                                    <td>false</td>
                                    <td>enable sorting</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">sortColumn</td>
                                    <td align="left">string</td>
                                    <td>"id"</td>
                                    <td>name of sort column</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">sortDirection</td>
                                    <td align="left">string</td>
                                    <td>"asc"</td>
                                    <td>sort direction (asc or desc)</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">columnFilter</td>
                                    <td align="left">boolean</td>
                                    <td>false</td>
                                    <td>enable individual column filter</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">pagination</td>
                                    <td align="left">boolean</td>
                                    <td>true</td>
                                    <td>enable pagination</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">showNumbers</td>
                                    <td align="left">boolean</td>
                                    <td>true</td>
                                    <td>enable numbers pagination</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">showNumbersCount</td>
                                    <td align="left">number</td>
                                    <td>5</td>
                                    <td>show numbers of count in pagination</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">showFirstPage</td>
                                    <td align="left">boolean</td>
                                    <td>true</td>
                                    <td>enable first page in pagination</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">showLastPage</td>
                                    <td align="left">boolean</td>
                                    <td>true</td>
                                    <td>enable last page in pagination</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">firstArrow</td>
                                    <td align="left">string</td>
                                    <td>default arrow</td>
                                    <td>custom first page arrow</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">lastArrow</td>
                                    <td align="left">string</td>
                                    <td>default arrow</td>
                                    <td>custom last page arrow</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">previousArrow</td>
                                    <td align="left">string</td>
                                    <td>default arrow</td>
                                    <td>custom previous page arrow</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">nextArrow</td>
                                    <td align="left">string</td>
                                    <td>default arrow</td>
                                    <td>custom next page arrow</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">paginationInfo</td>
                                    <td align="left">string</td>
                                    <td><span [innerText]="'Showing {0} to {1} of {2} entries'"></span></td>
                                    <td>custom pagination info</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">noDataContent</td>
                                    <td align="left">string</td>
                                    <td>No data available</td>
                                    <td>custom no data message</td>
                                </tr>

                                <tr>
                                    <td class="font-medium">stickyHeader</td>
                                    <td align="left">boolean</td>
                                    <td>false</td>
                                    <td>enable fixed header</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">height</td>
                                    <td align="left">string</td>
                                    <td>450px</td>
                                    <td>only will be used when stickyHeader enabled</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">stickyFirstColumn</td>
                                    <td align="left">boolean</td>
                                    <td>false</td>
                                    <td>enable fixed first column</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">cloneHeaderInFooter</td>
                                    <td align="left">boolean</td>
                                    <td>false</td>
                                    <td>enable clone header in footer</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">selectRowOnClick</td>
                                    <td align="left">boolean</td>
                                    <td>false</td>
                                    <td>custom no data message</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div id="column-props" class="mt-5">
                    <h2 class="text-3xl py-3 border-b border-black/10 mb-4">Columns options</h2>
                    <div class="props-table table-responsive">
                        <table class="bh-table-striped">
                            <thead>
                                <tr>
                                    <th>Props</th>
                                    <th align="left">Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="font-medium">isUnique</td>
                                    <td align="left">boolean</td>
                                    <td>false</td>
                                    <td>db column is primary key or not</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">field</td>
                                    <td align="left">string</td>
                                    <td>""</td>
                                    <td>db column name</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">title</td>
                                    <td align="left">string</td>
                                    <td>""</td>
                                    <td>display column name</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">value</td>
                                    <td align="left">string</td>
                                    <td>""</td>
                                    <td>filter value if filter enabled</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">condition</td>
                                    <td align="left">string</td>
                                    <td>"contain"</td>
                                    <td>default condition for column filter if filter enabled</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">type</td>
                                    <td align="left">string</td>
                                    <td>""</td>
                                    <td>column type (string, date, number, bool)</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">width</td>
                                    <td align="left">string</td>
                                    <td>""</td>
                                    <td>custom width of column</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">minWidth</td>
                                    <td align="left">string</td>
                                    <td>""</td>
                                    <td>custom minimum width of column</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">maxWidth</td>
                                    <td align="left">string</td>
                                    <td>""</td>
                                    <td>custom maximum width of column</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">hide</td>
                                    <td align="left">boolean</td>
                                    <td>false</td>
                                    <td>show/hide column</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">filter</td>
                                    <td align="left">boolean</td>
                                    <td>true</td>
                                    <td>enable column filter</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">search</td>
                                    <td align="left">boolean</td>
                                    <td>true</td>
                                    <td>enabled global search</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">sort</td>
                                    <td align="left">boolean</td>
                                    <td>true</td>
                                    <td>enable sorting</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">slotMode</td>
                                    <td align="left">boolean</td>
                                    <td>false</td>
                                    <td>enable slot for cell rendering</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">cellRenderer</td>
                                    <td align="left">function, string</td>
                                    <td>true</td>
                                    <td>custom cell rendering</td>
                                </tr>

                                <tr>
                                    <td class="font-medium">headerClass</td>
                                    <td align="left">string</td>
                                    <td>""</td>
                                    <td>custom header cell class</td>
                                </tr>
                                <tr>
                                    <td class="font-medium">cellClass</td>
                                    <td align="left">string</td>
                                    <td>""</td>
                                    <td>custom cell class</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div id="events">
                <h2 class="text-3xl py-3 border-b border-black/10 mb-4">Events</h2>
                <div class="props-table table-responsive">
                    <table class="bh-table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="font-medium">sortChange</td>
                                <td>will trigger when sorting changed</td>
                            </tr>
                            <tr>
                                <td class="font-medium">searchChange</td>
                                <td>will trigger when search changed</td>
                            </tr>
                            <tr>
                                <td class="font-medium">pageChange</td>
                                <td>will trigger when page changed</td>
                            </tr>
                            <tr>
                                <td class="font-medium">pageSizeChange</td>
                                <td>will trigger when pagesize changed</td>
                            </tr>
                            <tr>
                                <td class="font-medium">rowSelect</td>
                                <td>will trigger when row selected using checkbox</td>
                            </tr>
                            <tr>
                                <td class="font-medium">filterChange</td>
                                <td>will trigger when column filter changed</td>
                            </tr>

                            <tr>
                                <td class="font-medium">rowClick</td>
                                <td>will trigger when row clicked</td>
                            </tr>
                            <tr>
                                <td class="font-medium">rowDBClick</td>
                                <td>will trigger when row double clicked</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div id="methods">
                <h2 class="text-3xl py-3 border-b border-black/10 mb-4">Methods</h2>
                <div class="props-table table-responsive">
                    <table class="bh-table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="font-medium">reset</td>
                                <td>will reset all options like selected rows, filter, search, currennt page etc</td>
                            </tr>
                            <tr>
                                <td class="font-medium">getSelectedRows</td>
                                <td>will returns all selected rows</td>
                            </tr>
                            <tr>
                                <td class="font-medium">getColumnFilters</td>
                                <td>will return all column filters</td>
                            </tr>
                            <tr>
                                <td class="font-medium">clearSelectedRows</td>
                                <td>will unselect all selected rows</td>
                            </tr>
                            <tr>
                                <td class="font-medium">selectRow(index)</td>
                                <td>will select row with the given index (non-existent row will be ignored)</td>
                            </tr>
                            <tr>
                                <td class="font-medium">unselectRow(index)</td>
                                <td>will unselect row with the given index (non-existent row will be ignored)</td>
                            </tr>
                            <tr>
                                <td class="font-medium">isRowSelected(index)</td>
                                <td>will return true if the row with given index is selected</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div id="slots">
                <h2 class="text-3xl py-3 border-b border-black/10 mb-4">Slots</h2>
                <div class="mb-6">
                    <!-- <highlight>
                        <pre>
<code>{{ slot_code }}</code>
</pre>
                    </highlight> -->
                    <pre><code [highlight]="slot_code"></code></pre>
                </div>
            </div>

            <div id="usage">
                <h2 class="text-3xl py-3 border-b border-black/10 mb-4">Usage</h2>
                <div class="mb-6">
                    <h3 class="text-primary text-lg font-normal underline mb-2">app.module.ts</h3>
                    <pre><code [highlight]="usage_code1"></code></pre>
                </div>

                <div class="mb-6">
                    <h3 class="text-primary text-lg font-normal underline mb-2">app.component.html</h3>
                    <pre><code [highlight]="usage_code2"></code></pre>
                </div>

                <div class="mb-6">
                    <h3 class="text-primary text-lg font-normal underline mb-2">app.component.ts</h3>
                    <pre><code [highlight]="usage_code3"></code></pre>
                </div>
            </div>

            <div id="license">
                <h2 class="text-3xl py-3 border-b border-black/10 mb-4">License</h2>
                <div class="text-lg">
                    @bhplugin/ng-datatable is open-sourced software licensed under the
                    <a target="_blank" href="http://opensource.org/licenses/MIT" class="text-primary hover:underline"> [MIT license] </a>
                </div>
            </div>

            <div id="support" class="pb-28">
                <h2 class="text-3xl py-3 border-b border-black/10 mb-4">Support</h2>
                <div>
                    <a href="https://www.buymeacoffee.com/bhplugin" target="_blank">
                        <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important; width: 217px !important" />
                    </a>
                </div>
            </div>
        </div>
    `,
})
export class IndexComponent {
    slot_code = `<ng-template slot="id" let-value="data">
    <strong>{{ value.id }}</strong>
</ng-template>

<ng-template slot="name" let-value="data">
    <strong>{{ value.name }}</strong>
</ng-template>

<ng-template slot="email" let-value="data">
    <strong>{{ value.email }}</strong>
</ng-template>`;

    usage_code1 = `import { NgModule } from '@angular/core';
import { DataTableModule } from '@bhplugin/ng-datatable';

@NgModule({
    imports: [
        ...
        DataTableModule
    ],
})
export class AppModule {}`;

    usage_code2 = `<ng-datatable [rows]="rows" [columns]="cols"> </ng-datatable>`;

    usage_code3 = `import { Component } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    cols: Array<colDef> = [];
    rows: Array<any> = [];

    constructor() {
        this.initData();
    }

    initData(){
        this.cols = [
            { field: "id", title: "ID", filter: false },
            { field: "name", title: "Name" },
            { field: "username", title: "Username" },
            { field: "email", title: "Email" },
            { field: "phone", title: "Phone" },
            { field: "date", title: "Date", type: "date" },
            { field: "active", title: "Active", type: "bool" },
            { field: "age", title: "Age", type: "number" },
            { field: "address.city", title: "Address" },
            { field: "company.name", title: "Company" },
        ];

        this.rows = [
            {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                    lat: "-37.3159",
                    lng: "81.1496",
                },
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets",
            },
            date: "Tue Sep 27 2022 22:19:57",
            age: 10,
            active: true,
            },
            .......
        ];
    }
}`;
}
