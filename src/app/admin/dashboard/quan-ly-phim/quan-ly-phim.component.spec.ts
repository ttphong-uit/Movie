import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyPhimComponent } from './quan-ly-phim.component';

describe('QuanLyPhimComponent', () => {
  let component: QuanLyPhimComponent;
  let fixture: ComponentFixture<QuanLyPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
