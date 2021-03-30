# `ArrayBuffer` to Base64 string and back

Isomorphic helpers to encode and decode `Uint8Array` to Base64 string and back.
Works in browser and Node.js.

API:

```ts
encode(ab: Uint8Array): string;
decode(str: string): Uint8Array;
```

Contents:

- `index.js` &mdash; Node.js version
- `browser.js` &mdash; browser version
