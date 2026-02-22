/**
 * Interface για τα δεδομένα της τέντας με αντιρίδες
 */

export interface AwningWithRibbonsData {
  // Βασικά στοιχεία
  width: number;
  height: number;

  // Ύφασμα
  fabricId: string;
  fabricCode: string;

  // Άξονας
  axleId: string;

  // Κίνηση
  movementType: 'manual' | 'motor'; // Simple binary choice
  
  // Χειροκίνητες επιλογές
  manualMechanismId?: string;
  tensioner?: boolean; // Με εντατήρα Φ48;

  // Ηλεκτροκίνητες επιλογές
  motorId?: string;

  // Extras
  extras: {
    hufta: boolean;
    stitheo: boolean;
  };

  // Για πολλαπλές τέντες
  quantity?: number;

  // Υπολογισμένες τιμές (προσοχή: μόνο για display)
  calculations?: {
    fabricArea: number; // Πλάτος * Ύψος
    fabricCost: number;
    axleCost: number;
    mechanismCost: number;
    extrasCost: number;
    subtotal: number;
    vat: number;
    total: number;
  };
}

/**
 * Interface για αποθήκευση παραγγελίων
 */
export interface AwningOrder {
  id: string;
  createdAt: Date;
  customerEmail: string;
  awnings: AwningWithRibbonsData[];
  totalAmount: number;
}
