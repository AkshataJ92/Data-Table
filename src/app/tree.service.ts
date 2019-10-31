import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TreeNode } from './treenode';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor(private http: Http) { }

  getFilesystem() {
    return this.http.get('assets/filesystem.json')
                .toPromise()
                .then(res => <TreeNode[]> res.json().data);
}
}
