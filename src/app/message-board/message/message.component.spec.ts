import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageForumComponent } from './message.component';

describe('MessageForumComponent', () => {
  let component: MessageForumComponent;
  let fixture: ComponentFixture<MessageForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
