import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Τέντα με Αντιρίδες',
      image: 'https://via.placeholder.com/250x200?text=Τέντα+Αντιρίδες',
      description: 'Τέντα με αντιρίδες για σταθερότητα και ανθεκτικότητα',
      dimensions: [
        { id: 'width', label: 'Πλάτος (cm)', type: 'number', required: true },
        { id: 'depth', label: 'Βάθος (cm)', type: 'number', required: true },
        { id: 'fabricType', label: 'Είδος Υφάσματος', type: 'select', options: ['Βαμβάκι', 'Πολυεστέρας', 'Ακρυλικό'], required: true },
        { id: 'color', label: 'Χρώμα', type: 'select', options: ['Άσπρο', 'Γκρι', 'Μπλε', 'Κόκκινο', 'Κίτρινο'], required: true }
      ]
    },
    {
      id: 2,
      name: 'Τέντα με Βραχίονες',
      image: 'https://via.placeholder.com/250x200?text=Τέντα+Βραχίονες',
      description: 'Τέντα με μηχανικούς βραχίονες για εύκολη λειτουργία',
      dimensions: [
        { id: 'width', label: 'Πλάτος (cm)', type: 'number', required: true },
        { id: 'maxExtension', label: 'Μέγιστη Έκταση (cm)', type: 'number', required: true },
        { id: 'armType', label: 'Τύπος Βραχιόνων', type: 'select', options: ['Χειροκίνητο', 'Ηλεκτρικό', 'Semi-Αυτόματο'], required: true },
        { id: 'color', label: 'Χρώμα', type: 'select', options: ['Άσπρο', 'Γκρι', 'Μπλε', 'Κόκκινο'], required: true }
      ]
    },
    {
      id: 3,
      name: 'Τέντα Κάθετη',
      image: 'https://via.placeholder.com/250x200?text=Τέντα+Κάθετη',
      description: 'Κάθετη τέντα (α/φ) με προστασία από τον ήλιο',
      dimensions: [
        { id: 'width', label: 'Πλάτος (cm)', type: 'number', required: true },
        { id: 'height', label: 'Ύψος (cm)', type: 'number', required: true },
        { id: 'fabricType', label: 'Είδος Υφάσματος', type: 'select', options: ['Βαμβάκι', 'Πολυεστέρας', 'Ακρυλικό'], required: true },
        { id: 'uVprotection', label: 'UV Προστασία', type: 'select', options: ['Ναι', 'Όχι'], required: true }
      ]
    },
    {
      id: 4,
      name: 'Αλλαγή Υφάσματος',
      image: 'https://via.placeholder.com/250x200?text=Αλλαγή+Υφάσματος',
      description: 'Αλλαγή υφάσματος σε υπάρχουσα τέντα',
      dimensions: [
        { id: 'currentWidth', label: 'Τωρινό Πλάτος (cm)', type: 'number', required: true },
        { id: 'currentDepth', label: 'Τωρινό Βάθος (cm)', type: 'number', required: true },
        { id: 'newFabric', label: 'Νέο Ύφασμα', type: 'select', options: ['Βαμβάκι', 'Πολυεστέρας', 'Ακρυλικό', 'Λινό'], required: true },
        { id: 'color', label: 'Χρώμα', type: 'select', options: ['Άσπρο', 'Γκρι', 'Μπλε', 'Κόκκινο', 'Πράσινο'], required: true }
      ]
    },
    {
      id: 5,
      name: 'Επισκευή',
      image: 'https://via.placeholder.com/250x200?text=Επισκευή',
      description: 'Επισκευή τέντας ή άλλων δοματικών υλικών',
      dimensions: [
        { id: 'damageType', label: 'Τύπος Ζημιάς', type: 'select', options: ['Σχισίματα', 'Φθορά Ψεύτρας', 'Σκουριά', 'Άλλο'], required: true },
        { id: 'severity', label: 'Σοβαρότητα', type: 'select', options: ['Μικρή', 'Μεσαία', 'Μεγάλη'], required: true },
        { id: 'area', label: 'Περιοχή Επεξεργασίας (τ.μ.)', type: 'number', required: true },
        { id: 'notes', label: 'Σημειώσεις/Περιγραφή', type: 'text', required: false }
      ]
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }
}
