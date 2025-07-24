# 📦 Components

## Chart.jsx
- Embeds a TradingView widget for BTC-denominated pricing
- Props: `ticker` (string)

## ReturnsTable.jsx
- Displays trailing return data
- Currently uses dummy data
- No props needed (will accept ticker in future)

## Header.jsx
- Shows logo, nav links, and search bar
- Used at the top of every page

## Marquee.jsx
- Shows horizontal scrolling tickers (WIP)

## ChartAndTableRow.jsx (Layout)
- Composes Chart + ReturnsTable side-by-side in a responsive container
- Props: `ticker` (string)
