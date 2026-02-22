import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AwningService } from '../../services/awning.service';
import { FabricService } from '../../services/fabric.service';
import { AwningWithRibbonsData } from '../../models/awning';
import { Axle, Mechanism, Motor, AXLES, MANUAL_MECHANISMS, MOTORS, EXTRAS } from '../../constants/awnings';
import { Fabric } from '../../constants/fabrics';

@Component({
  selector: 'app-awning-ribbons-form',
  templateUrl: './awning-ribbons-form.component.html',
  styleUrls: ['./awning-ribbons-form.component.scss']
})
export class AwningRibbonsFormComponent implements OnInit {

  form!: FormGroup;
  awnings: AwningWithRibbonsData[] = [];
  
  // Data lists
  fabrics: Fabric[] = [];
  axles: Axle[] = AXLES;
  manualMechanisms: Mechanism[] = MANUAL_MECHANISMS;
  motors: Motor[] = MOTORS;
  extras = EXTRAS;

  // UI state
  isManualMode = true;
  fabricSearchText = '';
  
  // Calculations
  currentCalculations: any = null;

  constructor(
    private fb: FormBuilder,
    private awningService: AwningService,
    private fabricService: FabricService
  ) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
    this.fabricService.getAllFabrics().subscribe(fabrics => {
      this.fabrics = fabrics;
    });

    this.awningService.awnings$.subscribe(awnings => {
      this.awnings = awnings;
    });

    // Watch for movement type changes
    this.form.get('movementType')?.valueChanges.subscribe(type => {
      this.isManualMode = type === 'manual';
      this.updateFormValidators();
      this.recalculate();
    });

    // Watch for form changes to recalculate
    this.form.valueChanges.subscribe(() => this.recalculate());
  }

  private createForm(): FormGroup {
    return this.fb.group({
      width: [null, [Validators.required, Validators.min(10), Validators.max(1000)]],
      height: [null, [Validators.required, Validators.min(10), Validators.max(1000)]],
      fabricId: ['', Validators.required],
      fabricCode: [''],
      axleId: ['', Validators.required],
      movementType: ['manual', Validators.required],
      manualMechanismId: ['', this.manualValidator.bind(this)],
      tensioner: [false],
      motorId: ['', this.motorValidator.bind(this)],
      hufta: [false],
      stitheo: [false]
    });
  }

  private manualValidator(control: any): { [key: string]: any } | null {
    if (this.isManualMode && !control.value) {
      return { required: true };
    }
    return null;
  }

  private motorValidator(control: any): { [key: string]: any } | null {
    if (!this.isManualMode && !control.value) {
      return { required: true };
    }
    return null;
  }

  private updateFormValidators(): void {
    const mechanismCtrl = this.form.get('manualMechanismId');
    const motorCtrl = this.form.get('motorId');

    if (this.isManualMode) {
      mechanismCtrl?.setValidators([Validators.required]);
      motorCtrl?.setValidators([]);
    } else {
      motorCtrl?.setValidators([Validators.required]);
      mechanismCtrl?.setValidators([]);
    }

    mechanismCtrl?.updateValueAndValidity({ emitEvent: false });
    motorCtrl?.updateValueAndValidity({ emitEvent: false });
  }

  private recalculate(): void {
    if (this.form.valid) {
      const mockAwning = this.buildAwning();
      this.currentCalculations = this.awningService.calculateAwningCost(mockAwning).calculations;
    } else {
      this.currentCalculations = null;
    }
  }

  private buildAwning(): AwningWithRibbonsData {
    const formValue = this.form.value;
    return {
      width: formValue.width,
      height: formValue.height,
      fabricId: formValue.fabricId,
      fabricCode: formValue.fabricCode,
      axleId: formValue.axleId,
      movementType: formValue.movementType,
      manualMechanismId: formValue.manualMechanismId || undefined,
      tensioner: formValue.tensioner,
      motorId: formValue.motorId || undefined,
      extras: {
        hufta: formValue.hufta,
        stitheo: formValue.stitheo
      }
    };
  }

  getFabricLabel(fabricId: string): string {
    const fabric = this.fabrics.find(f => f.id === fabricId);
    return fabric ? `${fabric.brand} ${fabric.type}` : '';
  }

  getAxleLabel(axleId: string): string {
    const axle = this.axles.find(a => a.id === axleId);
    return axle ? axle.name : '';
  }

  getMechanismLabel(mechId: string): string {
    const mech = this.manualMechanisms.find(m => m.id === mechId);
    return mech ? mech.name : '';
  }

  getMotorLabel(motorId: string): string {
    const motor = this.motors.find(m => m.id === motorId);
    return motor ? motor.name : '';
  }

  get orderSubtotal(): number {
    return this.awnings.reduce((s, a) => s + (a.calculations?.subtotal || 0), 0);
  }

  get orderVat(): number {
    return this.awnings.reduce((s, a) => s + (a.calculations?.vat || 0), 0);
  }

  get orderTotal(): number {
    return this.awnings.reduce((s, a) => s + (a.calculations?.total || 0), 0);
  }

  addAwning(): void {
    if (this.form.valid) {
      const awning = this.buildAwning();
      this.awningService.addAwning(awning);
      this.form.reset({ movementType: 'manual' });
      this.currentCalculations = null;
      this.isManualMode = true;
    }
  }

  removeAwning(index: number): void {
    this.awningService.removeAwning(index);
  }

  saveOrder(): void {
    const summary = this.awningService.getAwningsSummary();
    console.log('Order saved:', summary);
    alert(`Παραγγελία αποθηκευμένη με ${summary.count} τέντα(ες). Σύνολο: €${summary.total.toFixed(2)}`);
  }

  sendEmail(): void {
    const awnings = this.awningService.getAwnings();
    const summary = this.awningService.getAwningsSummary();
    
    if (awnings.length === 0) {
      alert('Δεν υπάρχουν τέντες για αποστολή!');
      return;
    }

    // TODO: Integrate with email service
    const data = JSON.stringify({
      awnings,
      total: summary.total,
      createdAt: new Date()
    }, null, 2);

    console.log('Sending email with data:', data);
    alert(`Email θα αποσταλεί στο orders@tsoukalasco.com\n\nΣύνολο: €${summary.total.toFixed(2)}`);
    
    // Reset
    this.awningService.resetAwnings();
  }
}
