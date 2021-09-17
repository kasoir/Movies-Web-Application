import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  public getBy = async ( key?: string, value?: string ): Promise<any> => {
		// const url = /*URL FIRST*/ `${ ( !!key && !!value ) ? '/' + key + '/' + value : '' }`;
    // const result = await this.http.get( url ).toPromise();
    const fakeData = [
      {
        id:1,
        name:'movie1',
        director:'D1',
        year:'1996',
        actors:[
          {
            id:1,
            name:'actor1',
            age: 30,
            nationality: 'Syrian'
          },
          {
            id:2,
            name:'actor2',
            age: 31,
            nationality: 'Dutch'
          }
        ]
      },
      {
        id:2,
        name:'movie2',
        director:'D2',
        year:'1998',
        actors:[
          {
            id:1,
            name:'actor1',
            age: 30,
            nationality: 'Syrian'
          },
          {
            id:3,
            name:'actor3',
            age: 25,
            nationality: 'Dutch'
          }
        ]
      }
    ]
    const result = fakeData;
		return result;

	}
}
