# Copilot Instructions - Formação Front End

## Repository Overview
**formacao-front-end** is a comprehensive front-end training repository documenting a learning journey from HTML/CSS basics through modern React. It contains 25+ projects organized chronologically showing progression from static sites to interactive React applications.

### Repository Structure
- **1-19**: Progressive lessons in HTML, CSS, JavaScript, ES6, and Axios (older projects using vanilla JS)
- **20-23**: Intermediate projects like TODO List, IMC calculator, QR code generator
- **24**: `reactjs-introduction/vite-project/` - First React project with Vite + React 19
- **25**: `react-avancado/react-avancado/` - Advanced React concepts (current focus)

## Technology Stack

### Active Projects
- **Build Tool**: Vite 7.2.x (configured in `vite.config.js`)
- **React**: 19.2.0 (functional components, modern hooks)
- **Linting**: ESLint 9.39.1 with React plugin + React Hooks ESLint
- **Package Manager**: npm (scripts: `dev`, `build`, `lint`, `preview`)

### Project Structure Pattern
```
[project-name]/
├── index.html              # Entry point with root div id="root"
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration with React plugin
├── eslint.config.js        # ESLint rules for .js/.jsx files
├── src/
│   ├── main.jsx           # React entry (createRoot, StrictMode)
│   ├── App.jsx            # Root component
│   ├── index.css          # Global styles
│   ├── App.css            # App-level styles
│   ├── components/        # Reusable components (one per file)
│   └── assets/            # Images, fonts, static files
└── dist/                  # Built output (ignored by ESLint)
```

## Developer Workflows

### Running React Projects
All React projects (24 & 25) follow the same Vite workflow:
```powershell
cd [project-folder]
npm install
npm run dev        # Starts dev server (typically http://localhost:5173)
npm run build      # Produces dist/ folder
npm run lint       # Checks code with ESLint
```

**Location to run from**: Each project has its own `package.json`:
- React Introduction: `d:\formacao-front-end\24-reactjs-introduction\vite-project`
- React Avançado: `d:\formacao-front-end\25-react-avancado\react-avancado`

### Build & Deployment
- Vite builds to `/dist` folder (auto-ignored by ESLint)
- GitHub Pages deployment references in older README (7+): `https://wagnernazarios.github.io/formacao-front-end/[project-path]/`

## Code Patterns & Conventions

### React Component Style
- **Functional components only** - All React components use arrow functions
- **No hooks state needed** - Project focuses on component composition, events, conditional rendering
- **Import structure**: Imports first (React + custom), then component logic, then JSX return

Example from `24-reactjs-introduction/Events.jsx`:
```jsx
import React from "react";

const Events = () => {
    const handlerClick = (e) => {
        console.log(e)
    };
    
    const renderSomething = (x) => {
        return x ? <h1>Renderizando isso</h1> : <h1>Renderizando outra coisa</h1>;
    };

    return (
        <div>
            <button onClick={() => console.log("Test!")}>Click</button>
            <button onClick={handlerClick}>Click too</button>
            {renderSomething(1)}
        </div>
    )
}

export default Events;
```

### File Naming Conventions
- **Components**: PascalCase (e.g., `MyComponents.jsx`, `Events.jsx`)
- **Styles**: Alongside components or in dedicated folders (`App.css`, `components/`, `styles/`)
- **Assets**: Organized in `/assets` or `/img` folders

### CSS Organization
- **Global styles** in `index.css` (resets, fonts, base rules)
- **Component styles** in corresponding `.css` files (e.g., `App.css` for `App.jsx`)
- **Mobile-first responsive**: Projects include mobile versions (e.g., Instagram Clone, Blog)

### Older Projects (1-23) - Vanilla JS Pattern
- Vanilla JavaScript manipulates DOM directly: `document.querySelector()`, `addEventListener()`
- localStorage for persistence (TODO List project)
- Avoid modifying these unless extending functionality

## ESLint Configuration
- **Target**: ES2020 with JSX support
- **Extends**: `@eslint/js`, `reactHooks`, `reactRefresh` (Vite-optimized)
- **Important Rule**: Variables starting with uppercase or underscore are ignored by `no-unused-vars` (allows React imports, component names)
- **Ignored folders**: `/dist`

## Git & Repository Practices
- **Default branch**: `main`
- **Commits**: Track progression through learning modules
- **GitHub Pages**: Older projects deployed to GitHub Pages (links in README)

## When Extending This Repository

1. **Adding features to React projects (24-25)**:
   - Place components in `src/components/` folder
   - Export as named exports with PascalCase names
   - Import into `App.jsx` to render
   - Run `npm run lint` before committing

2. **Adding new projects**:
   - Use Vite: `npm create vite@latest [name] -- --template react`
   - Match existing project structure (vite.config.js, eslint.config.js already match)
   - Update project number and module topic in folder name

3. **Testing components locally**:
   - `npm run dev` for hot reload development
   - Browser DevTools for React component inspection

## Key Files Reference
- **React introduction concepts**: `24-reactjs-introduction/vite-project/src/components/`
  - `TemplateExpression.jsx` - Template literals in JSX
  - `Events.jsx` - Event handling patterns
  - `MyComponents.jsx` - Simple component composition
- **Build config**: `vite.config.js` (both projects identical)
- **Lint rules**: `eslint.config.js` (both projects follow same rules)
