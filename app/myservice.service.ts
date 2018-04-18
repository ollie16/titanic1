

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class MyserviceService {
  private _url = '/assets/convertcsv.json';

  constructor(private _http: Http) {  }

  getResult() {
    return this._http.get(this._url)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);

  }
  private _errorHandler(error: Response){
    console.error(error);
    return Observable.throw(error || 'Server Error' );
  }

}


