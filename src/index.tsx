export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}


export { default as GrowingTextInput } from './GrowingTextInput';
