/**
 * Υφάσματα και τιμές
 * 
 * Όλες οι τιμές είναι ανά τετραγωνικό μέτρο (€/τ.μ.)
 * Δεν περιέχουν ΦΠΑ - θα υπολογιστεί στο τέλος
 */

export interface Fabric {
  id: string;
  brand: string;
  type: string;
  pricePerSqm: number; // Τιμή ανά τετραγωνικό μέτρο
}

export const FABRICS: Fabric[] = [
  // Ten Cate
  { id: 'tencate-ecru', brand: 'Ten Cate', type: 'Εκρού', pricePerSqm: 19 },
  { id: 'tencate-emprimi', brand: 'Ten Cate', type: 'Εμπριμέ', pricePerSqm: 22 },

  // Calbari
  { id: 'calbari-ecru', brand: 'Calbari', type: 'Εκρού', pricePerSqm: 18 },
  { id: 'calbari-emprimi', brand: 'Calbari', type: 'Εμπριμέ', pricePerSqm: 21 },

  // Das
  { id: 'das-ecru', brand: 'Das', type: 'Εκρού', pricePerSqm: 18 },
  { id: 'das-emprimi', brand: 'Das', type: 'Εμπριμέ', pricePerSqm: 21 },

  // Para
  { id: 'para-solid', brand: 'Para', type: 'Solid', pricePerSqm: 22 },
  { id: 'para-adiavroho', brand: 'Para', type: 'Αδιάβροχο', pricePerSqm: 30 },

  // Sattler
  { id: 'sattler-solid', brand: 'Sattler', type: 'Solid', pricePerSqm: 22 },
  { id: 'sattler-lumera', brand: 'Sattler', type: 'Lumera', pricePerSqm: 25 },
  { id: 'sattler-adiavroho', brand: 'Sattler', type: 'Αδιάβροχο', pricePerSqm: 30 }
];

// Σταθερές για τιμολόγηση
export const VAT_RATE = 0.24; // ΦΠΑ 24%
export const DEFAULT_VAT_RATE = VAT_RATE; // Προεπιλογή

/**
 * Βοηθητική συνάρτηση για λήψη ύφασματος ανά ID
 */
export function getFabricById(id: string): Fabric | undefined {
  return FABRICS.find(f => f.id === id);
}

/**
 * Βοηθητική συνάρτηση για λήψη όλων των ευδιάκριτων ονομάτων υφασμάτων
 */
export function getUniqueFabricNames(): string[] {
  const names = new Set<string>();
  FABRICS.forEach(f => {
    names.add(`${f.brand} ${f.type}`);
  });
  return Array.from(names).sort();
}

/**
 * Βοηθητική συνάρτηση για υπολογισμό της τιμής με ΦΠΑ
 */
export function calculatePriceWithVAT(pricePerSqm: number, vatRate: number = VAT_RATE): number {
  return pricePerSqm * (1 + vatRate);
}

/**
 * Βοηθητική συνάρτηση για υπολογισμό συνολικής τιμής
 */
export function calculateTotalPrice(
  pricePerSqm: number,
  squareMeters: number,
  includeVAT: boolean = false,
  vatRate: number = VAT_RATE
): number {
  const totalBase = pricePerSqm * squareMeters;
  return includeVAT ? totalBase * (1 + vatRate) : totalBase;
}
