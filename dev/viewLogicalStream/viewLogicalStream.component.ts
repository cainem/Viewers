import {Component} from 'angular2/core';
import {JsInputComponent} from '../jsInput/jsInput.component'
import {WrappedJson} from '../wrappedJson'
import {LogicalReaderReturnComponent} from '../viewElements/logicalReaderReturn/logicalReaderReturn.component';
import {ViewOfJson} from '../data/viewOfJson'

@Component({
    templateUrl: './dev/viewLogicalStream/viewLogicalStream.html',
    directives: [LogicalReaderReturnComponent],
})
export class ViewLogicalStream {        
}
