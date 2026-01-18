import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxParticleHeader } from 'ngx-shared-headers';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxParticleHeader],
  template: `
    <ngx-particle-header>
      <h1>Hello, {{ title() }}</h1>
    </ngx-particle-header>
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('ngx-shared-headers-demo');
}
