# 🎯 QUICK START - Τρέξε το Application Όπως Πρέπει

## ⚡ Super Fast (5 minutes)

### Step 1: Open Terminal
```
Windows: Win + R → type "cmd" or "powershell"
Mac: Cmd + Space → search "terminal"
Linux: Ctrl + Alt + T
```

### Step 2: Navigate to Project
```
cd /workspaces/Niothor/order-form
```

### Step 3: Install & Run
```
npm install
npm start
```

Wait... The browser will open automatically! 🎉

---

## 📝 Detailed Step-by-Step (If Something Goes Wrong)

### Prerequisites Check
Before starting, verify you have Node.js:

```bash
# Check Node version (must be 18+)
node --version

# Check npm version (must be 9+)
npm --version
```

**If these don't work:**
- Download from: https://nodejs.org (LTS version)
- Install it
- Restart terminal
- Try again

---

### Full Installation

```bash
# 1. Go to the project folder
cd /workspaces/Niothor/order-form

# 2. Clean install (remove old dependencies)
rm -rf node_modules
rm package-lock.json

# 3. Fresh install
npm install

# This takes 2-5 minutes depending on internet speed
# Wait for "added X packages" message

# 4. Start development server
npm start

# Or if npm start doesn't work:
ng serve --open
```

---

### What to Expect

✅ Terminal Output:
```
✔ Compiled successfully.
✔ Compiled successfully with 0 warnings.

Initial Chunk Files   | Names              | Size
main.js               | main               | 642 kB
styles.css            | styles             | 145 kB
polyfills.js          | polyfills          | 128 kB
scripts.js            | scripts            |  65 kB

Application bundle generated successfully.

The application is running on: http://localhost:4200/
```

✅ Browser opens automatically to: `http://localhost:4200`

---

## 🟢 Everything is GREEN? Test It!

### Immediate Test (2 minutes)

1. **Fill Form:**
   - Width: `300`
   - Height: `250`
   - Fabric: Pick any (e.g., "Ten Cate Εκρού")
   - Fabric Code: `TEN-001`
   - Axle: Pick any (e.g., "Άξονας Φ70")
   - Movement: Select "Χειροκίνητο"
   - Mechanism: Pick any (e.g., "Καρέ 4Ρ")

2. **Watch Real-Time:**
   - ✅ Numbers appear below as you type
   - ✅ Price preview shows up
   - ✅ Button "Προσθήκη Τέντας" becomes enabled

3. **Click "Προσθήκη Τέντας":**
   - ✅ Card appears with your awning
   - ✅ Order summary shows at bottom
   - ✅ Total price calculated

4. **Try Adding Another:**
   - Fill form again with different options
   - Click button again
   - ✅ Second awning appears
   - ✅ Totals updated

---

## 🔴 Something's Wrong?

### Error 1: "Port 4200 already in use"
```bash
# Use different port
ng serve --port 4300 --open
```

### Error 2: "Module not found"
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Error 3: "ng: command not found"
```bash
# Install Angular CLI globally
npm install -g @angular/cli@latest
npm start
```

### Error 4: "Permission denied"
```bash
# On Mac/Linux, might need permissions
chmod +x start.sh
npm start
```

### Error 5: Lots of red in console
```bash
# Check Node version
node --version  # Should be v18.0.0 or higher

# If old version, update Node from nodejs.org
```

---

## 🧪 Validation Checklist

Before considering it "working", verify:

### ✅ Application Loads
- [ ] Browser opens to http://localhost:4200
- [ ] No console errors (F12 → Console tab)
- [ ] Form loads with empty fields

### ✅ Form Fields Present
- [ ] Width input field
- [ ] Height input field
- [ ] Fabric dropdown
- [ ] Fabric code input
- [ ] Axle dropdown
- [ ] Radio buttons for movement type
- [ ] Mechanism dropdown
- [ ] Motor dropdown (hidden)
- [ ] Checkboxes for extras
- [ ] "Προσθήκη Τέντας" button

### ✅ Form Validation Works
- [ ] Try clicking button with empty form → disabled
- [ ] Fill width only → still disabled
- [ ] Fill all → button becomes enabled

### ✅ Real-Time Calculations
- [ ] Select all fields
- [ ] ✅ Price preview appears
- [ ] Change weight → price updates immediately
- [ ] Change fabric → price updates
- [ ] Check "Χούφτα" → price adds €20

### ✅ Add Awning Works
- [ ] Click "Προσθήκη Τέντας"
- [ ] Form resets
- [ ] Card appears below
- [ ] Summary shows at bottom

### ✅ Multiple Awnings
- [ ] Add first awning
- [ ] Fill different values
- [ ] Add second awning
- [ ] Both cards visible
- [ ] Total sums them up

### ✅ Buttons Work
- [ ] Delete button removes awning
- [ ] Save button shows alert with total
- [ ] Email button shows alert with confirmation

**If all ✅, then WORKING PERFECTLY!** 🎉

---

## 🎯 Common Test Scenarios

### Scenario 1: Entry Level
```
Width: 200 cm
Height: 150 cm
Fabric: Calbari Εκρού (18€/τ.μ.)
Axle: Φ60 (7€/μ)
Manual: Καρέ 2Ρ (20€)
No Extras

Expected Total: ~€180-200 (with VAT)
```

### Scenario 2: Mid Range
```
Width: 300 cm
Height: 250 cm
Fabric: Ten Cate Εμπριμέ (22€/τ.μ.)
Axle: Φ70 (11€/μ)
Manual: Καρέ 4Ρ (22€)
With Χούφτα

Expected Total: ~€350-380 (with VAT)
```

### Scenario 3: Premium
```
Width: 400 cm
Height: 300 cm
Fabric: Sattler Αδιάβροχο (30€/τ.μ.)
Axle: Φ85 (18€/μ)
Motor: Ασύρματο (300€)
With all extras

Expected Total: €2,000+ (with VAT)
```

---

## 🛑 When to Stop & Report Issue

If after 15 minutes the app doesn't load, try:

```bash
# Full nuclear reset
rm -rf node_modules
rm package-lock.json
npm cache clean --force
npm install
npm start
```

If STILL doesn't work, check:
1. Node version: `node --version` (must be ≥18)
2. npm version: `npm --version` (must be ≥9)
3. Disk space: At least 1GB free
4. Antivirus: Might be blocking npm

---

## 🎉 Success!

Once it works, you have a **fully functional Awning Order Form** with:
✅ Real-time calculations
✅ Form validation
✅ Multiple awning management
✅ Fabric & mechanism selection
✅ Automatic VAT calculation
✅ Save & email functionality

**Happy Testing!** 🚀
