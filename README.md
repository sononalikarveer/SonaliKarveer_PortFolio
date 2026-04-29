# Sonali Karveer — Portfolio

## 📁 File Structure

```
sonali-portfolio/
├── index.html           ← Main HTML (all sections)
├── css/
│   ├── style.css        ← Complete styles
│   └── animations.css   ← Scroll reveals, counters, effects
├── js/
│   └── main.js          ← Navbar, drawer, counters, form, scroll
├── assets/
│   ├── sonali.jpg       ← ⚠️ YOUR PHOTO (required)
│   ├── proj-rag.jpg     ← Project 1 background (optional)
│   ├── proj-qc.jpg      ← Project 2 background (optional)
│   ├── proj-netflix.jpg ← Project 3 background (optional)
│   ├── proj-car.jpg     ← Project 4 background (optional)
│   ├── proj-farmers.jpg ← Project 5 background (optional)
│   └── proj-food.jpg    ← Project 6 background (optional)
└── README.md
```

## 🚀 Setup

1. **Add your photo**: Place your photo as `assets/sonali.jpg`
   - Recommended: portrait orientation, high resolution (min 800×1100px)
   - The hero section uses `object-position: center top` — make sure your face is in the top 60% of the image

2. **Add project images** (optional): The project cards show SVG illustrations by default. Adding matching background images makes them richer:
   - `proj-rag.jpg` — neural network / data flow visual
   - `proj-qc.jpg` — spreadsheet / checklist visual  
   - `proj-netflix.jpg` — streaming / movie visual
   - `proj-car.jpg` — car / automotive visual
   - `proj-farmers.jpg` — agricultural / green visual
   - `proj-food.jpg` — food / kitchen visual
   - If images fail to load, they're hidden gracefully — SVG layers remain

3. **Open in browser**: Open `index.html` directly, or use a local server:
   ```bash
   # Python
   python -m http.server 3000
   # Node
   npx serve .
   ```

## ✅ Changes Made

- ❌ **Removed** custom cursor / mouse hover effects
- ❌ **Removed** "Open to MBA roles" from contact section
- ✅ **Photo** appears ONLY in the About section (not duplicated)
- ✅ **Hero** is full-screen photo (100vh), like Natassha's reference
- ✅ **Projects** have both GitHub + Demo redirect links
- ✅ **Separate files**: HTML / CSS / JS / assets
- ✅ **Responsive** mobile layout with hamburger drawer
- ✅ **Page loader** on first visit

## 🔗 Project Links

All project cards link to:
- GitHub: `https://github.com/sononalikarveer`
- Demo: `https://sononalikarveer.github.io/Sonali_Portfolio/`

Update these in `index.html` when individual project URLs are ready.
