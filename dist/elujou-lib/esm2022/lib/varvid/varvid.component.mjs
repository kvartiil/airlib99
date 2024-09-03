import { Component } from '@angular/core';
//import { xtee } from '../xtee/xtee';
import { XteechangeComponent } from '../xteechange/xteechange.component';
import * as i0 from "@angular/core";
//import { products } from '../products';
export class VarvidComponent {
    constructor() {
        this.effmadal = new XteechangeComponent;
        this.effmadalNumber = this.effmadal.model1y1;
        this.effkeskmine = new XteechangeComponent;
        this.effkeskmineNumber = this.effkeskmine.model1y2;
        this.effkorge = new XteechangeComponent;
        this.effkorgeNumber = this.effkorge.model1y3;
        this.maksmadal = new XteechangeComponent;
        this.maksmadalNumber = this.maksmadal.model2y1;
        this.makskeskmine = new XteechangeComponent;
        this.makskeskmineNumber = this.makskeskmine.model2y2;
        this.makskorge = new XteechangeComponent;
        this.makskorgeNumber = this.makskorge.model2y3;
        this.voimmadal = new XteechangeComponent;
        this.voimmadalNumber = this.voimmadal.model3y1;
        this.voimkeskmine = new XteechangeComponent;
        this.voimkeskmineNumber = this.voimkeskmine.model3y2;
        this.voimkorge = new XteechangeComponent;
        this.voimkorgeNumber = this.voimkorge.model3y3;
        this.tasumadal = new XteechangeComponent;
        this.tasumadalNumber = this.tasumadal.model4y1;
        this.tasukeskmine = new XteechangeComponent;
        this.tasukeskmineNumber = this.tasukeskmine.model4y2;
        this.tasukorge = new XteechangeComponent;
        this.tasukorgeNumber = this.tasukorge.model4y3;
        this.toomadal = new XteechangeComponent;
        this.toomadalNumber = this.toomadal.model5y1;
        this.tookeskmine = new XteechangeComponent;
        this.tookeskmineNumber = this.tookeskmine.model5y2;
        this.tookorge = new XteechangeComponent;
        this.tookorgeNumber = this.tookorge.model5y3;
    }
    ngOnInit() {
        this.kirjutaVarvid();
    }
    //varvid
    //thresholdConfig = {
    //  '0': {color: '#EFB2B2'},
    //  '0.4': {color: '#FFE1A0'},
    //  '0.6': {color: '#ACCFBA'}
    //};
    kirjutaVarvid() {
        if (this.effmadalNumber > this.effkeskmineNumber && this.effmadalNumber > this.effkorgeNumber) {
            localStorage.setItem("efektVarv", '1');
        }
        if (this.effkeskmineNumber > this.effmadalNumber && this.effkeskmineNumber > this.effkorgeNumber) {
            localStorage.setItem("efektVarv", '2');
        }
        if (this.effkorgeNumber > this.effkeskmineNumber && this.effkorgeNumber > this.effmadalNumber) {
            localStorage.setItem("efektVarv", '3');
        }
        if (this.maksmadalNumber > this.makskeskmineNumber && this.maksmadalNumber > this.makskorgeNumber) {
            localStorage.setItem("makseVarv", '1');
        }
        if (this.makskeskmineNumber > this.maksmadalNumber && this.makskeskmineNumber > this.makskorgeNumber) {
            localStorage.setItem("makseVarv", '2');
        }
        if (this.makskorgeNumber > this.makskeskmineNumber && this.makskorgeNumber > this.maksmadalNumber) {
            localStorage.setItem("makseVarv", '3');
        }
        if (this.voimmadalNumber > this.voimkeskmineNumber && this.voimmadalNumber > this.voimkorgeNumber) {
            localStorage.setItem("voimVarv", '1');
        }
        if (this.voimkeskmineNumber > this.voimmadalNumber && this.voimkeskmineNumber > this.voimkorgeNumber) {
            localStorage.setItem("voimVarv", '2');
        }
        if (this.voimkorgeNumber > this.voimkeskmineNumber && this.voimkorgeNumber > this.voimmadalNumber) {
            localStorage.setItem("voimVarv", '3');
        }
        if (this.tasumadalNumber > this.tasukeskmineNumber && this.tasumadalNumber > this.tasukorgeNumber) {
            localStorage.setItem("tasuvVarv", '1');
        }
        if (this.tasukeskmineNumber > this.tasumadalNumber && this.tasukeskmineNumber > this.tasukorgeNumber) {
            localStorage.setItem("tasuvVarv", '2');
        }
        if (this.tasukorgeNumber > this.tasukeskmineNumber && this.tasukorgeNumber > this.tasumadalNumber) {
            localStorage.setItem("tasuvVarv", '3');
        }
        if (this.toomadalNumber > this.tookeskmineNumber && this.toomadalNumber > this.tookorgeNumber) {
            localStorage.setItem("toojoudVarv", '1');
        }
        if (this.tookeskmineNumber > this.toomadalNumber && this.tookeskmineNumber > this.tookorgeNumber) {
            localStorage.setItem("toojoudVarv", '2');
        }
        if (this.tookorgeNumber > this.tookeskmineNumber && this.tookorgeNumber > this.toomadalNumber) {
            localStorage.setItem("toojoudVarv", '3');
        }
        if (isNaN(this.toomadalNumber)) {
            localStorage.setItem("toojoudVarv", '4');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: VarvidComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: VarvidComponent, isStandalone: true, selector: "varvid-component", ngImport: i0, template: "", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: VarvidComponent, decorators: [{
            type: Component,
            args: [{ selector: 'varvid-component', standalone: true, imports: [XteechangeComponent], template: "" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFydmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi92YXJ2aWQvdmFydmlkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi92YXJ2aWQvdmFydmlkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsc0NBQXNDO0FBQ3RDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQUV6RSx5Q0FBeUM7QUFTekMsTUFBTSxPQUFPLGVBQWU7SUF5QzFCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLG1CQUFtQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLG1CQUFtQixDQUFDO1FBQzNDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQW1CLENBQUM7UUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUU3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQW1CLENBQUM7UUFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksbUJBQW1CLENBQUM7UUFDNUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLEdB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bXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vL2ltcG9ydCB7IHh0ZWUgfSBmcm9tICcuLi94dGVlL3h0ZWUnO1xyXG5pbXBvcnQgeyBYdGVlY2hhbmdlQ29tcG9uZW50IH0gZnJvbSAnLi4veHRlZWNoYW5nZS94dGVlY2hhbmdlLmNvbXBvbmVudCc7XHJcblxyXG4vL2ltcG9ydCB7IHByb2R1Y3RzIH0gZnJvbSAnLi4vcHJvZHVjdHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2YXJ2aWQtY29tcG9uZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdmFydmlkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi92YXJ2aWQuY29tcG9uZW50LnNjc3MnXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtYdGVlY2hhbmdlQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmFydmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgbW9kZWwxeTE6IG51bWJlcjtcclxuICBtb2RlbDF5MjogbnVtYmVyO1xyXG4gIG1vZGVsMXkzOiBudW1iZXI7XHJcblxyXG4gIGVmZm1hZGFsOiBhbnk7XHJcbiAgZWZma2Vza21pbmU6IGFueTtcclxuICBlZmZrb3JnZTogYW55O1xyXG4gIGVmZm1hZGFsTnVtYmVyOiBudW1iZXI7XHJcbiAgZWZma2Vza21pbmVOdW1iZXI6IG51bWJlcjtcclxuICBlZmZrb3JnZU51bWJlcjogbnVtYmVyO1xyXG5cclxuICBtYWtzbWFkYWw6IGFueTtcclxuICBtYWtza2Vza21pbmU6IGFueTtcclxuICBtYWtza29yZ2U6IGFueTtcclxuICBtYWtzbWFkYWxOdW1iZXI6IG51bWJlcjtcclxuICBtYWtza2Vza21pbmVOdW1iZXI6IG51bWJlcjtcclxuICBtYWtza29yZ2VOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgdm9pbW1hZGFsOiBhbnk7XHJcbiAgdm9pbWtlc2ttaW5lOiBhbnk7XHJcbiAgdm9pbWtvcmdlOiBhbnk7XHJcbiAgdm9pbW1hZGFsTnVtYmVyOiBudW1iZXI7XHJcbiAgdm9pbWtlc2ttaW5lTnVtYmVyOiBudW1iZXI7XHJcbiAgdm9pbWtvcmdlTnVtYmVyOiBudW1iZXI7XHJcblxyXG4gIHRhc3VtYWRhbDogYW55O1xyXG4gIHRhc3VrZXNrbWluZTogYW55O1xyXG4gIHRhc3Vrb3JnZTogYW55O1xyXG4gIHRhc3VtYWRhbE51bWJlcjogbnVtYmVyO1xyXG4gIHRhc3VrZXNrbWluZU51bWJlcjogbnVtYmVyO1xyXG4gIHRhc3Vrb3JnZU51bWJlcjogbnVtYmVyO1xyXG5cclxuICB0b29tYWRhbDogYW55O1xyXG4gIHRvb2tlc2ttaW5lOiBhbnk7XHJcbiAgdG9va29yZ2U6IGFueTtcclxuICB0b29tYWRhbE51bWJlcjogbnVtYmVyO1xyXG4gIHRvb2tlc2ttaW5lTnVtYmVyOiBudW1iZXI7XHJcbiAgdG9va29yZ2VOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmVmZm1hZGFsID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XHJcbiAgICB0aGlzLmVmZm1hZGFsTnVtYmVyID0gdGhpcy5lZmZtYWRhbC5tb2RlbDF5MTtcclxuICAgIHRoaXMuZWZma2Vza21pbmUgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcclxuICAgIHRoaXMuZWZma2Vza21pbmVOdW1iZXIgPSB0aGlzLmVmZmtlc2ttaW5lLm1vZGVsMXkyO1xyXG4gICAgdGhpcy5lZmZrb3JnZSA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xyXG4gICAgdGhpcy5lZmZrb3JnZU51bWJlciA9IHRoaXMuZWZma29yZ2UubW9kZWwxeTM7XHJcblxyXG4gICAgdGhpcy5tYWtzbWFkYWwgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcclxuICAgIHRoaXMubWFrc21hZGFsTnVtYmVyID0gdGhpcy5tYWtzbWFkYWwubW9kZWwyeTE7XHJcbiAgICB0aGlzLm1ha3NrZXNrbWluZSA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xyXG4gICAgdGhpcy5tYWtza2Vza21pbmVOdW1iZXIgPSB0aGlzLm1ha3NrZXNrbWluZS5tb2RlbDJ5MjtcclxuICAgIHRoaXMubWFrc2tvcmdlID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XHJcbiAgICB0aGlzLm1ha3Nrb3JnZU51bWJlciA9IHRoaXMubWFrc2tvcmdlLm1vZGVsMnkzO1xyXG5cclxuICAgIHRoaXMudm9pbW1hZGFsID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XHJcbiAgICB0aGlzLnZvaW1tYWRhbE51bWJlciA9IHRoaXMudm9pbW1hZGFsLm1vZGVsM3kxO1xyXG4gICAgdGhpcy52b2lta2Vza21pbmUgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcclxuICAgIHRoaXMudm9pbWtlc2ttaW5lTnVtYmVyID0gdGhpcy52b2lta2Vza21pbmUubW9kZWwzeTI7XHJcbiAgICB0aGlzLnZvaW1rb3JnZSA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xyXG4gICAgdGhpcy52b2lta29yZ2VOdW1iZXIgPSB0aGlzLnZvaW1rb3JnZS5tb2RlbDN5MztcclxuXHJcbiAgICB0aGlzLnRhc3VtYWRhbCA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xyXG4gICAgdGhpcy50YXN1bWFkYWxOdW1iZXIgPSB0aGlzLnRhc3VtYWRhbC5tb2RlbDR5MTtcclxuICAgIHRoaXMudGFzdWtlc2ttaW5lID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XHJcbiAgICB0aGlzLnRhc3VrZXNrbWluZU51bWJlciA9IHRoaXMudGFzdWtlc2ttaW5lLm1vZGVsNHkyO1xyXG4gICAgdGhpcy50YXN1a29yZ2UgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcclxuICAgIHRoaXMudGFzdWtvcmdlTnVtYmVyID0gdGhpcy50YXN1a29yZ2UubW9kZWw0eTM7XHJcblxyXG4gICAgdGhpcy50b29tYWRhbCA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xyXG4gICAgdGhpcy50b29tYWRhbE51bWJlciA9IHRoaXMudG9vbWFkYWwubW9kZWw1eTE7XHJcbiAgICB0aGlzLnRvb2tlc2ttaW5lID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XHJcbiAgICB0aGlzLnRvb2tlc2ttaW5lTnVtYmVyID0gdGhpcy50b29rZXNrbWluZS5tb2RlbDV5MjtcclxuICAgIHRoaXMudG9va29yZ2UgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcclxuICAgIHRoaXMudG9va29yZ2VOdW1iZXIgPSB0aGlzLnRvb2tvcmdlLm1vZGVsNXkzO1xyXG5cclxuICB9XHJcblxyXG5uZ09uSW5pdCgpIHtcclxuICB0aGlzLmtpcmp1dGFWYXJ2aWQoKTtcclxufVxyXG5cclxuICAvL3ZhcnZpZFxyXG4gIC8vdGhyZXNob2xkQ29uZmlnID0ge1xyXG4gIC8vICAnMCc6IHtjb2xvcjogJyNFRkIyQjInfSxcclxuICAvLyAgJzAuNCc6IHtjb2xvcjogJyNGRkUxQTAnfSxcclxuICAvLyAgJzAuNic6IHtjb2xvcjogJyNBQ0NGQkEnfVxyXG4gIC8vfTtcclxuXHJcbiAga2lyanV0YVZhcnZpZCgpIHtcclxuICAgIGlmICh0aGlzLmVmZm1hZGFsTnVtYmVyID4gdGhpcy5lZmZrZXNrbWluZU51bWJlciAmJiB0aGlzLmVmZm1hZGFsTnVtYmVyID4gdGhpcy5lZmZrb3JnZU51bWJlciAgKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZWZla3RWYXJ2XCIsICcxJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5lZmZrZXNrbWluZU51bWJlciA+IHRoaXMuZWZmbWFkYWxOdW1iZXIgJiYgdGhpcy5lZmZrZXNrbWluZU51bWJlciA+IHRoaXMuZWZma29yZ2VOdW1iZXIgICkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImVmZWt0VmFydlwiLCAnMicpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZWZma29yZ2VOdW1iZXIgPiB0aGlzLmVmZmtlc2ttaW5lTnVtYmVyICYmIHRoaXMuZWZma29yZ2VOdW1iZXIgPiB0aGlzLmVmZm1hZGFsTnVtYmVyICApIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlZmVrdFZhcnZcIiwgJzMnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5tYWtzbWFkYWxOdW1iZXIgPiB0aGlzLm1ha3NrZXNrbWluZU51bWJlciAmJiB0aGlzLm1ha3NtYWRhbE51bWJlciA+IHRoaXMubWFrc2tvcmdlTnVtYmVyICApIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtYWtzZVZhcnZcIiwgJzEnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1ha3NrZXNrbWluZU51bWJlciA+IHRoaXMubWFrc21hZGFsTnVtYmVyICYmIHRoaXMubWFrc2tlc2ttaW5lTnVtYmVyID4gdGhpcy5tYWtza29yZ2VOdW1iZXIgICkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1ha3NlVmFydlwiLCAnMicpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubWFrc2tvcmdlTnVtYmVyID4gdGhpcy5tYWtza2Vza21pbmVOdW1iZXIgJiYgdGhpcy5tYWtza29yZ2VOdW1iZXIgPiB0aGlzLm1ha3NtYWRhbE51bWJlciAgKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWFrc2VWYXJ2XCIsICczJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudm9pbW1hZGFsTnVtYmVyID4gdGhpcy52b2lta2Vza21pbmVOdW1iZXIgJiYgdGhpcy52b2ltbWFkYWxOdW1iZXIgPiB0aGlzLnZvaW1rb3JnZU51bWJlciAgKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidm9pbVZhcnZcIiwgJzEnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnZvaW1rZXNrbWluZU51bWJlciA+IHRoaXMudm9pbW1hZGFsTnVtYmVyICYmIHRoaXMudm9pbWtlc2ttaW5lTnVtYmVyID4gdGhpcy52b2lta29yZ2VOdW1iZXIgICkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInZvaW1WYXJ2XCIsICcyJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy52b2lta29yZ2VOdW1iZXIgPiB0aGlzLnZvaW1rZXNrbWluZU51bWJlciAmJiB0aGlzLnZvaW1rb3JnZU51bWJlciA+IHRoaXMudm9pbW1hZGFsTnVtYmVyICApIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ2b2ltVmFydlwiLCAnMycpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnRhc3VtYWRhbE51bWJlciA+IHRoaXMudGFzdWtlc2ttaW5lTnVtYmVyICYmIHRoaXMudGFzdW1hZGFsTnVtYmVyID4gdGhpcy50YXN1a29yZ2VOdW1iZXIgICkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc3V2VmFydlwiLCAnMScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGFzdWtlc2ttaW5lTnVtYmVyID4gdGhpcy50YXN1bWFkYWxOdW1iZXIgJiYgdGhpcy50YXN1a2Vza21pbmVOdW1iZXIgPiB0aGlzLnRhc3Vrb3JnZU51bWJlciAgKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFzdXZWYXJ2XCIsICcyJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50YXN1a29yZ2VOdW1iZXIgPiB0aGlzLnRhc3VrZXNrbWluZU51bWJlciAmJiB0aGlzLnRhc3Vrb3JnZU51bWJlciA+IHRoaXMudGFzdW1hZGFsTnVtYmVyICApIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXN1dlZhcnZcIiwgJzMnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy50b29tYWRhbE51bWJlciA+IHRoaXMudG9va2Vza21pbmVOdW1iZXIgJiYgdGhpcy50b29tYWRhbE51bWJlciA+IHRoaXMudG9va29yZ2VOdW1iZXIgICkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvb2pvdWRWYXJ2XCIsICcxJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50b29rZXNrbWluZU51bWJlciA+IHRoaXMudG9vbWFkYWxOdW1iZXIgJiYgdGhpcy50b29rZXNrbWluZU51bWJlciA+IHRoaXMudG9va29yZ2VOdW1iZXIgICkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvb2pvdWRWYXJ2XCIsICcyJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50b29rb3JnZU51bWJlciA+IHRoaXMudG9va2Vza21pbmVOdW1iZXIgJiYgdGhpcy50b29rb3JnZU51bWJlciA+IHRoaXMudG9vbWFkYWxOdW1iZXIgICkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvb2pvdWRWYXJ2XCIsICczJyk7XHJcbiAgICB9XHJcbiBcclxuICAgIGlmIChpc05hTih0aGlzLnRvb21hZGFsTnVtYmVyKSkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvb2pvdWRWYXJ2XCIsICc0Jyk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG59XHJcbiIsIiJdfQ==