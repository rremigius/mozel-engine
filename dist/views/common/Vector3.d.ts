export declare type SparseVector3 = {
    x?: number;
    y?: number;
    z?: number;
};
export default class Vector3 {
    x: number;
    y: number;
    z: number;
    static create(vector3: SparseVector3): Vector3;
    constructor(x: number, y: number, z: number);
}
export declare function applySparseVector(target: Vector3, source: SparseVector3): void;
