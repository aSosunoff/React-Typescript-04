export type Action<K extends string, V = void> = V extends void ? { type: K } : { type: K } & V;

type HandlerFunc<S, T = void> = T extends void
    ? (state: S) => S
    : (state: S, action: T) => S;

export type Handlers<T extends Action<any>, S, D extends string = 'DEFAULT'> =
    T extends { type: string }
    ? { [R in T['type']]: HandlerFunc<S, T> }
    & { [RR in D]: HandlerFunc<S> }
    & { [key: string]: any }
    : never;