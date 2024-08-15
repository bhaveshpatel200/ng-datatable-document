import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header';
import { FooterComponent } from './layout/footer';
import { SidebarComponent } from './layout/sidebar';

// ng-datatable
import { DataTableModule } from '@bhplugin/ng-datatable';

// store
import { StoreModule } from '@ngrx/store';
import { indexReducer } from './store/index.reducer';

// apexchart
import { NgApexchartsModule } from 'ng-apexcharts';

import { BasicComponent } from './basic';
import { IndexComponent } from './index';
import { StaticModeComponent } from './static-mode';
import { AltPaginationComponent } from './alt-pagination';
import { CustomPageSizeComponent } from './custom-page-size';
import { SearchComponent } from './search';
import { CheckboxComponent } from './checkbox';
import { SlotComponent } from './slot';
import { CustomMessageComponent } from './custom-message';
import { ColumnFilterComponent } from './column-filter';
import { SkinComponent } from './skin';
import { ActionsComponent } from './actions';
import { RowClickComponent } from './rowclick';
import { StickyHeaderComponent } from './sticky-header';
import { HeaderCloneComponent } from './header-clone';
import { ColumnChooserComponent } from './columnchooser';
import { SortingComponent } from './sorting';
import { AdvancedComponent } from './advanced';
import { SkeletonLoaderComponent } from './skeleton-loader';
import { MethodsComponent } from './methods';
import { ExportComponent } from 'src/app/export';

import { IconModule } from './icon/icon.module';

// highlight js
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'static-mode', component: StaticModeComponent },
    { path: 'basic', component: BasicComponent },
    { path: 'alt-pagination', component: AltPaginationComponent },
    { path: 'custom-page-size', component: CustomPageSizeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'checkbox', component: CheckboxComponent },
    { path: 'slot', component: SlotComponent },
    { path: 'custom-message', component: CustomMessageComponent },
    { path: 'column-filter', component: ColumnFilterComponent },
    { path: 'skin', component: SkinComponent },
    { path: 'actions', component: ActionsComponent },
    { path: 'rowclick', component: RowClickComponent },
    { path: 'sticky-header', component: StickyHeaderComponent },
    { path: 'header-clone', component: HeaderCloneComponent },
    { path: 'columnchooser', component: ColumnChooserComponent },
    { path: 'sorting', component: SortingComponent },
    { path: 'advanced', component: AdvancedComponent },
    { path: 'skeleton-loader', component: SkeletonLoaderComponent },
    { path: 'methods', component: MethodsComponent },
    { path: 'export', component: ExportComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        IndexComponent,
        StaticModeComponent,
        BasicComponent,
        AltPaginationComponent,
        CustomPageSizeComponent,
        SearchComponent,
        CheckboxComponent,
        SlotComponent,
        CustomMessageComponent,
        ColumnFilterComponent,
        SkinComponent,
        ActionsComponent,
        RowClickComponent,
        StickyHeaderComponent,
        HeaderCloneComponent,
        ColumnChooserComponent,
        SortingComponent,
        AdvancedComponent,
        SkeletonLoaderComponent,
        MethodsComponent,
        ExportComponent,
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        DataTableModule,
        StoreModule.forRoot({ index: indexReducer }),
        HighlightModule,
        NgApexchartsModule,
        IconModule,
    ],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                },
            },
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
