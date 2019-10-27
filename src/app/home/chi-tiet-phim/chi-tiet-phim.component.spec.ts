import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietPhimComponent } from './chi-tiet-phim.component';

describe('ChiTietPhimComponent', () => {
  let component: ChiTietPhimComponent;
  let fixture: ComponentFixture<ChiTietPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
