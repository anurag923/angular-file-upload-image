import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') data: NgForm;
  name = 'Angular';
  img: File;
  enter_name = '';
  your_name = '';
  your_new_name = '';

  constructor(private http: HttpClient) {}
  onFileChanged(event) {
    this.img = event.target.files[0];
  }

  onSubmit() {
    console.log(this.data.value.new_name);
    const formdata = new FormData();
    formdata.append('client_id', 'CLT.00001');
    formdata.append('project_id', 'PRJ.00002');
    formdata.append('inspection_id', 'CLT.00001');
    formdata.append('image', this.img, this.img.name);
    if (formdata.append) {
      this.http
        .post(
          '3.144.201.34:8000/api/account/license/holder/license/project/area/inspection/submit/image',
          formdata
        )
        .subscribe((res) => {
          console.log('res', res);
        });
      // console.log(this.img);
      // this.your_new_name = this.data.value.new_name;
      // console.log(this.data);
      // alert('success');
    } else {
      alert('not success');
    }
  }
}
