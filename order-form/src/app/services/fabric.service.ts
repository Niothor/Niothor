import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FABRICS, Fabric, getUniqueFabricNames } from '../constants/fabrics';

@Injectable({
  providedIn: 'root'
})
export class FabricService {

  constructor() { }

  /**
   * Λήψη όλων των υφασμάτων
   */
  getAllFabrics(): Observable<Fabric[]> {
    return of([...FABRICS]);
  }

  /**
   * Λήψη μοναδικών ονομάτων υφασμάτων (brand + type)
   */
  getFabricNames(): Observable<string[]> {
    return of(getUniqueFabricNames());
  }

  /**
   * Λήψη ύφασματος ανά ID
   */
  getFabricById(id: string): Observable<Fabric | undefined> {
    return of(FABRICS.find(f => f.id === id));
  }

  /**
   * Λήψη ύφασματος ανά brand και type
   */
  getFabricByBrandAndType(brand: string, type: string): Observable<Fabric | undefined> {
    return of(FABRICS.find(f => f.brand === brand && f.type === type));
  }

  /**
   * Λήψη τιμής ανά τ.μ. για συγκεκριμένο ύφασμα
   */
  getPricePerSqm(fabricId: string): Observable<number | null> {
    const fabric = FABRICS.find(f => f.id === fabricId);
    return of(fabric ? fabric.pricePerSqm : null);
  }

  /**
   * Φιλτράρισμα υφασμάτων ανά brand
   */
  getFabricsByBrand(brand: string): Observable<Fabric[]> {
    return of(FABRICS.filter(f => f.brand === brand));
  }

  /**
   * Φιλτράρισμα υφασμάτων ανά type
   */
  getFabricsByType(type: string): Observable<Fabric[]> {
    return of(FABRICS.filter(f => f.type === type));
  }

  /**
   * Λήψη μοναδικών brands
   */
  getUniqueBrands(): Observable<string[]> {
    const brands = new Set(FABRICS.map(f => f.brand));
    return of(Array.from(brands).sort());
  }

  /**
   * Λήψη μοναδικών types
   */
  getUniqueTypes(): Observable<string[]> {
    const types = new Set(FABRICS.map(f => f.type));
    return of(Array.from(types).sort());
  }
}
