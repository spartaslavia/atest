import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'lib-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  private readonly loadingService = inject(LoadingService);
  isLoading = this.loadingService.isLoading();
}
