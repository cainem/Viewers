import {Component, Input} from 'angular2/core';
import {WoollyKeyDto} from '../../data/infrastructure/woollyKeyDto';
import {Collapse} from '../../sharedControls/collapsibleDiv/collapsibleDiv.component';

@Component({
    selector: 'woollyKey',
    templateUrl: './dev/viewElements/woollyKey/woollyKey.html',
    directives: [Collapse],
    styleUrls: ['./dev/viewElements/woollyKey/woollyKey.css']
})
export class WoollyKey {
    @Input() model: WoollyKeyDto;
}