import {Component} from 'angular2/core';
import {JsInputComponent} from '../jsInput/jsInput.component'
import {WrappedJson} from '../wrappedJson'
import {ChromosomeComponent} from '../viewElements/chromosome/chromosome.component';
import {ViewOfJson} from '../data/logicalBuildingUnitDisplay/viewOfJson'
import {ILogicalReaderReturn} from '../data/logicalBuildingUnitDisplay/logicalReaderReturnDto';
import {Chromosome} from '../data/logicalBuildingUnitDisplay/chromosome';

@Component({
    templateUrl: './dev/viewLogicalStream/viewLogicalStream.html',
    directives: [ChromosomeComponent],
    providers: [ViewOfJson],
})
export class ViewLogicalStream {          
    public json : Chromosome[];
    
    constructor(inputJson : ViewOfJson) {
        this.json = inputJson.json;
    }
      
}
