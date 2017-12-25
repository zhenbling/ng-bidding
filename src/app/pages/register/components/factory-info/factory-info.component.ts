import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-factory-info',
  templateUrl: './factory-info.component.html',
  styleUrls: ['./factory-info.component.scss']
})
export class FactoryInfoComponent implements OnInit {
  production;
  factoryForm: FormGroup; // <--- heroForm is of type FormGroup

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
  }
  ngOnInit() {
    this.factoryForm = this.fb.group({
      companyName: ['', Validators.required ],
      contactName: ['', Validators.required ],
      address: ['', Validators.required ],
      category: ['', Validators.required ],
      production: ['100', Validators.required ]
    });
    this.production = this.factoryForm.controls['production'].value;
    console.log('hello', this.production);
  }
  add() {
    // this.factoryForm.controls['production'].value = this.production ++;
    // alert('hello');
    const prd = 2;
    // prd.text(this.production ++);
    console.log('hello', ++this.production);
  }
  onSubmit() {
    console.log(this.factoryForm.value);
    console.log(this.factoryForm.controls['production'].value);
  }

}
