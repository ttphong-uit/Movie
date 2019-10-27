import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPhimComponent } from './item-phim.component';

describe('ItemPhimComponent', () => {
  let component: ItemPhimComponent;
  let fixture: ComponentFixture<ItemPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
