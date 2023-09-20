import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesplegableMenuComponent } from './desplegable-menu.component';

describe('DesplegableMenuComponent', () => {
  let component: DesplegableMenuComponent;
  let fixture: ComponentFixture<DesplegableMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesplegableMenuComponent]
    });
    fixture = TestBed.createComponent(DesplegableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
