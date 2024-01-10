import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {WrapperComponent} from "./wrapper/wrapper.component";
import {ControlPanelComponent} from "./control-panel/control-panel.component";
import {BackgroundStyle} from "./control-panel/style";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WrapperComponent, ControlPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedStyle: BackgroundStyle | undefined;
  selectedPostType: number | undefined;
  selectedFont: string | undefined;

  applyStyle(data: BackgroundStyle) {
    this.selectedStyle = data;
  }
  changePostType(data: number) {
    this.selectedPostType = data;
  }

  changeFont(data: string) {
    this.selectedFont = data;
  }
}
