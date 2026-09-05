import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ATMService } from '../../../services/ATM.service';
import { ATM } from '../../../models/ATM';
import { SubBaseComponent } from '../../ATM/sub.base.component';

@Component({
    selector: 'app-create-aTM',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateATMComponent extends SubBaseComponent implements OnInit {

    title = 'Add ATM';

    aTMForm: FormGroup;
    aTM: ATM;

    constructor( http: HttpClient,
        private aTMService: ATMService,
        private fb: FormBuilder,
        private router: Router
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

    
    addATM(terminalId, location, Branch, Status): void {
        this.aTMService
        .addATM(terminalId, location, Branch, Status)
            .subscribe(() => {
                this.router.navigate(['/indexATM']);
            });
    }

    ngOnInit(): void {
    }
}