import {Component, Input} from 'angular2/core';
import {ContextBasedActionSwitchDto} from '../../data/logicalBuildingUnitDisplay/contextBasedActionSwitchDto';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'contextBasedActionSwitch',
    templateUrl: './dev/viewElements/contextBasedActionSwitch/contextBasedActionSwitch.html',
    directives: [Collapse],
    styleUrls: ['./dev/viewElements/contextBasedActionSwitch/contextBasedActionSwitch.css']
})
export class ContextBasedActionSwitchComponent {    
    @Input() model : ContextBasedActionSwitchDto    
}