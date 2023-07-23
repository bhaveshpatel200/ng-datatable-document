import { Component, Input } from '@angular/core';

@Component({
    selector: 'icon-code',
    template: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-code w-5 h-5 ltr:mr-2 rtl:ml-2"
            [ngClass]="class"
        >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
    `,
})
export class IconCodeComponent {
    @Input() class: string = '';
    constructor() {}
}
