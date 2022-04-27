import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  checkArray:Array<any> = []
  checkboxes:Array<any> = [
    { name: 'Include Uppercase Alphabets(A-Z)', checked: 'false', key:"upperCase" },
    { name: 'Include Numbers(A-Z)', checked: 'false' ,key:"numbers"},
    { name: 'Include Special Characters(0-9)', checked: 'false' ,key:"specialChars"},
  ]
  title = 'generate-password';
  passLen = 1;
  generatedPassword = ''
  alphabetsLC = "abcdefghijklmnopqrstuvwxyz"
  alphabetsUC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  numbers="0123456789"
  specialChars = "!@#$%^&*()"

  constructor(){

  }


  ngOnInit(){
    
  }
  OnChange(){
    this.generatedPassword = ""
  }
  onCheckboxChange(e:any, key:string){
    this.generatedPassword = ""
    if (e.target.checked) {
     // console.log(e, key)
      this.checkArray.push(key);
    } else {
      
      this.checkArray.forEach((item,index) => {
       // console.log(index,key)
        if (item == key) {
          this.checkArray.splice(index,1);
         return
        }
       
      });
    }
   console.log(this.checkArray)
  }
  generatePassword(){
    this.generatedPassword = ""
    let dataSet = this.alphabetsLC;
    this.checkArray.map(ele =>{
      switch(ele){
        case "numbers": dataSet += this.numbers
                         break;
        case "upperCase": dataSet += this.alphabetsUC
                         break;
        case "specialChars": dataSet += this.specialChars
                         break;
      }
    })
  
    for(let i =0;i<this.passLen;i++){
      var randomNumber = Math.floor(Math.random() * dataSet.length);
     
      this.generatedPassword+= dataSet.charAt(randomNumber)
    }
   
    }
}
