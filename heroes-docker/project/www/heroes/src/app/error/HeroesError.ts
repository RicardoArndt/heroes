import {ErrorHandler, Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class HeroesError implements ErrorHandler {

  constructor(private toastr: ToastrService) {}

  handleError(error: Error): void {
    this.toastr.error(error.message, 'Erro!');
  }
}
