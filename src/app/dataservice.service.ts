import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Response,Headers,RequestOptions } from '@angular/http';
import { details } from './details';
// import  'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  url= ' https://5df2226b.ngrok.io/api/Settings/GetDesignations';
  deleteUrl= 'https://5df2226b.ngrok.io/api/Settings/DeleteDesignation?DesignationId=';
  editUrl= 'https://5df2226b.ngrok.io/api/Settings/InsUpdateDesignation';
   constructor(private _http: HttpClient) {}

   getAllData() {
       return this._http.get(this.url);
   }

   deleteData(id) {
     const head = new HttpHeaders().set('Content-Type', 'application/json');
     return this._http.post(this.deleteUrl + id, {headers: head});
   }

   addData(item) {
     const body = JSON.stringify(item);
     const head = new HttpHeaders().set('Content-Type', 'application/json');
     return this._http.post(this.editUrl, body, {headers: head});
   }

   editData(item) {
     const head = new HttpHeaders().set('Content-Type', 'application/json');
     const body = JSON.stringify(item);
     return this._http.post(this.editUrl , body, {headers: head});
   }

  //  deleteAll(item:details[]){
  //   let body=JSON.stringify(item);
  //   let headers=new Headers({'Content-Type':'application/json'});
  //   let requestoption=new RequestOptions({headers:headers});
  //   return this._http.post(this.url+0,body,requestoption).map((res:Response)=>res.json());
  // }

}
