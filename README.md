# Monopovn Sphere

DEMO: https://thanhtdiep.github.io/monopovn-sphere/ 

Original Work: [monopo.vn](https://monopo.vn/) and
Yuri's tutorial stream: https://www.youtube.com/watch?v=sPBb-0al7Y0

## Acknowledgments

This project is for **learning purposes**. It's an exploration of Three.js and React Three Fiber (R3F), with a focus on porting Three.js concepts to R3F. The goal is to recreate awesome 3D works and gain hands-on experience with 3D web graphics.

Special thanks to **Yuri** for the amazing stream that inspired this project. Your clear explanations and guidance on Three.js and React Three Fiber have been invaluable in this learning journey.

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Three.js** - 3D graphics library
- **React Three Fiber (R3F)** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **@react-three/postprocessing** - Post-processing effects for R3F
- **GLSL Shaders** - Custom vertex and fragment shaders

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Run the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be output to the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # React components including R3F scenes
│   ├── Scene.jsx
│   ├── MagicSphere.jsx
│   ├── MiniMagicSphere.jsx
│   └── DotScreenEffect.jsx
├── shaders/        # GLSL shader files
│   ├── ballVertex.glsl
│   ├── ballFragment.glsl
│   ├── miniBallVertex.glsl
│   └── miniBallFragment.glsl
├── App.jsx         # Main app component
├── main.jsx        # React entry point
└── index.css       # Global styles
```

## Learning Focus

- Understanding Three.js core concepts (scene, camera, renderer, geometries, materials)
- Learning React Three Fiber patterns and best practices
- Porting vanilla Three.js code to R3F
- Writing custom GLSL shaders
- Implementing post-processing effects
