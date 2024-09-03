import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sektorsuht } from '../graafSisend/sektor';
//import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class Sekt1agraafComponent {
    suhtarvuvalik() {
        for (let key in sektorsuht) {
            if (sektorsuht.hasOwnProperty(key)) {
                this.suhtarvArray.push(sektorsuht[key]);
            }
        }
        this.oigeSuhtarv = this.suhtarvArray.filter(e => {
            return e.sektor_nr === this.sektor;
        });
        /////console.log("uhtarvarray", this.suhtarvArray);
        /////console.log("uhtarv", this.oigeSuhtarv);
        /////console.log("yksarv", this.oigeSuhtarv[0]);
        ////console.log("yksarvAKM0714", this.oigeSuhtarv[0].AKM);
        this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
        //return this.oigeSuhtarv;
    }
    kysiVKK() {
        for (let key in sektorsuht) {
            if (sektorsuht.hasOwnProperty(key)) {
                this.suhtarvArray.push(sektorsuht[key]);
            }
        }
        this.oigeSuhtarv = this.suhtarvArray.filter(e => {
            return e.sektor_nr === this.sektor;
        });
        this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
        //this.lyhVolgnKaibek = this.oigeSuhtarv[0].LVKAK;
        this.varudeKaibesagedus = Math.round((this.varudeKaibesagedus) * 100) / 100;
        return this.varudeKaibesagedus;
    }
    kysiLVKAK() {
        for (let key in sektorsuht) {
            if (sektorsuht.hasOwnProperty(key)) {
                this.suhtarvArray.push(sektorsuht[key]);
            }
        }
        this.oigeSuhtarv = this.suhtarvArray.filter(e => {
            return e.sektor_nr === this.sektor;
        });
        //this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
        this.lyhVolgnKaibek = this.oigeSuhtarv[0].LVKAK;
        this.lyhVolgnKaibek = Math.round((this.lyhVolgnKaibek) * 100) / 100;
        return this.lyhVolgnKaibek;
    }
    kysiVAKK() {
        for (let key in sektorsuht) {
            if (sektorsuht.hasOwnProperty(key)) {
                this.suhtarvArray.push(sektorsuht[key]);
            }
        }
        this.oigeSuhtarv = this.suhtarvArray.filter(e => {
            return e.sektor_nr === this.sektor;
        });
        //this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
        this.varKaibesag = this.oigeSuhtarv[0].VAKK;
        this.varKaibesag = Math.round((this.varKaibesag) * 100) / 100;
        return this.varKaibesag;
    }
    //testSubscription: any;
    muudaVaartust() {
        this.testSubscription = this.dropdown.valueChanges
            // .pipe(debounceTime(100))
            //.subscribe(value => console.log(value));
            .subscribe(value => this.valdkonnake = value);
        ///.subscribe (value => localStorage.setItem("valdkond", value));
        //.subscribe (value => localStorage.setItem("maakond", JSON.stringify(value)));
    }
    paneAndmed() {
        if (this.valdkonnake == 'Taimekasvatus') {
            this.valdkonnaandmed = this.newdata;
            this.sektor = 1;
        }
        if (this.valdkonnake == 'Loomakasvatus') {
            this.valdkonnaandmed = this.newdata;
            this.sektor = 2;
        }
        if (this.valdkonnake == 'Põllumajanduslikud abitegevused') {
            this.valdkonnaandmed = this.newdata3;
        }
        if (this.valdkonnake == 'Metsakasvatus') {
            this.valdkonnaandmed = this.newdata4;
        }
        //return this.valdkonnaandmed;
    }
    constructor() {
        //Sisse
        this.suhtarvArray = [];
        this.sektor = 2;
        //varude käibesagedus VKK
        this.varudeKaibesagedus = 0.1;
        this.lyhVolgnKaibek = 0.1;
        this.varKaibesag = 0.1;
        this.valik = "xxx";
        ///valdkonnake: any;
        //  name = new FormsModule();
        this.name = new FormControl();
        //  dropdown = new FormsModule();
        this.dropdown = new FormControl();
        this.optionxx = ['Loomakasvatus'];
        this.options2 = ['Taimekasvatus', 'Loomakasvatus', 'Põllumajanduslikud abitegevused', 'Metsakasvatus', 'Metsamajanduse abitegevused', 'Kalapüük', 'Muu kaevandamine', 'Toiduainete tootmine', 'Joogi tootmine', 'Tekstiilitootmine', 'Rõivatootmine', 'Puidu saagimine ja hööveldamine', 'Paberimassi, paberi ja papi tootmine', 'Trükindus ja salvestiste paljundus', 'Keemiatootmine', 'Plasttoodete tootmine', 'Muude mittemetalsetest mineraalidest toodete tootmine', 'Metalltoodete tootmine, v.a masinad ja seadmed', 'Arvutite, elektroonika- ja optikaseadmete tootmine', 'Elektriseadmete tootmine', 'Üldmasinate tootmine', 'Mootorsõidukite tootmine', 'Muude transpordivahendite tootmine', 'Mööbli tootmine', 'Jalatsitootmine', 'Muu tootmine', 'Masinate, seadmete remont ja paigaldus', 'Tööstuslike masinate ja seadmete paigaldus', 'Elektrienergia, gaasi, auru ja konditsioneeritud õhuga varustamine', 'Veekogumine ja kanalisatsioon', 'Jäätmekogumine, töötlus, taaskasutamine', 'Üldehitus', 'Teede ja trasside ehitus', 'Eriosade ehitus', 'Mootorsõidukite hulgi ja jaemüük', 'Üldine vahendamine', 'Põllumajandustoorme ja elusloomade hulgimüük', 'Kodutarvete hulgimüük', 'Muude asjade, masinate ja seadmete hulgimüük', 'Muu spetsialiseeritud hulgimüük', 'Spetsialiseerimata hulgikaubandus', 'Spetsialiseerimata jaemüük', 'Toidu jaemüük', 'Mootorikütuse jaemüük', 'Arvutite ja seadmete jaemüük', 'Muude kodutarvete jaemüük', 'Kultuuri ja vabaaja kaupade jaemüük', 'Jaemüük kioskites ja turgudel', 'Jaemüük posti või interneti teel', 'Muu sõitjate maismaavedu', 'Kaubavedu maanteel ja kolimisteenused', 'Sõitjate veevedu (veetransport)', 'Kauba õhutransport', 'Laondus', 'Veondust abistavad tegevused', 'Posti ja kullerteenus', 'Majutus', 'Toidu ja joogi serveerimine', 'Kirjastamine', 'Kinofilmid, muusika ja Videod', 'Elektrooniline side', 'Programmeerimine', 'Infoalane tegevus', 'Finantsvahendus', 'Kinnisvara', 'Juriidilised toimingud', 'Arvepidamine', 'Peakontorid', 'Juhtimisalane nõustamine', 'Arhitektid, insenerid', 'Teimimine, analüüs', 'Teadus- ja arendustegevus', 'Reklaam, turu-uuringud', 'Disainerite tegevus', 'Fotograafia', 'Muu kutsetegevus', 'Veterinaaria', 'Mootorsõidukite rentimine', 'Tarbeesemete üürimine ja kasutusrent', 'Muude masinate, materiaalse vara üürimine, kasutusrent', 'Intellektuaalomandi rentimine', 'Tööhõive', 'Reisibürood ja reisikorraldus', 'Turvatöö, juurdlus', 'Hoonete, maastike hooldus', 'Büroohaldus', 'Haridus', 'Tervishoid', 'Hoolekandeasutuste tegevus', 'Loome, kunst, meelelahutus', 'Muude kultuuriasutuste tegevus', 'Sporditegevus, lõbustus, vaba aeg', 'Arvutite, tarbeesemete parandus', 'Muu teenindus'];
        this.valdkonnake = "Loomakasvatus";
        this.minVarKaibs = 3.4;
        this.newdata2 = [
            [2.07, 1, 4],
            [3.4, 0, 6],
            [4.05, 2, 4],
            [2.2, 1, 6],
            [6.4, 0, 4],
            [1.9, 2, 6]
        ];
        this.newdata3 = [
            [3.07, 1, 4],
            [3.4, 0, 6],
            [4.75, 2, 4],
            [2.2, 1, 6],
            [6.8, 0, 4],
            [1.9, 2, 6]
        ];
        this.newdata4 = [
            [2.23, 1, 4],
            [3.4, 0, 6],
            [1.5, 2, 4],
            [2.2, 1, 6],
            [4.8, 0, 4],
            [1.9, 2, 6]
        ];
        this.naitajad = [
            'Varude käibesagedus', '    Lühiajalise võlgnevuse käibekordaja', 'Vara käibesagedus'
        ];
        setInterval(() => {
            this.newdata = [
                [this.kysiVKK(), 0, 4],
                [this.minVarKaibs, 0, 6],
                [this.kysiLVKAK(), 1, 4],
                [2.2, 1, 6],
                [this.kysiVAKK(), 2, 4],
                [1.9, 2, 6]
            ];
        }, 3000);
    }
    // dataList: Array<any> = [];
    // schedule: { branch: '' };
    //  constructor() {
    //    this.dataList = [
    //      { code: 1, name: "shohel" },
    //      { code: 2, name: "rana" },
    //      { code: 3, name: "shipon" }
    //    ]
    // }
    ngOnInit() {
        setInterval(() => {
            ////joonista() {
            this.options = {
                grid: {
                    left: 2,
                    bottom: 10,
                    right: 10,
                    containLabel: true
                },
                //color: [
                //'#c23531',
                //'#2f4554',
                //'#c4ccd3'
                //],
                tooltip: {
                    //formatter: params => {
                    //    return '<div style="width:300px; height: 400px">working j</div>';
                    //  },
                    //formatter: 'Sinu {a} onb {b} onc {c} ettevõtetest',
                    // confine: true
                    trigger: 'item',
                    confine: true,
                    formatter: function (params) {
                        if (params.value[2] == 6) {
                            var xx = "Minu näitaja: ";
                        }
                        if (params.value[2] == 4) {
                            var xx = "Sektori keskmine näitaja: ";
                        }
                        if (params.value[1] == 0) {
                            var zz = " Varude käibesagedus";
                        }
                        if (params.value[1] == 1) {
                            var zz = " Lühiajalise võlgnevuse käibekordaja";
                        }
                        if (params.value[1] == 2) {
                            var zz = " Vara käibesagedus";
                        }
                        return xx + params.value[0] + "<br>" + zz;
                    }
                },
                xAxis: {},
                yAxis: {
                    type: 'category',
                    data: this.naitajad,
                    axisLine: {
                        show: false
                    }
                },
                series: [
                    {
                        //symbolSize: 20,
                        data: this.valdkonnaandmed,
                        //color: [
                        //  '#c23531',
                        //  '#2f4554',
                        //  '#c4ccd3'
                        //],
                        type: 'scatter',
                        symbolSize: function (val) {
                            return val[2] * 6;
                        },
                        //symbolColor: function (val) {
                        //  if (val[2] == 6)
                        //  return 'red';
                        //},
                        itemStyle: {
                            color: (params) => {
                                if (params.value[2] == 6) {
                                    return '#2f4554';
                                }
                                if (params.value[2] == 4) {
                                    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                                    return '#2ea0f5'; //'#' + randomColor; //#7289ab  //return '#2ea0f5';
                                }
                                else {
                                    return '#c4ccd3';
                                }
                            }
                        }
                    }
                ]
            };
        }, 3000);
    } //ngOnInit lõpetab
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt1agraafComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekt1agraafComponent, isStandalone: true, selector: "sekt1agraaf", providers: [
            provideEcharts(),
        ], ngImport: i0, template: "<!---br>\r\n<p>See on graafik...</p--->\r\n<br><br>\r\n<div class=\"tekstike2\">\r\n  Tegevusala valimine\r\n  </div>\r\n  <br>\r\n  <div class=\"tekstike2\">\r\n    \r\n    <!---/div--->\r\n  <select [formControl]=\"dropdown\" class=\"container2\">\r\n    <!--select [formControl]=\"dropdown\" class=\"container2\" name=\"options2[1]\" [(ngModel)]=\"options2[1]\"-->\r\n    <!---option value=\"\">Choose your city</option--->\r\n    <!--span>{{ valik }}</span-->\r\n    <option value=\"null\" hidden disabled>{{valdkonnake}}</option>\r\n    <option [value]=\"option\" *ngFor=\"let  option of options2\">{{option}}</option>\r\n  </select> \r\n  <!---{{suhtarvuvalik()}}-->\r\n  {{ muudaVaartust() }}\r\n  \r\n  </div>\r\n\r\n{{ paneAndmed() }}\r\n<div class=\"asukoht\">\r\n  <div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n  </div>\r\n\r\n\r\n  <!-----{{suhtarvuvalik()}}--->\r\n  <!----{{oigeSuhtarv}}--->", styles: [".asukoht{padding-left:10px;margin-top:-30px}.yld1-chart{height:400px;padding-left:0;width:920px;background-position:right}.tooltip-key{width:20px;color:red;word-break:break-word;white-space:normal}.tekstike2{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-30px}\n"], dependencies: [{ kind: "directive", type: NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "initOpts", "merge", "autoResize", "loading", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartHighlight", "chartDownplay", "chartSelectChanged", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendLegendSelectAll", "chartLegendLegendInverseSelect", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartGraphRoam", "chartGeoRoam", "chartTreeRoam", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartGeoSelectChanged", "chartGeoSelected", "chartGeoUnselected", "chartAxisAreaSelected", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartGlobalCursorTaken", "chartRendered", "chartFinished"], exportAs: ["echarts"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: FormsModule }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt1agraafComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sekt1agraaf', standalone: true, imports: [NgxEchartsDirective, ReactiveFormsModule, FormsModule, CommonModule], providers: [
                        provideEcharts(),
                    ], template: "<!---br>\r\n<p>See on graafik...</p--->\r\n<br><br>\r\n<div class=\"tekstike2\">\r\n  Tegevusala valimine\r\n  </div>\r\n  <br>\r\n  <div class=\"tekstike2\">\r\n    \r\n    <!---/div--->\r\n  <select [formControl]=\"dropdown\" class=\"container2\">\r\n    <!--select [formControl]=\"dropdown\" class=\"container2\" name=\"options2[1]\" [(ngModel)]=\"options2[1]\"-->\r\n    <!---option value=\"\">Choose your city</option--->\r\n    <!--span>{{ valik }}</span-->\r\n    <option value=\"null\" hidden disabled>{{valdkonnake}}</option>\r\n    <option [value]=\"option\" *ngFor=\"let  option of options2\">{{option}}</option>\r\n  </select> \r\n  <!---{{suhtarvuvalik()}}-->\r\n  {{ muudaVaartust() }}\r\n  \r\n  </div>\r\n\r\n{{ paneAndmed() }}\r\n<div class=\"asukoht\">\r\n  <div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n  </div>\r\n\r\n\r\n  <!-----{{suhtarvuvalik()}}--->\r\n  <!----{{oigeSuhtarv}}--->", styles: [".asukoht{padding-left:10px;margin-top:-30px}.yld1-chart{height:400px;padding-left:0;width:920px;background-position:right}.tooltip-key{width:20px;color:red;word-break:break-word;white-space:normal}.tekstike2{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-30px}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VrdDFhZ3JhYWYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZWx1am91LWxpYi9zcmMvbGliL3Nla3QxYWdyYWFmL3Nla3QxYWdyYWFmLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi9zZWt0MWFncmFhZi9zZWt0MWFncmFhZi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELGlEQUFpRDtBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFhbEUsTUFBTSxPQUFPLG9CQUFvQjtJQWEvQixhQUFhO1FBRVgsS0FBSyxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUU7WUFDMUIsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN6QztTQUNGO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsRUFBRTtZQUM1QyxPQUFPLENBQUMsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQTtRQUNGLG1E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QiwwREFKcEI7WUFDVCxjQUFjLEVBQUU7U0FDakIsMEJDbEJILCs1QkE2QjJCLDhkRGRmLG1CQUFtQiw2L0JBQUUsbUJBQW1CLG90QkFBRSxXQUFXLDhCQUFFLFlBQVk7OzJGQUtsRSxvQkFBb0I7a0JBVmhDLFNBQVM7K0JBQ0UsYUFBYSxjQUdYLElBQUksV0FDUCxDQUFDLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsYUFDbkU7d0JBQ1QsY0FBYyxFQUFFO3FCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVkVSU0lPTiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IHh0ZWUgfSBmcm9tICcuLi94dGVlL3h0ZWUnO1xyXG5pbXBvcnQgeyBzZWt0b3JzdWh0IH0gZnJvbSAnLi4vZ3JhYWZTaXNlbmQvc2VrdG9yJztcclxuLy9pbXBvcnQgeyBOZ3hFY2hhcnRzTW9kdWxlIH0gZnJvbSAnbmd4LWVjaGFydHMnO1xyXG5pbXBvcnQgeyBOZ3hFY2hhcnRzRGlyZWN0aXZlLCBwcm92aWRlRWNoYXJ0cyB9IGZyb20gJ25neC1lY2hhcnRzJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZWt0MWFncmFhZicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Nla3QxYWdyYWFmLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsgJy4vc2VrdDFhZ3JhYWYuY29tcG9uZW50LnNjc3MnIF0sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTmd4RWNoYXJ0c0RpcmVjdGl2ZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBwcm92aWRlRWNoYXJ0cygpLCBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWt0MWFncmFhZkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCAge1xyXG4gIFxyXG4gIC8vU2lzc2VcclxuXHJcbiAgc3VodGFydkFycmF5OiBhbnkgPSBbXTtcclxuICBvaWdlU3VodGFydjogYW55O1xyXG4gIHNla3RvciA9IDI7XHJcblxyXG4gIC8vdmFydWRlIGvDpGliZXNhZ2VkdXMgVktLXHJcbiAgdmFydWRlS2FpYmVzYWdlZHVzOiBhbnkgPSAwLjE7XHJcbiAgbHloVm9sZ25LYWliZWs6YW55ID0gMC4xO1xyXG4gIHZhckthaWJlc2FnOmFueSA9IDAuMTtcclxuXHJcbiAgc3VodGFydnV2YWxpaygpIHtcclxuXHJcbiAgICBmb3IgKGxldCBrZXkgaW4gc2VrdG9yc3VodCkge1xyXG4gICAgICBpZiAoc2VrdG9yc3VodC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgdGhpcy5zdWh0YXJ2QXJyYXkucHVzaChzZWt0b3JzdWh0W2tleV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm9pZ2VTdWh0YXJ2PSB0aGlzLnN1aHRhcnZBcnJheS5maWx0ZXIoZT0+e1xyXG4gICAgICByZXR1cm4gZS5zZWt0b3JfbnIgPT09IHRoaXMuc2VrdG9yO1xyXG4gIH0pXHJcbiAgLy8vLy9jb25zb2xlLmxvZyhcInVodGFydmFycmF5XCIsIHRoaXMuc3VodGFydkFycmF5KTtcclxuICAvLy8vL2NvbnNvbGUubG9nKFwidWh0YXJ2XCIsIHRoaXMub2lnZVN1aHRhcnYpO1xyXG4gIC8vLy8vY29uc29sZS5sb2coXCJ5a3NhcnZcIiwgdGhpcy5vaWdlU3VodGFydlswXSk7XHJcbiAgLy8vL2NvbnNvbGUubG9nKFwieWtzYXJ2QUtNMDcxNFwiLCB0aGlzLm9pZ2VTdWh0YXJ2WzBdLkFLTSk7XHJcbiAgdGhpcy52YXJ1ZGVLYWliZXNhZ2VkdXMgPSB0aGlzLm9pZ2VTdWh0YXJ2WzBdLlZLSztcclxuICAvL3JldHVybiB0aGlzLm9pZ2VTdWh0YXJ2O1xyXG4gIH1cclxuXHJcbiAga3lzaVZLSygpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiBzZWt0b3JzdWh0KSB7XHJcbiAgICAgIGlmIChzZWt0b3JzdWh0Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICB0aGlzLnN1aHRhcnZBcnJheS5wdXNoKHNla3RvcnN1aHRba2V5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMub2lnZVN1aHRhcnY9IHRoaXMuc3VodGFydkFycmF5LmZpbHRlcihlPT57XHJcbiAgICAgIHJldHVybiBlLnNla3Rvcl9uciA9PT0gdGhpcy5zZWt0b3I7XHJcbiAgfSlcclxuICAgIHRoaXMudmFydWRlS2FpYmVzYWdlZHVzID0gdGhpcy5vaWdlU3VodGFydlswXS5WS0s7XHJcbiAgICAvL3RoaXMubHloVm9sZ25LYWliZWsgPSB0aGlzLm9pZ2VTdWh0YXJ2WzBdLkxWS0FLO1xyXG4gICAgdGhpcy52YXJ1ZGVLYWliZXNhZ2VkdXMgPSBNYXRoLnJvdW5kKCh0aGlzLnZhcnVkZUthaWJlc2FnZWR1cykqMTAwKS8xMDA7XHJcbiAgcmV0dXJuIHRoaXMudmFydWRlS2FpYmVzYWdlZHVzO1xyXG4gIH1cclxuXHJcbiAga3lzaUxWS0FLKCkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHNla3RvcnN1aHQpIHtcclxuICAgICAgaWYgKHNla3RvcnN1aHQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHRoaXMuc3VodGFydkFycmF5LnB1c2goc2VrdG9yc3VodFtrZXldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5vaWdlU3VodGFydj0gdGhpcy5zdWh0YXJ2QXJyYXkuZmlsdGVyKGU9PntcclxuICAgICAgcmV0dXJuIGUuc2VrdG9yX25yID09PSB0aGlzLnNla3RvcjtcclxuICB9KVxyXG4gICAgLy90aGlzLnZhcnVkZUthaWJlc2FnZWR1cyA9IHRoaXMub2lnZVN1aHRhcnZbMF0uVktLO1xyXG4gICAgdGhpcy5seWhWb2xnbkthaWJlayA9IHRoaXMub2lnZVN1aHRhcnZbMF0uTFZLQUs7XHJcbiAgICB0aGlzLmx5aFZvbGduS2FpYmVrID0gTWF0aC5yb3VuZCgodGhpcy5seWhWb2xnbkthaWJlaykqMTAwKS8xMDA7XHJcbiAgXHJcbiAgcmV0dXJuIHRoaXMubHloVm9sZ25LYWliZWs7XHJcbiAgfVxyXG5cclxuICBreXNpVkFLSygpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiBzZWt0b3JzdWh0KSB7XHJcbiAgICAgIGlmIChzZWt0b3JzdWh0Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICB0aGlzLnN1aHRhcnZBcnJheS5wdXNoKHNla3RvcnN1aHRba2V5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMub2lnZVN1aHRhcnY9IHRoaXMuc3VodGFydkFycmF5LmZpbHRlcihlPT57XHJcbiAgICAgIHJldHVybiBlLnNla3Rvcl9uciA9PT0gdGhpcy5zZWt0b3I7XHJcbiAgfSlcclxuICAgIC8vdGhpcy52YXJ1ZGVLYWliZXNhZ2VkdXMgPSB0aGlzLm9pZ2VTdWh0YXJ2WzBdLlZLSztcclxuICAgIHRoaXMudmFyS2FpYmVzYWcgPSB0aGlzLm9pZ2VTdWh0YXJ2WzBdLlZBS0s7XHJcbiAgICB0aGlzLnZhckthaWJlc2FnID0gTWF0aC5yb3VuZCgodGhpcy52YXJLYWliZXNhZykqMTAwKS8xMDA7XHJcbiAgXHJcbiAgcmV0dXJuIHRoaXMudmFyS2FpYmVzYWc7XHJcbiAgfVxyXG5cclxuICBvcHRpb25zOiBhbnk7XHJcbiAgdmFsaWsgPSBcInh4eFwiO1xyXG5cclxuICB2YWxka29ubmFhbmRtZWQ6IGFueTtcclxuICAvLy92YWxka29ubmFrZTogYW55O1xyXG5cclxuLy8gIG5hbWUgPSBuZXcgRm9ybXNNb2R1bGUoKTtcclxuICBuYW1lID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbi8vICBkcm9wZG93biA9IG5ldyBGb3Jtc01vZHVsZSgpO1xyXG4gIGRyb3Bkb3duID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgb3B0aW9ueHggPSBbJ0xvb21ha2FzdmF0dXMnXTtcclxuICBvcHRpb25zMiA9IFsnVGFpbWVrYXN2YXR1cycsICdMb29tYWthc3ZhdHVzJywgJ1DDtWxsdW1hamFuZHVzbGlrdWQgYWJpdGVnZXZ1c2VkJywgJ01ldHNha2FzdmF0dXMnLCAnTWV0c2FtYWphbmR1c2UgYWJpdGVnZXZ1c2VkJywgJ0thbGFww7zDvGsnLCAnTXV1IGthZXZhbmRhbWluZScsICdUb2lkdWFpbmV0ZSB0b290bWluZScsICdKb29naSB0b290bWluZScsICdUZWtzdGlpbGl0b290bWluZScsICdSw7VpdmF0b290bWluZScsICdQdWlkdSBzYWFnaW1pbmUgamEgaMO2w7Z2ZWxkYW1pbmUnLCAnUGFiZXJpbWFzc2ksIHBhYmVyaSBqYSBwYXBpIHRvb3RtaW5lJywgJ1Ryw7xraW5kdXMgamEgc2FsdmVzdGlzdGUgcGFsanVuZHVzJywgJ0tlZW1pYXRvb3RtaW5lJywgJ1BsYXN0dG9vZGV0ZSB0b290bWluZScsICdNdXVkZSBtaXR0ZW1ldGFsc2V0ZXN0IG1pbmVyYWFsaWRlc3QgdG9vZGV0ZSB0b290bWluZScsICdNZXRhbGx0b29kZXRlIHRvb3RtaW5lLCB2LmEgbWFzaW5hZCBqYSBzZWFkbWVkJywgJ0FydnV0aXRlLCBlbGVrdHJvb25pa2EtIGphIG9wdGlrYXNlYWRtZXRlIHRvb3RtaW5lJywgJ0VsZWt0cmlzZWFkbWV0ZSB0b290bWluZScsICfDnGxkbWFzaW5hdGUgdG9vdG1pbmUnLCAnTW9vdG9yc8O1aWR1a2l0ZSB0b290bWluZScsICdNdXVkZSB0cmFuc3BvcmRpdmFoZW5kaXRlIHRvb3RtaW5lJywgJ03DtsO2YmxpIHRvb3RtaW5lJywgJ0phbGF0c2l0b290bWluZScsICdNdXUgdG9vdG1pbmUnLCAnTWFzaW5hdGUsIHNlYWRtZXRlIHJlbW9udCBqYSBwYWlnYWxkdXMnLCAnVMO2w7ZzdHVzbGlrZSBtYXNpbmF0ZSBqYSBzZWFkbWV0ZSBwYWlnYWxkdXMnLCAnRWxla3RyaWVuZXJnaWEsIGdhYXNpLCBhdXJ1IGphIGtvbmRpdHNpb25lZXJpdHVkIMO1aHVnYSB2YXJ1c3RhbWluZScsICdWZWVrb2d1bWluZSBqYSBrYW5hbGlzYXRzaW9vbicsICdKw6TDpHRtZWtvZ3VtaW5lLCB0w7bDtnRsdXMsIHRhYXNrYXN1dGFtaW5lJywgJ8OcbGRlaGl0dXMnLCAnVGVlZGUgamEgdHJhc3NpZGUgZWhpdHVzJywgJ0VyaW9zYWRlIGVoaXR1cycsICdNb290b3Jzw7VpZHVraXRlIGh1bGdpIGphIGphZW3DvMO8aycsICfDnGxkaW5lIHZhaGVuZGFtaW5lJywgJ1DDtWxsdW1hamFuZHVzdG9vcm1lIGphIGVsdXNsb29tYWRlIGh1bGdpbcO8w7xrJywgJ0tvZHV0YXJ2ZXRlIGh1bGdpbcO8w7xrJywgJ011dWRlIGFzamFkZSwgbWFzaW5hdGUgamEgc2VhZG1ldGUgaHVsZ2ltw7zDvGsnLCAnTXV1IHNwZXRzaWFsaXNlZXJpdHVkIGh1bGdpbcO8w7xrJywgJ1NwZXRzaWFsaXNlZXJpbWF0YSBodWxnaWthdWJhbmR1cycsICdTcGV0c2lhbGlzZWVyaW1hdGEgamFlbcO8w7xrJywgJ1RvaWR1IGphZW3DvMO8aycsICdNb290b3Jpa8O8dHVzZSBqYWVtw7zDvGsnLCAnQXJ2dXRpdGUgamEgc2VhZG1ldGUgamFlbcO8w7xrJywgJ011dWRlIGtvZHV0YXJ2ZXRlIGphZW3DvMO8aycsICdLdWx0dXVyaSBqYSB2YWJhYWphIGthdXBhZGUgamFlbcO8w7xrJywgJ0phZW3DvMO8ayBraW9za2l0ZXMgamEgdHVyZ3VkZWwnLCAnSmFlbcO8w7xrIHBvc3RpIHbDtWkgaW50ZXJuZXRpIHRlZWwnLCAnTXV1IHPDtWl0amF0ZSBtYWlzbWFhdmVkdScsICdLYXViYXZlZHUgbWFhbnRlZWwgamEga29saW1pc3RlZW51c2VkJywgJ1PDtWl0amF0ZSB2ZWV2ZWR1ICh2ZWV0cmFuc3BvcnQpJywgJ0thdWJhIMO1aHV0cmFuc3BvcnQnLCAnTGFvbmR1cycsICdWZW9uZHVzdCBhYmlzdGF2YWQgdGVnZXZ1c2VkJywgJ1Bvc3RpIGphIGt1bGxlcnRlZW51cycsICdNYWp1dHVzJywgJ1RvaWR1IGphIGpvb2dpIHNlcnZlZXJpbWluZScsICdLaXJqYXN0YW1pbmUnLCAnS2lub2ZpbG1pZCwgbXV1c2lrYSBqYSBWaWRlb2QnLCAnRWxla3Ryb29uaWxpbmUgc2lkZScsICdQcm9ncmFtbWVlcmltaW5lJywgJ0luZm9hbGFuZSB0ZWdldnVzJywgJ0ZpbmFudHN2YWhlbmR1cycsICdLaW5uaXN2YXJhJywgJ0p1cmlpZGlsaXNlZCB0b2ltaW5ndWQnLCAnQXJ2ZXBpZGFtaW5lJywgJ1BlYWtvbnRvcmlkJywgJ0p1aHRpbWlzYWxhbmUgbsO1dXN0YW1pbmUnLCAnQXJoaXRla3RpZCwgaW5zZW5lcmlkJywgJ1RlaW1pbWluZSwgYW5hbMO8w7xzJywgJ1RlYWR1cy0gamEgYXJlbmR1c3RlZ2V2dXMnLCAnUmVrbGFhbSwgdHVydS11dXJpbmd1ZCcsICdEaXNhaW5lcml0ZSB0ZWdldnVzJywgJ0ZvdG9ncmFhZmlhJywgJ011dSBrdXRzZXRlZ2V2dXMnLCAnVmV0ZXJpbmFhcmlhJywgJ01vb3RvcnPDtWlkdWtpdGUgcmVudGltaW5lJywgJ1RhcmJlZXNlbWV0ZSDDvMO8cmltaW5lIGphIGthc3V0dXNyZW50JywgJ011dWRlIG1hc2luYXRlLCBtYXRlcmlhYWxzZSB2YXJhIMO8w7xyaW1pbmUsIGthc3V0dXNyZW50JywgJ0ludGVsbGVrdHVhYWxvbWFuZGkgcmVudGltaW5lJywgJ1TDtsO2aMO1aXZlJywgJ1JlaXNpYsO8cm9vZCBqYSByZWlzaWtvcnJhbGR1cycsICdUdXJ2YXTDtsO2LCBqdXVyZGx1cycsICdIb29uZXRlLCBtYWFzdGlrZSBob29sZHVzJywgJ0LDvHJvb2hhbGR1cycsICdIYXJpZHVzJywgJ1RlcnZpc2hvaWQnLCAnSG9vbGVrYW5kZWFzdXR1c3RlIHRlZ2V2dXMnLCAnTG9vbWUsIGt1bnN0LCBtZWVsZWxhaHV0dXMnLCAnTXV1ZGUga3VsdHV1cmlhc3V0dXN0ZSB0ZWdldnVzJywgJ1Nwb3JkaXRlZ2V2dXMsIGzDtWJ1c3R1cywgdmFiYSBhZWcnLCAnQXJ2dXRpdGUsIHRhcmJlZXNlbWV0ZSBwYXJhbmR1cycsICdNdXUgdGVlbmluZHVzJ107XHJcbiAgdGVzdFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHZhbGRrb25uYWtlID0gXCJMb29tYWthc3ZhdHVzXCI7XHJcblxyXG4gIC8vdGVzdFN1YnNjcmlwdGlvbjogYW55O1xyXG4gIG11dWRhVmFhcnR1c3QoKSB7XHJcbiAgICB0aGlzLnRlc3RTdWJzY3JpcHRpb24gPSB0aGlzLmRyb3Bkb3duLnZhbHVlQ2hhbmdlc1xyXG4gICAgLy8gLnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpXHJcbiAgICAvLy5zdWJzY3JpYmUodmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpKTtcclxuICAgIC5zdWJzY3JpYmUgKHZhbHVlID0+IHRoaXMudmFsZGtvbm5ha2UgPSB2YWx1ZSk7XHJcbiAgICAvLy8uc3Vic2NyaWJlICh2YWx1ZSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInZhbGRrb25kXCIsIHZhbHVlKSk7XHJcbiAgICAvLy5zdWJzY3JpYmUgKHZhbHVlID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWFha29uZFwiLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpKTtcclxuICAgIH0gXHJcblxyXG4gICAgcGFuZUFuZG1lZCgpIHtcclxuICAgICAgaWYgKHRoaXMudmFsZGtvbm5ha2UgPT0gJ1RhaW1la2FzdmF0dXMnKSB7XHJcbiAgICAgICAgdGhpcy52YWxka29ubmFhbmRtZWQgPSB0aGlzLm5ld2RhdGE7XHJcbiAgICAgICAgdGhpcy5zZWt0b3IgPSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy52YWxka29ubmFrZSA9PSAnTG9vbWFrYXN2YXR1cycpIHtcclxuICAgICAgICB0aGlzLnZhbGRrb25uYWFuZG1lZCA9IHRoaXMubmV3ZGF0YTtcclxuICAgICAgICB0aGlzLnNla3RvciA9IDI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnZhbGRrb25uYWtlID09ICdQw7VsbHVtYWphbmR1c2xpa3VkIGFiaXRlZ2V2dXNlZCcpIHtcclxuICAgICAgICB0aGlzLnZhbGRrb25uYWFuZG1lZCA9IHRoaXMubmV3ZGF0YTM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnZhbGRrb25uYWtlID09ICdNZXRzYWthc3ZhdHVzJykge1xyXG4gICAgICAgIHRoaXMudmFsZGtvbm5hYW5kbWVkID0gdGhpcy5uZXdkYXRhNDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9yZXR1cm4gdGhpcy52YWxka29ubmFhbmRtZWQ7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtaW5WYXJLYWlicyA9IDMuNDtcclxubmV3ZGF0YTogYW55O1xyXG5jb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzZXRJbnRlcnZhbCAoKCkgPT4ge1xyXG4gIHRoaXMubmV3ZGF0YSA9ICBbICAgLy9JZ2EgdmFsZGtvbm5hIGphb2tzIG9uIGVyYWxkaSBkYXRhbWF0cml4XHJcbiAgICBbdGhpcy5reXNpVktLKCksIDAsIDRdLCAgLy9Fc2ltZXNlbCBrb2hhbCBudW1iZXIgdMOkaGVuZGFiIG7DpGl0YWphIHN1dXJ1c3QgKGFudHVkIGp1aHVsIDEuNClcclxuICAgIFt0aGlzLm1pblZhckthaWJzLCAwLCA2XSxcclxuICAgIFt0aGlzLmt5c2lMVktBSygpLCAxLCA0XSwgLy9UZWlzZWwga29oYWwgbsOkaXRhamEgMC1rw7VpZ2UgYWx1bWlzdCAoVmFydWRlIGvDpGliZXNhZ2VkdXMpLCAxLWtlc2ttaXN0IChMw7xoaWFqYWxpc2UgdsO1bGduZXZ1c2Uga2F0dGVrb3JkYWphKSwgMi1rw7VpZ2Uga8O1cmdlbWF0IChWYXJhIGvDpGliZXNhZ2VkdXMpXHJcbiAgICBbMi4yLCAxLCA2XSwgLy9Lb2xtYW5kYWwga29oYWwgYXN1diBudW1iZXIgNiAtIGV0dGV2w7V0dGUgaW5mbywgNCAtIHNla3RvcmkgaW5mb1xyXG4gICAgW3RoaXMua3lzaVZBS0soKSwgMiwgNF0sXHJcbiAgICBbMS45LCAyLCA2XVxyXG4gIF07XHJcbn0sIDMwMDApO31cclxuXHJcbiAgbmV3ZGF0YTIgPSAgW1xyXG4gICAgWzIuMDcsIDEsIDRdLFxyXG4gICAgWzMuNCwgMCwgNl0sXHJcbiAgICBbNC4wNSwgMiwgNF0sXHJcbiAgICBbMi4yLCAxLCA2XSxcclxuICAgIFs2LjQsIDAsIDRdLFxyXG4gICAgWzEuOSwgMiwgNl1cclxuICBdO1xyXG5cclxuICBuZXdkYXRhMyA9ICBbXHJcbiAgICBbMy4wNywgMSwgNF0sXHJcbiAgICBbMy40LCAwLCA2XSxcclxuICAgIFs0Ljc1LCAyLCA0XSxcclxuICAgIFsyLjIsIDEsIDZdLFxyXG4gICAgWzYuOCwgMCwgNF0sXHJcbiAgICBbMS45LCAyLCA2XVxyXG4gIF07IFxyXG5cclxuICBuZXdkYXRhNCA9ICBbXHJcbiAgICBbMi4yMywgMSwgNF0sXHJcbiAgICBbMy40LCAwLCA2XSxcclxuICAgIFsxLjUsIDIsIDRdLFxyXG4gICAgWzIuMiwgMSwgNl0sXHJcbiAgICBbNC44LCAwLCA0XSxcclxuICAgIFsxLjksIDIsIDZdXHJcbiAgXTtcclxuXHJcblxyXG5cclxuICBuYWl0YWphZCA9IFtcclxuICAgICdWYXJ1ZGUga8OkaWJlc2FnZWR1cycsICcgICAgTMO8aGlhamFsaXNlIHbDtWxnbmV2dXNlIGvDpGliZWtvcmRhamEnLCAnVmFyYSBrw6RpYmVzYWdlZHVzJ1xyXG4gIF07XHJcblxyXG5cclxuXHJcbiAvLyBkYXRhTGlzdDogQXJyYXk8YW55PiA9IFtdO1xyXG4gLy8gc2NoZWR1bGU6IHsgYnJhbmNoOiAnJyB9O1xyXG4gIFxyXG4vLyAgY29uc3RydWN0b3IoKSB7XHJcbi8vICAgIHRoaXMuZGF0YUxpc3QgPSBbXHJcbi8vICAgICAgeyBjb2RlOiAxLCBuYW1lOiBcInNob2hlbFwiIH0sXHJcbi8vICAgICAgeyBjb2RlOiAyLCBuYW1lOiBcInJhbmFcIiB9LFxyXG4vLyAgICAgIHsgY29kZTogMywgbmFtZTogXCJzaGlwb25cIiB9XHJcbi8vICAgIF1cclxuIC8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIHNldEludGVydmFsICgoKSA9PiB7XHJcbiAgIFxyXG4gICAgICAvLy8vam9vbmlzdGEoKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICBsZWZ0OiAyLFxyXG4gICAgICAgICAgICBib3R0b206IDEwLFxyXG4gICAgICAgICAgICByaWdodDogMTAsXHJcbiAgICAgICAgICAgIGNvbnRhaW5MYWJlbDogdHJ1ZVxyXG4gICAgICAgICAgfSxcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAvL2NvbG9yOiBbXHJcbiAgICAgICAgICAgIC8vJyNjMjM1MzEnLFxyXG4gICAgICAgICAgICAvLycjMmY0NTU0JyxcclxuICAgICAgICAgICAgLy8nI2M0Y2NkMydcclxuICAgICAgICAgIC8vXSxcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vZm9ybWF0dGVyOiBwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICByZXR1cm4gJzxkaXYgc3R5bGU9XCJ3aWR0aDozMDBweDsgaGVpZ2h0OiA0MDBweFwiPndvcmtpbmcgajwvZGl2Pic7XHJcbiAgICAgICAgICAgIC8vICB9LFxyXG4gICAgICAgICAgICAvL2Zvcm1hdHRlcjogJ1NpbnUge2F9IG9uYiB7Yn0gb25jIHtjfSBldHRldsO1dGV0ZXN0JyxcclxuICAgICAgICAgICAgLy8gY29uZmluZTogdHJ1ZVxyXG4gICAgICAgICAgICB0cmlnZ2VyOiAnaXRlbScsXHJcbiAgICAgICAgICAgIGNvbmZpbmU6IHRydWUsXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICAgICAgICBpZiAocGFyYW1zLnZhbHVlWzJdID09IDYpIHt2YXIgeHggPSBcIk1pbnUgbsOkaXRhamE6IFwifVxyXG4gICAgICAgICAgICAgIGlmIChwYXJhbXMudmFsdWVbMl0gPT0gNCkge3ZhciB4eCA9IFwiU2VrdG9yaSBrZXNrbWluZSBuw6RpdGFqYTogXCJ9XHJcbiAgICBcclxuICAgICAgICAgICAgICBpZiAocGFyYW1zLnZhbHVlWzFdID09IDApIHt2YXIgenogPSBcIiBWYXJ1ZGUga8OkaWJlc2FnZWR1c1wifVxyXG4gICAgICAgICAgICAgIGlmIChwYXJhbXMudmFsdWVbMV0gPT0gMSkge3ZhciB6eiA9IFwiIEzDvGhpYWphbGlzZSB2w7VsZ25ldnVzZSBrw6RpYmVrb3JkYWphXCJ9XHJcbiAgICAgICAgICAgICAgaWYgKHBhcmFtcy52YWx1ZVsxXSA9PSAyKSB7dmFyIHp6ID0gXCIgVmFyYSBrw6RpYmVzYWdlZHVzXCJ9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4eCtwYXJhbXMudmFsdWVbMF0rXCI8YnI+XCIgK3p6fSAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeEF4aXM6IHt9LFxyXG4gICAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcclxuICAgICAgICAgICAgICBkYXRhOiB0aGlzLm5haXRhamFkLFxyXG4gICAgICAgICAgICAgIGF4aXNMaW5lOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy9zeW1ib2xTaXplOiAyMCxcclxuICAgICAgICAgIGRhdGE6IHRoaXMudmFsZGtvbm5hYW5kbWVkLFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgIC8vY29sb3I6IFtcclxuICAgICAgICAgIC8vICAnI2MyMzUzMScsXHJcbiAgICAgICAgICAvLyAgJyMyZjQ1NTQnLFxyXG4gICAgICAgICAgLy8gICcjYzRjY2QzJ1xyXG4gICAgICAgICAgLy9dLFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgIHR5cGU6ICdzY2F0dGVyJyxcclxuICAgICAgICAgIHN5bWJvbFNpemU6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbFsyXSAqIDY7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLy9zeW1ib2xDb2xvcjogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgLy8gIGlmICh2YWxbMl0gPT0gNilcclxuICAgICAgICAgIC8vICByZXR1cm4gJ3JlZCc7XHJcbiAgICAgICAgICAvL30sXHJcbiAgICAgICAgICBpdGVtU3R5bGU6IHtcclxuICAgIFxyXG4gICAgICAgICAgICBjb2xvcjogKHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChwYXJhbXMudmFsdWVbMl0gPT0gNikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcjMmY0NTU0JztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHBhcmFtcy52YWx1ZVsyXSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb21Db2xvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZyhcclxuICAgICAgICAgICAgICAgICAgMTZcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyMyZWEwZjUnOy8vJyMnICsgcmFuZG9tQ29sb3I7IC8vIzcyODlhYiAgLy9yZXR1cm4gJyMyZWEwZjUnO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyNjNGNjZDMnO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgXHJcbiAgICAgICB9O1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgICBcclxuXHJcbn0gLy9uZ09uSW5pdCBsw7VwZXRhYlxyXG5cclxuXHJcbn0iLCI8IS0tLWJyPlxyXG48cD5TZWUgb24gZ3JhYWZpay4uLjwvcC0tLT5cclxuPGJyPjxicj5cclxuPGRpdiBjbGFzcz1cInRla3N0aWtlMlwiPlxyXG4gIFRlZ2V2dXNhbGEgdmFsaW1pbmVcclxuICA8L2Rpdj5cclxuICA8YnI+XHJcbiAgPGRpdiBjbGFzcz1cInRla3N0aWtlMlwiPlxyXG4gICAgXHJcbiAgICA8IS0tLS9kaXYtLS0+XHJcbiAgPHNlbGVjdCBbZm9ybUNvbnRyb2xdPVwiZHJvcGRvd25cIiBjbGFzcz1cImNvbnRhaW5lcjJcIj5cclxuICAgIDwhLS1zZWxlY3QgW2Zvcm1Db250cm9sXT1cImRyb3Bkb3duXCIgY2xhc3M9XCJjb250YWluZXIyXCIgbmFtZT1cIm9wdGlvbnMyWzFdXCIgWyhuZ01vZGVsKV09XCJvcHRpb25zMlsxXVwiLS0+XHJcbiAgICA8IS0tLW9wdGlvbiB2YWx1ZT1cIlwiPkNob29zZSB5b3VyIGNpdHk8L29wdGlvbi0tLT5cclxuICAgIDwhLS1zcGFuPnt7IHZhbGlrIH19PC9zcGFuLS0+XHJcbiAgICA8b3B0aW9uIHZhbHVlPVwibnVsbFwiIGhpZGRlbiBkaXNhYmxlZD57e3ZhbGRrb25uYWtlfX08L29wdGlvbj5cclxuICAgIDxvcHRpb24gW3ZhbHVlXT1cIm9wdGlvblwiICpuZ0Zvcj1cImxldCAgb3B0aW9uIG9mIG9wdGlvbnMyXCI+e3tvcHRpb259fTwvb3B0aW9uPlxyXG4gIDwvc2VsZWN0PiBcclxuICA8IS0tLXt7c3VodGFydnV2YWxpaygpfX0tLT5cclxuICB7eyBtdXVkYVZhYXJ0dXN0KCkgfX1cclxuICBcclxuICA8L2Rpdj5cclxuXHJcbnt7IHBhbmVBbmRtZWQoKSB9fVxyXG48ZGl2IGNsYXNzPVwiYXN1a29odFwiPlxyXG4gIDxkaXYgZWNoYXJ0cyBbb3B0aW9uc109XCJvcHRpb25zXCIgY2xhc3M9XCJ5bGQxLWNoYXJ0XCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG5cclxuICA8IS0tLS0te3tzdWh0YXJ2dXZhbGlrKCl9fS0tLT5cclxuICA8IS0tLS17e29pZ2VTdWh0YXJ2fX0tLS0+Il19