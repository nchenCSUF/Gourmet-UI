import { Component, OnInit, Input } from '@angular/core';
import  { leftOverItem } from './leftover-model';
import { Subscription } from 'rxjs';
import { LeftoverService } from './leftover.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{name}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
     <div class="row">
        <div class="col-4"> <b>Address</b> </div>
        <div class="col-8"> {{restaurantDetail.location.address1}}  {{restaurantDetail.location.address2}} {{restaurantDetail.location.city}} {{restaurantDetail.location.zip_code}}</div>
     </div>

     <div class="row">
      <div class="col-4"> <b>Contact number</b> </div>
      <div class="col-8"> {{restaurantDetail.display_phone}} </div>
    </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() restaurantDetail;
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
    console.log(this.restaurantDetail)
  }
}
@Component({
  selector: 'app-leftover',
  templateUrl: './leftover.component.html',
  styleUrls: ['./leftover.component.css']
})
export class LeftoverComponent implements OnInit {
  public itemList: leftOverItem[];
  constructor(private rListService: LeftoverService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getLeftOverDetails();
  }
  
  getLeftOverDetails() {
    this.rListService.getApiLeftOverList().subscribe((res)=>{
      this.itemList = res.msg;
    })
  }

  open(name) {
    const modalRef = this.modalService.open(NgbdModalContent);
    console.log(JSON.parse(window.localStorage.getItem('data')).details);
    modalRef.componentInstance.restaurantDetail = JSON.parse(window.localStorage.getItem('data')).details;
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.cdref.detectChanges();
  }

  formatDate(date){
    return new Date(date).toDateString();
  }

  isEmpty(obj) {
  for(var key in obj) {
    if(obj.hasOwnProperty(key))
        return false;
  }
  return true;
  }


}
