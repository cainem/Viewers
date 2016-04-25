import {Component, Input} from 'angular2/core';
import {WoollyKeyDto} from '../../data/infrastructure/woollyKeyDto';

@Component({
    selector: 'woollyKey',
    templateUrl: './dev/viewElements/woollyKey/woollyKey.html',
    directives: [],
    styleUrls: ['./dev/viewElements/woollyKey/woollyKey.css']
})
export class WoollyKey {
    @Input() model: WoollyKeyDto;
}