import { templateJitUrl } from "@angular/compiler";
import { Component, 0nInit } from '@angular/core';

export interface fileFoto {
  name : string;
  path : string;
}

@Component({
  selector: 'app-tab3'
  templateUrl : './tab3.page.html',
  styleUrls :['./tab3.page.scss'],
})

export class Tab3Page implements 0nInit {
  constructor(){
    ng0nInit (){
      
    }
    hapusFoto (){
       for(var index in this.fotoService.datafoto){
        const imgFilepath = imgStorage/${this.fotoService.dataFoto[index].filePath}
        this.afStorage.hapus()
    }
    uploadFoto (){
      for(var index in this.fotoService.datafoto){
        const imgFilepath = imgStorage/${this.fotoService.dataFoto[index].filePath}
        this.afStorage.upload()
      }
    }
  }
}