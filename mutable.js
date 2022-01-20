"use strict";

const text = (
  s = "",
  o = {
    line: (a) => ((s += "\n" + a), o),
    toString: () => s,
  }
) => o;

// Usage

const txt = text("line1").line("line2").line("line3").line("line4");
const txt2 = text("test").line("1");

console.log(`${txt2}`);

console.log(`${txt}`);
