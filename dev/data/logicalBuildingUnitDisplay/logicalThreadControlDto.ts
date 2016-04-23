import { ContextBasedActionSwitchDto } from './contextBasedActionSwitchDto';

export interface LogicalThreadControlDto
{
     ContextBasedActionSwitch : ContextBasedActionSwitchDto;
     MarkThreadComplete : boolean;
     ReturnControlFoodLimit : number
}