import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Repo } from './models';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public repos$: Observable<Repo[]>;

  constructor(private readonly _httpClient: HttpClient) { }

  ngOnInit() {
    this.repos$ = this._httpClient.get<Repo[]>('https://api.github.com/users/handsomeromanian/repos');
    this.repos$.pipe(tap(x => console.log(x)))
  }

  public goToUrl(url: string) {
    window.open(url, '_blank');
  }

}

