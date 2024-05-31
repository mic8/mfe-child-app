import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/app/mfe',
            },
            {
                path: 'app/mfe',
                data: {
                    ionic: {
                        root: '/app/mfe',
                    },
                },
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./modules/pages/index/index.module').then(m => m.MfeIndexPageModule),
                    },
                    {
                        path: 'profile',
                        loadChildren: () => import('./modules/pages/profile/profile.module').then(m => m.MfeProfilePageModule),
                    },
                ],
            },
            {
                path: 'mfe',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: '/app/mfe',
                    },
                    {
                        path: 'landing',
                        loadChildren: () => import('./modules/pages/landing/landing.module').then(m => m.MfeLandingPageModule),
                    }
                ],
            },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking', preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
