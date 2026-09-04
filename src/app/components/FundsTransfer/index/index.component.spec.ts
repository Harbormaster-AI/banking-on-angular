
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexFundsTransferComponent } from './index.component';
import { FundsTransferService } from '../../../services/FundsTransfer.service';

describe('IndexFundsTransferComponent', () => {
  let component: IndexFundsTransferComponent;
  let fixture: ComponentFixture<IndexFundsTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexFundsTransferComponent
      ],
      providers: [
        FundsTransferService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexFundsTransferComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});