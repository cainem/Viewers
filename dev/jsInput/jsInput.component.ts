import {Component, Output, Input, EventEmitter} from 'angular2/core';
import {WrappedJson} from  '../wrappedJson'

@Component({
    selector: 'jsInput',
    templateUrl: './app/jsInput/jsInput.html',
    directives: []
})
export class JsInputComponent {
    @Input() public json : WrappedJson;
    //@Output() jsonChanged : EventEmitter<string> = new EventEmitter()
    
    get jsonString(): string {
        return this.json.unparsedJson;
    }
    set jsonString(value : string) {
        this.json.unparsedJson = value;
    }
        
    public constructor()
    {
    }
         
}