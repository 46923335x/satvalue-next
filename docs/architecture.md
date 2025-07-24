# Architecture

This project is structured as a modular React application using Next.js conventions. The goal is to maintain a clean separation of concerns between UI components, styling, and data logic. Each major UI component is encapsulated in its own folder, with co-located JSX and CSS module files to enhance maintainability and reusability.

---

## Project Structure

📁 /components  
 ├── 📁 Chart  
 │   ├── Chart.jsx  
 │   └── Chart.module.css  
 ├── 📁 Header  
 │   ├── Header.jsx  
 │   └── Header.module.css  
 ├── 📁 Marquee  
 │   ├── Marquee.jsx  
 │   └── Marquee.module.css  
 └── 📁 ReturnsTable  
     ├── ReturnsTable.jsx  
     └── ReturnsTable.module.css  

📁 /pages  
 ├── index.js  
 └── index.module.css  

📁 /public  
 └── index.html  

📁 /styles  
 └── global.css  

---

## Key Architectural Concepts

### 1. **Component Modularity**
Each component (e.g., Header, Chart, Marquee, ReturnsTable) is self-contained. Logic and presentation styles are co-located in a dedicated folder for clarity and reuse.

### 2. **Scoped CSS Modules**
Instead of relying heavily on a global stylesheet, we use CSS Modules (`ComponentName.module.css`) to scope styles to individual components. This prevents global CSS leakage and class name collisions.

### 3. **Top-Level Global Styles**
The `global.css` file in `/styles` is reserved for:
- Font imports
- CSS resets
- Body-level styles
- Other true globals (like link styling, base layout, etc.)

All other layout and UI styles should live in their respective module files.

### 4. **Page-Level Styling**
`index.module.css` is responsible for layout and styling unique to the landing page. It contains layout rules for elements like `.hero`, `.metricsGrid`, and container wrappers for the chart and table.

### 5. **Data Separation**
The `ReturnsTable` component currently uses a static `dummyReturns` array, but it is designed to later receive data from an API or context provider. The goal is to eventually move all static data into an external service or hook.

### 6. **Third-Party Integration**
The TradingView widget script in `Chart.jsx` is dynamically injected using a `useEffect` hook to avoid SSR issues. It is sandboxed into its own component and styled responsively through module CSS.

---

## Design Intentions

- **Separation of responsibilities**: Layout responsibilities live with the page, not components.
- **Reusable components**: All components should be re-mountable in different page contexts.
- **Clean override strategy**: Containers (e.g., the chart box) define width and padding; internal content (e.g., the chart widget) fills the space without layout assumptions.
- **Sensible defaults**: Default spacing, font sizing, and alignment are applied globally or at the section level, not within deep children.

---

## TODO (beyond MVP)

- Centralize configuration for TradingView options.
- Convert dummy data to API-driven via `getServerSideProps` or custom hook.
- Add theme toggle for dark/light TradingView support.
- Create responsive layout rules for tablets and mobile devices.
