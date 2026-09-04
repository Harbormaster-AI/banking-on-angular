
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditThirdPartyProviderComponent } from './edit.component';
import { ThirdPartyProviderService } from '../../../services/ThirdPartyProvider.service';

describe('EditThirdPartyProviderComponent', () => {
  let component: EditThirdPartyProviderComponent;
  let fixture: ComponentFixture<EditThirdPartyProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        EditThirdPartyProviderComponent
      ],
      providers: [
        ThirdPartyProviderService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' })
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditThirdPartyProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});