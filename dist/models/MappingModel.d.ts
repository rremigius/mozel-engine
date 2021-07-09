import { GenericMozel } from "mozel";
declare type KeysOfType<O, T> = {
    [K in keyof O]: O[K] extends T ? K : never;
}[keyof O];
export default class MappingModel<K, V> extends GenericMozel {
    MozelDataType: {
        [I in keyof K]?: KeysOfType<Exclude<V, undefined>, K[I]>;
    };
}
export {};
