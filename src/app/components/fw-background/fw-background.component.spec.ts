import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwBackgroundComponent } from './fw-background.component';

describe('FwBackgroundComponent', () => {
  let component: FwBackgroundComponent;
  let fixture: ComponentFixture<FwBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FwBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FwBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
