import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AugmentComponent } from './augment.component';

describe('AugmentComponent', () => {
  let component: AugmentComponent;
  let fixture: ComponentFixture<AugmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AugmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AugmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
