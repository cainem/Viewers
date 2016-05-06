import {Component, Input} from 'angular2/core';
import {LogicalThreadCreateDto} from '../../data/logicalBuildingUnitDisplay/logicalThreadCreateDto';
import {WoollyKey} from '../woollyKey/woollyKey.component';
import {ContextBasedActionSwitchComponent} from '../contextBasedActionSwitch/contextBasedActionSwitch.component';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'logicalThreadControl',
    templateUrl: './dev/viewElements/logicalThreadControl/logicalThreadControl.html',
    directives: [WoollyKey, Collapse, ContextBasedActionSwitchComponent],
    styleUrls: ['./dev/viewElements/logicalThreadControl/logicalThreadControl.css']
})
export class LogicalThreadControlComponent {    
    @Input() model : LogicalThreadCreateDto    
}
