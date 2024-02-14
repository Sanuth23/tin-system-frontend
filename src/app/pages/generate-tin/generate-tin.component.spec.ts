import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTinComponent } from './generate-tin.component';

describe('GenerateTinComponent', () => {
  let component: GenerateTinComponent;
  let fixture: ComponentFixture<GenerateTinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateTinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateTinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
