/**
 * Σταθερές και δεδομένα για Άξονες & Μηχανισμούς
 */

// Άξονες με τιμολόγηση ανά μέτρο
export interface Axle {
  id: string;
  name: string;
  diameter: number; // Φ (mm)
  pricePerMeter: number; // €/μ
  constructionType?: string; // π.χ. "with rings"
}

export const AXLES: Axle[] = [
  { id: 'axle_60', name: 'Άξονας Φ60', diameter: 60, pricePerMeter: 7 },
  { id: 'axle_70', name: 'Άξονας Φ70', diameter: 70, pricePerMeter: 11 },
  { id: 'axle_78', name: 'Άξονας Φ78', diameter: 78, pricePerMeter: 15 },
  { id: 'axle_85', name: 'Άξονας Φ85', diameter: 85, pricePerMeter: 18 }
];

// Μηχανισμοί (Χειροκίνητο)
export interface Mechanism {
  id: string;
  name: string;
  price: number;
  needsLamaki?: boolean; // Χρειάζεται λαμάκι;
}

export const MANUAL_MECHANISMS: Mechanism[] = [
  { id: 'kare_4p', name: 'Καρέ 4Ρ', price: 22, needsLamaki: true },
  { id: 'kare_2p', name: 'Καρέ 2Ρ', price: 20, needsLamaki: true },
  { id: 'markizas', name: 'Μαρκίζας', price: 19, needsLamaki: false },
  { id: 'lamaki', name: 'Λαμάκι', price: 20, needsLamaki: true },
  { id: 'kare_long_hole', name: 'Καρέ Μακριά Θηλειά', price: 12, needsLamaki: true },
  { id: 'kare_short_hole', name: 'Καρέ Κοντή Θηλειά', price: 11, needsLamaki: true }
];

// Τύποι Μοτέρ (Ηλεκτροκίνηση)
export interface Motor {
  id: string;
  name: string;
  price: number;
  type: 'wireless' | 'wired';
}

export const MOTORS: Motor[] = [
  { 
    id: 'motor_wireless', 
    name: 'Ασύρματο με Αντίληψη Εμποδίου', 
    price: 300, 
    type: 'wireless' 
  },
  { 
    id: 'motor_wired', 
    name: 'Ενσύρματο με Μπουτόν', 
    price: 200, 
    type: 'wired' 
  }
];

// Τύπος Κίνησης
export enum MovementType {
  MANUAL_STANDARD = 'manual_std',
  MANUAL_TENSIONER = 'manual_tensioner',
  MOTOR = 'motor'
}

// Extras
export interface Extra {
  id: string;
  name: string;
  price: number;
  type: 'fixed' | 'per_sqm'; // fixed τιμή ή ανά τ.μ.
}

export const EXTRAS: Extra[] = [
  { 
    id: 'hufta_aluminum', 
    name: 'Χούφτα Αλουμινίου', 
    price: 20, 
    type: 'fixed' 
  },
  { 
    id: 'stitheo', 
    name: 'Στηθαίο με Κολόνες (Έξτρα +10 €/τ.μ. στο ύφασμα)', 
    price: 10, 
    type: 'per_sqm' 
  }
];
