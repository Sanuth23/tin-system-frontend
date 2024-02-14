import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component'
import { HomeComponent } from './pages/home/home.component'
import { GenerateTinComponent } from './pages/generate-tin/generate-tin.component'
import { RegisterComponent } from './pages/register/register.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,
            HomeComponent,GenerateTinComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tin-system';
}
