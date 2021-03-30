import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { FotoService } from "../services/services";

@Component({
  selector: "page-tab1",
  templateUrl: "tab1.html"
})


export class tab1Page {
  constructor (public fotoService:FotoService){}

  async ng0nInit(){
    await this.fotoService.loadFoto();
  }

  TambahFoto(){
    this.fotoService.tambahFoto();
  }
}

  