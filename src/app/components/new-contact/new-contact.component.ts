import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validatorsValues } from 'src/app/constants/new-contact.constant';
import { ContactsListService } from '../../services/contacts-list.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss'],
})
export class NewContactComponent {
  validatorsValues = validatorsValues;

  form = new FormGroup({
    name: new FormControl<string>(null, [
      validatorsValues.name.required && Validators.required,
      Validators.minLength(validatorsValues.name.minLength),
      Validators.maxLength(validatorsValues.name.maxLength),
    ]),
    email: new FormControl<string>(null, [
      validatorsValues.email.required && Validators.required,
      Validators.pattern(validatorsValues.email.pattern),
    ]),
    phone: new FormControl<number>(null, [
      Validators.minLength(validatorsValues.phone.minLength),
      Validators.maxLength(validatorsValues.phone.maxLength),
    ]),
  });

  constructor(private readonly contactsService: ContactsListService) { }

  createContact() {
    const { name, email, phone } = this.form.value;
    if (this.form.valid && name && email) {
      this.contactsService
        .addContact({ name, email, phone })
        .subscribe(({ name }) => {
          alert(`L'utilisateur ${name} a été ajouté avec succès !`);
        });

      this.form.reset()
    } else {
      // Afficher les erreurs a l'utilisateur
      console.log(this.form);
    }
  }
}
