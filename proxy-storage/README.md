# Proxy Storage
Web Storage with Cookie fallback via a Proxy.

[![NPM](https://img.shields.io/npm/v/@cedeber/proxy-storage.svg)](https://www.npmjs.com/package/@cedeber/proxy-storage)
![Bundle size](https://img.shields.io/bundlephobia/minzip/@cedeber/proxy-storage.svg)

## Usage
```javascript
import { storage, session } from "./proxy-storage.js"; // or import storage
// storage => localStorage
// session => sessionStorage

// equivalent to *Storage.setItem("foo", "bar");
storage.foo = "bar";

// equivalent to *Storage.getItem("foo");
storage.foo // => "bar"

// doesn't have *Storage equivalent
storage.foo ? "yes" : "no"; // => "yes"

// equivalent to *Storage.removeItem("foo");
delete storage.foo;
```
