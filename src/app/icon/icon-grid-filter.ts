import { Component } from '@angular/core';
@Component({
    selector: 'icon-grid-filter',
    template: `
        <svg width="14" height="14" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"></path>
            <path d="M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
            <path d="M14 12l6 0"></path>
            <path d="M14 16l6 0"></path>
            <path d="M14 20l6 0"></path>
        </svg>
    `,
})
export class IconGridFilterComponent {}