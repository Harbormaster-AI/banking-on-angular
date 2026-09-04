
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCustomerComponent } from './create.component';
import { CustomerService } from '../../../services/Customer.service';
import { Router } from '@angular/router';

describe('CreateCustomerComponent', () => {
  let component: CreateCustomerComponent;
  let fixture: ComponentFixture<CreateCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateCustomerComponent
      ],
      providers: [
        CustomerService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});