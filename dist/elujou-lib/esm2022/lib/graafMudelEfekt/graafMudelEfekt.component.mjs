import { Component, VERSION } from '@angular/core';
//import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { XteechangeComponent } from '../xteechange/xteechange.component';
import * as i0 from "@angular/core";
export class GraafMudelEfektComponent {
    constructor() {
        this.name = 'Angular ' + VERSION.major;
        this.key = 'efektMadal';
        this.localValue = '';
        this.key2 = 'efektKeskmine';
        this.key3 = 'efektKorge';
        this.effmadal = new XteechangeComponent;
        this.effmadalNumber = this.effmadal.model1y1;
        this.effkeskmine = new XteechangeComponent;
        this.effkeskmineNumber = this.effkeskmine.model1y2;
        this.effkorge = new XteechangeComponent;
        this.effkorgeNumber = this.effkorge.model1y3;
    }
    getEfektMadal() {
        this.myItem = localStorage.getItem(this.key);
        this.myItem2 = Number(this.myItem);
        return this.myItem2;
    }
    getEfektKeskmine() {
        this.keskmineString = localStorage.getItem(this.key2);
        this.keskmineNumber = Number(this.keskmineString);
        return this.keskmineNumber;
    }
    getEfektKorge() {
        this.korgeString = localStorage.getItem(this.key3);
        this.korgeNumber = Number(this.korgeString);
        return this.korgeNumber;
    }
    //  loemestoragest2() {
    //    return 33;
    //  }
    // ngOnInit() {
    // Push JSON to options array
    //  }
    // ngAfterViewInit() {
    ngOnInit() {
        //  this.loemestoragest();
        const xAxisData = [];
        const data1 = [];
        const data2 = [];
        for (let i = 0; i < 100; i++) {
            xAxisData.push('category' + i);
            data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }
        this.options = {
            title: {
                text: '',
                left: 'center',
                top: 'center'
            },
            color: ['#EFB2B2', '#FFE1A0', '#ACCFBA'],
            series: [
                {
                    type: 'pie',
                    data: [
                        {
                            value: this.effmadalNumber,
                            name: 'Madal'
                        },
                        {
                            value: this.effkeskmineNumber,
                            name: 'Keskmine'
                        },
                        {
                            value: this.effkorgeNumber,
                            name: 'Kõrge'
                        }
                    ],
                    radius: ['40%', '70%']
                }
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: GraafMudelEfektComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: GraafMudelEfektComponent, isStandalone: true, selector: "graafmudelefekt", providers: [
            provideEcharts(),
        ], ngImport: i0, template: "<div class=\"asukoht\">\r\n\r\n  <div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n  </div>", styles: [".asukoht{padding-left:0}.yld1-chart{height:400px;padding-left:20px;width:1000px;background-position:right}\n"], dependencies: [{ kind: "directive", type: NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "initOpts", "merge", "autoResize", "loading", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartHighlight", "chartDownplay", "chartSelectChanged", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendLegendSelectAll", "chartLegendLegendInverseSelect", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartGraphRoam", "chartGeoRoam", "chartTreeRoam", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartGeoSelectChanged", "chartGeoSelected", "chartGeoUnselected", "chartAxisAreaSelected", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartGlobalCursorTaken", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: GraafMudelEfektComponent, decorators: [{
            type: Component,
            args: [{ selector: 'graafmudelefekt', standalone: true, imports: [NgxEchartsDirective, XteechangeComponent], providers: [
                        provideEcharts(),
                    ], template: "<div class=\"asukoht\">\r\n\r\n  <div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n  </div>", styles: [".asukoht{padding-left:0}.yld1-chart{height:400px;padding-left:20px;width:1000px;background-position:right}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhYWZNdWRlbEVmZWt0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi9ncmFhZk11ZGVsRWZla3QvZ3JhYWZNdWRlbEVmZWt0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi9ncmFhZk11ZGVsRWZla3QvZ3JhYWZNdWRlbEVmZWt0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzNELGlEQUFpRDtBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQVl6RSxNQUFNLE9BQU8sd0JBQXdCO0lBWW5DO1FBWEEsU0FBSSxHQUFHLFVBQVUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBcUJsQyxRQUFHLEdBQVcsWUFBWSxDQUFDO1FBQzNCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFVeEIsU0FBSSxHQUFXLGVBQWUsQ0FBQztRQVUvQixTQUFJLEdBQVcsWUFBWSxDQUFDO1FBOUIxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQW1CLENBQUM7UUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksbUJBQW1CLENBQUM7UUFDM0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQztRQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUks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MkZBS2xCLHdCQUF3QjtrQkFWcEMsU0FBUzsrQkFDRSxpQkFBaUIsY0FHZixJQUFJLFdBQ1AsQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQyxhQUN4Qzt3QkFDVCxjQUFjLEVBQUU7cUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWRVJTSU9OLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy9pbXBvcnQgeyBOZ3hFY2hhcnRzTW9kdWxlIH0gZnJvbSAnbmd4LWVjaGFydHMnO1xyXG5pbXBvcnQgeyBOZ3hFY2hhcnRzRGlyZWN0aXZlLCBwcm92aWRlRWNoYXJ0cyB9IGZyb20gJ25neC1lY2hhcnRzJztcclxuaW1wb3J0IHsgWHRlZWNoYW5nZUNvbXBvbmVudCB9IGZyb20gJy4uL3h0ZWVjaGFuZ2UveHRlZWNoYW5nZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdncmFhZm11ZGVsZWZla3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmFhZk11ZGVsRWZla3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyAnLi9ncmFhZk11ZGVsRWZla3QuY29tcG9uZW50LnNjc3MnIF0sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTmd4RWNoYXJ0c0RpcmVjdGl2ZSwgWHRlZWNoYW5nZUNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBwcm92aWRlRWNoYXJ0cygpLFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyYWFmTXVkZWxFZmVrdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCAge1xyXG4gIG5hbWUgPSAnQW5ndWxhciAnICsgVkVSU0lPTi5tYWpvcjtcclxuICBvcHRpb25zOiBhbnk7XHJcblxyXG5cclxuICBlZmZtYWRhbDogYW55O1xyXG4gIGVmZmtlc2ttaW5lOiBhbnk7XHJcbiAgZWZma29yZ2U6IGFueTtcclxuICBlZmZtYWRhbE51bWJlcjogbnVtYmVyO1xyXG4gIGVmZmtlc2ttaW5lTnVtYmVyOiBudW1iZXI7XHJcbiAgZWZma29yZ2VOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmVmZm1hZGFsID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XHJcbiAgICB0aGlzLmVmZm1hZGFsTnVtYmVyID0gdGhpcy5lZmZtYWRhbC5tb2RlbDF5MTtcclxuICAgIHRoaXMuZWZma2Vza21pbmUgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcclxuICAgIHRoaXMuZWZma2Vza21pbmVOdW1iZXIgPSB0aGlzLmVmZmtlc2ttaW5lLm1vZGVsMXkyO1xyXG4gICAgdGhpcy5lZmZrb3JnZSA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xyXG4gICAgdGhpcy5lZmZrb3JnZU51bWJlciA9IHRoaXMuZWZma29yZ2UubW9kZWwxeTM7XHJcbiAgfVxyXG5cclxuXHJcbiAga2V5OiBzdHJpbmcgPSAnZWZla3RNYWRhbCc7XHJcbiAgbG9jYWxWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgbXlJdGVtOiBzdHJpbmc7XHJcbiAgbXlJdGVtMjogbnVtYmVyO1xyXG5cclxuICBnZXRFZmVrdE1hZGFsKCkge1xyXG4gICAgdGhpcy5teUl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSk7XHJcbiAgICB0aGlzLm15SXRlbTI9TnVtYmVyKHRoaXMubXlJdGVtKTtcclxuICAgIHJldHVybiB0aGlzLm15SXRlbTI7XHJcbiAgfVxyXG5cclxuICBrZXkyOiBzdHJpbmcgPSAnZWZla3RLZXNrbWluZSc7XHJcbiAga2Vza21pbmVTdHJpbmc6IHN0cmluZztcclxuICBrZXNrbWluZU51bWJlcjogbnVtYmVyO1xyXG5cclxuICBnZXRFZmVrdEtlc2ttaW5lKCkge1xyXG4gICAgdGhpcy5rZXNrbWluZVN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5Mik7XHJcbiAgICB0aGlzLmtlc2ttaW5lTnVtYmVyPU51bWJlcih0aGlzLmtlc2ttaW5lU3RyaW5nKTtcclxuICAgIHJldHVybiB0aGlzLmtlc2ttaW5lTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAga2V5Mzogc3RyaW5nID0gJ2VmZWt0S29yZ2UnO1xyXG4gIGtvcmdlU3RyaW5nOiBzdHJpbmc7XHJcbiAga29yZ2VOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgZ2V0RWZla3RLb3JnZSgpIHtcclxuICAgIHRoaXMua29yZ2VTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleTMpO1xyXG4gICAgdGhpcy5rb3JnZU51bWJlcj1OdW1iZXIodGhpcy5rb3JnZVN0cmluZyk7XHJcbiAgICByZXR1cm4gdGhpcy5rb3JnZU51bWJlcjtcclxuICB9XHJcblxyXG5cclxuLy8gIGxvZW1lc3RvcmFnZXN0MigpIHtcclxuICAgIFxyXG4vLyAgICByZXR1cm4gMzM7XHJcbi8vICB9XHJcblxyXG4gLy8gbmdPbkluaXQoKSB7XHJcbiAgICBcclxuXHJcbiAgICAvLyBQdXNoIEpTT04gdG8gb3B0aW9ucyBhcnJheVxyXG4gICAgXHJcbi8vICB9XHJcblxyXG4gLy8gbmdBZnRlclZpZXdJbml0KCkge1xyXG5uZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcblxyXG4vLyAgdGhpcy5sb2VtZXN0b3JhZ2VzdCgpO1xyXG5cclxuICAgIGNvbnN0IHhBeGlzRGF0YSA9IFtdO1xyXG4gICAgY29uc3QgZGF0YTEgPSBbXTtcclxuICAgIGNvbnN0IGRhdGEyID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG4gICAgICB4QXhpc0RhdGEucHVzaCgnY2F0ZWdvcnknICsgaSk7XHJcbiAgICAgIGRhdGExLnB1c2goKE1hdGguc2luKGkgLyA1KSAqIChpIC8gNSAtIDEwKSArIGkgLyA2KSAqIDUpO1xyXG4gICAgICBkYXRhMi5wdXNoKChNYXRoLmNvcyhpIC8gNSkgKiAoaSAvIDUgLSAxMCkgKyBpIC8gNikgKiA1KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICBsZWZ0OiAnY2VudGVyJyxcclxuICAgICAgICB0b3A6ICdjZW50ZXInXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbG9yOiBbJyNFRkIyQjInLCAnI0ZGRTFBMCcsICcjQUNDRkJBJ10sXHJcbiAgICAgIHNlcmllczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6ICdwaWUnLFxyXG4gICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZWZmbWFkYWxOdW1iZXIsXHJcbiAgICAgICAgICAgICAgbmFtZTogJ01hZGFsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZWZma2Vza21pbmVOdW1iZXIsXHJcbiAgICAgICAgICAgICAgbmFtZTogJ0tlc2ttaW5lJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZWZma29yZ2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgbmFtZTogJ0vDtXJnZSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIHJhZGl1czogWyc0MCUnLCAnNzAlJ11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgICAgICBcclxuICAgIH07XHJcbiAgfVxyXG59IiwiPGRpdiBjbGFzcz1cImFzdWtvaHRcIj5cclxuXHJcbiAgPGRpdiBlY2hhcnRzIFtvcHRpb25zXT1cIm9wdGlvbnNcIiBjbGFzcz1cInlsZDEtY2hhcnRcIj48L2Rpdj5cclxuICA8L2Rpdj4iXX0=