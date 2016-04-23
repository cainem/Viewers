import {WoollyKeyDto} from '../infrastructure/woollyKeyDto';
import {ContextBasedActionSwitchDto} from './contextBasedActionSwitchDto';

export interface LogicalJumpDto {
    ContextBasedActionSwitch : ContextBasedActionSwitchDto;
    KeySearchForward : boolean;
    KeyToSearchFor : WoollyKeyDto;
}