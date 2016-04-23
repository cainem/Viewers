import {ILogicalReaderReturn} from './logicalBuildingUnitDisplay/logicalReaderReturnDto'
import {LogicalReaderReturnComponent} from '../viewElements/logicalReaderReturn/logicalReaderReturn.component';

export class ViewOfJson {
    contructor() {
    }
    	
	get viewModel() : LogicalReaderReturnComponent[] {
		return null;
	}
		
    get json(): ILogicalReaderReturn[] {
        return [{
	"typeOfLogicalBuildingUnit": "LogicalNode",
	"logicalBuildingUnit": {
		"logicalNodeFunctions": [],
		"logicalImplicitConnectionSettings": null,
		"isSynchronising": false,
		"key": {
			"internalKey": 0,
			"keyLength": 3
		}
	},
	"nextGenomePosition": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positonInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 2
			}
		}
	},
	"currentPositionInGenome": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positonInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 1
			}
		}
	},
	"foodUnitsUsed": 1
},
{
	"typeOfLogicalBuildingUnit": "LogicalNode",
	"logicalBuildingUnit": {
		"logicalNodeFunctions": [],
		"logicalImplicitConnectionSettings": null,
		"isSynchronising": false,
		"key": {
			"internalKey": 0,
			"keyLength": 3
		}
	},
	"nextGenomePosition": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positonInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 3
			}
		}
	},
	"currentPositionInGenome": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positonInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 2
			}
		}
	},
	"foodUnitsUsed": 1
},
{
	"typeOfLogicalBuildingUnit": "LogicalConnection",
	"logicalBuildingUnit": {
		"keyToSearchFor": {
			"internalKey": 0,
			"keyLength": 2
		},
		"connectionFunctionType": "Identity",
		"isLocal": false,
		"isConnectToSearchedForNode": false,
		"associatedConstant": 0.0,
		"searchRange": 255
	},
	"nextGenomePosition": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positonInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 4
			}
		}
	},
	"currentPositionInGenome": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positonInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 3
			}
		}
	},
	"foodUnitsUsed": 1
},
{
	"typeOfLogicalBuildingUnit": "LogicalNode",
	"logicalBuildingUnit": {
		"logicalNodeFunctions": [{
			"functionType": "Identity",
			"associatedConstant": 0.0
		}],
		"logicalImplicitConnectionSettings": null,
		"isSynchronising": false,
		"key": {
			"internalKey": 0,
			"keyLength": 3
		}
	},
	"nextGenomePosition": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positonInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 6
			}
		}
	},
	"currentPositionInGenome": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positonInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 5
			}
		}
	},
	"foodUnitsUsed": 2
},
{
	"typeOfLogicalBuildingUnit": "LogicalConnection",
	"logicalBuildingUnit": {
		"keyToSearchFor": {
			"internalKey": 0,
			"keyLength": 2
		},
		"connectionFunctionType": "Identity",
		"isLocal": false,
		"isConnectToSearchedForNode": false,
		"associatedConstant": 0.0,
		"searchRange": 255
	},
	"nextGenomePosition": null,
	"currentPositionInGenome": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positonInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 6
			}
		}
	},
	"foodUnitsUsed": 1
}];
    }
    
    
}