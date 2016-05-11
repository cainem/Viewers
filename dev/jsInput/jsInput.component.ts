import {Component, Output, Input, EventEmitter} from 'angular2/core';
import {WrappedJson} from  '../wrappedJson';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {ViewOfJson} from '../data/logicalBuildingUnitDisplay/viewOfJson';


@Component({
    selector: 'jsInput',
    templateUrl: './dev/jsInput/jsInput.html',
    directives: []
})
export class JsInputComponent {
    
    private _viewOfJson : ViewOfJson;
    
    @Input() public json : WrappedJson;
    @Output() jsonChanged : EventEmitter<string>;
    
    get jsonString(): string {
        if (this.json)
        {
            return this.json.unparsedJson;
        }
        return "";
    }
    set jsonString(value : string) {
        this.json.unparsedJson = value;
        this._viewOfJson.rawJson = this.json.parsedJson;
    }
        
    public constructor(viewOfJson : ViewOfJson)
    {
        this._viewOfJson = viewOfJson;
        this.json = new WrappedJson();
        this.jsonChanged = new EventEmitter();
    }
         
}