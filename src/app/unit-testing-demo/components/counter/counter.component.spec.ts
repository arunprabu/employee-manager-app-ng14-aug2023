import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let wrapper: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance; // comp.ts taken up testing 
    wrapper = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have counter with default value 0', () => {
    expect(component.counter).toEqual(0);
  });

  it('should increment counter value correctly', () => {
    expect(component.counter).toEqual(0);
    component.handleIncrement(); // calling this method directly
    expect(component.counter).toEqual(1);
    component.handleIncrement(); // calling this method directly
    component.handleIncrement(); // calling this method directly
    expect(component.counter).toEqual(3);
  });

  // TODO: Try testing decrement

  // Testing the Event
  it('should increment counter and update html when increment button is clicked', () => {
    // find the increment button from html
    // trigger the event thru program
    fixture.debugElement
      .query(By.css('.increment-btn'))
      .triggerEventHandler('click', null);
    expect(component.counter).toEqual(1);
    fixture.detectChanges(); // detecting the changes in html

    // find out paragraph and getting its text in which counter value is displayed
    const counterValueText = fixture.debugElement.query(
      By.css('.counter-value')
    ).nativeElement.innerText;

    expect(counterValueText).toBe('Counter Value: 1');
  });
 
  // TODO: Try testing decrement button and the value in html

  it('should have red bg color in h2 element', () => {
    const bgColor = wrapper.querySelector('h2')?.style.backgroundColor;
    expect(bgColor).toBe('rgb(255, 0, 0)');
  })
});
