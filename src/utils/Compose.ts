export const Compose = (...fn: any[]) => <T,>(x: React.FC<T>): React.FC<T> =>
    fn.reduceRight((res, f) => f(res), x);
