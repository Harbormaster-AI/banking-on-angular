import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThirdPartyProviderService } from '../../../services/ThirdPartyProvider.service';
import { ThirdPartyProvider } from '../../../models/ThirdPartyProvider';
import { SubBaseComponent } from '../../ThirdPartyProvider/sub.base.component';

@Component({
    selector: 'app-create-thirdPartyProvider',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateThirdPartyProviderComponent extends SubBaseComponent implements OnInit {

    title = 'Add ThirdPartyProvider';

    thirdPartyProviderForm: FormGroup;
    thirdPartyProvider: ThirdPartyProvider;

    constructor( http: HttpClient,
        private thirdPartyProviderService: ThirdPartyProviderService,
        private fb: FormBuilder,
        private router: Router
) {
        super(http);
        this.thirdPartyProviderForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  name: ['', Validators.required],
      registrationId: ['', Validators.required],
      website: ['', Validators.required],
      Bank: ['', ],
      Consents: ['', ]
        });
    }

    
    addThirdPartyProvider(name, registrationId, website, Bank, Consents): void {
        this.thirdPartyProviderService
        .addThirdPartyProvider(name, registrationId, website, Bank, Consents)
.then(() => {
        this.router.navigate(['/indexThirdPartyProvider']);
    });
}

    ngOnInit(): void {
    }
}