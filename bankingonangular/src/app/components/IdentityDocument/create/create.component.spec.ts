
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateIdentityDocumentComponent } from './create.component';
import { IdentityDocumentService } from '../../../services/IdentityDocument.service';
import { Router } from '@angular/router';

describe('CreateIdentityDocumentComponent', () => {
  let component: CreateIdentityDocumentComponent;
  let fixture: ComponentFixture<CreateIdentityDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateIdentityDocumentComponent
      ],
      providers: [
        IdentityDocumentService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateIdentityDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});