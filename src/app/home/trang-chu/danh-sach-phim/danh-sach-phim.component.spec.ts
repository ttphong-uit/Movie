import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachPhimComponent } from './danh-sach-phim.component';

describe('DanhSachPhimComponent', () => {
  let component: DanhSachPhimComponent;
  let fixture: ComponentFixture<DanhSachPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
