import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalQuanLyThanhVienComponent } from './modal-quan-ly-thanh-vien.component';

describe('ModalQuanLyThanhVienComponent', () => {
  let component: ModalQuanLyThanhVienComponent;
  let fixture: ComponentFixture<ModalQuanLyThanhVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalQuanLyThanhVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalQuanLyThanhVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
