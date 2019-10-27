import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhimComponent } from './phim.component';

describe('PhimComponent', () => {
  let component: PhimComponent;
  let fixture: ComponentFixture<PhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
