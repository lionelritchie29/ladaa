export interface Instruction {
  name: string;
  steps: InstructionStep[];
}

export interface InstructionStep {
  number: number;
  step: string;
  ingredients: InstructionIngredient[];
  equipment: InstructionEquipment[];
}

interface InstructionIngredient {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

interface InstructionEquipment {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}
