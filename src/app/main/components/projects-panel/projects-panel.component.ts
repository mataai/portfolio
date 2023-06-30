import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Repo } from '../../models';

@Component({
  selector: 'app-projects-panel',
  templateUrl: './projects-panel.component.html',
  styleUrls: ['./projects-panel.component.scss'],
})
export class ProjectsPanelComponent implements OnInit {
  public repos$: Observable<Repo[]>;

  constructor(private readonly _httpClient: HttpClient) {
    this.repos$ = this._httpClient.get<Repo[]>(
      'https://api.github.com/users/handsomeromanian/repos'
    );
  }

  ngOnInit(): void {}
}
