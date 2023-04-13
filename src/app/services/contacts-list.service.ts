import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsListService {

  constructor(private readonly http: HttpClient){};

  getList() {
    return this.http.get('/api/contacts');
  }

  getContactDetails(id) {
    return this.http.get('/api/contacts/'+id);
  }

  addContact(contact) {
    return this.http.post('/api/contacts', contact).subscribe();
  }

}
