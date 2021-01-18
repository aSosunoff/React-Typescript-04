export type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V;

export type THandlers<TAction extends Action<any>, TState> = {
    [K in TAction['type']]: (state: TState, action: TAction) => TState;
} & { DEFAULT: (state: TState, action: TAction) => TState };


