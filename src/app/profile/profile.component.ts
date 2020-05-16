import { Component, OnInit } from '@angular/core';
import { StorageutilService } from '../services/storageutil.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  historyCount = 0;
  storageUtilService: StorageutilService;
  
  constructor(storageUtilService: StorageutilService) { 
this.storageUtilService = storageUtilService;
    
  }

  ngOnInit(): void {
    this.updateHistoryCount();
  }


  updateHistoryCount() {
    this.historyCount = this.storageUtilService.getHistoryCount();
  }
}
