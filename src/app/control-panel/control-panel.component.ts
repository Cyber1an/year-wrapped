import {Component, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { BackgroundStyle } from './style'
import {NgFor, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
@Component({
    selector: 'app-control-panel',
    standalone: true,
    templateUrl: './control-panel.component.html',
    imports: [
        NgForOf,
        NgFor,
        FormsModule,
        NgIf
    ],
    styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent {

    @Output() backgroundStyle = new EventEmitter<BackgroundStyle>();
    @Output() selectedColor = new EventEmitter<string>()
    @Output() selectedBackgroundColor = new EventEmitter<string>()
    @Output() postType = new EventEmitter<number>()
    @Output() selectedFont = new EventEmitter<string>()

    textColor = '#000000';
    backgroundColor = '#E66454';
    font = 'roboto'

    availableStyles: BackgroundStyle[] = [
        { id: 0, color: '#000000', background: '#E66454', selected: false},
        { id: 1, color: '#ffdd00', background: '#6200ff', selected: false},
        { id: 2, color: '#00f8a3', background: '#6200ff', selected: false},
        { id: 3, color: '#000000', background: '#00DB4D', selected: false},
        { id: 4, color: '#000000', background: '#ff0050', selected: false},
        { id: 5, color: '#debaba', background: '#075264', selected: false},
    ];

    setSelectStyle(style: BackgroundStyle) {
        this.backgroundStyle.emit(style);
        this.availableStyles.map((style) => {
            style.selected = false;
        })
        this.availableStyles[style.id].selected = true;
    }

    changeColor() {
        // @ts-ignore
        this.backgroundStyle.emit({id: 7, color: this.textColor, background: this.backgroundColor, selected: true})
    }

    changePostType(postType: number) {
        this.postType.emit(postType)
    }

    changeFont(font: string) {
        console.log(font)
        this.selectedFont.emit(font)
    }
}
