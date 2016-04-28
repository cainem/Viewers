import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {LogicalNodeComponent} from '../logicalNode/logicalNode.component';
import {LogicalConnectionComponent} from '../logicalConnection/logicalConnection.component';
import {GenomePositionComponent} from '../genomePosition/genomePosition.component';
import {ILogicalReaderReturn} from '../../data/logicalBuildingUnitDisplay/logicalReaderReturnDto';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'logicalReaderReturn',
    templateUrl: './dev/viewElements/logicalReaderReturn/logicalReaderReturn.html',
    directives: [LogicalNodeComponent, LogicalConnectionComponent, GenomePositionComponent, Collapse],
    providers : [],
    styleUrls: ['./dev/viewElements/logicalReaderReturn/logicalReaderReturn.css']
    
})
export class LogicalReaderReturnComponent {
    @Input() model : ILogicalReaderReturn;    
}