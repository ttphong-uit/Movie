import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatGheComponent } from './dat-ghe.component';

describe('DatGheComponent', () => {
  let component: DatGheComponent;
  let fixture: ComponentFixture<DatGheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatGheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatGheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
