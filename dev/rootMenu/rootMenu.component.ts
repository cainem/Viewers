import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router"
import {ViewLogicalStream} from "../viewLogicalStream/viewLogicalStream.component";
import {ViewMachine} from "../viewMachine/viewMachine.component";
import {CytoscapeComponent} from "../cytoscape/cytoscape.component"

import {LogicalConnectionComponent} from '../viewElements/logicalConnection/logicalConnection.component';
import {LogicalNodeComponent} from '../viewElements/logicalNode/logicalNode.component';

@Component({
    selector: 'rootMenu',
    templateUrl: './app/rootMenu/rootMenu.html',
    directives: [ViewLogicalStream, ViewMachine, ROUTER_DIRECTIVES, CytoscapeComponent, LogicalConnectionComponent, LogicalNodeComponent]
})
@RouteConfig([
    { path: '/viewLogicalStream/', name: 'ViewLogicalStream', component: ViewLogicalStream, useAsDefault: true },
    { path: '/viewMachine/', name: 'ViewMachine', component: ViewMachine }
])
export class RootMenuComponent {
        
    public elementArray: any[] = [
            new LogicalNodeComponent(),
            new LogicalNodeComponent(),
            new LogicalConnectionComponent(),
            new LogicalNodeComponent()    
        ];                     
}
