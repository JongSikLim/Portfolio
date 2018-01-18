import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class OpenSidebarService {
  private data = new Subject<any>();
  constructor() {}
  changeState(msg: string){
    this.data.next(msg);
  }
  checkState():Observable<any>{
    return this.data.asObservable();
  }
}
