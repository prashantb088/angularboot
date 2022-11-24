import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlaptopComponent } from './viewlaptop.component';

describe('ViewlaptopComponent', () => {
  let component: ViewlaptopComponent;
  let fixture: ComponentFixture<ViewlaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewlaptopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewlaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
