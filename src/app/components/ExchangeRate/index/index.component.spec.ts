
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexExchangeRateComponent } from './index.component';
import { ExchangeRateService } from '../../../services/ExchangeRate.service';

describe('IndexExchangeRateComponent', () => {
  let component: IndexExchangeRateComponent;
  let fixture: ComponentFixture<IndexExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexExchangeRateComponent
      ],
      providers: [
        ExchangeRateService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexExchangeRateComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});