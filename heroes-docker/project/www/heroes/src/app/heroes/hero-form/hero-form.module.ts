import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeroFormComponent } from './hero-form.component';
import {ErrorModule} from '../../error/error.module';
import {LoadingModule} from 'ngx-loading';
import {ImageUploadModule} from 'angular2-image-upload';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ErrorModule,
        LoadingModule,
        ImageUploadModule
    ],
    declarations: [
        HeroFormComponent
    ],
    exports: [
        HeroFormComponent
    ]
})

export class HeroFormModule {}
