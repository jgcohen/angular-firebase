import { Injectable } from '@angular/core';
import { Campaign } from '../models/campaign';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  campaigns: Campaign[] = []
  constructor(
    private db: AngularFireDatabase
  ) { }
  
  getCampaigns(): Campaign[] {
    return this.campaigns
  }

  createCampaign(campaign: Campaign): Promise<Campaign> {
    return new Promise((resolve, reject) => { 
     this.db.list('campaigns').push(campaign).then(res=>{
      resolve(campaign)
     }).catch(reject)
    })
      
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
