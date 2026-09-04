
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateATMComponent } from './create.component';
import { ATMService } from '../../../services/ATM.service';
import { Router } from '@angular/router';

describe('CreateATMComponent', () => {
  let component: CreateATMComponent;
  let fixture: ComponentFixture<CreateATMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateATMComponent
      ],
      providers: [
        ATMService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateATMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});