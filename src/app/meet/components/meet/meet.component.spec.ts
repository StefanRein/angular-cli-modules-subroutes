import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetComponent } from './meet.component';

describe('MeetComponent', () => {
  let component: MeetComponent;
  let fixture: ComponentFixture<MeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
