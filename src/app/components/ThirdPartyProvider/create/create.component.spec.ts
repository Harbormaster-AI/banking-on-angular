
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateThirdPartyProviderComponent } from './create.component';
import { ThirdPartyProviderService } from '../../../services/ThirdPartyProvider.service';
import { Router } from '@angular/router';

describe('CreateThirdPartyProviderComponent', () => {
  let component: CreateThirdPartyProviderComponent;
  let fixture: ComponentFixture<CreateThirdPartyProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateThirdPartyProviderComponent
      ],
      providers: [
        ThirdPartyProviderService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateThirdPartyProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});