
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePaymentCardComponent } from './create.component';
import { PaymentCardService } from '../../../services/PaymentCard.service';
import { Router } from '@angular/router';

describe('CreatePaymentCardComponent', () => {
  let component: CreatePaymentCardComponent;
  let fixture: ComponentFixture<CreatePaymentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreatePaymentCardComponent
      ],
      providers: [
        PaymentCardService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePaymentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});