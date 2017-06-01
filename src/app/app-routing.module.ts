import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MeetModule } from './meet/meet.module';

export function exportMeetModule() {
    return MeetModule;
}

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'meet',
                pathMatch: 'full'
            },
            {
                path: 'meet',
                loadChildren: exportMeetModule
            }
        ], {
            useHash: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
