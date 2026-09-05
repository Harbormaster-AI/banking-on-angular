import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ThirdPartyProviderService } from '../../../services/ThirdPartyProvider.service';
import { SubBaseComponent } from '../../ThirdPartyProvider/sub.base.component';


@Component({
    selector: 'app-edit-thirdPartyProvider',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditThirdPartyProviderComponent extends SubBaseComponent implements OnInit {

    title = 'Edit ThirdPartyProvider';

    thirdPartyProviderForm: FormGroup;
    thirdPartyProvider: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: ThirdPartyProviderService,
        private fb: FormBuilder
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

    
    updateThirdPartyProvider(name, registrationId, website, Bank, Consents): void {
        this.route.params.subscribe(params => {
                        this.service.updateThirdPartyProvider(name, registrationId, website, Bank, Consents, params['id'])
                            .subscribe(() => {
                    this.router.navigate(['/indexThirdPartyProvider']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editThirdPartyProvider(params['id']).subscribe(res => {
                this.thirdPartyProvider = res;
            });
        });
    }
}