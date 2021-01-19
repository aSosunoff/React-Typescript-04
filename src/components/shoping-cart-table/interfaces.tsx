export interface StateProps {}

export interface DispatchProps {}

export interface OwnProps {
  items: [];
  total: number;
  onIncrease: (id: any) => void;
  onDecrease: (id: any) => void;
  onDelete: (id: any) => void;
}
