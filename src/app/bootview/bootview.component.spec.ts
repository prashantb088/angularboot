import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootviewComponent } from './bootview.component';

describe('BootviewComponent', () => {
  let component: BootviewComponent;
  let fixture: ComponentFixture<BootviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
