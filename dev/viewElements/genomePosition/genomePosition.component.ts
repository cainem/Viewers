import {Component, Input} from 'angular2/core';
import {GenomePositionDto} from '../../data/infrastructure/genomePositionDto';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'genomePosition',
    templateUrl: './dev/viewElements/genomePosition/genomePosition.html',
    directives: [Collapse],
    styleUrls: ['./dev/viewElements/genomePosition/genomePosition.css']
})
export class GenomePositionComponent {
    @Input() model : GenomePositionDto    
}


