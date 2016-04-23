import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router"
import {LogicalNodeDto} from '../../data/logicalBuildingUnitDisplay/logicalNodeDto';
import {LogicalNodeFunctionDto} from '../../data/logicalBuildingUnitDisplay/logicalNodeFunctionDto';
import {LogicalImplicitConnectionSettingsDto} from '../../data/logicalBuildingUnitDisplay/logicalImplicitConnectionSettingsDto';
import {WoollyKeyDto} from '../../data/infrastructure/woollyKeyDto';

@Component({
    selector: 'logicalNode',
    templateUrl: './dev/viewElements/logicalNode/logicalNode.html',
    directives: []
})
export class LogicalNodeComponent implements LogicalNodeDto {
    public Type : string = "LogicalNodeComponent";             
    logicalNodeFunctions : LogicalNodeFunctionDto[];
    logicalImplicitConnectionSettings : LogicalImplicitConnectionSettingsDto;
    isSynchronising : boolean;
    Key : WoollyKeyDto     
    
    public import : (data : LogicalNodeDto) => void;
    
    constructor() {
        this.import = (data: LogicalNodeDto) => {
            var i = <LogicalNodeDto>this;
            i.isSynchronising = data.isSynchronising;
            i.Key = data.Key;
            i.
        }
    }
    
}
