
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateBankingProductComponent } from './create.component';
import { BankingProductService } from '../../../services/BankingProduct.service';
import { Router } from '@angular/router';

describe('CreateBankingProductComponent', () => {
  let component: CreateBankingProductComponent;
  let fixture: ComponentFixture<CreateBankingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateBankingProductComponent
      ],
      providers: [
        BankingProductService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateBankingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});