import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AwningWithRibbonsData, AwningOrder } from '../models/awning';
import { AXLES, MANUAL_MECHANISMS, MOTORS, EXTRAS, Axle, Mechanism, Motor } from '../constants/awnings';
import { FABRICS } from '../constants/fabrics';
import { VAT_RATE } from '../constants/fabrics';

@Injectable({
  providedIn: 'root'
})
export class AwningService {

  private awningsSubject = new BehaviorSubject<AwningWithRibbonsData[]>([]);
  public awnings$ = this.awningsSubject.asObservable();

  constructor() { }

  // ===== GETTERS =====

  getAxles(): Observable<Axle[]> {
    return new Observable(observer => {
      observer.next([...AXLES]);
      observer.complete();
    });
  }

  getManualMechanisms(): Observable<Mechanism[]> {
    return new Observable(observer => {
      observer.next([...MANUAL_MECHANISMS]);
      observer.complete();
    });
  }

  getMotors(): Observable<Motor[]> {
    return new Observable(observer => {
      observer.next([...MOTORS]);
      observer.complete();
    });
  }

  getExtras(): Observable<any[]> {
    return new Observable(observer => {
      observer.next([...EXTRAS]);
      observer.complete();
    });
  }

  // ===== AWNING MANAGEMENT =====

  addAwning(awning: AwningWithRibbonsData): void {
    const current = this.awningsSubject.value;
    const calculated = this.calculateAwningCost(awning);
    this.awningsSubject.next([...current, calculated]);
  }

  updateAwning(index: number, awning: AwningWithRibbonsData): void {
    const current = this.awningsSubject.value;
    const updated = [...current];
    updated[index] = this.calculateAwningCost(awning);
    this.awningsSubject.next(updated);
  }

  removeAwning(index: number): void {
    const current = this.awningsSubject.value;
    this.awningsSubject.next(current.filter((_, i) => i !== index));
  }

  getAwnings(): AwningWithRibbonsData[] {
    return this.awningsSubject.value;
  }

  resetAwnings(): void {
    this.awningsSubject.next([]);
  }

  // ===== CALCULATIONS =====

  /**
   * Υπολογίζει το κόστος μίας τέντας
   * 
   * Τύπος για Ύφασμα:
   * (Πλάτος + 15cm) × (Ύψος + 70cm) × Τιμή υφάσματος ανά τ.μ.
   */
  calculateAwningCost(awning: AwningWithRibbonsData): AwningWithRibbonsData {
    // Υπολογισμός εμβαδού με περιθώριο
    // Πλάτος: +15cm, Ύψος: +70cm
    const fabricWidth = (awning.width + 15) / 100; // Μετατροπή σε μέτρα
    const fabricHeight = (awning.height + 70) / 100; // Μετατροπή σε μέτρα
    const fabricArea = fabricWidth * fabricHeight; // Σε τ.μ.
    
    // Κόστος ύφασματος
    const fabric = FABRICS.find(f => f.id === awning.fabricId);
    const fabricCost = fabric ? fabricArea * fabric.pricePerSqm : 0;

    // Κόστος άξονα
    const axle = AXLES.find(a => a.id === awning.axleId);
    const axleCost = axle ? (awning.width / 100) * axle.pricePerMeter : 0; // πλάτος σε μέτρα

    // Κόστος μηχανισμού
    let mechanismCost = 0;
    if (awning.movementType === 'manual' && awning.manualMechanismId) {
      const mechanism = MANUAL_MECHANISMS.find(m => m.id === awning.manualMechanismId);
      mechanismCost = mechanism ? mechanism.price : 0;
    } else if (awning.movementType === 'motor' && awning.motorId) {
      const motor = MOTORS.find(m => m.id === awning.motorId);
      mechanismCost = motor ? motor.price : 0;
    }

    // Κόστος extras
    let extrasCost = 0;
    if (awning.extras.hufta) {
      extrasCost += 20; // Fixed price
    }
    if (awning.extras.stitheo) {
      extrasCost += fabricArea * 10; // Per sqm
    }

    // Σύνολα
    const subtotal = fabricCost + axleCost + mechanismCost + extrasCost;
    const vat = subtotal * VAT_RATE;
    const total = subtotal + vat;

    return {
      ...awning,
      calculations: {
        fabricArea,
        fabricCost,
        axleCost,
        mechanismCost,
        extrasCost,
        subtotal,
        vat,
        total
      }
    };
  }

  /**
   * Υπολογίζει το συνολό κόστος όλων των τεντών
   */
  calculateTotalCost(): { subtotal: number; vat: number; total: number } {
    const awnings = this.awningsSubject.value;
    let subtotal = 0;
    let vat = 0;
    let total = 0;

    awnings.forEach(awning => {
      if (awning.calculations) {
        subtotal += awning.calculations.subtotal;
        vat += awning.calculations.vat;
        total += awning.calculations.total;
      }
    });

    return { subtotal, vat, total };
  }

  /**
   * Βολική συνάρτηση για αποθήκευση σε αρχείο
   */
  exportAwningsAsJSON(): string {
    return JSON.stringify(this.awningsSubject.value, null, 2);
  }

  /**
   * Βολική συνάρτηση για πολλαπλές τέντες
   */
  getAwningsSummary(): { count: number; total: number; details: string[] } {
    const awnings = this.awningsSubject.value;
    const total = this.calculateTotalCost().total;
    const details = awnings.map((a, i) => 
      `Τέντα ${i + 1}: ${a.width}cm x ${a.height}cm - ${a.calculations?.total.toFixed(2)}€`
    );

    return {
      count: awnings.length,
      total,
      details
    };
  }
}
