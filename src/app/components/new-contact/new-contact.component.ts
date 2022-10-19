import { Component, OnInit } from '@angular/core';
import {ContactsListService} from '../../services/contacts-list.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent {

  name: string;
  email: string;
  phone: string;

  constructor(private readonly contactsService: ContactsListService){};

  createContact(){
    this.contactsService.addContact({
      name: this.name,
      email: this.email,
      phone: this.phone
    });

    this.name = '';
    this.email = '';
    this.phone = '';
  }

}
