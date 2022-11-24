import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootheaderComponent } from './bootheader.component';

describe('BootheaderComponent', () => {
  let component: BootheaderComponent;
  let fixture: ComponentFixture<BootheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
