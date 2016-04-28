import {Component, Input} from 'angular2/core';
import {LogicalNodeFunctionDto} from '../../data/logicalBuildingUnitDisplay/logicalNodeFunctionDto';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';


@Component({
    selector: 'logicalNodeFunction',
    templateUrl: './dev/viewElements/logicalNodeFunction/logicalNodeFunction.html',
    directives: [Collapse],
    providers : [],
    styleUrls: ['./dev/viewElements/logicalNodeFunction/logicalNodeFunction.css']
})
export class LogicalNodeFunctionComponent {
    @Input() model : LogicalNodeFunctionDto;    
}