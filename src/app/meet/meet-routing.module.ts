import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MeetComponent } from './components/meet/meet.component';
import { MeetHelloComponent } from './components/meet-hello/meet-hello.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: MeetComponent
            },
            {
                path: 'hello',
                component: MeetHelloComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MeetRoutingModule {
}
