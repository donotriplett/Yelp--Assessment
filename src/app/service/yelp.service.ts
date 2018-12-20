import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Authorization": "Bearer gb9MZQIK6peV2YkNgtrzyqPp9y6rxXSIagEv_NBvRdNdqMbnTM2B8rWuk6jYNkFZcWUwSyo9pcsCL2EyK0WlVkTONrK6R1OGZq5ooYf9L9P5CTNXzrh_W7oGbbEaXHYx"
  })
}

@Injectable({
  providedIn: 'root'
})

export class YelpService {
  APIURL = "https://api.yelp.com/v3/businesses/search"

  constructor(private http: HttpClient) { }

  getYelp(yelp): Observable<any> {
    console.log(yelp)
    return this.http.get(`https://cors-anywhere.herokuapp.com/${this.APIURL}?price=${yelp.value.price}&location=${yelp.value.city},${yelp.value.state}`, httpOptions)
  }
}
