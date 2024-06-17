import chroma from "chroma-js";
import { TinyColor } from "@ctrl/tinycolor";

function fromChroma(color) {
  const tinyColor = new TinyColor(color.hex());
  return tinyColor;
}

export function colorsRandom(alpha = 1) {
  const color = chroma.random().alpha(alpha);
  return fromChroma(color);
}
