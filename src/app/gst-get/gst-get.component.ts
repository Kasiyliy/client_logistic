import {Component, OnInit} from '@angular/core';
import {StorageModel} from '../models/storageModel';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {
  storages: StorageModel[];

  constructor(private storageService: StorageService) {}

  getStorages(): void {
    this.storageService.getStorages()
      .subscribe(storages => this.storages = storages);
  }

  deleteStorage(id: number) {
    this.storageService.deleteStorage(id).subscribe( data => {
      this.storages = this.storages.filter(u => u.id !== id);
    });
  }

  ngOnInit() {
    this.getStorages();
  }

}
