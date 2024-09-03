import { Component, VERSION } from '@angular/core';
//import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { XteechangeComponent } from '../xteechange/xteechange.component';
import * as i0 from "@angular/core";
export class GraafMudelDataComponent {
    constructor() {
        this.name = 'Angular ' + VERSION.major;
        this.key = 'toojoudMadal';
        this.localValue = '';
        this.key2 = 'toojoudKeskmine';
        this.key3 = 'toojoudKorge';
        this.toomadal = new XteechangeComponent;
        this.toomadalNumber = this.toomadal.model5y1;
        this.tookeskmine = new XteechangeComponent;
        this.tookeskmineNumber = this.tookeskmine.model5y2;
        this.tookorge = new XteechangeComponent;
        this.tookorgeNumber = this.tookorge.model5y3;
    }
    getToojoudMadal() {
        this.madalString = localStorage.getItem(this.key);
        this.madalNumber = Number(this.madalString);
        return this.madalNumber;
    }
    getToojoudKeskmine() {
        this.keskmineString = localStorage.getItem(this.key2);
        this.keskmineNumber = Number(this.keskmineString);
        return this.keskmineNumber;
    }
    getToojoudKorge() {
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
                text: 'Andmed puudu',
                left: 'center',
                top: 'center'
            },
            color: ['#dbdfe2', '#5d6071', '#f2f3f3'],
            series: [
                {
                    type: 'pie',
                    data: [
                        {
                            value: 100,
                            name: 'Mudelisisendit pole'
                        },
                        {
                            value: 0,
                            label: {
                                show: false
                            }
                        },
                        {
                            value: 0,
                            label: {
                                show: false
                            }
                        }
                    ],
                    radius: ['40%', '70%']
                }
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: GraafMudelDataComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: GraafMudelDataComponent, isStandalone: true, selector: "graafmudeldata", providers: [
            provideEcharts(),
        ], ngImport: i0, template: "<div class=\"asukoht\">\r\n<div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n</div>", styles: [".asukoht{padding-left:0}.yld1-chart{height:400px;padding-left:20px;width:1000px;background-position:right}\n"], dependencies: [{ kind: "directive", type: NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "initOpts", "merge", "autoResize", "loading", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartHighlight", "chartDownplay", "chartSelectChanged", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendLegendSelectAll", "chartLegendLegendInverseSelect", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartGraphRoam", "chartGeoRoam", "chartTreeRoam", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartGeoSelectChanged", "chartGeoSelected", "chartGeoUnselected", "chartAxisAreaSelected", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartGlobalCursorTaken", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: GraafMudelDataComponent, decorators: [{
            type: Component,
            args: [{ selector: 'graafmudeldata', standalone: true, imports: [NgxEchartsDirective, XteechangeComponent], providers: [
                        provideEcharts(),
                    ], template: "<div class=\"asukoht\">\r\n<div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n</div>", styles: [".asukoht{padding-left:0}.yld1-chart{height:400px;padding-left:20px;width:1000px;background-position:right}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhYWZNdWRlbERhdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZWx1am91LWxpYi9zcmMvbGliL2dyYWFmTXVkZWxEYXRhL2dyYWFmTXVkZWxEYXRhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi9ncmFhZk11ZGVsRGF0YS9ncmFhZk11ZGVsRGF0YS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxpREFBaUQ7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFZekUsTUFBTSxPQUFPLHVCQUF1QjtJQVdsQztRQVZBLFNBQUksR0FBRyxVQUFVLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQW1CbEMsUUFBRyxHQUFXLGNBQWMsQ0FBQztRQUM3QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBVXhCLFNBQUksR0FBVyxpQkFBaUIsQ0FBQztRQVVqQyxTQUFJLEdBQVcsY0FBYyxDQUFDO1FBN0I1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQW1CLENBQUM7UUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksbUJBQW1CLENBQUM7UUFDM0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQztRQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FB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YUFDeEM7d0JBQ1QsY0FBYyxFQUFFO3FCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVkVSU0lPTiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vaW1wb3J0IHsgTmd4RWNoYXJ0c01vZHVsZSB9IGZyb20gJ25neC1lY2hhcnRzJztcclxuaW1wb3J0IHsgTmd4RWNoYXJ0c0RpcmVjdGl2ZSwgcHJvdmlkZUVjaGFydHMgfSBmcm9tICduZ3gtZWNoYXJ0cyc7XHJcbmltcG9ydCB7IFh0ZWVjaGFuZ2VDb21wb25lbnQgfSBmcm9tICcuLi94dGVlY2hhbmdlL3h0ZWVjaGFuZ2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ3JhYWZtdWRlbGRhdGEnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmFhZk11ZGVsRGF0YS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbICcuL2dyYWFmTXVkZWxEYXRhLmNvbXBvbmVudC5zY3NzJyBdLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW05neEVjaGFydHNEaXJlY3RpdmUsIFh0ZWVjaGFuZ2VDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgcHJvdmlkZUVjaGFydHMoKSxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmFhZk11ZGVsRGF0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCAge1xyXG4gIG5hbWUgPSAnQW5ndWxhciAnICsgVkVSU0lPTi5tYWpvcjtcclxuICBvcHRpb25zOiBhbnk7XHJcblxyXG4gIHRvb21hZGFsOiBhbnk7XHJcbiAgdG9va2Vza21pbmU6IGFueTtcclxuICB0b29rb3JnZTogYW55O1xyXG4gIHRvb21hZGFsTnVtYmVyOiBudW1iZXI7XHJcbiAgdG9va2Vza21pbmVOdW1iZXI6IG51bWJlcjtcclxuICB0b29rb3JnZU51bWJlcjogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICB0aGlzLnRvb21hZGFsID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7IFxyXG4gICAgdGhpcy50b29tYWRhbE51bWJlciA9IHRoaXMudG9vbWFkYWwubW9kZWw1eTE7XHJcbiAgICB0aGlzLnRvb2tlc2ttaW5lID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XHJcbiAgICB0aGlzLnRvb2tlc2ttaW5lTnVtYmVyID0gdGhpcy50b29rZXNrbWluZS5tb2RlbDV5MjtcclxuICAgIHRoaXMudG9va29yZ2UgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcclxuICAgIHRoaXMudG9va29yZ2VOdW1iZXIgPSB0aGlzLnRvb2tvcmdlLm1vZGVsNXkzO1xyXG4gIH1cclxuXHJcbiAga2V5OiBzdHJpbmcgPSAndG9vam91ZE1hZGFsJztcclxuICBsb2NhbFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBtYWRhbFN0cmluZzogc3RyaW5nO1xyXG4gIG1hZGFsTnVtYmVyOiBudW1iZXI7XHJcblxyXG4gIGdldFRvb2pvdWRNYWRhbCgpIHtcclxuICAgIHRoaXMubWFkYWxTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSk7XHJcbiAgICB0aGlzLm1hZGFsTnVtYmVyPU51bWJlcih0aGlzLm1hZGFsU3RyaW5nKTtcclxuICAgIHJldHVybiB0aGlzLm1hZGFsTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAga2V5Mjogc3RyaW5nID0gJ3Rvb2pvdWRLZXNrbWluZSc7XHJcbiAga2Vza21pbmVTdHJpbmc6IHN0cmluZztcclxuICBrZXNrbWluZU51bWJlcjogbnVtYmVyO1xyXG5cclxuICBnZXRUb29qb3VkS2Vza21pbmUoKSB7XHJcbiAgICB0aGlzLmtlc2ttaW5lU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkyKTtcclxuICAgIHRoaXMua2Vza21pbmVOdW1iZXI9TnVtYmVyKHRoaXMua2Vza21pbmVTdHJpbmcpO1xyXG4gICAgcmV0dXJuIHRoaXMua2Vza21pbmVOdW1iZXI7XHJcbiAgfVxyXG5cclxuICBrZXkzOiBzdHJpbmcgPSAndG9vam91ZEtvcmdlJztcclxuICBrb3JnZVN0cmluZzogc3RyaW5nO1xyXG4gIGtvcmdlTnVtYmVyOiBudW1iZXI7XHJcblxyXG4gIGdldFRvb2pvdWRLb3JnZSgpIHtcclxuICAgIHRoaXMua29yZ2VTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleTMpO1xyXG4gICAgdGhpcy5rb3JnZU51bWJlcj1OdW1iZXIodGhpcy5rb3JnZVN0cmluZyk7XHJcbiAgICByZXR1cm4gdGhpcy5rb3JnZU51bWJlcjtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB4QXhpc0RhdGEgPSBbXTtcclxuICAgIGNvbnN0IGRhdGExID0gW107XHJcbiAgICBjb25zdCBkYXRhMiA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgICAgeEF4aXNEYXRhLnB1c2goJ2NhdGVnb3J5JyArIGkpO1xyXG4gICAgICBkYXRhMS5wdXNoKChNYXRoLnNpbihpIC8gNSkgKiAoaSAvIDUgLSAxMCkgKyBpIC8gNikgKiA1KTtcclxuICAgICAgZGF0YTIucHVzaCgoTWF0aC5jb3MoaSAvIDUpICogKGkgLyA1IC0gMTApICsgaSAvIDYpICogNSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdGV4dDogJ0FuZG1lZCBwdXVkdScsXHJcbiAgICAgICAgbGVmdDogJ2NlbnRlcicsXHJcbiAgICAgICAgdG9wOiAnY2VudGVyJ1xyXG4gICAgICB9LFxyXG4gICAgICBjb2xvcjogWycjZGJkZmUyJywgJyM1ZDYwNzEnLCAnI2YyZjNmMyddLFxyXG4gICAgICBzZXJpZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAncGllJyxcclxuICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAxMDAsLy9nZXRUb29qb3VkTWFkYWwoKSxcclxuICAgICAgICAgICAgICBuYW1lOiAnTXVkZWxpc2lzZW5kaXQgcG9sZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAwLC8vZ2V0VG9vam91ZEtlc2ttaW5lKCksXHJcbiAgICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiAwLC8vZ2V0VG9vam91ZEtvcmdlKCksXHJcbiAgICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIHJhZGl1czogWyc0MCUnLCAnNzAlJ11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgICAgICBcclxuICAgIH07XHJcbiAgfVxyXG59IiwiPGRpdiBjbGFzcz1cImFzdWtvaHRcIj5cclxuPGRpdiBlY2hhcnRzIFtvcHRpb25zXT1cIm9wdGlvbnNcIiBjbGFzcz1cInlsZDEtY2hhcnRcIj48L2Rpdj5cclxuPC9kaXY+Il19