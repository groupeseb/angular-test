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

}
