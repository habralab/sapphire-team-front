/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { RecursivelyReplaceNullWithUndefined } from '~/shared/types';

export function nullToUndefined<T>(obj: T): RecursivelyReplaceNullWithUndefined<T> {
  if (obj === null) {
    return undefined as any;
  }

  if (obj?.constructor.name === 'Object') {
    for (const key in obj) {
      obj[key] = nullToUndefined(obj[key]) as any;
    }
  }
  return obj as any;
}
