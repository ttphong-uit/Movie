import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeThongRapComponent } from './he-thong-rap.component';

describe('HeThongRapComponent', () => {
  let component: HeThongRapComponent;
  let fixture: ComponentFixture<HeThongRapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeThongRapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeThongRapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
