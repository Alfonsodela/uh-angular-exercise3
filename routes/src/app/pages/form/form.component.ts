import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInterface } from 'src/app/core/components/models/form.models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() public form?: FormInterface;
  public createForm?: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lName: new FormControl('', Validators.required),
      nif: new FormControl('', Validators.required),
      nTlf: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });    
  }

}
