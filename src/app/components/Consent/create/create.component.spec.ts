
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateConsentComponent } from './create.component';
import { ConsentService } from '../../../services/Consent.service';
import { Router } from '@angular/router';

describe('CreateConsentComponent', () => {
  let component: CreateConsentComponent;
  let fixture: ComponentFixture<CreateConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateConsentComponent
      ],
      providers: [
        ConsentService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});