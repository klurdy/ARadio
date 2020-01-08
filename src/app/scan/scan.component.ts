import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  constructor(private service: AppService) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      var dataURL = reader.result;
      var output = document.getElementById('radioImg');
      output.src = dataURL;
      
      this.service.scanImage(output);

      // navigate to recommendations
    });

    reader.readAsDataURL(event.target.files[0]);
  }

}
