import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'mfe-landing-page',
    templateUrl: './landing.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage {
}
