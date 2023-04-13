import { Component, OnInit } from '@angular/core';
import {ContactsListService} from '../../services/contacts-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  contacts = [];

  constructor(private readonly contactsService: ContactsListService) { }

  ngOnInit(): void {
    this.contactsService.getList().subscribe(
      (contacts: any[]) => {
        for(const contact of contacts){
          this.contactsService.getContactDetails(contact.id).subscribe(
            contact => this.contacts.push(contact)
          )
        }
      }
    );
  }

  beautifyPhone(phone: string): string {
    //do the beautifing, no time here, adding space every 2 chars
    return phone;
  }

  deleteContact(contactName: string): void {
    //Needs to add the possibility to delete the contact with the service. And to identify a contact with an id other than with the name
    console.log('Delete contact : ' + contactName);
  }

  editContact(contactName: string): void {
    //Needs to add the possibility to edit the contact with the service. And to identify a contact with an id other than with the name
    console.log('Edit contact : ' + contactName);
  }

}
