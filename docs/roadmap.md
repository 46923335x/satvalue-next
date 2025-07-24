# Roadmap

## ✅ Phase 1: Layout and Styling Foundations
- [x] Replace `global.css` with reset + font/base rules
- [x] Modularize all page-specific and component styles
- [x] Set up `Header`, `Marquee`, `Chart`, and `ReturnsTable` components
- [x] Clean up hardcoded table values from `index.js`
- [x] Ensure proper layout using `metricsGrid`

## 🔜 Phase 1.2: Layout and Styling Improvements
- [ ] Spread the header to reach the edge of the page
- [ ] Fix the marquee
- [ ] reduce font size on container headings (S&P 500 and Trailing Returns)
- [ ] Left justify Returns table left column
- [ ] make the search bar look more like the live static site

## 🔜 Phase 1.3: Make this version live
- [ ] with Vercel

## 🔜 Phase 2: Static Pages and Routing
- [ ] Create static pages for individual countries (e.g., `/germany`)
- [ ] Move chart ticker selection based on page context
- [ ] Migrate data structures into shared utility or context layer

## 🛠️ Phase 3: API Integration & State Management
- [ ] Fetch live return data from backend or external API
- [ ] Replace dummy data in `ReturnsTable`
- [ ] Integrate TradingView or other market APIs for ticker prices

## 💅 Phase 4: Polish and Responsive Design
- [ ] Improve mobile responsiveness
- [ ] Add animations/transitions for smoother UX
- [ ] Add favicon, SEO tags, social metadata

## 🚀 Phase 5: Productionization
- [ ] Bundle and deploy with CI/CD pipeline
- [ ] Environment-specific builds (dev/staging/prod)
- [ ] Performance and accessibility audit
