import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../../../hero-lib/src/lib/core/navigation/navigation.component';
import { HeroDetailsComponent } from '../../../hero-lib/src/lib/heroes/hero-details/hero-details.component';
import { SpinnerComponent } from '../../../hero-lib/src/lib/share/spinner/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SpinnerComponent,
    NavigationComponent,
    HeroDetailsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hero-app';
}
