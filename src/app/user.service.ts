import {Http} from '@angular/http';
import {Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from "@angular/core";
import {Post} from './post';

@Injectable()
export class UserService {

 //  private _url = "http://jsonplaceholder.typicode.com/posts";
     private _url = "https://chem-d02eb.firebaseio.com/.json?auth=qjBGlSBxCaGyRkOJVovBW1lpQzj1xu6yYsctolPe";
//    constructor(private _jsonp: Jsonp){
    constructor(private _http: Http){

    }
   getPosts(): Observable<Post[]>{
      return this._http.get(this._url)
//      return this._jsonp.get(this._url)      
        .map(res => res.json());
   }

}
