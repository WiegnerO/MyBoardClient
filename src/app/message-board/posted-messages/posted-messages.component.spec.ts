import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedMessagesComponent } from './posted-messages.component';

describe('PostedMessagesComponent', () => {
  let component: PostedMessagesComponent;
  let fixture: ComponentFixture<PostedMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
