import { Component } from '@angular/core';

@Component({
    selector: 'layout-sidebar',
    template: `
        <!-- [ngClass]="{ 'left-0': store.sidebar, '!left-0': !store.sidebar }" -->
        <div class="sidebar bg-white shadow z-20 fixed top-0 h-screen overflow-y-auto -left-[260px] md:left-0 whitespace-normal w-[260px] transition-all duration-300">
            <div class="w-full px-3">
                <div class="flex items-center justify-between flex-wrap sticky top-0 bg-white z-10">
                    <a routerLink="/" class="flex items-center text-black py-4 w-full">
                        <span class="flex font-medium items-center text-xl"> Angular Datatable </span>
                    </a>
                </div>

                <ul class="relative space-y-0.5 text-gray-500 pb-5">
                    <li class="menu nav-item">
                        <a routerLink="/" class="nav-link">
                            <div class="flex items-center">
                                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                </svg>
                                <span class="ml-3"> Documentation </span>
                            </div>
                        </a>
                    </li>

                    <ul class="mt-3 pl-5">
                        <li class="sub-item">
                            <a href="/#install" class="group">
                                <span class="mr-2 text-2xl leading-5 text-black/60 group-hover:text-primary">•</span>
                                Installation
                            </a>
                        </li>
                        <li class="sub-item">
                            <a href="/#props" class="group"><span class="mr-2 text-2xl leading-5 text-black/60 group-hover:text-primary">•</span> Props </a>
                        </li>
                        <li class="sub-item">
                            <a href="/#events" class="group"><span class="mr-2 text-2xl leading-5 text-black/60 group-hover:text-primary">•</span> Events </a>
                        </li>
                        <li class="sub-item">
                            <a href="/#methods" class="group"><span class="mr-2 text-2xl leading-5 text-black/60 group-hover:text-primary">•</span> Methods </a>
                        </li>
                        <li class="sub-item">
                            <a href="/#slots" class="group"><span class="mr-2 text-2xl leading-5 text-black/60 group-hover:text-primary">•</span> Slots </a>
                        </li>
                        <li class="sub-item">
                            <a href="/#usage" class="group"><span class="mr-2 text-2xl leading-5 text-black/60 group-hover:text-primary">•</span> Usage </a>
                        </li>
                        <li class="sub-item">
                            <a href="/#license" class="group"><span class="mr-2 text-2xl leading-5 text-black/60 group-hover:text-primary">•</span> License </a>
                        </li>
                        <li class="sub-item">
                            <a href="/#support" class="group"><span class="mr-2 text-2xl leading-5 text-black/60 group-hover:text-primary">•</span> Support </a>
                        </li>
                    </ul>

                    <li class="px-3 pt-5 pb-3 text-sm font-medium leading-none uppercase text-black">Examples</li>

                    <li class="menu nav-item">
                        <a routerLink="/advanced" class="nav-link"> Advanced </a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/basic" class="nav-link"> Basic </a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/sorting" class="nav-link">Sorting</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/alt-pagination" class="nav-link">Alt Pagination</a>
                    </li>

                    <li class="menu nav-item">
                        <a routerLink="/custom-page-size" class="nav-link"> Custom Page Size & Info </a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/search" class="nav-link">Global Search</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/checkbox" class="nav-link">Checkbox</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/slot" class="nav-link">Slot</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/custom-message" class="nav-link">Custom Text</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/column-filter" class="nav-link">Column Filter</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/skin" class="nav-link">Skin</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/actions" class="nav-link">Actions</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/rowclick" class="nav-link">Row Click</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/sticky-header" class="nav-link">Sticky Header</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/header-clone" class="nav-link">Clone Header</a>
                    </li>
                    <li class="menu nav-item">
                        <a routerLink="/columnchooser" class="nav-link">Column Chooser</a>
                    </li>
                    <li class="menu nav-item pt-4">Coming Soon (More Samples)</li>
                </ul>
            </div>
        </div>
    `,
})
export class SidebarComponent {}