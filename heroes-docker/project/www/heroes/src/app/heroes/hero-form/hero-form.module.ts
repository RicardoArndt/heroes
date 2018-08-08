import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        HeroFormComponent
    ],
    exports: [
        HeroFormComponent
    ]
})

export class HeroFormModule {}