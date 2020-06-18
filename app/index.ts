import type { A } from './a';

function a(): A {
  return { a: 1 }; // this doesn't work no matter import type or not
}
