import {ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import * as html2canvas from 'html2canvas';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-wrapper',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf
  ],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {
  @Input() selectedStyle: any;
  @Input() postType: any;
  @Input() selectedFont: any;
  @ViewChild('wrapper') wrapperElement: ElementRef<any> | undefined
  @ViewChild('imageInput') inputElement: ElementRef<any> | undefined
  imageURL: string | ArrayBuffer | null = 'assets/images/default-user.png';

  constructor(private renderer: Renderer2) { }

  handleDownload() {
    // @ts-ignore
    html2canvas.default(this.wrapperElement?.nativeElement).then((canvas: HTMLCanvasElement) => {
      const image = canvas.toDataURL('image/png')
      this.downloadImage(image, 'container-screenshot.png')
    })
  }

  downloadImage(dataUrl: any, filename: string) {
    const a = this.renderer.createElement('a');
    this.renderer.setAttribute(a, 'href', dataUrl);
    this.renderer.setAttribute(a, 'download', filename);
    this.renderer.setStyle(a, 'display', 'none');
    this.renderer.appendChild(document.body, a);

    a.click();

    this.renderer.removeChild(document.body, a);
  }

  handleUpload() {
    if(this.inputElement) {
      this.inputElement.nativeElement.click()
    }
  }

  onFileSelect(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = e => this.imageURL = reader.result;
      reader.readAsDataURL(file);
    }
  }

}


