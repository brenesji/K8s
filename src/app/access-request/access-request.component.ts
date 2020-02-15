// app.component.ts

import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-access-request',
  templateUrl: './access-request.component.html',
  styleUrls: ['./access-request.component.css']
})
export class AccessRequestComponent {
  title = 'PCF Acess Request Tool '; //Here is where I change the title
   angForm: FormGroup;
   constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],   //Here is where I have to create the fields
       address: ['', Validators.required ],
       dc: ['', Validators.required ],
       org: ['', Validators.required ],
       space: ['', Validators.required ],
       AppName: ['', Validators.required ],
       role: ['', Validators.required ]
    });
  }
}