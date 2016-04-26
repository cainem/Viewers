import {Component, Input} from 'angular2/core';
import {GenomePositionDto} from '../../data/infrastructure/genomePositionDto';

@Component({
    selector: 'genomePosition',
    templateUrl: './dev/viewElements/genomePosition/genomePosition.html',
    directives: [],
    styleUrls: ['./dev/viewElements/genomePosition/genomePosition.css']
})
export class GenomePositionComponent {
    @Input() model : GenomePositionDto    
}


