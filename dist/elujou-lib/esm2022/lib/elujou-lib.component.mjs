import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElujouLib2Component } from '../lib/elujou-lib2/elujou-lib2.component';
import { UustestComponent } from '../lib/elujou-uustest/elujou-uustest.component';
import { TabComponent } from '../lib/tabx/tabx.component';
import { TabzComponent } from '../lib/tabz/tabz.component';
import { XteechangeComponent } from '../lib/xteechange/xteechange.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ElujouLibComponent {
    constructor() {
        this.muutuja = "esimene muutuja";
        this.ekraanimuutuja = 1;
        this.ekraanimuutuja2 = 1;
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
        if (isNaN(this.effmadalNumber)) {
            this.ekraanimuutuja = NaN;
        }
        if (isNaN(this.effkeskmineNumber)) {
            this.ekraanimuutuja = NaN;
        }
        if (isNaN(this.effkorgeNumber)) {
            this.ekraanimuutuja = NaN;
        }
        if (isNaN(this.maksmadalNumber)) {
            this.ekraanimuutuja = NaN;
        }
        if (isNaN(this.makskeskmineNumber)) {
            this.ekraanimuutuja = NaN;
        }
        if (isNaN(this.makskorgeNumber)) {
            this.ekraanimuutuja = NaN;
        }
        if (isNaN(this.voimmadalNumber)) {
            this.ekraanimuutuja = NaN;
        }
        if (isNaN(this.voimkeskmineNumber)) {
            this.ekraanimuutuja = NaN;
        }
        if (isNaN(this.voimkorgeNumber)) {
            this.ekraanimuutuja = NaN;
        }
        if (isNaN(this.tasumadalNumber)) {
            this.ekraanimuutuja = NaN;
        }
        if (isNaN(this.tasukeskmineNumber)) {
            this.ekraanimuutuja = NaN;
        }
        if (isNaN(this.tasukorgeNumber)) {
            this.ekraanimuutuja = NaN;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: ElujouLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: ElujouLibComponent, isStandalone: true, selector: "lib-elujou-lib", ngImport: i0, template: "<!--h1>Html failist tulev pealkiri - Riia v\u00E4rk....</h1>\r\n\r\n<div class=\"tekstike2\"> \r\nSee on tekst stiilifailist....\r\n</div-->\r\n\r\n\r\n<!--elujoutest-component></elujoutest-component-->\r\n\r\n<!--lib2-elujou-lib2></lib2-elujou-lib2-->\r\n<!--uustest-elujou-uustest></uustest-elujou-uustest-->\r\n<!------app-tab></app-tab---->\r\n<!-----tabz-component></tabz-component---->\r\n\r\n\r\n    <!-----app-tab *ngIf=\"ekraanimuutuja2===1\"></app-tab>\r\n     <tabz-component *ngIf=\"ekraanimuutuja2===0\"></tabz-component--->\r\n\r\n     <app-tab *ngIf=\"ekraanimuutuja\"></app-tab>\r\n     <tabz-component *ngIf=\"!ekraanimuutuja\"></tabz-component>\r\n\r\n<!--Kumbat taabi kuvada, viia otsustuse komponendi alla, see peab ikka siinsamas toimuma, sest otsustus toimub ju kohe alguses...-->\r\n\r\n\r\n", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:22px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: TabComponent, selector: "app-tab" }, { kind: "component", type: TabzComponent, selector: "tabz-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: ElujouLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-elujou-lib', standalone: true, imports: [CommonModule, ElujouLib2Component, UustestComponent, TabComponent, TabzComponent, XteechangeComponent], template: "<!--h1>Html failist tulev pealkiri - Riia v\u00E4rk....</h1>\r\n\r\n<div class=\"tekstike2\"> \r\nSee on tekst stiilifailist....\r\n</div-->\r\n\r\n\r\n<!--elujoutest-component></elujoutest-component-->\r\n\r\n<!--lib2-elujou-lib2></lib2-elujou-lib2-->\r\n<!--uustest-elujou-uustest></uustest-elujou-uustest-->\r\n<!------app-tab></app-tab---->\r\n<!-----tabz-component></tabz-component---->\r\n\r\n\r\n    <!-----app-tab *ngIf=\"ekraanimuutuja2===1\"></app-tab>\r\n     <tabz-component *ngIf=\"ekraanimuutuja2===0\"></tabz-component--->\r\n\r\n     <app-tab *ngIf=\"ekraanimuutuja\"></app-tab>\r\n     <tabz-component *ngIf=\"!ekraanimuutuja\"></tabz-component>\r\n\r\n<!--Kumbat taabi kuvada, viia otsustuse komponendi alla, see peab ikka siinsamas toimuma, sest otsustus toimub ju kohe alguses...-->\r\n\r\n\r\n", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:22px}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWx1am91LWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lbHVqb3UtbGliL3NyYy9saWIvZWx1am91LWxpYi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lbHVqb3UtbGliL3NyYy9saWIvZWx1am91LWxpYi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7QUFrQjdFLE1BQU0sT0FBTyxrQkFBa0I7SUFtQy9CO1FBakNBLFlBQU8sR0FBRyxpQkFBaUIsQ0FBQztRQThCNUIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsb0JBQWUsR0FBRSxDQUFDLENBQUM7UUFHakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLG1CQUFtQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLG1CQUFtQixDQUFDO1FBQzNDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQW1CLENBQUM7UUFDeEMs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QWMsR0FBRyxHQUFHLENBQUM7U0FDM0I7UUFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztTQUMzQjtRQUVELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztTQUMzQjtJQUVILENBQUM7OEdBaEhZLGtCQUFrQjtrR0FBbEIsa0JBQWtCLDBFQ3hCL0IsZ3pCQXdCQSwwT0RYWSxZQUFZLG1JQUF5QyxZQUFZLG9EQUFFLGFBQWE7OzJGQVcvRSxrQkFBa0I7a0JBaEI5QixTQUFTOytCQUNFLGdCQUFnQixjQUNkLElBQUksV0FHUCxDQUFDLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRWx1am91TGliMkNvbXBvbmVudCB9IGZyb20gJy4uL2xpYi9lbHVqb3UtbGliMi9lbHVqb3UtbGliMi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXVzdGVzdENvbXBvbmVudCB9IGZyb20gJy4uL2xpYi9lbHVqb3UtdXVzdGVzdC9lbHVqb3UtdXVzdGVzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vbGliL3RhYngvdGFieC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFiekNvbXBvbmVudCB9IGZyb20gJy4uL2xpYi90YWJ6L3RhYnouY29tcG9uZW50JztcbmltcG9ydCB7IFh0ZWVjaGFuZ2VDb21wb25lbnQgfSBmcm9tICcuLi9saWIveHRlZWNoYW5nZS94dGVlY2hhbmdlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1lbHVqb3UtbGliJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgdGVtcGxhdGVVcmw6ICcuL2VsdWpvdS1saWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lbHVqb3UtbGliLmNvbXBvbmVudC5zY3NzJ10sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEVsdWpvdUxpYjJDb21wb25lbnQsIFV1c3Rlc3RDb21wb25lbnQsIFRhYkNvbXBvbmVudCwgVGFiekNvbXBvbmVudCwgWHRlZWNoYW5nZUNvbXBvbmVudF1cbiAgLy9kZWNsYXJhdGlvbnM6IFtFbHVqb3VMaWIyQ29tcG9uZW50XVxuXG4gIC8vaW1wb3J0czogW10sIFxuICAvL3RlbXBsYXRlOiBgXG4gIC8vICA8cD5cbiAgLy8gICAgU2VlLCBtaXMgUklJQUxFIHZhamEhISEhXG4gIC8vICA8L3A+XG4vLyAgYCxcbi8vc3R5bGVzOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBFbHVqb3VMaWJDb21wb25lbnQge1xuXG5tdXV0dWphID0gXCJlc2ltZW5lIG11dXR1amFcIjtcblxuZWZmbWFkYWw6IGFueTtcbmVmZmtlc2ttaW5lOiBhbnk7XG5lZmZrb3JnZTogYW55O1xuZWZmbWFkYWxOdW1iZXI6IG51bWJlcjtcbmVmZmtlc2ttaW5lTnVtYmVyOiBudW1iZXI7XG5lZmZrb3JnZU51bWJlcjogbnVtYmVyO1xuXG5tYWtzbWFkYWw6IGFueTtcbm1ha3NrZXNrbWluZTogYW55O1xubWFrc2tvcmdlOiBhbnk7XG5tYWtzbWFkYWxOdW1iZXI6IG51bWJlcjtcbm1ha3NrZXNrbWluZU51bWJlcjogbnVtYmVyO1xubWFrc2tvcmdlTnVtYmVyOiBudW1iZXI7XG5cbnZvaW1tYWRhbDogYW55O1xudm9pbWtlc2ttaW5lOiBhbnk7XG52b2lta29yZ2U6IGFueTtcbnZvaW1tYWRhbE51bWJlcjogbnVtYmVyO1xudm9pbWtlc2ttaW5lTnVtYmVyOiBudW1iZXI7XG52b2lta29yZ2VOdW1iZXI6IG51bWJlcjtcblxudGFzdW1hZGFsOiBhbnk7XG50YXN1a2Vza21pbmU6IGFueTtcbnRhc3Vrb3JnZTogYW55O1xudGFzdW1hZGFsTnVtYmVyOiBudW1iZXI7XG50YXN1a2Vza21pbmVOdW1iZXI6IG51bWJlcjtcbnRhc3Vrb3JnZU51bWJlcjogbnVtYmVyO1xuXG5la3JhYW5pbXV1dHVqYSA9IDE7XG5la3JhYW5pbXV1dHVqYTIgPTE7XG5cbmNvbnN0cnVjdG9yKCkge1xuICB0aGlzLmVmZm1hZGFsID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XG4gIHRoaXMuZWZmbWFkYWxOdW1iZXIgPSB0aGlzLmVmZm1hZGFsLm1vZGVsMXkxO1xuICB0aGlzLmVmZmtlc2ttaW5lID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XG4gIHRoaXMuZWZma2Vza21pbmVOdW1iZXIgPSB0aGlzLmVmZmtlc2ttaW5lLm1vZGVsMXkyO1xuICB0aGlzLmVmZmtvcmdlID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XG4gIHRoaXMuZWZma29yZ2VOdW1iZXIgPSB0aGlzLmVmZmtvcmdlLm1vZGVsMXkzO1xuXG4gIHRoaXMubWFrc21hZGFsID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XG4gIHRoaXMubWFrc21hZGFsTnVtYmVyID0gdGhpcy5tYWtzbWFkYWwubW9kZWwyeTE7XG4gIHRoaXMubWFrc2tlc2ttaW5lID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XG4gIHRoaXMubWFrc2tlc2ttaW5lTnVtYmVyID0gdGhpcy5tYWtza2Vza21pbmUubW9kZWwyeTI7XG4gIHRoaXMubWFrc2tvcmdlID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XG4gIHRoaXMubWFrc2tvcmdlTnVtYmVyID0gdGhpcy5tYWtza29yZ2UubW9kZWwyeTM7XG5cbiAgdGhpcy52b2ltbWFkYWwgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcbiAgdGhpcy52b2ltbWFkYWxOdW1iZXIgPSB0aGlzLnZvaW1tYWRhbC5tb2RlbDN5MTtcbiAgdGhpcy52b2lta2Vza21pbmUgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcbiAgdGhpcy52b2lta2Vza21pbmVOdW1iZXIgPSB0aGlzLnZvaW1rZXNrbWluZS5tb2RlbDN5MjtcbiAgdGhpcy52b2lta29yZ2UgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcbiAgdGhpcy52b2lta29yZ2VOdW1iZXIgPSB0aGlzLnZvaW1rb3JnZS5tb2RlbDN5MztcblxuICB0aGlzLnRhc3VtYWRhbCA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xuICB0aGlzLnRhc3VtYWRhbE51bWJlciA9IHRoaXMudGFzdW1hZGFsLm1vZGVsNHkxO1xuICB0aGlzLnRhc3VrZXNrbWluZSA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xuICB0aGlzLnRhc3VrZXNrbWluZU51bWJlciA9IHRoaXMudGFzdWtlc2ttaW5lLm1vZGVsNHkyO1xuICB0aGlzLnRhc3Vrb3JnZSA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xuICB0aGlzLnRhc3Vrb3JnZU51bWJlciA9IHRoaXMudGFzdWtvcmdlLm1vZGVsNHkzO1xuXG4gIGlmIChpc05hTih0aGlzLmVmZm1hZGFsTnVtYmVyKSkge1xuICAgIHRoaXMuZWtyYWFuaW11dXR1amEgPSBOYU47XG4gIH1cblxuICBpZiAoaXNOYU4odGhpcy5lZmZrZXNrbWluZU51bWJlcikpIHtcbiAgICB0aGlzLmVrcmFhbmltdXV0dWphID0gTmFOO1xuICB9XG5cbiAgaWYgKGlzTmFOKHRoaXMuZWZma29yZ2VOdW1iZXIpKSB7XG4gICAgdGhpcy5la3JhYW5pbXV1dHVqYSA9IE5hTjtcbiAgfVxuXG4gIGlmIChpc05hTih0aGlzLm1ha3NtYWRhbE51bWJlcikpIHtcbiAgICB0aGlzLmVrcmFhbmltdXV0dWphID0gTmFOO1xuICB9XG5cbiAgaWYgKGlzTmFOKHRoaXMubWFrc2tlc2ttaW5lTnVtYmVyKSkge1xuICAgIHRoaXMuZWtyYWFuaW11dXR1amEgPSBOYU47XG4gIH1cblxuICBpZiAoaXNOYU4odGhpcy5tYWtza29yZ2VOdW1iZXIpKSB7XG4gICAgdGhpcy5la3JhYW5pbXV1dHVqYSA9IE5hTjtcbiAgfVxuXG4gIGlmIChpc05hTih0aGlzLnZvaW1tYWRhbE51bWJlcikpIHtcbiAgICB0aGlzLmVrcmFhbmltdXV0dWphID0gTmFOO1xuICB9XG5cbiAgaWYgKGlzTmFOKHRoaXMudm9pbWtlc2ttaW5lTnVtYmVyKSkge1xuICAgIHRoaXMuZWtyYWFuaW11dXR1amEgPSBOYU47XG4gIH1cblxuICBpZiAoaXNOYU4odGhpcy52b2lta29yZ2VOdW1iZXIpKSB7XG4gICAgdGhpcy5la3JhYW5pbXV1dHVqYSA9IE5hTjtcbiAgfVxuXG4gIGlmIChpc05hTih0aGlzLnRhc3VtYWRhbE51bWJlcikpIHtcbiAgICB0aGlzLmVrcmFhbmltdXV0dWphID0gTmFOO1xuICB9XG5cbiAgaWYgKGlzTmFOKHRoaXMudGFzdWtlc2ttaW5lTnVtYmVyKSkge1xuICAgIHRoaXMuZWtyYWFuaW11dXR1amEgPSBOYU47XG4gIH1cblxuICBpZiAoaXNOYU4odGhpcy50YXN1a29yZ2VOdW1iZXIpKSB7XG4gICAgdGhpcy5la3JhYW5pbXV1dHVqYSA9IE5hTjtcbiAgfVxuXG59XG4vL2lmIChpc05hTih0aGlzLnRvb21hZGFsTnVtYmVyKSkge1xuLy8gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9vam91ZFZhcnZcIiwgJzQnKTtcbi8vfVxuXG59XG4iLCI8IS0taDE+SHRtbCBmYWlsaXN0IHR1bGV2IHBlYWxraXJpIC0gUmlpYSB2w6Ryay4uLi48L2gxPlxyXG5cclxuPGRpdiBjbGFzcz1cInRla3N0aWtlMlwiPiBcclxuU2VlIG9uIHRla3N0IHN0aWlsaWZhaWxpc3QuLi4uXHJcbjwvZGl2LS0+XHJcblxyXG5cclxuPCEtLWVsdWpvdXRlc3QtY29tcG9uZW50PjwvZWx1am91dGVzdC1jb21wb25lbnQtLT5cclxuXHJcbjwhLS1saWIyLWVsdWpvdS1saWIyPjwvbGliMi1lbHVqb3UtbGliMi0tPlxyXG48IS0tdXVzdGVzdC1lbHVqb3UtdXVzdGVzdD48L3V1c3Rlc3QtZWx1am91LXV1c3Rlc3QtLT5cclxuPCEtLS0tLS1hcHAtdGFiPjwvYXBwLXRhYi0tLS0+XHJcbjwhLS0tLS10YWJ6LWNvbXBvbmVudD48L3RhYnotY29tcG9uZW50LS0tLT5cclxuXHJcblxyXG4gICAgPCEtLS0tLWFwcC10YWIgKm5nSWY9XCJla3JhYW5pbXV1dHVqYTI9PT0xXCI+PC9hcHAtdGFiPlxyXG4gICAgIDx0YWJ6LWNvbXBvbmVudCAqbmdJZj1cImVrcmFhbmltdXV0dWphMj09PTBcIj48L3RhYnotY29tcG9uZW50LS0tPlxyXG5cclxuICAgICA8YXBwLXRhYiAqbmdJZj1cImVrcmFhbmltdXV0dWphXCI+PC9hcHAtdGFiPlxyXG4gICAgIDx0YWJ6LWNvbXBvbmVudCAqbmdJZj1cIiFla3JhYW5pbXV1dHVqYVwiPjwvdGFiei1jb21wb25lbnQ+XHJcblxyXG48IS0tS3VtYmF0IHRhYWJpIGt1dmFkYSwgdmlpYSBvdHN1c3R1c2Uga29tcG9uZW5kaSBhbGxhLCBzZWUgcGVhYiBpa2thIHNpaW5zYW1hcyB0b2ltdW1hLCBzZXN0IG90c3VzdHVzIHRvaW11YiBqdSBrb2hlIGFsZ3VzZXMuLi4tLT5cclxuXHJcblxyXG4iXX0=