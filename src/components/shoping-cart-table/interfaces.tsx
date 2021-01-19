import { ICart } from "../../interfaces/ICart";

export interface StateProps {
  carts: ICart[];
}

export interface DispatchProps {}

export interface OwnProps {
  total: number;
  onIncrease: (id: any) => void;
  onDecrease: (id: any) => void;
  onDelete: (id: any) => void;
}
