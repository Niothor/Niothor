# Σταθερές Εφαρμογής (Constants)

## 📋 fabrics.ts - Βάση Δεδομένων Υφασμάτων

Αυτό το αρχείο περιέχει τα δεδομένα των υφασμάτων και τις τιμές τους.

### 🔄 Πώς να τροποποιήσεις τα δεδομένα

#### 1️⃣ Προσθήκη νέου ύφασματος

Πρόσθεσε ένα νέο object στο `FABRICS` array:

```typescript
FABRICS: Fabric[] = [
  // ... υπάρχοντα υφάσματα ...
  
  // Νέο ύφασμα
  { id: 'brand-type', brand: 'Όνομα Brand', type: 'Τύπος', pricePerSqm: 25 },
]
```

**Παράδειγμα:**
```typescript
{ id: 'MyFabric-ecru', brand: 'MyBrand', type: 'Εκρού', pricePerSqm: 20 }
```

#### 2️⃣ Τροποποίηση υπάρχουσας τιμής

Βρες το ύφασμα και άλλαξε το `pricePerSqm`:

```typescript
// Πριν
{ id: 'tencate-ecru', brand: 'Ten Cate', type: 'Εκρού', pricePerSqm: 19 }

// Μετά (αν αλλάξει η τιμή σε 20€)
{ id: 'tencate-ecru', brand: 'Ten Cate', type: 'Εκρού', pricePerSqm: 20 }
```

#### 3️⃣ Διαγραφή ύφασματος

Απλά διέγραψε ολόκληρη τη γραμμή του ύφασματος.

### 💰 Πληροφορίες Τιμών

- **pricePerSqm**: Τιμή ανά τετραγωνικό μέτρο
- **Δεν περιέχουν ΦΠΑ**: Ο ΦΠΑ (24%) υπολογίζεται αυτόματα στο τέλος
- **Νόμισμα**: Κατ' υπόθεση σε €

### 📊 Δομή Interface

```typescript
interface Fabric {
  id: string;           // Μοναδικό ID (brand-type χαμηλά)
  brand: string;        // Όνομα brand (Ten Cate, Calbari, κ.λπ.)
  type: string;         // Τύπος (Εκρού, Εμπριμέ, Solid, κ.λπ.)
  pricePerSqm: number;  // Τιμή ανά τ.μ.
}
```

### 🎯 Τρέχουσα Λίστα Υφασμάτων

| Brand | Τύπος | Τιμή/τ.μ. |
|-------|-------|----------|
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

### 🔧 Χρησιμοποίηση στον κώδικα

Η εφαρμογή μπορεί να χρησιμοποιείται μέσω:
- **FabricService**: Service που παρέχει όλες τις λειτουργίες
- **Βοηθητικές συναρτήσεις**: `getFabricById()`, `calculateTotalPrice()`, κ.λπ.

---

**Σημείωση**: Μην αλλάξεις το `id` μετά τη δημιουργία, γιατί μπορεί να κάνει break τις αναφορές στις παραγγελίες!
