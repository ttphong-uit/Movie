import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HethongrapItemsComponent } from './hethongrap-items.component';

describe('HethongrapItemsComponent', () => {
  let component: HethongrapItemsComponent;
  let fixture: ComponentFixture<HethongrapItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HethongrapItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HethongrapItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
