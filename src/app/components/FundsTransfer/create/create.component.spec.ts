
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateFundsTransferComponent } from './create.component';
import { FundsTransferService } from '../../../services/FundsTransfer.service';
import { Router } from '@angular/router';

describe('CreateFundsTransferComponent', () => {
  let component: CreateFundsTransferComponent;
  let fixture: ComponentFixture<CreateFundsTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateFundsTransferComponent
      ],
      providers: [
        FundsTransferService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFundsTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});