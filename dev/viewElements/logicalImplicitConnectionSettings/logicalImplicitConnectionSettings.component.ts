import {Component, Input} from 'angular2/core';
import {LogicalImplicitConnectionSettingsDto} from '../../data/logicalBuildingUnitDisplay/logicalImplicitConnectionSettingsDto';
import {LogicalNodeFunctionComponent} from '../logicalNodeFunction/logicalNodeFunction.component';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'logicalImplicitConnectionSettings',
    templateUrl: './dev/viewElements/logicalImplicitConnectionSettings/logicalImplicitConnectionSettings.html',
    directives: [Collapse],
    styleUrls: ['./dev/viewElements/logicalImplicitConnectionSettings/logicalImplicitConnectionSettings.css']
})
export class LogicalImplicitConnectionSettingsComponent {    
    @Input() model : LogicalImplicitConnectionSettingsDto    
}