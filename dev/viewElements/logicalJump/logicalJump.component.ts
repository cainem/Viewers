import {Component, Input} from 'angular2/core';
import {LogicalJumpDto} from '../../data/logicalBuildingUnitDisplay/logicalJumpDto';
import {WoollyKey} from '../woollyKey/woollyKey.component';
import {ContextBasedActionSwitchComponent} from '../contextBasedActionSwitch/contextBasedActionSwitch.component';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'logicalJump',
    templateUrl: './dev/viewElements/logicalJump/logicalJump.html',
    directives: [WoollyKey, Collapse, ContextBasedActionSwitchComponent],
    styleUrls: ['./dev/viewElements/logicalJump/logicalJump.css']
})
export class LogicalJumpComponent {    
    @Input() model : LogicalJumpDto    
}
