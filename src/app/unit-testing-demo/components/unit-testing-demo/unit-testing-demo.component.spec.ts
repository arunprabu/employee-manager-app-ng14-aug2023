import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingDemoComponent } from './unit-testing-demo.component';

describe('UnitTestingDemoComponent', () => {
  let component: UnitTestingDemoComponent;
  let fixture: ComponentFixture<UnitTestingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitTestingDemoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UnitTestingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have h1 element with Unit Testing Demo', () => {
    // Taking UnitTestingDemoComponent for Testing
    const fixture = TestBed.createComponent(UnitTestingDemoComponent);
    fixture.detectChanges();
    // taking up UnitTestingDemoComponent HTML file for testing
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toBe('Unit Testing Demo!');
  });
});
