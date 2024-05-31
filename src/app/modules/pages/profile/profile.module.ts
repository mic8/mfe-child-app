import { NgModule } from '@angular/core';
import { ProfilePage } from './profile.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AppSharedDirectiveModule } from '../../../../shared/directives/module';

@NgModule({
    declarations: [ProfilePage],
    imports: [
        CommonModule,
        IonicModule,

        AppSharedDirectiveModule,

        RouterModule.forChild([
            {
                path: '',
                component: ProfilePage,
            },
        ]),
    ],
})
export class MfeProfilePageModule {
}
