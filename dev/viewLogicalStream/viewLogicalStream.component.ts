import {Component} from 'angular2/core';
import {JsInputComponent} from '../jsInput/jsInput.component'
import {WrappedJson} from '../wrappedJson'

@Component({
    templateUrl: './app/viewLogicalStream/viewLogicalStream.html',
    directives: [JsInputComponent]
})
export class ViewLogicalStream {
    private _myJson : WrappedJson;
    get myJson(): WrappedJson {
        return this._myJson;
    }
    set myJson(value : WrappedJson) {
        this._myJson = value;
    }
    
    constructor() {
        this.myJson = new WrappedJson();
    }
    
}
