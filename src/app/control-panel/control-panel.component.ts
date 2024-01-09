import { Component } from '@angular/core';
import { BackgroundStyle } from './style.model'
import {NgFor, NgForOf} from "@angular/common";
@Component({
    selector: 'app-control-panel',
    standalone: true,
    templateUrl: './control-panel.component.html',
    imports: [
        NgForOf,
        NgFor
    ],
    styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent {

    constructor (BackgroundStyle) {}


    availableStyles: BackgroundStyle[] = [
        { id: 0, color: '#ffffff', background: '#E66454', selected: true},
        { id: 1, color: '#000000', background: '#ff9800', selected: true},
        { id: 2, color: '#000000', background: '#0CB531', selected: true},
        { id: 3, color: '#000000', background: '#ff0050', selected: true},
        { id: 4, color: '#000000', background: '#ff0050', selected: true},
        { id: 5, color: '#000000', background: '#ff0050', selected: true},
    ];

    selectStyle(style: BackgroundStyle) {

    }

}
