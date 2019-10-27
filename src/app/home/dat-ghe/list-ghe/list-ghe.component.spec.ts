import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGheComponent } from './list-ghe.component';

describe('ListGheComponent', () => {
  let component: ListGheComponent;
  let fixture: ComponentFixture<ListGheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
