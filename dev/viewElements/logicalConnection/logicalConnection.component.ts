import {Component, Input} from 'angular2/core';
import {RouteConfig} from "angular2/router"
import {WoollyKey} from '../woollyKey/woollyKey.component';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';
import {LogicalConnectionDto} from '../../data/logicalBuildingUnitDisplay/logicalConnectionDto';


@Component({
    selector: 'logicalConnection',
    templateUrl: './dev/viewElements/logicalConnection/logicalConnection.html',
    directives: [WoollyKey, Collapse],
    styleUrls: ['./dev/viewElements/logicalConnection/logicalConnection.css']
})
export class LogicalConnectionComponent {
    @Input() model : LogicalConnectionDto    
}
