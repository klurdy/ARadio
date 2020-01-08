import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  modelURL: string;
  model: any;
  result: any;
  img: any;

  classes = {
    0: 'NORMAL',
    1: 'BACTERIA',
    2: 'VIRUS'
  }
  
  constructor() {
    this.modelURL = 'https://firebasestorage.googleapis.com/v0/b/teebu-informatics.appspot.com/o/ai-models%2Fmodel.json?alt=media&token=a8fa964d-a632-4988-a71c-92f60e959c41';
    this.loadTFModel();
    this.img = null;
    this.result = null;
   }

  scanImage(image: any) {
    this.result = this.model.predict(tf.browser.fromPixels(image));
    this.img = image;
  }

  async loadTFModel(){
    this.model = await tf.loadGraphModel(this.modelURL);
  }
}
