import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { GenerateTinComponent } from '../generate-tin/generate-tin.component';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule,CommonModule,HttpClientModule,GenerateTinComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public http;
  public isSubmissionDisabled = false;
  public static tinId:any;

  constructor(private httpClient:HttpClient){
      this.http=httpClient;
  }

  public user = {
    nameWithInitials:null,
    fullName:null,
    nic:null,
    birthday:null,
    birthCountry:null,
    gender:null,
    income:null,
    address:null,
    contactNumber:null,
    civilStatus:null,
    profession:null
  }

  createUser(){
    this.isSubmissionDisabled=true;
    this.http.post("http://localhost:8080/user",this.user)
    .subscribe((data:any) => {
        console.log(data); 
        RegisterComponent.tinId=data.id;
        this.isSubmissionDisabled=false;
        this.user = {
          nameWithInitials:null,
          fullName:null,
          nic:null,
          birthday:null,
          birthCountry:null,
          gender:null,
          income:null,
          address:null,
          contactNumber:null,
          civilStatus:null,
          profession:null
        };
    });
  }
}
