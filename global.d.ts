type Cloner = <T extends {}>(initialValue: T,draft: (callbackValue: T) => void) => T;

export interface IClone {
  clonner : Cloner
} 