#!/bin/bash

# Installation and Testing Script for Order Form Application
# Οδηγός Εγκατάστασης & Δοκιμής

echo "🎪 Τέντα με Αντιρίδες - Order Form Application"
echo "=============================================="
echo ""

# 1. Install Dependencies
echo "📦 Step 1: Installing Dependencies..."
npm install
if [ $? -ne 0 ]; then
  echo "❌ npm install failed"
  exit 1
fi
echo "✅ Dependencies installed successfully"
echo ""

# 2. Build the project
echo "🔨 Step 2: Building the project..."
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build failed"
  exit 1
fi
echo "✅ Build successful"
echo ""

# 3. Start the development server
echo "🚀 Step 3: Starting Development Server..."
echo "Application will be available at: http://localhost:4200"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm start
