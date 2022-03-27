import { Injectable } from '@angular/core';
import { CONTENT } from '../helper-files/contentDb'
import { Content } from '../helper-files/content-interface'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'
import { InMemoryDataService } from '../services/in-memory-data.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  private headerOptions = {
    headers: new HttpHeaders({
      'content-type': 'application.json'
    })
  }

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getContent(): Observable<Content[]>{
    console.log("Getting the content from the server");
    return this.http.get<Content[]>("api/content") 
  }

  addContent(item: Content): Observable<Content>{
    let httpReq = this.http.post<Content>("api/content", item, this.headerOptions)
    return httpReq
  }

  updateContent(item: Content): Observable<any>{
    let updateHttp = this.http.put("api/content", item, this.headerOptions)
    return updateHttp 
  }

  // getGameById(id: number): Observable<Content>{
  //   this.messageService.add(`Content Item at id: ${id}`)
  //   return of(CONTENT[id])
  // }

  // getGamesObservable(): Observable<Content[]>{
  //   this.messageService.add("Content array loaded!")
  //   return of(CONTENT)
  // }


}
