type BaseTypeAction<K extends string> = {
  type: K;
  CallAPI?: string;
  methodAPI?: "get" | "post";
  paramsAPI?: object;
};

export type Action<K extends string, V = void> = V extends void
  ? BaseTypeAction<K>
  : BaseTypeAction<K> & V;

type HandlerFunc<S, T = void> = T extends void ? (state: S) => S : (state: S, action: T) => S;

export type Handlers<
  TState,
  TAction extends Action<any>,
  TOtherFields extends string = "DEFAULT"
> = (TAction extends { type: string }
  ? { [R in TAction["type"]]: HandlerFunc<TState, TAction> }
  : never) &
  { [RR in TOtherFields]: HandlerFunc<TState> } & { [key: string]: any };

export const reducer = <
  TState,
  TAction extends Action<any>,
  THandlers extends Handlers<TState, TAction>
>(
  state: TState,
  action: TAction,
  handlers: THandlers
): TState => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
