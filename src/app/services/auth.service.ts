import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser (credential:any) {
    return new Promise ( (accept , reject) =>{  
      if (credential.email == 'bryber2006@gmail.com' //&& credential.password == '123456'
      ){
        accept('login correcto');
      }else {
        reject('login incorrecto');
      }
    } 


     ); 
  }
}
