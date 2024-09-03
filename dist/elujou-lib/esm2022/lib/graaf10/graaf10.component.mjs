import { Component } from '@angular/core';
import { xtee } from '../xtee/xtee';
//import { NgxEchartsModule } from 'ngx-echarts';
import { XteechangeComponent } from '../xteechange/xteechange.component';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import * as i0 from "@angular/core";
export class Graaf10Component {
    getEfektMadal() {
        this.myItem2 = xtee.model1y1;
        //this.myItem = localStorage.getItem(this.key);
        //this.myItem2=Number(this.myItem);
        return this.myItem2;
    }
    getEfektKeskmine() {
        this.keskmineNumber = xtee.model1y2;
        //this.keskmineString = localStorage.getItem(this.key2);
        //this.keskmineNumber=Number(this.keskmineString);
        return this.keskmineNumber;
    }
    getEfektKorge() {
        //this.korgeString = localStorage.getItem(this.key3);
        //this.korgeNumber=Number(this.korgeString);
        this.korgeNumber = xtee.model1y3;
        return this.korgeNumber;
    }
    korgevaart() {
        //setInterval (() => {
        //this.value = Math.floor((Math.random() * 2000) + 1);
        this.EfKorgeValue = this.getEfektKorge();
        //}, 7000);
        return this.EfKorgeValue;
    }
    getMakseMadal() {
        //this.madalStringm = localStorage.getItem(this.keym);
        //this.madalNumberm=Number(this.madalStringm);
        this.madalNumberm = xtee.model2y1;
        return this.madalNumberm;
    }
    getMakseKeskmine() {
        //this.keskmineStringm = localStorage.getItem(this.key2m);
        //this.keskmineNumberm=Number(this.keskmineStringm);
        this.keskmineNumberm = xtee.model2y2;
        return this.keskmineNumberm;
    }
    getMakseKorge() {
        //this.korgeStringm = localStorage.getItem(this.key3m);
        //this.korgeNumberm=Number(this.korgeStringm);
        this.korgeNumberm = xtee.model2y3;
        return this.korgeNumberm;
    }
    getVoimMadal() {
        //this.madalStringv = localStorage.getItem(this.keyv);
        //this.madalNumberv=Number(this.madalStringv);
        this.madalNumberv = xtee.model3y1;
        return this.madalNumberv;
    }
    getVoimKeskmine() {
        //this.keskmineStringv = localStorage.getItem(this.key2v);
        //this.keskmineNumberv=Number(this.keskmineStringv);
        this.keskmineNumberv = xtee.model3y2;
        return this.keskmineNumberv;
    }
    getVoimKorge() {
        //this.korgeStringv = localStorage.getItem(this.key3v);
        //this.korgeNumberv=Number(this.korgeStringv);
        this.korgeNumberv = xtee.model3y3;
        return this.korgeNumberv;
    }
    getTasuvMadal() {
        //this.madalStringt = localStorage.getItem(this.keyt);
        //this.madalNumbert=Number(this.madalStringt);
        this.madalNumbert = xtee.model4y1;
        return this.madalNumbert;
    }
    getTasuvKeskmine() {
        //this.keskmineStringt = localStorage.getItem(this.key2t);
        //this.keskmineNumbert=Number(this.keskmineStringt);
        this.keskmineNumbert = xtee.model4y2;
        return this.keskmineNumbert;
    }
    getTasuvKorge() {
        //this.korgeStringt = localStorage.getItem(this.key3t);
        //this.korgeNumbert=Number(this.korgeStringt);
        this.korgeNumbert = xtee.model4y3;
        return this.korgeNumbert;
    }
    getToojoudMadal() {
        //this.madalStringj = localStorage.getItem(this.keyj);
        //this.madalNumberj=Number(this.madalStringj);
        this.madalNumberj = xtee.model5y1;
        return this.madalNumberj;
    }
    getToojoudKeskmine() {
        //this.keskmineStringj = localStorage.getItem(this.key2j);
        //this.keskmineNumberj=Number(this.keskmineStringj);
        this.keskmineNumberj = xtee.model5y2;
        return this.keskmineNumberj;
    }
    getToojoudKorge() {
        //this.korgeStringj = localStorage.getItem(this.key3j);
        //this.korgeNumberj=Number(this.korgeStringj);
        this.korgeNumberj = xtee.model5y3;
        return this.korgeNumberj;
    }
    constructor() {
        this.key = 'efektMadal';
        this.localValue = '';
        this.key2 = 'efektKeskmine';
        this.key3 = 'efektKorge';
        this.keym = 'makseMadal';
        this.localValuem = '';
        this.key2m = 'makseKeskmine';
        this.key3m = 'makseKorge';
        this.keyv = 'voimMadal';
        this.localValuev = '';
        this.key2v = 'voimKeskmine';
        this.key3v = 'voimKorge';
        this.keyt = 'tasuvMadal';
        this.localValuet = '';
        this.key2t = 'tasuvKeskmine';
        this.key3t = 'tasuvKorge';
        this.keyj = 'toojoudMadal';
        this.localValuej = '';
        this.key2j = 'toojoudKeskmine';
        this.key3j = 'toojoudKorge';
        //  update() {
        //    this.ngOnInit();
        //} 
        this.data = [];
        this.datake = [];
        this.datako = [];
        this.datalabel = [];
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
        if (xtee.model5y1) {
            this.data = [
                (this.effmadalNumber * 100),
                (this.maksmadalNumber * 100),
                (this.voimmadalNumber * 100),
                (this.tasumadalNumber * 100),
                (this.toomadalNumber * 100)
            ];
            this.datake = [
                (this.effkeskmineNumber * 100),
                (this.makskeskmineNumber * 100),
                (this.voimkeskmineNumber * 100),
                (this.tasukeskmineNumber * 100),
                (this.tookeskmineNumber * 100)
            ];
            this.datako = [
                (this.effkorgeNumber * 100),
                (this.makskorgeNumber * 100),
                (this.voimkorgeNumber * 100),
                (this.tasukorgeNumber * 100),
                (this.tookorgeNumber * 100)
            ];
            this.datalabel = ['Efektiivsus', 'Maksevõime', 'Võimendus', 'Tasuvus', 'Tööjõud'];
        }
        else {
            this.data = [
                (this.effmadalNumber * 100),
                (this.maksmadalNumber * 100),
                (this.voimmadalNumber * 100),
                (this.tasumadalNumber * 100)
            ];
            this.datake = [
                (this.effkeskmineNumber * 100),
                (this.makskeskmineNumber * 100),
                (this.voimkeskmineNumber * 100),
                (this.tasukeskmineNumber * 100)
            ];
            this.datako = [
                (this.effkorgeNumber * 100),
                (this.makskorgeNumber * 100),
                (this.voimkorgeNumber * 100),
                (this.tasukorgeNumber * 100)
            ];
            this.datalabel = ['Efektiivsus', 'Maksevõime', 'Võimendus', 'Tasuvus'];
        }
    }
    ;
    ngOnInit() {
        const xAxisData = [];
        const data1 = [];
        const data2 = [];
        //for (let i = 0; i < 100; i++) {
        //  xAxisData.push('category' + i);
        //  data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        //  data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        //}
        this.options = {
            legend: {
                data: ['Madal', 'Keskmine', 'Kõrge'],
                align: 'left',
            },
            tooltip: {},
            label: {
                show: true,
                //formatter: '(params)+ %'
                formatter: (params) => Math.round(params.value * 10) / 10 + ' %'
            },
            xAxis: {
                //data: xAxisData,
                //data: ['A', 'B', 'C', 'D', 'E'],
                silent: false,
                type: 'value',
                //label: {
                //  show: true,
                //formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
                //},
                //position: 'top',
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    formatter: '{value} %',
                    align: 'center'
                    // ...
                },
                axisLine: { onZero: false },
            },
            yAxis: {
                type: 'category',
                data: this.datalabel,
                //data: ['Efektiivsus', 'Maksevõime', 'Võimendus', 'Tasuvus', 'Tööjõud'],
                inverse: true
            },
            series: [
                {
                    name: 'Madal',
                    type: 'bar',
                    //stack: 'total',
                    //stack: '1',
                    stack: 'x',
                    //data: data1,
                    data: this.data,
                    //data: [
                    //  (this.getEfektMadal()*100),
                    //  (this.getMakseMadal()*100),
                    //  (this.getVoimMadal()*100),
                    //  (this.getTasuvMadal()*100),
                    //  (this.getToojoudMadal()*100) 
                    //  ],
                    //  markLine: {
                    //    data: [{
                    //            name: 'Maksimum',
                    //            type: 'max'
                    //       },
                    //        {
                    //            name: 'Miinimum',
                    //            type: 'min'
                    //        }
                    //    ]
                    //},
                    color: ['#EFB2B2'],
                    animationDelay: (idx) => idx * 1000,
                },
                {
                    name: 'Keskmine',
                    type: 'bar',
                    stack: 'x',
                    //stack: '1',
                    data: this.datake,
                    //data: [
                    //  (this.getEfektKeskmine()*100), 
                    //  (this.getMakseKeskmine()*100),
                    //  (this.getVoimKeskmine()*100),
                    //  (this.getTasuvKeskmine()*100),
                    //  (this.getToojoudKeskmine()*100)
                    //  ],
                    //  markLine: {
                    //    data: [{
                    //            name: 'Maksimum',
                    //            type: 'max',
                    //        },
                    //        {
                    //            name: 'Miinimum',
                    //            type: 'min',
                    //        }
                    //    ]
                    //},
                    color: ['#FFE1A0'],
                    //data: data2,
                    animationDelay: (idx) => idx * 1000 + 1000,
                },
                {
                    name: 'Kõrge',
                    type: 'bar',
                    stack: 'x',
                    //stack: '1',
                    data: this.datako,
                    //  data: [
                    //    (this.getEfektKorge()*100),            
                    //    (this.getMakseKorge()*100),
                    //    (this.getVoimKorge()*100),
                    //    (this.getTasuvKorge()*100),
                    //    (this.getToojoudKorge()*100)
                    //    ],
                    //  markLine: {
                    //    data: [{
                    //            name: 'Maksimum',
                    //            type: 'max',
                    //        },
                    //        {
                    //            name: 'Miinimum',
                    //            type: 'min',
                    //        }
                    //    ]
                    //},
                    color: ['#ACCFBA'],
                    //data: data2,
                    animationDelay: (idx) => idx * 1000 + 1000,
                },
                5
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: (idx) => idx * 5,
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Graaf10Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Graaf10Component, isStandalone: true, selector: "graaf10", providers: [
            provideEcharts(),
        ], ngImport: i0, template: "<div class=\"asukoht\">\r\n  <div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n  </div>\r\n  <!--{{korgevaart()}}-->\r\n  <!----{{update()}}-->", styles: [".asukoht{padding-left:10px}.yld1-chart{height:400px;padding-left:40px;width:1000px;background-position:right}\n"], dependencies: [{ kind: "directive", type: NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "initOpts", "merge", "autoResize", "loading", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartHighlight", "chartDownplay", "chartSelectChanged", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendLegendSelectAll", "chartLegendLegendInverseSelect", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartGraphRoam", "chartGeoRoam", "chartTreeRoam", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartGeoSelectChanged", "chartGeoSelected", "chartGeoUnselected", "chartAxisAreaSelected", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartGlobalCursorTaken", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Graaf10Component, decorators: [{
            type: Component,
            args: [{ selector: 'graaf10', standalone: true, imports: [NgxEchartsDirective, XteechangeComponent], providers: [
                        provideEcharts(),
                    ], template: "<div class=\"asukoht\">\r\n  <div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n  </div>\r\n  <!--{{korgevaart()}}-->\r\n  <!----{{update()}}-->", styles: [".asukoht{padding-left:10px}.yld1-chart{height:400px;padding-left:40px;width:1000px;background-position:right}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhYWYxMC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lbHVqb3UtbGliL3NyYy9saWIvZ3JhYWYxMC9ncmFhZjEwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi9ncmFhZjEwL2dyYWFmMTAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3BDLGlEQUFpRDtBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQWFsRSxNQUFNLE9BQU8sZ0JBQWdCO0lBVTNCLGFBQWE7UUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDN0IsK0NBQStDO1FBQy9DLG1DQUFtQztRQUNuQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQU1ELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNwQyx3REFBd0Q7UUFDeEQsa0RBQWtEO1FBQ2xELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBTUQsYUFBYTtRQUNYLHFEQUFxRDtRQUNyRCw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBTUQsVUFBVTtRQUNSLHNCQUFzQjtRQUNkLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFFLElBQUksQ0FB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YTtvQkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLFdBQVc7b0JBQ1gsNkNBQTZDO29CQUM3QyxpQ0FBaUM7b0JBQ2pDLGdDQUFnQztvQkFDaEMsaUNBQWlDO29CQUNqQyxrQ0FBa0M7b0JBQ2xDLFFBQVE7b0JBQ1IsZUFBZTtvQkFDZixjQUFjO29CQUNkLCtCQUErQjtvQkFDL0IsMEJBQTBCO29CQUMxQixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsK0JBQStCO29CQUMvQiwwQkFBMEI7b0JBQzFCLFdBQVc7b0JBQ1gsT0FBTztvQkFDUCxJQUFJO29CQUNGLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDbEIsY0FBYztvQkFDZCxjQUFjLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSTtpQkFDM0M7Z0JBTVQsQ0FBQzthQUFPO1lBQ0YsZUFBZSxFQUFFLFlBQVk7WUFDN0Isb0JBQW9CLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3ZDLENBQUM7SUFDSixDQUFDOzhHQXZlVSxnQkFBZ0I7a0dBQWhCLGdCQUFnQixzREFKaEI7WUFDVCxjQUFjLEVBQUU7U0FDakIsMEJDZkgsaUtBSXVCLHlLRE9YLG1CQUFtQjs7MkZBTWxCLGdCQUFnQjtrQkFYNUIsU0FBUzsrQkFDRSxTQUFTLGNBR1AsSUFBSSxXQUNQLENBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsYUFFeEM7d0JBQ1QsY0FBYyxFQUFFO3FCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHh0ZWUgfSBmcm9tICcuLi94dGVlL3h0ZWUnO1xyXG4vL2ltcG9ydCB7IE5neEVjaGFydHNNb2R1bGUgfSBmcm9tICduZ3gtZWNoYXJ0cyc7XHJcbmltcG9ydCB7IFh0ZWVjaGFuZ2VDb21wb25lbnQgfSBmcm9tICcuLi94dGVlY2hhbmdlL3h0ZWVjaGFuZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4RWNoYXJ0c0RpcmVjdGl2ZSwgcHJvdmlkZUVjaGFydHMgfSBmcm9tICduZ3gtZWNoYXJ0cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dyYWFmMTAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmFhZjEwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsgJy4vZ3JhYWYxMC5jb21wb25lbnQuc2NzcycgXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtOZ3hFY2hhcnRzRGlyZWN0aXZlLCBYdGVlY2hhbmdlQ29tcG9uZW50XSxcclxuICAvL2ltcG9ydHM6IFsgTmd4RWNoYXJ0c0RpcmVjdGl2ZSBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgcHJvdmlkZUVjaGFydHMoKSxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmFhZjEwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0ICB7XHJcbiAgLy9uYW1lID0gJ0FuZ3VsYXIgJyArIFZFUlNJT04ubWFqb3I7XHJcbiAgb3B0aW9uczogYW55OyBcclxuXHJcbiAgXHJcbiAga2V5OiBzdHJpbmcgPSAnZWZla3RNYWRhbCc7XHJcbiAgbG9jYWxWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgbXlJdGVtOiBzdHJpbmc7XHJcbiAgbXlJdGVtMjogbnVtYmVyO1xyXG5cclxuICBnZXRFZmVrdE1hZGFsKCkge1xyXG4gICAgdGhpcy5teUl0ZW0yID0geHRlZS5tb2RlbDF5MTtcclxuICAgIC8vdGhpcy5teUl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSk7XHJcbiAgICAvL3RoaXMubXlJdGVtMj1OdW1iZXIodGhpcy5teUl0ZW0pO1xyXG4gICAgcmV0dXJuIHRoaXMubXlJdGVtMjtcclxuICB9XHJcblxyXG4gIGtleTI6IHN0cmluZyA9ICdlZmVrdEtlc2ttaW5lJztcclxuICBrZXNrbWluZVN0cmluZzogc3RyaW5nO1xyXG4gIGtlc2ttaW5lTnVtYmVyOiBudW1iZXI7XHJcblxyXG4gIGdldEVmZWt0S2Vza21pbmUoKSB7XHJcbiAgICB0aGlzLmtlc2ttaW5lTnVtYmVyID0geHRlZS5tb2RlbDF5MjtcclxuICAgIC8vdGhpcy5rZXNrbWluZVN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5Mik7XHJcbiAgICAvL3RoaXMua2Vza21pbmVOdW1iZXI9TnVtYmVyKHRoaXMua2Vza21pbmVTdHJpbmcpO1xyXG4gICAgcmV0dXJuIHRoaXMua2Vza21pbmVOdW1iZXI7XHJcbiAgfVxyXG5cclxuICBrZXkzOiBzdHJpbmcgPSAnZWZla3RLb3JnZSc7XHJcbiAga29yZ2VTdHJpbmc6IHN0cmluZztcclxuICBrb3JnZU51bWJlcjogbnVtYmVyO1xyXG5cclxuICBnZXRFZmVrdEtvcmdlKCkge1xyXG4gICAgLy90aGlzLmtvcmdlU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkzKTtcclxuICAgIC8vdGhpcy5rb3JnZU51bWJlcj1OdW1iZXIodGhpcy5rb3JnZVN0cmluZyk7XHJcbiAgICB0aGlzLmtvcmdlTnVtYmVyID0geHRlZS5tb2RlbDF5MztcclxuICAgIHJldHVybiB0aGlzLmtvcmdlTnVtYmVyO1xyXG4gIH1cclxuXHJcblxyXG4gIEVmTWFkYWxWYWx1ZTogbnVtYmVyO1xyXG4gIEVmS29yZ2VWYWx1ZTogbnVtYmVyO1xyXG5cclxuICBrb3JnZXZhYXJ0KCl7XHJcbiAgICAvL3NldEludGVydmFsICgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vdGhpcy52YWx1ZSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAyMDAwKSArIDEpO1xyXG4gICAgICAgICAgICB0aGlzLkVmS29yZ2VWYWx1ZSA9dGhpcy5nZXRFZmVrdEtvcmdlKCk7XHJcbiAgICAgIC8vfSwgNzAwMCk7XHJcbiAgICAgIHJldHVybiB0aGlzLkVmS29yZ2VWYWx1ZTtcclxuICB9XHJcblxyXG5cclxuICBrZXltOiBzdHJpbmcgPSAnbWFrc2VNYWRhbCc7XHJcbiAgbG9jYWxWYWx1ZW06IHN0cmluZyA9ICcnO1xyXG4gIG1hZGFsU3RyaW5nbTogc3RyaW5nO1xyXG4gIG1hZGFsTnVtYmVybTogbnVtYmVyO1xyXG5cclxuZ2V0TWFrc2VNYWRhbCgpIHtcclxuICAgIC8vdGhpcy5tYWRhbFN0cmluZ20gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleW0pO1xyXG4gICAgLy90aGlzLm1hZGFsTnVtYmVybT1OdW1iZXIodGhpcy5tYWRhbFN0cmluZ20pO1xyXG4gICAgdGhpcy5tYWRhbE51bWJlcm0gPSB4dGVlLm1vZGVsMnkxO1xyXG4gICAgcmV0dXJuIHRoaXMubWFkYWxOdW1iZXJtO1xyXG4gIH1cclxuXHJcbiAga2V5Mm06IHN0cmluZyA9ICdtYWtzZUtlc2ttaW5lJztcclxuICBrZXNrbWluZVN0cmluZ206IHN0cmluZztcclxuICBrZXNrbWluZU51bWJlcm06IG51bWJlcjtcclxuXHJcbiAgZ2V0TWFrc2VLZXNrbWluZSgpIHtcclxuICAgIC8vdGhpcy5rZXNrbWluZVN0cmluZ20gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleTJtKTtcclxuICAgIC8vdGhpcy5rZXNrbWluZU51bWJlcm09TnVtYmVyKHRoaXMua2Vza21pbmVTdHJpbmdtKTtcclxuICAgIHRoaXMua2Vza21pbmVOdW1iZXJtID0geHRlZS5tb2RlbDJ5MjtcclxuICAgIHJldHVybiB0aGlzLmtlc2ttaW5lTnVtYmVybTtcclxuICB9XHJcblxyXG4gIGtleTNtOiBzdHJpbmcgPSAnbWFrc2VLb3JnZSc7XHJcbiAga29yZ2VTdHJpbmdtOiBzdHJpbmc7XHJcbiAga29yZ2VOdW1iZXJtOiBudW1iZXI7XHJcblxyXG4gIGdldE1ha3NlS29yZ2UoKSB7XHJcbiAgICAvL3RoaXMua29yZ2VTdHJpbmdtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkzbSk7XHJcbiAgICAvL3RoaXMua29yZ2VOdW1iZXJtPU51bWJlcih0aGlzLmtvcmdlU3RyaW5nbSk7XHJcbiAgICB0aGlzLmtvcmdlTnVtYmVybSA9IHh0ZWUubW9kZWwyeTM7XHJcbiAgICByZXR1cm4gdGhpcy5rb3JnZU51bWJlcm07XHJcbiAgfVxyXG5cclxuXHJcbiAga2V5djogc3RyaW5nID0gJ3ZvaW1NYWRhbCc7XHJcbiAgbG9jYWxWYWx1ZXY6IHN0cmluZyA9ICcnO1xyXG4gIG1hZGFsU3RyaW5ndjogc3RyaW5nO1xyXG4gIG1hZGFsTnVtYmVydjogbnVtYmVyO1xyXG5cclxuICBnZXRWb2ltTWFkYWwoKSB7XHJcbiAgICAvL3RoaXMubWFkYWxTdHJpbmd2ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXl2KTtcclxuICAgIC8vdGhpcy5tYWRhbE51bWJlcnY9TnVtYmVyKHRoaXMubWFkYWxTdHJpbmd2KTtcclxuICAgIHRoaXMubWFkYWxOdW1iZXJ2ID0geHRlZS5tb2RlbDN5MTtcclxuICAgIHJldHVybiB0aGlzLm1hZGFsTnVtYmVydjtcclxuICB9XHJcblxyXG4gIGtleTJ2OiBzdHJpbmcgPSAndm9pbUtlc2ttaW5lJztcclxuICBrZXNrbWluZVN0cmluZ3Y6IHN0cmluZztcclxuICBrZXNrbWluZU51bWJlcnY6IG51bWJlcjtcclxuXHJcbiAgZ2V0Vm9pbUtlc2ttaW5lKCkge1xyXG4gICAgLy90aGlzLmtlc2ttaW5lU3RyaW5ndiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5MnYpO1xyXG4gICAgLy90aGlzLmtlc2ttaW5lTnVtYmVydj1OdW1iZXIodGhpcy5rZXNrbWluZVN0cmluZ3YpO1xyXG4gICAgdGhpcy5rZXNrbWluZU51bWJlcnYgPSB4dGVlLm1vZGVsM3kyO1xyXG4gICAgcmV0dXJuIHRoaXMua2Vza21pbmVOdW1iZXJ2O1xyXG4gIH1cclxuXHJcbiAga2V5M3Y6IHN0cmluZyA9ICd2b2ltS29yZ2UnO1xyXG4gIGtvcmdlU3RyaW5ndjogc3RyaW5nO1xyXG4gIGtvcmdlTnVtYmVydjogbnVtYmVyO1xyXG5cclxuICBnZXRWb2ltS29yZ2UoKSB7XHJcbiAgICAvL3RoaXMua29yZ2VTdHJpbmd2ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkzdik7XHJcbiAgICAvL3RoaXMua29yZ2VOdW1iZXJ2PU51bWJlcih0aGlzLmtvcmdlU3RyaW5ndik7XHJcbiAgICB0aGlzLmtvcmdlTnVtYmVydiA9IHh0ZWUubW9kZWwzeTM7XHJcbiAgICByZXR1cm4gdGhpcy5rb3JnZU51bWJlcnY7XHJcbiAgfVxyXG5cclxuXHJcbiAga2V5dDogc3RyaW5nID0gJ3Rhc3V2TWFkYWwnO1xyXG4gIGxvY2FsVmFsdWV0OiBzdHJpbmcgPSAnJztcclxuICBtYWRhbFN0cmluZ3Q6IHN0cmluZztcclxuICBtYWRhbE51bWJlcnQ6IG51bWJlcjtcclxuXHJcbiAgZ2V0VGFzdXZNYWRhbCgpIHtcclxuICAgIC8vdGhpcy5tYWRhbFN0cmluZ3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleXQpO1xyXG4gICAgLy90aGlzLm1hZGFsTnVtYmVydD1OdW1iZXIodGhpcy5tYWRhbFN0cmluZ3QpO1xyXG4gICAgdGhpcy5tYWRhbE51bWJlcnQgPSB4dGVlLm1vZGVsNHkxO1xyXG4gICAgcmV0dXJuIHRoaXMubWFkYWxOdW1iZXJ0O1xyXG4gIH1cclxuXHJcbiAga2V5MnQ6IHN0cmluZyA9ICd0YXN1dktlc2ttaW5lJztcclxuICBrZXNrbWluZVN0cmluZ3Q6IHN0cmluZztcclxuICBrZXNrbWluZU51bWJlcnQ6IG51bWJlcjtcclxuXHJcbiAgZ2V0VGFzdXZLZXNrbWluZSgpIHtcclxuICAgIC8vdGhpcy5rZXNrbWluZVN0cmluZ3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleTJ0KTtcclxuICAgIC8vdGhpcy5rZXNrbWluZU51bWJlcnQ9TnVtYmVyKHRoaXMua2Vza21pbmVTdHJpbmd0KTtcclxuICAgIHRoaXMua2Vza21pbmVOdW1iZXJ0ID0geHRlZS5tb2RlbDR5MjtcclxuICAgIHJldHVybiB0aGlzLmtlc2ttaW5lTnVtYmVydDtcclxuICB9XHJcblxyXG4gIGtleTN0OiBzdHJpbmcgPSAndGFzdXZLb3JnZSc7XHJcbiAga29yZ2VTdHJpbmd0OiBzdHJpbmc7XHJcbiAga29yZ2VOdW1iZXJ0OiBudW1iZXI7XHJcblxyXG4gIGdldFRhc3V2S29yZ2UoKSB7XHJcbiAgICAvL3RoaXMua29yZ2VTdHJpbmd0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkzdCk7XHJcbiAgICAvL3RoaXMua29yZ2VOdW1iZXJ0PU51bWJlcih0aGlzLmtvcmdlU3RyaW5ndCk7XHJcbiAgICB0aGlzLmtvcmdlTnVtYmVydCA9IHh0ZWUubW9kZWw0eTM7XHJcbiAgICByZXR1cm4gdGhpcy5rb3JnZU51bWJlcnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAga2V5ajogc3RyaW5nID0gJ3Rvb2pvdWRNYWRhbCc7XHJcbiAgbG9jYWxWYWx1ZWo6IHN0cmluZyA9ICcnO1xyXG4gIG1hZGFsU3RyaW5najogc3RyaW5nO1xyXG4gIG1hZGFsTnVtYmVyajogbnVtYmVyO1xyXG5cclxuICBnZXRUb29qb3VkTWFkYWwoKSB7XHJcbiAgICAvL3RoaXMubWFkYWxTdHJpbmdqID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXlqKTtcclxuICAgIC8vdGhpcy5tYWRhbE51bWJlcmo9TnVtYmVyKHRoaXMubWFkYWxTdHJpbmdqKTtcclxuICAgIHRoaXMubWFkYWxOdW1iZXJqID0geHRlZS5tb2RlbDV5MTtcclxuICAgIHJldHVybiB0aGlzLm1hZGFsTnVtYmVyajtcclxuICB9XHJcblxyXG4gIGtleTJqOiBzdHJpbmcgPSAndG9vam91ZEtlc2ttaW5lJztcclxuICBrZXNrbWluZVN0cmluZ2o6IHN0cmluZztcclxuICBrZXNrbWluZU51bWJlcmo6IG51bWJlcjtcclxuXHJcbiAgZ2V0VG9vam91ZEtlc2ttaW5lKCkge1xyXG4gICAgLy90aGlzLmtlc2ttaW5lU3RyaW5naiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5MmopO1xyXG4gICAgLy90aGlzLmtlc2ttaW5lTnVtYmVyaj1OdW1iZXIodGhpcy5rZXNrbWluZVN0cmluZ2opO1xyXG4gICAgdGhpcy5rZXNrbWluZU51bWJlcmogPSB4dGVlLm1vZGVsNXkyO1xyXG4gICAgcmV0dXJuIHRoaXMua2Vza21pbmVOdW1iZXJqO1xyXG4gIH1cclxuXHJcbiAga2V5M2o6IHN0cmluZyA9ICd0b29qb3VkS29yZ2UnO1xyXG4gIGtvcmdlU3RyaW5najogc3RyaW5nO1xyXG4gIGtvcmdlTnVtYmVyajogbnVtYmVyO1xyXG5cclxuICBnZXRUb29qb3VkS29yZ2UoKSB7XHJcbiAgICAvL3RoaXMua29yZ2VTdHJpbmdqID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkzaik7XHJcbiAgICAvL3RoaXMua29yZ2VOdW1iZXJqPU51bWJlcih0aGlzLmtvcmdlU3RyaW5naik7XHJcbiAgICB0aGlzLmtvcmdlTnVtYmVyaiA9IHh0ZWUubW9kZWw1eTM7XHJcbiAgICByZXR1cm4gdGhpcy5rb3JnZU51bWJlcmo7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vICB1cGRhdGUoKSB7XHJcbi8vICAgIHRoaXMubmdPbkluaXQoKTtcclxuLy99IFxyXG4gIFxyXG5kYXRhID0gW107XHJcbmRhdGFrZSA9IFtdO1xyXG5kYXRha28gPSBbXTtcclxuZGF0YWxhYmVsID0gW107XHJcblxyXG4gIGVmZm1hZGFsOiBhbnk7XHJcbiAgZWZma2Vza21pbmU6IGFueTtcclxuICBlZmZrb3JnZTogYW55O1xyXG4gIGVmZm1hZGFsTnVtYmVyOiBudW1iZXI7XHJcbiAgZWZma2Vza21pbmVOdW1iZXI6IG51bWJlcjtcclxuICBlZmZrb3JnZU51bWJlcjogbnVtYmVyO1xyXG5cclxuICBtYWtzbWFkYWw6IGFueTtcclxuICBtYWtza2Vza21pbmU6IGFueTtcclxuICBtYWtza29yZ2U6IGFueTtcclxuICBtYWtzbWFkYWxOdW1iZXI6IG51bWJlcjtcclxuICBtYWtza2Vza21pbmVOdW1iZXI6IG51bWJlcjtcclxuICBtYWtza29yZ2VOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgdm9pbW1hZGFsOiBhbnk7XHJcbiAgdm9pbWtlc2ttaW5lOiBhbnk7XHJcbiAgdm9pbWtvcmdlOiBhbnk7XHJcbiAgdm9pbW1hZGFsTnVtYmVyOiBudW1iZXI7XHJcbiAgdm9pbWtlc2ttaW5lTnVtYmVyOiBudW1iZXI7XHJcbiAgdm9pbWtvcmdlTnVtYmVyOiBudW1iZXI7XHJcblxyXG4gIHRhc3VtYWRhbDogYW55O1xyXG4gIHRhc3VrZXNrbWluZTogYW55O1xyXG4gIHRhc3Vrb3JnZTogYW55O1xyXG4gIHRhc3VtYWRhbE51bWJlcjogbnVtYmVyO1xyXG4gIHRhc3VrZXNrbWluZU51bWJlcjogbnVtYmVyO1xyXG4gIHRhc3Vrb3JnZU51bWJlcjogbnVtYmVyO1xyXG5cclxuICB0b29tYWRhbDogYW55O1xyXG4gIHRvb2tlc2ttaW5lOiBhbnk7XHJcbiAgdG9va29yZ2U6IGFueTtcclxuICB0b29tYWRhbE51bWJlcjogbnVtYmVyO1xyXG4gIHRvb2tlc2ttaW5lTnVtYmVyOiBudW1iZXI7XHJcbiAgdG9va29yZ2VOdW1iZXI6IG51bWJlcjtcclxuXHJcbmNvbnN0cnVjdG9yICgpIHtcclxuXHJcbiAgICB0aGlzLmVmZm1hZGFsID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XHJcbiAgICB0aGlzLmVmZm1hZGFsTnVtYmVyID0gdGhpcy5lZmZtYWRhbC5tb2RlbDF5MTtcclxuICAgIHRoaXMuZWZma2Vza21pbmUgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcclxuICAgIHRoaXMuZWZma2Vza21pbmVOdW1iZXIgPSB0aGlzLmVmZmtlc2ttaW5lLm1vZGVsMXkyO1xyXG4gICAgdGhpcy5lZmZrb3JnZSA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xyXG4gICAgdGhpcy5lZmZrb3JnZU51bWJlciA9IHRoaXMuZWZma29yZ2UubW9kZWwxeTM7XHJcblxyXG4gICAgdGhpcy5tYWtzbWFkYWwgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcclxuICAgIHRoaXMubWFrc21hZGFsTnVtYmVyID0gdGhpcy5tYWtzbWFkYWwubW9kZWwyeTE7XHJcbiAgICB0aGlzLm1ha3NrZXNrbWluZSA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xyXG4gICAgdGhpcy5tYWtza2Vza21pbmVOdW1iZXIgPSB0aGlzLm1ha3NrZXNrbWluZS5tb2RlbDJ5MjtcclxuICAgIHRoaXMubWFrc2tvcmdlID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XHJcbiAgICB0aGlzLm1ha3Nrb3JnZU51bWJlciA9IHRoaXMubWFrc2tvcmdlLm1vZGVsMnkzO1xyXG5cclxuICAgIHRoaXMudm9pbW1hZGFsID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XHJcbiAgICB0aGlzLnZvaW1tYWRhbE51bWJlciA9IHRoaXMudm9pbW1hZGFsLm1vZGVsM3kxO1xyXG4gICAgdGhpcy52b2lta2Vza21pbmUgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcclxuICAgIHRoaXMudm9pbWtlc2ttaW5lTnVtYmVyID0gdGhpcy52b2lta2Vza21pbmUubW9kZWwzeTI7XHJcbiAgICB0aGlzLnZvaW1rb3JnZSA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xyXG4gICAgdGhpcy52b2lta29yZ2VOdW1iZXIgPSB0aGlzLnZvaW1rb3JnZS5tb2RlbDN5MztcclxuXHJcbiAgICB0aGlzLnRhc3VtYWRhbCA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xyXG4gICAgdGhpcy50YXN1bWFkYWxOdW1iZXIgPSB0aGlzLnRhc3VtYWRhbC5tb2RlbDR5MTtcclxuICAgIHRoaXMudGFzdWtlc2ttaW5lID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XHJcbiAgICB0aGlzLnRhc3VrZXNrbWluZU51bWJlciA9IHRoaXMudGFzdWtlc2ttaW5lLm1vZGVsNHkyO1xyXG4gICAgdGhpcy50YXN1a29yZ2UgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcclxuICAgIHRoaXMudGFzdWtvcmdlTnVtYmVyID0gdGhpcy50YXN1a29yZ2UubW9kZWw0eTM7XHJcblxyXG4gICAgdGhpcy50b29tYWRhbCA9IG5ldyBYdGVlY2hhbmdlQ29tcG9uZW50O1xyXG4gICAgdGhpcy50b29tYWRhbE51bWJlciA9IHRoaXMudG9vbWFkYWwubW9kZWw1eTE7XHJcbiAgICB0aGlzLnRvb2tlc2ttaW5lID0gbmV3IFh0ZWVjaGFuZ2VDb21wb25lbnQ7XHJcbiAgICB0aGlzLnRvb2tlc2ttaW5lTnVtYmVyID0gdGhpcy50b29rZXNrbWluZS5tb2RlbDV5MjtcclxuICAgIHRoaXMudG9va29yZ2UgPSBuZXcgWHRlZWNoYW5nZUNvbXBvbmVudDtcclxuICAgIHRoaXMudG9va29yZ2VOdW1iZXIgPSB0aGlzLnRvb2tvcmdlLm1vZGVsNXkzO1xyXG5cclxuICBpZiAoeHRlZS5tb2RlbDV5MSkge1xyXG5cclxuICAgIHRoaXMuZGF0YSA9IFtcclxuICAgICAgKHRoaXMuZWZmbWFkYWxOdW1iZXIqMTAwKSxcclxuICAgICAgKHRoaXMubWFrc21hZGFsTnVtYmVyKjEwMCksXHJcbiAgICAgICh0aGlzLnZvaW1tYWRhbE51bWJlcioxMDApLFxyXG4gICAgICAodGhpcy50YXN1bWFkYWxOdW1iZXIqMTAwKSxcclxuICAgICAgKHRoaXMudG9vbWFkYWxOdW1iZXIqMTAwKSBcclxuICAgICAgXTtcclxuXHJcbiAgICB0aGlzLmRhdGFrZSA9IFtcclxuICAgICAgKHRoaXMuZWZma2Vza21pbmVOdW1iZXIqMTAwKSwgXHJcbiAgICAgICh0aGlzLm1ha3NrZXNrbWluZU51bWJlcioxMDApLFxyXG4gICAgICAodGhpcy52b2lta2Vza21pbmVOdW1iZXIqMTAwKSxcclxuICAgICAgKHRoaXMudGFzdWtlc2ttaW5lTnVtYmVyKjEwMCksXHJcbiAgICAgICh0aGlzLnRvb2tlc2ttaW5lTnVtYmVyKjEwMClcclxuICAgICAgXTtcclxuXHJcbiAgICB0aGlzLmRhdGFrbyA9IFtcclxuICAgICAgKHRoaXMuZWZma29yZ2VOdW1iZXIqMTAwKSwgICAgICAgICAgICBcclxuICAgICAgKHRoaXMubWFrc2tvcmdlTnVtYmVyKjEwMCksXHJcbiAgICAgICh0aGlzLnZvaW1rb3JnZU51bWJlcioxMDApLFxyXG4gICAgICAodGhpcy50YXN1a29yZ2VOdW1iZXIqMTAwKSxcclxuICAgICAgKHRoaXMudG9va29yZ2VOdW1iZXIqMTAwKVxyXG4gICAgICBdO1xyXG5cclxuICAgIHRoaXMuZGF0YWxhYmVsID0gWydFZmVrdGlpdnN1cycsICdNYWtzZXbDtWltZScsICdWw7VpbWVuZHVzJywgJ1Rhc3V2dXMnLCAnVMO2w7Zqw7V1ZCddO1xyXG4gICAgXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgdGhpcy5kYXRhID0gW1xyXG4gICAgICAodGhpcy5lZmZtYWRhbE51bWJlcioxMDApLFxyXG4gICAgICAodGhpcy5tYWtzbWFkYWxOdW1iZXIqMTAwKSxcclxuICAgICAgKHRoaXMudm9pbW1hZGFsTnVtYmVyKjEwMCksXHJcbiAgICAgICh0aGlzLnRhc3VtYWRhbE51bWJlcioxMDApXHJcbiAgICAgIF07XHJcbiAgICBcclxuICAgIHRoaXMuZGF0YWtlID0gW1xyXG4gICAgICAodGhpcy5lZmZrZXNrbWluZU51bWJlcioxMDApLCBcclxuICAgICAgKHRoaXMubWFrc2tlc2ttaW5lTnVtYmVyKjEwMCksXHJcbiAgICAgICh0aGlzLnZvaW1rZXNrbWluZU51bWJlcioxMDApLFxyXG4gICAgICAodGhpcy50YXN1a2Vza21pbmVOdW1iZXIqMTAwKVxyXG4gICAgICBdO1xyXG5cclxuICAgIHRoaXMuZGF0YWtvID0gW1xyXG4gICAgICAodGhpcy5lZmZrb3JnZU51bWJlcioxMDApLCAgICAgICAgICAgIFxyXG4gICAgICAodGhpcy5tYWtza29yZ2VOdW1iZXIqMTAwKSxcclxuICAgICAgKHRoaXMudm9pbWtvcmdlTnVtYmVyKjEwMCksXHJcbiAgICAgICh0aGlzLnRhc3Vrb3JnZU51bWJlcioxMDApXHJcbiAgICAgIF07XHJcblxyXG4gICAgdGhpcy5kYXRhbGFiZWwgPSBbJ0VmZWt0aWl2c3VzJywgJ01ha3NldsO1aW1lJywgJ1bDtWltZW5kdXMnLCAnVGFzdXZ1cyddOyAgICBcclxuXHJcbiAgfVxyXG4gIFxyXG5cclxufTtcclxuXHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgeEF4aXNEYXRhID0gW107XHJcbiAgICBjb25zdCBkYXRhMSA9IFtdO1xyXG4gICAgY29uc3QgZGF0YTIgPSBbXTtcclxuXHJcbiAgICAvL2ZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgIC8vICB4QXhpc0RhdGEucHVzaCgnY2F0ZWdvcnknICsgaSk7XHJcbiAgICAvLyAgZGF0YTEucHVzaCgoTWF0aC5zaW4oaSAvIDUpICogKGkgLyA1IC0gMTApICsgaSAvIDYpICogNSk7XHJcbiAgICAvLyAgZGF0YTIucHVzaCgoTWF0aC5jb3MoaSAvIDUpICogKGkgLyA1IC0gMTApICsgaSAvIDYpICogNSk7XHJcbiAgICAvL31cclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgIGRhdGE6IFsnTWFkYWwnLCAnS2Vza21pbmUnLCAnS8O1cmdlJ10sXHJcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcclxuICAgICAgfSxcclxuICAgICAgdG9vbHRpcDoge30sXHJcbiAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAvL2Zvcm1hdHRlcjogJyhwYXJhbXMpKyAlJ1xyXG4gICAgICAgIGZvcm1hdHRlcjogKHBhcmFtcykgPT4gTWF0aC5yb3VuZChwYXJhbXMudmFsdWUgKiAxMCkgLyAxMCArICcgJSdcclxuICAgICAgfSxcclxuICAgICAgXHJcbiAgICAgIHhBeGlzOiB7XHJcbiAgICAgICAgLy9kYXRhOiB4QXhpc0RhdGEsXHJcbiAgICAgICAgLy9kYXRhOiBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRSddLFxyXG4gICAgICAgIHNpbGVudDogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgICAvL2xhYmVsOiB7XHJcbiAgICAgICAgLy8gIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAvL2Zvcm1hdHRlcjogKHBhcmFtcykgPT4gTWF0aC5yb3VuZChwYXJhbXMudmFsdWUgKiAxMDAwKSAvIDEwICsgJyUnXHJcbiAgICAgICAgLy99LFxyXG4gICAgICAgIC8vcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgIHNwbGl0TGluZToge1xyXG4gICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBheGlzTGFiZWw6IHtcclxuICAgICAgICAgIGZvcm1hdHRlcjogJ3t2YWx1ZX0gJScsXHJcbiAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcclxuICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXhpc0xpbmU6IHtvblplcm86IGZhbHNlfSxcclxuICAgICAgfSxcclxuICAgICAgeUF4aXM6IHtcclxuICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxyXG4gICAgICAgIGRhdGE6IHRoaXMuZGF0YWxhYmVsLFxyXG4gICAgICAgIC8vZGF0YTogWydFZmVrdGlpdnN1cycsICdNYWtzZXbDtWltZScsICdWw7VpbWVuZHVzJywgJ1Rhc3V2dXMnLCAnVMO2w7Zqw7V1ZCddLFxyXG4gICAgICAgIGludmVyc2U6IHRydWVcclxuICAgICAgICBcclxuICAgICAgfSxcclxuICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ01hZGFsJyxcclxuICAgICAgICAgIHR5cGU6ICdiYXInLFxyXG4gICAgICAgICAgLy9zdGFjazogJ3RvdGFsJyxcclxuICAgICAgICAgIC8vc3RhY2s6ICcxJyxcclxuICAgICAgICAgIHN0YWNrOiAneCcsXHJcbiAgICAgICAgICAvL2RhdGE6IGRhdGExLFxyXG4gICAgICAgICAgZGF0YTogdGhpcy5kYXRhLFxyXG4gICAgICAgICAgLy9kYXRhOiBbXHJcbiAgICAgICAgICAvLyAgKHRoaXMuZ2V0RWZla3RNYWRhbCgpKjEwMCksXHJcbiAgICAgICAgICAvLyAgKHRoaXMuZ2V0TWFrc2VNYWRhbCgpKjEwMCksXHJcbiAgICAgICAgICAvLyAgKHRoaXMuZ2V0Vm9pbU1hZGFsKCkqMTAwKSxcclxuICAgICAgICAgIC8vICAodGhpcy5nZXRUYXN1dk1hZGFsKCkqMTAwKSxcclxuICAgICAgICAgIC8vICAodGhpcy5nZXRUb29qb3VkTWFkYWwoKSoxMDApIFxyXG4gICAgICAgICAgLy8gIF0sXHJcbiAgICAgICAgLy8gIG1hcmtMaW5lOiB7XHJcbiAgICAgICAgLy8gICAgZGF0YTogW3tcclxuICAgICAgICAvLyAgICAgICAgICAgIG5hbWU6ICdNYWtzaW11bScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICB0eXBlOiAnbWF4J1xyXG4gICAgICAgICAvLyAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBuYW1lOiAnTWlpbmltdW0nLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgdHlwZTogJ21pbidcclxuICAgICAgICAvLyAgICAgICAgfVxyXG4gICAgICAgIC8vICAgIF1cclxuICAgICAgICAvL30sXHJcbiAgICAgICAgICBjb2xvcjogWycjRUZCMkIyJ10sXHJcbiAgICAgICAgICBhbmltYXRpb25EZWxheTogKGlkeCkgPT4gaWR4ICogMTAwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdLZXNrbWluZScsXHJcbiAgICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICAgIHN0YWNrOiAneCcsXHJcbiAgICAgICAgICAvL3N0YWNrOiAnMScsXHJcbiAgICAgICAgICBkYXRhOiB0aGlzLmRhdGFrZSxcclxuICAgICAgICAgIC8vZGF0YTogW1xyXG4gICAgICAgICAgLy8gICh0aGlzLmdldEVmZWt0S2Vza21pbmUoKSoxMDApLCBcclxuICAgICAgICAgIC8vICAodGhpcy5nZXRNYWtzZUtlc2ttaW5lKCkqMTAwKSxcclxuICAgICAgICAgIC8vICAodGhpcy5nZXRWb2ltS2Vza21pbmUoKSoxMDApLFxyXG4gICAgICAgICAgLy8gICh0aGlzLmdldFRhc3V2S2Vza21pbmUoKSoxMDApLFxyXG4gICAgICAgICAgLy8gICh0aGlzLmdldFRvb2pvdWRLZXNrbWluZSgpKjEwMClcclxuICAgICAgICAgIC8vICBdLFxyXG4gICAgICAgIC8vICBtYXJrTGluZToge1xyXG4gICAgICAgIC8vICAgIGRhdGE6IFt7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBuYW1lOiAnTWFrc2ltdW0nLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgdHlwZTogJ21heCcsXHJcbiAgICAgICAgLy8gICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgIG5hbWU6ICdNaWluaW11bScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICB0eXBlOiAnbWluJyxcclxuICAgICAgICAvLyAgICAgICAgfVxyXG4gICAgICAgIC8vICAgIF1cclxuICAgICAgICAvL30sXHJcbiAgICAgICAgICBjb2xvcjogWycjRkZFMUEwJ10sXHJcbiAgICAgICAgICAvL2RhdGE6IGRhdGEyLFxyXG4gICAgICAgICAgYW5pbWF0aW9uRGVsYXk6IChpZHgpID0+IGlkeCAqIDEwMDAgKyAxMDAwLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdLw7VyZ2UnLFxyXG4gICAgICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgICAgICBzdGFjazogJ3gnLFxyXG4gICAgICAgICAgLy9zdGFjazogJzEnLFxyXG4gICAgICAgICAgZGF0YTogdGhpcy5kYXRha28sXHJcbiAgICAgICAgLy8gIGRhdGE6IFtcclxuICAgICAgICAvLyAgICAodGhpcy5nZXRFZmVrdEtvcmdlKCkqMTAwKSwgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAodGhpcy5nZXRNYWtzZUtvcmdlKCkqMTAwKSxcclxuICAgICAgICAvLyAgICAodGhpcy5nZXRWb2ltS29yZ2UoKSoxMDApLFxyXG4gICAgICAgIC8vICAgICh0aGlzLmdldFRhc3V2S29yZ2UoKSoxMDApLFxyXG4gICAgICAgIC8vICAgICh0aGlzLmdldFRvb2pvdWRLb3JnZSgpKjEwMClcclxuICAgICAgICAvLyAgICBdLFxyXG4gICAgICAgIC8vICBtYXJrTGluZToge1xyXG4gICAgICAgIC8vICAgIGRhdGE6IFt7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBuYW1lOiAnTWFrc2ltdW0nLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgdHlwZTogJ21heCcsXHJcbiAgICAgICAgLy8gICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgIG5hbWU6ICdNaWluaW11bScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICB0eXBlOiAnbWluJyxcclxuICAgICAgICAvLyAgICAgICAgfVxyXG4gICAgICAgIC8vICAgIF1cclxuICAgICAgICAvL30sXHJcbiAgICAgICAgICBjb2xvcjogWycjQUNDRkJBJ10sXHJcbiAgICAgICAgICAvL2RhdGE6IGRhdGEyLFxyXG4gICAgICAgICAgYW5pbWF0aW9uRGVsYXk6IChpZHgpID0+IGlkeCAqIDEwMDAgKyAxMDAwLFxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG5cclxuNSAgICAgIF0sXHJcbiAgICAgIGFuaW1hdGlvbkVhc2luZzogJ2VsYXN0aWNPdXQnLFxyXG4gICAgICBhbmltYXRpb25EZWxheVVwZGF0ZTogKGlkeCkgPT4gaWR4ICogNSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59IiwiPGRpdiBjbGFzcz1cImFzdWtvaHRcIj5cclxuICA8ZGl2IGVjaGFydHMgW29wdGlvbnNdPVwib3B0aW9uc1wiIGNsYXNzPVwieWxkMS1jaGFydFwiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDwhLS17e2tvcmdldmFhcnQoKX19LS0+XHJcbiAgPCEtLS0te3t1cGRhdGUoKX19LS0+Il19