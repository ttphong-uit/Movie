import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPhimComponent } from './modal-phim.component';

describe('ModalPhimComponent', () => {
  let component: ModalPhimComponent;
  let fixture: ComponentFixture<ModalPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
