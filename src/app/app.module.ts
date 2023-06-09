import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header';
import { FooterComponent } from './layout/footer';
import { SidebarComponent } from './layout/sidebar';
import { HighlightComponent } from './highlight';

// ng-datatable
import { DataTableModule } from '@bhplugin/ng-datatable';

// store
import { StoreModule } from '@ngrx/store';
import { indexReducer } from './store/index.reducer';

import { BasicComponent } from './basic';
import { IndexComponent } from './index';
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

export const routes: Routes = [
    { path: '', component: IndexComponent },
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
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        HighlightComponent,
        IndexComponent,
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
    ],
    imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule, ReactiveFormsModule, DataTableModule, StoreModule.forRoot({ index: indexReducer })],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
