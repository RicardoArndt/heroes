import {Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Hero} from '../hero-detail/hero.model';
import {ToastrService} from 'ngx-toastr';
import {HeroService} from '../service/hero.service';
import {HeroesError} from '../../error/HeroesError';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  @Input() hero: Hero;

  public loading;

  heroForm: FormGroup;

  constructor(private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private heroService: HeroService,
              private heroError: HeroesError,
              private toastr: ToastrService) {
  }

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

  onFileChange($event) {
    const reader = new FileReader();
    const image = this.heroForm.controls['image'];
    const blob = new Blob([image]);

    reader.addEventListener('load', () => {
      image.setValue(reader.result);
    }, false);

    if (blob) {
      reader.readAsDataURL(blob);
    }
  }

  onSubmit() {
    this.loading = true;

    if (this.hero) {
      this.heroService.update(this.hero).subscribe(response => {
        this.loading = false;
        this.toastr.success('Cadastrado com sucesso', 'Success!');
      }, error => {
        this.loading = false;
        this.heroError.handleError(error);
      });
    } else {
      this.hero = new Hero('', this.heroForm.value.name,
        this.heroForm.value.image,
        this.heroForm.value.atack,
        this.heroForm.value.defense);


      console.log(this.hero);

      this.heroService.saveHero(this.hero)
        .subscribe(response => {
          this.loading = false;
          this.hero = response;
        }, error => {
          this.loading = false;
          this.heroError.handleError(error);
        });
    }
  }

  getInfo(valor: any): string {
    if (valor != null && valor.actual > valor.max)
      return valor.max;
  }
}
