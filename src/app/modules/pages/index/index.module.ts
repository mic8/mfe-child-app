import { NgModule } from '@angular/core';
import { IndexPage } from './index.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AppSharedDirectiveModule } from '../../../../shared/directives/module';

@NgModule({
    declarations: [IndexPage],
    imports: [
        CommonModule,
        IonicModule,

        RouterModule.forChild([
            {
                path: '',
                component: IndexPage,
            },
        ]),
        AppSharedDirectiveModule,
    ],
})
export class MfeIndexPageModule {
}
