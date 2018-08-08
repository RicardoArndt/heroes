import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroFormModule } from '../hero-form/hero-form.module';
import { HeroesRoutingModule } from '../heroes-routing.module';
import { ModalModule } from 'ngx-modal';

@NgModule({
    imports: [
        CommonModule,
        HeroFormModule,
        HeroesRoutingModule,
        ModalModule
    ],
    declarations: [
        HeroDetailComponent
    ]
})

export class HeroDetailModule {}