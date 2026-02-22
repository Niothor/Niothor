#!/bin/bash

#########################################
# 🎪 ΤΕΝΤΑ ΜΕ ΑΝΤΙΡΙΔΕΣ
# Order Form - Automatic Setup & Run
# 
# Αυτό το script εγκαταστήνει και τρέχει
# την εφαρμογή αυτόματα
#########################################

set -e  # Exit on error

echo "======================================"
echo "🎪 Τέντα με Αντιρίδες"
echo "Order Form Application"
echo "======================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Step 1: Check Node.js installation
print_info "Step 1/5: Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed!"
    echo ""
    echo "Please download and install from: https://nodejs.org"
    exit 1
fi

NODE_VERSION=$(node -v)
print_status "Node.js found: $NODE_VERSION"

# Check npm
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed!"
    exit 1
fi

NPM_VERSION=$(npm -v)
print_status "npm found: $NPM_VERSION"
echo ""

# Step 2: Navigate to project directory
print_info "Step 2/5: Navigating to project directory..."
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"
print_status "Current directory: $(pwd)"
echo ""

# Step 3: Install dependencies
print_info "Step 3/5: Installing dependencies..."
print_warning "This may take 2-5 minutes on first run..."
echo ""

if [ ! -d "node_modules" ]; then
    npm install --silent
    print_status "Dependencies installed successfully"
else
    print_status "Dependencies already installed"
fi
echo ""

# Step 4: Build the project
print_info "Step 4/5: Building the project..."
# Optional: build before serve for faster startup
print_status "Project ready to serve"
echo ""

# Step 5: Start the development server
print_info "Step 5/5: Starting development server..."
echo ""
print_status "======================================"
print_status "🚀 READY TO GO!"
print_status "======================================"
echo ""
echo -e "${GREEN}Application will be available at:${NC}"
echo -e "${BLUE}  👉 http://localhost:4200${NC}"
echo ""
print_warning "Press Ctrl+C to stop the server"
echo ""
echo "======================================"
echo ""

# Start the server
npm start
