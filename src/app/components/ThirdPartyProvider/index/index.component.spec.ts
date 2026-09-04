
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexThirdPartyProviderComponent } from './index.component';
import { ThirdPartyProviderService } from '../../../services/ThirdPartyProvider.service';

describe('IndexThirdPartyProviderComponent', () => {
  let component: IndexThirdPartyProviderComponent;
  let fixture: ComponentFixture<IndexThirdPartyProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexThirdPartyProviderComponent
      ],
      providers: [
        ThirdPartyProviderService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexThirdPartyProviderComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});