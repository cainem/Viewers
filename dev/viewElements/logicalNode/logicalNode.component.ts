import {Component, Input} from 'angular2/core';
import {LogicalNodeDto} from '../../data/logicalBuildingUnitDisplay/logicalNodeDto';
import {LogicalNodeFunctionDto} from '../../data/logicalBuildingUnitDisplay/logicalNodeFunctionDto';
import {LogicalImplicitConnectionSettingsDto} from '../../data/logicalBuildingUnitDisplay/logicalImplicitConnectionSettingsDto';
import {WoollyKey} from '../woollyKey/woollyKey.component';
import {LogicalNodeFunctionComponent} from '../logicalNodeFunction/logicalNodeFunction.component';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'logicalNode',
    templateUrl: './dev/viewElements/logicalNode/logicalNode.html',
    directives: [WoollyKey, LogicalNodeFunctionComponent, Collapse],
    styleUrls: ['./dev/viewElements/logicalNode/logicalNode.css']
})
export class LogicalNodeComponent {    
    @Input() model : LogicalNodeDto    
}
