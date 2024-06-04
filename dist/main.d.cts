declare function clone<T extends {}>(initialValue: T, cb: (draft: T) => void): T;

export { clone };
