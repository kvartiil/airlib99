import { Component, VERSION } from '@angular/core';
//import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { XteechangeComponent } from '../xteechange/xteechange.component';
import * as i0 from "@angular/core";
export class GraafMudelTasuvComponent {
    constructor() {
        this.name = 'Angular ' + VERSION.major;
        this.key = 'tasuvMadal';
        this.localValue = '';
        this.key2 = 'tasuvKeskmine';
        this.key3 = 'tasuvKorge';
        this.tasumadal = new XteechangeComponent;
        this.tasumadalNumber = this.tasumadal.model4y1;
        this.tasukeskmine = new XteechangeComponent;
        this.tasukeskmineNumber = this.tasukeskmine.model4y2;
        this.tasukorge = new XteechangeComponent;
        this.tasukorgeNumber = this.tasukorge.model4y3;
    }
    getTasuvMadal() {
        this.madalString = localStorage.getItem(this.key);
        this.madalNumber = Number(this.madalString);
        return this.madalNumber;
    }
    getTasuvKeskmine() {
        this.keskmineString = localStorage.getItem(this.key2);
        this.keskmineNumber = Number(this.keskmineString);
        return this.keskmineNumber;
    }
    getTasuvKorge() {
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
                            value: this.tasumadalNumber,
                            name: 'Madal'
                        },
                        {
                            value: this.tasukeskmineNumber,
                            name: 'Keskmine'
                        },
                        {
                            value: this.tasukorgeNumber,
                            name: 'Kõrge'
                        }
                    ],
                    radius: ['40%', '70%']
                }
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: GraafMudelTasuvComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: GraafMudelTasuvComponent, isStandalone: true, selector: "graafmudeltasuv", providers: [
            provideEcharts(),
        ], ngImport: i0, template: "<div class=\"asukoht\">\r\n<div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n</div>", styles: [".asukoht{padding-left:0}.yld1-chart{height:400px;padding-left:20px;width:1000px;background-position:right}\n"], dependencies: [{ kind: "directive", type: NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "initOpts", "merge", "autoResize", "loading", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartHighlight", "chartDownplay", "chartSelectChanged", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendLegendSelectAll", "chartLegendLegendInverseSelect", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartGraphRoam", "chartGeoRoam", "chartTreeRoam", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartGeoSelectChanged", "chartGeoSelected", "chartGeoUnselected", "chartAxisAreaSelected", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartGlobalCursorTaken", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: GraafMudelTasuvComponent, decorators: [{
            type: Component,
            args: [{ selector: 'graafmudeltasuv', standalone: true, imports: [NgxEchartsDirective, XteechangeComponent], providers: [
                        provideEcharts(),
                    ], template: "<div class=\"asukoht\">\r\n<div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n</div>", styles: [".asukoht{padding-left:0}.yld1-chart{height:400px;padding-left:20px;width:1000px;background-position:right}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhYWZNdWRlbFRhc3V2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi9ncmFhZk11ZGVsVGFzdXYvZ3JhYWZNdWRlbFRhc3V2LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi9ncmFhZk11ZGVsVGFzdXYvZ3JhYWZNdWRlbFRhc3V2LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzNELGlEQUFpRDtBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQVl6RSxNQUFNLE9BQU8sd0JBQXdCO0lBV25DO1FBVkEsU0FBSSxHQUFHLFVBQVUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBbUJsQyxRQUFHLEdBQVcsWUFBWSxDQUFDO1FBQzNCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFVeEIsU0FBSSxHQUFXLGVBQWUsQ0FBQztRQVUvQixTQUFJLEdBQVcsWUFBWSxDQUFDO1FBN0IxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQW1CLENBQUM7UUFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksbUJBQW1CLENBQUM7UUFDNUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUks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Y0FBYyxFQUFFO3FCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVkVSU0lPTiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vaW1wb3J0IHsgTmd4RWNoYXJ0c01vZHVsZSB9IGZyb20gJ25neC1lY2hhcnRzJztcclxuaW1wb3J0IHsgTmd4RWNoYXJ0c0RpcmVjdGl2ZSwgcHJvdmlkZUVjaGFydHMgfSBmcm9tICduZ3gtZWNoYXJ0cyc7XHJcbmltcG9ydCB7IFh0ZWVjaGFuZ2VDb21wb25lbnQgfSBmcm9tICcuLi94dGVlY2hhbmdlL3h0ZWVjaGFuZ2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ3JhYWZtdWRlbHRhc3V2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ3JhYWZNdWRlbFRhc3V2LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsgJy4vZ3JhYWZNdWRlbFRhc3V2LmNvbXBvbmVudC5zY3NzJyBdLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW05neEVjaGFydHNEaXJlY3RpdmUsIFh0ZWVjaGFuZ2VDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgcHJvdmlkZUVjaGFydHMoKSxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmFhZk11ZGVsVGFzdXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgIHtcclxuICBuYW1lID0gJ0FuZ3VsYXIgJyArIFZFUlNJT04ubWFqb3I7XHJcbiAgb3B0aW9uczogYW55O1xyXG5cclxuICB0YXN1bWFkYWw6IGFueTtcclxuICB0YXN1a2Vza21pbmU6IGFueTtcclxuICB0YXN1a29yZ2U6IGFueTtcclxuICB0YXN1bWFkYWxOdW1iZXI6IG51bWJlcjtcclxuICB0YXN1a2Vza21pbmVOdW1iZXI6IG51bWJlcjtcclxuICB0YXN1a29yZ2VOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgdGhpcy50YXN1bWFkYWwgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcclxuICAgIHRoaXMudGFzdW1hZGFsTnVtYmVyID0gdGhpcy50YXN1bWFkYWwubW9kZWw0eTE7XHJcbiAgICB0aGlzLnRhc3VrZXNrbWluZSA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xyXG4gICAgdGhpcy50YXN1a2Vza21pbmVOdW1iZXIgPSB0aGlzLnRhc3VrZXNrbWluZS5tb2RlbDR5MjtcclxuICAgIHRoaXMudGFzdWtvcmdlID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XHJcbiAgICB0aGlzLnRhc3Vrb3JnZU51bWJlciA9IHRoaXMudGFzdWtvcmdlLm1vZGVsNHkzO1xyXG4gIH1cclxuXHJcbiAga2V5OiBzdHJpbmcgPSAndGFzdXZNYWRhbCc7XHJcbiAgbG9jYWxWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgbWFkYWxTdHJpbmc6IHN0cmluZztcclxuICBtYWRhbE51bWJlcjogbnVtYmVyO1xyXG5cclxuICBnZXRUYXN1dk1hZGFsKCkge1xyXG4gICAgdGhpcy5tYWRhbFN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KTtcclxuICAgIHRoaXMubWFkYWxOdW1iZXI9TnVtYmVyKHRoaXMubWFkYWxTdHJpbmcpO1xyXG4gICAgcmV0dXJuIHRoaXMubWFkYWxOdW1iZXI7XHJcbiAgfVxyXG5cclxuICBrZXkyOiBzdHJpbmcgPSAndGFzdXZLZXNrbWluZSc7XHJcbiAga2Vza21pbmVTdHJpbmc6IHN0cmluZztcclxuICBrZXNrbWluZU51bWJlcjogbnVtYmVyO1xyXG5cclxuICBnZXRUYXN1dktlc2ttaW5lKCkge1xyXG4gICAgdGhpcy5rZXNrbWluZVN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5Mik7XHJcbiAgICB0aGlzLmtlc2ttaW5lTnVtYmVyPU51bWJlcih0aGlzLmtlc2ttaW5lU3RyaW5nKTtcclxuICAgIHJldHVybiB0aGlzLmtlc2ttaW5lTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAga2V5Mzogc3RyaW5nID0gJ3Rhc3V2S29yZ2UnO1xyXG4gIGtvcmdlU3RyaW5nOiBzdHJpbmc7XHJcbiAga29yZ2VOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgZ2V0VGFzdXZLb3JnZSgpIHtcclxuICAgIHRoaXMua29yZ2VTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleTMpO1xyXG4gICAgdGhpcy5rb3JnZU51bWJlcj1OdW1iZXIodGhpcy5rb3JnZVN0cmluZyk7XHJcbiAgICByZXR1cm4gdGhpcy5rb3JnZU51bWJlcjtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB4QXhpc0RhdGEgPSBbXTtcclxuICAgIGNvbnN0IGRhdGExID0gW107XHJcbiAgICBjb25zdCBkYXRhMiA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgICAgeEF4aXNEYXRhLnB1c2goJ2NhdGVnb3J5JyArIGkpO1xyXG4gICAgICBkYXRhMS5wdXNoKChNYXRoLnNpbihpIC8gNSkgKiAoaSAvIDUgLSAxMCkgKyBpIC8gNikgKiA1KTtcclxuICAgICAgZGF0YTIucHVzaCgoTWF0aC5jb3MoaSAvIDUpICogKGkgLyA1IC0gMTApICsgaSAvIDYpICogNSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgbGVmdDogJ2NlbnRlcicsXHJcbiAgICAgICAgdG9wOiAnY2VudGVyJ1xyXG4gICAgICB9LFxyXG4gICAgICBjb2xvcjogWycjRUZCMkIyJywgJyNGRkUxQTAnLCAnI0FDQ0ZCQSddLFxyXG4gICAgICBzZXJpZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAncGllJyxcclxuICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnRhc3VtYWRhbE51bWJlciwvL2dldFRhc3V2TWFkYWwoKSxcclxuICAgICAgICAgICAgICBuYW1lOiAnTWFkYWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogdGhpcy50YXN1a2Vza21pbmVOdW1iZXIsLy9nZXRUYXN1dktlc2ttaW5lKCksXHJcbiAgICAgICAgICAgICAgbmFtZTogJ0tlc2ttaW5lJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudGFzdWtvcmdlTnVtYmVyLC8vZ2V0VGFzdXZLb3JnZSgpLFxyXG4gICAgICAgICAgICAgIG5hbWU6ICdLw7VyZ2UnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICByYWRpdXM6IFsnNDAlJywgJzcwJSddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG4gIH1cclxufSIsIjxkaXYgY2xhc3M9XCJhc3Vrb2h0XCI+XHJcbjxkaXYgZWNoYXJ0cyBbb3B0aW9uc109XCJvcHRpb25zXCIgY2xhc3M9XCJ5bGQxLWNoYXJ0XCI+PC9kaXY+XHJcbjwvZGl2PiJdfQ==