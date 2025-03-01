export function Merge<T>(obj: Partial<T> = {}): T {
    return obj as T;
}


export function MergeArray<T>(array: any[]): T {
    return array as T;
}


type AnyObject = { [key: string]: any };

export function ensureProperties(baseObject: AnyObject, dynamicObject: AnyObject): AnyObject {
    const result: AnyObject = { ...baseObject };
    for (const key in baseObject) {
        result[key] = dynamicObject.hasOwnProperty(key) ? dynamicObject[key] : undefined;
    }
    for (const key in dynamicObject) {
        if (!baseObject.hasOwnProperty(key)) {
            result[key] = dynamicObject[key];
        }
    }
    return result;
}