import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../interfaces/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsListService {

  constructor(private readonly http: HttpClient) { };

  getList() {
    return this.http.get('/api/contacts');
  }

  getContactDetails(id) {
    return this.http.get('/api/contacts/' + id);
  }

  addContact(contact: Omit<Contact, 'id'>): Observable<Contact> {
    return this.http.post<Contact>('/api/contacts', contact);
  }

}
