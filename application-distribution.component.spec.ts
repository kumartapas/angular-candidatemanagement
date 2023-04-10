import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDistributionComponent } from './application-distribution.component';

describe('ApplicationDistributionComponent', () => {
  let component: ApplicationDistributionComponent;
  let fixture: ComponentFixture<ApplicationDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationDistributionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
