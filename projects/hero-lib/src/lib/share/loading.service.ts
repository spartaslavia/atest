import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingCount = 0;
  private loadingSignal = signal<boolean>(false);

  isLoading() {
    return this.loadingSignal.asReadonly();
  }

  show() {
    this.loadingCount++;
    this.loadingSignal.set(true);
  }

  hide() {
    this.loadingCount--;
    if (this.loadingCount === 0) {
      this.loadingSignal.set(false);
    }
  }
}
