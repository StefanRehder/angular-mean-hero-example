import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IHero } from '../../server/models/hero';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService {
  private serviceUrl: string = 'http://localhost:8210';

  constructor(private http: HttpClient) { }

  public async getHeroes(): Promise<IHero[]> {
    return this.http.get<IHero[]>(`${this.serviceUrl}/hero/list`)
      .toPromise();
  }

  public async getHero(name: string): Promise<IHero[]> {
    return this.http.get<IHero[]>(`${this.serviceUrl}/hero/${name}`)
      .toPromise();
  }

  public async createHero(hero: IHero): Promise<Object> {
    let bodyObj = hero;

    let headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put(`${this.serviceUrl}/hero/${name}`, bodyObj, { headers })
      .toPromise();
  }

  public deleteHero(name: string): Promise<Object> {
    return this.http.delete(`${this.serviceUrl}/hero/${name}`)
      .toPromise();
  }

  // This function is just here as an example
  public getHeroesObservable(): Observable<IHero[]> {
    return this.http.get<IHero[]>(`${this.serviceUrl}/hero/list`);
  }
}