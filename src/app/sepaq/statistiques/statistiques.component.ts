import { Clipboard } from '@angular/cdk/clipboard';
import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'sepaq-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  public stats = {"web":0,"enfant":0,"chien":0,"golf":0}

  constructor(
    ) {
  }

  ngOnInit(): void {
  }

  downloadFile() {
    new Clipboard(document).copy(JSON.stringify(this.stats));
  }



}
