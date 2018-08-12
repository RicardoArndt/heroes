import {HttpHeaders} from '@angular/common/http';

export const DEV = {
  'API_URL': 'http://localhost:7000/api',
  'HTTP_OPTIONS' : {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }
};
