import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'mfe-index-page',
    templateUrl: './index.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexPage {
}
