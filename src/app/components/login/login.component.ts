import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.credentials.username!=null && this.credentials.password!=null){
     this.loginService.getTokenFromServer(this.credentials).subscribe(
       (response:any)=>{
          console.log(response.token);
          this.loginService.loginUser(response.token);
          window.location.href="/dashboard";
       },error=>{

          console.log();
       }
     );
    }
  }
}
