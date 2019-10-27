import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyThanhVienComponent } from './quan-ly-thanh-vien.component';

describe('QuanLyThanhVienComponent', () => {
  let component: QuanLyThanhVienComponent;
  let fixture: ComponentFixture<QuanLyThanhVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyThanhVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyThanhVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
