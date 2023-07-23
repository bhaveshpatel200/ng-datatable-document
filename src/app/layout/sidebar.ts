import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'layout-sidebar',
    template: `
        <div
            class="sidebar bg-white shadow z-20 fixed top-0 h-screen overflow-y-auto -left-[260px] md:left-0 whitespace-normal w-[260px] transition-all duration-300"
            [ngClass]="{ '!left-0': store.sidebar }"
        >
            <div class="w-full px-3">
                <div class="flex items-center justify-between flex-wrap sticky top-0 bg-white z-10">
                    <a routerLink="/" class="flex items-center text-black py-4 w-full">
                        <span class="flex font-semibold items-center text-xl"> Angular Datatable </span>
                    </a>
                </div>

                <ul class="relative space-y-0.5 text-gray-500 pb-8">
                    <li class="menu nav-item">
                        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" class="nav-link">
                            <div class="flex items-center gap-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"></path>
                                    <path d="M19 16h-12a2 2 0 0 0 -2 2"></path>
                                    <path d="M9 8h6"></path>
                                </svg>
                                <span> Documentation </span>
                            </div>
                        </a>
                    </li>

                    <ul class="pl-5">
                        <li class="sub-item">
                            <a href="/#install" class="group"><icon-arrow-sub /> Installation</a>
                        </li>
                        <li class="sub-item">
                            <a href="/#props" class="group"><icon-arrow-sub /> Props </a>
                        </li>
                        <li class="sub-item">
                            <a href="/#events" class="group"><icon-arrow-sub /> Events </a>
                        </li>
                        <li class="sub-item">
                            <a href="/#methods" class="group"><icon-arrow-sub /> Methods </a>
                        </li>
                        <li class="sub-item">
                            <a href="/#slots" class="group"><icon-arrow-sub /> Slots </a>
                        </li>
                        <li class="sub-item">
                            <a href="/#usage" class="group"><icon-arrow-sub /> Usage </a>
                        </li>
                        <li class="sub-item">
                            <a href="/#license" class="group"><icon-arrow-sub /> License </a>
                        </li>
                        <li class="sub-item">
                            <a href="/#support" class="group"><icon-arrow-sub /> Support </a>
                        </li>
                    </ul>

                    <li class="px-3 pt-5 pb-3 text-sm font-semibold leading-none uppercase text-black">Examples</li>

                    <li class="menu nav-item">
                        <a routerLink="/static-mode" routerLinkActive="active" class="nav-link"><icon-grid-static /> Static Mode </a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/advanced" routerLinkActive="active" class="nav-link"><icon-grid-advanced /> Advanced </a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/basic" routerLinkActive="active" class="nav-link"><icon-grid />Basic </a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/sorting" routerLinkActive="active" class="nav-link"><icon-grid-sort />Sorting</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/alt-pagination" routerLinkActive="active" class="nav-link"><icon-grid-pagination />Alt Pagination</a>
                    </li>

                    <li class="menu nav-item">
                        <a routerLink="/custom-page-size" routerLinkActive="active" class="nav-link"><icon-grid-custom /> Custom Page Size & Info </a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/search" routerLinkActive="active" class="nav-link"><icon-grid-search />Global Search</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/checkbox" routerLinkActive="active" class="nav-link"><icon-grid-checkbox />Checkbox</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/slot" routerLinkActive="active" class="nav-link"><icon-grid-slot />Slot</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/custom-message" routerLinkActive="active" class="nav-link"><icon-grid-custom />Custom Text</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/column-filter" routerLinkActive="active" class="nav-link"><icon-grid-filter />Column Filter</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/skin" routerLinkActive="active" class="nav-link"><icon-grid-skin /> Skin</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/actions" routerLinkActive="active" class="nav-link"><icon-grid-action />Actions</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/rowclick" routerLinkActive="active" class="nav-link"><icon-grid-click />Row Click</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/sticky-header" routerLinkActive="active" class="nav-link"><icon-grid-sticky />Sticky Header</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/header-clone" routerLinkActive="active" class="nav-link"><icon-grid-clone />Clone Header</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/columnchooser" routerLinkActive="active" class="nav-link"><icon-grid-column />Column Chooser</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/skeleton-loader" routerLinkActive="active" class="nav-link"><icon-grid-loader />Skeleton Loader</a>
                    </li>
                    <li class="menu nav-item pt-4">Coming Soon (More Samples)</li>
                </ul>
            </div>
        </div>
    `,
})
export class SidebarComponent {
    store: any;

    constructor(public storeData: Store<any>) {
        this.initStore();
    }
    async initStore() {
        this.storeData
            .select((d) => d.index)
            .subscribe((d) => {
                this.store = d;
            });
    }
}
