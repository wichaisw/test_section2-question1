import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  describe('styles', () => {
    it('should fixed left section size to 200px', () => {
      const appEl: HTMLElement = fixture.nativeElement;
      const leftSec: Element = appEl.querySelector('section:first-child') as Element;
      expect(getComputedStyle(leftSec).width).toEqual('200px');
    }) 

    it('should fixed right section size to 300px', () => {
      const appEl: HTMLElement = fixture.nativeElement;
      const leftSec: Element = appEl.querySelector('section:last-child') as Element;
      expect(getComputedStyle(leftSec).width).toEqual('300px');
    }) 
  });

  describe('input validation', () => {
    beforeEach(() => {
      spyOn(app, 'validateInput').and.callThrough();
    });

    it('should round input', () => {
      app.validateInput(0);
      expect(app.numValue).toEqual(0);
      app.validateInput(1.5);
      expect(app.numValue).toEqual(2);
      app.validateInput(3.6);
      expect(app.numValue).toEqual(4);
      app.validateInput(1000.98);
      expect(app.numValue).toEqual(1001);
    });

    it('should replace negative input with 1', () => {
      app.validateInput(25);
      expect(app.numValue).toEqual(25);
      app.validateInput(-25);
      expect(app.numValue).toEqual(1);
      app.validateInput(-1);
      expect(app.numValue).toEqual(1);
    });

    it('should call calculate', () => {
      spyOn(app, 'calculate');
      app.validateInput(0);
      expect(app.calculate).toHaveBeenCalled();
    });
  });

  describe('isPrime', () => {
    it(`should return true if is a prime number`, () => {
      expect(app.isPrime(2)).toEqual(true);
      expect(app.isPrime(3)).toEqual(true);
      expect(app.isPrime(5)).toEqual(true);
      expect(app.isPrime(97)).toEqual(true);
      expect(app.isPrime(419)).toEqual(true);
      expect(app.isPrime(997)).toEqual(true);
      expect(app.isPrime(4051)).toEqual(true);
      expect(app.isPrime(6607)).toEqual(true);
    });

    it(`should return false if is not a prime number`, () => {
      expect(app.isPrime(0)).toEqual(false);
      expect(app.isPrime(1)).toEqual(false);
      expect(app.isPrime(15)).toEqual(false);
      expect(app.isPrime(108)).toEqual(false);
      expect(app.isPrime(684)).toEqual(false);
    });
  });

  describe('isFibonacci', () => {
    it(`should return true if is a fibonacci number`, () => {
      expect(app.isFibonacci(0)).toEqual(true);
      expect(app.isFibonacci(1)).toEqual(true);
      expect(app.isFibonacci(2)).toEqual(true);
      expect(app.isFibonacci(3)).toEqual(true);
      expect(app.isFibonacci(34)).toEqual(true);
      expect(app.isFibonacci(4181)).toEqual(true);
    });

    it(`should return true if is not a fibonacci number`, () => {
      expect(app.isFibonacci(35)).toEqual(false);
      expect(app.isFibonacci(4)).toEqual(false);
      expect(app.isFibonacci(5000)).toEqual(false);
    });
    
    it(`should receive number as an argument`, () => {
      spyOn(app, "isFibonacci").and.callThrough(); 
      app.isFibonacci(5);
      expect(app.isFibonacci).toHaveBeenCalledWith(jasmine.any(Number));
    });

  })
});
