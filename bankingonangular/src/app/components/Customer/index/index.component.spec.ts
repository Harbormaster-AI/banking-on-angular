
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexCustomerComponent } from './index.component';
import { CustomerService } from '../../../services/Customer.service';

describe('IndexCustomerComponent', () => {
  let component: IndexCustomerComponent;
  let fixture: ComponentFixture<IndexCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexCustomerComponent
      ],
      providers: [
        CustomerService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexCustomerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});