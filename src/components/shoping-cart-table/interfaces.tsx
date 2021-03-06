import { ICart } from "../../interfaces/ICart";

export interface StateProps {
  carts: ICart[];
  total: number;
}

export interface DispatchProps {
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onDelete: (id: number) => void;
}

export interface OwnProps {}
