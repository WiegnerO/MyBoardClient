import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../model/message.model';
import { RatingService } from '../../services/rating.service';

@Component({
  selector: 'post-rate',
  templateUrl: './post-rate.component.html',
  styleUrls: ['./post-rate.component.css']
})
export class PostRateComponent implements OnInit {

  @Input() userMesaage: Message;
  ratedLink = '../../../assets/heart.jpg';
  unratedLink = '../../../assets/heart.png';
  heartImageLink = null;
  rated = false;
  rateValue: number;

  constructor(private ratingService: RatingService) { }

  ngOnInit(): void {
    this.rateValue = this.userMesaage.rates;
    this.isRated();
  }

  rate(): void{
    this.rated = !this.rated;
    this.checkLink();
    if (this.rated){
      this.addRating();
    }else {
      this.deleteRating();
    }
  }

  checkLink(): void{
    this.heartImageLink = this.rated ? this.ratedLink : this.unratedLink;
  }

   getRateValue(): void{
    this.ratingService.getMessageRating(this.userMesaage.id).toPromise()
      .then(res => {
        this.rateValue = res[0].count;
      });
    }

    isRated(): void{
      this.ratingService.isRated(this.userMesaage.id).toPromise()
        .then((res) => {
          this.rated = res;
          this.checkLink();
        });
    }

    addRating(): void{
      this.ratingService.addRating(this.userMesaage.id).toPromise()
        .then(() => {
          this.rateValue ++;
        });
    }

  deleteRating(): void{
    this.ratingService.deleteRating(this.userMesaage.id).toPromise()
      .then(() => {
        this.rateValue --;
      });
  }

}
