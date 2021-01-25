import { Component, OnInit } from '@angular/core';
import { ChartService } from '../chart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chartObj: any = {};
  Array: any = [];
  id: any;
  userId:any;

  constructor(private accountService: ChartService,
    private router: Router,
    private route: ActivatedRoute) { }
    
  ngOnInit(): void {
    // this.userId = JSON.parse(localStorage.getItem('token')).data.loginObj.userId;
    this.userId = localStorage.getItem('userId');
    console.log(this.userId);
    this.accountService.getAllUsers().subscribe(response => {
      this.Array = response.data;
      console.log(this.Array);
    }, error => {
      console.log(error);
    })
this.submit() 

  }
  submit() {
    console.log(this.chartObj);
    this.chartObj.createdBy = this.userId;
    this.chartObj.accountId = "17699fc2-d436-41a4-af27-58712bf1a556";
    this.chartObj.currencyId = "f0751c9a-199a-49f0-b085-eaa049dd9410";
    this.accountService.addDetail(this.chartObj).subscribe(res => {
    console.log(res);
    this.router.navigateByUrl('/chart');
     }, err => {
      console.log(err);
    } )


  }
  //   logout() {
  //   localStorage.removeItem('currentUser');
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('allowedPortArr');
  //   this.router.navigate(['/login'])

  // }

}
