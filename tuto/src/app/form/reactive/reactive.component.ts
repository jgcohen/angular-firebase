import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
 campaignForm! : FormGroup 
  constructor( private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.initCampaignFOrm()
  }
  initCampaignFOrm(): void {
  this.campaignForm = this.formBuilder.group({ 
    title:'',
    description: '',
    players: 0
  });
  }
  onSubmit():void{
    console.log(this.campaignForm.value)
      }
}
