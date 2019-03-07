import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit, OnChanges {

  formInfo: FormData;

  ngOnInit(): void {
    this.formInfo = new FormData();
  }

  onSubmit() {

    alert(JSON.stringify(this, null, 1));

  }

  maskPhone(e) {
    let value = e.target.value.replace(/[^\d]/g, '');
    if (value.length >= 3) {
      value = '(' + value.substr(0, 3) + ')' + value.substr(3);
    }
    console.log(value);
  }
}
