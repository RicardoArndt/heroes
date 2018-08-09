import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Hero } from '../hero-detail/hero.model';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  @Input() hero: Hero;

  heroForm: FormGroup;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.createForm();
    console.log(this.heroForm);
  }

  createForm() {
    if (this.hero) {
      this.heroForm = this.fb.group({
        name: [this.hero.name, Validators.required],
        image: this.hero.image,
        atack: [this.hero.atack, [Validators.required, Validators.max(1000)]],
        defense: [this.hero.defense, [Validators.required, Validators.max(1000)]]
      });
    } else {
      this.heroForm = this.fb.group({
        name: ['', Validators.required],
        image: '',
        atack: ['', [Validators.required, Validators.max(1000)]],
        defense: ['', [Validators.required, Validators.max(1000)]]
      });
    }
  }

  onFileChange(event) {
    let reader = new FileReader();

    if (event.target.files && event.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      this.heroForm.patchValue({
        file: reader.result
      });

      this.cd.markForCheck();
    }
  };

  onSubmit() {
    if (this.hero){
      console.log("UPDATE");
    }else{
      console.log("SAVEa");
    }
  }

  getInfo(valor: any): string {
    if (valor != null && valor.actual > valor.max)
      return valor.max;
  }
}
