import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {DatePickerComponent} from 'ng2-date-picker';  
import {LeftoverService} from './../leftover.service'

@Component({
  selector: 'app-addleftover',
  templateUrl: './addleftover.component.html',
  styleUrls: ['./addleftover.component.css']
})
export class AddleftoverComponent implements OnInit {
  @ViewChild('dayPicker') datePicker: DatePickerComponent;  
  selectedDate: any;
  qty: any;
  comments: String = "";
  address = "";
  name = "";
  id= "";
  leftOverDetails = [];
  res: any;
  datePickerConfig = {
    "format": "MM-DD-YYYY",
    "placeholder": "select date"
  }
  open() { this.datePicker.api.open(); }  
 close() { this.datePicker.api.close(); }
  public radioGroupForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private leftoverService: LeftoverService) { }

  ngOnInit(): void {
      this.radioGroupForm = this.formBuilder.group({
        'model': 'veg'
      });
      this.res = JSON.parse(window.localStorage.getItem('data')).details
      this.getLeftOverDetails();
    }

    getLeftOverDetails() {
      this.leftoverService.getApiLeftOverListId(this.res.id).subscribe((res)=>{
        this.leftOverDetails = res.msg;
      })
    }

    deleteItem(id, useBy) {
      this.leftoverService.deleteFoodItem(id, useBy).subscribe((res)=>{
        // deleted
      })
    }

    addFoodItem() {
      
      let data = {
        "restaurantName": this.res.name,
        "foodType": this.radioGroupForm.value.model,
        "serves": this.qty,
        "address": this.res.location.address1 + " " + this.res.location.address2 + ", " + this.res.location.city + " - " + this.res.location.zip_code ,
        "useBy": this.selectedDate,
        "comments": this.comments,
        "id": this.res.id
      }
      this.leftoverService.addLeftOver(
        data
      )
      .subscribe(res => {
        // redirect to the home page
        console.log(res);
        this.leftOverDetails.push(data);
      }
      );
    }
    
  }
