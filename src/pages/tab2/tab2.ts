import {FotoService} from './../services/services';
import {Component} from '@angular/core';

@component({
  selector : 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class tab2page {
  constructor(public fotoService:FotoService) {}

  TambahFoto(){
    this.fotoService.tambahFoto();
  }
}