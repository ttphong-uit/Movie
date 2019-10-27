import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGheComponent } from './item-ghe.component';

describe('ItemGheComponent', () => {
  let component: ItemGheComponent;
  let fixture: ComponentFixture<ItemGheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
