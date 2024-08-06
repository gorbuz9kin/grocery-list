export type ItemType = {
  id: string;
  name: string;
  quantity: string;
  unit: string;
  isCompleted: boolean;
};

export enum QueryKeys {
  SHOPPING_LIST = 'Shopping-list',
}
