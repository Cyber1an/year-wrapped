import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {WrapperComponent} from "./wrapper/wrapper.component";
import {ControlPanelComponent} from "./control-panel/control-panel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WrapperComponent, ControlPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'custom-wrapped';
}
