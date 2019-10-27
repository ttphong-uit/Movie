import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatVeNhanhComponent } from './dat-ve-nhanh.component';

describe('DatVeNhanhComponent', () => {
  let component: DatVeNhanhComponent;
  let fixture: ComponentFixture<DatVeNhanhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatVeNhanhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatVeNhanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
