import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 loginForm: FormGroup;
 
 validation_messages= {
  email:[
    { type :"required" ,message:"el email es obligatorio."},
    { type :"pattern" ,message:"el email ingresado no es valido."}
  ]
}
loginMessage:any;

  constructor (private formBuilder:FormBuilder,
     private authService: AuthService, 
     private router:Router, 
     private storage:Storage) {

    this.loginForm = this.formBuilder.group({
      email: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern(
          "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")
      ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(14)

        ])
      )
    })
   }

  ngOnInit() {
  }

  login (login_data:any){
    console.log(login_data);
    this.authService.loginUser(login_data).then(res => { 
      this.loginMessage=res;
      this.storage.set ('userLoggedIn', true);
      this.router.navigateByUrl ('/intro');
      
    }).catch (err => {
      this.loginMessage=err;

    });
  }

}
