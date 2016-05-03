import {Component, Input} from 'angular2/core';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';
import {Gene} from '../../data/logicalBuildingUnitDisplay/gene';
import {LogicalReaderReturnComponent} from '../logicalReaderReturn/logicalReaderReturn.component'

@Component({
    selector: 'gene',
    templateUrl: './dev/viewElements/gene/gene.html',
    directives: [Collapse, LogicalReaderReturnComponent],
    styleUrls: ['./dev/viewElements/gene/gene.css']
})
export class GeneComponent {
    @Input() model : Gene;
    @Input() index: number;
}