import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  modelURL: string;
  model: any;
  
  constructor() {
    this.modelURL = 'http://model-server.domain/download/model.json';
    this.loadTFModel();
   }

  scanImage(fileUrl: string) {

  }

  async loadTFModel(){
    this.model = await tf.loadLayersModel(this.modelURL);
  }
}
