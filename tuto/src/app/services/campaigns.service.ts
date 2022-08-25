import { Injectable } from '@angular/core';
import { Campaign } from '../models/campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  campaigns: Campaign[] = []
  constructor() { }
  
  getCampaigns(): Campaign[] {
    return this.campaigns
  }

  createCampaign(campaign: Campaign): Campaign[] {
    this.campaigns.push(campaign)
    return this.campaigns
  }

  editCampaign(campaign: Campaign,index:number): Campaign[] {
    this.campaigns[index] = campaign
    return this.campaigns
  }

  deleteCampaign(index: number): Campaign[] {
    this.campaigns.splice(index, 1)
    return this.campaigns
  }
}
