import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ATMService } from '../../../services/ATM.service';
import { SubBaseComponent } from '../../ATM/sub.base.component';


@Component({
    selector: 'app-edit-aTM',
    standalone: false,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditATMComponent extends SubBaseComponent implements OnInit {

    title = 'Edit ATM';

    aTMForm: FormGroup;
    aTM: any;

    constructor( http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private service: ATMService,
        private fb: FormBuilder
) {
        super(http);
        this.aTMForm = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
                  terminalId: ['', Validators.required],
      location: ['', Validators.required],
      Branch: ['', ],
      Status: ['', ]
        });
    }

    
    updateATM(terminalId, location, Branch, Status): void {
        this.route.params.subscribe(params => {
                        this.service.updateATM(terminalId, location, Branch, Status, params['id'])
                            .then(() => {
                    this.router.navigate(['/indexATM']);
                });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.editATM(params['id']).subscribe(res => {
                this.aTM = res;
            });
        });
    }
}