import { Injectable } from 'angular/core';
import {CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { PlatformLocation } from '@angular/common';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})

export class FotoService {
  public datafoto : Photo[] =[]
  private keyFoto : string = "foto";
  private platform : Platform
  constructor(platform: Platform){
    this.platform=platform;
  }

  public async tambahFoto(){
    const Foto = await Camera.getPhoto({
      resultType : CameraResultType.Uri,
      source : CameraSource.Camera,
      quality : 100
    });
    console.log(Foto);

    this.datafoto.unshift({
      filePath:"load",
      webviewPath:Foto.webPath
    });
    Storage.set({
      key.this.keyFoto,
      value:JSON.stringify(this.datafoto)
    })
  }

  public async simpanFoto(foto : CameraPhoto){
    const base64Data = await this.readAsBase64(foto);

    const namaFile = new Date().getTime+'.jpeg';
    const simpanFile = await Filesystem.writeFile({
      path : namaFile,
      data : base64Data,
      directory : FileSystemDirectory.data
    });
    return {
      filePath : namaFile,
      webviewPath: foto.webPath
    }
  }

  private async readAsBase64 = (foto : CameraPhoto){
    const response = await fetch (foto.webPath);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  convertBlobToBase64 = (blob : Blob) => new Promise((resolve,reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  })
  public async loadFoto(){
    const listFoto = await Storage.get ({key:this.keyFoto});
    this.datafoto = JSON.parse(listFoto.value) || [];

    for (let foto of this.datafoto){
      const readFile = await Filesystem.readFile({
        path : foto.filePath,
        directory :FilesystemDirectory.Data
      });
      foto.webviewPath = 'data:image/jpeg;base64,${readFile.data}';
    }
    console.log(this.datafoto);
  }

}

export interface Photo {
  filePath : string;
  webviewPath : string;
}