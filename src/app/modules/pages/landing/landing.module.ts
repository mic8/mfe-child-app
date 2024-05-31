import { NgModule } from '@angular/core';
import { LandingPage } from './landing.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AppSharedDirectiveModule } from '../../../../shared/directives/module';

@NgModule({
    declarations: [LandingPage],
    imports: [
        CommonModule,
        IonicModule,

        AppSharedDirectiveModule,

        RouterModule.forChild([
            {
                path: '',
                component: LandingPage,
            },
        ]),
    ],
})
export class MfeLandingPageModule {
}
