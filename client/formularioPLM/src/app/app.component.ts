import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../app/services/user.service';
import { UploadService } from '../app/services/upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formularioPLM';
  uploadedFiles: Array<File>;

  constructor(private fb: FormBuilder, private userService: UserService, private serviceUpload: UploadService) {

  }

  User = { nombre: '', apellido: '', docType: '', docIdent: '', email: '', celular: '', fechaNacimiento: null };

  formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  ngOnInit() {

  }

  registrar(form) {
    console.log('objeto', this.User);
    this.userService.createUser(this.User).subscribe(res => {
      console.log(res);
    });
  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  upload() {
    const formData = new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append('uploads[]', this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.serviceUpload.uploadFile(formData).subscribe((res: any) => {
      console.log('response received is ', res);
      alert(res.message);
    });
  }

  public onSubmit(): void {

  }

}
