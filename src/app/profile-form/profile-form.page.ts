import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Profile } from 'src/models';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.page.html',
  styleUrls: ['./profile-form.page.scss'],
})
export class ProfileFormPage implements OnInit {
  profileForm!: FormGroup;
  selectedFile!: File;
  fileName!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private profileService: ProfileService,
    private alertController: AlertController
  ) {}

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      jobTitle: ['', Validators.required],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)],
      ],
      profilePhoto: ['', Validators.required],
    });
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.fileName = this.selectedFile.name;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.profileForm.get('profilePhoto')?.setValue(base64Image);
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const profile: Profile = this.profileForm.value;
      const success = this.profileService.addProfile(profile);
      if (success) {
        this.router.navigate(['/tabs/profiles-list']);
      } else {
        this.presentAlert(
          'Error',
          'A profile with the same phone number already exists.'
        );
      }
    }
  }
}
