import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="springbootURL";
  constructor(private http:HttpClient) { }

  getTokenFromServer(credentials:any){
    //generating token from server side
    return this.http.post(`${this.url}/token`,credentials);

  }
  //for login user
  loginUser(token: string){
    localStorage.setItem("token",token);
  }
  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined || token=='' || token==null){
      return false;
    }else{
      return true;
    }
  }

  loggedOut(){
    localStorage.removeItem('token');
    return true;
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
