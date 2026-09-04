
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateExchangeRateComponent } from './create.component';
import { ExchangeRateService } from '../../../services/ExchangeRate.service';
import { Router } from '@angular/router';

describe('CreateExchangeRateComponent', () => {
  let component: CreateExchangeRateComponent;
  let fixture: ComponentFixture<CreateExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateExchangeRateComponent
      ],
      providers: [
        ExchangeRateService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});