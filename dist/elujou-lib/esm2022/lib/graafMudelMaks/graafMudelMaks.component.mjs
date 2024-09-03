import { Component, VERSION } from '@angular/core';
//import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { XteechangeComponent } from '../xteechange/xteechange.component';
import * as i0 from "@angular/core";
export class GraafMudelMaksComponent {
    constructor() {
        this.name = 'Angular ' + VERSION.major;
        this.key = 'makseMadal';
        this.localValue = '';
        this.key2 = 'makseKeskmine';
        this.key3 = 'makseKorge';
        this.maksmadal = new XteechangeComponent;
        this.maksmadalNumber = this.maksmadal.model2y1;
        this.makskeskmine = new XteechangeComponent;
        this.makskeskmineNumber = this.makskeskmine.model2y2;
        this.makskorge = new XteechangeComponent;
        this.makskorgeNumber = this.makskorge.model2y3;
    }
    getMakseMadal() {
        this.madalString = localStorage.getItem(this.key);
        this.madalNumber = Number(this.madalString);
        return this.madalNumber;
    }
    getMakseKeskmine() {
        this.keskmineString = localStorage.getItem(this.key2);
        this.keskmineNumber = Number(this.keskmineString);
        return this.keskmineNumber;
    }
    getMakseKorge() {
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
                            value: this.maksmadalNumber,
                            name: 'Madal'
                        },
                        {
                            value: this.makskeskmineNumber,
                            name: 'Keskmine'
                        },
                        {
                            value: this.makskorgeNumber,
                            name: 'Kõrge'
                        }
                    ],
                    radius: ['40%', '70%']
                }
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: GraafMudelMaksComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: GraafMudelMaksComponent, isStandalone: true, selector: "graafmudelmaks", providers: [
            provideEcharts(),
        ], ngImport: i0, template: "<div class=\"asukoht\">\r\n<div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n</div>", styles: [".asukoht{padding-left:0}.yld1-chart{height:400px;padding-left:20px;width:1000px;background-position:right}\n"], dependencies: [{ kind: "directive", type: NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "initOpts", "merge", "autoResize", "loading", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartHighlight", "chartDownplay", "chartSelectChanged", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendLegendSelectAll", "chartLegendLegendInverseSelect", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartGraphRoam", "chartGeoRoam", "chartTreeRoam", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartGeoSelectChanged", "chartGeoSelected", "chartGeoUnselected", "chartAxisAreaSelected", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartGlobalCursorTaken", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: GraafMudelMaksComponent, decorators: [{
            type: Component,
            args: [{ selector: 'graafmudelmaks', standalone: true, imports: [XteechangeComponent, NgxEchartsDirective], providers: [
                        provideEcharts(),
                    ], template: "<div class=\"asukoht\">\r\n<div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n</div>", styles: [".asukoht{padding-left:0}.yld1-chart{height:400px;padding-left:20px;width:1000px;background-position:right}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhYWZNdWRlbE1ha3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZWx1am91LWxpYi9zcmMvbGliL2dyYWFmTXVkZWxNYWtzL2dyYWFmTXVkZWxNYWtzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi9ncmFhZk11ZGVsTWFrcy9ncmFhZk11ZGVsTWFrcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxpREFBaUQ7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFhekUsTUFBTSxPQUFPLHVCQUF1QjtJQVdsQztRQVZBLFNBQUksR0FBRyxVQUFVLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQXNCbEMsUUFBRyxHQUFXLFlBQVksQ0FBQztRQUMzQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBVXhCLFNBQUksR0FBVyxlQUFlLENBQUM7UUFVL0IsU0FBSSxHQUFXLFlBQVksQ0FBQztRQS9CMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFtQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLG1CQUFtQixDQUFDO1FBQzVDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQW1CLENBQUM7UUFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMs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LEVBQUU7cUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWRVJTSU9OLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy9pbXBvcnQgeyBOZ3hFY2hhcnRzTW9kdWxlIH0gZnJvbSAnbmd4LWVjaGFydHMnO1xyXG5pbXBvcnQgeyBOZ3hFY2hhcnRzRGlyZWN0aXZlLCBwcm92aWRlRWNoYXJ0cyB9IGZyb20gJ25neC1lY2hhcnRzJztcclxuaW1wb3J0IHsgWHRlZWNoYW5nZUNvbXBvbmVudCB9IGZyb20gJy4uL3h0ZWVjaGFuZ2UveHRlZWNoYW5nZS5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ3JhYWZtdWRlbG1ha3MnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmFhZk11ZGVsTWFrcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbICcuL2dyYWFmTXVkZWxNYWtzLmNvbXBvbmVudC5zY3NzJyBdLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogWyBYdGVlY2hhbmdlQ29tcG9uZW50LCBOZ3hFY2hhcnRzRGlyZWN0aXZlXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHByb3ZpZGVFY2hhcnRzKCksXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JhYWZNdWRlbE1ha3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgIHtcclxuICBuYW1lID0gJ0FuZ3VsYXIgJyArIFZFUlNJT04ubWFqb3I7XHJcbiAgb3B0aW9uczogYW55O1xyXG5cclxuICBtYWtzbWFkYWw6IGFueTtcclxuICBtYWtza2Vza21pbmU6IGFueTtcclxuICBtYWtza29yZ2U6IGFueTtcclxuICBtYWtzbWFkYWxOdW1iZXI6IG51bWJlcjtcclxuICBtYWtza2Vza21pbmVOdW1iZXI6IG51bWJlcjtcclxuICBtYWtza29yZ2VOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG5cclxuICAgIHRoaXMubWFrc21hZGFsID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XHJcbiAgICB0aGlzLm1ha3NtYWRhbE51bWJlciA9IHRoaXMubWFrc21hZGFsLm1vZGVsMnkxO1xyXG4gICAgdGhpcy5tYWtza2Vza21pbmUgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcclxuICAgIHRoaXMubWFrc2tlc2ttaW5lTnVtYmVyID0gdGhpcy5tYWtza2Vza21pbmUubW9kZWwyeTI7XHJcbiAgICB0aGlzLm1ha3Nrb3JnZSA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xyXG4gICAgdGhpcy5tYWtza29yZ2VOdW1iZXIgPSB0aGlzLm1ha3Nrb3JnZS5tb2RlbDJ5MztcclxuXHJcbiAgfVxyXG5cclxuICBcclxuICBrZXk6IHN0cmluZyA9ICdtYWtzZU1hZGFsJztcclxuICBsb2NhbFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBtYWRhbFN0cmluZzogc3RyaW5nO1xyXG4gIG1hZGFsTnVtYmVyOiBudW1iZXI7XHJcblxyXG5nZXRNYWtzZU1hZGFsKCkge1xyXG4gICAgdGhpcy5tYWRhbFN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KTtcclxuICAgIHRoaXMubWFkYWxOdW1iZXI9TnVtYmVyKHRoaXMubWFkYWxTdHJpbmcpO1xyXG4gICAgcmV0dXJuIHRoaXMubWFkYWxOdW1iZXI7XHJcbiAgfVxyXG5cclxuICBrZXkyOiBzdHJpbmcgPSAnbWFrc2VLZXNrbWluZSc7XHJcbiAga2Vza21pbmVTdHJpbmc6IHN0cmluZztcclxuICBrZXNrbWluZU51bWJlcjogbnVtYmVyO1xyXG5cclxuICBnZXRNYWtzZUtlc2ttaW5lKCkge1xyXG4gICAgdGhpcy5rZXNrbWluZVN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5Mik7XHJcbiAgICB0aGlzLmtlc2ttaW5lTnVtYmVyPU51bWJlcih0aGlzLmtlc2ttaW5lU3RyaW5nKTtcclxuICAgIHJldHVybiB0aGlzLmtlc2ttaW5lTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAga2V5Mzogc3RyaW5nID0gJ21ha3NlS29yZ2UnO1xyXG4gIGtvcmdlU3RyaW5nOiBzdHJpbmc7XHJcbiAga29yZ2VOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgZ2V0TWFrc2VLb3JnZSgpIHtcclxuICAgIHRoaXMua29yZ2VTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleTMpO1xyXG4gICAgdGhpcy5rb3JnZU51bWJlcj1OdW1iZXIodGhpcy5rb3JnZVN0cmluZyk7XHJcbiAgICByZXR1cm4gdGhpcy5rb3JnZU51bWJlcjtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB4QXhpc0RhdGEgPSBbXTtcclxuICAgIGNvbnN0IGRhdGExID0gW107XHJcbiAgICBjb25zdCBkYXRhMiA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgICAgeEF4aXNEYXRhLnB1c2goJ2NhdGVnb3J5JyArIGkpO1xyXG4gICAgICBkYXRhMS5wdXNoKChNYXRoLnNpbihpIC8gNSkgKiAoaSAvIDUgLSAxMCkgKyBpIC8gNikgKiA1KTtcclxuICAgICAgZGF0YTIucHVzaCgoTWF0aC5jb3MoaSAvIDUpICogKGkgLyA1IC0gMTApICsgaSAvIDYpICogNSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgbGVmdDogJ2NlbnRlcicsXHJcbiAgICAgICAgdG9wOiAnY2VudGVyJ1xyXG4gICAgICB9LFxyXG4gICAgICBjb2xvcjogWycjRUZCMkIyJywgJyNGRkUxQTAnLCAnI0FDQ0ZCQSddLFxyXG4gICAgICBzZXJpZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAncGllJyxcclxuICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiB0aGlzLm1ha3NtYWRhbE51bWJlciwvL2dldE1ha3NlTWFkYWwoKSxcclxuICAgICAgICAgICAgICBuYW1lOiAnTWFkYWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5tYWtza2Vza21pbmVOdW1iZXIsLy9nZXRNYWtzZUtlc2ttaW5lKCksXHJcbiAgICAgICAgICAgICAgbmFtZTogJ0tlc2ttaW5lJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMubWFrc2tvcmdlTnVtYmVyLC8vZ2V0TWFrc2VLb3JnZSgpLFxyXG4gICAgICAgICAgICAgIG5hbWU6ICdLw7VyZ2UnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICByYWRpdXM6IFsnNDAlJywgJzcwJSddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG4gIH1cclxufSIsIjxkaXYgY2xhc3M9XCJhc3Vrb2h0XCI+XHJcbjxkaXYgZWNoYXJ0cyBbb3B0aW9uc109XCJvcHRpb25zXCIgY2xhc3M9XCJ5bGQxLWNoYXJ0XCI+PC9kaXY+XHJcbjwvZGl2PiJdfQ==