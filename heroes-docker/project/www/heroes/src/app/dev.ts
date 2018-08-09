import {HttpHeaders} from '@angular/common/http';

export const DEV = {
  'API_URL': 'http://localhost:8000',
  'HTTP_OPTIONS' : {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': ''
    })
  }
};
