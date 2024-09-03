import { Component, VERSION } from '@angular/core';
//import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { XteechangeComponent } from '../xteechange/xteechange.component';
import * as i0 from "@angular/core";
export class GraafMudelToojoudComponent {
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
                            value: this.toomadalNumber,
                            name: 'Madal'
                        },
                        {
                            value: this.tookeskmineNumber,
                            name: 'Keskmine'
                        },
                        {
                            value: this.tookorgeNumber,
                            name: 'Kõrge'
                        }
                    ],
                    radius: ['40%', '70%']
                }
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: GraafMudelToojoudComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: GraafMudelToojoudComponent, isStandalone: true, selector: "graafmudeltoojoud", providers: [
            provideEcharts(),
        ], ngImport: i0, template: "<div class=\"asukoht\">\r\n<div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n</div>", styles: [".asukoht{padding-left:0}.yld1-chart{height:400px;padding-left:20px;width:1000px;background-position:right}\n"], dependencies: [{ kind: "directive", type: NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "initOpts", "merge", "autoResize", "loading", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartHighlight", "chartDownplay", "chartSelectChanged", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendLegendSelectAll", "chartLegendLegendInverseSelect", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartGraphRoam", "chartGeoRoam", "chartTreeRoam", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartGeoSelectChanged", "chartGeoSelected", "chartGeoUnselected", "chartAxisAreaSelected", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartGlobalCursorTaken", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: GraafMudelToojoudComponent, decorators: [{
            type: Component,
            args: [{ selector: 'graafmudeltoojoud', standalone: true, imports: [NgxEchartsDirective, XteechangeComponent], providers: [
                        provideEcharts(),
                    ], template: "<div class=\"asukoht\">\r\n<div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n</div>", styles: [".asukoht{padding-left:0}.yld1-chart{height:400px;padding-left:20px;width:1000px;background-position:right}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhYWZNdWRlbFRvb2pvdWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZWx1am91LWxpYi9zcmMvbGliL2dyYWFmTXVkZWxUb29qb3VkL2dyYWFmTXVkZWxUb29qb3VkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi9ncmFhZk11ZGVsVG9vam91ZC9ncmFhZk11ZGVsVG9vam91ZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxpREFBaUQ7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFZekUsTUFBTSxPQUFPLDBCQUEwQjtJQVdyQztRQVZBLFNBQUksR0FBRyxVQUFVLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQW1CbEMsUUFBRyxHQUFXLGNBQWMsQ0FBQztRQUM3QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBVXhCLFNBQUksR0FBVyxpQkFBaUIsQ0FBQztRQVVqQyxTQUFJLEdBQVcsY0FBYyxDQUFDO1FBN0I1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQW1CLENBQUM7UUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksbUJBQW1CLENBQUM7UUFDM0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQztRQUN4QyxJQUFJLENBQUMsY0FB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QyxhQUN4Qzt3QkFDVCxjQUFjLEVBQUU7cUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWRVJTSU9OLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy9pbXBvcnQgeyBOZ3hFY2hhcnRzTW9kdWxlIH0gZnJvbSAnbmd4LWVjaGFydHMnO1xyXG5pbXBvcnQgeyBOZ3hFY2hhcnRzRGlyZWN0aXZlLCBwcm92aWRlRWNoYXJ0cyB9IGZyb20gJ25neC1lY2hhcnRzJztcclxuaW1wb3J0IHsgWHRlZWNoYW5nZUNvbXBvbmVudCB9IGZyb20gJy4uL3h0ZWVjaGFuZ2UveHRlZWNoYW5nZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdncmFhZm11ZGVsdG9vam91ZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dyYWFmTXVkZWxUb29qb3VkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsgJy4vZ3JhYWZNdWRlbFRvb2pvdWQuY29tcG9uZW50LnNjc3MnIF0sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTmd4RWNoYXJ0c0RpcmVjdGl2ZSwgWHRlZWNoYW5nZUNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBwcm92aWRlRWNoYXJ0cygpLFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyYWFmTXVkZWxUb29qb3VkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0ICB7XHJcbiAgbmFtZSA9ICdBbmd1bGFyICcgKyBWRVJTSU9OLm1ham9yO1xyXG4gIG9wdGlvbnM6IGFueTtcclxuXHJcbiAgdG9vbWFkYWw6IGFueTtcclxuICB0b29rZXNrbWluZTogYW55O1xyXG4gIHRvb2tvcmdlOiBhbnk7XHJcbiAgdG9vbWFkYWxOdW1iZXI6IG51bWJlcjtcclxuICB0b29rZXNrbWluZU51bWJlcjogbnVtYmVyO1xyXG4gIHRvb2tvcmdlTnVtYmVyOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHRoaXMudG9vbWFkYWwgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcclxuICAgIHRoaXMudG9vbWFkYWxOdW1iZXIgPSB0aGlzLnRvb21hZGFsLm1vZGVsNXkxO1xyXG4gICAgdGhpcy50b29rZXNrbWluZSA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xyXG4gICAgdGhpcy50b29rZXNrbWluZU51bWJlciA9IHRoaXMudG9va2Vza21pbmUubW9kZWw1eTI7XHJcbiAgICB0aGlzLnRvb2tvcmdlID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XHJcbiAgICB0aGlzLnRvb2tvcmdlTnVtYmVyID0gdGhpcy50b29rb3JnZS5tb2RlbDV5MztcclxuICB9XHJcblxyXG4gIGtleTogc3RyaW5nID0gJ3Rvb2pvdWRNYWRhbCc7XHJcbiAgbG9jYWxWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgbWFkYWxTdHJpbmc6IHN0cmluZztcclxuICBtYWRhbE51bWJlcjogbnVtYmVyO1xyXG5cclxuICBnZXRUb29qb3VkTWFkYWwoKSB7XHJcbiAgICB0aGlzLm1hZGFsU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpO1xyXG4gICAgdGhpcy5tYWRhbE51bWJlcj1OdW1iZXIodGhpcy5tYWRhbFN0cmluZyk7XHJcbiAgICByZXR1cm4gdGhpcy5tYWRhbE51bWJlcjtcclxuICB9XHJcblxyXG4gIGtleTI6IHN0cmluZyA9ICd0b29qb3VkS2Vza21pbmUnO1xyXG4gIGtlc2ttaW5lU3RyaW5nOiBzdHJpbmc7XHJcbiAga2Vza21pbmVOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgZ2V0VG9vam91ZEtlc2ttaW5lKCkge1xyXG4gICAgdGhpcy5rZXNrbWluZVN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5Mik7XHJcbiAgICB0aGlzLmtlc2ttaW5lTnVtYmVyPU51bWJlcih0aGlzLmtlc2ttaW5lU3RyaW5nKTtcclxuICAgIHJldHVybiB0aGlzLmtlc2ttaW5lTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAga2V5Mzogc3RyaW5nID0gJ3Rvb2pvdWRLb3JnZSc7XHJcbiAga29yZ2VTdHJpbmc6IHN0cmluZztcclxuICBrb3JnZU51bWJlcjogbnVtYmVyO1xyXG5cclxuICBnZXRUb29qb3VkS29yZ2UoKSB7XHJcbiAgICB0aGlzLmtvcmdlU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkzKTtcclxuICAgIHRoaXMua29yZ2VOdW1iZXI9TnVtYmVyKHRoaXMua29yZ2VTdHJpbmcpO1xyXG4gICAgcmV0dXJuIHRoaXMua29yZ2VOdW1iZXI7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgeEF4aXNEYXRhID0gW107XHJcbiAgICBjb25zdCBkYXRhMSA9IFtdO1xyXG4gICAgY29uc3QgZGF0YTIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICAgIHhBeGlzRGF0YS5wdXNoKCdjYXRlZ29yeScgKyBpKTtcclxuICAgICAgZGF0YTEucHVzaCgoTWF0aC5zaW4oaSAvIDUpICogKGkgLyA1IC0gMTApICsgaSAvIDYpICogNSk7XHJcbiAgICAgIGRhdGEyLnB1c2goKE1hdGguY29zKGkgLyA1KSAqIChpIC8gNSAtIDEwKSArIGkgLyA2KSAqIDUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgIGxlZnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIHRvcDogJ2NlbnRlcidcclxuICAgICAgfSxcclxuICAgICAgY29sb3I6IFsnI0VGQjJCMicsICcjRkZFMUEwJywgJyNBQ0NGQkEnXSxcclxuICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ3BpZScsXHJcbiAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogdGhpcy50b29tYWRhbE51bWJlciwvL2dldFRvb2pvdWRNYWRhbCgpLFxyXG4gICAgICAgICAgICAgIG5hbWU6ICdNYWRhbCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnRvb2tlc2ttaW5lTnVtYmVyLC8vZ2V0VG9vam91ZEtlc2ttaW5lKCksXHJcbiAgICAgICAgICAgICAgbmFtZTogJ0tlc2ttaW5lJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudG9va29yZ2VOdW1iZXIsLy9nZXRUb29qb3VkS29yZ2UoKSxcclxuICAgICAgICAgICAgICBuYW1lOiAnS8O1cmdlJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgcmFkaXVzOiBbJzQwJScsICc3MCUnXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgICAgIFxyXG4gICAgfTtcclxuICB9XHJcbn0iLCI8ZGl2IGNsYXNzPVwiYXN1a29odFwiPlxyXG48ZGl2IGVjaGFydHMgW29wdGlvbnNdPVwib3B0aW9uc1wiIGNsYXNzPVwieWxkMS1jaGFydFwiPjwvZGl2PlxyXG48L2Rpdj4iXX0=