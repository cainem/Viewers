import {ILogicalReaderReturn} from '../logicalBuildingUnitDisplay/logicalReaderReturnDto';
import {Chromosome} from '../logicalBuildingUnitDisplay/chromosome';
import {Gene} from '../logicalBuildingUnitDisplay/gene';

export class ViewOfJson {
    contructor() {
    }

	get json(): Chromosome[] {
		let allLogicalReaderReturns = this.rawJson;
		let chromosomes : Chromosome[] = [];
		
		if (allLogicalReaderReturns.length === 0) {
			return chromosomes;
		}
		
		let lastChromosomeNumber = allLogicalReaderReturns[0].currentPositionInGenome.chromosomePositionInGenome;
		let currentChromosome = new Chromosome();
		let lastGeneNumber = allLogicalReaderReturns[0].currentPositionInGenome.chromosomePosition.positionInChromosome;
		let currentGene = new Gene(); 
		for (let i = 0; i < allLogicalReaderReturns.length; i++) {
			let currentChromosomeNumber = allLogicalReaderReturns[i].currentPositionInGenome.chromosomePositionInGenome;
			if (lastChromosomeNumber !== currentChromosomeNumber) {
				chromosomes.push(currentChromosome);
				lastChromosomeNumber = currentChromosomeNumber;
				currentChromosome = new Chromosome();
			}
			
			let currentGeneNumber = allLogicalReaderReturns[i].currentPositionInGenome.chromosomePosition.positionInChromosome;
			if (lastGeneNumber !== currentGeneNumber) {
				lastGeneNumber = currentGeneNumber;
				currentChromosome.genes.push(currentGene);
				currentGene = new Gene();
			}
			
			currentGene.logicalReaderReturns.push(allLogicalReaderReturns[i]);						
		}	
		
		//push on the last gene to the last chromosome and the last chromosome onto the chromosome array
		currentChromosome.genes.push(currentGene);
		chromosomes.push(currentChromosome);
		
		return chromosomes;			
	}
    			
    get rawJson(): ILogicalReaderReturn[] {
        return [{
	"typeOfLogicalBuildingUnit": "LogicalNode",
	"logicalBuildingUnit": {
		"logicalNodeFunctions": [],
		"logicalImplicitConnectionSettings": {
			"createsAnImplicitConnection" : true,
			"isConnectedToSearchNode" : true,
			"associatedConstant" : 99,
			"connectionFunctionType" : "identity"
		},
		"isSynchronising": false,
		"key": {
			"internalKey": 0,
			"keyLength": 3
		}
	},
	"nextGenomePosition": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positionInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 2
			}
		}
	},
	"currentPositionInGenome": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positionInChromosome": 0,
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
			"positionInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 3
			}
		}
	},
	"currentPositionInGenome": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positionInChromosome": 0,
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
			"positionInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 4
			}
		}
	},
	"currentPositionInGenome": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positionInChromosome": 0,
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
			"positionInChromosome": 0,
			"genePairPosition": {
				"isMother": true,
				"genePosition": 6
			}
		}
	},
	"currentPositionInGenome": {
		"chromosomePositionInGenome": 0,
		"chromosomePosition": {
			"positionInChromosome": 0,
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
			"positionInChromosome": 0,
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