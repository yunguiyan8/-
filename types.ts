
export enum TreeMorphState {
  SCATTERED = 'SCATTERED',
  TREE_SHAPE = 'TREE_SHAPE'
}

export interface OrnamentData {
  id: number;
  type: 'BAUBLE' | 'GIFT' | 'LIGHT';
  weight: number;
  scatterPos: [number, number, number];
  treePos: [number, number, number];
  rotation: [number, number, number];
  color: string;
  size: number;
}
