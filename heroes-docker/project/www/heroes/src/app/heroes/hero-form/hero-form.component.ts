import {Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Hero} from '../models/hero.model';
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
  }

  createForm() {
    if (this.hero) {
      this.heroForm = this.fb.group({
        name: [this.hero.Name, Validators.required],
        image: this.hero.Images,
        atack: [this.hero.Atack, [Validators.required, Validators.max(1000)]],
        defense: [this.hero.Defense, [Validators.required, Validators.max(1000)]]
      });
    } else {
      this.heroForm = this.fb.group({
        name: ['', Validators.required],
        image: null,
        atack: ['', [Validators.required, Validators.max(1000)]],
        defense: ['', [Validators.required, Validators.max(1000)]]
      });
    }
  }

  /**
   * @description Essa função é chamada quando ocorre o change no campo file, verifica se existe hero, se não, cria. Verifica se files existe.
   * Cria um laço em files. Carrega o file e seta o mesmo no formulário se não existir images no hero ele cria para que no próximo laço
   * de repetição seja possível dar um push (obs: não consigo dar push sem antes ter o obj criado). Chama uma nova instância do FileReader
   * no final de cada laço pois é necessário limpar o readAsDataURL antes de chamá-lo novamente.
   * @param event
   */
  onFileChange($event) {
    const file = $event.target.files[0];

    if (file.type !== 'image/jpeg') {
      alert('Favor enviar somente imagens JPEG');
      location.reload();
    }else {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.heroForm.get('image').setValue(e.currentTarget['result']);
        this.hero.Images = this.heroForm.get('image').value.value;
      };

      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (!this.hero) {
      this.hero = new Hero(
        this.heroForm.value.name,
        this.heroForm.value.image,
        this.heroForm.value.atack,
        this.heroForm.value.defense);

      this.hero.Id = null;
    }

    this.loading = true;

    const id = this.hero.Id;

    this.hero = new Hero(this.heroForm.value.name,
      this.heroForm.value.image,
      this.heroForm.value.atack,
      this.heroForm.value.defense);

    if (id) {
      this.hero.Id = id;

      this.heroService.update(this.hero).subscribe(response => {
        this.loading = false;
        this.toastr.success('Atualizado com sucesso', 'Success!');
      });
    } else {
      this.heroService.saveHero(this.hero)
        .subscribe(response => {
          this.loading = false;
          this.hero = response;
          this.toastr.success('Cadastrado com sucesso', 'Success!');
        });
    }

    location.reload();
  }

  getInfo(valor: any): string {
    if (valor != null && valor.actual > valor.max)
      return valor.max;
  }
}
