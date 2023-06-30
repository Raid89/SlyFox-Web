import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNavBarComponent } from './item-nav-bar.component';

describe('ItemNavBarComponent', () => {
  let component: ItemNavBarComponent;
  let fixture: ComponentFixture<ItemNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemNavBarComponent]
    });
    fixture = TestBed.createComponent(ItemNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
