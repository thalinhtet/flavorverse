import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-ratings',
    templateUrl: './ratings.component.html',
    styleUrls: ['./ratings.component.css']
})
export class RatingsComponent {
    @Input() rating: number
    @Input() reviews: number
    @Input() ratingCountArray: string[][]
}
