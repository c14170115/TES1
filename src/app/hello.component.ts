import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}

<ion-tabs>

  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab1">
      <ion-icon name="person-circle-outline"></ion-icon>
      <ion-label>Data Pribadi</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab2">
      <ion-icon name="camera-outline"></ion-icon>
      <ion-label>FOTO</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab3"></ion-tab-button>
      <ion-icon name="arrow-up-circle-outline"></ion-icon>
      <ion-label>STORAGE</ion-label>
    </ion-tab-button>
  </ion-tab-bar>

  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab4">
      <ion-icon name="apps-outline"></ion-icon>
      <ion-label>GALERI</ion-label>
    </ion-tab-button>

  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab5">
      <ion-icon name="brush-outline"></ion-icon>
      <ion-label>SARAN</ion-label>
    </ion-tab-button>

</ion-tabs>