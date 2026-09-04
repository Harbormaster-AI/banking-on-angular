
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexBankingProductComponent } from './index.component';
import { BankingProductService } from '../../../services/BankingProduct.service';

describe('IndexBankingProductComponent', () => {
  let component: IndexBankingProductComponent;
  let fixture: ComponentFixture<IndexBankingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexBankingProductComponent
      ],
      providers: [
        BankingProductService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexBankingProductComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});