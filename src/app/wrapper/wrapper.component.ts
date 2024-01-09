import { Component } from '@angular/core';
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {

  imageURL: string | ArrayBuffer | null = 'assets/images/test-user.png';

  handleDownload() {
    const element = document.getElementById('wrapper')
    // @ts-ignore
    html2canvas.default(element).then((canvas) => {
      const image = canvas.toDataURL('image/png')

      this.downloadImage(image, 'container-screenshot.png')
    })
  }

  downloadImage(dataurl: any, filename: string) {
       var a = document.createElement("a");
       a.href = dataurl;
       a.setAttribute("download", filename);
       a.click();
  }

  handleUpload() {
    const input = document.getElementById('imageInput');
    if(input) {
        input.click()
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


