import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetComponent } from './components/meet/meet.component';
import { MeetRoutingModule } from './meet-routing.module';
import { MeetHelloComponent } from './components/meet-hello/meet-hello.component';

@NgModule({
    imports: [
        CommonModule,
        MeetRoutingModule
    ],
    declarations: [MeetComponent, MeetHelloComponent]
})
export class MeetModule {
}
