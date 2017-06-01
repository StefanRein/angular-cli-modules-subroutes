import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetHelloComponent } from './meet-hello.component';

describe('MeetHelloComponent', () => {
  let component: MeetHelloComponent;
  let fixture: ComponentFixture<MeetHelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetHelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
