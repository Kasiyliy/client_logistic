import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StorageModel} from '../models/storageModel';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  apiUrl = 'http://localhost:8080/api/storages';

  storages: StorageModel[];
  constructor(private http: HttpClient) {
  }

  addStorage(name) {
    const storage = new StorageModel();
    storage.name = name;
    return this.http.post(this.apiUrl, storage);
  }

  getStorages(): Observable<StorageModel[]> {
    this.http.get<StorageModel[]>(this.apiUrl).toPromise(
    ).then(res => this.storages = res);
    return of(this.storages);
  }

  deleteStorage(id) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

}
