# Order Form - Angular Application

Μια σύγχρονη Angular εφαρμογή για διαχείριση παραγγελιών προϊόντων με διαστάσεις.

## 🎯 Χαρακτηριστικά

- ✅ **Multi-step Stepper Form** - 4 βήματα (Στοιχεία → Προϊόντα → Διαστάσεις → Επιβεβαίωση)
- 🎨 **Responsive Design** - Λειτουργεί σε όλες τις συσκευές
- 📦 **Δυναμικές Διαστάσεις** - Ανάλογα με το επιλεγμένο προϊόν
- 🖼️ **Εικόνες Προϊόντων** - Visual product selection
- 🔐 **Form Validation** - Πλήρης έλεγχος εγκυρότητας
- 🎯 **Material Design** - Angular Material UI

## 📂 Δομή Project

```
order-form/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── customer-form/     # Βήμα 1: Προσωπικά στοιχεία
│   │   │   ├── product-selection/ # Βήμα 2: Επιλογή προϊόντος
│   │   │   ├── dimensions/        # Βήμα 3: Διαστάσεις
│   │   │   └── review/            # Βήμα 4: Ανασκόπηση & υποβολή
│   │   ├── services/
│   │   │   ├── product.service.ts # Διαχείριση προϊόντων
│   │   │   ├── order.service.ts   # Διαχείριση παραγγελιών
│   │   │   └── fabric.service.ts  # Διαχείριση υφασμάτων & τιμών
│   │   ├── constants/
│   │   │   └── fabrics.ts         # 📊 Υφάσματα & Τιμές (εύκολη τροποποίηση)
│   │   ├── models/
│   │   │   └── index.ts           # TypeScript interfaces
│   │   ├── app.module.ts
│   │   ├── app.component.ts
│   │   └── app.component.scss
│   ├── assets/                    # Εικόνες και πόροι
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
└── tsconfig.json
```

## 🚀 Εγκατάσταση & Εκτέλεση

### Prerequisites
- Node.js 18+
- Angular CLI 17+

### Steps
1. **Εγκατάσταση dependencies:**
   ```bash
   npm install
   ```

2. **Εκκίνηση development server:**
   ```bash
   npm start
   ```
   Το application θα είναι διαθέσιμο στο `http://localhost:4200`

3. **Build για production:**
   ```bash
   npm run build
   ```

## 📋 Τα 4 Βήματα

### Βήμα 1️⃣ - Προσωπικά Στοιχεία
- **Ονοματεπώνυμο** (ελάχιστο 3 χαρακτήρες)
- **Διεύθυνση** (ελάχιστο 5 χαρακτήρες)
- **Τηλέφωνο** (10-ψήφιος αριθμός)

### Βήμα 2️⃣ - Επιλογή Προϊόντου
Διαθέσιμα προϊόντα και υπηρεσίες:
- 🎪 Τέντα με Αντιρίδες
- 🎭 Τέντα με Βραχίονες
- 📏 Τέντα Κάθετη
- 🔄 Αλλαγή Υφάσματος
- 🔧 Επισκευή

Κάθε προϊόν εμφανίζεται με εικόνα και περιγραφή.

### Βήμα 3️⃣ - Διαστάσεις
Δυναμικές διαστάσεις ανάλογα με το προϊόν:
- **Τέντα με Αντιρίδες**: Πλάτος, Ύψος, Ύφασμα , Κωδικός Υφάσματος
- **Τέντα με Βραχίονες**: Πλάτος, Μέγιστη Έκταση, Τύπος Βραχιόνων, Κωδικός Υφάσματος
- **Τέντα Κάθετη**: Πλάτος, Ύψος, Ύφασμα, Κωδικός Υφάσματος
- **Αλλαγή Υφάσματος**: Τωρινό Πλάτος, Τωρινό Βάθος, Νέο Ύφασμα, Κωδικός Υφάσματος
- **Επισκευή**: Τύπος Ζημιάς, Σοβαρότητα, Περιοχή Επεξεργασίας, Σημειώσεις

### Βήμα 4️⃣ - Επιβεβαίωση
Ανασκόπηση όλων των δεδομένων πριν την τελική υποβολή.

