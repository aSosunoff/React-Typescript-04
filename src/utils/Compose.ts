/* export const Compose = (...fn: any[]) => <T,>(x: React.FC<T>): React.FC<T> =>
    fn.reduceRight((res, f) => f(res), x); */

/* export function compose<R>(...funcs: Function[]): (...args: any[]) => R */

type Func<T> = (...arg: any[]) => T;

export const Compose = <R>(...fn: Function[]): Func<R> => (x: any) =>
    fn.reduceRight((res, f) => f(res), x);