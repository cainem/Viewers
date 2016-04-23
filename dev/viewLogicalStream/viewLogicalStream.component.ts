import {Component} from 'angular2/core';
import {JsInputComponent} from '../jsInput/jsInput.component'
import {WrappedJson} from '../wrappedJson'
import {LogicalReaderReturnComponent} from '../viewElements/logicalReaderReturn/logicalReaderReturn.component';
import {ViewOfJson} from '../data/viewOfJson'
import {ILogicalReaderReturn} from '../data/logicalBuildingUnitDisplay/logicalReaderReturnDto';

@Component({
    templateUrl: './dev/viewLogicalStream/viewLogicalStream.html',
    directives: [LogicalReaderReturnComponent],
    providers: [ViewOfJson],
})
export class ViewLogicalStream {          
    public json : ILogicalReaderReturn[];
    
    constructor(inputJson : ViewOfJson) {
        this.json = inputJson.json;
    }
      
}
