import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRateComponent } from './post-rate.component';

describe('PostRateComponent', () => {
  let component: PostRateComponent;
  let fixture: ComponentFixture<PostRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
