import { Injectable } from '@angular/core';
import { Campaign } from '../models/campaign';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  private campaigns: Campaign[] = []
  campaignSubject : BehaviorSubject<Campaign[]>= new BehaviorSubject(<Campaign[]>[])
  constructor(
    private db: AngularFireDatabase
  ) { }
  
  getCampaigns() :void{
    this.db.list('campaigns').query.limitToLast(10).once('value',snapshot=>{
      const campaignSnapshot = snapshot.val()
      const campaigns = Object.keys(campaignSnapshot).map(id=>({id,...campaignSnapshot[id]}))
      this.campaigns = campaigns
      this.dispatchCampaigns()
    })
  }

  dispatchCampaigns(){
    this.campaignSubject.next(this.campaigns)
  }
  createCampaign(campaign: Campaign): Promise<Campaign> {
    return new Promise((resolve, reject) => { 
     this.db.list('campaigns').push(campaign).then(res=>{
      const createdCampaign = {...campaign,id: <string>res.key}
      this.campaigns.push(createdCampaign)
      this.dispatchCampaigns()
      resolve(createdCampaign)
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
