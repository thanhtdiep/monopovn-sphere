import React, { forwardRef, useMemo } from "react";
import { Uniform, Vector2 } from "three";
import { Effect } from "postprocessing";

// 1. Define the Effect Logic (The "Class" part)
const fragmentShader = `
  uniform vec2 center;
  uniform float angle;
  uniform float scale;
  uniform vec2 tSize;

  float pattern(vec2 uv) {
    float s = sin(angle), c = cos(angle);
    vec2 tex = uv * tSize - center;
    vec2 point = vec2(c * tex.x - s * tex.y, s * tex.x + c * tex.y) * scale;
    return (sin(point.x) * sin(point.y)) * 4.0;
  }

  float random(vec2, p) {
    vec2 k1 = vec2(
        23.140692632777926,
        2.665144142690225
    );
    return fract(
        cos(dot(p, k1)) * 12345.6789
    );
  }

  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    float average = (inputColor.r + inputColor.g + inputColor.b) / 3.0;
    outputColor = vec4(vec3(average * 10.0 - 5.0 + pattern(uv)), inputColor.a);
  }
`;

class DotScreenEffect extends Effect {
  constructor({
    center = new Vector2(0.5, 0.5),
    angle = 1.57,
    scale = 1.0,
    tSize = new Vector2(256, 256),
  } = {}) {
    super("DotScreenEffect", fragmentShader, {
      uniforms: new Map([
        ["center", new Uniform(center)],
        ["angle", new Uniform(angle)],
        ["scale", new Uniform(scale)],
        ["tSize", new Uniform(tSize)],
      ]),
    });
  }
}

// 2. The React Component (Functional)
export const DotScreen = forwardRef(({ center, angle, scale, tSize }, ref) => {
  const effect = useMemo(
    () => new DotScreenEffect({ center, angle, scale, tSize }),
    [center, angle, scale, tSize]
  );
  return <primitive ref={ref} object={effect} dispose={null} />;
});
