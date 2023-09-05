import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component'; // what comp is taken up for testing?

// Group of related tests == TEST SUITE 
describe('AppComponent', () => {
  beforeEach(async () => {
    // like app-module 
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  });

  // test case / test spec / test
  it('should create the app', () => {
    // Taking App Component for Testing 
    const fixture = TestBed.createComponent(AppComponent);
    // taking up App Comp class file (ts) for testing
    const app = fixture.componentInstance;
    expect(app).toBeTruthy(); // MUST in every test
  });

  it(`should have as title1 'employee-manager-app-ng14'`, () => {
    // Taking App Component for Testing
    const fixture = TestBed.createComponent(AppComponent);
    // taking up App Comp class file (ts) for testing
    const app = fixture.componentInstance;
    // the following is must
    expect(app.title).toEqual('Emp Manager App!');
    // expect is from Jasmine
    // toEqual, toBeTruthy are from Jasmine -- they are called as matcher
  });

  it('should render title', () => {
    // Taking App Component for Testing
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // taking up App Comp HTML file for testing
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Emp Manager App! is running!'
    );
  });

  it('has courseName as Angular 14', () => {
    // Taking App Component for Testing
    const fixture = TestBed.createComponent(AppComponent);
    // taking up App Comp class file (ts) for testing
    const app = fixture.componentInstance;
    // the following is must
    expect(app.courseName).toEqual('Angular 14');
  });
});
