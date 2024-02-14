import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-generate-tin',
  standalone: true,
  imports: [RegisterComponent,CommonModule,RouterModule],
  templateUrl: './generate-tin.component.html',
  styleUrl: './generate-tin.component.css'
})
export class GenerateTinComponent implements OnInit{
  public http;
  public tinNumber:any="Cannot Find ID";

  constructor(private httpClient:HttpClient){
    this.http=httpClient;
  }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(){
    this.http.get("http://localhost:8080/user/"+RegisterComponent.tinId+"")
    .subscribe((data) => {
      console.log(data);
      this.tinNumber = data;
    });


  }
}
