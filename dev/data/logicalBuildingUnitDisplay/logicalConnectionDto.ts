import { WoollyKeyDto } from '../infrastructure/woollyKeyDto';

export interface LogicalConnectionDto {
    keyToSearchFor : WoollyKeyDto;
    connectionFunctionType : string;
    isLocal : boolean;
    isConnectToSearchedForNode : boolean;
    associatedConstant : boolean;
    searchRange : number;
}