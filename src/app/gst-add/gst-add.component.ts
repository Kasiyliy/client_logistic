import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StorageService} from '../services/storage.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private storageService: StorageService, private toastr: ToastrService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      storage_name: ['', Validators.required],
    });
  }

  addStorage(name: string) {
    this.storageService.addStorage(name).toPromise().then(res => {
      this.toastr.success('Added!', 'Success!');
      alert('Added');
    }).catch(error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
