import { Component } from '@angular/core';
import {ContactsListService} from '../../services/contacts-list.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent {

  nameContact: string;
  email: string;
  phone: string;

  formGroup:FormGroup;

  constructor(private readonly contactsService: ContactsListService){};

  ngOnInit(){
    this.formGroup = new FormGroup({
      nameContact: new FormControl(this.nameContact, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      email: new FormControl(this.email, [Validators.required, Validators.pattern('[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2}')]),
      phone: new FormControl(this.phone, [Validators.pattern('[0-9.-]{12}')])
    });
  }

  createContact(){
    if (this.formGroup.invalid) {
      return;
    }

    this.contactsService.addContact({
      name: this.formGroup.value.nameContact,
      email: this.email,
      phone: this.phone
    });

    this.formGroup.reset();
  }

}
