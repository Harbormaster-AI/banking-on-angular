
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexExternalAccountComponent } from './index.component';
import { ExternalAccountService } from '../../../services/ExternalAccount.service';

describe('IndexExternalAccountComponent', () => {
  let component: IndexExternalAccountComponent;
  let fixture: ComponentFixture<IndexExternalAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexExternalAccountComponent
      ],
      providers: [
        ExternalAccountService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexExternalAccountComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});