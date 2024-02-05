import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

 registerForm: FormGroup

 registerMessage:any;
  constructor(private formBuilder:FormBuilder,
      private authService: AuthService,
      private router:Router, 
      private storage:Storage) {

        this.registerForm = this.formBuilder.group({
          email: new FormControl(
            "",
            Validators.compose([
              Validators.required,
              Validators.pattern(
                "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$ "
              )
            ])
          ),
          password: new FormControl(
            "",
            Validators.compose([])
          ),
          password_confirm: new FormControl(
            "",
            Validators.compose([]) 
          ),
          name: new FormControl(
            "",
            Validators.compose([]) 
          ),
          last_name: new FormControl(
            "",
            Validators.compose([])
          )

        })
       }

  ngOnInit() {
  }

  register (register_data:any){
    console.log(register_data);
    this.authService.loginUser(register_data).then(res => { 
      this.registerMessage=res;
      this.storage.set ('userLoggedIn', true);
      this.router.navigateByUrl ('/home');
      
    }).catch (err => {
      this.registerMessage=err;

    });
  }
  goToLogin () {

    this.router.navigateByUrl ('/login');

  }

}
