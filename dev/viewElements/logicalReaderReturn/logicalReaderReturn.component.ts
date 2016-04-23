import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {LogicalNodeComponent} from '../logicalNode/logicalNode.component';
import {LogicalConnectionComponent} from '../logicalConnection/logicalConnection.component';
import {GenomePositionComponent} from '../genomePosition/genomePosition.component';
import {ILogicalReaderReturn} from '../../data/logicalBuildingUnitDisplay/logicalReaderReturnDto';
import {ViewOfJson} from '../../data/viewOfJson'

@Component({
    selector: 'logicalReaderReturn',
    templateUrl: './dev/viewElements/logicalReaderReturn/logicalReaderReturn.html',
    directives: [LogicalNodeComponent, LogicalConnectionComponent],
    providers : [ViewOfJson]
    
})
export class LogicalReaderReturnComponent {
    public Type : string = "LogicalReaderReturnComponent";     
    public typeOfLogicalBuildingUnit : string;
    public foodUnitsUsed: number;
    public nextGenomePositionComponent : GenomePositionComponent;   
    
    public logicalBuildingUnitComponent : LogicalNodeComponent | LogicalConnectionComponent;
    
    public import : (data : ILogicalReaderReturn) => void;
        
    constructor() {        
        this.import = (data : ILogicalReaderReturn) => {
            this.foodUnitsUsed = data.foodUnitsUsed;
            this.nextGenomePositionComponent = new GenomePositionComponent();
            
            this.typeOfLogicalBuildingUnit = data.typeOfLogicalBuildingUnit;            
            
            switch(data.typeOfLogicalBuildingUnit)
            {
                case "LogicalNode":
                    var comp = new LogicalNodeComponent();
                    this.logicalBuildingUnitComponent = comp;
                    break;
                case "LogicalConnection":
                    this.logicalBuildingUnitComponent = new LogicalConnectionComponent();
                    break;
            }
            
                        
        }
    }
           
}