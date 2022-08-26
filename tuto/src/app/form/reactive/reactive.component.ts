import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Campaign } from 'src/app/models/campaign';
import { CampaignsService } from 'src/app/services/campaigns.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit, OnDestroy {
   campaigns: Campaign[] = []
  subscription!:Subscription
  campaignForm!: FormGroup
  constructor(private formBuilder: FormBuilder,
    private campaignService: CampaignsService) { }
    
    ngOnInit(): void {
      this.initCampaignFOrm()
      this.subscription = this.campaignService.campaignSubject.subscribe({
        next:(campaigns:Campaign[])=> {
          this.campaigns = campaigns
        }
      })
      this.campaignService.getCampaigns()
    }
    initCampaignFOrm(): void {
      this.campaignForm = this.formBuilder.group({
        index: [null],
      title: ['', Validators.required],
      description: '',
      players: 0
    });
  }
  onSubmit(): void {
    const campaignIndex = this.campaignForm.value.index
    const campaign = this.campaignForm.value
    if (campaignIndex === null || campaignIndex === undefined) { //creation
      delete campaign.index
      this.campaignService.createCampaign(campaign).catch(console.error)
    } else {  // MOdification
      delete campaign.index
      this.campaigns = this.campaignService.editCampaign(campaign,campaignIndex)
    }
    this.campaignForm.reset()
  }
  
  onEdit(campaign: any, index:number): void {
    this.campaignForm.setValue({...campaign,index})
    
  }
  onDelete(index: number): void {
    this.campaigns = this.campaignService.deleteCampaign(index)
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
