# Product Viewer 🛍️

A beautiful, interactive product catalog with real-time filtering, sorting, and a simulated console logger that displays function calls and data flow.

![Product Viewer](https://img.shields.io/badge/JavaScript-Vanilla-yellow) ![CSS3](https://img.shields.io/badge/CSS3-Responsive-blue) ![HTML5](https://img.shields.io/badge/HTML5-Semantic-orange)

---

## ✨ Features

- **📦 Product Cards** — Display products with category badges, pricing, and stock indicators
- **🔍 Price Filter** — Filter products by minimum price threshold
- **🔄 Smart Sorting** — Sort by price (ascending/descending), name, or stock quantity
- **🖥️ Console Logger** — Real-time function call visualization showing data flow
- **🎨 Clean UI** — Elegant design with smooth animations and hover effects
- **📱 Responsive** — Works seamlessly on desktop, tablet, and mobile devices
- **⚡ Pure Vanilla JS** — No frameworks or dependencies required

---

## 🚀 Quick Start

### Option 1: Single File (All-in-One)
```bash
# Download the file
# Open in your browser
open product-viewer-simple.html
```

### Option 2: Separate Files
```bash
# Make sure all three files are in the same directory:
# - index.html
# - style.css
# - product-viewer.js

# Open index.html in your browser
open index.html
```

---

## 📁 File Structure

```
product-viewer/
│
├── index.html              # Main HTML structure
├── style.css               # All styling and animations
├── product-viewer.js       # Core logic and data
└── README.md              # This file
```

**OR**

```
product-viewer/
│
├── product-viewer-simple.html    # Single file with everything embedded
└── README.md                     # This file
```

---

## 🎯 Usage

### Basic Operations

1. **View All Products**
   - Products load automatically on page load
   - Displayed in a responsive grid layout

2. **Filter by Price**
   - Enter a minimum price in the input field
   - Click "Filter" or press Enter
   - Only products >= your price will show

3. **Sort Products**
   - Use the dropdown menu to sort by:
     - Default (original order)
     - Price: Low → High
     - Price: High → Low
     - Name: A → Z
     - Stock: Most first

4. **Reset Filter**
   - Click the "Reset" button to clear the price filter
   - Or click the "×" on the active filter badge

5. **Console Logger**
   - Scroll down to see the console panel
   - Watch function calls and data flow in real-time
   - Shows which function was called and what data was returned

---

## 🛠️ Core Functions

### `readAllProducts()`
Returns the complete product list without any filters.

```javascript
readAllProducts()
// Returns: Array of all products
```

### `filterProductsByMinPrice(min)`
Filters products where price is greater than or equal to the minimum value.

```javascript
filterProductsByMinPrice(50)
// Returns: Array of products with price >= $50
```

### `getSortedProducts(list)`
Sorts a product list based on the selected sorting option.

```javascript
getSortedProducts(productArray)
// Returns: Sorted array based on dropdown selection
```

### `renderProducts()`
Renders product cards to the DOM and updates the console log.

```javascript
renderProducts()
// Side effect: Updates UI with current filtered/sorted products
```

### `logToConsole(list)`
Displays function calls and product data in the console panel.

```javascript
logToConsole(productArray)
// Side effect: Updates console panel with data visualization
```

---

## 📊 Data Structure

Each product object contains:

```javascript
{
  id: 1,                    // Unique identifier
  name: "Product Name",     // Display name
  category: "Category",     // Product category
  price: 58.00,            // Price in dollars
  stock: 7,                // Quantity in stock
  description: "..."       // Product description
}
```

---

## 🎨 Customization

### Adding New Products

Edit the `products` array in `product-viewer.js` or in the `<script>` section:

```javascript
const products = [
  {
    id: 4,
    name: "Your Product Name",
    category: "YourCategory",
    price: 99.99,
    stock: 15,
    description: "A detailed description of your product."
  },
  // ... more products
];
```

### Adding Category Emojis

Update the `EMOJIS` object to add visual icons for categories:

```javascript
const EMOJIS = {
  Kitchen: "🫖",
  Lighting: "💡",
  YourCategory: "🎨"  // Add your emoji here
};
```

### Changing Colors

Modify CSS variables in the `:root` selector:

```css
:root {
  --bg: #f5f0e8;           /* Background color */
  --surface: #fffdf9;      /* Card background */
  --ink: #1a1410;          /* Text color */
  --accent: #c84b2f;       /* Primary accent */
  --border: #e0d8cc;       /* Border color */
}
```

### Adjusting Stock Thresholds

Edit the stock indicator logic in `renderProducts()`:

```javascript
// Current thresholds:
// stock === 0  → Out of stock (red)
// stock < 6    → Low stock (amber)
// stock >= 6   → In stock (green)

const stockClass = p.stock === 0 ? 'stock-out' 
                 : p.stock < 6 ? 'stock-low' 
                 : 'stock-ok';
```

---

## 🖥️ Console Panel

The console panel simulates a developer console and shows:

- **Function Name** — Which function was called (`readAllProducts()` or `filterProductsByMinPrice(X)`)
- **Timestamp** — When the function was executed
- **Product Details** — All returned products with their properties
- **Return Value** — Array length of returned products

### Console Color Coding

- 🟢 **Prompt (▶/←)** — Function call indicators
- 🟣 **Keys** — Property names (name, category, price, etc.)
- 🟡 **Strings** — Text values in quotes
- 🔵 **Numbers** — Numeric values
- 🟠 **Keywords** — Return values and types

---

## 📱 Responsive Design

The layout automatically adapts to different screen sizes:

- **Desktop** (> 600px): Multi-column grid with full padding
- **Mobile** (≤ 600px): Reduced padding, stacked header, optimized spacing

---

## 🔧 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

**Note:** Requires a browser that supports ES6+ JavaScript features.

---

## 📝 Code Examples

### Example 1: Filter products under $50
```javascript
// Enter "50" in the price input and click Filter
// Or programmatically:
minPriceFilter = 50;
renderProducts();
```

### Example 2: Sort by price
```javascript
// Select "Price: Low → High" from the dropdown
// Or programmatically:
document.getElementById('sortSelect').value = 'price-asc';
renderProducts();
```

### Example 3: Add a new product dynamically
```javascript
products.push({
  id: products.length + 1,
  name: "New Product",
  category: "Kitchen",
  price: 45.00,
  stock: 10,
  description: "A brand new product just added!"
});
renderProducts();
```

---

## 🎓 Learning Goals

This project demonstrates:

- ✅ **DOM Manipulation** — Creating and updating elements dynamically
- ✅ **Array Methods** — filter(), sort(), map(), forEach()
- ✅ **Event Handling** — Click events, keyboard events (Enter key)
- ✅ **CSS Animations** — Keyframes, transitions, hover effects
- ✅ **Responsive Design** — Mobile-first approach with media queries
- ✅ **Data Visualization** — Console-style logging of function calls
- ✅ **State Management** — Tracking filter state across user interactions

---

## 🐛 Troubleshooting

### Products not showing?
- Check browser console for JavaScript errors
- Ensure all files are in the same directory (for multi-file version)
- Verify the `products` array is not empty

### Console panel not updating?
- Check that `logToConsole()` is being called in `renderProducts()`
- Verify the `console-body` element exists in the HTML

### Styles not loading?
- For separate files: Ensure `<link rel="stylesheet" href="style.css">` path is correct
- For single file: Styles are embedded in `<style>` tags

### Filter not working?
- Ensure you're entering a valid number (positive, no letters)
- Check that `minPriceFilter` variable is being set correctly

---

## 📄 License

This project is open source and available for educational purposes.

---

## 🤝 Contributing

Want to improve this project? Here are some ideas:

- [ ] Add search functionality by product name
- [ ] Implement multi-range price filter (min and max)
- [ ] Add category filter buttons
- [ ] Include product images instead of emojis
- [ ] Add "Add to Cart" functionality
- [ ] Implement local storage to persist filters
- [ ] Add product detail modal on click
- [ ] Export filtered results to CSV/JSON

---

## 👨‍💻 Author

Built with ❤️ as a learning project for JavaScript fundamentals

---

## 📚 Resources

- [MDN Web Docs - Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Google Fonts - DM Sans & DM Serif Display](https://fonts.google.com/)

---

**Happy Coding! 🚀**
