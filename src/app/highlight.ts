import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as hljs from 'highlight.js';

@Component({
    selector: 'highlight',
    template: `
        <div #el>
            <ng-content></ng-content>
        </div>
    `,
})
export class HighlightComponent implements AfterViewInit {
    @ViewChild('el', { static: true }) elRef!: ElementRef<HTMLDivElement>;

    ngAfterViewInit() {
        const preElement = this.elRef.nativeElement.querySelector('pre');
        if (preElement) {
            hljs.default.highlightElement(preElement);
        }
    }
}
