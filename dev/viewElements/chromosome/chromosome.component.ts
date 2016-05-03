import {Component, Input} from 'angular2/core';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';
import {Chromosome} from '../../data/logicalBuildingUnitDisplay/chromosome';
import {GeneComponent} from '../gene/gene.component';

@Component({
    selector: 'chromosome',
    templateUrl: './dev/viewElements/chromosome/chromosome.html',
    directives: [Collapse, GeneComponent],
    styleUrls: ['./dev/viewElements/chromosome/chromosome.css']
})
export class ChromosomeComponent {
    @Input() model : Chromosome;
    @Input() index : number;
}