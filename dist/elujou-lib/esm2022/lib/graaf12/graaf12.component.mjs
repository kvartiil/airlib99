import { Component, VERSION } from '@angular/core';
import { xtee } from '../xtee/xtee';
//import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import * as i0 from "@angular/core";
export class Graaf12Component {
    constructor() {
        this.name = 'Angular ' + VERSION.major;
        this.effpsect = (xtee.EffpSect) * 100;
        this.effpsize = (xtee.EffpSize) * 100;
        this.effpcount = (xtee.EffpCount) * 100;
        this.liqpsect = (xtee.LiqpSect) * 100;
        this.liqpsize = Math.round((xtee.LiqpSize) * 100 * 10) / 10;
        this.liqpcount = (xtee.LiqpCount) * 100;
        this.levpsect = (xtee.LevpSect) * 100;
        this.levpsize = (xtee.LevpSize) * 100;
        this.levpcount = (xtee.LevpCount) * 100;
        this.retpsect = (xtee.RetpSect) * 100;
        this.retpsize = Math.round((xtee.RetpSize) * 100 * 10) / 10;
        this.retpcount = (xtee.RetpCount) * 100;
        this.emppsect = (xtee.EmppSect) * 100;
        this.emppsize = (xtee.EmppSize) * 100;
        this.emppcount = (xtee.EmppCount) * 100;
    }
    ngOnInit() {
        const xAxisData = [];
        const data1 = [];
        const data2 = [];
        this.options = {
            legend: { orient: 'horizontal',
                right: 66,
                top: 'bottom' },
            color: ['#005AA3', '#004277', '#00213C'],
            tooltip: {
                //formatter: params => {
                //    return '<div style="width:300px; height: 400px">working j</div>';
                //  },
                //formatter: 'Sinu {a} onb {b} onc {c} ettevõtetest',
                // confine: true
                trigger: 'item',
                confine: true,
                // formatter: function(params, callback) {
                //  return  "Sinu maakonnas " + params.value + "vaattta" + params.value[1] + "veel" + params.value[0] + "nimeke" + params.seriesName + "lsdjk aldkj aldkdfj aldfjk ldkj asdlfjk aldfj dlfkj aldfkj aldfj as";
                //  }, 
                //trigger: 'axis',
                // axisPointer: {
                //   type: 'shadow'
                // }
                formatter: function (params) {
                    return "<div style='width:50%; height: 100px; word-break: break-word;'><span style='font-weight: 700'>" + params.value[0] + "</span><br><span>" + "Sinu ettevõte on paremas seisus, kui" + "</span><br><span>" + params.value[1] + "% ettevõtteid sinu maakonnas, " + "</span><br><span>" + params.value[2] + "% tegevusvaldkonnas ja" + "</span><br><span>" + params.value[3] + "% suurusgrupis." + "</span></div>";
                }
                //Sinu ettevõte on paremas seisus kui 
                //23% ettevõtteid sinu maakonnas, 
                //33% tegevusvaldkonnas ja 
                //99% suurusgrupis.
                //formatter: function(params) {
                //  return "<div class='tooltip-key'><span>" + "Sinu maakonnas on " + params.value[1] + " %, " + "tegevusvaldkonnas " + params.value[2] +"</span></div>"
                // }
                //formatter: params => {
                //    return '<div style="width:300px; height: 400px">working<span>" + params.value[1] + {a} "</span></div>';
                //}, 
                //      },
                //tooltip: {formatter: 'Sinu {a} on {c}% ettevõtetest'},
                // tooltip: {formatter: 'Sinu {a} on , {b}, {c}, {d} and {e}'},
                //tooltip: {
                //  formatter: function(params, callback) {
                //    return  "Sinu {a} "  + params.seriesName + " on " + params.data.value + "lsdfjs" + params.value + "veel" + params.value[0] + "nimeke" + params.seriesName;
                //  } 
                //formatter: function(params, callback) {
                //  return  "my text {a}, value: " + params.value + "vaattta" + params.value[1] + "veel" + params.value[0] + "nimeke" + params.seriesName;
                //}
                // wrap https://github.com/apache/echarts/issues/16699
            },
            title: {
                text: 'Kui paljudest on sinu ettevõte paremas seisus',
                left: 'center'
            },
            dataset: {
                source: [
                    ['indikaator', 'Maakonnas', 'Tegevusvaldkonnas', 'Suurusgrupis'],
                    ['Efektiivsus', this.effpcount, this.effpsect, this.effpsize],
                    ['Maksevõime', this.liqpcount, this.liqpsect, this.liqpsize],
                    ['Finantsvõimendus', this.levpcount, this.levpsect, this.levpsize],
                    ['Tasuvus', this.retpcount, this.retpsect, this.retpsize],
                    ['Tööjõu tootlikkus', this.emppcount, this.emppsect, this.emppsize]
                ]
            },
            xAxis: { type: 'category',
                axisLabel: { interval: 0, rotate: 0 } },
            yAxis: {},
            series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Graaf12Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Graaf12Component, isStandalone: true, selector: "graaf12", providers: [
            provideEcharts(),
        ], ngImport: i0, template: "<div class=\"asukoht\">\r\n<div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n</div> ", styles: [".asukoht{padding-left:10px}.yld1-chart{height:400px;padding-left:0;width:720px;background-position:right}.tooltip-key{width:20px;color:red;word-break:break-word;white-space:normal}\n"], dependencies: [{ kind: "directive", type: NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "initOpts", "merge", "autoResize", "loading", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartHighlight", "chartDownplay", "chartSelectChanged", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendLegendSelectAll", "chartLegendLegendInverseSelect", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartGraphRoam", "chartGeoRoam", "chartTreeRoam", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartGeoSelectChanged", "chartGeoSelected", "chartGeoUnselected", "chartAxisAreaSelected", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartGlobalCursorTaken", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Graaf12Component, decorators: [{
            type: Component,
            args: [{ selector: 'graaf12', standalone: true, imports: [NgxEchartsDirective], providers: [
                        provideEcharts(),
                    ], template: "<div class=\"asukoht\">\r\n<div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n</div> ", styles: [".asukoht{padding-left:10px}.yld1-chart{height:400px;padding-left:0;width:720px;background-position:right}.tooltip-key{width:20px;color:red;word-break:break-word;white-space:normal}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhYWYxMi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lbHVqb3UtbGliL3NyYy9saWIvZ3JhYWYxMi9ncmFhZjEyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi9ncmFhZjEyL2dyYWFmMTIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNwQyxpREFBaUQ7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFZbEUsTUFBTSxPQUFPLGdCQUFnQjtJQXFCekI7UUFwQkYsU0FBSSxHQUFHLFVBQVUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBcUI5QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFDLEdBQUcsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUMsR0FBRyxHQUFDLEVBQUUsQ0FBQyxHQUFDLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMs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Q0FBQyxtQkFBbUIsQ0FBQyxhQUNuQjt3QkFDVCxjQUFjLEVBQUU7cUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWRVJTSU9OLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgeHRlZSB9IGZyb20gJy4uL3h0ZWUveHRlZSc7XHJcbi8vaW1wb3J0IHsgTmd4RWNoYXJ0c01vZHVsZSB9IGZyb20gJ25neC1lY2hhcnRzJztcclxuaW1wb3J0IHsgTmd4RWNoYXJ0c0RpcmVjdGl2ZSwgcHJvdmlkZUVjaGFydHMgfSBmcm9tICduZ3gtZWNoYXJ0cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dyYWFmMTInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmFhZjEyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsgJy4vZ3JhYWYxMi5jb21wb25lbnQuc2NzcycgXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtOZ3hFY2hhcnRzRGlyZWN0aXZlXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHByb3ZpZGVFY2hhcnRzKCksXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JhYWYxMkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCAge1xyXG4gIG5hbWUgPSAnQW5ndWxhciAnICsgVkVSU0lPTi5tYWpvcjtcclxuICBvcHRpb25zOiBhbnk7XHJcblxyXG5cclxuICBlZmZwc2VjdDogbnVtYmVyOyAgXHJcbiAgZWZmcHNpemU6IG51bWJlcjtcclxuICBlZmZwY291bnQ6IG51bWJlcjtcclxuICBsaXFwc2VjdDogbnVtYmVyO1xyXG4gIGxpcXBzaXplOiBudW1iZXI7XHJcbiAgbGlxcGNvdW50OiBudW1iZXI7XHJcbiAgbGV2cHNlY3Q6IG51bWJlcjtcclxuICBsZXZwc2l6ZTogbnVtYmVyO1xyXG4gIGxldnBjb3VudDogbnVtYmVyO1xyXG4gIHJldHBzZWN0OiBudW1iZXI7XHJcbiAgcmV0cHNpemU6IG51bWJlcjtcclxuICByZXRwY291bnQ6IG51bWJlcjtcclxuICBlbXBwc2VjdDogbnVtYmVyO1xyXG4gIGVtcHBzaXplOiBudW1iZXI7XHJcbiAgZW1wcGNvdW50OiBudW1iZXI7XHJcbiAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICAgIHRoaXMuZWZmcHNlY3QgPSAoeHRlZS5FZmZwU2VjdCkqMTAwO1xyXG4gICAgICB0aGlzLmVmZnBzaXplID0gKHh0ZWUuRWZmcFNpemUpKjEwMDtcclxuICAgICAgdGhpcy5lZmZwY291bnQgPSAoeHRlZS5FZmZwQ291bnQpKjEwMDtcclxuICAgICAgdGhpcy5saXFwc2VjdCA9ICh4dGVlLkxpcXBTZWN0KSoxMDA7XHJcbiAgICAgIHRoaXMubGlxcHNpemUgPSBNYXRoLnJvdW5kKCh4dGVlLkxpcXBTaXplKSoxMDAqMTApLzEwO1xyXG4gICAgICB0aGlzLmxpcXBjb3VudCA9ICh4dGVlLkxpcXBDb3VudCkqMTAwO1xyXG4gICAgICB0aGlzLmxldnBzZWN0ID0gKHh0ZWUuTGV2cFNlY3QpKjEwMDtcclxuICAgICAgdGhpcy5sZXZwc2l6ZSA9ICh4dGVlLkxldnBTaXplKSoxMDA7XHJcbiAgICAgIHRoaXMubGV2cGNvdW50ID0gKHh0ZWUuTGV2cENvdW50KSoxMDA7XHJcbiAgICAgIHRoaXMucmV0cHNlY3QgPSAoeHRlZS5SZXRwU2VjdCkqMTAwO1xyXG4gICAgICB0aGlzLnJldHBzaXplID0gTWF0aC5yb3VuZCgoeHRlZS5SZXRwU2l6ZSkqMTAwKjEwKS8xMDtcclxuICAgICAgdGhpcy5yZXRwY291bnQgPSAoeHRlZS5SZXRwQ291bnQpKjEwMDtcclxuICAgICAgdGhpcy5lbXBwc2VjdCA9ICh4dGVlLkVtcHBTZWN0KSoxMDA7XHJcbiAgICAgIHRoaXMuZW1wcHNpemUgPSAoeHRlZS5FbXBwU2l6ZSkqMTAwO1xyXG4gICAgICB0aGlzLmVtcHBjb3VudCA9ICh4dGVlLkVtcHBDb3VudCkqMTAwO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgeEF4aXNEYXRhID0gW107XHJcbiAgICBjb25zdCBkYXRhMSA9IFtdO1xyXG4gICAgY29uc3QgZGF0YTIgPSBbXTtcclxuXHJcbiAgIFxyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IHtcclxuICAgICAgbGVnZW5kOiB7b3JpZW50OiAnaG9yaXpvbnRhbCcsXHJcbiAgICAgIHJpZ2h0OiA2NixcclxuICAgICAgdG9wOiAnYm90dG9tJ30sXHJcbiAgICAgIGNvbG9yOiBbJyMwMDVBQTMnLCAnIzAwNDI3NycsICcjMDAyMTNDJ10sXHJcbiAgICAgXHJcbiAgICAgdG9vbHRpcDoge1xyXG5cclxuICAgICAgIC8vZm9ybWF0dGVyOiBwYXJhbXMgPT4ge1xyXG4gICAgICAgLy8gICAgcmV0dXJuICc8ZGl2IHN0eWxlPVwid2lkdGg6MzAwcHg7IGhlaWdodDogNDAwcHhcIj53b3JraW5nIGo8L2Rpdj4nO1xyXG4gICAgICAgLy8gIH0sXHJcbiAgICAgICAvL2Zvcm1hdHRlcjogJ1NpbnUge2F9IG9uYiB7Yn0gb25jIHtjfSBldHRldsO1dGV0ZXN0JyxcclxuICAgICAgIC8vIGNvbmZpbmU6IHRydWVcclxuICAgICAgIHRyaWdnZXI6ICdpdGVtJyxcclxuICAgICAgIGNvbmZpbmU6IHRydWUsXHJcbiAgICAgIC8vIGZvcm1hdHRlcjogZnVuY3Rpb24ocGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAvLyAgcmV0dXJuICBcIlNpbnUgbWFha29ubmFzIFwiICsgcGFyYW1zLnZhbHVlICsgXCJ2YWF0dHRhXCIgKyBwYXJhbXMudmFsdWVbMV0gKyBcInZlZWxcIiArIHBhcmFtcy52YWx1ZVswXSArIFwibmltZWtlXCIgKyBwYXJhbXMuc2VyaWVzTmFtZSArIFwibHNkamsgYWxka2ogYWxka2RmaiBhbGRmamsgbGRraiBhc2RsZmprIGFsZGZqIGRsZmtqIGFsZGZraiBhbGRmaiBhc1wiO1xyXG4gICAgICAvLyAgfSwgXHJcbiAgICAgICAvL3RyaWdnZXI6ICdheGlzJyxcclxuICAgICAgIC8vIGF4aXNQb2ludGVyOiB7XHJcbiAgICAgICAvLyAgIHR5cGU6ICdzaGFkb3cnXHJcblxyXG4gICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgIHJldHVybiBcIjxkaXYgc3R5bGU9J3dpZHRoOjUwJTsgaGVpZ2h0OiAxMDBweDsgd29yZC1icmVhazogYnJlYWstd29yZDsnPjxzcGFuIHN0eWxlPSdmb250LXdlaWdodDogNzAwJz5cIiArIHBhcmFtcy52YWx1ZVswXSsgXCI8L3NwYW4+PGJyPjxzcGFuPlwiICArIFwiU2ludSBldHRldsO1dGUgb24gcGFyZW1hcyBzZWlzdXMsIGt1aVwiICsgXCI8L3NwYW4+PGJyPjxzcGFuPlwiICsgcGFyYW1zLnZhbHVlWzFdICsgXCIlIGV0dGV2w7V0dGVpZCBzaW51IG1hYWtvbm5hcywgXCIgKyBcIjwvc3Bhbj48YnI+PHNwYW4+XCIgKyBwYXJhbXMudmFsdWVbMl0gKyBcIiUgdGVnZXZ1c3ZhbGRrb25uYXMgamFcIiArIFwiPC9zcGFuPjxicj48c3Bhbj5cIiArcGFyYW1zLnZhbHVlWzNdICsgXCIlIHN1dXJ1c2dydXBpcy5cIiArXCI8L3NwYW4+PC9kaXY+XCJcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9TaW51IGV0dGV2w7V0ZSBvbiBwYXJlbWFzIHNlaXN1cyBrdWkgXHJcbiAgICAgIC8vMjMlIGV0dGV2w7V0dGVpZCBzaW51IG1hYWtvbm5hcywgXHJcbiAgICAgIC8vMzMlIHRlZ2V2dXN2YWxka29ubmFzIGphIFxyXG4gICAgICAvLzk5JSBzdXVydXNncnVwaXMuXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgLy9mb3JtYXR0ZXI6IGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAvLyAgcmV0dXJuIFwiPGRpdiBjbGFzcz0ndG9vbHRpcC1rZXknPjxzcGFuPlwiICsgXCJTaW51IG1hYWtvbm5hcyBvbiBcIiArIHBhcmFtcy52YWx1ZVsxXSArIFwiICUsIFwiICsgXCJ0ZWdldnVzdmFsZGtvbm5hcyBcIiArIHBhcmFtcy52YWx1ZVsyXSArXCI8L3NwYW4+PC9kaXY+XCJcclxuICAgICAvLyB9XHJcblxyXG4gICAgICAgLy9mb3JtYXR0ZXI6IHBhcmFtcyA9PiB7XHJcbiAgICAgICAvLyAgICByZXR1cm4gJzxkaXYgc3R5bGU9XCJ3aWR0aDozMDBweDsgaGVpZ2h0OiA0MDBweFwiPndvcmtpbmc8c3Bhbj5cIiArIHBhcmFtcy52YWx1ZVsxXSArIHthfSBcIjwvc3Bhbj48L2Rpdj4nO1xyXG4gICAgICAgIC8vfSwgXHJcblxyXG4gICAgXHJcbi8vICAgICAgfSxcclxuICAgICAgXHJcbiAgICAgIC8vdG9vbHRpcDoge2Zvcm1hdHRlcjogJ1NpbnUge2F9IG9uIHtjfSUgZXR0ZXbDtXRldGVzdCd9LFxyXG4gICAgIC8vIHRvb2x0aXA6IHtmb3JtYXR0ZXI6ICdTaW51IHthfSBvbiAsIHtifSwge2N9LCB7ZH0gYW5kIHtlfSd9LFxyXG4gICAgICAvL3Rvb2x0aXA6IHtcclxuICAgICAgLy8gIGZvcm1hdHRlcjogZnVuY3Rpb24ocGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAvLyAgICByZXR1cm4gIFwiU2ludSB7YX0gXCIgICsgcGFyYW1zLnNlcmllc05hbWUgKyBcIiBvbiBcIiArIHBhcmFtcy5kYXRhLnZhbHVlICsgXCJsc2RmanNcIiArIHBhcmFtcy52YWx1ZSArIFwidmVlbFwiICsgcGFyYW1zLnZhbHVlWzBdICsgXCJuaW1la2VcIiArIHBhcmFtcy5zZXJpZXNOYW1lO1xyXG4gICAgICAvLyAgfSBcclxuICAgICAgLy9mb3JtYXR0ZXI6IGZ1bmN0aW9uKHBhcmFtcywgY2FsbGJhY2spIHtcclxuICAgICAgLy8gIHJldHVybiAgXCJteSB0ZXh0IHthfSwgdmFsdWU6IFwiICsgcGFyYW1zLnZhbHVlICsgXCJ2YWF0dHRhXCIgKyBwYXJhbXMudmFsdWVbMV0gKyBcInZlZWxcIiArIHBhcmFtcy52YWx1ZVswXSArIFwibmltZWtlXCIgKyBwYXJhbXMuc2VyaWVzTmFtZTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vIHdyYXAgaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9lY2hhcnRzL2lzc3Vlcy8xNjY5OVxyXG4gICAgICAgICAgIFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdGV4dDogJ0t1aSBwYWxqdWRlc3Qgb24gc2ludSBldHRldsO1dGUgcGFyZW1hcyBzZWlzdXMnLFxyXG4gICAgICAgIGxlZnQ6ICdjZW50ZXInXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGFzZXQ6IHtcclxuICAgICAgICBzb3VyY2U6IFtcclxuICAgICAgICAgIFsnaW5kaWthYXRvcicsICdNYWFrb25uYXMnLCAnVGVnZXZ1c3ZhbGRrb25uYXMnLCAnU3V1cnVzZ3J1cGlzJ10sXHJcbiAgICAgICAgICBbJ0VmZWt0aWl2c3VzJywgdGhpcy5lZmZwY291bnQsIHRoaXMuZWZmcHNlY3QsIHRoaXMuZWZmcHNpemVdLFxyXG4gICAgICAgICAgWydNYWtzZXbDtWltZScsIHRoaXMubGlxcGNvdW50LCB0aGlzLmxpcXBzZWN0LCB0aGlzLmxpcXBzaXplXSxcclxuICAgICAgICAgIFsnRmluYW50c3bDtWltZW5kdXMnLCB0aGlzLmxldnBjb3VudCwgdGhpcy5sZXZwc2VjdCwgdGhpcy5sZXZwc2l6ZV0sXHJcbiAgICAgICAgICBbJ1Rhc3V2dXMnLCB0aGlzLnJldHBjb3VudCwgdGhpcy5yZXRwc2VjdCwgdGhpcy5yZXRwc2l6ZV0sXHJcbiAgICAgICAgICBbJ1TDtsO2asO1dSB0b290bGlra3VzJywgdGhpcy5lbXBwY291bnQsIHRoaXMuZW1wcHNlY3QsIHRoaXMuZW1wcHNpemVdXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB4QXhpczogeyB0eXBlOiAnY2F0ZWdvcnknLFxyXG4gICAgICBheGlzTGFiZWw6IHsgaW50ZXJ2YWw6IDAsIHJvdGF0ZTogMCB9IH0sXHJcbiAgICAgIHlBeGlzOiB7fSxcclxuICAgICAgc2VyaWVzOiBbeyB0eXBlOiAnYmFyJyB9LCB7IHR5cGU6ICdiYXInIH0sIHsgdHlwZTogJ2JhcicgfV1cclxuICAgICAgXHJcbiAgICB9O1xyXG4gICAgfSBcclxufVxyXG5cclxuIiwiPGRpdiBjbGFzcz1cImFzdWtvaHRcIj5cclxuPGRpdiBlY2hhcnRzIFtvcHRpb25zXT1cIm9wdGlvbnNcIiBjbGFzcz1cInlsZDEtY2hhcnRcIj48L2Rpdj5cclxuPC9kaXY+ICJdfQ==