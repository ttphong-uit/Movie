import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangKiComponent } from './dang-ki.component';

describe('DangKiComponent', () => {
  let component: DangKiComponent;
  let fixture: ComponentFixture<DangKiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangKiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangKiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
