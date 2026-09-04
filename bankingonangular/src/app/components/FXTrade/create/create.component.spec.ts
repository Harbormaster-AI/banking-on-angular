
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateFXTradeComponent } from './create.component';
import { FXTradeService } from '../../../services/FXTrade.service';
import { Router } from '@angular/router';

describe('CreateFXTradeComponent', () => {
  let component: CreateFXTradeComponent;
  let fixture: ComponentFixture<CreateFXTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateFXTradeComponent
      ],
      providers: [
        FXTradeService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFXTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});