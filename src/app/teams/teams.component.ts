import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  name:string='';
  website:string='';
  phoneNumber:number;

  public teamArray: any[][];

  product: any[] = [
    {url: 'assets/csk.png', name: "Chennai Super Kings", website:'https://www.chennaisuperkings.com', contact:'+91 22-22800300'},
    {url: 'assets/Delhi.png', name: "Delhi Capitals", website:'http://www.delhidaredevils.com', contact:'+91 22-22800300'},
    {url: 'assets/KKR.png', name: "Kolkata Knight Riders", website:'http://www.kkr.in', contact:'+91 22-22800300'},
    {url: 'assets/KXI.png', name: "Kings XI Punjab", website:'http://www.kxip.in', contact:'+91 22-22800300'},
    {url: 'assets/MI.png', name: "Mumbai Indians", website:'http://www.mumbaiindians.com', contact:'+91 22-22800300'},
    {url: 'assets/RCB.png', name: "Royal Challengers Banglore", website:'https://www.royalchallengers.com', contact:'+91 22-22800300'},
    {url: 'assets/RR.png', name: "Rajasthan Royals", website:'https://www.rajasthanroyals.com', contact:'+91 22-22800300'},
    {url: 'assets/SRH.png', name: "Sunrisers Hyderabad", website:'http://www.sunrisershyderabad.in', contact:'+91 22-22800300'}
  ]
  constructor() {}

  ngOnInit(): void {
  }

}
