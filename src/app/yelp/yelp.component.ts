import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"
import { YelpService } from "../service/yelp.service"

@Component({
  selector: 'app-yelp',
  templateUrl: './yelp.component.html',
  styleUrls: ['./yelp.component.css']
})
export class YelpComponent implements OnInit {
  yelp: FormGroup
  price = [{ view: "$", value: 1 }, { view: "$$", value: 2 }, { view: "$$$", value: 3 }, { view: "$$$$", value: 4 }, { view: "$$$$$", value: 5 }]
  result
  rating
  delivers

  constructor(
    private fb: FormBuilder,
    private ys: YelpService
  ) { }

  ngOnInit() {
    this.yelp = this.fb.group({
      price: "",
      city: "",
      state: ""
    })
  }

  f() {
    return this.yelp.controls
  }

  setDelivers(d) {
    console.log(d)
    if (d.includes("delivery")) {
      this.delivers = "Delivers"
    } else {
      this.delivers = "Does not deliver"
    }
  }

  setRating(rating) {
    if (rating === 1) {
      this.rating = "⭐"
    } else if (rating === 1.5) {
      this.rating = "⭐1/2"
    } else if (rating === 2) {
      this.rating = "⭐⭐"
    } else if (rating === 2.5) {
      this.rating = "⭐⭐1/2"
    } else if (rating === 3) {
      this.rating = "⭐⭐⭐"
    } else if (rating === 3.5) {
      this.rating = "⭐⭐⭐1/2"
    } else if (rating === 4) {
      this.rating = "⭐⭐⭐⭐"
    } else if (rating === 4.5) {
      this.rating = "⭐⭐⭐⭐1/2"
    } else if (rating === 5) {
      this.rating = "⭐⭐⭐⭐⭐"
    } else {
      this.rating = " "
    }

  }

  submit(yelp) {
    this.ys.getYelp(yelp).subscribe(res => { console.log(res), this.result = res.businesses[0], this.setRating(res.businesses[0].rating), this.setDelivers(res.businesses[0].transactions) })
  }

}