## 🛠️ Τεχνολογίες

- **Angular 17** - Frontend framework
- **Angular Material** - UI components
- **TypeScript** - Programming language
- **RxJS** - Reactive programming
- **SCSS** - Styling

## 🔧 Εγκατάστασης Dependencies

Αν χρειαστεί να εγκαταστήσετε χειροκίνητα το Angular Material:

```bash
ng add @angular/material
```

## 📝 Αρχιτεκτονική

### Services
- **ProductService**: Διαχείριση προϊόντων (mock data)
- **OrderService**: Διαχείριση κατάστασης παραγγελίας με RxJS BehaviorSubject

### State Management
Χρησιμοποιούμε RxJS BehaviorSubject για απλή διαχείριση κατάστασης χωρίς Redux/NgRx.

## 🎨 Διαχείριση Υφασμάτων & Τιμών

### 📊 Βάση Δεδομένων Υφασμάτων

Όλα τα υφάσματα και οι τιμές τους βρίσκονται στο:
📁 **`src/app/constants/fabrics.ts`**

Αυτό το αρχείο περιέχει:
- ✅ 11 υφάσματα από 5 διαφορετικές εταιρείες
- ✅ Τιμές ανά τετραγωνικό μέτρο (€/τ.μ.)
- ✅ Βοηθητικές συναρτήσεις για υπολογισμούς

### 🔄 Πώς να Τροποποιήσεις

#### Αλλαγή Τιμής:
```typescript
// Στο src/app/constants/fabrics.ts
{ id: 'tencate-ecru', brand: 'Ten Cate', type: 'Εκρού', pricePerSqm: 19 } // ← Άλλαξε τον αριθμό
```

#### Προσθήκη Νέου Υφάσματος:
```typescript
// Πρόσθεσε στο FABRICS array
{ id: 'new-brand-type', brand: 'Νέα Εταιρεία', type: 'Τύπος', pricePerSqm: 25 }
```

#### Διαγραφή Υφάσματος:
Απλώς διέγραψε ολόκληρη τη γραμμή.

### 💰 Τρέχουσα Λίστα Υφασμάτων

| Brand | Τύπος | Τιμή/τ.μ. |
|-------|-------|-----------|
| Ten Cate | Εκρού | 19€ |
| Ten Cate | Εμπριμέ | 22€ |
| Calbari | Εκρού | 18€ |
| Calbari | Εμπριμέ | 21€ |
| Das | Εκρού | 18€ |
| Das | Εμπριμέ | 21€ |
| Para | Solid | 22€ |
| Para | Αδιάβροχο | 30€ |
| Sattler | Solid | 22€ |
| Sattler | Lumera | 25€ |
| Sattler | Αδιάβροχο | 30€ |

### ℹ️ Σημαντικό για Τιμές
- **Τιμές χωρίς ΦΠΑ** - Ο ΦΠΑ (24%) υπολογίζεται αυτόματα στο τέλος
- **Κεντρική βάση δεδομένων** - Όλες οι τιμές ενημερώνονται από ένα αρχείο
- **FabricService** - Χρησιμοποιείται για να ανακτήσουν οι components τις τιμές

Για περισσότερες λεπτομέρειες, δες [src/app/constants/README.md](src/app/constants/README.md).

## 🎨 Styling

Το project χρησιμοποιεί:
- SCSS για components
- Angular Material themes
- Responsive grid layouts
- Modern gradient backgrounds

## ✨ Δυνατότητες Επέκτασης

1. **Backend Integration**: Αντικαταστήστε τα mock data με API calls
2. **Database**: Αποθηκεύστε παραγγελίες σε βάση δεδομένων
3. **Payment Integration**: Προσθέστε σύστημα πληρωμής
4. **Email Notifications**: Αποστολή confirmation emails
5. **User Authentication**: Login/Register system
6. **Order History**: Ιστορικό παραγγελιών χρήστη

## 📧 Support

Για οποιαδήποτε ερώτηση ή πρόβλημα, επικοινωνήστε με το development team.

---

**Made with ❤️ using Angular**
