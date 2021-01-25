import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signup: any = {};
  id: any;
  userId:any;
  constructor(private accountService: AccountService,

    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {

  }


  submit() {
    console.log(this.signup);
    this.accountService.addUser(this.signup).subscribe(res => {
      console.log(res);

     localStorage.setItem('userId', res.data.loginObj.userId);
     
      localStorage.setItem('currentUser', JSON.stringify(res));
      localStorage.setItem('token', res.data.jwt);
      localStorage.setItem('isProductOwner', res.data.loginObj.agentObj.isProductOwner);
      this.router.navigate(['/chart'])
    }, err => {
      console.log(err);
    })
  
  }
  
}