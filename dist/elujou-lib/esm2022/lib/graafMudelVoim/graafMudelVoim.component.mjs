import { Component, VERSION } from '@angular/core';
//import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { XteechangeComponent } from '../xteechange/xteechange.component';
import * as i0 from "@angular/core";
export class GraafMudelVoimComponent {
    constructor() {
        this.name = 'Angular ' + VERSION.major;
        this.key = 'voimMadal';
        this.localValue = '';
        this.key2 = 'voimKeskmine';
        this.key3 = 'voimKorge';
        this.voimmadal = new XteechangeComponent;
        this.voimmadalNumber = this.voimmadal.model3y1;
        this.voimkeskmine = new XteechangeComponent;
        this.voimkeskmineNumber = this.voimkeskmine.model3y2;
        this.voimkorge = new XteechangeComponent;
        this.voimkorgeNumber = this.voimkorge.model3y3;
    }
    getVoimMadal() {
        this.madalString = localStorage.getItem(this.key);
        this.madalNumber = Number(this.madalString);
        return this.madalNumber;
    }
    getVoimKeskmine() {
        this.keskmineString = localStorage.getItem(this.key2);
        this.keskmineNumber = Number(this.keskmineString);
        return this.keskmineNumber;
    }
    getVoimKorge() {
        this.korgeString = localStorage.getItem(this.key3);
        this.korgeNumber = Number(this.korgeString);
        return this.korgeNumber;
    }
    ngOnInit() {
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
                            value: this.voimmadalNumber,
                            name: 'Madal'
                        },
                        {
                            value: this.voimkeskmineNumber,
                            name: 'Keskmine'
                        },
                        {
                            value: this.voimkorgeNumber,
                            name: 'Kõrge'
                        }
                    ],
                    radius: ['40%', '70%']
                }
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: GraafMudelVoimComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: GraafMudelVoimComponent, isStandalone: true, selector: "graafmudelvoim", providers: [
            provideEcharts(),
        ], ngImport: i0, template: "<div class=\"asukoht\">\r\n<div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n</div>", styles: [".asukoht{padding-left:0}.yld1-chart{height:400px;padding-left:20px;width:1000px;background-position:right}\n"], dependencies: [{ kind: "directive", type: NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "initOpts", "merge", "autoResize", "loading", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartHighlight", "chartDownplay", "chartSelectChanged", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendLegendSelectAll", "chartLegendLegendInverseSelect", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartGraphRoam", "chartGeoRoam", "chartTreeRoam", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartGeoSelectChanged", "chartGeoSelected", "chartGeoUnselected", "chartAxisAreaSelected", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartGlobalCursorTaken", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: GraafMudelVoimComponent, decorators: [{
            type: Component,
            args: [{ selector: 'graafmudelvoim', standalone: true, imports: [NgxEchartsDirective, XteechangeComponent], providers: [
                        provideEcharts(),
                    ], template: "<div class=\"asukoht\">\r\n<div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n</div>", styles: [".asukoht{padding-left:0}.yld1-chart{height:400px;padding-left:20px;width:1000px;background-position:right}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhYWZNdWRlbFZvaW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZWx1am91LWxpYi9zcmMvbGliL2dyYWFmTXVkZWxWb2ltL2dyYWFmTXVkZWxWb2ltLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi9ncmFhZk11ZGVsVm9pbS9ncmFhZk11ZGVsVm9pbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxpREFBaUQ7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFZekUsTUFBTSxPQUFPLHVCQUF1QjtJQVdsQztRQVZBLFNBQUksR0FBRyxVQUFVLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQW1CbEMsUUFBRyxHQUFXLFdBQVcsQ0FBQztRQUMxQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBVXhCLFNBQUksR0FBVyxjQUFjLENBQUM7UUFVOUIsU0FBSSxHQUFXLFdBQVcsQ0FBQztRQTdCekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFtQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLG1CQUFtQixDQUFDO1FBQzVDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQW1CLENBQUM7UUFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMs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QUU7cUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWRVJTSU9OLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy9pbXBvcnQgeyBOZ3hFY2hhcnRzTW9kdWxlIH0gZnJvbSAnbmd4LWVjaGFydHMnO1xyXG5pbXBvcnQgeyBOZ3hFY2hhcnRzRGlyZWN0aXZlLCBwcm92aWRlRWNoYXJ0cyB9IGZyb20gJ25neC1lY2hhcnRzJztcclxuaW1wb3J0IHsgWHRlZWNoYW5nZUNvbXBvbmVudCB9IGZyb20gJy4uL3h0ZWVjaGFuZ2UveHRlZWNoYW5nZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdncmFhZm11ZGVsdm9pbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dyYWFmTXVkZWxWb2ltLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsgJy4vZ3JhYWZNdWRlbFZvaW0uY29tcG9uZW50LnNjc3MnIF0sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTmd4RWNoYXJ0c0RpcmVjdGl2ZSwgWHRlZWNoYW5nZUNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBwcm92aWRlRWNoYXJ0cygpLFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyYWFmTXVkZWxWb2ltQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0ICB7XHJcbiAgbmFtZSA9ICdBbmd1bGFyICcgKyBWRVJTSU9OLm1ham9yO1xyXG4gIG9wdGlvbnM6IGFueTtcclxuXHJcbiAgdm9pbW1hZGFsOiBhbnk7XHJcbiAgdm9pbWtlc2ttaW5lOiBhbnk7XHJcbiAgdm9pbWtvcmdlOiBhbnk7XHJcbiAgdm9pbW1hZGFsTnVtYmVyOiBudW1iZXI7XHJcbiAgdm9pbWtlc2ttaW5lTnVtYmVyOiBudW1iZXI7XHJcbiAgdm9pbWtvcmdlTnVtYmVyOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHRoaXMudm9pbW1hZGFsID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XHJcbiAgICB0aGlzLnZvaW1tYWRhbE51bWJlciA9IHRoaXMudm9pbW1hZGFsLm1vZGVsM3kxO1xyXG4gICAgdGhpcy52b2lta2Vza21pbmUgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcclxuICAgIHRoaXMudm9pbWtlc2ttaW5lTnVtYmVyID0gdGhpcy52b2lta2Vza21pbmUubW9kZWwzeTI7XHJcbiAgICB0aGlzLnZvaW1rb3JnZSA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xyXG4gICAgdGhpcy52b2lta29yZ2VOdW1iZXIgPSB0aGlzLnZvaW1rb3JnZS5tb2RlbDN5MztcclxuICB9XHJcblxyXG4gIGtleTogc3RyaW5nID0gJ3ZvaW1NYWRhbCc7XHJcbiAgbG9jYWxWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgbWFkYWxTdHJpbmc6IHN0cmluZztcclxuICBtYWRhbE51bWJlcjogbnVtYmVyO1xyXG5cclxuICBnZXRWb2ltTWFkYWwoKSB7XHJcbiAgICB0aGlzLm1hZGFsU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpO1xyXG4gICAgdGhpcy5tYWRhbE51bWJlcj1OdW1iZXIodGhpcy5tYWRhbFN0cmluZyk7XHJcbiAgICByZXR1cm4gdGhpcy5tYWRhbE51bWJlcjtcclxuICB9XHJcblxyXG4gIGtleTI6IHN0cmluZyA9ICd2b2ltS2Vza21pbmUnO1xyXG4gIGtlc2ttaW5lU3RyaW5nOiBzdHJpbmc7XHJcbiAga2Vza21pbmVOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgZ2V0Vm9pbUtlc2ttaW5lKCkge1xyXG4gICAgdGhpcy5rZXNrbWluZVN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5Mik7XHJcbiAgICB0aGlzLmtlc2ttaW5lTnVtYmVyPU51bWJlcih0aGlzLmtlc2ttaW5lU3RyaW5nKTtcclxuICAgIHJldHVybiB0aGlzLmtlc2ttaW5lTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAga2V5Mzogc3RyaW5nID0gJ3ZvaW1Lb3JnZSc7XHJcbiAga29yZ2VTdHJpbmc6IHN0cmluZztcclxuICBrb3JnZU51bWJlcjogbnVtYmVyO1xyXG5cclxuICBnZXRWb2ltS29yZ2UoKSB7XHJcbiAgICB0aGlzLmtvcmdlU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkzKTtcclxuICAgIHRoaXMua29yZ2VOdW1iZXI9TnVtYmVyKHRoaXMua29yZ2VTdHJpbmcpO1xyXG4gICAgcmV0dXJuIHRoaXMua29yZ2VOdW1iZXI7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHhBeGlzRGF0YSA9IFtdO1xyXG4gICAgY29uc3QgZGF0YTEgPSBbXTtcclxuICAgIGNvbnN0IGRhdGEyID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG4gICAgICB4QXhpc0RhdGEucHVzaCgnY2F0ZWdvcnknICsgaSk7XHJcbiAgICAgIGRhdGExLnB1c2goKE1hdGguc2luKGkgLyA1KSAqIChpIC8gNSAtIDEwKSArIGkgLyA2KSAqIDUpO1xyXG4gICAgICBkYXRhMi5wdXNoKChNYXRoLmNvcyhpIC8gNSkgKiAoaSAvIDUgLSAxMCkgKyBpIC8gNikgKiA1KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICBsZWZ0OiAnY2VudGVyJyxcclxuICAgICAgICB0b3A6ICdjZW50ZXInXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbG9yOiBbJyNFRkIyQjInLCAnI0ZGRTFBMCcsICcjQUNDRkJBJ10sXHJcbiAgICAgIHNlcmllczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6ICdwaWUnLFxyXG4gICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudm9pbW1hZGFsTnVtYmVyLC8vZ2V0Vm9pbU1hZGFsKCksXHJcbiAgICAgICAgICAgICAgbmFtZTogJ01hZGFsJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudm9pbWtlc2ttaW5lTnVtYmVyLC8vZ2V0Vm9pbUtlc2ttaW5lKCksXHJcbiAgICAgICAgICAgICAgbmFtZTogJ0tlc2ttaW5lJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudm9pbWtvcmdlTnVtYmVyLC8vZ2V0Vm9pbUtvcmdlKCksXHJcbiAgICAgICAgICAgICAgbmFtZTogJ0vDtXJnZSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIHJhZGl1czogWyc0MCUnLCAnNzAlJ11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgICAgICBcclxuICAgIH07XHJcbiAgfVxyXG59IiwiPGRpdiBjbGFzcz1cImFzdWtvaHRcIj5cclxuPGRpdiBlY2hhcnRzIFtvcHRpb25zXT1cIm9wdGlvbnNcIiBjbGFzcz1cInlsZDEtY2hhcnRcIj48L2Rpdj5cclxuPC9kaXY+Il19