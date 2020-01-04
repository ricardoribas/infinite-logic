import en from '@infinite/shared/src/constants/vocabulary/en';

export function getMessage(name: string): string {
  if (!en[name]) {
    throw new Error(`${name} do not exist in the dictionary`);
  }

  return en[name];
}

export default {
  getMessage
};
