import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendContactService {

  constructor(private http: HttpClient) { }

  sendForm(data: any) {
    return this.http.post('https://formspree.io/f/myyqjqoj', data);
  }
}
