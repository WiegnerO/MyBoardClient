import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoardPageComponent } from './message-board-page.component';

describe('MessageBoardPageComponent', () => {
  let component: MessageBoardPageComponent;
  let fixture: ComponentFixture<MessageBoardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBoardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBoardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
