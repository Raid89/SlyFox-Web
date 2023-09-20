import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendContactService } from 'src/app/services/send-contact.service';
@Component({
  selector: 'sly-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})

export class FormContactComponent {
  public formUser!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private sendService: SendContactService){
    this.initFormUser()
  }

  initFormUser(): void{
    this.formUser = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      metodoComunicacion: ['email', Validators.required],
      mensaje: ['']
    });
  }



  sendForm(): void{
    this.sendService.sendForm(this.formUser.value).subscribe()
  }

}
