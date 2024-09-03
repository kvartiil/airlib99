import * as i0 from '@angular/core';
import { Injectable, Component, VERSION, NgModule } from '@angular/core';
import * as i1$1 from '@angular/common';
import { CommonModule, NgClass } from '@angular/common';
import * as i1 from 'ngx-gauge';
import { NgxGaugeModule } from 'ngx-gauge';
import { provideEcharts, NgxEchartsDirective } from 'ngx-echarts';
import * as i1$2 from '@angular/forms';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { of, delay } from 'rxjs';

class ElujouLibService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: ElujouLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: ElujouLibService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: ElujouLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class ElujouLib2Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: ElujouLib2Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: ElujouLib2Component, isStandalone: true, selector: "lib2-elujou-lib2", ngImport: i0, template: "<h1>Liiiib2 - Riia v\u00E4rk....</h1>\r\n\r\n<div class=\"tekstike2\"> \r\nSee Liib2 on tekst stiilifailist....\r\n</div>\r\n<!--elujoutest-component></elujoutest-component-->\r\n\r\n\r\n", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:22px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: ElujouLib2Component, decorators: [{
            type: Component,
            args: [{ selector: 'lib2-elujou-lib2', standalone: true, template: "<h1>Liiiib2 - Riia v\u00E4rk....</h1>\r\n\r\n<div class=\"tekstike2\"> \r\nSee Liib2 on tekst stiilifailist....\r\n</div>\r\n<!--elujoutest-component></elujoutest-component-->\r\n\r\n\r\n", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:22px}\n"] }]
        }] });

class UustestComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: UustestComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: UustestComponent, isStandalone: true, selector: "uustest-elujou-uustest", ngImport: i0, template: "<h1>Uustestt ilma stiilita</h1>\r\n\r\n<div class=\"tekstike2\"> \r\nuustest koos stiiliga...\r\n</div>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:22px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: UustestComponent, decorators: [{
            type: Component,
            args: [{ selector: 'uustest-elujou-uustest', standalone: true, template: "<h1>Uustestt ilma stiilita</h1>\r\n\r\n<div class=\"tekstike2\"> \r\nuustest koos stiiliga...\r\n</div>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:22px}\n"] }]
        }] });

const xtee = {
    registCo: '12345678',
    model1y1: 0.05,
    model1y2: 0.9,
    model1y3: 0.05,
    model2y1: 0.7,
    model2y2: 0.14,
    model2y3: 0.16,
    model3y1: 0.3,
    model3y2: 0.20,
    model3y3: 0.50,
    model4y1: 0.3,
    model4y2: 0.3,
    model4y3: 0.4,
    model5y1: 0.01,
    model5y2: 0.01,
    model5y3: 0.98,
    prognAasta: '2021',
    EMTAK: '28111',
    sektorNo: 21,
    size: 2,
    county: 45,
    kov: 784,
    hoiv: 23,
    LVKK: 0.3403,
    MVK: 2.3303,
    RK: 2.4203,
    VaKK: 1.2203,
    LVKaK: 1.8203,
    VKK: 2.5403,
    VK: 0.3503,
    KOS: 0.6503,
    IKK: 0.1203,
    AKM: 0.0403,
    PKM: 0.03933,
    ROA: 0.2303,
    ROE: 0.4503,
    TJT: 0.46303,
    EffpSect: 0.34,
    Eff_n_Sect: 2342,
    EffpSize: 0.45,
    Eff_n_Size: 4536,
    EffpCount: 0.23,
    Eff_n_Count: 2123,
    LiqpSect: 0.24,
    Liq_n_Sect: 3224,
    LiqpSize: 0.56,
    Liq_n_Size: 2156,
    LiqpCount: 0.76,
    Liq_n_Count: 1376,
    LevpSect: 0.21,
    Lev_n_Sect: 2451,
    LevpSize: 0.53,
    Lev_n_Size: 3253,
    LevpCount: 0.77,
    Lev_n_Count: 1277,
    RetpSect: 0.24,
    Ret_n_Sect: 3214,
    RetpSize: 0.55,
    Ret_n_Size: 2525,
    RetpCount: 0.72,
    Ret_n_Count: 1172,
    EmppSect: 0.34,
    Emp_n_Sect: 2341,
    EmppSize: 0.26,
    Emp_n_Size: 2116,
    EmppCount: 0.77,
    Emp_n_Count: 3477 //j
};

//import { products } from '../products';
class XteechangeComponent {
    constructor() {
        this.model1y1 = xtee.model3y1; //Kmodel3 -> mine model1
        this.model1y2 = xtee.model3y2; //Kmodel3 -> mine model1
        this.model1y3 = xtee.model3y3; //Kmodel3 -> mine model1
        this.model2y1 = xtee.model1y1; //Kmodel1 -> mine model2
        this.model2y2 = xtee.model1y2; //Kmodel1 -> mine model2
        this.model2y3 = xtee.model1y3; //Kmodel1 -> mine 
        this.model3y1 = xtee.model4y1; //Kmodel4 -> mine model3
        this.model3y2 = xtee.model4y2; //Kmodel4 -> mine model3
        this.model3y3 = xtee.model4y3; //Kmodel4 -> mine model3
        this.model4y1 = xtee.model2y1; //Kmodel2 -> mine model4
        this.model4y2 = xtee.model2y2; //Kmodel2 -> mine model4
        this.model4y3 = xtee.model2y3; //Kmodel2 -> mine model4
        this.model5y1 = xtee.model5y1; //Kmodel5 -> mine model5
        this.model5y2 = xtee.model5y2; //Kmodel5 -> mine model5
        this.model5y3 = xtee.model5y3; //Kmodel5 -> mine model5
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: XteechangeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: XteechangeComponent, isStandalone: true, selector: "xteechange-component", ngImport: i0, template: "", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: XteechangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'xteechange-component', standalone: true, template: "" }]
        }], ctorParameters: () => [] });

//declare var d3: any;
class Koondind7Component {
    getEfektMadal() {
        ////this.madalString = localStorage.getItem(this.key);
        ////this.madalNumber=Number(this.madalString);
        this.madalNumber = 0.1;
        return this.madalNumber;
    }
    getEfektKorge() {
        //// this.korgeString = localStorage.getItem(this.key3);
        //// this.korgeNumber=Number(this.korgeString);
        this.korgeNumber = 0.2;
        return this.korgeNumber;
    }
    getMakseKorge() {
        ////this.korgeStringm = localStorage.getItem(this.key3m);
        ////this.korgeNumberm=Number(this.korgeStringm);
        this.korgeNumberm = 0.3;
        return this.korgeNumberm;
    }
    getVoimKorge() {
        ////this.korgeStringv = localStorage.getItem(this.key3v);
        ///this.korgeNumberv=Number(this.korgeStringv);
        this.korgeNumberv = 0.34;
        return this.korgeNumberv;
    }
    getTasuvKorge() {
        ////this.korgeStringt = localStorage.getItem(this.key3t);
        ////this.korgeNumbert=Number(this.korgeStringt);
        this.korgeNumbert = 0.5;
        return this.korgeNumbert;
    }
    //vahenumber: any;
    getToojoudKorge() {
        ////this.korgeStringj = localStorage.getItem(this.key3j);
        ////this.korgeNumberj=Number(this.korgeStringj);
        ////this.korgeNumberj=this.korgeNumberj;
        this.korgeNumberj = 0.9;
        //this.vahenumber = this.korgeNumberj.toFixed(2); 
        return this.korgeNumberj;
    }
    constructor() {
        ////SIIA TULEB VALEM TEHA
        ///Kui teha iga komponendi kohta (1- madala tõenäosus + kõrge tõenäosus)/2 
        ///koond1 = ((1-p_1_likviidsus_mada+ p_1_likviidsus_korg)/2+
        ///(1-p_2_efektiivsus_mada+ p_2_efektiivsus_korg)/2+
        ///(1-p_3_struktuur_mada+ p_3_struktuur_korg)/2+
        ///(1-p_4_tasuvus_mada+ p_4_tasuvus_korg)/2)/4
        //value = 0.3;
        this.thick = 40;
        this.label = "Elujõud";
        this.gaugeAppendText = "";
        this.max = 1;
        this.min = 0;
        this.gaugeDuration = 1000;
        this.gaugeAnimate = false;
        this.thresholdConfig = {
            '0': { color: '#EFB2B2' },
            '0.4': { color: '#FFE1A0' },
            '0.6': { color: '#ACCFBA' }
        };
        this.markers = { "0.5": { color: "#555", type: "triangle", size: 8, label: "Keskmine", font: "14px ari,al" }, "0.22": { color: "#555", type: "triangle", size: 8, label: "Madal", font: "14px arial" }, "0.78": { color: "#555", type: "triangle", size: 8, label: "Kõrge", font: "14px arial" } };
        this.key = 'efektMadal';
        this.localValue = '';
        //value = this.getEfektMadal();
        this.key3 = 'efektKorge';
        this.key3m = 'makseKorge';
        this.key3v = 'voimKorge';
        this.key3t = 'tasuvKorge';
        this.key3j = 'toojoudKorge';
        this.ww = 33.3435.toFixed(2);
        this.www = (Math.round(0.2498347 * 100) / 100).toFixed(2);
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
            this.testmuutuja = "on olemas";
            this.value = ((((1 - this.effmadalNumber) + this.effkorgeNumber) / 2) + (((1 - this.maksmadalNumber) + this.makskorgeNumber) / 2) + (((1 - this.voimmadalNumber) + this.voimkorgeNumber) / 2) + (((1 - this.tasumadalNumber) + this.tasukorgeNumber) / 2) + (((1 - this.toomadalNumber) + this.tookorgeNumber) / 2)) / 5;
        }
        else {
            //this.testmuutuja = "on olemas";
            this.value = ((((1 - this.effmadalNumber) + this.effkorgeNumber) / 2) + (((1 - this.maksmadalNumber) + this.makskorgeNumber) / 2) + (((1 - this.voimmadalNumber) + this.voimkorgeNumber) / 2) + (((1 - this.tasumadalNumber) + this.tasukorgeNumber) / 2)) / 4;
            this.testmuutuja = "ei ole olemas";
            //this.value=((((1-xtee.model1y1)+xtee.model1y3)/2)+(((1-xtee.model2y1)+xtee.model2y3)/2)+(((1-xtee.model3y1)+xtee.model3y3)/2)+(((1-xtee.model4y1)+xtee.model4y3)/2))/4;
        }
        //this.value=((((1-xtee.model1y1)+xtee.model1y3)/2)+(((1-xtee.model2y1)+xtee.model2y3)/2)+(((1-xtee.model3y1)//+xtee.model3y3)/2)+(((1-xtee.model4y1)+xtee.model4y3)/2)+(((1-xtee.model5y1)+xtee.model5y3))/2)/5;
        //this.value = Math.round((this.value)*100*10)/1000;
        this.value = Math.round(((this.value) * 100) | 0) / 100;
        ///console.log(((1-xtee.model1y1)+xtee.model1y3));
        ///console.log(((1-xtee.model2y1)+xtee.model2y3));
        ///console.log(((1-xtee.model3y1)+xtee.model3y3));
        ///console.log(((1-xtee.model4y1)+xtee.model4y3));
        ///console.log(((1-xtee.model5y1)+xtee.model5y3));
        ///console.log('katsettus',(1-xtee.model2y1));
        ///  this.value = xtee.EffpSect;
        ///setInterval (() => {
        //this.value = Math.floor((Math.random() * 2000) + 1);
        // this.value = (this.getEfektKorge()+this.getMakseKorge()+this.getVoimKorge()+this.getTasuvKorge()+this.getToojoudKorge())/5;
        ///  }, 7000);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Koondind7Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Koondind7Component, isStandalone: true, selector: "koondind7-component", ngImport: i0, template: "<ngx-gauge style=\"color:white; font-size:100px;\" \r\n        type=\"semi\" \r\n        thick= {{thick}}\r\n        size=\"300\"  \r\n        \r\n        [value]= \"value\"\r\n        [label]=\"label\"\r\n        [max]=\"max\"\r\n        [min]=\"min\"\r\n        [append]=\"gaugeAppendText\"\r\n        [duration]=\"gaugeDuration\"\r\n        [animate]=\"gaugeAnimate\"\r\n        [thresholds]=\"thresholdConfig\"\r\n        [markers]=\"markers\"\r\n        >\r\n\r\n        <ngx-gauge-label>\r\n                <div class=\"blink_me\">ELUJ\u00D5UD</div>\r\n        </ngx-gauge-label>\r\n     \r\n        \r\n        \r\n        \r\n </ngx-gauge>\r\n\r\n <p> {{testmuutuja}} </p>\r\n ", styles: [".blink_me{color:#005e87;font-weight:700}@keyframes blinker{50%{opacity:0}}\n"], dependencies: [{ kind: "ngmodule", type: NgxGaugeModule }, { kind: "component", type: i1.NgxGauge, selector: "ngx-gauge", inputs: ["aria-label", "aria-labelledby", "size", "margin", "min", "animate", "max", "type", "cap", "thick", "label", "append", "prepend", "foregroundColor", "backgroundColor", "thresholds", "markers", "value", "duration"] }, { kind: "directive", type: i1.NgxGaugeLabel, selector: "ngx-gauge-label", exportAs: ["ngxGaugeLabel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Koondind7Component, decorators: [{
            type: Component,
            args: [{ selector: 'koondind7-component', standalone: true, imports: [NgxGaugeModule, XteechangeComponent], template: "<ngx-gauge style=\"color:white; font-size:100px;\" \r\n        type=\"semi\" \r\n        thick= {{thick}}\r\n        size=\"300\"  \r\n        \r\n        [value]= \"value\"\r\n        [label]=\"label\"\r\n        [max]=\"max\"\r\n        [min]=\"min\"\r\n        [append]=\"gaugeAppendText\"\r\n        [duration]=\"gaugeDuration\"\r\n        [animate]=\"gaugeAnimate\"\r\n        [thresholds]=\"thresholdConfig\"\r\n        [markers]=\"markers\"\r\n        >\r\n\r\n        <ngx-gauge-label>\r\n                <div class=\"blink_me\">ELUJ\u00D5UD</div>\r\n        </ngx-gauge-label>\r\n     \r\n        \r\n        \r\n        \r\n </ngx-gauge>\r\n\r\n <p> {{testmuutuja}} </p>\r\n ", styles: [".blink_me{color:#005e87;font-weight:700}@keyframes blinker{50%{opacity:0}}\n"] }]
        }], ctorParameters: () => [] });

const sektorid = [
    {
        sektorName: "Taimekasvatus",
        sektorNo: '1'
    },
    {
        sektorName: "Loomakasvatus",
        sektorNo: '2'
    },
    {
        sektorName: 'Põllumajanduslikud abitegevused',
        sektorNo: '3',
    },
    {
        sektorName: 'Metsakasvatus',
        sektorNo: '4',
    },
    {
        sektorName: 'Metsamajanduse abitegevused',
        sektorNo: '5',
    },
    {
        sektorName: 'Kalapüük',
        sektorNo: '6',
    },
    {
        sektorName: 'Muu kaevandamine',
        sektorNo: '7',
    },
    {
        sektorName: 'Toiduainete tootmine',
        sektorNo: '8',
    },
    {
        sektorName: 'Joogi tootmine',
        sektorNo: '9',
    },
    {
        sektorName: 'Tekstiilitootmine',
        sektorNo: '10',
    },
    {
        sektorName: 'Rõivatootmine',
        sektorNo: '11',
    },
    {
        sektorName: 'Puidu saagimine ja hööveldamine',
        sektorNo: '12',
    },
    {
        sektorName: 'Paberimassi, paberi ja papi tootmine',
        sektorNo: '13',
    },
    {
        sektorName: 'Trükindus ja salvestiste paljundus',
        sektorNo: '14',
    },
    {
        sektorName: 'Keemiatootmine',
        sektorNo: '15',
    },
    {
        sektorName: 'Plasttoodete tootmine',
        sektorNo: '16',
    },
    {
        sektorName: 'Muude mittemetalsetest mineraalidest toodete tootmine',
        sektorNo: '17',
    },
    {
        sektorName: 'Metalltoodete tootmine, v.a masinad ja seadmed',
        sektorNo: '18',
    },
    {
        sektorName: 'Arvutite, elektroonika- ja optikaseadmete tootmine',
        sektorNo: '19',
    },
    {
        sektorName: 'Elektriseadmete tootmine',
        sektorNo: '20',
    },
    {
        sektorName: 'Üldmasinate tootmine',
        sektorNo: '21',
    },
    {
        sektorName: 'Mootorsõidukite tootmine',
        sektorNo: '22',
    },
    {
        sektorName: 'Muude transpordivahendite tootmine',
        sektorNo: '23',
    },
    {
        sektorName: 'Mööbli tootmine',
        sektorNo: '24',
    },
    {
        sektorName: 'Muu tootmine',
        sektorNo: '26',
    },
    {
        sektorName: 'Masinate, seadmete remont ja paigaldus',
        sektorNo: '27',
    },
    {
        sektorName: 'Tööstuslike masinate ja seadmete paigaldus',
        sektorNo: '28',
    },
    {
        sektorName: 'Elektrienergia, gaasi, auru ja konditsioneeritud õhuga varustamine',
        sektorNo: '29',
    },
    {
        sektorName: 'Veekogumine ja kanalisatsioon',
        sektorNo: '30',
    },
    {
        sektorName: "Jäätmekogumine, töötlus, taaskasutamine",
        sektorNo: '31'
    },
    {
        sektorName: "Ehitus_1",
        sektorNo: '32'
    },
    {
        sektorName: "Ehitus_2",
        sektorNo: '33'
    },
    {
        sektorName: "Ehitus_3",
        sektorNo: '34'
    },
    {
        sektorName: 'Mootorsõidukite hulgi ja jaemüük',
        sektorNo: '35'
    },
    {
        sektorName: 'Üldine vahendamine',
        sektorNo: '36',
    },
    {
        sektorName: 'Põllumajandustoorme ja elusloomade hulgimüük',
        sektorNo: '37',
    },
    {
        sektorName: 'Kodutarvete hulgimüük',
        sektorNo: '38',
    },
    {
        sektorName: 'Info- ja sidetehnika hulgimüük',
        sektorNo: '39',
    },
    {
        sektorName: 'Muude asjade, masinate ja seadmete hulgimüük',
        sektorNo: '40',
    },
    {
        sektorName: 'Muu spetsialiseeritud hulgimüük',
        sektorNo: '41',
    },
    {
        sektorName: 'Spetsialiseerimata hulgikaubandus',
        sektorNo: '42',
    },
    {
        sektorName: 'Spetsialiseerimata jaemüük',
        sektorNo: '43',
    },
    {
        sektorName: 'Toidu jaemüük',
        sektorNo: '44',
    },
    {
        sektorName: 'Mootorikütuse jaemüük',
        sektorNo: '45',
    },
    {
        sektorName: 'Arvutite ja seadmete jamüük',
        sektorNo: '46',
    },
    {
        sektorName: 'Muude kodutarvete jaemüük',
        sektorNo: '47',
    },
    {
        sektorName: 'Kultuuri ja vabaaja kaupade jaemüük',
        sektorNo: '48',
    },
    {
        sektorName: 'Jaemüük kioskites ja turgudel',
        sektorNo: '49',
    },
    {
        sektorName: 'Jaemüük posti või interneti teel',
        sektorNo: '50',
    },
    {
        sektorName: 'Muu sõitjate maismaavedu',
        sektorNo: '51',
    },
    {
        sektorName: 'Kaubavedu maanteel ja kolimisteenused',
        sektorNo: '52',
    },
    {
        sektorName: 'Sõitjate veevedu (veetransport)',
        sektorNo: '53',
    },
    {
        sektorName: 'Kauba õhutransport',
        sektorNo: '54',
    },
    {
        sektorName: 'Laondus',
        sektorNo: '55',
    },
    {
        sektorName: 'Veondust abistavad tegevused',
        sektorNo: '56',
    },
    {
        sektorName: 'Posti ja kullerteenus',
        sektorNo: '57',
    },
    {
        sektorName: 'Majutus',
        sektorNo: '58',
    },
    {
        sektorName: 'Toidu ja joogi serveerimine',
        sektorNo: '59',
    },
    {
        sektorName: 'Kirjastamine',
        sektorNo: '60',
    },
    {
        sektorName: 'Kinofilmid, muusika ja Videod',
        sektorNo: '61',
    },
    {
        sektorName: 'Elektrooniline side',
        sektorNo: '62',
    },
    {
        sektorName: 'Programmeerimine',
        sektorNo: '63',
    },
    {
        sektorName: 'Infoalane tegevus',
        sektorNo: '64',
    },
    {
        sektorName: 'Finantsvahendus',
        sektorNo: '65',
    },
    {
        sektorName: 'Kinnisvara',
        sektorNo: '66',
    },
    {
        sektorName: 'Juriidilised toimingud',
        sektorNo: '67',
    },
    {
        sektorName: 'Arvepidamine',
        sektorNo: '68',
    },
    {
        sektorName: 'Peakontorid',
        sektorNo: '69',
    },
    {
        sektorName: 'Juhtimisalane nõustamine',
        sektorNo: '70',
    },
    {
        sektorName: 'Arhitektid, insenerid',
        sektorNo: '71',
    },
    {
        sektorName: 'Teimimine, analüüs',
        sektorNo: '72',
    },
    {
        sektorName: 'Teadus- ja arendustegevus',
        sektorNo: '73',
    },
    {
        sektorName: 'Reklaam, turu-uuringud',
        sektorNo: '74',
    },
    {
        sektorName: 'Disainerite tegevus',
        sektorNo: '75',
    },
    {
        sektorName: 'Fotograafia',
        sektorNo: '76',
    },
    {
        sektorName: 'Muu kutsetegevus',
        sektorNo: '77',
    },
    {
        sektorName: 'Veterinaaria',
        sektorNo: '78',
    },
    {
        sektorName: 'Mootorsõidukite rentimine',
        sektorNo: '79',
    },
    {
        sektorName: 'Tarbeesemete üürimine ja kasutusrent',
        sektorNo: '80',
    },
    {
        sektorName: 'Muude masinate, materiaalse vara üürimine, kasutusrent',
        sektorNo: '81',
    },
    {
        sektorName: 'Intellektuaalomandi rentimine',
        sektorNo: '82',
    },
    {
        sektorName: 'Tööhõive',
        sektorNo: '83',
    },
    {
        sektorName: 'Reisibürood ja reisikorraldus',
        sektorNo: '84',
    },
    {
        sektorName: 'Turvatöö, juurdlus',
        sektorNo: '85',
    },
    {
        sektorName: 'Hoonete, maastike hooldus',
        sektorNo: '86',
    },
    {
        sektorName: 'Büroohaldus',
        sektorNo: '87',
    },
    {
        sektorName: 'Avalik haldus, sotsiaalkindlustus',
        sektorNo: '88',
    },
    {
        sektorName: 'Haridus',
        sektorNo: '89',
    },
    {
        sektorName: 'Tervishoid',
        sektorNo: '90',
    },
    {
        sektorName: 'Hoolekandeasutuste tegevus',
        sektorNo: '91',
    },
    {
        sektorName: 'Loome, kunst, meelelahutus',
        sektorNo: '92',
    },
    {
        sektorName: 'Muude kultuuriasutuste tegevus',
        sektorNo: '93',
    },
    {
        sektorName: 'Sporditegevus, lõbustus, vaba aeg',
        sektorNo: '94',
    },
    {
        sektorName: 'Organisatsioonide tegevus',
        sektorNo: '95',
    },
    {
        sektorName: 'Arvutite, tarbeesemete parandus',
        sektorNo: '96',
    },
    {
        sektorName: 'Muu teenindus',
        sektorNo: '97'
    }
];

const suurusgrupid = [
    {
        "grupiNimi": "1-9 töötajat",
        "grupiNo": '1'
    },
    {
        "grupiNimi": "10-49 töötajat",
        "grupiNo": '2'
    },
    {
        "grupiNimi": "50-249 töötajat",
        "grupiNo": '3'
    },
    {
        "grupiNimi": '250 ja rohkem töötajat',
        "grupiNo": '4'
    }
];

const maakonnad = [
    {
        "maakonnaNimi": "Harju maakond",
        "maakonnaNo": '37'
    },
    {
        "maakonnaNimi": "Hiiu maakond",
        "maakonnaNo": '39'
    },
    {
        "maakonnaNimi": "Ida-Viru maakond",
        "maakonnaNo": '45'
    },
    {
        "maakonnaNimi": "Jõgeva maakond",
        "maakonnaNo": '50'
    },
    {
        "maakonnaNimi": "Järva maakond",
        "maakonnaNo": '52'
    },
    {
        "maakonnaNimi": "Lääne maakond",
        "maakonnaNo": '56'
    },
    {
        "maakonnaNimi": "Lääne-Viru maakond",
        "maakonnaNo": '60'
    },
    {
        "maakonnaNimi": "Põlva maakond",
        "maakonnaNo": '64'
    },
    {
        "maakonnaNimi": "Pärnu maakond",
        "maakonnaNo": '68'
    },
    {
        "maakonnaNimi": "Rapla maakond",
        "maakonnaNo": '71'
    },
    {
        "maakonnaNimi": "Saare maakond",
        "maakonnaNo": '74'
    },
    {
        "maakonnaNimi": "Tartu maakond",
        "maakonnaNo": '79'
    },
    {
        "maakonnaNimi": "Valga maakond",
        "maakonnaNo": '81'
    },
    {
        "maakonnaNimi": "Viljandi maakond",
        "maakonnaNo": '84'
    },
    {
        "maakonnaNimi": "Võru maakond",
        "maakonnaNo": '87'
    }
];

const emtakid = [
    {
        "EMTAK_txt": "01111",
        "NIMI_5": "Teravilja- (v.a riis) ja kaunviljakasvatus; õlitaimeseemnete kasvatus"
    },
    {
        "EMTAK_txt": "01131",
        "NIMI_5": "Köögivilja- (sh kõrvitsaliste), juurvilja- ja mugulviljakasvatus, k.a seenekasvatus"
    },
    {
        "EMTAK_txt": "01161",
        "NIMI_5": "Kiutaimekasvatus"
    },
    {
        "EMTAK_txt": "01191",
        "NIMI_5": "Lillekasvatus"
    },
    {
        "EMTAK_txt": "01199",
        "NIMI_5": "Söödakultuuri- ja heintaimekasvatus jm üheaastaste põllukultuuride kasvatus"
    },
    {
        "EMTAK_txt": "01211",
        "NIMI_5": "Viinamarjakasvatus"
    },
    {
        "EMTAK_txt": "01231",
        "NIMI_5": "Tsitruseliste kasvatus"
    },
    {
        "EMTAK_txt": "01241",
        "NIMI_5": "Õun- ja luuviljaliste puuviljade kasvatus"
    },
    {
        "EMTAK_txt": "01251",
        "NIMI_5": "Muu puuvilja-, marja- ning pähklikasvatus"
    },
    {
        "EMTAK_txt": "01261",
        "NIMI_5": "Õlitaimekasvatus"
    },
    {
        "EMTAK_txt": "01271",
        "NIMI_5": "Joogitaimekasvatus"
    },
    {
        "EMTAK_txt": "01281",
        "NIMI_5": "Vürtsi-, maitse-, uimastavate taimede ja ravimtaimede kasvatus"
    },
    {
        "EMTAK_txt": "01291",
        "NIMI_5": "Muude mitmeaastaste taimede kasvatus"
    },
    {
        "EMTAK_txt": "01301",
        "NIMI_5": "Taimede paljundamine ja istikukasvatus"
    },
    {
        "EMTAK_txt": "01411",
        "NIMI_5": "Piimakarjakasvatus"
    },
    {
        "EMTAK_txt": "01421",
        "NIMI_5": "Muu veislaste ja pühvlikasvatus"
    },
    {
        "EMTAK_txt": "01431",
        "NIMI_5": "Hobusekasvatus ja muude hobuslaste kasvatus"
    },
    {
        "EMTAK_txt": "01451",
        "NIMI_5": "Lamba- ja kitsekasvatus"
    },
    {
        "EMTAK_txt": "01461",
        "NIMI_5": "Seakasvatus"
    },
    {
        "EMTAK_txt": "01471",
        "NIMI_5": "Kodulinnukasvatus"
    },
    {
        "EMTAK_txt": "01491",
        "NIMI_5": "Mesindus"
    },
    {
        "EMTAK_txt": "01499",
        "NIMI_5": "Muu loomakasvatus"
    },
    {
        "EMTAK_txt": "01501",
        "NIMI_5": "Segapõllumajandus"
    },
    {
        "EMTAK_txt": "01611",
        "NIMI_5": "Taimekasvatuse abitegevused"
    },
    {
        "EMTAK_txt": "01621",
        "NIMI_5": "Loomakasvatuse abitegevused"
    },
    {
        "EMTAK_txt": "01631",
        "NIMI_5": "Saagikoristusjärgsed tegevused"
    },
    {
        "EMTAK_txt": "01641",
        "NIMI_5": "Seemnete töötlemine paljundamiseks"
    },
    {
        "EMTAK_txt": "01701",
        "NIMI_5": "Jahindus ja seda teenindavad tegevusalad"
    },
    {
        "EMTAK_txt": "02101",
        "NIMI_5": "Metsakasvatus ja muud metsamajanduse tegevusalad"
    },
    {
        "EMTAK_txt": "02201",
        "NIMI_5": "Metsaraie"
    },
    {
        "EMTAK_txt": "02202",
        "NIMI_5": "Küttepuude tootmine"
    },
    {
        "EMTAK_txt": "02301",
        "NIMI_5": "Looduslike materjalide kogumine, v.a puit"
    },
    {
        "EMTAK_txt": "02401",
        "NIMI_5": "Metsamajandust abistavad tegevused"
    },
    {
        "EMTAK_txt": "03111",
        "NIMI_5": "Merekalapüük"
    },
    {
        "EMTAK_txt": "03121",
        "NIMI_5": "Mageveekalapüük"
    },
    {
        "EMTAK_txt": "03211",
        "NIMI_5": "Mere-vesiviljelus"
    },
    {
        "EMTAK_txt": "03221",
        "NIMI_5": "Magevee-vesiviljelus"
    },
    {
        "EMTAK_txt": "06101",
        "NIMI_5": "Põlevkivi kaevandamine ja toornafta tootmine"
    },
    {
        "EMTAK_txt": "08111",
        "NIMI_5": "Dekoratiiv- ja ehituskivi, lubjakivi, kipsi, kriidi ja kiltkivi kaevandamine"
    },
    {
        "EMTAK_txt": "08121",
        "NIMI_5": "Kruusa- ja liivakarjääride tegevus; savi ja kaoliini kaevandamine"
    },
    {
        "EMTAK_txt": "08122",
        "NIMI_5": "Killustiku tootmine"
    },
    {
        "EMTAK_txt": "08911",
        "NIMI_5": "Kemikaalide ja mineraalväetiste toorme kaevandamine"
    },
    {
        "EMTAK_txt": "08921",
        "NIMI_5": "Turba tootmine"
    },
    {
        "EMTAK_txt": "08991",
        "NIMI_5": "Muu mujal liigitamata kaevandamine"
    },
    {
        "EMTAK_txt": "09101",
        "NIMI_5": "Nafta ja maagaasi tootmist abistavad tegevusalad"
    },
    {
        "EMTAK_txt": "09901",
        "NIMI_5": "Muud kaevandamist abistavad tegevusalad"
    },
    {
        "EMTAK_txt": "10111",
        "NIMI_5": "Liha töötlemine ja säilitamine, k.a tapamajade tegevus"
    },
    {
        "EMTAK_txt": "10121",
        "NIMI_5": "Linnuliha töötlemine ja säilitamine, k.a sulgede tootmine"
    },
    {
        "EMTAK_txt": "10131",
        "NIMI_5": "Liha- ja linnulihatoodete tootmine"
    },
    {
        "EMTAK_txt": "10201",
        "NIMI_5": "Kala, vähilaadsete ja limuste töötlemine ja säilitamine"
    },
    {
        "EMTAK_txt": "10311",
        "NIMI_5": "Kartuli töötlemine ja säilitamine"
    },
    {
        "EMTAK_txt": "10321",
        "NIMI_5": "Puu- ja köögiviljamahla tootmine"
    },
    {
        "EMTAK_txt": "10391",
        "NIMI_5": "Muu puu- ja köögivilja töötlemine ja säilitamine"
    },
    {
        "EMTAK_txt": "10411",
        "NIMI_5": "Õli ja rasva tootmine"
    },
    {
        "EMTAK_txt": "10421",
        "NIMI_5": "Margariini jms toidurasva tootmine"
    },
    {
        "EMTAK_txt": "10511",
        "NIMI_5": "Värske piima töötlemine, rõõsa koore tootmine"
    },
    {
        "EMTAK_txt": "10512",
        "NIMI_5": "Juustu- ja kohupiimatootmine"
    },
    {
        "EMTAK_txt": "10519",
        "NIMI_5": "Muude piimatoodete tootmine, sh või tootmine"
    },
    {
        "EMTAK_txt": "10521",
        "NIMI_5": "Jäätisetootmine"
    },
    {
        "EMTAK_txt": "10611",
        "NIMI_5": "Jahu ja tangainete tootmine, k.a jahvatamine"
    },
    {
        "EMTAK_txt": "10711",
        "NIMI_5": "Leiva- ja saiatootmine; säilitusaineteta pagaritoodete tootmine"
    },
    {
        "EMTAK_txt": "10721",
        "NIMI_5": "Kuiviku- ja küpsisetootmine; säilitusainetega pagaritoodete tootmine"
    },
    {
        "EMTAK_txt": "10731",
        "NIMI_5": "Makaronide, nuudlite, kuskussi jms makarontoodete tootmine"
    },
    {
        "EMTAK_txt": "10811",
        "NIMI_5": "Suhkrutootmine"
    },
    {
        "EMTAK_txt": "10821",
        "NIMI_5": "Kakao, šokolaadi ja suhkrukondiitritoodete tootmine"
    },
    {
        "EMTAK_txt": "10831",
        "NIMI_5": "Tee ja kohvi töötlemine"
    },
    {
        "EMTAK_txt": "10841",
        "NIMI_5": "Maitseainete ja -kastmete tootmine"
    },
    {
        "EMTAK_txt": "10851",
        "NIMI_5": "Valmistoitude tootmine"
    },
    {
        "EMTAK_txt": "10861",
        "NIMI_5": "Homogeenitud toiduainete ja dieettoitude tootmine"
    },
    {
        "EMTAK_txt": "10891",
        "NIMI_5": "Mujal liigitamata toiduainete tootmine"
    },
    {
        "EMTAK_txt": "10911",
        "NIMI_5": "Valmissööda tootmine loomakasvatusele"
    },
    {
        "EMTAK_txt": "10921",
        "NIMI_5": "Lemmikloomade valmistoidu tootmine"
    },
    {
        "EMTAK_txt": "11011",
        "NIMI_5": "Kange alkoholi destilleerimine, rektifitseerimine ja segamine"
    },
    {
        "EMTAK_txt": "11021",
        "NIMI_5": "Viinamarjaveini tootmine"
    },
    {
        "EMTAK_txt": "11031",
        "NIMI_5": "Siidri ja muu marja- ja puuviljaveini tootmine"
    },
    {
        "EMTAK_txt": "11041",
        "NIMI_5": "Muude destilleerimata kääritatud jookide tootmine"
    },
    {
        "EMTAK_txt": "11051",
        "NIMI_5": "Õlletootmine"
    },
    {
        "EMTAK_txt": "11061",
        "NIMI_5": "Linnasetootmine"
    },
    {
        "EMTAK_txt": "11071",
        "NIMI_5": "Alkoholivaba joogi tootmine; mineraalvee ja muu villitud vee tootmine"
    },
    {
        "EMTAK_txt": "12001",
        "NIMI_5": "Tubakatoodete tootmine"
    },
    {
        "EMTAK_txt": "13101",
        "NIMI_5": "Tekstiilkiudude ettevalmistamine ja ketramine"
    },
    {
        "EMTAK_txt": "13201",
        "NIMI_5": "Riidekudumine"
    },
    {
        "EMTAK_txt": "13301",
        "NIMI_5": "Tekstiili viimistlemine"
    },
    {
        "EMTAK_txt": "13911",
        "NIMI_5": "Silmkoe- ja heegelkanga (trikookanga) tootmine"
    },
    {
        "EMTAK_txt": "13921",
        "NIMI_5": "Kodutekstiili tootmine, sh voodipesu, köögirätikud, kardinad, akna sisekatted jm eesriided"
    },
    {
        "EMTAK_txt": "13929",
        "NIMI_5": "Muude valmis tekstiiltoodete tootmine"
    },
    {
        "EMTAK_txt": "13931",
        "NIMI_5": "Vaipade ja vaipkatete tootmine"
    },
    {
        "EMTAK_txt": "13941",
        "NIMI_5": "Nööri, köie ja võrgulina tootmine"
    },
    {
        "EMTAK_txt": "13951",
        "NIMI_5": "Lausriide ja lausriidest toodete tootmine, v.a rõivad"
    },
    {
        "EMTAK_txt": "13961",
        "NIMI_5": "Tehnilise ja tööstusliku otstarbega tekstiilide tootmine"
    },
    {
        "EMTAK_txt": "13991",
        "NIMI_5": "Mujal liigitamata tekstiilitootmine, sh kaunistusnööri-, tülli-, pitsi-, paela- ja tikanditootmine"
    },
    {
        "EMTAK_txt": "14111",
        "NIMI_5": "Nahkrõivaste tootmine"
    },
    {
        "EMTAK_txt": "14121",
        "NIMI_5": "Töörõivaste tootmine"
    },
    {
        "EMTAK_txt": "14131",
        "NIMI_5": "Muude pealisrõivaste tootmine, k.a rätsepatöö"
    },
    {
        "EMTAK_txt": "14141",
        "NIMI_5": "Alusrõivaste tootmine, sh T-särkide, päevasärkide, hommikumantlite, öösärkide jms tootmine"
    },
    {
        "EMTAK_txt": "14191",
        "NIMI_5": "Peakatete valmistamine, k.a karusnahast"
    },
    {
        "EMTAK_txt": "14199",
        "NIMI_5": "Muude mujal liigitamata rõivaste ja rõivalisandite tootmine"
    },
    {
        "EMTAK_txt": "14201",
        "NIMI_5": "Karusnahatoodete tootmine (v.a mütsid ja kindad)"
    },
    {
        "EMTAK_txt": "14311",
        "NIMI_5": "Suka- ja sokitootmine"
    },
    {
        "EMTAK_txt": "14391",
        "NIMI_5": "Muude silmkoe- ja heegelrõivaste tootmine, nt pulloverid, kampsunid jms tooted"
    },
    {
        "EMTAK_txt": "15111",
        "NIMI_5": "Nahatöötlemine ja -parkimine; karusnaha töötlemine ja värvimine"
    },
    {
        "EMTAK_txt": "15121",
        "NIMI_5": "Kohvrite, käekottide jms kaupade tootmine"
    },
    {
        "EMTAK_txt": "15122",
        "NIMI_5": "Sadulsepatoodete tootmine (sadulad, hobuserakmed jm)"
    },
    {
        "EMTAK_txt": "15129",
        "NIMI_5": "Muude nahktoodete tootmine"
    },
    {
        "EMTAK_txt": "15201",
        "NIMI_5": "Jalatsitootmine"
    },
    {
        "EMTAK_txt": "16101",
        "NIMI_5": "Saematerjali tootmine"
    },
    {
        "EMTAK_txt": "16102",
        "NIMI_5": "Puidu kuivatus, immutamine ja keemiline töötlus"
    },
    {
        "EMTAK_txt": "16109",
        "NIMI_5": "Muude puidutöötlemissaaduste tootmine, sh hakkepuit, puitvill jms"
    },
    {
        "EMTAK_txt": "16211",
        "NIMI_5": "Spooni ja vineeri tootmine"
    },
    {
        "EMTAK_txt": "16212",
        "NIMI_5": "Puitlaast- ja puitkiudplaadi tootmine"
    },
    {
        "EMTAK_txt": "16219",
        "NIMI_5": "Muude puitplaatide tootmine"
    },
    {
        "EMTAK_txt": "16221",
        "NIMI_5": "Kilpparketi tootmine"
    },
    {
        "EMTAK_txt": "16231",
        "NIMI_5": "Puidust uste, akende, aknaluukide ja nende raamide tootmine (k.a väravad)"
    },
    {
        "EMTAK_txt": "16232",
        "NIMI_5": "Kokkupandavate puitehitiste (saunad, suvilad, majad) ja nende elementide tootmine"
    },
    {
        "EMTAK_txt": "16239",
        "NIMI_5": "Muude ehituspuusepa- ja tisleritoodete tootmine"
    },
    {
        "EMTAK_txt": "16241",
        "NIMI_5": "Puittaara ja puitaluste tootmine"
    },
    {
        "EMTAK_txt": "16291",
        "NIMI_5": "Puidust tarbe- ja dekoratiivesemete jm puittoodete tootmine"
    },
    {
        "EMTAK_txt": "16292",
        "NIMI_5": "Korgist, õlest ja punumismaterjalist toodete tootmine"
    },
    {
        "EMTAK_txt": "17111",
        "NIMI_5": "Paberimassi tootmine"
    },
    {
        "EMTAK_txt": "17121",
        "NIMI_5": "Paberi- ja papitootmine"
    },
    {
        "EMTAK_txt": "17211",
        "NIMI_5": "Lainepaberi ja -papi ning paber- ja papptaara tootmine"
    },
    {
        "EMTAK_txt": "17221",
        "NIMI_5": "Paberist kodu- ja hügieenitarvete, k.a tekstiilvati ja vatist toodete tootmine"
    },
    {
        "EMTAK_txt": "17231",
        "NIMI_5": "Paberist kirjatarvete tootmine"
    },
    {
        "EMTAK_txt": "17241",
        "NIMI_5": "Tapeeditootmine"
    },
    {
        "EMTAK_txt": "17291",
        "NIMI_5": "Muude paber- ja papptoodete tootmine"
    },
    {
        "EMTAK_txt": "18111",
        "NIMI_5": "Ajalehtede trükkimine"
    },
    {
        "EMTAK_txt": "18121",
        "NIMI_5": "Raamatute trükkimine"
    },
    {
        "EMTAK_txt": "18122",
        "NIMI_5": "Perioodikaväljaannete, ärikataloogide, reklaammaterjalide, äriblankettide jm kontoritarvete trükkimine"
    },
    {
        "EMTAK_txt": "18129",
        "NIMI_5": "Mujal liigitamata trükkimine, k.a siiditrükk"
    },
    {
        "EMTAK_txt": "18131",
        "NIMI_5": "Trükieelne tegevus"
    },
    {
        "EMTAK_txt": "18141",
        "NIMI_5": "Köitmine ja selle sidusalad"
    },
    {
        "EMTAK_txt": "18201",
        "NIMI_5": "Salvestiste paljundus"
    },
    {
        "EMTAK_txt": "19101",
        "NIMI_5": "Koksitootmine"
    },
    {
        "EMTAK_txt": "19201",
        "NIMI_5": "Puhastatud naftatoodete (sh turbabriketi) tootmine"
    },
    {
        "EMTAK_txt": "20111",
        "NIMI_5": "Tööstusgaaside tootmine"
    },
    {
        "EMTAK_txt": "20121",
        "NIMI_5": "Värvainete ja pigmentide tootmine"
    },
    {
        "EMTAK_txt": "20131",
        "NIMI_5": "Muude anorgaaniliste põhikemikaalide tootmine"
    },
    {
        "EMTAK_txt": "20141",
        "NIMI_5": "Muude orgaaniliste põhikemikaalide tootmine"
    },
    {
        "EMTAK_txt": "20151",
        "NIMI_5": "Väetiste ja lämmastikuühendite tootmine"
    },
    {
        "EMTAK_txt": "20161",
        "NIMI_5": "Plasti tootmine algkujul"
    },
    {
        "EMTAK_txt": "20201",
        "NIMI_5": "Taimekaitsevahendite ja muude agrokeemiatoodete tootmine"
    },
    {
        "EMTAK_txt": "20210",
        "NIMI_5": "Taimekaitsevahendite ja muude agrokeemiatoodete tootmine"
    },
    {
        "EMTAK_txt": "20301",
        "NIMI_5": "Värvide, lakkide ja muude viimistlusvahendite ning trükivärvide ja mastiksite tootmine"
    },
    {
        "EMTAK_txt": "20411",
        "NIMI_5": "Seebi, pesemis-, puhastus- ja poleervahendite tootmine"
    },
    {
        "EMTAK_txt": "20421",
        "NIMI_5": "Parfüümide ja tualetitarvete tootmine"
    },
    {
        "EMTAK_txt": "20511",
        "NIMI_5": "Lõhkeaine tootmine"
    },
    {
        "EMTAK_txt": "20521",
        "NIMI_5": "Liimitootmine"
    },
    {
        "EMTAK_txt": "20531",
        "NIMI_5": "Eeterlike õlide tootmine"
    },
    {
        "EMTAK_txt": "20591",
        "NIMI_5": "Mujal liigitamata keemiatoodete tootmine"
    },
    {
        "EMTAK_txt": "21101",
        "NIMI_5": "Põhifarmaatsiatoodete tootmine"
    },
    {
        "EMTAK_txt": "21201",
        "NIMI_5": "Ravimite jm farmaatsiatoodete tootmine"
    },
    {
        "EMTAK_txt": "22111",
        "NIMI_5": "Kummirehvide ja sisekummide tootmine; kummirehvide protekteerimine ja taastamine"
    },
    {
        "EMTAK_txt": "22191",
        "NIMI_5": "Kummiplaatide, -lehtede, -torude, -voolikute jms tootmine"
    },
    {
        "EMTAK_txt": "22199",
        "NIMI_5": "Mujal liigitamata kummitoodete tootmine"
    },
    {
        "EMTAK_txt": "22211",
        "NIMI_5": "Plastplaatide, -lehtede, -profiilide, -torude, -voolikute, -liitmike jms toodete tootmine"
    },
    {
        "EMTAK_txt": "22221",
        "NIMI_5": "Plasttaara tootmine"
    },
    {
        "EMTAK_txt": "22231",
        "NIMI_5": "Plastist sanitaarseadmete tootmine (vannid, kraanikausid jne)"
    },
    {
        "EMTAK_txt": "22232",
        "NIMI_5": "Plastuste, -akende, -vaheseinte jms tootmine"
    },
    {
        "EMTAK_txt": "22239",
        "NIMI_5": "Muude plastist ehitustoodete tootmine"
    },
    {
        "EMTAK_txt": "22291",
        "NIMI_5": "Muude plasttoodete tootmine"
    },
    {
        "EMTAK_txt": "23121",
        "NIMI_5": "Lehtklaasi vormimine ja töötlemine"
    },
    {
        "EMTAK_txt": "23131",
        "NIMI_5": "Klaasnõude jm sisekujunduses kasutatavate klaasesemete tootmine"
    },
    {
        "EMTAK_txt": "23141",
        "NIMI_5": "Klaastaara tootmine"
    },
    {
        "EMTAK_txt": "23132",
        "NIMI_5": "Klaaskiutootmine"
    },
    {
        "EMTAK_txt": "23191",
        "NIMI_5": "Klaasist ehitusmaterjalide tootmine"
    },
    {
        "EMTAK_txt": "23199",
        "NIMI_5": "Muude klaastoodete ja tehnilise klaasi tootmine"
    },
    {
        "EMTAK_txt": "23201",
        "NIMI_5": "Tulekindlate toodete tootmine"
    },
    {
        "EMTAK_txt": "23311",
        "NIMI_5": "Keraamiliste kivide ja plaatide tootmine"
    },
    {
        "EMTAK_txt": "23321",
        "NIMI_5": "Põletatud savist telliste, kivide ja muude ehitustoodete tootmine"
    },
    {
        "EMTAK_txt": "23411",
        "NIMI_5": "Kodu- ja ehiskeraamika tootmine"
    },
    {
        "EMTAK_txt": "23421",
        "NIMI_5": "Keraamiliste sanitaarseadmete tootmine"
    },
    {
        "EMTAK_txt": "23441",
        "NIMI_5": "Muu tehnilise keraamika tootmine"
    },
    {
        "EMTAK_txt": "23491",
        "NIMI_5": "Muu keraamika tootmine"
    },
    {
        "EMTAK_txt": "23511",
        "NIMI_5": "Tsemenditootmine"
    },
    {
        "EMTAK_txt": "23521",
        "NIMI_5": "Lubja- ja kipsitootmine"
    },
    {
        "EMTAK_txt": "23611",
        "NIMI_5": "Kokkupandavate betoonehitiste ja nende elementide tootmine"
    },
    {
        "EMTAK_txt": "23619",
        "NIMI_5": "Betoonist muude ehitustoodete tootmine"
    },
    {
        "EMTAK_txt": "23631",
        "NIMI_5": "Valmis betoonisegu tootmine"
    },
    {
        "EMTAK_txt": "23641",
        "NIMI_5": "Mörditootmine"
    },
    {
        "EMTAK_txt": "23691",
        "NIMI_5": "Muude betoon-, kips- ja tsementtoodete tootmine"
    },
    {
        "EMTAK_txt": "23701",
        "NIMI_5": "Looduskivist hauakivide, -plaatide jms valmistamine"
    },
    {
        "EMTAK_txt": "23702",
        "NIMI_5": "Paekivist ja dolomiidist ehitusmaterjalide jm toodete tootmine"
    },
    {
        "EMTAK_txt": "23709",
        "NIMI_5": "Graniidist, marmorist jm looduslikust kivist toodete tootmine"
    },
    {
        "EMTAK_txt": "23911",
        "NIMI_5": "Abrasiivtoodete tootmine"
    },
    {
        "EMTAK_txt": "23991",
        "NIMI_5": "Mujal liigitamata muude mittemetalsetest mineraalidest toodete tootmine"
    },
    {
        "EMTAK_txt": "24101",
        "NIMI_5": "Raua, terase ja ferrosulamite tootmine"
    },
    {
        "EMTAK_txt": "24201",
        "NIMI_5": "Terastorude, -õõnesprofiilide jms -toruliitmike tootmine"
    },
    {
        "EMTAK_txt": "24311",
        "NIMI_5": "Külmvormimine ja -painutamine"
    },
    {
        "EMTAK_txt": "24331",
        "NIMI_5": "Külmtõmbamine lattideks"
    },
    {
        "EMTAK_txt": "24411",
        "NIMI_5": "Väärismetallitootmine"
    },
    {
        "EMTAK_txt": "24421",
        "NIMI_5": "Alumiiniumitootmine"
    },
    {
        "EMTAK_txt": "24431",
        "NIMI_5": "Plii-, tsingi- ja tinatootmine"
    },
    {
        "EMTAK_txt": "24451",
        "NIMI_5": "Muude mitteraudmetallide tootmine"
    },
    {
        "EMTAK_txt": "24511",
        "NIMI_5": "Malmivalu"
    },
    {
        "EMTAK_txt": "24521",
        "NIMI_5": "Terasevalu"
    },
    {
        "EMTAK_txt": "24531",
        "NIMI_5": "Kergmetallide valu"
    },
    {
        "EMTAK_txt": "24541",
        "NIMI_5": "Muude mitteraudmetallide valu"
    },
    {
        "EMTAK_txt": "25111",
        "NIMI_5": "Kokkupandavate metallehitiste tootmine"
    },
    {
        "EMTAK_txt": "25119",
        "NIMI_5": "Muude metallkonstruktsioonide ja nende osade tootmine"
    },
    {
        "EMTAK_txt": "25121",
        "NIMI_5": "Metalluste ja -akende tootmine"
    },
    {
        "EMTAK_txt": "25211",
        "NIMI_5": "Keskkütteradiaatorite ja keskkütte-kuumaveekatelde tootmine"
    },
    {
        "EMTAK_txt": "25291",
        "NIMI_5": "Muude metallpaakide, -reservuaaride ja -mahutite tootmine"
    },
    {
        "EMTAK_txt": "25301",
        "NIMI_5": "Aurukatelde tootmine, v.a keskkütte-kuumaveekatlad"
    },
    {
        "EMTAK_txt": "25501",
        "NIMI_5": "Metalli sepistamine, pressimine, stantsimine ja rullvaltsimine; pulbermetallurgia"
    },
    {
        "EMTAK_txt": "25611",
        "NIMI_5": "Metallitöötlus ja metallpindade katmine"
    },
    {
        "EMTAK_txt": "25621",
        "NIMI_5": "Mehaaniline metallitöötlus"
    },
    {
        "EMTAK_txt": "25711",
        "NIMI_5": "Lõike- ja söögiriistade tootmine"
    },
    {
        "EMTAK_txt": "25721",
        "NIMI_5": "Lukkude ja hingede tootmine"
    },
    {
        "EMTAK_txt": "25731",
        "NIMI_5": "Valuvormide tootmine"
    },
    {
        "EMTAK_txt": "25739",
        "NIMI_5": "Muude tööriistade tootmine"
    },
    {
        "EMTAK_txt": "25911",
        "NIMI_5": "Terasvaatide jms mahutite tootmine"
    },
    {
        "EMTAK_txt": "25921",
        "NIMI_5": "Kergmetalltaara tootmine"
    },
    {
        "EMTAK_txt": "25931",
        "NIMI_5": "Traaditoodete, kettide ja vedrude tootmine"
    },
    {
        "EMTAK_txt": "25941",
        "NIMI_5": "Kinnituselementide ja keermestatud toodete tootmine"
    },
    {
        "EMTAK_txt": "25991",
        "NIMI_5": "Mujal liigitamata metalltoodete tootmine"
    },
    {
        "EMTAK_txt": "25401",
        "NIMI_5": "Relva- ja laskemoonatootmine"
    },
    {
        "EMTAK_txt": "26111",
        "NIMI_5": "Elektronkomponentide tootmine"
    },
    {
        "EMTAK_txt": "26121",
        "NIMI_5": "Trükkplaatide tootmine"
    },
    {
        "EMTAK_txt": "26201",
        "NIMI_5": "Arvutite ja arvuti välisseadmete tootmine"
    },
    {
        "EMTAK_txt": "26301",
        "NIMI_5": "Sideseadmete tootmine"
    },
    {
        "EMTAK_txt": "26401",
        "NIMI_5": "Tarbeelektroonika tootmine"
    },
    {
        "EMTAK_txt": "27321",
        "NIMI_5": "Muu elektroonika ja elektrijuhtme või -kaabli tootmine"
    },
    {
        "EMTAK_txt": "26511",
        "NIMI_5": "Mõõte-, katse- ja navigatsiooniseadmete tootmine"
    },
    {
        "EMTAK_txt": "26521",
        "NIMI_5": "Ajanäitajate tootmine"
    },
    {
        "EMTAK_txt": "26601",
        "NIMI_5": "Kiiritus-, elektromeditsiini- ja elektroteraapiaseadmete tootmine"
    },
    {
        "EMTAK_txt": "26701",
        "NIMI_5": "Optikainstrumentide ja fotoseadmete tootmine"
    },
    {
        "EMTAK_txt": "26801",
        "NIMI_5": "Magnetandmekandjate ja optiliste andmekandjate tootmine"
    },
    {
        "EMTAK_txt": "27111",
        "NIMI_5": "Elektrimootorite, -generaatorite ja trafode tootmine"
    },
    {
        "EMTAK_txt": "27121",
        "NIMI_5": "Elektrijaotusseadmete ja juhtaparatuuri tootmine"
    },
    {
        "EMTAK_txt": "27901",
        "NIMI_5": "Muude elektriseadmete tootmine"
    },
    {
        "EMTAK_txt": "27201",
        "NIMI_5": "Patareide ja akude tootmine"
    },
    {
        "EMTAK_txt": "27331",
        "NIMI_5": "Juhtmestiku tarvikute tootmine"
    },
    {
        "EMTAK_txt": "27401",
        "NIMI_5": "Elektriliste valgustusseadmete tootmine"
    },
    {
        "EMTAK_txt": "27511",
        "NIMI_5": "Elektriliste kodumasinate tootmine"
    },
    {
        "EMTAK_txt": "27521",
        "NIMI_5": "Mitteelektriliste kodumasinate tootmine"
    },
    {
        "EMTAK_txt": "28111",
        "NIMI_5": "Mootorite ja turbiinide tootmine, v.a õhu- ja mootorsõidukite ning mootorrataste mootorid"
    },
    {
        "EMTAK_txt": "28121",
        "NIMI_5": "Hüdrauliliste ja pneumaatiliste jõuseadmete tootmine"
    },
    {
        "EMTAK_txt": "28131",
        "NIMI_5": "Muude pumpade ja kompressorite tootmine"
    },
    {
        "EMTAK_txt": "28141",
        "NIMI_5": "Muude kraanide ja ventiilide tootmine"
    },
    {
        "EMTAK_txt": "28151",
        "NIMI_5": "Laagrite, ajamite, hammasülekannete ja ülekandeelementide tootmine"
    },
    {
        "EMTAK_txt": "28211",
        "NIMI_5": "Ahjude, tööstusahjude ja ahjupõletite tootmine"
    },
    {
        "EMTAK_txt": "28221",
        "NIMI_5": "Tõste- ja teisaldusseadmete tootmine"
    },
    {
        "EMTAK_txt": "28231",
        "NIMI_5": "Kontorimasinate ja -seadmete tootmine, v.a arvutid ja arvuti välisseadmed"
    },
    {
        "EMTAK_txt": "28241",
        "NIMI_5": "Ajamiga käsi-tööriistade tootmine"
    },
    {
        "EMTAK_txt": "28251",
        "NIMI_5": "Tööstuslike külmutus- ja ventilatsiooniseadmete tootmine"
    },
    {
        "EMTAK_txt": "28291",
        "NIMI_5": "Mujal liigitamata üldmasinate ja mehhanismide tootmine"
    },
    {
        "EMTAK_txt": "28301",
        "NIMI_5": "Põllu- ja metsamajandusmasinate tootmine"
    },
    {
        "EMTAK_txt": "28411",
        "NIMI_5": "Metallistantside tootmine"
    },
    {
        "EMTAK_txt": "28491",
        "NIMI_5": "Muude tööpinkide tootmine"
    },
    {
        "EMTAK_txt": "28911",
        "NIMI_5": "Metallurgiamasinate tootmine"
    },
    {
        "EMTAK_txt": "28921",
        "NIMI_5": "Kaevandus-, karjääri- ja ehitusmasinate tootmine"
    },
    {
        "EMTAK_txt": "28931",
        "NIMI_5": "Toiduaine-, joogi- ja tubakatööstusmasinate tootmine"
    },
    {
        "EMTAK_txt": "28941",
        "NIMI_5": "Tekstiili-, rõiva- ja nahatööstusmasinate tootmine"
    },
    {
        "EMTAK_txt": "28951",
        "NIMI_5": "Paberi- ja papitööstusmasinate tootmine"
    },
    {
        "EMTAK_txt": "28961",
        "NIMI_5": "Plasti- ja kummitööstusmasinate tootmine"
    },
    {
        "EMTAK_txt": "28991",
        "NIMI_5": "Mujal liigitamata erimasinate tootmine"
    },
    {
        "EMTAK_txt": "29101",
        "NIMI_5": "Mootorsõidukite tootmine"
    },
    {
        "EMTAK_txt": "29201",
        "NIMI_5": "Mootorsõidukikerede tootmine"
    },
    {
        "EMTAK_txt": "29202",
        "NIMI_5": "Haagiste, poolhaagiste ning konteinerite tootmine"
    },
    {
        "EMTAK_txt": "29311",
        "NIMI_5": "Mootorsõidukite elektri- ja elektroonikaseadmete tootmine"
    },
    {
        "EMTAK_txt": "29321",
        "NIMI_5": "Mootorsõidukite muude osade ja lisaseadmete tootmine"
    },
    {
        "EMTAK_txt": "30111",
        "NIMI_5": "Laevade ehitus"
    },
    {
        "EMTAK_txt": "30112",
        "NIMI_5": "Ujuvkonstruktsioonide ehitus"
    },
    {
        "EMTAK_txt": "30121",
        "NIMI_5": "Lõbusõidu- ja sportpaatide ehitus"
    },
    {
        "EMTAK_txt": "30201",
        "NIMI_5": "Raudteevedurite ja -veeremi tootmine"
    },
    {
        "EMTAK_txt": "30301",
        "NIMI_5": "Õhu- ja kosmosesõidukite jms tootmine"
    },
    {
        "EMTAK_txt": "30911",
        "NIMI_5": "Mootorrataste tootmine"
    },
    {
        "EMTAK_txt": "30921",
        "NIMI_5": "Jalgrataste ja invasõidukite tootmine"
    },
    {
        "EMTAK_txt": "30991",
        "NIMI_5": "Muude mujal liigitamata transpordivahendite tootmine"
    },
    {
        "EMTAK_txt": "31011",
        "NIMI_5": "Kontori- ja kauplusemööbli tootmine"
    },
    {
        "EMTAK_txt": "31021",
        "NIMI_5": "Köögimööbli tootmine"
    },
    {
        "EMTAK_txt": "31031",
        "NIMI_5": "Madratsitootmine"
    },
    {
        "EMTAK_txt": "31091",
        "NIMI_5": "Mujal liigitamata mööbli tootmine"
    },
    {
        "EMTAK_txt": "31092",
        "NIMI_5": "Mööbliosade tootmine"
    },
    {
        "EMTAK_txt": "32121",
        "NIMI_5": "Väärisesemete jms toodete tootmine"
    },
    {
        "EMTAK_txt": "32131",
        "NIMI_5": "Juveeltoodete imitatsioonide jms tootmine"
    },
    {
        "EMTAK_txt": "32201",
        "NIMI_5": "Muusikariistade tootmine"
    },
    {
        "EMTAK_txt": "32301",
        "NIMI_5": "Sporditarvete tootmine"
    },
    {
        "EMTAK_txt": "32401",
        "NIMI_5": "Mängude ja mänguasjade tootmine"
    },
    {
        "EMTAK_txt": "32501",
        "NIMI_5": "Ortopeediliste abivahendite ja nende osade tootmine"
    },
    {
        "EMTAK_txt": "32502",
        "NIMI_5": "Prillide, läätsede ja nende osade tootmine"
    },
    {
        "EMTAK_txt": "32509",
        "NIMI_5": "Muu meditsiini- ja hambaraviinstrumentide ning materjalide tootmine"
    },
    {
        "EMTAK_txt": "32911",
        "NIMI_5": "Harja-, pintsli- ja luuatootmine"
    },
    {
        "EMTAK_txt": "32991",
        "NIMI_5": "Muu mujal liigitamata tootmine"
    },
    {
        "EMTAK_txt": "33111",
        "NIMI_5": "Metalltoodete remont"
    },
    {
        "EMTAK_txt": "33121",
        "NIMI_5": "Masinate ja seadmete remont"
    },
    {
        "EMTAK_txt": "33131",
        "NIMI_5": "Elektroonika- ja optikaseadmete remont"
    },
    {
        "EMTAK_txt": "33141",
        "NIMI_5": "Elektriseadmete remont"
    },
    {
        "EMTAK_txt": "33151",
        "NIMI_5": "Laevade ja paatide remont ja hooldus"
    },
    {
        "EMTAK_txt": "33161",
        "NIMI_5": "Õhu- ja kosmosesõidukite remont ja hooldus"
    },
    {
        "EMTAK_txt": "33171",
        "NIMI_5": "Muude transpordivahendite remont ja hooldus"
    },
    {
        "EMTAK_txt": "33191",
        "NIMI_5": "Muude seadmete remont"
    },
    {
        "EMTAK_txt": "33201",
        "NIMI_5": "Tööstuslike masinate ja seadmete paigaldus"
    },
    {
        "EMTAK_txt": "35111",
        "NIMI_5": "Elektrienergia tootmine mittetaastuvast energiaallikast"
    },
    {
        "EMTAK_txt": "35112",
        "NIMI_5": "Elektrienergia tootmine hüdroenergiast"
    },
    {
        "EMTAK_txt": "35113",
        "NIMI_5": "Elektrienergia tootmine tuuleenergiast"
    },
    {
        "EMTAK_txt": "35119",
        "NIMI_5": "Muu elektrienergia tootmine (sh biomassist)"
    },
    {
        "EMTAK_txt": "35121",
        "NIMI_5": "Elektrienergia ülekanne"
    },
    {
        "EMTAK_txt": "35131",
        "NIMI_5": "Elektrienergia jaotus"
    },
    {
        "EMTAK_txt": "35141",
        "NIMI_5": "Elektrienergia müük"
    },
    {
        "EMTAK_txt": "35211",
        "NIMI_5": "Gaasitootmine"
    },
    {
        "EMTAK_txt": "35221",
        "NIMI_5": "Maagaasi ülekanne ja jaotus maagaasivõrgu kaudu"
    },
    {
        "EMTAK_txt": "35231",
        "NIMI_5": "Gaasimüük magistraalvõrkude kaudu"
    },
    {
        "EMTAK_txt": "35301",
        "NIMI_5": "Auru ja konditsioneeritud õhuga varustamine"
    },
    {
        "EMTAK_txt": "36001",
        "NIMI_5": "Veekogumine, -töötlus ja -varustus"
    },
    {
        "EMTAK_txt": "37001",
        "NIMI_5": "Kanalisatsioon ja heitveekäitlus"
    },
    {
        "EMTAK_txt": "38111",
        "NIMI_5": "Tavajäätmete kogumine"
    },
    {
        "EMTAK_txt": "38121",
        "NIMI_5": "Ohtlike jäätmete kogumine"
    },
    {
        "EMTAK_txt": "38211",
        "NIMI_5": "Tavajäätmete töötlus ja kõrvaldus"
    },
    {
        "EMTAK_txt": "38221",
        "NIMI_5": "Ohtlike jäätmete töötlus ja kõrvaldus"
    },
    {
        "EMTAK_txt": "38311",
        "NIMI_5": "Vrakkide demonteerimine"
    },
    {
        "EMTAK_txt": "38321",
        "NIMI_5": "Sorteeritud materjali taaskasutusele võtmine"
    },
    {
        "EMTAK_txt": "39001",
        "NIMI_5": "Saastekäitlus ja muud jäätmekäitlustegevused"
    },
    {
        "EMTAK_txt": "41101",
        "NIMI_5": "Hoonestusprojektide arendus"
    },
    {
        "EMTAK_txt": "41201",
        "NIMI_5": "Elamute ja mitteeluhoonete ehitus"
    },
    {
        "EMTAK_txt": "42111",
        "NIMI_5": "Teede ja kiirteede ehitus"
    },
    {
        "EMTAK_txt": "42121",
        "NIMI_5": "Raudteede ja metroo ehitus, hooldus ja remont"
    },
    {
        "EMTAK_txt": "42131",
        "NIMI_5": "Silla- ja tunneliehitus"
    },
    {
        "EMTAK_txt": "42211",
        "NIMI_5": "Vee-, gaasi- ja kanalisatsioonitrasside ehitus"
    },
    {
        "EMTAK_txt": "42212",
        "NIMI_5": "Kaevude ja puuraukude rajamine ning likvideerimine"
    },
    {
        "EMTAK_txt": "42221",
        "NIMI_5": "Elektri- ja sidevõrkude ehitus"
    },
    {
        "EMTAK_txt": "42911",
        "NIMI_5": "Vesiehitus"
    },
    {
        "EMTAK_txt": "42991",
        "NIMI_5": "Mujal liigitamata rajatiste ehitus"
    },
    {
        "EMTAK_txt": "43111",
        "NIMI_5": "Lammutamine"
    },
    {
        "EMTAK_txt": "43121",
        "NIMI_5": "Ehitusplatside ettevalmistus ja puhastus"
    },
    {
        "EMTAK_txt": "43122",
        "NIMI_5": "Maakuivendus- ja maaparandustööd, k.a metsa- ja põllumaade kuivendus"
    },
    {
        "EMTAK_txt": "43129",
        "NIMI_5": "Muud kaeve- ja mullatööd"
    },
    {
        "EMTAK_txt": "43131",
        "NIMI_5": "Kontrollpuurimine ja sondimine"
    },
    {
        "EMTAK_txt": "43211",
        "NIMI_5": "Elektrijuhtmete ja -seadmete paigaldus"
    },
    {
        "EMTAK_txt": "43212",
        "NIMI_5": "Tulekahjualarmide, häire- ja valvesignalisatsiooni paigaldus"
    },
    {
        "EMTAK_txt": "43213",
        "NIMI_5": "Telekommunikatsioonikaablite ja antennide paigaldus"
    },
    {
        "EMTAK_txt": "43221",
        "NIMI_5": "Kütte-, ventilatsiooni- ja kliimaseadmete paigaldus"
    },
    {
        "EMTAK_txt": "43222",
        "NIMI_5": "Veetorustiku ja sanitaarseadmete paigaldus"
    },
    {
        "EMTAK_txt": "43291",
        "NIMI_5": "Isolatsioonitööd"
    },
    {
        "EMTAK_txt": "43299",
        "NIMI_5": "Mujal liigitamata ehituspaigaldustööd"
    },
    {
        "EMTAK_txt": "43311",
        "NIMI_5": "Krohvimine"
    },
    {
        "EMTAK_txt": "43321",
        "NIMI_5": "Mistahes materjalist akende, uste ja treppide paigaldus"
    },
    {
        "EMTAK_txt": "43329",
        "NIMI_5": "Muude ehituspuusepatoodete paigaldus"
    },
    {
        "EMTAK_txt": "43331",
        "NIMI_5": "Põranda- ja seinakatete paigaldus"
    },
    {
        "EMTAK_txt": "43341",
        "NIMI_5": "Värvimine ja klaasimine"
    },
    {
        "EMTAK_txt": "43391",
        "NIMI_5": "Muu ehitiste viimistlus ja lõpetamine"
    },
    {
        "EMTAK_txt": "43911",
        "NIMI_5": "Katusetööd"
    },
    {
        "EMTAK_txt": "43991",
        "NIMI_5": "Vundamendi-, betooni- jm müüritööd"
    },
    {
        "EMTAK_txt": "43992",
        "NIMI_5": "Pottsepatööd. Ahjude ja kaminate tegemine, k.a tööstuskorstnate ja -ahjude ladumine"
    },
    {
        "EMTAK_txt": "43993",
        "NIMI_5": "Tellingute ja tööplatvormide püstitus ja demonteerimine. Ehitus- ja tõsteseadmete rentimine koos operaatoriga"
    },
    {
        "EMTAK_txt": "43999",
        "NIMI_5": "Muud eriehitustööd"
    },
    {
        "EMTAK_txt": "45111",
        "NIMI_5": "Sõiduautode ja väikebusside (täismassiga alla 3,5 t) müük"
    },
    {
        "EMTAK_txt": "45191",
        "NIMI_5": "Muude mootorsõidukite müük"
    },
    {
        "EMTAK_txt": "45201",
        "NIMI_5": "Mootorsõidukite hooldus ja remont"
    },
    {
        "EMTAK_txt": "45202",
        "NIMI_5": "Autopesu jms teenindus"
    },
    {
        "EMTAK_txt": "45311",
        "NIMI_5": "Mootorsõidukite osade ja lisaseadmete hulgimüük"
    },
    {
        "EMTAK_txt": "45321",
        "NIMI_5": "Mootorsõidukite osade ja lisaseadmete jaemüük"
    },
    {
        "EMTAK_txt": "45401",
        "NIMI_5": "Mootorrataste, nende osade ja lisaseadmete müük, hooldus ja remont"
    },
    {
        "EMTAK_txt": "46111",
        "NIMI_5": "Põllumajandustoorme, elusloomade, tekstiilitoorme ja pooltoodete vahendamine"
    },
    {
        "EMTAK_txt": "46121",
        "NIMI_5": "Kütuste, maakide, metallide ja tööstuskemikaalide vahendamine"
    },
    {
        "EMTAK_txt": "46131",
        "NIMI_5": "Puidu ja ehitusmaterjalide vahendamine"
    },
    {
        "EMTAK_txt": "46141",
        "NIMI_5": "Masinate, tööstusseadmete, laevade ja õhusõidukite vahendamine"
    },
    {
        "EMTAK_txt": "46151",
        "NIMI_5": "Mööbli, kodutarvete ja rauakaupade vahendamine"
    },
    {
        "EMTAK_txt": "46161",
        "NIMI_5": "Tekstiili, rõivaste, jalatsite ja nahktoodete vahendamine"
    },
    {
        "EMTAK_txt": "46171",
        "NIMI_5": "Toidukaupade, jookide ja tubakatoodete vahendamine"
    },
    {
        "EMTAK_txt": "46181",
        "NIMI_5": "Muude kindlate kaupade vahendamine"
    },
    {
        "EMTAK_txt": "46191",
        "NIMI_5": "Mitmesuguste erinevate kaupade vahendamine"
    },
    {
        "EMTAK_txt": "46211",
        "NIMI_5": "Teravilja, töötlemata tubaka, seemnete ja loomasööda hulgimüük"
    },
    {
        "EMTAK_txt": "46221",
        "NIMI_5": "Lillede ja taimede hulgimüük"
    },
    {
        "EMTAK_txt": "46231",
        "NIMI_5": "Elusloomade hulgimüük"
    },
    {
        "EMTAK_txt": "46241",
        "NIMI_5": "Toor- ja parknaha hulgimüük"
    },
    {
        "EMTAK_txt": "46311",
        "NIMI_5": "Puu- ja köögivilja hulgimüük"
    },
    {
        "EMTAK_txt": "46321",
        "NIMI_5": "Liha ja lihatoodete hulgimüük"
    },
    {
        "EMTAK_txt": "46331",
        "NIMI_5": "Piimatoodete, munade, toiduõli ja -rasva hulgimüük"
    },
    {
        "EMTAK_txt": "46341",
        "NIMI_5": "Alkohoolsete jookide hulgimüük"
    },
    {
        "EMTAK_txt": "46342",
        "NIMI_5": "Muude jookide hulgimüük"
    },
    {
        "EMTAK_txt": "46351",
        "NIMI_5": "Tubakatoodete hulgimüük"
    },
    {
        "EMTAK_txt": "46361",
        "NIMI_5": "Suhkru, šokolaadi, kondiitri- ja pagaritoodete hulgimüük"
    },
    {
        "EMTAK_txt": "46371",
        "NIMI_5": "Kohvi, tee, kakao ja maitseainete hulgimüük"
    },
    {
        "EMTAK_txt": "46381",
        "NIMI_5": "Kalade, vähilaadsete ja kalatoodete hulgimüük"
    },
    {
        "EMTAK_txt": "46389",
        "NIMI_5": "Mujal liigitamata toidukaupade hulgimüük"
    },
    {
        "EMTAK_txt": "46391",
        "NIMI_5": "Toidukaupade, jookide ja tubakatoodete spetsialiseerimata hulgimüük"
    },
    {
        "EMTAK_txt": "46411",
        "NIMI_5": "Kangaste, kodutekstiili ja õmblustarvete hulgimüük"
    },
    {
        "EMTAK_txt": "46421",
        "NIMI_5": "Rõivaste ja rõivalisandite hulgimüük"
    },
    {
        "EMTAK_txt": "46422",
        "NIMI_5": "Jalatsite hulgimüük"
    },
    {
        "EMTAK_txt": "46431",
        "NIMI_5": "Elektriliste kodumasinate hulgimüük"
    },
    {
        "EMTAK_txt": "46441",
        "NIMI_5": "Portselani ja klaastoodete hulgimüük"
    },
    {
        "EMTAK_txt": "46442",
        "NIMI_5": "Puhastusvahendite hulgimüük"
    },
    {
        "EMTAK_txt": "46451",
        "NIMI_5": "Parfüümide ja kosmeetika hulgimüük"
    },
    {
        "EMTAK_txt": "46461",
        "NIMI_5": "Ravimite ja muude apteegikaupade hulgimüük"
    },
    {
        "EMTAK_txt": "46462",
        "NIMI_5": "Meditsiiniseadmete ja kirurgiriistade ning ortopeediliste abivahendite hulgimüük"
    },
    {
        "EMTAK_txt": "46471",
        "NIMI_5": "Mööbli, vaipade ja valgustite hulgimüük"
    },
    {
        "EMTAK_txt": "46481",
        "NIMI_5": "Kellade ja ehete hulgimüük"
    },
    {
        "EMTAK_txt": "46491",
        "NIMI_5": "Paberi, kirjatarvete, raamatute ja ajakirjandusväljaannete hulgimüük"
    },
    {
        "EMTAK_txt": "46492",
        "NIMI_5": "Spordikaupade hulgimüük (v.a spordirõivad ja vabaajajalatsid)"
    },
    {
        "EMTAK_txt": "46493",
        "NIMI_5": "Mängude ja mänguasjade hulgimüük"
    },
    {
        "EMTAK_txt": "46499",
        "NIMI_5": "Mujal liigitamata kodutarvete hulgimüük"
    },
    {
        "EMTAK_txt": "46511",
        "NIMI_5": "Arvutite, arvuti välisseadmete ja tarkvara hulgimüük"
    },
    {
        "EMTAK_txt": "46521",
        "NIMI_5": "Elektroonika- ja telekommunikatsiooniseadmete ning nende osade hulgimüük"
    },
    {
        "EMTAK_txt": "46611",
        "NIMI_5": "Põllumajandusmasinate, -seadmete ja lisaseadmete hulgimüük"
    },
    {
        "EMTAK_txt": "46621",
        "NIMI_5": "Tööpinkide hulgimüük"
    },
    {
        "EMTAK_txt": "46631",
        "NIMI_5": "Kaevandus- ja ehitusmasinate hulgimüük"
    },
    {
        "EMTAK_txt": "46641",
        "NIMI_5": "Tekstiilitööstus-, õmblus- ja kudumismasinate hulgimüük"
    },
    {
        "EMTAK_txt": "46651",
        "NIMI_5": "Kontorimööbli hulgimüük"
    },
    {
        "EMTAK_txt": "46661",
        "NIMI_5": "Muude kontorimasinate ja -seadmete hulgimüük"
    },
    {
        "EMTAK_txt": "46691",
        "NIMI_5": "Tõste- ja teisaldusseadmete ja -masinate ning nende varuosade hulgimüük (k.a konteinerid)"
    },
    {
        "EMTAK_txt": "46692",
        "NIMI_5": "Elektrimaterjalide, -tarvikute ja -seadmete hulgimüük, sh kaablid"
    },
    {
        "EMTAK_txt": "46693",
        "NIMI_5": "Toiduainetööstus- ja kaubandusseadmete hulgimüük"
    },
    {
        "EMTAK_txt": "46699",
        "NIMI_5": "Muude üld- ja eriotstarbeliste masinate ja seadmete hulgimüük"
    },
    {
        "EMTAK_txt": "46711",
        "NIMI_5": "Tahkekütuse hulgimüük"
    },
    {
        "EMTAK_txt": "46712",
        "NIMI_5": "Mootorikütuse hulgimüük"
    },
    {
        "EMTAK_txt": "46719",
        "NIMI_5": "Muu vedel- ja gaaskütuse jms hulgimüük"
    },
    {
        "EMTAK_txt": "46721",
        "NIMI_5": "Metallide ja metallimaakide hulgimüük"
    },
    {
        "EMTAK_txt": "46731",
        "NIMI_5": "Puidu ja puidu esmatöötlustoodete hulgimüük"
    },
    {
        "EMTAK_txt": "46732",
        "NIMI_5": "Sanitaarseadmete jm ehitusmaterjalide hulgimüük"
    },
    {
        "EMTAK_txt": "46741",
        "NIMI_5": "Veevarustus- ja kütteseadmete ning nende koosteosade hulgimüük"
    },
    {
        "EMTAK_txt": "46749",
        "NIMI_5": "Tööriistade jm rauakaupade hulgimüük"
    },
    {
        "EMTAK_txt": "46751",
        "NIMI_5": "Väetise ja agrokeemiatoodete hulgimüük"
    },
    {
        "EMTAK_txt": "46759",
        "NIMI_5": "Muude keemiatoodete hulgimüük"
    },
    {
        "EMTAK_txt": "46761",
        "NIMI_5": "Muude vahetoodete hulgimüük"
    },
    {
        "EMTAK_txt": "46771",
        "NIMI_5": "Jäätmete ja jääkide hulgikaubandus, taara ja pakendite kokkuost"
    },
    {
        "EMTAK_txt": "46901",
        "NIMI_5": "Spetsialiseerimata hulgikaubandus"
    },
    {
        "EMTAK_txt": "47111",
        "NIMI_5": "Jaemüük spetsialiseerimata kauplustes, kus on ülekaalus toidukaubad, joogid ja tubakatooted"
    },
    {
        "EMTAK_txt": "47191",
        "NIMI_5": "Jaemüük muudes spetsialiseerimata kauplustes"
    },
    {
        "EMTAK_txt": "47211",
        "NIMI_5": "Puu- ja köögivilja jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47221",
        "NIMI_5": "Liha ja lihatoodete jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47231",
        "NIMI_5": "Kala, vähilaadsete ja limuste jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47241",
        "NIMI_5": "Leivatoodete, kookide, jahu- ja suhkrukondiitritoodete jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47251",
        "NIMI_5": "Jookide jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47261",
        "NIMI_5": "Tubakatoodete jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47291",
        "NIMI_5": "Muu toidukaupade jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47301",
        "NIMI_5": "Mootorikütuse jaemüük, sh tanklate tegevus"
    },
    {
        "EMTAK_txt": "47411",
        "NIMI_5": "Arvutite, arvuti välisseadmete ja tarkvara jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47421",
        "NIMI_5": "Telekommunikatsiooniseadmete jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47431",
        "NIMI_5": "Heli- ja videoseadmete jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47511",
        "NIMI_5": "Tekstiiltoodete jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47521",
        "NIMI_5": "Rauakaupade ja tööriistade jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47522",
        "NIMI_5": "Veevarustus- ja sanitaarseadmete ning nende koosteosade jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47529",
        "NIMI_5": "Muude ehitusmaterjalide ja -tarvete jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47531",
        "NIMI_5": "Vaipade, mattide, seina-, põranda- ja aknakatete jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47541",
        "NIMI_5": "Elektriliste kodumasinate jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47591",
        "NIMI_5": "Mööbli ja valgustite jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47599",
        "NIMI_5": "Muude mujal liigitamata kodutarvete jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47611",
        "NIMI_5": "Raamatute jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47621",
        "NIMI_5": "Ajalehtede ja kirjatarvete jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47631",
        "NIMI_5": "Muusika- ja videosalvestiste jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47641",
        "NIMI_5": "Sporditarvete jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47651",
        "NIMI_5": "Mängude ja mänguasjade jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47711",
        "NIMI_5": "Rõivaste jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47721",
        "NIMI_5": "Jalatsite ja nahktoodete jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47731",
        "NIMI_5": "Apteekide tegevus"
    },
    {
        "EMTAK_txt": "47741",
        "NIMI_5": "Meditsiini- ja ortopeediakaupade jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47751",
        "NIMI_5": "Kosmeetika ja tualetitarvete jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47761",
        "NIMI_5": "Lillede, taimede, seemnete ja istikute ning väetise jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47762",
        "NIMI_5": "Lemmikloomade ja -lindude ning nende toidu ja tarvete jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47771",
        "NIMI_5": "Kellade ja ehete jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47781",
        "NIMI_5": "Prillide jm optikakaupade jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47782",
        "NIMI_5": "Fotokaupade jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47783",
        "NIMI_5": "Meenete, kunstiesemete ja -tarvete jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47789",
        "NIMI_5": "Mujal liigitamata kaupade jaemüük spetsialiseeritud kauplustes"
    },
    {
        "EMTAK_txt": "47791",
        "NIMI_5": "Antiikesemete jaemüük kauplustes"
    },
    {
        "EMTAK_txt": "47792",
        "NIMI_5": "Kasutatud raamatute jaemüük kauplustes"
    },
    {
        "EMTAK_txt": "47799",
        "NIMI_5": "Muude kasutatud kaupade jaemüük kauplustes"
    },
    {
        "EMTAK_txt": "47811",
        "NIMI_5": "Toidukaupade, jookide ja tubakatoodete jaemüük kioskites ja turgudel"
    },
    {
        "EMTAK_txt": "47821",
        "NIMI_5": "Tekstiili, rõivaste ja jalatsite jaemüük kioskites ja turgudel"
    },
    {
        "EMTAK_txt": "47891",
        "NIMI_5": "Muude kaupade jaemüük kioskites ja turgudel"
    },
    {
        "EMTAK_txt": "47911",
        "NIMI_5": "Jaemüük posti või Interneti teel"
    },
    {
        "EMTAK_txt": "47991",
        "NIMI_5": "Muu jaemüük väljaspool kauplusi, kioskeid ja turge"
    },
    {
        "EMTAK_txt": "49101",
        "NIMI_5": "Sõitjate raudteevedu"
    },
    {
        "EMTAK_txt": "49201",
        "NIMI_5": "Kauba raudteevedu"
    },
    {
        "EMTAK_txt": "49311",
        "NIMI_5": "Sõitjate regulaarvedu trammi ja trollibussiga"
    },
    {
        "EMTAK_txt": "49319",
        "NIMI_5": "Sõitjate muu kohalik liinivedu"
    },
    {
        "EMTAK_txt": "49321",
        "NIMI_5": "Taksovedu"
    },
    {
        "EMTAK_txt": "49391",
        "NIMI_5": "Sõitjate maakondadevaheline ja rahvusvaheline liinivedu"
    },
    {
        "EMTAK_txt": "49399",
        "NIMI_5": "Sõitjate muu maismaavedu"
    },
    {
        "EMTAK_txt": "49411",
        "NIMI_5": "Kaubavedu maanteel"
    },
    {
        "EMTAK_txt": "49421",
        "NIMI_5": "Kolimisteenused"
    },
    {
        "EMTAK_txt": "50101",
        "NIMI_5": "Sõitjatevedu merel ja rannavetes"
    },
    {
        "EMTAK_txt": "50301",
        "NIMI_5": "Sõitjatevedu sisevetel"
    },
    {
        "EMTAK_txt": "50201",
        "NIMI_5": "Kaubavedu merel ja rannavetes"
    },
    {
        "EMTAK_txt": "50202",
        "NIMI_5": "Laevade pukseerimine jms"
    },
    {
        "EMTAK_txt": "50401",
        "NIMI_5": "Kaubavedu sisevetel"
    },
    {
        "EMTAK_txt": "51101",
        "NIMI_5": "Sõitjate õhutransport"
    },
    {
        "EMTAK_txt": "51211",
        "NIMI_5": "Kauba õhutransport"
    },
    {
        "EMTAK_txt": "52101",
        "NIMI_5": "Kaubaladude töö"
    },
    {
        "EMTAK_txt": "52102",
        "NIMI_5": "Vedelike ja gaaside ladustamine"
    },
    {
        "EMTAK_txt": "52211",
        "NIMI_5": "Parklate tegevus"
    },
    {
        "EMTAK_txt": "52219",
        "NIMI_5": "Muud maismaaveondust teenindavad tegevusalad"
    },
    {
        "EMTAK_txt": "52221",
        "NIMI_5": "Sadamate töö ja veeteede kasutamisega seotud tegevused"
    },
    {
        "EMTAK_txt": "52229",
        "NIMI_5": "Muud veetransporti teenindavad tegevusalad"
    },
    {
        "EMTAK_txt": "52231",
        "NIMI_5": "Lennuväljade ja lennujaama reisiterminalide töö"
    },
    {
        "EMTAK_txt": "52239",
        "NIMI_5": "Muud õhutransporti teenindavad tegevusalad"
    },
    {
        "EMTAK_txt": "52241",
        "NIMI_5": "Laadungikäitlus"
    },
    {
        "EMTAK_txt": "52291",
        "NIMI_5": "Veoste ekspedeerimine"
    },
    {
        "EMTAK_txt": "52292",
        "NIMI_5": "Mere-lastiveo organiseerimine, laevade agenteerimine"
    },
    {
        "EMTAK_txt": "52293",
        "NIMI_5": "Tolliagentide tegevus"
    },
    {
        "EMTAK_txt": "52299",
        "NIMI_5": "Mujal liigitamata veondust abistavad tegevused"
    },
    {
        "EMTAK_txt": "53101",
        "NIMI_5": "Universaalne postiteenus"
    },
    {
        "EMTAK_txt": "53201",
        "NIMI_5": "Muu posti- ja kullerteenused"
    },
    {
        "EMTAK_txt": "55101",
        "NIMI_5": "Hotellid"
    },
    {
        "EMTAK_txt": "55102",
        "NIMI_5": "Motellid jms majutus"
    },
    {
        "EMTAK_txt": "55103",
        "NIMI_5": "Külalistemajad"
    },
    {
        "EMTAK_txt": "55201",
        "NIMI_5": "Hostelid"
    },
    {
        "EMTAK_txt": "55202",
        "NIMI_5": "Puhkemaja"
    },
    {
        "EMTAK_txt": "55203",
        "NIMI_5": "Puhkeküla ja puhkelaager"
    },
    {
        "EMTAK_txt": "55204",
        "NIMI_5": "Külaliskorter"
    },
    {
        "EMTAK_txt": "55205",
        "NIMI_5": "Kodumajutus"
    },
    {
        "EMTAK_txt": "55301",
        "NIMI_5": "Laagriplatsid, vagunelamute ja haagissuvilate parkimisplatsid"
    },
    {
        "EMTAK_txt": "55901",
        "NIMI_5": "Muu majutus"
    },
    {
        "EMTAK_txt": "56101",
        "NIMI_5": "Restoranid jm toitlustuskohad"
    },
    {
        "EMTAK_txt": "56211",
        "NIMI_5": "Toitlustamine üritustel"
    },
    {
        "EMTAK_txt": "56291",
        "NIMI_5": "Muu toitlustamine"
    },
    {
        "EMTAK_txt": "56301",
        "NIMI_5": "Jookide serveerimine"
    },
    {
        "EMTAK_txt": "58111",
        "NIMI_5": "Raamatukirjastamine"
    },
    {
        "EMTAK_txt": "58112",
        "NIMI_5": "Õpikute, sõnaraamatute jm teatmeteoste kirjastamine"
    },
    {
        "EMTAK_txt": "58121",
        "NIMI_5": "Kataloogide ja aadressiraamatute kirjastamine"
    },
    {
        "EMTAK_txt": "58131",
        "NIMI_5": "Ajalehtede kirjastamine"
    },
    {
        "EMTAK_txt": "58141",
        "NIMI_5": "Ajakirjade jm perioodika kirjastamine"
    },
    {
        "EMTAK_txt": "58191",
        "NIMI_5": "Muu kirjastamine"
    },
    {
        "EMTAK_txt": "58211",
        "NIMI_5": "Arvutimängude kirjastamine"
    },
    {
        "EMTAK_txt": "58291",
        "NIMI_5": "Muu tarkvara kirjastamine"
    },
    {
        "EMTAK_txt": "59111",
        "NIMI_5": "Kinofilmide ja videote tootmine"
    },
    {
        "EMTAK_txt": "59112",
        "NIMI_5": "Telesaadete tootmine"
    },
    {
        "EMTAK_txt": "59121",
        "NIMI_5": "Kinofilmide, videote ja telesaadete tootmisjärgsed tegevusalad"
    },
    {
        "EMTAK_txt": "59131",
        "NIMI_5": "Kinofilmide, videote ja telesaadete levitamine"
    },
    {
        "EMTAK_txt": "59141",
        "NIMI_5": "Kinofilmide linastamine"
    },
    {
        "EMTAK_txt": "59201",
        "NIMI_5": "Helisalvestiste ja muusika kirjastamine"
    },
    {
        "EMTAK_txt": "60101",
        "NIMI_5": "Raadioteenused"
    },
    {
        "EMTAK_txt": "60201",
        "NIMI_5": "Televisiooniteenused ehk lineaarsed audiovisuaalmeedia teenused"
    },
    {
        "EMTAK_txt": "60202",
        "NIMI_5": ""
    },
    {
        "EMTAK_txt": "61101",
        "NIMI_5": "Elektroonilise side teenused fikseeritud sidevõrgus"
    },
    {
        "EMTAK_txt": "61109",
        "NIMI_5": ""
    },
    {
        "EMTAK_txt": "61201",
        "NIMI_5": "Elektroonilise side teenused traadita sidevõrgus"
    },
    {
        "EMTAK_txt": "61209",
        "NIMI_5": ""
    },
    {
        "EMTAK_txt": "61301",
        "NIMI_5": "Satelliitsideteenused"
    },
    {
        "EMTAK_txt": "61901",
        "NIMI_5": "Elektroonilise side muud teenused"
    },
    {
        "EMTAK_txt": "62011",
        "NIMI_5": "Programmeerimine"
    },
    {
        "EMTAK_txt": "62021",
        "NIMI_5": "Arvutialased konsultatsioonid"
    },
    {
        "EMTAK_txt": "62031",
        "NIMI_5": "Arvutisüsteemide ja andmebaaside haldus"
    },
    {
        "EMTAK_txt": "62091",
        "NIMI_5": "Muud infotehnoloogia- ja arvutialased tegevused"
    },
    {
        "EMTAK_txt": "63111",
        "NIMI_5": "Andmetöötlus, veebihosting jms tegevused"
    },
    {
        "EMTAK_txt": "63121",
        "NIMI_5": "Veebiportaalide tegevus"
    },
    {
        "EMTAK_txt": "63911",
        "NIMI_5": "Uudisteagentuuride tegevus"
    },
    {
        "EMTAK_txt": "63991",
        "NIMI_5": "Mujal liigitamata infoalane tegevus"
    },
    {
        "EMTAK_txt": "64191",
        "NIMI_5": "Krediidiasutused (pangad)"
    },
    {
        "EMTAK_txt": "64201",
        "NIMI_5": "Valdusfirmade tegevus"
    },
    {
        "EMTAK_txt": "64301",
        "NIMI_5": "Usaldusfondide, investeerimisfondide ja sarnaste finantsüksuste investeerimine võlakirjadesse, väärtpaberitesse jms finantsvahenditesse"
    },
    {
        "EMTAK_txt": "64921",
        "NIMI_5": "Kapitalirent"
    },
    {
        "EMTAK_txt": "64929",
        "NIMI_5": "Pandimajad"
    },
    {
        "EMTAK_txt": "64911",
        "NIMI_5": "Muu laenuandmine, v.a pandimajad"
    },
    {
        "EMTAK_txt": "64991",
        "NIMI_5": "Muude mujal liigitamata finantsteenuste osutamine, v.a kindlustus ja pensionifondid"
    },
    {
        "EMTAK_txt": "65111",
        "NIMI_5": "Elukindlustus"
    },
    {
        "EMTAK_txt": "65121",
        "NIMI_5": "Kahjukindlustus"
    },
    {
        "EMTAK_txt": "66111",
        "NIMI_5": "Finantsturgude haldamine"
    },
    {
        "EMTAK_txt": "66121",
        "NIMI_5": "Väärtpaberite ja kaubalepingute maaklerlus"
    },
    {
        "EMTAK_txt": "66129",
        "NIMI_5": "Valuutavahetus"
    },
    {
        "EMTAK_txt": "66191",
        "NIMI_5": "Finantsnõustamine"
    },
    {
        "EMTAK_txt": "66199",
        "NIMI_5": "Muud mujal liigitamata finantsteenuste abitegevusalad"
    },
    {
        "EMTAK_txt": "66211",
        "NIMI_5": "Riskide ja kahju hindamine"
    },
    {
        "EMTAK_txt": "66221",
        "NIMI_5": "Kindlustusagentide ja -vahendajate tegevus"
    },
    {
        "EMTAK_txt": "66291",
        "NIMI_5": "Muud kindlustuse ja pensionifondide abitegevusalad"
    },
    {
        "EMTAK_txt": "66301",
        "NIMI_5": "Fondide valitsemine"
    },
    {
        "EMTAK_txt": "68101",
        "NIMI_5": "Enda kinnisvara ost ja müük"
    },
    {
        "EMTAK_txt": "68201",
        "NIMI_5": "Enda või renditud kinnisvara üürileandmine ja käitus"
    },
    {
        "EMTAK_txt": "68311",
        "NIMI_5": "Kinnisvarabüroode tegevus"
    },
    {
        "EMTAK_txt": "68321",
        "NIMI_5": "Hoonete ja üürimajade haldus (korteriühistud, elamuühistud, hooneühistud jms)"
    },
    {
        "EMTAK_txt": "68322",
        "NIMI_5": "Aiandus- ja suvilaühistute jms haldus"
    },
    {
        "EMTAK_txt": "68329",
        "NIMI_5": "Muu kinnisvarahaldus või haldusega seotud tegevused"
    },
    {
        "EMTAK_txt": "69101",
        "NIMI_5": "Advokaatide ja advokaadibüroode tegevus"
    },
    {
        "EMTAK_txt": "69102",
        "NIMI_5": "Õigusnõustajate ja õigusbüroode tegevus"
    },
    {
        "EMTAK_txt": "69109",
        "NIMI_5": "Muud juriidilised toimingud"
    },
    {
        "EMTAK_txt": "69201",
        "NIMI_5": "Auditeerimine"
    },
    {
        "EMTAK_txt": "69202",
        "NIMI_5": "Raamatupidamine, maksualane nõustamine"
    },
    {
        "EMTAK_txt": "70101",
        "NIMI_5": "Peakontorite tegevus"
    },
    {
        "EMTAK_txt": "70211",
        "NIMI_5": "Suhtekorraldus ja teabevahetus"
    },
    {
        "EMTAK_txt": "70221",
        "NIMI_5": "Ärinõustamine jm juhtimisalane nõustamine"
    },
    {
        "EMTAK_txt": "71111",
        "NIMI_5": "Arhitektitegevused"
    },
    {
        "EMTAK_txt": "71121",
        "NIMI_5": "Ehituslik insener-tehniline projekteerimine ja nõustamine"
    },
    {
        "EMTAK_txt": "71122",
        "NIMI_5": "Geoloogilised ja geodeetilised uurimistööd"
    },
    {
        "EMTAK_txt": "71129",
        "NIMI_5": "Muud insener-tehnilised tegevusalad"
    },
    {
        "EMTAK_txt": "71201",
        "NIMI_5": "Autode tehniline ülevaatus"
    },
    {
        "EMTAK_txt": "71209",
        "NIMI_5": "Muu teimimine ja analüüs"
    },
    {
        "EMTAK_txt": "72111",
        "NIMI_5": "Teadus- ja arendustegevus biotehnoloogia vallas"
    },
    {
        "EMTAK_txt": "72191",
        "NIMI_5": "Teadus- ja arendustegevus muude loodus- ja tehnikateaduste vallas"
    },
    {
        "EMTAK_txt": "72201",
        "NIMI_5": "Teadus- ja arendustegevus sotsiaal- ja humanitaarteaduste vallas"
    },
    {
        "EMTAK_txt": "73111",
        "NIMI_5": "Reklaamiagentuurid"
    },
    {
        "EMTAK_txt": "73121",
        "NIMI_5": "Reklaami vahendamine meedias"
    },
    {
        "EMTAK_txt": "73201",
        "NIMI_5": "Turu-uuringud ja avaliku arvamuse küsitlused"
    },
    {
        "EMTAK_txt": "74101",
        "NIMI_5": "Disainerite tegevus"
    },
    {
        "EMTAK_txt": "74201",
        "NIMI_5": "Fotograafia"
    },
    {
        "EMTAK_txt": "74301",
        "NIMI_5": "Kirjalik ja suuline tõlge"
    },
    {
        "EMTAK_txt": "74901",
        "NIMI_5": "Muu mujal liigitamata kutse-, teadus- ja tehnikaalane tegevus"
    },
    {
        "EMTAK_txt": "75001",
        "NIMI_5": "Veterinaaria"
    },
    {
        "EMTAK_txt": "77111",
        "NIMI_5": "Sõiduautode ja väikebusside (täismassiga alla 3,5 t) rentimine ja kasutusrent"
    },
    {
        "EMTAK_txt": "77121",
        "NIMI_5": "Veokite rentimine ja kasutusrent"
    },
    {
        "EMTAK_txt": "77211",
        "NIMI_5": "Vabaaja- ja sporditarvete väljaüürimine ja kasutusrent"
    },
    {
        "EMTAK_txt": "77221",
        "NIMI_5": "Videokassettide ja DVD-de laenutamine"
    },
    {
        "EMTAK_txt": "77291",
        "NIMI_5": "Muude tarbeesemete ja kodumasinate väljaüürimine ja kasutusrent"
    },
    {
        "EMTAK_txt": "77311",
        "NIMI_5": "Põllumajandusmasinate ja -seadmete rentimine ja kasutusrent"
    },
    {
        "EMTAK_txt": "77321",
        "NIMI_5": "Ehitusmasinate ja -seadmete rentimine ja kasutusrent"
    },
    {
        "EMTAK_txt": "77331",
        "NIMI_5": "Kontorimasinate ja -seadmete rentimine ja kasutusrent, k.a arvutid"
    },
    {
        "EMTAK_txt": "77341",
        "NIMI_5": "Veetranspordivahendite rentimine ja kasutusrent"
    },
    {
        "EMTAK_txt": "77351",
        "NIMI_5": "Õhutranspordivahendite rentimine ja kasutusrent"
    },
    {
        "EMTAK_txt": "77391",
        "NIMI_5": "Raudteeveeremi rentimine"
    },
    {
        "EMTAK_txt": "77399",
        "NIMI_5": "Muu mujal liigitamata masinate, seadmete jm materiaalse vara rentimine ja kasutusrent"
    },
    {
        "EMTAK_txt": "77401",
        "NIMI_5": "Intellektuaalomandi ja sarnaste toodete (v.a autoriõigusega tööd) rentimine"
    },
    {
        "EMTAK_txt": "78101",
        "NIMI_5": "Tööhõiveagentuuride tegevus"
    },
    {
        "EMTAK_txt": "78201",
        "NIMI_5": "Ajutise tööjõu rent"
    },
    {
        "EMTAK_txt": "78301",
        "NIMI_5": "Muu inimressursiga varustamine"
    },
    {
        "EMTAK_txt": "79111",
        "NIMI_5": "Reisibüroode tegevus"
    },
    {
        "EMTAK_txt": "79121",
        "NIMI_5": "Reisikorraldajate tegevus"
    },
    {
        "EMTAK_txt": "79901",
        "NIMI_5": "Muu reisimisega seotud reserveerimine, sh giidide, piletiagentuuride ja turismiinfopunktide tegevus"
    },
    {
        "EMTAK_txt": "80101",
        "NIMI_5": "Turvatöö, v.a avalik korrakaitse"
    },
    {
        "EMTAK_txt": "80201",
        "NIMI_5": "Turvasüsteemide käitus"
    },
    {
        "EMTAK_txt": "80301",
        "NIMI_5": "Juurdlus"
    },
    {
        "EMTAK_txt": "81101",
        "NIMI_5": "Hoonehalduse abitegevused"
    },
    {
        "EMTAK_txt": "81211",
        "NIMI_5": "Hoonete üldpuhastus"
    },
    {
        "EMTAK_txt": "81221",
        "NIMI_5": "Hoonete muu puhastus ja tööstuslik puhastustegevus"
    },
    {
        "EMTAK_txt": "81291",
        "NIMI_5": "Muu puhastustegevus"
    },
    {
        "EMTAK_txt": "81301",
        "NIMI_5": "Maastiku hooldus ja korrashoid"
    },
    {
        "EMTAK_txt": "82111",
        "NIMI_5": "Büroohaldus, kombineeritud sekretäriteenus"
    },
    {
        "EMTAK_txt": "82191",
        "NIMI_5": "Valguskoopiad, dokumentide koostamine ja muud büroo abitegevused"
    },
    {
        "EMTAK_txt": "82201",
        "NIMI_5": "Kõnekeskuste tegevus, telemarketing"
    },
    {
        "EMTAK_txt": "82301",
        "NIMI_5": "Nõupidamiste ja messide korraldamine"
    },
    {
        "EMTAK_txt": "82911",
        "NIMI_5": "Inkassoteenus ja krediidiinfo"
    },
    {
        "EMTAK_txt": "82921",
        "NIMI_5": "Pakendamine"
    },
    {
        "EMTAK_txt": "82991",
        "NIMI_5": "Muud mujal liigitamata äritegevust abistavad tegevused"
    },
    {
        "EMTAK_txt": "84114",
        "NIMI_5": "Valla- ja linnavalitsuste tegevus"
    },
    {
        "EMTAK_txt": "84119",
        "NIMI_5": "Mujal liigitamata riigi haldustegevus"
    },
    {
        "EMTAK_txt": "84121",
        "NIMI_5": "Hariduse haldus"
    },
    {
        "EMTAK_txt": "84122",
        "NIMI_5": "Tervishoiu ja sotsiaalelu haldus"
    },
    {
        "EMTAK_txt": "84123",
        "NIMI_5": "Elamu- ja kommunaalmajanduse haldus"
    },
    {
        "EMTAK_txt": "84124",
        "NIMI_5": "Vaba aja tegevuse, kultuuri ja religiooni haldus"
    },
    {
        "EMTAK_txt": "84125",
        "NIMI_5": "Keskkonnakaitse haldus"
    },
    {
        "EMTAK_txt": "84131",
        "NIMI_5": "Põllumajanduse, metsanduse, maakasutuse, kalanduse ja jahinduse haldus"
    },
    {
        "EMTAK_txt": "84132",
        "NIMI_5": "Transpordi ja side haldus"
    },
    {
        "EMTAK_txt": "84139",
        "NIMI_5": "Muud majandustegevust toetavad tegevused"
    },
    {
        "EMTAK_txt": "84211",
        "NIMI_5": "Välissuhted"
    },
    {
        "EMTAK_txt": "84221",
        "NIMI_5": "Riigikaitse"
    },
    {
        "EMTAK_txt": "84249",
        "NIMI_5": "Muud avaliku julgeoleku ja korrakaitsega seotud tegevused"
    },
    {
        "EMTAK_txt": "84251",
        "NIMI_5": "Tuletõrje- ja päästeteenistused, vetelpääste, häirekeskused"
    },
    {
        "EMTAK_txt": "85101",
        "NIMI_5": "Lastesõimede tegevus"
    },
    {
        "EMTAK_txt": "85102",
        "NIMI_5": "Lasteaedade tegevus"
    },
    {
        "EMTAK_txt": "85202",
        "NIMI_5": "Lasteaed-algkoolide tegevus"
    },
    {
        "EMTAK_txt": "85201",
        "NIMI_5": "Algkoolide tegevus"
    },
    {
        "EMTAK_txt": "85311",
        "NIMI_5": "Lasteaed-põhikoolide tegevus"
    },
    {
        "EMTAK_txt": "85312",
        "NIMI_5": "Põhikoolide tegevus"
    },
    {
        "EMTAK_txt": "85313",
        "NIMI_5": "Gümnaasiumide tegevus"
    },
    {
        "EMTAK_txt": "85321",
        "NIMI_5": "Kutseõppeasutuste tegevus"
    },
    {
        "EMTAK_txt": "85411",
        "NIMI_5": "Rakenduskõrgkoolide tegevus"
    },
    {
        "EMTAK_txt": "85421",
        "NIMI_5": "Ülikoolide tegevus"
    },
    {
        "EMTAK_txt": "85511",
        "NIMI_5": "Spordikoolid"
    },
    {
        "EMTAK_txt": "85519",
        "NIMI_5": "Muu spordi- ja vabaajakoolitus"
    },
    {
        "EMTAK_txt": "85521",
        "NIMI_5": "Muusika- ja kunstikoolitus"
    },
    {
        "EMTAK_txt": "85522",
        "NIMI_5": "Tantsukoolide tegevus"
    },
    {
        "EMTAK_txt": "85529",
        "NIMI_5": "Muu huvikoolitus"
    },
    {
        "EMTAK_txt": "85531",
        "NIMI_5": "Sõiduõpe"
    },
    {
        "EMTAK_txt": "85591",
        "NIMI_5": "Keeleõpe"
    },
    {
        "EMTAK_txt": "85592",
        "NIMI_5": "Arvutiõpe"
    },
    {
        "EMTAK_txt": "85599",
        "NIMI_5": "Muu mujal liigitamata koolitus"
    },
    {
        "EMTAK_txt": "85601",
        "NIMI_5": "Haridust abistavad tegevused"
    },
    {
        "EMTAK_txt": "86101",
        "NIMI_5": "Haiglaraviteenused"
    },
    {
        "EMTAK_txt": "86211",
        "NIMI_5": "Üldarstiabi osutamine"
    },
    {
        "EMTAK_txt": "86221",
        "NIMI_5": "Eriarstiabi osutamine"
    },
    {
        "EMTAK_txt": "86231",
        "NIMI_5": "Hambaravi osutamine"
    },
    {
        "EMTAK_txt": "86901",
        "NIMI_5": "Kiirabi ja parameedikute tegevus"
    },
    {
        "EMTAK_txt": "86902",
        "NIMI_5": "Meditsiinilaborite, vere-, sperma- jms pankade tegevus"
    },
    {
        "EMTAK_txt": "86903",
        "NIMI_5": "Õendusabi osutamine"
    },
    {
        "EMTAK_txt": "86904",
        "NIMI_5": "Ämmaemandate tegevus"
    },
    {
        "EMTAK_txt": "86905",
        "NIMI_5": "Sanatooriumide ravitegevus"
    },
    {
        "EMTAK_txt": "86906",
        "NIMI_5": "Diagnostikakabinettide ja -keskuste tegevus, nt röntgenlaborid, magnetresonants jms kabinetid"
    },
    {
        "EMTAK_txt": "86909",
        "NIMI_5": "Mujal liigitamata tervishoiualad"
    },
    {
        "EMTAK_txt": "87101",
        "NIMI_5": "Hooldusraviasutuste tegevus"
    },
    {
        "EMTAK_txt": "87201",
        "NIMI_5": "Vaimupuudega ja psüühiliste erivajadustega isikute hoolekandeasutuste tegevus"
    },
    {
        "EMTAK_txt": "87202",
        "NIMI_5": "Ainesõltlaste hoolekandeasutuste tegevus"
    },
    {
        "EMTAK_txt": "87301",
        "NIMI_5": "Vanurite ja puuetega inimeste hoolekandeasutuste tegevus"
    },
    {
        "EMTAK_txt": "87901",
        "NIMI_5": "Asenduskoduteenust osutavate hoolekandeasutuste tegevus"
    },
    {
        "EMTAK_txt": "87909",
        "NIMI_5": "Muude mujal liigitamata hoolekandeasutuste tegevus"
    },
    {
        "EMTAK_txt": "88101",
        "NIMI_5": "Vanurite ja puuetega inimeste sotsiaalhoolekanne majutuseta"
    },
    {
        "EMTAK_txt": "88911",
        "NIMI_5": "Lapsehoiuteenus"
    },
    {
        "EMTAK_txt": "88991",
        "NIMI_5": "Mujal liigitamata sotsiaalhoolekanne majutuseta"
    },
    {
        "EMTAK_txt": "90011",
        "NIMI_5": "Teatri- ja tantsuetenduste lavastamine ja esitamine"
    },
    {
        "EMTAK_txt": "90012",
        "NIMI_5": "Kontsertide lavastamine ja esitamine, muusikaline loometegevus jms tegevus"
    },
    {
        "EMTAK_txt": "90021",
        "NIMI_5": "Lavakunsti abitegevused"
    },
    {
        "EMTAK_txt": "90031",
        "NIMI_5": "Kunstialane loometegevus"
    },
    {
        "EMTAK_txt": "90041",
        "NIMI_5": "Teatri-, kontserdi- jms hoonete käitus"
    },
    {
        "EMTAK_txt": "91011",
        "NIMI_5": "Raamatukogude tegevus"
    },
    {
        "EMTAK_txt": "91012",
        "NIMI_5": "Arhiivide tegevus"
    },
    {
        "EMTAK_txt": "91021",
        "NIMI_5": "Muuseumide tegevus"
    },
    {
        "EMTAK_txt": "91031",
        "NIMI_5": "Ajalooliste kohtade ja ehitiste jms vaatamisväärsuste käitus"
    },
    {
        "EMTAK_txt": "91041",
        "NIMI_5": "Botaanika- ja loomaaedade ning looduskaitsealade tegevus"
    },
    {
        "EMTAK_txt": "91042",
        "NIMI_5": "Kaitsealade tegevus"
    },
    {
        "EMTAK_txt": "92001",
        "NIMI_5": "Hasartmängude ja kihlvedude korraldamine"
    },
    {
        "EMTAK_txt": "93111",
        "NIMI_5": "Spordirajatiste käitus"
    },
    {
        "EMTAK_txt": "93121",
        "NIMI_5": "Spordiklubide tegevus"
    },
    {
        "EMTAK_txt": "93122",
        "NIMI_5": "Invaspordiklubide tegevus"
    },
    {
        "EMTAK_txt": "93131",
        "NIMI_5": "Aeroobika- ja jõusaalide tegevus"
    },
    {
        "EMTAK_txt": "93191",
        "NIMI_5": "Spordi alaliitude, spordiliitude ja spordiühenduste tegevus"
    },
    {
        "EMTAK_txt": "93192",
        "NIMI_5": "Sportlik ja meelelahutuslik jahipidamine ja kalapüük"
    },
    {
        "EMTAK_txt": "93199",
        "NIMI_5": "Mujal liigitamata sporditegevus"
    },
    {
        "EMTAK_txt": "93211",
        "NIMI_5": "Lõbustusparkide ja temaatiliste lõbustusparkide tegevus"
    },
    {
        "EMTAK_txt": "93291",
        "NIMI_5": "Kultuurikeskused ja rahvamajad"
    },
    {
        "EMTAK_txt": "93299",
        "NIMI_5": "Muud mujal liigitamata lõbustus- ja vaba aja tegevused"
    },
    {
        "EMTAK_txt": "94111",
        "NIMI_5": "Põllumajandusseltsid ja -liidud, aiandus- ja mesindusseltsid, metsaseltsid ja -liidud"
    },
    {
        "EMTAK_txt": "94119",
        "NIMI_5": "Muude ettevõtjate ja tööandjate organisatsioonide tegevus"
    },
    {
        "EMTAK_txt": "94121",
        "NIMI_5": "Loomeliitude tegevus"
    },
    {
        "EMTAK_txt": "94129",
        "NIMI_5": "Muude kutseorganisatsioonide tegevus"
    },
    {
        "EMTAK_txt": "94201",
        "NIMI_5": "Ametiühingute tegevus"
    },
    {
        "EMTAK_txt": "94911",
        "NIMI_5": "Kirikute, koguduste ja kloostrite tegevus"
    },
    {
        "EMTAK_txt": "94919",
        "NIMI_5": "Muude usuorganisatsioonide tegevus"
    },
    {
        "EMTAK_txt": "94921",
        "NIMI_5": "Erakondade tegevus"
    },
    {
        "EMTAK_txt": "94929",
        "NIMI_5": "Muude poliitiliste organisatsioonide tegevus"
    },
    {
        "EMTAK_txt": "94991",
        "NIMI_5": "Kodanikuõiguste kaitse ja eestkoste; teatud elanikegrupi huvide kaitse"
    },
    {
        "EMTAK_txt": "94992",
        "NIMI_5": "Piirkondlikku/kohalikku elu edendavad ja toetavad ühendused ja fondid"
    },
    {
        "EMTAK_txt": "94993",
        "NIMI_5": "Noorte- ja lasteühendused ning noorte ja laste heaolu edendavad ühendused"
    },
    {
        "EMTAK_txt": "94994",
        "NIMI_5": "Rahvusvähemuste ühendused ja kultuuriseltsid, rahvuste vahelist austust ja sõprust edendavad ühendused"
    },
    {
        "EMTAK_txt": "94995",
        "NIMI_5": "Vaba aja veetmise, meelelahutuse ja kultuurilise tegevusega või huvialadega seotud ühendused ning huviklubid"
    },
    {
        "EMTAK_txt": "94996",
        "NIMI_5": "Keskkonna- ja looduskaitseühendused"
    },
    {
        "EMTAK_txt": "94997",
        "NIMI_5": "Tervisehäiretega isikute ühendused ja nende liidud; puuetega inimeste ühendused ja nende liidud, erivajadustega inimeste kaitse ühendused"
    },
    {
        "EMTAK_txt": "94999",
        "NIMI_5": "Muude mujal liigitamata organisatsioonide tegevus"
    },
    {
        "EMTAK_txt": "95111",
        "NIMI_5": "Arvutite ja arvuti välisseadmete parandus"
    },
    {
        "EMTAK_txt": "95121",
        "NIMI_5": "Sideseadmete parandus"
    },
    {
        "EMTAK_txt": "95211",
        "NIMI_5": "Tarbeelektroonika parandus"
    },
    {
        "EMTAK_txt": "95221",
        "NIMI_5": "Kodumasinate ning majapidamis- ja aiatööriistade parandus"
    },
    {
        "EMTAK_txt": "95231",
        "NIMI_5": "Jalatsite ja nahktoodete parandus"
    },
    {
        "EMTAK_txt": "95241",
        "NIMI_5": "Mööbli ja sisustusesemete parandus"
    },
    {
        "EMTAK_txt": "95251",
        "NIMI_5": "Kellade ja ehete parandus"
    },
    {
        "EMTAK_txt": "95291",
        "NIMI_5": "Muude tarbeesemete ja kodutarvete parandus"
    },
    {
        "EMTAK_txt": "96011",
        "NIMI_5": "Tekstiil- ja karusnahatoodete pesu ja keemiline puhastus"
    },
    {
        "EMTAK_txt": "96021",
        "NIMI_5": "Juuksuri- ja muu iluteenindus"
    },
    {
        "EMTAK_txt": "96031",
        "NIMI_5": "Matusetalituste korraldamine"
    },
    {
        "EMTAK_txt": "96032",
        "NIMI_5": "Kalmistute ja krematooriumite tegevus"
    },
    {
        "EMTAK_txt": "96041",
        "NIMI_5": "Saunade, solaariumite ja massaažisalongide tegevus jm füüsilise heaoluga seotud teenindus"
    },
    {
        "EMTAK_txt": "96091",
        "NIMI_5": "Lemmikloomade hooldamine"
    },
    {
        "EMTAK_txt": "96099",
        "NIMI_5": "Muu teenindus"
    }
];

//import { timeHours } from 'd3';
//import { products } from '../products';
class LahteinfoComponent {
    constructor() {
        this.title = "Täiendav informatsioon, mida võtsime aluseks sinu ettevõttele hinnangut andes:";
        this.content1 = "Ettevõtte põhitegevusala (EMTAK): ";
        this.content2 = "Ettevõtte tegevussektor: ";
        this.content3 = "Hõivatute arv ettevõttes: ";
        this.content4 = "Ettevõtte suurusgrupp: ";
        this.content5 = "Ettevõtte tegevuspiirkond (maakond): ";
        this.content6 = "Majandusaasta aruande aasta, millel prognoosid põhinevad: ";
        this.sektorArray = [];
        this.suurusArray = [];
        this.maakondArray = [];
        this.emtaktextArray = [];
        //this.content1a = JSON.stringify(xtee.EMTAK);
        this.content1a = xtee.EMTAK;
        this.content1b = this.content1 + this.content1a;
        this.sectorNo = JSON.stringify(xtee.sektorNo);
        this.sectParing = 's' + this.sectorNo;
        //this.content2a = sektorid.this.sectParing;
        //this.content2a = this.content2+this.sectParing;
        this.content3a = JSON.stringify(xtee.hoiv);
        this.content3b = this.content3 + this.content3a;
        this.sizeNo = JSON.stringify(xtee.size);
        this.countNo = JSON.stringify(xtee.county);
        //this.content6a = JSON.stringify(xtee.prognAasta);
        this.content6a = xtee.prognAasta;
        this.content6b = this.content6 + this.content6a;
    }
    paring() {
        this.sectParing = 'sektorid.s35';
        this.content2a = this.sectParing;
        return this.content2a;
    }
    keerukam() {
        for (let key in sektorid) {
            if (sektorid.hasOwnProperty(key)) {
                this.sektorArray.push(sektorid[key]);
            }
        }
        this.oigeSektor = this.sektorArray.filter(e => {
            return e.sektorNo === this.sectorNo;
        });
        //console.log( this.oigeSektor[1]);
        //return this.oigeSektor;
    }
    suurusklass() {
        for (let key in suurusgrupid) {
            if (suurusgrupid.hasOwnProperty(key)) {
                this.suurusArray.push(suurusgrupid[key]);
            }
        }
        this.oigeSuurus = this.suurusArray.filter(e => {
            return e.grupiNo === this.sizeNo;
        });
    }
    maakonnavalik() {
        for (let key in maakonnad) {
            if (maakonnad.hasOwnProperty(key)) {
                this.maakondArray.push(maakonnad[key]);
            }
        }
        this.oigeMaakond = this.maakondArray.filter(e => {
            return e.maakonnaNo === this.countNo;
        });
    }
    emtaktextvalik() {
        for (let key in emtakid) {
            if (emtakid.hasOwnProperty(key)) {
                this.emtaktextArray.push(emtakid[key]);
            }
        }
        this.oigeText = this.emtaktextArray.filter(e => {
            return e.EMTAK_txt === this.content1a;
        });
    }
    ngOnInit() {
        this.keerukam();
        this.suurusklass();
        this.maakonnavalik();
        this.emtaktextvalik();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: LahteinfoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: LahteinfoComponent, isStandalone: true, selector: "lahteinfo-component", ngImport: i0, template: "<div class=\"alert\">\r\n  <div class=\"header\">\r\n    <!--img class=\"icon\" src=\"icon0.svg\" /-->\r\n    <div class=\"title\">{{title}}</div>\r\n  </div>\r\n  <div class=\"content\">\r\n    <!--div class=\"body\">{{content1b}}</div-->\r\n    <!--div class=\"body\">{{content2}}</div-->\r\n  \r\n    <table id=\"tabel\">\r\n    \r\n    <tr *ngFor=\"let emid1 of oigeText\">\r\n    <td>{{content1b}}</td>\r\n    <td>{{emid1.NIMI_5}}</td>\r\n    </tr>\r\n    \r\n    </table>\r\n  \r\n    <table id=\"tabel\">\r\n    \r\n    <tr *ngFor=\"let sekid1 of oigeSektor\">\r\n    <td>{{content2}}</td>\r\n    <td>{{sekid1.sektorName}}</td>\r\n    </tr>\r\n    \r\n    </table>\r\n    \r\n    \r\n    \r\n    <div class=\"body\">{{content3b}}</div>\r\n  \r\n    <table id=\"tabel\">\r\n    \r\n    <tr *ngFor=\"let suurid1 of oigeSuurus\">\r\n    <td>{{content4}}</td>\r\n    <td>{{suurid1.grupiNimi}}</td>\r\n    </tr>\r\n    \r\n    </table>\r\n  \r\n    <table id=\"tabel\">\r\n    \r\n    <tr *ngFor=\"let countid1 of oigeMaakond\">\r\n    <td>{{content5}}</td>\r\n    <td>{{countid1.maakonnaNimi}}</td>\r\n    </tr>\r\n    \r\n    </table>\r\n  \r\n  \r\n    <!--div class=\"body\">{{content4}}</div-->\r\n    <!--div class=\"body\">{{content5}}</div-->\r\n    <div class=\"body\">{{content6b}}</div>\r\n  </div>\r\n  </div> \r\n  ", styles: [".alert,.alert *{box-sizing:border-box}.alert{background:var(--alerts-background-info, #eaf6ff);border-radius:var(--alerts-sizing-corner-radius, 4px);border-style:solid;border-color:var(--colors-status-info-border, #337bb5);border-width:1px;padding:var(--alerts-sizing-padding-y, 16px) var(--alerts-sizing-padding-x, 16px) var(--alerts-sizing-padding-y, 16px) var(--alerts-sizing-padding-x, 16px);display:flex;flex-direction:column;gap:var(--alerts-sizing-inner-spacing, 8px);align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;margin:60px 40px -80px}.header{padding:0 24px 0 0;display:flex;flex-direction:row;gap:var(--alerts-sizing-inner-spacing, 8px);align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative}.icon{flex-shrink:0;width:24px;height:24px;position:relative;overflow:visible}.title{color:var(--colors-status-info-text, #005aa3);text-align:left;font-family:var(--headings-large-h5-font-family, \"Roboto-Regular\", sans-serif);margin-left:3px;font-size:var(--headings-large-h5-font-size, 20px);line-height:var(--headings-large-h5-line-height, 120%);font-weight:var(--headings-large-h5-font-weight, 400);position:relative;flex:1;display:flex;align-items:center;justify-content:flex-start}.content{padding:0 16px 0 0;display:flex;flex-direction:column;gap:var(--alerts-sizing-inner-spacing, 8px);align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative}.body{color:var(--alerts-text-info, #005aa3);text-align:left;margin-left:3px;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:14px;line-height:var(--body-small-line-height, 171%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}#tabel{color:#005aa3}#tabel td{font-family:Roboto-Regular,Helvetica;font-weight:400;color:#005aa3;font-size:14px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: LahteinfoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lahteinfo-component', standalone: true, imports: [CommonModule], template: "<div class=\"alert\">\r\n  <div class=\"header\">\r\n    <!--img class=\"icon\" src=\"icon0.svg\" /-->\r\n    <div class=\"title\">{{title}}</div>\r\n  </div>\r\n  <div class=\"content\">\r\n    <!--div class=\"body\">{{content1b}}</div-->\r\n    <!--div class=\"body\">{{content2}}</div-->\r\n  \r\n    <table id=\"tabel\">\r\n    \r\n    <tr *ngFor=\"let emid1 of oigeText\">\r\n    <td>{{content1b}}</td>\r\n    <td>{{emid1.NIMI_5}}</td>\r\n    </tr>\r\n    \r\n    </table>\r\n  \r\n    <table id=\"tabel\">\r\n    \r\n    <tr *ngFor=\"let sekid1 of oigeSektor\">\r\n    <td>{{content2}}</td>\r\n    <td>{{sekid1.sektorName}}</td>\r\n    </tr>\r\n    \r\n    </table>\r\n    \r\n    \r\n    \r\n    <div class=\"body\">{{content3b}}</div>\r\n  \r\n    <table id=\"tabel\">\r\n    \r\n    <tr *ngFor=\"let suurid1 of oigeSuurus\">\r\n    <td>{{content4}}</td>\r\n    <td>{{suurid1.grupiNimi}}</td>\r\n    </tr>\r\n    \r\n    </table>\r\n  \r\n    <table id=\"tabel\">\r\n    \r\n    <tr *ngFor=\"let countid1 of oigeMaakond\">\r\n    <td>{{content5}}</td>\r\n    <td>{{countid1.maakonnaNimi}}</td>\r\n    </tr>\r\n    \r\n    </table>\r\n  \r\n  \r\n    <!--div class=\"body\">{{content4}}</div-->\r\n    <!--div class=\"body\">{{content5}}</div-->\r\n    <div class=\"body\">{{content6b}}</div>\r\n  </div>\r\n  </div> \r\n  ", styles: [".alert,.alert *{box-sizing:border-box}.alert{background:var(--alerts-background-info, #eaf6ff);border-radius:var(--alerts-sizing-corner-radius, 4px);border-style:solid;border-color:var(--colors-status-info-border, #337bb5);border-width:1px;padding:var(--alerts-sizing-padding-y, 16px) var(--alerts-sizing-padding-x, 16px) var(--alerts-sizing-padding-y, 16px) var(--alerts-sizing-padding-x, 16px);display:flex;flex-direction:column;gap:var(--alerts-sizing-inner-spacing, 8px);align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;margin:60px 40px -80px}.header{padding:0 24px 0 0;display:flex;flex-direction:row;gap:var(--alerts-sizing-inner-spacing, 8px);align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative}.icon{flex-shrink:0;width:24px;height:24px;position:relative;overflow:visible}.title{color:var(--colors-status-info-text, #005aa3);text-align:left;font-family:var(--headings-large-h5-font-family, \"Roboto-Regular\", sans-serif);margin-left:3px;font-size:var(--headings-large-h5-font-size, 20px);line-height:var(--headings-large-h5-line-height, 120%);font-weight:var(--headings-large-h5-font-weight, 400);position:relative;flex:1;display:flex;align-items:center;justify-content:flex-start}.content{padding:0 16px 0 0;display:flex;flex-direction:column;gap:var(--alerts-sizing-inner-spacing, 8px);align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative}.body{color:var(--alerts-text-info, #005aa3);text-align:left;margin-left:3px;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:14px;line-height:var(--body-small-line-height, 171%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}#tabel{color:#005aa3}#tabel td{font-family:Roboto-Regular,Helvetica;font-weight:400;color:#005aa3;font-size:14px}\n"] }]
        }], ctorParameters: () => [] });

const koostis = [
    {
        sektorSisu: "01111: Teravilja- (v.a riis) ja kaunviljakasvatus; õlitaimeseemnete kasvatus, 01131: Köögivilja- (sh kõrvitsaliste), juurvilja- ja mugulviljakasvatus, k.a seenekasvatus, 01161: Kiutaimekasvatus, 01191: Lillekasvatus, 01199: Söödakultuuri- ja heintaimekasvatus jm üheaastaste põllukultuuride kasvatus, 01211 Viinamarjakasvatus, 01231: Tsitruseliste kasvatus, 01241: Õun- ja luuviljaliste puuviljade kasvatus, 01251: Muu puuvilja-, marja- ning pähklikasvatus, 01261: Õlitaimekasvatus, 01271: Joogitaimekasvatus, 01281: Vürtsi-, maitse-, uimastavate taimede ja ravimtaimede kasvatus, 01291: Muude mitmeaastaste taimede kasvatus, 01301: Taimede paljundamine ja istikukasvatus",
        sektorNo: '1'
    },
    {
        sektorSisu: "01411: Piimakarjakasvatus, 01421: Muu veislaste ja pühvlikasvatus, 01431: Hobusekasvatus ja muude hobuslaste kasvatus, 01451: Lamba- ja kitsekasvatus, 01461: Seakasvatus, 01471: Kodulinnukasvatus, 01491: Mesindus, 01499: Muu loomakasvatus, 01501: Segapõllumajandus",
        sektorNo: '2'
    },
    {
        sektorSisu: '01611: Taimekasvatuse abitegevused, 01621: Loomakasvatuse abitegevused, 01631: Saagikoristusjärgsed tegevused, 01641: Seemnete töötlemine paljundamiseksc, 01701: Jahindus ja seda teenindavad tegevusalad',
        sektorNo: '3',
    },
    {
        sektorSisu: '02101: Metsakasvatus ja muud metsamajanduse tegevusalad, 02201: Metsaraie, 02202: Küttepuude tootmine, 02301: Looduslike materjalide kogumine, v.a puit',
        sektorNo: '4',
    },
    {
        sektorSisu: '02401: Metsamajandust abistavad tegevused',
        sektorNo: '5',
    },
    {
        sektorSisu: '03111: Merekalapüük, 03121: Mageveekalapüük, 03211: Mere-vesiviljelus, 03221: Magevee-vesiviljelus',
        sektorNo: '6',
    },
    {
        sektorSisu: '06101: Põlevkivi kaevandamine ja toornafta tootmine, 08111: Dekoratiiv- ja ehituskivi, lubjakivi, kipsi, kriidi ja kiltkivi kaevandamine, 08121: Kruusa- ja liivakarjääride tegevus; savi ja kaoliini kaevandamine, 08122: Killustiku tootmine, 08911: Kemikaalide ja mineraalväetiste toorme kaevandamine, 08921: Turba tootmine, 08991: Muu mujal liigitamata kaevandamine, 09101 :Nafta ja maagaasi tootmist abistavad tegevusalad, 09901: Muud kaevandamist abistavad tegevusalad',
        sektorNo: '7',
    },
    {
        sektorSisu: '10111: Liha töötlemine ja säilitamine, k.a tapamajade tegevus, 10121: Linnuliha töötlemine ja säilitamine, k.a sulgede tootmine, 10131: Liha- ja linnulihatoodete tootmine, 10201: Kala, vähilaadsete ja limuste töötlemine ja säilitamine, 10311: Kartuli töötlemine ja säilitamine, 10321: Puu- ja köögiviljamahla tootmine, 10391: Muu puu- ja köögivilja töötlemine ja säilitamine, 10411: Õli ja rasva tootmine, 10421: Margariini jms toidurasva tootmine, 10511: Värske piima töötlemine, rõõsa koore tootmine, 10512: Juustu- ja kohupiimatootmine, 10519: Muude piimatoodete tootmine, sh või tootmine, 10521: Jäätisetootmine, 10611: Jahu ja tangainete tootmine, k.a jahvatamine, 10711: Leiva- ja saiatootmine; säilitusaineteta pagaritoodete tootmine, 10721: Kuiviku- ja küpsisetootmine; säilitusainetega pagaritoodete tootmine, 10731: Makaronide, nuudlite, kuskussi jms makarontoodete tootmine, 10811: Suhkrutootmine, 10821: Kakao, šokolaadi ja suhkrukondiitritoodete tootmine, 10831: Tee ja kohvi töötlemine, 10841: Maitseainete ja -kastmete tootmine, 10851: Valmistoitude tootmine, 10861: Homogeenitud toiduainete ja dieettoitude tootmine, 10891: Mujal liigitamata toiduainete tootmine, 10911: Valmissööda tootmine loomakasvatusele, 10921: Lemmikloomade valmistoidu tootmine',
        sektorNo: '8',
    },
    {
        sektorSisu: '11011: Kange alkoholi destilleerimine, rektifitseerimine ja segamine, 11021: Viinamarjaveini tootmine, 11031: Siidri ja muu marja- ja puuviljaveini tootmine, 11041: Muude destilleerimata kääritatud jookide tootmine, 11051: Õlletootmine, 11061: Linnasetootmine, 11071: Alkoholivaba joogi tootmine; mineraalvee ja muu villitud vee tootmine',
        sektorNo: '9',
    },
    {
        sektorSisu: '13101;10;Tekstiilkiudude ettevalmistamine ja ketramine, 13201: Riidekudumine, 13301: Tekstiili viimistlemine, 13911: Silmkoe- ja heegelkanga (trikookanga) tootmine, 13921: Kodutekstiili tootmine, sh voodipesu, köögirätikud, kardinad, akna sisekatted jm eesriided, 13929: Muude valmis tekstiiltoodete tootmine, 13931: Vaipade ja vaipkatete tootmine, 13941: Nööri, köie ja võrgulina tootmine, 13951: Lausriide ja lausriidest toodete tootmine, v.a rõivad, 13961: Tehnilise ja tööstusliku otstarbega tekstiilide tootmine, 13991: Mujal liigitamata tekstiilitootmine, sh kaunistusnööri-, tülli-, pitsi-, paela- ja tikanditootmine',
        sektorNo: '10',
    },
    {
        sektorSisu: '14111: Nahkrõivaste tootmine, 14121: Töörõivaste tootmine, 14131: Muude pealisrõivaste tootmine, k.a rätsepatöö, 14141: Alusrõivaste tootmine, sh T-särkide, päevasärkide, hommikumantlite, öösärkide jms tootmine, 14191: Peakatete valmistamine, k.a karusnahast, 14199: Muude mujal liigitamata rõivaste ja rõivalisandite tootmine, 14201: Karusnahatoodete tootmine (v.a mütsid ja kindad), 14311 Suka- ja sokitootmine, 14391: Muude silmkoe- ja heegelrõivaste tootmine, nt pulloverid, kampsunid jms tooted, 15111: Nahatöötlemine ja -parkimine; karusnaha töötlemine ja värvimine, 15121: Kohvrite, käekottide jms kaupade tootmine, 15122: Sadulsepatoodete tootmine (sadulad, hobuserakmed jm), 15129: Muude nahktoodete tootmine',
        sektorNo: '11',
    },
    {
        sektorSisu: '16101: Saematerjali tootmine, 16102: Puidu kuivatus, immutamine ja keemiline töötlus, 16109: Muude puidutöötlemissaaduste tootmine, sh hakkepuit, puitvill jms, 16211: Spooni ja vineeri tootmine, 16212: Puitlaast- ja puitkiudplaadi tootmine, 16219: Muude puitplaatide tootmine, 16221: Kilpparketi tootmine, 16231: Puidust uste, akende, aknaluukide ja nende raamide tootmine (k.a väravad), 16232: Kokkupandavate puitehitiste (saunad, suvilad, majad) ja nende elementide tootmine, 16239: Muude ehituspuusepa- ja tisleritoodete tootmine, 16241: Puittaara ja puitaluste tootmine, 16291: Puidust tarbe- ja dekoratiivesemete jm puittoodete tootmine, 16292: Korgist, õlest ja punumismaterjalist toodete tootmine',
        sektorNo: '12',
    },
    {
        sektorSisu: '17111: Paberimassi tootmine, 17121: Paberi- ja papitootmine, 17211: Lainepaberi ja -papi ning paber- ja papptaara tootmine, 17221: Paberist kodu- ja hügieenitarvete, k.a tekstiilvati ja vatist toodete tootmine, 17231: Paberist kirjatarvete tootmine, 17241: Tapeeditootmine, 17291: Muude paber- ja papptoodete tootmine',
        sektorNo: '13',
    },
    {
        sektorSisu: '18111: Ajalehtede trükkimine, 18121: Raamatute trükkimine, 18122: Perioodikaväljaannete, ärikataloogide, reklaammaterjalide, äriblankettide jm kontoritarvete trükkimine, 18129: Mujal liigitamata trükkimine, k.a siiditrükk, 18131: Trükieelne tegevus, 18141: Köitmine ja selle sidusalad, 18201: Salvestiste paljundus',
        sektorNo: '14',
    },
    {
        sektorSisu: '19101: Koksitootmine, 19201: Puhastatud naftatoodete (sh turbabriketi) tootmine, 20111: Tööstusgaaside tootmine, 20121: Värvainete ja pigmentide tootmine, 20131: Muude anorgaaniliste põhikemikaalide tootmine, 20141: Muude orgaaniliste põhikemikaalide tootmine, 20151: Väetiste ja lämmastikuühendite tootmine, 20161: Plasti tootmine algkujul, 20201: Taimekaitsevahendite ja muude agrokeemiatoodete tootmine, 20210: Taimekaitsevahendite ja muude agrokeemiatoodete tootmine, 20301: Värvide, lakkide ja muude viimistlusvahendite ning trükivärvide ja mastiksite tootmine, 20411: Seebi, pesemis-, puhastus- ja poleervahendite tootmine, 20421: Parfüümide ja tualetitarvete tootmine, 20511: Lõhkeaine tootmine, 20521: Liimitootmine, 20531: Eeterlike õlide tootmine, 20591: Mujal liigitamata keemiatoodete tootmine, 21101: Põhifarmaatsiatoodete tootmine, 21201: Ravimite jm farmaatsiatoodete tootmine',
        sektorNo: '15',
    },
    {
        sektorSisu: '22111: Kummirehvide ja sisekummide tootmine; kummirehvide protekteerimine ja taastamine, 22191: Kummiplaatide, -lehtede, -torude, -voolikute jms tootmine, 22199: Mujal liigitamata kummitoodete tootmine, 22211: Plastplaatide, -lehtede, -profiilide, -torude, -voolikute, -liitmike jms toodete tootmine, 22221: Plasttaara tootmine, 22231: Plastist sanitaarseadmete tootmine (vannid, kraanikausid jne), 22232: Plastuste, -akende, -vaheseinte jms tootmine, 22239: Muude plastist ehitustoodete tootmine, 22291: Muude plasttoodete tootmine',
        sektorNo: '16',
    },
    {
        sektorSisu: '23121: Lehtklaasi vormimine ja töötlemine, 23131: Klaasnõude jm sisekujunduses kasutatavate klaasesemete tootmine, 23141: Klaastaara tootmine, 23132: Klaaskiutootmine, 23191: Klaasist ehitusmaterjalide tootmine, 23199: Muude klaastoodete ja tehnilise klaasi tootmine, 23201: Tulekindlate toodete tootmine, 23311: Keraamiliste kivide ja plaatide tootmine, 23321: Põletatud savist telliste, kivide ja muude ehitustoodete tootmine, 23411: Kodu- ja ehiskeraamika tootmine, 23421: Keraamiliste sanitaarseadmete tootmine, 23441: Muu tehnilise keraamika tootmine, 23491: Muu keraamika tootmine, 23511: Tsemenditootmine, 23521: Lubja- ja kipsitootmine, 23611: Kokkupandavate betoonehitiste ja nende elementide tootmine, 23619: Betoonist muude ehitustoodete tootmine, 23631: Valmis betoonisegu tootmine, 23641: Mörditootmine, 23691: Muude betoon-, kips- ja tsementtoodete tootmine, 23701: Looduskivist hauakivide, -plaatide jms valmistamine, 23702: Paekivist ja dolomiidist ehitusmaterjalide jm toodete tootmine, 23709: Graniidist, marmorist jm looduslikust kivist toodete tootmine, 23911: Abrasiivtoodete tootmine, 23991: Mujal liigitamata muude mittemetalsetest mineraalidest toodete tootmine',
        sektorNo: '17',
    },
    {
        sektorSisu: '24101: Raua, terase ja ferrosulamite tootmine, 24201: Terastorude, -õõnesprofiilide tootmine, 24311: Külmvormimine ja -painutamine, 24331: Külmtõmbamine lattideks, 24411: Väärismetallitootmine, 24421: Alumiiniumitootmine, 24431: Plii-, tsingi- ja tinatootmine, 24451: Muude mitteraudmetallide tootmine, 24511: Malmivalu, 24521: Terasevalu, 24531: Kergmetallide valu, 24541: Muude mitteraudmetallide valu, 25111: Kokkupandavate metallehitiste tootmine, 25119: Muude metallkonstruktsioonide ja nende osade tootmine, 25121: Metalluste ja -akende tootmine, 25211: Keskkütteradiaatorite ja keskkütte-kuumaveekatelde tootmine, 25291: Muude metallpaakide, -reservuaaride ja -mahutite tootmine, 25301: Aurukatelde tootmine, 25501: Metalli sepistamine, pressimine, stantsimine ja rullvaltsimine; pulbermetallurgia, 25611: Metallitöötlus ja metallpindade katmine, 25621: Mehaaniline metallitöötlus, 25711: Lõike- ja söögiriistade tootmine, 25721: Lukkude ja hingede tootmine, 25731: Valuvormide tootmine, 25739: Muude tööriistade tootmine, 25911: Terasvaatide jms mahutite tootmine, 25921: Kergmetalltaara tootmine, 25931: Traaditoodete, kettide ja vedrude tootmine, 25941: Kinnituselementide ja keermestatud toodete tootmine, 25991: Mujal liigitamata metalltoodete tootmine, 25401: Relva- ja laskemoonatootmine',
        sektorNo: '18',
    },
    {
        sektorSisu: '26111: Elektronkomponentide tootmine, 26121: Trükkplaatide tootmine, 26201: Arvutite ja arvuti välisseadmete tootmine, 26301: Sideseadmete tootmine, 26401: Tarbeelektroonika tootmine, 27321: Muu elektroonika ja elektrijuhtme või -kaabli tootmine, 26511: Mõõte-, katse- ja navigatsiooniseadmete tootmine, 26521: Ajanäitajate tootmine, 26601: Kiiritus-, elektromeditsiini- ja elektroteraapiaseadmete tootmine, 26701: Optikainstrumentide ja fotoseadmete tootmine, 26801: Magnetandmekandjate ja optiliste andmekandjate tootmine',
        sektorNo: '19',
    },
    {
        sektorSisu: '27111: Elektrimootorite, -generaatorite ja trafode tootmine, 27121: Elektrijaotusseadmete ja juhtaparatuuri tootmine, 27901: Muude elektriseadmete tootmine, 27201: Patareide ja akude tootmine, 27331: Juhtmestiku tarvikute tootmine, 27401: Elektriliste valgustusseadmete tootmine, 27511: Elektriliste kodumasinate tootmine, 27521: Mitteelektriliste kodumasinate tootmine',
        sektorNo: '20',
    },
    {
        sektorSisu: '28111: Mootorite ja turbiinide tootmine, v.a õhu- ja mootorsõidukite ning mootorrataste mootorid, 28121: Hüdrauliliste ja pneumaatiliste jõuseadmete tootmine, 28131: Muude pumpade ja kompressorite tootmine, 28141: Muude kraanide ja ventiilide tootmine, 28151: Laagrite, ajamite, hammasülekannete ja ülekandeelementide tootmine, 28211: Ahjude, tööstusahjude ja ahjupõletite tootmine, 28221: Tõste- ja teisaldusseadmete tootmine, 28231: Kontorimasinate ja -seadmete tootmine, v.a arvutid ja arvuti välisseadmed, 28241: Ajamiga käsi-tööriistade tootmine, 28251: Tööstuslike külmutus- ja ventilatsiooniseadmete tootmine, 28291: Mujal liigitamata üldmasinate ja mehhanismide tootmine, 28301: Põllu- ja metsamajandusmasinate tootmine, 28411: Metallistantside tootmine, 28491: Muude tööpinkide tootmine, 28911: Metallurgiamasinate tootmine, 28921: Kaevandus-, karjääri- ja ehitusmasinate tootmine, 28931: Toiduaine-, joogi- ja tubakatööstusmasinate tootmine, 28941: Tekstiili-, rõiva- ja nahatööstusmasinate tootmine, 28951: Paberi- ja papitööstusmasinate tootmine, 28961: Plasti- ja kummitööstusmasinate tootmine, 28991: Mujal liigitamata erimasinate tootmine',
        sektorNo: '21',
    },
    {
        sektorSisu: '29101: Mootorsõidukite tootmine, 29201: Mootorsõidukikerede tootmine, 29202: Haagiste, poolhaagiste ning konteinerite tootmine, 29311: Mootorsõidukite elektri- ja elektroonikaseadmete tootmine, 29321: Mootorsõidukite muude osade ja lisaseadmete tootmine',
        sektorNo: '22',
    },
    {
        sektorSisu: '30111: Laevade ehitus, 30112: Ujuvkonstruktsioonide ehitus, 30121: Lõbusõidu- ja sportpaatide ehitus, 30201: Raudteevedurite ja -veeremi tootmine, 30301: Õhu- ja kosmosesõidukite jms tootmine, 30911: Mootorrataste tootmine, 30921: Jalgrataste ja invasõidukite tootmine, 30991: Muude mujal liigitamata transpordivahendite tootmine',
        sektorNo: '23',
    },
    {
        sektorSisu: '31011: Kontori- ja kauplusemööbli tootmine, 31021: Köögimööbli tootmine, 31031: Madratsitootmine, 31091: Mujal liigitamata mööbli tootmine, 31092: Mööbliosade tootmine',
        sektorNo: '24',
    },
    {
        sektorSisu: '32121: Väärisesemete jms toodete tootmine, 32131: Juveeltoodete imitatsioonide jms tootmine, 32201: Muusikariistade tootmine, 32301: Sporditarvete tootmine, 32401: Mängude ja mänguasjade tootmine, 32501: Ortopeediliste abivahendite ja nende osade tootmine, 32502: Prillide, läätsede ja nende osade tootmine, 32509: Muu meditsiini- ja hambaraviinstrumentide ning materjalide tootmine, 32911: Harja-, pintsli- ja luuatootmine, 32991: Muu mujal liigitamata tootmine',
        sektorNo: '26',
    },
    {
        sektorSisu: '33111: Metalltoodete remont, 33121: Masinate ja seadmete remont, 33131: Elektroonika- ja optikaseadmete remont, 33141: Elektriseadmete remont, 33151: Laevade ja paatide remont ja hooldus, 33161: Õhu- ja kosmosesõidukite remont ja hooldus, 33171: Muude transpordivahendite remont ja hooldus, 33191: Muude seadmete remont',
        sektorNo: '27',
    },
    {
        sektorSisu: '33201 Tööstuslike masinate ja seadmete paigaldus',
        sektorNo: '28',
    },
    {
        sektorSisu: '35111: Elektrienergia tootmine mittetaastuvast energiaallikast, 35112: Elektrienergia tootmine hüdroenergiast, 35113: Elektrienergia tootmine tuuleenergiast, 35119: Muu elektrienergia tootmine (sh biomassist), 35121: Elektrienergia ülekanne, 35131: Elektrienergia jaotus, 35141: Elektrienergia müük, 35211: Gaasitootmine, 35221: Maagaasi ülekanne ja jaotus maagaasivõrgu kaudu, 35231: Gaasimüük magistraalvõrkude kaudu, 35301 Auru ja konditsioneeritud õhuga arustamine',
        sektorNo: '29',
    },
    {
        sektorSisu: '36001: Veekogumine, -töötlus ja -varustus, 37001: Kanalisatsioon ja heitveekäitlus',
        sektorNo: '30',
    },
    {
        sektorSisu: "38111: Tavajäätmete kogumine, 38121: Ohtlike jäätmete kogumine, 38211: Tavajäätmete töötlus ja kõrvaldus, 38221: Ohtlike jäätmete töötlus ja kõrvaldus, 38311: Vrakkide demonteerimine, 38321: Sorteeritud materjali taaskasutusele võtmine, 39001: Saastekäitlus ja muud jäätmekäitlustegevused",
        sektorNo: '31'
    },
    {
        sektorSisu: "41101: Hoonestusprojektide arendus, 41201: Elamute ja mitteeluhoonete ehitus",
        sektorNo: '32'
    },
    {
        sektorSisu: "42111: Teede ja kiirteede ehitus, 42121: Raudteede ja metroo ehitus, hooldus ja remont, 42131: Silla- ja tunneliehitus, 42211: Vee-, gaasi- ja kanalisatsioonitrasside ehitus, 42212: Kaevude ja puuraukude rajamine ning likvideerimine, 42221: Elektri- ja sidevõrkude ehitus, 42911: Vesiehitus, 42991: Mujal liigitamata rajatiste ehitus",
        sektorNo: '33'
    },
    {
        sektorSisu: "43111: Lammutamine, 43121: Ehitusplatside ettevalmistus ja puhastus, 43122: Maakuivendus- ja maaparandustööd, k.a metsa- ja põllumaade kuivendus, 43129: Muud kaeve- ja mullatööd, 43131: Kontrollpuurimine ja sondimine, 43211: Elektrijuhtmete ja -seadmete paigaldus, 43212: Tulekahjualarmide, häire- ja valvesignalisatsiooni paigaldus, 43213: Telekommunikatsioonikaablite ja antennide paigaldus, 43221: Kütte-, ventilatsiooni- ja kliimaseadmete paigaldus, 43222: Veetorustiku ja sanitaarseadmete paigaldus, 43291: Isolatsioonitööd, 43299: Mujal liigitamata ehituspaigaldustööd, 43311: Krohvimine, 43321: Mistahes materjalist akende, uste ja treppide paigaldus, 43329: Muude ehituspuusepatoodete paigaldus, 43331: Põranda- ja seinakatete paigaldus, 43341;34;Värvimine ja klaasimine, 43391: Muu ehitiste viimistlus ja lõpetamine, 43911: Katusetööd, 43991;34;Vundamendi-, betooni- jm müüritööd, 43992: Pottsepatööd. Ahjude ja kaminate tegemine, k.a tööstuskorstnate ja -ahjude ladumine, 43993: Tellingute ja tööplatvormide püstitus ja demonteerimine. Ehitus- ja tõsteseadmete rentimine koos operaatoriga, 43999: Muud eriehitustööd",
        sektorNo: '34'
    },
    {
        sektorSisu: "45111: Sõiduautode ja väikebusside (täismassiga alla 3,5 t) müük, 45191: Muude mootorsõidukite müük, 45201: Mootorsõidukite hooldus ja remont, 45202: Autopesu jms teenindus, 45311: Mootorsõidukite osade ja lisaseadmete hulgimüük, 45321: Mootorsõidukite osade ja lisaseadmete jaemüük, 45401: Mootorrataste, nende osade ja lisaseadmete müük, hooldus ja remont",
        sektorNo: '35'
    },
    {
        sektorSisu: '46111: Põllumajandustoorme, elusloomade, tekstiilitoorme ja pooltoodete vahendamine, 46121: Kütuste, maakide, metallide ja tööstuskemikaalide vahendamine, 46131: Puidu ja ehitusmaterjalide vahendamine, 46141: Masinate, tööstusseadmete, laevade ja õhusõidukite vahendamine, 46151: Mööbli, kodutarvete ja rauakaupade vahendamine, 46161: Tekstiili, rõivaste, jalatsite ja nahktoodete vahendamine, 46171: Toidukaupade, jookide ja tubakatoodete vahendamine, 46181: Muude kindlate kaupade vahendamine, 46191: Mitmesuguste erinevate kaupade vahendamine',
        sektorNo: '36',
    },
    {
        sektorSisu: '46211: Teravilja, töötlemata tubaka, seemnete ja loomasööda hulgimüük, 46221: Lillede ja taimede hulgimüük, 46231: Elusloomade hulgimüük, 46241: Toor- ja parknaha hulgimüük, 46311: Puu- ja köögivilja hulgimüük, 46321: Liha ja lihatoodete hulgimüük, 46331: Piimatoodete, munade, toiduõli ja -rasva hulgimüük, 46341: Alkohoolsete jookide hulgimüük, 46342: Muude jookide hulgimüük. 46351: Tubakatoodete hulgimüük, 46361: Suhkru, šokolaadi, kondiitri- ja pagaritoodete hulgimüük, 46371: Kohvi, tee, kakao ja maitseainete hulgimüük, 46381: Kalade, vähilaadsete ja kalatoodete hulgimüük, 46389: Mujal liigitamata toidukaupade hulgimüük, 46391: Toidukaupade, jookide ja tubakatoodete spetsialiseerimata hulgimüük',
        sektorNo: '37',
    },
    {
        sektorSisu: '46411: Kangaste, kodutekstiili ja õmblustarvete hulgimüük, 46421: Rõivaste ja rõivalisandite hulgimüük, 46422: Jalatsite hulgimüük, 46431: Elektriliste kodumasinate hulgimüük, 46441: Portselani ja klaastoodete hulgimüük, 46442: Puhastusvahendite hulgimüük, 46451: Parfüümide ja kosmeetika hulgimüük, 46461: Ravimite ja muude apteegikaupade hulgimüük, 46462: Meditsiiniseadmete ja kirurgiriistade ning ortopeediliste abivahendite hulgimüük, 46471: Mööbli, vaipade ja valgustite hulgimüük, 46481: Kellade ja ehete hulgimüük, 46491: Paberi, kirjatarvete, raamatute ja ajakirjandusväljaannete hulgimüük, 46492: Spordikaupade hulgimüük (v.a spordirõivad ja vabaajajalatsid), 46493: Mängude ja mänguasjade hulgimüük, 46499: Mujal liigitamata kodutarvete hulgimüük',
        sektorNo: '38',
    },
    {
        sektorSisu: '46511: Arvutite, arvuti välisseadmete ja tarkvara hulgimüük, 46521: Elektroonika- ja telekommunikatsiooniseadmete ning nende osade hulgimüük',
        sektorNo: '39',
    },
    {
        sektorSisu: '46611: Põllumajandusmasinate, -seadmete ja lisaseadmete hulgimüük, 46621: Tööpinkide hulgimüük, 46631: Kaevandus- ja ehitusmasinate hulgimüük, 46641: Tekstiilitööstus-, õmblus- ja kudumismasinate hulgimüük, 46651: Kontorimööbli hulgimüük, 46661: Muude kontorimasinate ja -seadmete hulgimüük, 46691: Tõste- ja teisaldusseadmete ja -masinate ning nende varuosade hulgimüük (k.a konteinerid), 46692: Elektrimaterjalide, -tarvikute ja -seadmete hulgimüük, sh kaablid, 46693: Toiduainetööstus- ja kaubandusseadmete hulgimüük, 46699: Muude üld- ja eriotstarbeliste masinate ja seadmete hulgimüük',
        sektorNo: '40',
    },
    {
        sektorSisu: '46711: Tahkekütuse hulgimüük, 46712: Mootorikütuse hulgimüük, 46719: Muu vedel- ja gaaskütuse jms hulgimüük, 46721: Metallide ja metallimaakide hulgimüük, 46731: Puidu ja puidu esmatöötlustoodete hulgimüük, 46732: Sanitaarseadmete jm ehitusmaterjalide hulgimüük, 46741: Veevarustus- ja kütteseadmete ning nende koosteosade hulgimüük, 46749: Tööriistade jm rauakaupade hulgimüük, 46751: Väetise ja agrokeemiatoodete hulgimüük, 46759: Muude keemiatoodete hulgimüük, 46761: Muude vahetoodete hulgimüük, 46771: Jäätmete ja jääkide hulgikaubandus, taara ja pakendite kokkuost',
        sektorNo: '41',
    },
    {
        sektorSisu: '46901: Spetsialiseerimata hulgikaubandus',
        sektorNo: '42',
    },
    {
        sektorSisu: '47111: Jaemüük spetsialiseerimata kauplustes, kus on ülekaalus toidukaubad, joogid ja tubakatooted, 47191: Jaemüük muudes spetsialiseerimata kauplustes',
        sektorNo: '43',
    },
    {
        sektorSisu: '47211: Puu- ja köögivilja jaemüük spetsialiseeritud kauplustes, 47221: Liha ja lihatoodete jaemüük spetsialiseeritud kauplustes, 47231: Kala, vähilaadsete ja limuste jaemüük spetsialiseeritud kauplustes, 47241: Leivatoodete, kookide, jahu- ja suhkrukondiitritoodete jaemüük spetsialiseeritud kauplustes, 47251: Jookide jaemüük spetsialiseeritud kauplustes, 47261: Tubakatoodete jaemüük spetsialiseeritud kauplustes, 47291: Muu toidukaupade jaemüük spetsialiseeritud kauplustes',
        sektorNo: '44',
    },
    {
        sektorSisu: '47301: Mootorikütuse jaemüük, sh tanklate tegevus',
        sektorNo: '45',
    },
    {
        sektorSisu: '47411: Arvutite, arvuti välisseadmete ja tarkvara jaemüük spetsialiseeritud kauplustes, 47421: Telekommunikatsiooniseadmete jaemüük spetsialiseeritud kauplustes, 47431: Heli- ja videoseadmete jaemüük spetsialiseeritud kauplustes',
        sektorNo: '46',
    },
    {
        sektorSisu: '47511: Tekstiiltoodete jaemüük spetsialiseeritud kauplustes, 47521: Rauakaupade ja tööriistade jaemüük spetsialiseeritud kauplustes, 47522: Veevarustus- ja sanitaarseadmete ning nende koosteosade jaemüük spetsialiseeritud kauplustes, 47529: Muude ehitusmaterjalide ja -tarvete jaemüük spetsialiseeritud kauplustes, 47531: Vaipade, mattide, seina-, põranda- ja aknakatete jaemüük spetsialiseeritud kauplustes, 47541: Elektriliste kodumasinate jaemüük spetsialiseeritud kauplustes, 47591: Mööbli ja valgustite jaemüük spetsialiseeritud kauplustes, 47599: Muude mujal liigitamata kodutarvete jaemüük spetsialiseeritud kauplustes',
        sektorNo: '47',
    },
    {
        sektorSisu: '47611: Raamatute jaemüük spetsialiseeritud kauplustes, 47621: Ajalehtede ja kirjatarvete jaemüük spetsialiseeritud kauplustes, 47631: Muusika- ja videosalvestiste jaemüük spetsialiseeritud kauplustes, 47641: Sporditarvete jaemüük spetsialiseeritud kauplustes, 47651: Mängude ja mänguasjade jaemüük spetsialiseeritud kauplustes, 47711: Rõivaste jaemüük spetsialiseeritud kauplustes, 47721: Jalatsite ja nahktoodete jaemüük spetsialiseeritud kauplustes, 47731: Apteekide tegevus, 47741: Meditsiini- ja ortopeediakaupade jaemüük spetsialiseeritud kauplustes, 47751: Kosmeetika ja tualetitarvete jaemüük spetsialiseeritud kauplustes, 47761: Lillede, taimede, seemnete ja istikute ning väetise jaemüük spetsialiseeritud kauplustes, 47762: Lemmikloomade ja -lindude ning nende toidu ja tarvete jaemüük spetsialiseeritud kauplustes, 47771: Kellade ja ehete jaemüük spetsialiseeritud kauplustes, 47781: Prillide jm optikakaupade jaemüük spetsialiseeritud kauplustes, 47782: Fotokaupade jaemüük spetsialiseeritud kauplustes, 47783: Meenete, kunstiesemete ja -tarvete jaemüük spetsialiseeritud kauplustes, 47789: Mujal liigitamata kaupade jaemüük spetsialiseeritud kauplustes, 47791: Antiikesemete jaemüük kauplustes, 47792: Kasutatud raamatute jaemüük kauplustes, 47799: Muude kasutatud kaupade jaemüük kauplustes',
        sektorNo: '48',
    },
    {
        sektorSisu: '47811: Toidukaupade, jookide ja tubakatoodete jaemüük kioskites ja turgudel, 47821: Tekstiili, rõivaste ja jalatsite jaemüük kioskites ja turgudel, 47891: Muude kaupade jaemüük kioskites ja turgudel',
        sektorNo: '49',
    },
    {
        sektorSisu: '47911: Jaemüük posti või Interneti teel, 47991: Muu jaemüük väljaspool kauplusi, kioskeid ja turge',
        sektorNo: '50',
    },
    {
        sektorSisu: '49101: Sõitjate raudteevedu, 49201: Kauba raudteevedu, 49311: Sõitjate regulaarvedu trammi ja trollibussiga, 49319: Sõitjate muu kohalik liinivedu, 49321: Taksovedu, 49391: Sõitjate maakondadevaheline ja rahvusvaheline liinivedu, 49399; Sõitjate muu maismaavedu',
        sektorNo: '51',
    },
    {
        sektorSisu: '49411: Kaubavedu maanteel, 49421: Kolimisteenused',
        sektorNo: '52',
    },
    {
        sektorSisu: '50101: Sõitjatevedu merel ja rannavetes, 50301: Sõitjatevedu sisevetel, 50201: Kaubavedu merel ja rannavetes, 50202: aevade pukseerimine jms, 50401: Kaubavedu sisevetel',
        sektorNo: '53',
    },
    {
        sektorSisu: '51101: Sõitjate õhutransport, 51211: Kauba õhutransport',
        sektorNo: '54',
    },
    {
        sektorSisu: '52101: Kaubaladude töö, 52102: Vedelike ja gaaside ladustamine',
        sektorNo: '55',
    },
    {
        sektorSisu: '52211: Parklate tegevus, 52219: Muud maismaaveondust teenindavad tegevusalad, 52221: Sadamate töö ja veeteede kasutamisega seotud tegevused, 52229: Muud veetransporti teenindavad tegevusalad, 52231: Lennuväljade ja lennujaama reisiterminalide töö, 52239: Muud õhutransporti teenindavad tegevusalad, 52241: Laadungikäitlus, 52291: Veoste ekspedeerimine, 52292: Mere-lastiveo organiseerimine, laevade agenteerimine, 52293: Tolliagentide tegevus, 52299: Mujal liigitamata veondust abistavad tegevused',
        sektorNo: '56',
    },
    {
        sektorSisu: '53101: Universaalne postiteenus, 53201: Muu posti- ja kullerteenused',
        sektorNo: '57',
    },
    {
        sektorSisu: '55101: Hotellid, 55102: Motellid jms majutus, 55103: Külalistemajad, 55201: Hostelid, 55202: Puhkemaja, 55203;: Puhkeküla ja puhkelaager, 55204: Külaliskorter, 55205: Kodumajutus, 55301: Laagriplatsid, vagunelamute ja haagissuvilate parkimisplatsid, 55901 Muu majutus',
        sektorNo: '58',
    },
    {
        sektorSisu: '56101: Restoranid jm toitlustuskohad, 56211: Toitlustamine üritustel, 56291: Muu toitlustamine, 56301: Jookide serveerimine',
        sektorNo: '59',
    },
    {
        sektorSisu: '58111: Raamatukirjastamine, 58112: Õpikute, sõnaraamatute jm teatmeteoste kirjastamine, 58121: Kataloogide ja aadressiraamatute kirjastamine, 58131: Ajalehtede kirjastamine, 58141: Ajakirjade jm perioodika kirjastamine, 58191: Muu kirjastamine, 58211: Arvutimängude kirjastamine, 58291: Muu tarkvara kirjastamine',
        sektorNo: '60',
    },
    {
        sektorSisu: '59111: Kinofilmide ja videote tootmine, 59112: Telesaadete tootmine, 59121: Kinofilmide, videote ja telesaadete tootmisjärgsed tegevusalad, 59131: Kinofilmide, videote ja telesaadete levitamine, 59141: Kinofilmide linastamine, 59201: Helisalvestiste ja muusika kirjastamine, 60101: Raadioteenused, 60201: Televisiooniteenused ehk lineaarsed audiovisuaalmeedia teenused',
        sektorNo: '61',
    },
    {
        sektorSisu: '61101: Elektroonilise side teenused fikseeritud sidevõrgus, 61201: Elektroonilise side teenused traadita sidevõrgus, 61301: Satelliitsideteenused, 61901: Elektroonilise side muud teenused',
        sektorNo: '62',
    },
    {
        sektorSisu: '62011: Programmeerimine, 62021: Arvutialased konsultatsioonid, 62031: Arvutisüsteemide ja andmebaaside haldus, 62091: Muud infotehnoloogia- ja arvutialased tegevused',
        sektorNo: '63',
    },
    {
        sektorSisu: '63111: Andmetöötlus, veebihosting jms tegevused, 63121: Veebiportaalide tegevus, 63911: Uudisteagentuuride tegevus, 63991: Mujal liigitamata infoalane tegevus',
        sektorNo: '64',
    },
    {
        sektorSisu: '64191: Krediidiasutused (pangad), 64201: Valdusfirmade tegevus, 64301: Usaldusfondide, investeerimisfondide ja sarnaste finantsüksuste investeerimine võlakirjadesse, väärtpaberitesse jms finantsvahenditesse, 64921: Kapitalirent, 64929: Pandimajad, 64911: Muu laenuandmine, v.a pandimajad, 64991: Muude mujal liigitamata finantsteenuste osutamine, v.a kindlustus ja pensionifondid, 65111: Elukindlustus, 65121: Kahjukindlustus, 66111: Finantsturgude haldamine, 66121: Väärtpaberite ja kaubalepingute maaklerlus, 66129: Valuutavahetus, 66191: Finantsnõustamine, 66199: Muud mujal liigitamata finantsteenuste abitegevusalad, 66211: Riskide ja kahju hindamine, 66221: Kindlustusagentide ja -vahendajate tegevus, 66291: Muud kindlustuse ja pensionifondide abitegevusalad, 66301: Fondide valitsemine',
        sektorNo: '65',
    },
    {
        sektorSisu: '68101: Enda kinnisvara ost ja müük, 68201: Enda või renditud kinnisvara üürileandmine ja käitus, 68311: Kinnisvarabüroode tegevus, 68321: Hoonete ja üürimajade haldus (korteriühistud, elamuühistud, hooneühistud jms), 68322: Aiandus- ja suvilaühistute jms haldus, 68329: Muu kinnisvarahaldus või haldusega seotud tegevused',
        sektorNo: '66',
    },
    {
        sektorSisu: '69101: Advokaatide ja advokaadibüroode tegevus, 69102: Õigusnõustajate ja õigusbüroode tegevus, 69109: Muud juriidilised toimingud',
        sektorNo: '67',
    },
    {
        sektorSisu: '69201: Auditeerimine, 69202: Raamatupidamine, maksualane nõustamine',
        sektorNo: '68',
    },
    {
        sektorSisu: '70101: Peakontorite tegevus',
        sektorNo: '69',
    },
    {
        sektorSisu: '70211: Suhtekorraldus ja teabevahetus, 70221: Ärinõustamine jm juhtimisalane nõustamine',
        sektorNo: '70',
    },
    {
        sektorSisu: '71111: Arhitektitegevused, 71121: Ehituslik insener-tehniline projekteerimine ja nõustamine, 71122: Geoloogilised ja geodeetilised uurimistööd, 71129: Muud insener-tehnilised tegevusalad',
        sektorNo: '71',
    },
    {
        sektorSisu: '71201: Autode tehniline ülevaatus, 71209 Muu teimimine ja analüüs',
        sektorNo: '72',
    },
    {
        sektorSisu: '72111: Teadus- ja arendustegevus biotehnoloogia vallas, 72191: Teadus- ja arendustegevus muude loodus- ja tehnikateaduste vallas, 72201: Teadus- ja arendustegevus sotsiaal- ja humanitaarteaduste vallas',
        sektorNo: '73',
    },
    {
        sektorSisu: '73111: Reklaamiagentuurid, 73121: Reklaami vahendamine meedias, 73201: Turu-uuringud ja avaliku arvamuse küsitlused',
        sektorNo: '74',
    },
    {
        sektorSisu: '74101: Disainerite tegevus',
        sektorNo: '75',
    },
    {
        sektorSisu: '74201: Fotograafia',
        sektorNo: '76',
    },
    {
        sektorSisu: '74301: Kirjalik ja suuline tõlge, 74901: Muu mujal liigitamata kutse-, teadus- ja tehnikaalane tegevus',
        sektorNo: '77',
    },
    {
        sektorSisu: '75001: Veterinaaria',
        sektorNo: '78',
    },
    {
        sektorSisu: '77111: Sõiduautode ja väikebusside (täismassiga alla 3,5 t) rentimine ja kasutusrent, 77121: Veokite rentimine ja kasutusrent',
        sektorNo: '79',
    },
    {
        sektorSisu: '77211: Vabaaja- ja sporditarvete väljaüürimine ja kasutusrent, 77221: Videokassettide ja DVD-de laenutamine, 77291: Muude tarbeesemete ja kodumasinate väljaüürimine ja kasutusrent',
        sektorNo: '80',
    },
    {
        sektorSisu: '77311: õllumajandusmasinate ja -seadmete rentimine ja kasutusrent, 77321: Ehitusmasinate ja -seadmete rentimine ja kasutusrent, 77331: Kontorimasinate ja -seadmete rentimine ja kasutusrent, k.a arvutid, 77341: Veetranspordivahendite rentimine ja kasutusrent, 77351: Õhutranspordivahendite rentimine ja kasutusrent, 77391: Raudteeveeremi rentimine, 77399: Muu mujal liigitamata masinate, seadmete jm materiaalse vara rentimine ja kasutusrent',
        sektorNo: '81',
    },
    {
        sektorSisu: '77401: Intellektuaalomandi ja sarnaste toodete (v.a autoriõigusega tööd) rentimine',
        sektorNo: '82',
    },
    {
        sektorSisu: '78101: Tööhõiveagentuuride tegevus, 78201: Ajutise tööjõu rent, 78301: Muu inimressursiga varustamine',
        sektorNo: '83',
    },
    {
        sektorSisu: '79111: Reisibüroode tegevus, 79121: Reisikorraldajate tegevus, 79901: Muu reisimisega seotud reserveerimine, sh giidide, piletiagentuuride ja turismiinfopunktide tegevus',
        sektorNo: '84',
    },
    {
        sektorSisu: '80101: Turvatöö, v.a avalik korrakaitse, 80201: Turvasüsteemide käitus, 80301: Juurdlus',
        sektorNo: '85',
    },
    {
        sektorSisu: '81101: Hoonehalduse abitegevused, 81211: Hoonete üldpuhastus, 81221: Hoonete muu puhastus ja tööstuslik puhastustegevus, 81291: Muu puhastustegevus, 81301: Maastiku hooldus ja korrashoid',
        sektorNo: '86',
    },
    {
        sektorSisu: '82111: Büroohaldus, kombineeritud sekretäriteenus, 82191: Valguskoopiad, dokumentide koostamine ja muud büroo abitegevused, 82201: Kõnekeskuste tegevus, telemarketing, 82301: Nõupidamiste ja messide korraldamine, 82911: Inkassoteenus ja krediidiinfo, 82921: Pakendamine, 82991: Muud mujal liigitamata äritegevust abistavad tegevused',
        sektorNo: '87',
    },
    {
        sektorSisu: '84114; Valla- ja linnavalitsuste tegevus, 84119: Mujal liigitamata riigi haldustegevus, 84121: Hariduse haldus, 84122: Tervishoiu ja sotsiaalelu haldus, 84123: Elamu- ja kommunaalmajanduse haldus, 84124; Vaba aja tegevuse, kultuuri ja religiooni haldus, 84125: Keskkonnakaitse haldus, 84131: Põllumajanduse, metsanduse, maakasutuse, kalanduse ja jahinduse haldus, 84132: Transpordi ja side haldus, 84139: Muud majandustegevust toetavad tegevused, 84211: Välissuhted, 84221: Riigikaitse, 84249: Muud avaliku julgeoleku ja korrakaitsega seotud tegevused, 84251: Tuletõrje- ja päästeteenistused, vetelpääste, häirekeskused',
        sektorNo: '88',
    },
    {
        sektorSisu: '85101: Lastesõimede tegevus, 85102: Lasteaedade tegevus, 85202: Lasteaed-algkoolide tegevus, 85201: Algkoolide tegevus, 85311: Lasteaed-põhikoolide tegevus, 85312: Põhikoolide tegevus, 85313: Gümnaasiumide tegevus, 85321: Kutseõppeasutuste tegevus, 85411: Rakenduskõrgkoolide tegevus, 85421: Ülikoolide tegevus, 85511: Spordikoolid, 85519: Muu spordi- ja vabaajakoolitus, 85521: Muusika- ja kunstikoolitus, 85522: Tantsukoolide tegevus, 85529: Muu huvikoolitus, 85531: Sõiduõpe, 85591: Keeleõpe, 85592: Arvutiõpe, 85599: Muu mujal liigitamata koolitus, 85601: Haridust abistavad tegevused',
        sektorNo: '89',
    },
    {
        sektorSisu: '86101: Haiglaraviteenused, 86211: Üldarstiabi osutamine, 86221: Eriarstiabi osutamine, 86231: Hambaravi osutamine, 86901: Kiirabi ja parameedikute tegevus, 86902: Meditsiinilaborite, vere-, sperma- jms pankade tegevus, 86903: Õendusabi osutamine, 86904: Ämmaemandate tegevus, 86905: Sanatooriumide ravitegevus, 86906: Diagnostikakabinettide ja -keskuste tegevus, nt röntgenlaborid, magnetresonants jms kabinetid, 86909: Mujal liigitamata tervishoiualad',
        sektorNo: '90',
    },
    {
        sektorSisu: '87101: Hooldusraviasutuste tegevus, 87201: ,Vaimupuudega ja psüühiliste erivajadustega isikute hoolekandeasutuste tegevus, 87202: Ainesõltlaste hoolekandeasutuste tegevus, 87301: Vanurite ja puuetega inimeste hoolekandeasutuste tegevus, 87901: Asenduskoduteenust osutavate hoolekandeasutuste tegevus, 87909: Muude mujal liigitamata hoolekandeasutuste tegevus, 88101: Vanurite ja puuetega inimeste sotsiaalhoolekanne majutuseta, 88911: Lapsehoiuteenus, 88991: Mujal liigitamata sotsiaalhoolekanne majutuseta',
        sektorNo: '91',
    },
    {
        sektorSisu: '90011: Teatri- ja tantsuetenduste lavastamine ja esitamine, 90012: Kontsertide lavastamine ja esitamine, muusikaline loometegevus jms tegevus, 90021: Lavakunsti abitegevused, 90031: Kunstialane loometegevus, 90041: Teatri-, kontserdi- jms hoonete käitus',
        sektorNo: '92',
    },
    {
        sektorSisu: '91011: Raamatukogude tegevus, 91012: Arhiivide tegevus, 91021: Muuseumide tegevus, 91031: ,Ajalooliste kohtade ja ehitiste jms vaatamisväärsuste käitus, 91041: Botaanika- ja loomaaedade ning looduskaitsealade tegevus, 91042: Kaitsealade tegevus',
        sektorNo: '93',
    },
    {
        sektorSisu: '92001: Hasartmängude ja kihlvedude korraldamine, 93111: Spordirajatiste käitus, 93121: Spordiklubide tegevus, 93122: Invaspordiklubide tegevus, 93131: Aeroobika- ja jõusaalide tegevus, 93191: Spordi alaliitude, spordiliitude ja spordiühenduste tegevus, 93192: Sportlik ja meelelahutuslik jahipidamine ja kalapüük, 93199: Mujal liigitamata sporditegevus, 93211: Lõbustusparkide ja temaatiliste lõbustusparkide tegevus, 93291: Kultuurikeskused ja rahvamajad, 93299: Muud mujal liigitamata lõbustus- ja vaba aja tegevused',
        sektorNo: '94',
    },
    {
        sektorSisu: '94111: Põllumajandusseltsid ja -liidud, aiandus- ja mesindusseltsid, metsaseltsid ja -liidud, 94119: Muude ettevõtjate ja tööandjate organisatsioonide tegevus, 94121: Loomeliitude tegevus, 94129: Muude kutseorganisatsioonide tegevus, 94201: Ametiühingute tegevus, 94911: Kirikute, koguduste ja kloostrite tegevus, 94919: Muude usuorganisatsioonide tegevus, 94921: Erakondade tegevus, 94929: Muude poliitiliste organisatsioonide tegevus; 94991: Kodanikuõiguste kaitse ja eestkoste; teatud elanikegrupi huvide kaitse, 94992: Piirkondlikku/kohalikku elu edendavad ja toetavad ühendused ja fondid, 94993: Noorte- ja lasteühendused ning noorte ja laste heaolu edendavad ühendused, 94994: Rahvusvähemuste ühendused ja kultuuriseltsid, rahvuste vahelist austust ja sõprust edendavad ühendused, 94995: Vaba aja veetmise, meelelahutuse ja kultuurilise tegevusega või huvialadega seotud ühendused ning huviklubid, 94996: Keskkonna- ja looduskaitseühendused, 94997: Tervisehäiretega isikute ühendused ja nende liidud; puuetega inimeste ühendused ja nende liidud, erivajadustega inimeste kaitse ühendused, 94999: Muude mujal liigitamata organisatsioonide tegevus',
        sektorNo: '95',
    },
    {
        sektorSisu: '95111: Arvutite ja arvuti välisseadmete parandus, 95121: Sideseadmete parandus, 95211: Tarbeelektroonika parandus, 95221: Kodumasinate ning majapidamis- ja aiatööriistade parandus, 95231: Jalatsite ja nahktoodete parandus, 95241: Mööbli ja sisustusesemete parandus, 95251: Kellade ja ehete parandus, 95291: Muude tarbeesemete ja kodutarvete parandus',
        sektorNo: '96',
    },
    {
        sektorSisu: "96011: Tekstiil- ja karusnahatoodete pesu ja keemiline puhastus, 96021: Juuksuri- ja muu iluteenindus, 96031: Matusetalituste korraldamine, 96032: Kalmistute ja krematooriumite tegevus, 96041: Saunade, solaariumite ja massaažisalongide tegevus jm füüsilise heaoluga seotud teenindus, 96091: Lemmikloomade hooldamine, 96099: Muu teenindus",
        sektorNo: '97'
    }
];

//import { products } from '../products';
class LahteinfobackComponent {
    constructor() {
        this.title = "Analüüsi aluseks oleva tegevussektori määratlus";
        this.content1 = "Ettevõtte põhitegevusala (EMTAK): ";
        this.content2 = "Sinu ettevõtte puhul võeti aluseks tegevussektor: ";
        this.content3 = "Sellesse sektorisse on analüüsil paigutatud järgmised tegevusalad: ";
        this.content4 = "Ettevõtte suurusgrupp: ";
        this.content5 = "Ettevõtte tegevuspiirkond (maakond): ";
        this.content6 = "Majandusaasta aruande aasta, millel prognoosid põhinevad: ";
        this.sektorArray = [];
        this.koostisArray = [];
        this.content1a = JSON.stringify(xtee.EMTAK);
        this.content1b = this.content1 + this.content1a;
        this.sectorNo = JSON.stringify(xtee.sektorNo);
    }
    keerukam() {
        for (let key in sektorid) {
            if (sektorid.hasOwnProperty(key)) {
                this.sektorArray.push(sektorid[key]);
            }
        }
        this.oigeSektor = this.sektorArray.filter(e => {
            return e.sektorNo === this.sectorNo;
        });
    }
    koostis() {
        for (let key in koostis) {
            if (koostis.hasOwnProperty(key)) {
                this.koostisArray.push(koostis[key]);
            }
        }
        this.oigeSector = this.koostisArray.filter(e => {
            return e.sektorNo === this.sectorNo;
        });
    }
    ngOnInit() {
        this.keerukam();
        this.koostis();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: LahteinfobackComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: LahteinfobackComponent, isStandalone: true, selector: "lahteinfoback-component", ngImport: i0, template: "<div class=\"alert\">\r\n  <div class=\"header\">\r\n    <!--img class=\"icon\" src=\"icon0.svg\" /-->\r\n    <div class=\"title\">{{title}}</div>\r\n  </div>\r\n  <div class=\"content\">\r\n  <!--div class=\"body\">{{content1b}}</div-->\r\n  \r\n  <table id=\"tabel\">\r\n    \r\n  <tr *ngFor=\"let sekid1 of oigeSektor\">\r\n  <td>{{content2}}</td>\r\n  <td>{{sekid1.sektorName}}</td>\r\n  </tr>\r\n  \r\n  </table>\r\n  \r\n  <table id=\"tabel\">\r\n    \r\n  <tr *ngFor=\"let koostid1 of oigeSector\">\r\n  <td>{{content3}}</td>\r\n  <td>{{koostid1.sektorSisu}}</td>\r\n  </tr>\r\n  \r\n  </table>\r\n  \r\n    <!--div class=\"body\">{{content1b}}</div>\r\n    <div class=\"body\">{{content2}}</div-->\r\n    <!--div class=\"body\">{{content3}}</div-->\r\n    <!--div class=\"body\">{{content4}}</div>\r\n    <div class=\"body\">{{content5}}</div>\r\n    <div class=\"body\">{{content6}}</div-->\r\n  </div>\r\n  </div> \r\n  ", styles: [".alert,.alert *{box-sizing:border-box}.alert{background:var(--alerts-background-info, #d2f7e2);border-radius:var(--alerts-sizing-corner-radius, 4px);border-style:solid;border-color:var(--colors-status-info-border, #008936);border-width:1px;padding:var(--alerts-sizing-padding-y, 16px) var(--alerts-sizing-padding-x, 16px) var(--alerts-sizing-padding-y, 16px) var(--alerts-sizing-padding-x, 16px);display:flex;flex-direction:column;gap:var(--alerts-sizing-inner-spacing, 8px);align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;margin:60px 40px -80px}.header{padding:0 24px 0 0;display:flex;flex-direction:row;gap:var(--alerts-sizing-inner-spacing, 8px);align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative}.icon{flex-shrink:0;width:24px;height:24px;position:relative;overflow:visible}.title{color:var(--colors-status-info-text, #008936);text-align:left;font-family:var(--headings-large-h5-font-family, \"Roboto-Regular\", sans-serif);margin-left:3px;font-size:var(--headings-large-h5-font-size, 20px);line-height:var(--headings-large-h5-line-height, 120%);font-weight:var(--headings-large-h5-font-weight, 400);position:relative;flex:1;display:flex;align-items:center;justify-content:flex-start}.content{padding:0 16px 0 0;display:flex;flex-direction:column;gap:var(--alerts-sizing-inner-spacing, 8px);align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative}.body{color:var(--alerts-text-info, #008936);text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:14px;margin-left:3px;line-height:var(--body-small-line-height, 171%);font-weight:var(--body-small-font-weight, 400);position:relative}#tabel{color:#008936;align-items:flex-end}#tabel td{font-family:Roboto-Regular,Helvetica;font-weight:400;color:#008936;font-size:14px;align-items:flex-end;text-align:left}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: LahteinfobackComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lahteinfoback-component', standalone: true, imports: [CommonModule], template: "<div class=\"alert\">\r\n  <div class=\"header\">\r\n    <!--img class=\"icon\" src=\"icon0.svg\" /-->\r\n    <div class=\"title\">{{title}}</div>\r\n  </div>\r\n  <div class=\"content\">\r\n  <!--div class=\"body\">{{content1b}}</div-->\r\n  \r\n  <table id=\"tabel\">\r\n    \r\n  <tr *ngFor=\"let sekid1 of oigeSektor\">\r\n  <td>{{content2}}</td>\r\n  <td>{{sekid1.sektorName}}</td>\r\n  </tr>\r\n  \r\n  </table>\r\n  \r\n  <table id=\"tabel\">\r\n    \r\n  <tr *ngFor=\"let koostid1 of oigeSector\">\r\n  <td>{{content3}}</td>\r\n  <td>{{koostid1.sektorSisu}}</td>\r\n  </tr>\r\n  \r\n  </table>\r\n  \r\n    <!--div class=\"body\">{{content1b}}</div>\r\n    <div class=\"body\">{{content2}}</div-->\r\n    <!--div class=\"body\">{{content3}}</div-->\r\n    <!--div class=\"body\">{{content4}}</div>\r\n    <div class=\"body\">{{content5}}</div>\r\n    <div class=\"body\">{{content6}}</div-->\r\n  </div>\r\n  </div> \r\n  ", styles: [".alert,.alert *{box-sizing:border-box}.alert{background:var(--alerts-background-info, #d2f7e2);border-radius:var(--alerts-sizing-corner-radius, 4px);border-style:solid;border-color:var(--colors-status-info-border, #008936);border-width:1px;padding:var(--alerts-sizing-padding-y, 16px) var(--alerts-sizing-padding-x, 16px) var(--alerts-sizing-padding-y, 16px) var(--alerts-sizing-padding-x, 16px);display:flex;flex-direction:column;gap:var(--alerts-sizing-inner-spacing, 8px);align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;margin:60px 40px -80px}.header{padding:0 24px 0 0;display:flex;flex-direction:row;gap:var(--alerts-sizing-inner-spacing, 8px);align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative}.icon{flex-shrink:0;width:24px;height:24px;position:relative;overflow:visible}.title{color:var(--colors-status-info-text, #008936);text-align:left;font-family:var(--headings-large-h5-font-family, \"Roboto-Regular\", sans-serif);margin-left:3px;font-size:var(--headings-large-h5-font-size, 20px);line-height:var(--headings-large-h5-line-height, 120%);font-weight:var(--headings-large-h5-font-weight, 400);position:relative;flex:1;display:flex;align-items:center;justify-content:flex-start}.content{padding:0 16px 0 0;display:flex;flex-direction:column;gap:var(--alerts-sizing-inner-spacing, 8px);align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative}.body{color:var(--alerts-text-info, #008936);text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:14px;margin-left:3px;line-height:var(--body-small-line-height, 171%);font-weight:var(--body-small-font-weight, 400);position:relative}#tabel{color:#008936;align-items:flex-end}#tabel td{font-family:Roboto-Regular,Helvetica;font-weight:400;color:#008936;font-size:14px;align-items:flex-end;text-align:left}\n"] }]
        }], ctorParameters: () => [] });

//import { products } from '../products';
class LahteturnComponent {
    constructor() {
        this.flipped = false;
    }
    //imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkL8GlKZ775j3f0VVgS1rU8L2LoX5UEM6fKv_eGLzeza27WYH"
    toggle() {
        this.flipped = !this.flipped;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: LahteturnComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: LahteturnComponent, isStandalone: true, selector: "lahteturn-component", ngImport: i0, template: "<!--label-->    \r\n<br>\r\n<br>\r\n<br>\r\n<p class=\"teekst\">\r\nKlikates alltoodud (sinisel) alajaotusel n\u00E4ed t\u00E4iendavat infot.\r\n</p>\r\n<br>  \r\n<div class=\"flashcard\" [class.flipped]=\"flipped\" (click)=\"toggle()\">\r\n\r\n    <div>\r\n      <!--p>sdfkj</p-->\r\n      <!--lahteinfo-component></lahteinfo-component-->\r\n      <lahteinfo-component></lahteinfo-component>   \r\n      \r\n  </div>\r\n    <div class =\"back\" >\r\n    <!--p>ldkjf</p-->\r\n      <!--div class=\"back\"-->\r\n    <lahteinfoback-component></lahteinfoback-component>\r\n    <!--div class=\"back\">N   \"btn  btn-danger\" ow showing the back size {{kirjuta()}}</div-->\r\n    </div>\r\n</div>\r\n<!--/label-->", styles: [".flashcard{height:200px;margin-top:-10px;align-items:center;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition:all .6s;transition:all .6s}.flashcard div{position:absolute;margin-top:-56px;width:100%;text-align:center;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}.flashcard .back{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.flashcard .back2{-webkit-transform:rotateY(180deg);transform:rotateY(180deg);background-color:#080a804d}.flashcard.flipped{transform:rotateY(180deg);-webkit-transform:rotateY(180deg)}.teekst{position:relative;width:1034px;height:48px;padding-top:30px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:16px;letter-spacing:0;line-height:24px}\n"], dependencies: [{ kind: "component", type: LahteinfoComponent, selector: "lahteinfo-component" }, { kind: "component", type: LahteinfobackComponent, selector: "lahteinfoback-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: LahteturnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lahteturn-component', standalone: true, imports: [LahteinfoComponent, LahteinfobackComponent], template: "<!--label-->    \r\n<br>\r\n<br>\r\n<br>\r\n<p class=\"teekst\">\r\nKlikates alltoodud (sinisel) alajaotusel n\u00E4ed t\u00E4iendavat infot.\r\n</p>\r\n<br>  \r\n<div class=\"flashcard\" [class.flipped]=\"flipped\" (click)=\"toggle()\">\r\n\r\n    <div>\r\n      <!--p>sdfkj</p-->\r\n      <!--lahteinfo-component></lahteinfo-component-->\r\n      <lahteinfo-component></lahteinfo-component>   \r\n      \r\n  </div>\r\n    <div class =\"back\" >\r\n    <!--p>ldkjf</p-->\r\n      <!--div class=\"back\"-->\r\n    <lahteinfoback-component></lahteinfoback-component>\r\n    <!--div class=\"back\">N   \"btn  btn-danger\" ow showing the back size {{kirjuta()}}</div-->\r\n    </div>\r\n</div>\r\n<!--/label-->", styles: [".flashcard{height:200px;margin-top:-10px;align-items:center;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition:all .6s;transition:all .6s}.flashcard div{position:absolute;margin-top:-56px;width:100%;text-align:center;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}.flashcard .back{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.flashcard .back2{-webkit-transform:rotateY(180deg);transform:rotateY(180deg);background-color:#080a804d}.flashcard.flipped{transform:rotateY(180deg);-webkit-transform:rotateY(180deg)}.teekst{position:relative;width:1034px;height:48px;padding-top:30px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:16px;letter-spacing:0;line-height:24px}\n"] }]
        }] });

//import { products } from '../products';
class Yld1Component {
    getEfektKorge() {
        this.korgeString = localStorage.getItem(this.key3);
        this.korgeNumber = Number(this.korgeString);
        return this.korgeNumber;
    }
    getMakseKorge() {
        this.korgeStringm = localStorage.getItem(this.key3m);
        this.korgeNumberm = Number(this.korgeStringm);
        return this.korgeNumberm;
    }
    getVoimKorge() {
        this.korgeStringv = localStorage.getItem(this.key3v);
        this.korgeNumberv = Number(this.korgeStringv);
        return this.korgeNumberv;
    }
    getTasuvKorge() {
        this.korgeStringt = localStorage.getItem(this.key3t);
        this.korgeNumbert = Number(this.korgeStringt);
        return this.korgeNumbert;
    }
    getToojoudKorge() {
        this.korgeStringj = localStorage.getItem(this.key3j);
        this.korgeNumberj = Number(this.korgeStringj);
        return this.korgeNumberj;
    }
    constructor() {
        this.key3 = 'efektKorge';
        this.key3m = 'makseKorge';
        this.key3v = 'voimKorge';
        this.key3t = 'tasuvKorge';
        this.key3j = 'toojoudKorge';
        this.ReadMore = true;
        this.visible = false;
        this.flipped = false;
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
            this.testmuutuja = "on olemas";
            this.value = ((((1 - this.effmadalNumber) + this.effkorgeNumber) / 2) + (((1 - this.maksmadalNumber) + this.makskorgeNumber) / 2) + (((1 - this.voimmadalNumber) + this.voimkorgeNumber) / 2) + (((1 - this.tasumadalNumber) + this.tasukorgeNumber) / 2) + (((1 - this.toomadalNumber) + this.tookorgeNumber) / 2)) / 5;
        }
        else {
            //this.testmuutuja = "on olemas";
            this.value = ((((1 - this.effmadalNumber) + this.effkorgeNumber) / 2) + (((1 - this.maksmadalNumber) + this.makskorgeNumber) / 2) + (((1 - this.voimmadalNumber) + this.voimkorgeNumber) / 2) + (((1 - this.tasumadalNumber) + this.tasukorgeNumber) / 2)) / 4;
            this.testmuutuja = "ei ole olemas";
            //this.value=((((1-xtee.model1y1)+xtee.model1y3)/2)+(((1-xtee.model2y1)+xtee.model2y3)/2)+(((1-xtee.model3y1)+xtee.model3y3)/2)+(((1-xtee.model4y1)+xtee.model4y3)/2))/4;
        }
        //this.value=((((1-xtee.model1y1)+xtee.model1y3)/2)+(((1-xtee.model2y1)+xtee.model2y3)/2)+(((1-xtee.model3y1)+xtee.model3y3)/2)+(((1-xtee.model4y1)+xtee.model4y3)/2)+(((1-xtee.model5y1)+xtee.model5y3))/2)/5;
    }
    annaHinnang() {
        this.hinnang = "laheda elujõulisusega";
        if (this.value > 0.6) {
            this.hinnang = "suur";
        }
        else if (this.value > 0.4) {
            this.hinnang = "keskmine";
        }
        else if (this.value <= 0.4) {
            this.hinnang = "väike";
        }
        // if ((this.getEfektKorge()+this.getMakseKorge()+this.getVoimKorge()+this.getTasuvKorge()+this.getToojoudKorge())/5>0.67999) {
        //   this.hinnang = "suur"
        // }
        // else if ((this.getEfektKorge()+this.getMakseKorge()+this.getVoimKorge()+this.getTasuvKorge()+this.getToojoudKorge())/5<=0.67999 && (this.getEfektKorge()+this.getMakseKorge()+this.getVoimKorge()+this.getTasuvKorge()+this.getToojoudKorge())/5>0.34) {
        //   this.hinnang = "keskmine"
        // }
        // else if ((this.getEfektKorge()+this.getMakseKorge()+this.getVoimKorge()+this.getTasuvKorge()+this.getToojoudKorge())/5<=0.34) {
        //   this.hinnang = "väike"
        // }
        return this.hinnang;
    }
    panusEellugu() {
        this.panussissejuhatus = 'Praegusel juhul tuleb panus saadud tulemusse peamiselt';
        if (this.effkorgeNumber <= 0.5 && this.makskorgeNumber <= 0.5 && this.voimkorgeNumber <= 0.5 && this.tasukorgeNumber <= 0.5 && this.tookorgeNumber <= 0.5) {
            this.panussissejuhatus = 'Rakendus ei leidnud ühtegi olulist komponenti, mis elujõulisust tõstaks.';
        }
        return this.panussissejuhatus;
    }
    panusEellugu2() {
        this.panussissejuhatus = 'Praegusel juhul tuleb panus saadud tulemusse peamiselt';
        if (this.effkorgeNumber <= 0.5 && this.makskorgeNumber <= 0.5 && this.voimkorgeNumber <= 0.5 && this.tasukorgeNumber <= 0.5) {
            this.panussissejuhatus = 'Rakendus ei leidnud ühtegi olulist komponenti, mis elujõulisust tõstaks.';
        }
        return this.panussissejuhatus;
    }
    panusEelluguValik() {
        if (!isNaN(this.toomadalNumber)) {
            this.valikTekst = this.panusEellugu();
        }
        else if (isNaN(this.toomadalNumber)) {
            this.valikTekst = this.panusEellugu2();
        }
        return this.valikTekst;
    }
    panusTuleb() {
        this.panus = '';
        if (this.effkorgeNumber > this.makskorgeNumber && this.effkorgeNumber > this.voimkorgeNumber && this.effkorgeNumber > this.tasukorgeNumber && this.effkorgeNumber > this.tookorgeNumber && this.effkorgeNumber > 0.5) {
            this.panus = ' suhteliselt suurest efektiivsusest.';
        }
        else if (this.makskorgeNumber > this.voimkorgeNumber && this.makskorgeNumber > this.tasukorgeNumber && this.makskorgeNumber > this.tookorgeNumber && this.makskorgeNumber > 0.5) {
            this.panus = ' suhteliselt suurest maksevõimest.';
        }
        else if (this.voimkorgeNumber > this.tasukorgeNumber && this.voimkorgeNumber > this.tookorgeNumber && this.voimkorgeNumber > 0.5) {
            this.panus = ' suhteliselt väikesest finantsvõimendusest.';
        }
        else if (this.tasukorgeNumber > this.tookorgeNumber && this.tasukorgeNumber > 0.5) {
            this.panus = ' suhteliselt suurest tasuvusest.';
        }
        else if (this.tookorgeNumber > 0.5) {
            this.panus = ' suhteliselt suurest tööjõu tootlikkusest.';
        }
        return this.panus;
    }
    panusTuleb2() {
        this.panus = '';
        if (this.effkorgeNumber > this.makskorgeNumber && this.effkorgeNumber > this.voimkorgeNumber && this.effkorgeNumber > this.tasukorgeNumber && this.effkorgeNumber > 0.5) {
            this.panus = ' suhteliselt suurest efektiivsusest.';
        }
        else if (this.makskorgeNumber > this.voimkorgeNumber && this.makskorgeNumber > this.tasukorgeNumber && this.makskorgeNumber > 0.5) {
            this.panus = ' suhteliselt suurest maksevõimest.';
        }
        else if (this.voimkorgeNumber > this.tasukorgeNumber && this.voimkorgeNumber > 0.5) {
            this.panus = ' suhteliselt väikesest finantsvõimendusest.';
        }
        else if (this.tasukorgeNumber > 0.5) {
            this.panus = ' suhteliselt suurest tasuvusest.';
        }
        return this.panus;
    }
    panusTulebValik() {
        if (!isNaN(this.toomadalNumber)) {
            this.valikPanus = this.panusTuleb();
            //this.kontroll = "panusTuleb";
        }
        else if (isNaN(this.toomadalNumber)) {
            this.valikPanus = this.panusTuleb2();
            //this.kontroll = "panusTuleb2";
        }
        return this.valikPanus;
    }
    lisaTargutus() {
        this.tugevusedX = " Ükski näitaja ei ole eraldi võetuna oluliselt esileulatuv. Olenemata koondtulemusest on ettevõtte olukord probleemne.";
        this.tugevus1 = '';
        this.tugevus2 = '';
        this.tugevus3 = '';
        this.tugevus4 = '';
        this.tugevus5 = '';
        if (this.effkorgeNumber > 0.95) {
            this.tugevus1 = ' Erakordselt suur on efektiivsus, mis tähendab vara tõhusat kasutamist.';
            this.tugevusedX = '';
        }
        if (this.makskorgeNumber > 0.95) {
            this.tugevus2 = ' Väga suur on maksevõime, mis tähendab rahavoogude edukat juhtimist.';
            this.tugevusedX = '';
        }
        if (this.voimkorgeNumber > 0.95) {
            this.tugevus3 = ' Väga positiivne on suhteliselt väike laenukoormuse osakaal.';
            this.tugevusedX = '';
        }
        if (this.tasukorgeNumber > 0.95) {
            this.tugevus4 = ' Oluline tugi on suur tasuvus, mis tähendab head turuseisu.';
            this.tugevusedX = '';
        }
        if (this.tookorgeNumber > 0.95) {
            this.tugevus5 = ' Ettevõtte tööjõu tootlikkus on väga hea, sellest on arengus palju kasu.';
            this.tugevusedX = '';
        }
        this.tugevused = this.tugevusedX + this.tugevus1 + this.tugevus2 + this.tugevus3 + this.tugevus4 + this.tugevus5;
        return this.tugevused;
    }
    lisaTargutus2() {
        this.tugevusedX = " Ükski näitaja ei ole eraldi võetuna oluliselt esileulatuv. Olenemata koondtulemusest on ettevõtte olukord probleemne.";
        this.tugevus1 = '';
        this.tugevus2 = '';
        this.tugevus3 = '';
        this.tugevus4 = '';
        this.tugevus5 = '';
        if (this.effkorgeNumber > 0.95) {
            this.tugevus1 = ' Erakordselt suur on efektiivsus, mis tähendab vara tõhusat kasutamist.';
            this.tugevusedX = '';
        }
        if (this.makskorgeNumber > 0.95) {
            this.tugevus2 = ' Väga suur on maksevõime, mis tähendab rahavoogude edukat juhtimist.';
            this.tugevusedX = '';
        }
        if (this.voimkorgeNumber > 0.95) {
            this.tugevus3 = ' Väga positiivne on suhteliselt väike laenukoormuse osakaal.';
            this.tugevusedX = '';
        }
        if (this.tasukorgeNumber > 0.95) {
            this.tugevus4 = ' Oluline tugi on suur tasuvus, mis tähendab head turuseisu.';
            this.tugevusedX = '';
        }
        this.tugevused = this.tugevusedX + this.tugevus1 + this.tugevus2 + this.tugevus3 + this.tugevus4;
        return this.tugevused;
    }
    lisaTargutusValik() {
        if (!isNaN(this.toomadalNumber)) {
            this.valikTargutus = this.lisaTargutus();
        }
        else if (isNaN(this.toomadalNumber)) {
            this.valikTargutus = this.lisaTargutus2();
        }
        return this.valikTargutus;
    }
    maakonnaKontroll() {
        if (localStorage.getItem("maakond") === null) {
            localStorage.setItem("maakond", "Harju maakond");
        }
    }
    onclick() {
        this.ReadMore = !this.ReadMore; //not equal to condition
        this.visible = !this.visible;
        //alert("lgaj");
    }
    lantau() {
        this.jutuke = "lsjf";
        return this.jutuke;
    }
    //imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkL8GlKZ775j3f0VVgS1rU8L2LoX5UEM6fKv_eGLzeza27WYH"
    toggle() {
        this.flipped = !this.flipped;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Yld1Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Yld1Component, isStandalone: true, selector: "yld1-component", ngImport: i0, template: "<div class=\"frame\">\r\n\r\n  <div class=\"rida\">\r\n     <div class=\"group\">\r\n       <div class=\"joonisval\">\r\n         <div class=\"joonis\">\r\n             \r\n           <!--div class=\"overlap-group\"-->\r\n             \r\n           <!--/div-->\r\n           <koondind7-component></koondind7-component>\r\n           \r\n           \r\n         </div>\r\n         \r\n       \r\n\r\n  </div>\r\n       \r\n     </div>\r\n     <div class=\"tekstjanupp\">\r\n       <p class=\"ettev-te-on-k-rge\">\r\n         <span class=\"span\">Ettev\u00F5te eluj\u00F5ud on </span>\r\n         <span class=\"text-wrapper-5\">{{annaHinnang()}}. </span>\r\n         <span class=\"span\">Eri n\u00E4itajad m\u00F5jutavad ettev\u00F5tte eluj\u00F5ulisust tavaliselt erineval m\u00E4\u00E4ral. </span>\r\n         <span class=\"span\">{{panusEelluguValik()}}</span>\r\n         <span class=\"text-wrapper-5\">{{panusTulebValik()}} {{kontroll}}</span>\r\n         <span class=\"span\">{{lisaTargutusValik()}}</span>\r\n       </p><br>\r\n       <div class=\"nupp\">\r\n        <button (click)=\"onclick()\">\r\n        \r\n        {{ReadMore?\"N\u00E4ita rohkem informatsiooni\":\"Peida t\u00E4iendav informatsioon\"}}\r\n        </button>\r\n       </div>\r\n     </div>\r\n  </div>\r\n  </div>\r\n        <ng-container *ngIf=\"visible\">\r\n          <!--p>lsdfkj</p-->\r\n          <lahteturn-component></lahteturn-component>\r\n          <!--div class=\"tekstselgit2\">\r\n            \r\n            <br>   \r\n            \r\n            <lahteinfo-component></lahteinfo-component>    \r\n              \r\n          </div-->\r\n          \r\n  \r\n      </ng-container>\r\n        <!--/div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n  \r\n       \r\n  \r\n  \r\n  \r\n  \r\n     <!--/div-->\r\n   <!--/div-->    \r\n  \r\n  <!--/div-->\r\n  \r\n<!----  {{maakonnaKontroll()}} -->", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:2px;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:65px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative;width:381.14px;height:180.2px}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:15px}.frame .joonis{position:absolute;width:49px;height:50px;top:8px;left:4px}.frame .vector{position:absolute;width:249px;height:124px;top:0;left:0}.frame .polygon{position:absolute;width:68px;height:68px;top:60px;left:120px}.frame .img{position:absolute;width:31px;height:32px;top:18px;left:202px}.frame .text-wrapper{position:absolute;top:11px;left:243px;font-family:Roboto-Bold,Helvetica;font-weight:700;color:#4f4f4f;font-size:14px;letter-spacing:0;line-height:normal;white-space:nowrap}.frame .vector-2{position:absolute;width:1px;height:24px;top:0;left:134px}.frame .vector-3{position:absolute;width:24px;height:1px;top:132px;left:241px}.frame .vector-4{position:absolute;width:24px;height:1px;top:132px;left:0}.frame .text-wrapper-2{position:absolute;top:142px;left:328px;font-family:Roboto-Bold,Helvetica;font-weight:700;color:#4f4f4f;font-size:14px;letter-spacing:0;line-height:normal;white-space:nowrap}.frame .text-wrapper-3{position:absolute;top:0;left:153px;font-family:Roboto-Bold,Helvetica;font-weight:700;color:#4f4f4f;font-size:14px;letter-spacing:0;line-height:normal;white-space:nowrap}.frame .text-wrapper-4{position:absolute;top:142px;left:0;font-family:Roboto-Bold,Helvetica;font-weight:700;color:#4f4f4f;font-size:14px;letter-spacing:0;line-height:normal;white-space:nowrap}.frame .tekstjanupp{display:flex;flex-direction:column;width:555px;height:183px;align-items:flex-start;justify-content:center;gap:1px;padding-top:66px;position:relative}.frame .ettev-te-on-k-rge{position:relative;width:627px;height:88px;margin-right:-72px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:16px;letter-spacing:0;line-height:24px}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:16px;letter-spacing:0;line-height:24px}.frame .text-wrapper-5{font-family:Roboto-Bold,Helvetica;font-weight:700}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:248px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.nuppx{padding:6px;margin:6px 8px 6px 20px;min-width:220px;border-radius:3px;font-size:14px;text-align:center;text-transform:uppercase;text-decoration:none;border:none;outline:none;color:#f1eaea;background-color:#1e144bf5}\n"], dependencies: [{ kind: "component", type: Koondind7Component, selector: "koondind7-component" }, { kind: "component", type: LahteturnComponent, selector: "lahteturn-component" }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Yld1Component, decorators: [{
            type: Component,
            args: [{ selector: 'yld1-component', standalone: true, imports: [Koondind7Component, XteechangeComponent, LahteturnComponent, CommonModule], template: "<div class=\"frame\">\r\n\r\n  <div class=\"rida\">\r\n     <div class=\"group\">\r\n       <div class=\"joonisval\">\r\n         <div class=\"joonis\">\r\n             \r\n           <!--div class=\"overlap-group\"-->\r\n             \r\n           <!--/div-->\r\n           <koondind7-component></koondind7-component>\r\n           \r\n           \r\n         </div>\r\n         \r\n       \r\n\r\n  </div>\r\n       \r\n     </div>\r\n     <div class=\"tekstjanupp\">\r\n       <p class=\"ettev-te-on-k-rge\">\r\n         <span class=\"span\">Ettev\u00F5te eluj\u00F5ud on </span>\r\n         <span class=\"text-wrapper-5\">{{annaHinnang()}}. </span>\r\n         <span class=\"span\">Eri n\u00E4itajad m\u00F5jutavad ettev\u00F5tte eluj\u00F5ulisust tavaliselt erineval m\u00E4\u00E4ral. </span>\r\n         <span class=\"span\">{{panusEelluguValik()}}</span>\r\n         <span class=\"text-wrapper-5\">{{panusTulebValik()}} {{kontroll}}</span>\r\n         <span class=\"span\">{{lisaTargutusValik()}}</span>\r\n       </p><br>\r\n       <div class=\"nupp\">\r\n        <button (click)=\"onclick()\">\r\n        \r\n        {{ReadMore?\"N\u00E4ita rohkem informatsiooni\":\"Peida t\u00E4iendav informatsioon\"}}\r\n        </button>\r\n       </div>\r\n     </div>\r\n  </div>\r\n  </div>\r\n        <ng-container *ngIf=\"visible\">\r\n          <!--p>lsdfkj</p-->\r\n          <lahteturn-component></lahteturn-component>\r\n          <!--div class=\"tekstselgit2\">\r\n            \r\n            <br>   \r\n            \r\n            <lahteinfo-component></lahteinfo-component>    \r\n              \r\n          </div-->\r\n          \r\n  \r\n      </ng-container>\r\n        <!--/div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n  \r\n       \r\n  \r\n  \r\n  \r\n  \r\n     <!--/div-->\r\n   <!--/div-->    \r\n  \r\n  <!--/div-->\r\n  \r\n<!----  {{maakonnaKontroll()}} -->", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:2px;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:65px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative;width:381.14px;height:180.2px}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:15px}.frame .joonis{position:absolute;width:49px;height:50px;top:8px;left:4px}.frame .vector{position:absolute;width:249px;height:124px;top:0;left:0}.frame .polygon{position:absolute;width:68px;height:68px;top:60px;left:120px}.frame .img{position:absolute;width:31px;height:32px;top:18px;left:202px}.frame .text-wrapper{position:absolute;top:11px;left:243px;font-family:Roboto-Bold,Helvetica;font-weight:700;color:#4f4f4f;font-size:14px;letter-spacing:0;line-height:normal;white-space:nowrap}.frame .vector-2{position:absolute;width:1px;height:24px;top:0;left:134px}.frame .vector-3{position:absolute;width:24px;height:1px;top:132px;left:241px}.frame .vector-4{position:absolute;width:24px;height:1px;top:132px;left:0}.frame .text-wrapper-2{position:absolute;top:142px;left:328px;font-family:Roboto-Bold,Helvetica;font-weight:700;color:#4f4f4f;font-size:14px;letter-spacing:0;line-height:normal;white-space:nowrap}.frame .text-wrapper-3{position:absolute;top:0;left:153px;font-family:Roboto-Bold,Helvetica;font-weight:700;color:#4f4f4f;font-size:14px;letter-spacing:0;line-height:normal;white-space:nowrap}.frame .text-wrapper-4{position:absolute;top:142px;left:0;font-family:Roboto-Bold,Helvetica;font-weight:700;color:#4f4f4f;font-size:14px;letter-spacing:0;line-height:normal;white-space:nowrap}.frame .tekstjanupp{display:flex;flex-direction:column;width:555px;height:183px;align-items:flex-start;justify-content:center;gap:1px;padding-top:66px;position:relative}.frame .ettev-te-on-k-rge{position:relative;width:627px;height:88px;margin-right:-72px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:16px;letter-spacing:0;line-height:24px}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:16px;letter-spacing:0;line-height:24px}.frame .text-wrapper-5{font-family:Roboto-Bold,Helvetica;font-weight:700}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:248px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.nuppx{padding:6px;margin:6px 8px 6px 20px;min-width:220px;border-radius:3px;font-size:14px;text-align:center;text-transform:uppercase;text-decoration:none;border:none;outline:none;color:#f1eaea;background-color:#1e144bf5}\n"] }]
        }], ctorParameters: () => [] });

class Graaf12Component {
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

//import { products } from '../products';
class HetkavaComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: HetkavaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: HetkavaComponent, isStandalone: true, selector: "hetkava-component", ngImport: i0, template: "<div class=\"frame\">\r\n\r\n<div class=\"rida\">\r\n   <div class=\"group\">\r\n     <div class=\"joonisval\">\r\n       <div class=\"joonis\">\r\n           \r\n         \r\n         \r\n        <div class=\"tekstike\">\r\n          Sinu ettev\u00F5tte v\u00F5rdlus teistega\r\n        </div>\r\n        \r\n        <br>\r\n        <div class=\"tekstike2\"> \r\n          Ettev\u00F5tteid v\u00F5rreldakse piirkonna, tegevusala ja suurusklassi l\u00F5ikes. Hetkeseisu hindamiseks vaadatakse ettev\u00F5tte paiknemist levinumate finantssuhtarvude skaalal, aluseks viimased teadaolevad andmed. T\u00E4psemalt loe lehelt \"Kuidas tulemusi m\u00F5ista?\".\r\n        </div>\r\n        <br>\r\n        <div class=\"tekstike2\"> \r\n          Kasutatud on kaht l\u00E4henemist. Esimesel juhul on ettev\u00F5ttel v\u00F5imalik v\u00F5rrelda ennast teistega viie eluj\u00F5ulisuse t\u00FC\u00FCbi j\u00E4rgi. Sel juhul n\u00E4idatakse paiknemine v\u00F5rreldes sama maakonna, tegevussektori ja suurusklassi v\u00F5rdluses. Teisel juhul on esitatud detailsemalt ka mudelite aluseks olevad suhtarvud, nii ettev\u00F5tte enda omad kui ka mediaanv\u00E4\u00E4rtused tegevussektorite, kohalike omavalitsus\u00FCksuste ja suurusklasside kaupa.\r\n        </div>\r\n         \r\n       </div>\r\n       \r\n     \r\n\r\n      </div>\r\n     \r\n   </div>\r\n   <div class=\"tekstjanupp\">\r\n     <!--div class=\"graafikuke\"-->\r\n       \r\n\r\n     <graaf12></graaf12>\r\n\r\n     <!--/div-->\r\n\r\n     <!--div class=\"nupp\">\r\n      <button>\r\n      Vaata t\u00E4psemat p\u00F5hjendust\r\n      </button>\r\n      </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n   </div>\r\n </div>    \r\n\r\n</div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:430px;height:50px;top:0;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:600px;height:183px;align-items:flex-start;gap:1px;padding-left:380px;padding-top:40px;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"], dependencies: [{ kind: "component", type: Graaf12Component, selector: "graaf12" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: HetkavaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'hetkava-component', standalone: true, imports: [Graaf12Component], template: "<div class=\"frame\">\r\n\r\n<div class=\"rida\">\r\n   <div class=\"group\">\r\n     <div class=\"joonisval\">\r\n       <div class=\"joonis\">\r\n           \r\n         \r\n         \r\n        <div class=\"tekstike\">\r\n          Sinu ettev\u00F5tte v\u00F5rdlus teistega\r\n        </div>\r\n        \r\n        <br>\r\n        <div class=\"tekstike2\"> \r\n          Ettev\u00F5tteid v\u00F5rreldakse piirkonna, tegevusala ja suurusklassi l\u00F5ikes. Hetkeseisu hindamiseks vaadatakse ettev\u00F5tte paiknemist levinumate finantssuhtarvude skaalal, aluseks viimased teadaolevad andmed. T\u00E4psemalt loe lehelt \"Kuidas tulemusi m\u00F5ista?\".\r\n        </div>\r\n        <br>\r\n        <div class=\"tekstike2\"> \r\n          Kasutatud on kaht l\u00E4henemist. Esimesel juhul on ettev\u00F5ttel v\u00F5imalik v\u00F5rrelda ennast teistega viie eluj\u00F5ulisuse t\u00FC\u00FCbi j\u00E4rgi. Sel juhul n\u00E4idatakse paiknemine v\u00F5rreldes sama maakonna, tegevussektori ja suurusklassi v\u00F5rdluses. Teisel juhul on esitatud detailsemalt ka mudelite aluseks olevad suhtarvud, nii ettev\u00F5tte enda omad kui ka mediaanv\u00E4\u00E4rtused tegevussektorite, kohalike omavalitsus\u00FCksuste ja suurusklasside kaupa.\r\n        </div>\r\n         \r\n       </div>\r\n       \r\n     \r\n\r\n      </div>\r\n     \r\n   </div>\r\n   <div class=\"tekstjanupp\">\r\n     <!--div class=\"graafikuke\"-->\r\n       \r\n\r\n     <graaf12></graaf12>\r\n\r\n     <!--/div-->\r\n\r\n     <!--div class=\"nupp\">\r\n      <button>\r\n      Vaata t\u00E4psemat p\u00F5hjendust\r\n      </button>\r\n      </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n   </div>\r\n </div>    \r\n\r\n</div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:430px;height:50px;top:0;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:600px;height:183px;align-items:flex-start;gap:1px;padding-left:380px;padding-top:40px;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"] }]
        }] });

//import { products } from '../products';
class Yld2Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Yld2Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Yld2Component, isStandalone: true, selector: "yld2-component", ngImport: i0, template: "<p class=\"teekst\">\r\nJoonis \u00FClal n\u00E4itab, kui <span class=\"boold\"> suure t\u00F5en\u00E4osusega </span> on ettev\u00F5tte eluj\u00F5ulisus rakenduse prognoosi j\u00E4rgi <span class=\"boold\"> v\u00F5rreldes teistega </span>v\u00E4ike, keskmine v\u00F5i suur. Tulemused on esitatud eluj\u00F5ulisuse eri aspektide kaupa.\r\n</p>", styles: [".boold{font-family:Roboto-Bold,Helvetica;font-weight:700}.teekst{position:relative;width:1034px;height:48px;padding-top:30px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:16px;letter-spacing:0;line-height:24px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Yld2Component, decorators: [{
            type: Component,
            args: [{ selector: 'yld2-component', standalone: true, template: "<p class=\"teekst\">\r\nJoonis \u00FClal n\u00E4itab, kui <span class=\"boold\"> suure t\u00F5en\u00E4osusega </span> on ettev\u00F5tte eluj\u00F5ulisus rakenduse prognoosi j\u00E4rgi <span class=\"boold\"> v\u00F5rreldes teistega </span>v\u00E4ike, keskmine v\u00F5i suur. Tulemused on esitatud eluj\u00F5ulisuse eri aspektide kaupa.\r\n</p>", styles: [".boold{font-family:Roboto-Bold,Helvetica;font-weight:700}.teekst{position:relative;width:1034px;height:48px;padding-top:30px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:16px;letter-spacing:0;line-height:24px}\n"] }]
        }] });

//import { products } from '../products';
class Yld3Component {
    constructor() {
        //localStorage.setItem("efektVarv", '2');
        this.key = 'efektVarv';
        this.keym = 'makseVarv';
        this.keyf = 'voimVarv';
        this.keyt = 'tasuvVarv';
        this.keyj = 'toojoudVarv';
    }
    //constructor () {
    //  this.madalNumber = 1;
    //}
    efektVarv() {
        this.madalString = localStorage.getItem(this.key);
        this.madalNumber = Number(this.madalString);
        return this.madalNumber;
    }
    efektHinnang() {
        if (this.efektVarv() == 1) {
            this.hinnangEfekt = "Madal";
        }
        else if (this.efektVarv() == 2) {
            this.hinnangEfekt = "Keskmine";
        }
        else if (this.efektVarv() == 3) {
            this.hinnangEfekt = "Kõrge";
        }
        return this.hinnangEfekt;
    }
    makseVarv() {
        this.madalStringm = localStorage.getItem(this.keym);
        this.madalNumberm = Number(this.madalStringm);
        return this.madalNumberm;
    }
    makseHinnang() {
        if (this.makseVarv() == 1) {
            this.hinnangMakse = "Madal";
        }
        else if (this.makseVarv() == 2) {
            this.hinnangMakse = "Keskmine";
        }
        else if (this.makseVarv() == 3) {
            this.hinnangMakse = "Kõrge";
        }
        return this.hinnangMakse;
    }
    voimVarv() {
        this.madalStringf = localStorage.getItem(this.keyf);
        this.madalNumberf = Number(this.madalStringf);
        return this.madalNumberf;
    }
    voimHinnang() {
        if (this.voimVarv() == 1) {
            this.hinnangVoim = "Madal";
        }
        else if (this.voimVarv() == 2) {
            this.hinnangVoim = "Keskmine";
        }
        else if (this.voimVarv() == 3) {
            this.hinnangVoim = "Kõrge";
        }
        return this.hinnangVoim;
    }
    tasuvVarv() {
        this.madalStringt = localStorage.getItem(this.keyt);
        this.madalNumbert = Number(this.madalStringt);
        return this.madalNumbert;
    }
    tasuvHinnang() {
        if (this.tasuvVarv() == 1) {
            this.hinnangTasuv = "Madal";
        }
        else if (this.tasuvVarv() == 2) {
            this.hinnangTasuv = "Keskmine";
        }
        else if (this.tasuvVarv() == 3) {
            this.hinnangTasuv = "Kõrge";
        }
        return this.hinnangTasuv;
    }
    toojoudVarv() {
        this.madalStringj = localStorage.getItem(this.keyj);
        this.madalNumberj = Number(this.madalStringj);
        return this.madalNumberj;
    }
    toojoudHinnang() {
        if (this.toojoudVarv() == 1) {
            this.hinnangToojoud = "Madal";
        }
        else if (this.toojoudVarv() == 2) {
            this.hinnangToojoud = "Keskmine";
        }
        else if (this.toojoudVarv() == 3) {
            this.hinnangToojoud = "Kõrge";
        }
        else if (this.toojoudVarv() == 4) {
            this.hinnangToojoud = "Andmed puudu";
        }
        return this.hinnangToojoud;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Yld3Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Yld3Component, isStandalone: true, selector: "yld3-component", ngImport: i0, template: "<div class=\"frame\">\r\n\r\n<div class=\"div-3\">\r\n  <!--div class=\"frame-wrapper\"-->\r\n\r\n    <div [ngClass] =\"{'frame-wrapperx':efektVarv() ==1 ,'frame-wrapperxa':efektVarv() ==2, 'frame-wrapperxb':efektVarv() ==3}\" >\r\n\r\n    <div class=\"div-4\">\r\n           \r\n      <div class=\"div-5\">\r\n        <div [ngClass] = \"{'ellipse-2x':efektVarv() ==1,'ellipse-2xa':efektVarv() ==2,'ellipse-2xb':efektVarv() ==3}\">\r\n        <!--div class=\"ellipse-2x\"></div-->\r\n        </div>\r\n        <div class=\"text-wrapper-6\">\r\n        <div [ngClass] =\"{'text-wrapper-6x':efektVarv() ==1 ,'text-wrapper-6xa':efektVarv() ==2, 'text-wrapper-6xb':efektVarv() ==3}\" >\r\n        Efektiivsus\r\n          <!--div class=\"text-wrapper-6\">Efektiivsus</div-->\r\n        </div>\r\n        </div>\r\n      </div>\r\n      <p class=\"element-aastal-muutuva\">\r\n        <span class=\"text-wrapper-7\">{{ efektHinnang() }}<br /></span> <span class=\"text-wrapper-8\"></span>\r\n      </p>\r\n\r\n    </div>\r\n\r\n    </div>\r\n\r\n  <!--/div-->\r\n  <!--div class=\"frame-wrapper\"-->\r\n  \r\n  <div [ngClass] =\"{'frame-wrapperx':makseVarv() ==1 ,'frame-wrapperxa':makseVarv() ==2, 'frame-wrapperxb':makseVarv() ==3}\" >\r\n  \r\n    <div class=\"div-4\">\r\n      <div class=\"div-5\">\r\n      <div [ngClass] = \"{'ellipse-2x':makseVarv() ==1,'ellipse-2xa':makseVarv() ==2,'ellipse-2xb':makseVarv() ==3}\"></div>\r\n      <div class=\"text-wrapper-6\">\r\n      \r\n        <div [ngClass] =\"{'text-wrapper-6x':makseVarv() ==1 ,'text-wrapper-6xa':makseVarv() ==2, 'text-wrapper-6xb':makseVarv() ==3}\" >\r\n        Maksev\u00F5ime\r\n        <!--div class=\"ellipse-2\"></div-->\r\n        <!--div class=\"text-wrapper-6\">Maksev\u00F5ime</div-->\r\n      </div>\r\n      </div>\r\n    </div>\r\n     \r\n    <p class=\"element-aastal-muutuva\">\r\n        <span class=\"text-wrapper-7\">{{ makseHinnang() }}<br /></span> <span class=\"text-wrapper-8\"></span>\r\n      </p>\r\n  \r\n    </div>\r\n  \r\n  \r\n  </div>\r\n  <!--/div-->\r\n\r\n\r\n\r\n  <!--div class=\"div-wrapper\"-->\r\n  \r\n  <div [ngClass] =\"{'frame-wrapperx':voimVarv() ==1 ,'frame-wrapperxa':voimVarv() ==2, 'frame-wrapperxb':voimVarv() ==3}\" >\r\n\r\n    <div class=\"div-4\">\r\n      <div class=\"div-5\">\r\n\r\n      <div [ngClass] = \"{'ellipse-2x':voimVarv() ==1,'ellipse-2xa':voimVarv() ==2,'ellipse-2xb':voimVarv() ==3}\"></div>\r\n\r\n      <div class=\"text-wrapper-6\">\r\n      \r\n      <div [ngClass] =\"{'text-wrapper-6x':voimVarv() ==1 ,'text-wrapper-6xa':voimVarv() ==2, 'text-wrapper-6xb':voimVarv() ==3}\" >\r\n\r\n        Finantsv\u00F5imendus\r\n\r\n      </div>\r\n      </div> \r\n        <!--div class=\"ellipse-3\"></div-->\r\n        <!--div class=\"text-wrapper-9\">Finantsv\u00F5imendus</div-->\r\n      </div>\r\n      <p class=\"element-aastal-muutuva\">\r\n        <span class=\"text-wrapper-7\">{{ voimHinnang() }}<br /></span> <span class=\"text-wrapper-8\"></span>\r\n      </p>\r\n    </div>\r\n  \r\n  </div>\r\n  <!--/div-->\r\n  \r\n  \r\n  \r\n  <!--div class=\"div-wrapper\"-->\r\n  <div [ngClass] =\"{'frame-wrapperx':tasuvVarv() ==1 ,'frame-wrapperxa':tasuvVarv() ==2, 'frame-wrapperxb':tasuvVarv() ==3}\" >\r\n\r\n    <div class=\"div-4\">\r\n      <div class=\"div-5\">\r\n\r\n      <div [ngClass] = \"{'ellipse-2x':tasuvVarv() ==1,'ellipse-2xa':tasuvVarv() ==2,'ellipse-2xb':tasuvVarv() ==3}\"></div>\r\n\r\n        <!--div class=\"ellipse-3\"></div-->\r\n\r\n        <div class=\"text-wrapper-6\">\r\n      \r\n        <div [ngClass] =\"{'text-wrapper-6x':tasuvVarv() ==1 ,'text-wrapper-6xa':tasuvVarv() ==2, 'text-wrapper-6xb':tasuvVarv() ==3}\" >\r\n\r\n          Tasuvus\r\n\r\n        </div>\r\n        </div> \r\n\r\n        <!--iv class=\"text-wrapper-9\">Tasuvus</div-->\r\n      \r\n      \r\n      \r\n      \r\n      </div>\r\n\r\n\r\n      <p class=\"element-aastal-muutuva\">\r\n        <span class=\"text-wrapper-7\">{{ tasuvHinnang() }}<br /></span> <span class=\"text-wrapper-8\"></span>\r\n      </p>\r\n    </div>\r\n  \r\n  </div>\r\n  <!--/div-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!--div class=\"frame-wrapper-2\"-->\r\n  <div [ngClass] =\"{'frame-wrapperx':toojoudVarv() ==1 ,'frame-wrapperxa':toojoudVarv() ==2, 'frame-wrapperxb':toojoudVarv() ==3, 'frame-wrapperxc':toojoudVarv() ==4}\" >\r\n\r\n    <div class=\"div-4\">\r\n      <div class=\"div-5\">\r\n      \r\n      <div [ngClass] = \"{'ellipse-2x':toojoudVarv() ==1,'ellipse-2xa':toojoudVarv() ==2,'ellipse-2xb':toojoudVarv() ==3, 'ellipse-2xc':toojoudVarv() ==4}\"></div>\r\n      \r\n        <!--div class=\"ellipse-4\"></div-->\r\n        \r\n        <div class=\"text-wrapper-6\">\r\n      \r\n        <div [ngClass] =\"{'text-wrapper-6x':toojoudVarv() ==1 ,'text-wrapper-6xa':toojoudVarv() ==2, 'text-wrapper-6xb':toojoudVarv() ==3, 'text-wrapper-6xc':toojoudVarv() ==4}\" >\r\n\r\n          T\u00F6\u00F6j\u00F5u tootlikkus\r\n\r\n        </div>\r\n        </div> \r\n        \r\n        \r\n        <!--div class=\"text-wrapper-10\">T\u00F6\u00F6j\u00F5u tootlikkus</div-->\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n      <p class=\"element-aastal-muutuva\">\r\n        <span class=\"text-wrapper-7\">{{ toojoudHinnang() }}<br /></span> <span class=\"text-wrapper-8\"></span>\r\n      </p>\r\n    </div>\r\n  \r\n  </div>\r\n  <!--/div-->\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n</div>", styles: ["@charset \"UTF-8\";.frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:16px;padding:24px;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .div-2{display:flex;flex-direction:column;width:555px;height:183px;align-items:flex-start;justify-content:center;gap:16px;position:relative}.frame .ettev-te-on-k-rge{position:relative;width:627px;height:88px;margin-right:-72px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:16px;letter-spacing:0;line-height:24px}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:16px;letter-spacing:0;line-height:24px}.frame .text-wrapper-5{font-family:Roboto-Bold,Helvetica;font-weight:700}.frame .div-3{display:flex;height:160px;align-items:center;gap:8px;position:relative;align-self:stretch;width:100%}.frame .frame-wrapper{display:flex;flex-direction:column;height:120px;align-items:flex-start;gap:8px;padding:16px;position:relative;flex:1;flex-grow:1;border-radius:4px}.frame .frame-wrapperx{background-color:#fceeee;display:flex;flex-direction:column;height:120px;align-items:flex-start;gap:8px;padding:16px;position:relative;flex:1;flex-grow:1;border-radius:4px}.frame .frame-wrapperxa{background-color:#fbe9df;display:flex;flex-direction:column;height:120px;align-items:flex-start;gap:8px;padding:16px;position:relative;flex:1;flex-grow:1;border-radius:4px}.frame .frame-wrapperxb{background-color:#ecf4ef;display:flex;flex-direction:column;height:120px;align-items:flex-start;gap:8px;padding:16px;position:relative;flex:1;flex-grow:1;border-radius:4px}.frame .frame-wrapperxc{background-color:#f2f3f3;display:flex;flex-direction:column;height:120px;align-items:flex-start;gap:8px;padding:16px;position:relative;flex:1;flex-grow:1;border-radius:4px}.frame .div-4{display:inline-flex;flex-direction:column;align-items:flex-start;position:relative;flex:0 0 auto;margin-right:-45.6px}.frame .div-5{display:inline-flex;align-items:center;gap:4px;position:relative;flex:0 0 auto}.frame .ellipse-2x{background-color:#d73e3e;position:relative;width:8px;margin-bottom:2px;height:8px;border-radius:4px}.frame .ellipse-2xa{background-color:#e67300;width:8px;margin-bottom:2px;height:8px;border-radius:4px}.frame .ellipse-2xb{background-color:#286e44;width:8px;margin-bottom:2px;height:8px;border-radius:4px}.frame .ellipse-2xc{background-color:#5d6071;width:8px;margin-bottom:2px;height:8px;border-radius:4px}.frame .text-wrapper-6{position:relative;width:fit-content;margin-top:-1px;font-family:Roboto-Regular,Helvetica;font-weight:400;font-size:12px;letter-spacing:0;line-height:24px;white-space:nowrap}.frame .text-wrapper-6 .text-wrapper-6x{color:#d73e3e}.frame .text-wrapper-6 .text-wrapper-6xa{color:#e67300}.frame .text-wrapper-6 .text-wrapper-6xb{color:#286e44}.frame .text-wrapper-6 .text-wrapper-6xc{color:#5d6071}.frame .element-aastal-muutuva{position:relative;width:214px;font-family:Roboto-Medium,Helvetica;font-weight:400;color:var(--textblack-high-emphasis);font-size:24px;letter-spacing:0;line-height:20px}.frame .text-wrapper-7{font-weight:500}.frame .text-wrapper-8{font-family:Roboto-Light,Helvetica;font-weight:300;font-size:20px;line-height:26.7px}.frame .div-wrapper{display:flex;flex-direction:column;height:120px;align-items:flex-start;gap:8px;padding:16px;position:relative;flex:1;flex-grow:1;background-color:#fbe9df;border-radius:4px}.frame .ellipse-3{position:relative;width:8px;height:8px;background-color:#e67300;border-radius:4px}.frame .text-wrapper-9{position:relative;width:fit-content;margin-top:-1px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#e67300;font-size:12px;letter-spacing:0;line-height:24px;white-space:nowrap}.frame .frame-wrapper-2{display:flex;flex-direction:column;height:120px;align-items:flex-start;gap:8px;padding:16px;position:relative;flex:1;flex-grow:1;background-color:#fceeee;border-radius:4px}.frame .ellipse-4{position:relative;width:8px;height:8px;background-color:#d73e3e;border-radius:4px}.frame .text-wrapper-10{position:relative;width:fit-content;margin-top:-1px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#d73e3e;font-size:12px;letter-spacing:0;line-height:24px;white-space:nowrap}.frame .div-6{display:flex;height:63px;align-items:flex-start;gap:16px;position:relative;align-self:stretch;width:100%}.frame .div-7{display:flex;width:799px;align-items:center;gap:4px;position:relative}.frame .vector-5{position:relative;width:14px;height:14px}.frame .text-wrapper-11{position:relative;width:fit-content;margin-top:-1px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:var(--primaryblack-coral);font-size:16px;letter-spacing:0;line-height:24px;text-decoration:underline;white-space:nowrap}.frame .div-8{display:flex;width:216px;align-items:flex-start;gap:16px;position:relative}.frame .ellipse-5{position:relative;width:8px;height:8px;background-color:var(--errorjasper);border-radius:4px}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Yld3Component, decorators: [{
            type: Component,
            args: [{ selector: 'yld3-component', standalone: true, imports: [NgClass], template: "<div class=\"frame\">\r\n\r\n<div class=\"div-3\">\r\n  <!--div class=\"frame-wrapper\"-->\r\n\r\n    <div [ngClass] =\"{'frame-wrapperx':efektVarv() ==1 ,'frame-wrapperxa':efektVarv() ==2, 'frame-wrapperxb':efektVarv() ==3}\" >\r\n\r\n    <div class=\"div-4\">\r\n           \r\n      <div class=\"div-5\">\r\n        <div [ngClass] = \"{'ellipse-2x':efektVarv() ==1,'ellipse-2xa':efektVarv() ==2,'ellipse-2xb':efektVarv() ==3}\">\r\n        <!--div class=\"ellipse-2x\"></div-->\r\n        </div>\r\n        <div class=\"text-wrapper-6\">\r\n        <div [ngClass] =\"{'text-wrapper-6x':efektVarv() ==1 ,'text-wrapper-6xa':efektVarv() ==2, 'text-wrapper-6xb':efektVarv() ==3}\" >\r\n        Efektiivsus\r\n          <!--div class=\"text-wrapper-6\">Efektiivsus</div-->\r\n        </div>\r\n        </div>\r\n      </div>\r\n      <p class=\"element-aastal-muutuva\">\r\n        <span class=\"text-wrapper-7\">{{ efektHinnang() }}<br /></span> <span class=\"text-wrapper-8\"></span>\r\n      </p>\r\n\r\n    </div>\r\n\r\n    </div>\r\n\r\n  <!--/div-->\r\n  <!--div class=\"frame-wrapper\"-->\r\n  \r\n  <div [ngClass] =\"{'frame-wrapperx':makseVarv() ==1 ,'frame-wrapperxa':makseVarv() ==2, 'frame-wrapperxb':makseVarv() ==3}\" >\r\n  \r\n    <div class=\"div-4\">\r\n      <div class=\"div-5\">\r\n      <div [ngClass] = \"{'ellipse-2x':makseVarv() ==1,'ellipse-2xa':makseVarv() ==2,'ellipse-2xb':makseVarv() ==3}\"></div>\r\n      <div class=\"text-wrapper-6\">\r\n      \r\n        <div [ngClass] =\"{'text-wrapper-6x':makseVarv() ==1 ,'text-wrapper-6xa':makseVarv() ==2, 'text-wrapper-6xb':makseVarv() ==3}\" >\r\n        Maksev\u00F5ime\r\n        <!--div class=\"ellipse-2\"></div-->\r\n        <!--div class=\"text-wrapper-6\">Maksev\u00F5ime</div-->\r\n      </div>\r\n      </div>\r\n    </div>\r\n     \r\n    <p class=\"element-aastal-muutuva\">\r\n        <span class=\"text-wrapper-7\">{{ makseHinnang() }}<br /></span> <span class=\"text-wrapper-8\"></span>\r\n      </p>\r\n  \r\n    </div>\r\n  \r\n  \r\n  </div>\r\n  <!--/div-->\r\n\r\n\r\n\r\n  <!--div class=\"div-wrapper\"-->\r\n  \r\n  <div [ngClass] =\"{'frame-wrapperx':voimVarv() ==1 ,'frame-wrapperxa':voimVarv() ==2, 'frame-wrapperxb':voimVarv() ==3}\" >\r\n\r\n    <div class=\"div-4\">\r\n      <div class=\"div-5\">\r\n\r\n      <div [ngClass] = \"{'ellipse-2x':voimVarv() ==1,'ellipse-2xa':voimVarv() ==2,'ellipse-2xb':voimVarv() ==3}\"></div>\r\n\r\n      <div class=\"text-wrapper-6\">\r\n      \r\n      <div [ngClass] =\"{'text-wrapper-6x':voimVarv() ==1 ,'text-wrapper-6xa':voimVarv() ==2, 'text-wrapper-6xb':voimVarv() ==3}\" >\r\n\r\n        Finantsv\u00F5imendus\r\n\r\n      </div>\r\n      </div> \r\n        <!--div class=\"ellipse-3\"></div-->\r\n        <!--div class=\"text-wrapper-9\">Finantsv\u00F5imendus</div-->\r\n      </div>\r\n      <p class=\"element-aastal-muutuva\">\r\n        <span class=\"text-wrapper-7\">{{ voimHinnang() }}<br /></span> <span class=\"text-wrapper-8\"></span>\r\n      </p>\r\n    </div>\r\n  \r\n  </div>\r\n  <!--/div-->\r\n  \r\n  \r\n  \r\n  <!--div class=\"div-wrapper\"-->\r\n  <div [ngClass] =\"{'frame-wrapperx':tasuvVarv() ==1 ,'frame-wrapperxa':tasuvVarv() ==2, 'frame-wrapperxb':tasuvVarv() ==3}\" >\r\n\r\n    <div class=\"div-4\">\r\n      <div class=\"div-5\">\r\n\r\n      <div [ngClass] = \"{'ellipse-2x':tasuvVarv() ==1,'ellipse-2xa':tasuvVarv() ==2,'ellipse-2xb':tasuvVarv() ==3}\"></div>\r\n\r\n        <!--div class=\"ellipse-3\"></div-->\r\n\r\n        <div class=\"text-wrapper-6\">\r\n      \r\n        <div [ngClass] =\"{'text-wrapper-6x':tasuvVarv() ==1 ,'text-wrapper-6xa':tasuvVarv() ==2, 'text-wrapper-6xb':tasuvVarv() ==3}\" >\r\n\r\n          Tasuvus\r\n\r\n        </div>\r\n        </div> \r\n\r\n        <!--iv class=\"text-wrapper-9\">Tasuvus</div-->\r\n      \r\n      \r\n      \r\n      \r\n      </div>\r\n\r\n\r\n      <p class=\"element-aastal-muutuva\">\r\n        <span class=\"text-wrapper-7\">{{ tasuvHinnang() }}<br /></span> <span class=\"text-wrapper-8\"></span>\r\n      </p>\r\n    </div>\r\n  \r\n  </div>\r\n  <!--/div-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!--div class=\"frame-wrapper-2\"-->\r\n  <div [ngClass] =\"{'frame-wrapperx':toojoudVarv() ==1 ,'frame-wrapperxa':toojoudVarv() ==2, 'frame-wrapperxb':toojoudVarv() ==3, 'frame-wrapperxc':toojoudVarv() ==4}\" >\r\n\r\n    <div class=\"div-4\">\r\n      <div class=\"div-5\">\r\n      \r\n      <div [ngClass] = \"{'ellipse-2x':toojoudVarv() ==1,'ellipse-2xa':toojoudVarv() ==2,'ellipse-2xb':toojoudVarv() ==3, 'ellipse-2xc':toojoudVarv() ==4}\"></div>\r\n      \r\n        <!--div class=\"ellipse-4\"></div-->\r\n        \r\n        <div class=\"text-wrapper-6\">\r\n      \r\n        <div [ngClass] =\"{'text-wrapper-6x':toojoudVarv() ==1 ,'text-wrapper-6xa':toojoudVarv() ==2, 'text-wrapper-6xb':toojoudVarv() ==3, 'text-wrapper-6xc':toojoudVarv() ==4}\" >\r\n\r\n          T\u00F6\u00F6j\u00F5u tootlikkus\r\n\r\n        </div>\r\n        </div> \r\n        \r\n        \r\n        <!--div class=\"text-wrapper-10\">T\u00F6\u00F6j\u00F5u tootlikkus</div-->\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n      <p class=\"element-aastal-muutuva\">\r\n        <span class=\"text-wrapper-7\">{{ toojoudHinnang() }}<br /></span> <span class=\"text-wrapper-8\"></span>\r\n      </p>\r\n    </div>\r\n  \r\n  </div>\r\n  <!--/div-->\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n</div>", styles: ["@charset \"UTF-8\";.frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:16px;padding:24px;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .div-2{display:flex;flex-direction:column;width:555px;height:183px;align-items:flex-start;justify-content:center;gap:16px;position:relative}.frame .ettev-te-on-k-rge{position:relative;width:627px;height:88px;margin-right:-72px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:16px;letter-spacing:0;line-height:24px}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:16px;letter-spacing:0;line-height:24px}.frame .text-wrapper-5{font-family:Roboto-Bold,Helvetica;font-weight:700}.frame .div-3{display:flex;height:160px;align-items:center;gap:8px;position:relative;align-self:stretch;width:100%}.frame .frame-wrapper{display:flex;flex-direction:column;height:120px;align-items:flex-start;gap:8px;padding:16px;position:relative;flex:1;flex-grow:1;border-radius:4px}.frame .frame-wrapperx{background-color:#fceeee;display:flex;flex-direction:column;height:120px;align-items:flex-start;gap:8px;padding:16px;position:relative;flex:1;flex-grow:1;border-radius:4px}.frame .frame-wrapperxa{background-color:#fbe9df;display:flex;flex-direction:column;height:120px;align-items:flex-start;gap:8px;padding:16px;position:relative;flex:1;flex-grow:1;border-radius:4px}.frame .frame-wrapperxb{background-color:#ecf4ef;display:flex;flex-direction:column;height:120px;align-items:flex-start;gap:8px;padding:16px;position:relative;flex:1;flex-grow:1;border-radius:4px}.frame .frame-wrapperxc{background-color:#f2f3f3;display:flex;flex-direction:column;height:120px;align-items:flex-start;gap:8px;padding:16px;position:relative;flex:1;flex-grow:1;border-radius:4px}.frame .div-4{display:inline-flex;flex-direction:column;align-items:flex-start;position:relative;flex:0 0 auto;margin-right:-45.6px}.frame .div-5{display:inline-flex;align-items:center;gap:4px;position:relative;flex:0 0 auto}.frame .ellipse-2x{background-color:#d73e3e;position:relative;width:8px;margin-bottom:2px;height:8px;border-radius:4px}.frame .ellipse-2xa{background-color:#e67300;width:8px;margin-bottom:2px;height:8px;border-radius:4px}.frame .ellipse-2xb{background-color:#286e44;width:8px;margin-bottom:2px;height:8px;border-radius:4px}.frame .ellipse-2xc{background-color:#5d6071;width:8px;margin-bottom:2px;height:8px;border-radius:4px}.frame .text-wrapper-6{position:relative;width:fit-content;margin-top:-1px;font-family:Roboto-Regular,Helvetica;font-weight:400;font-size:12px;letter-spacing:0;line-height:24px;white-space:nowrap}.frame .text-wrapper-6 .text-wrapper-6x{color:#d73e3e}.frame .text-wrapper-6 .text-wrapper-6xa{color:#e67300}.frame .text-wrapper-6 .text-wrapper-6xb{color:#286e44}.frame .text-wrapper-6 .text-wrapper-6xc{color:#5d6071}.frame .element-aastal-muutuva{position:relative;width:214px;font-family:Roboto-Medium,Helvetica;font-weight:400;color:var(--textblack-high-emphasis);font-size:24px;letter-spacing:0;line-height:20px}.frame .text-wrapper-7{font-weight:500}.frame .text-wrapper-8{font-family:Roboto-Light,Helvetica;font-weight:300;font-size:20px;line-height:26.7px}.frame .div-wrapper{display:flex;flex-direction:column;height:120px;align-items:flex-start;gap:8px;padding:16px;position:relative;flex:1;flex-grow:1;background-color:#fbe9df;border-radius:4px}.frame .ellipse-3{position:relative;width:8px;height:8px;background-color:#e67300;border-radius:4px}.frame .text-wrapper-9{position:relative;width:fit-content;margin-top:-1px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#e67300;font-size:12px;letter-spacing:0;line-height:24px;white-space:nowrap}.frame .frame-wrapper-2{display:flex;flex-direction:column;height:120px;align-items:flex-start;gap:8px;padding:16px;position:relative;flex:1;flex-grow:1;background-color:#fceeee;border-radius:4px}.frame .ellipse-4{position:relative;width:8px;height:8px;background-color:#d73e3e;border-radius:4px}.frame .text-wrapper-10{position:relative;width:fit-content;margin-top:-1px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#d73e3e;font-size:12px;letter-spacing:0;line-height:24px;white-space:nowrap}.frame .div-6{display:flex;height:63px;align-items:flex-start;gap:16px;position:relative;align-self:stretch;width:100%}.frame .div-7{display:flex;width:799px;align-items:center;gap:4px;position:relative}.frame .vector-5{position:relative;width:14px;height:14px}.frame .text-wrapper-11{position:relative;width:fit-content;margin-top:-1px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:var(--primaryblack-coral);font-size:16px;letter-spacing:0;line-height:24px;text-decoration:underline;white-space:nowrap}.frame .div-8{display:flex;width:216px;align-items:flex-start;gap:16px;position:relative}.frame .ellipse-5{position:relative;width:8px;height:8px;background-color:var(--errorjasper);border-radius:4px}\n"] }]
        }] });

//import { products } from '../products';
class Yld4Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Yld4Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Yld4Component, isStandalone: true, selector: "yld4-component", ngImport: i0, template: "<p class=\"tekstike\">\r\nEluj\u00F5ulisuse sisevaade\r\n</p>\r\n\r\n<p class=\"tekstike2\">\r\nRakendus annab viimati esitatud majandusaasta aruande ja maksudeklaratsiooni andmete p\u00F5hjal hinnangu Teie ettev\u00F5tte eluj\u00F5ule. Roheline tulp joonisel n\u00E4itab, kui t\u00F5en\u00E4oliseks peab rakendus, et ettev\u00F5tte eluj\u00F5ulisus on suur. Kollane n\u00E4itab keskmise ja punane v\u00E4ikese eluj\u00F5ulisuse t\u00F5en\u00E4osust. Hinnangud on antud k\u00F5igi viie kasutatud mudeli kohta eraldi, nii on tulemus l\u00E4bipaistvam ja seda saab t\u00E4psemalt anal\u00FC\u00FCsida.\r\n</p>", styles: [".tekstike{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:32px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-23px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Yld4Component, decorators: [{
            type: Component,
            args: [{ selector: 'yld4-component', standalone: true, template: "<p class=\"tekstike\">\r\nEluj\u00F5ulisuse sisevaade\r\n</p>\r\n\r\n<p class=\"tekstike2\">\r\nRakendus annab viimati esitatud majandusaasta aruande ja maksudeklaratsiooni andmete p\u00F5hjal hinnangu Teie ettev\u00F5tte eluj\u00F5ule. Roheline tulp joonisel n\u00E4itab, kui t\u00F5en\u00E4oliseks peab rakendus, et ettev\u00F5tte eluj\u00F5ulisus on suur. Kollane n\u00E4itab keskmise ja punane v\u00E4ikese eluj\u00F5ulisuse t\u00F5en\u00E4osust. Hinnangud on antud k\u00F5igi viie kasutatud mudeli kohta eraldi, nii on tulemus l\u00E4bipaistvam ja seda saab t\u00E4psemalt anal\u00FC\u00FCsida.\r\n</p>", styles: [".tekstike{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:32px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-23px}\n"] }]
        }] });

class Graaf10Component {
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

class GraafMudelEfektComponent {
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

//import { products } from '../products';
class Terminal1Component {
    constructor() {
        //  effmadal = new XteechangeComponent;
        //  message3 = this.message2.model1y1;
        this.tekst1 = 'Ettevõtte efektiivsus on teiste ettevõtetega võrreldes ';
        this.tekst2 = '. See tähendab, et võrreldes teiste ettevõtetega kasutatakse varadesse investeeritud vahendeid ';
        this.tekst3 = '. Efektiivsust aitab suurendada see, kui müügitulu kasvab rohkem (või kahaneb vähem) kui keskmine vara, lühiajalised nõuded ja/või varud.';
        this.muutuja1 = '';
        this.muutuja2 = '';
        this.koondEfektTekst = '';
        this.key = 'efektMadal';
        this.localValue = '';
        this.key2 = 'efektKeskmine';
        this.key3 = 'efektKorge';
    }
    //this.numberValue = xtee.model1y1;
    //this.numberValue2 = xtee.model1y2;
    //this.numberValue3 = xtee.model1y3;
    getEfektMadal() {
        this.effmadal = new XteechangeComponent;
        this.madalNumber = this.effmadal.model1y1;
        // this.madalNumber = XteechangeComponent.model1y1;
        //this.madalString = localStorage.getItem(this.key);
        //this.madalNumber=Number(this.madalString);
        return this.madalNumber;
    }
    getEfektKeskmine() {
        this.effkeskmine = new XteechangeComponent;
        this.keskmineNumber = this.effkeskmine.model1y2;
        //this.keskmineNumber = xtee.model3y2;
        //this.keskmineString = localStorage.getItem(this.key2);
        //this.keskmineNumber=Number(this.keskmineString);
        return this.keskmineNumber;
    }
    getEfektKorge() {
        this.effkorge = new XteechangeComponent;
        this.korgeNumber = this.effkorge.model1y3;
        //this.korgeNumber = xtee.model3y3;
        //this.korgeString = localStorage.getItem(this.key3);
        //this.korgeNumber=Number(this.korgeString);
        return this.korgeNumber;
    }
    efektiivsusTekst() {
        this.getEfektMadal();
        this.getEfektKeskmine();
        this.getEfektKorge();
        if (this.madalNumber > this.keskmineNumber && this.madalNumber > this.korgeNumber) {
            this.muutuja1 = 'väiksem';
            this.muutuja2 = 'ebaefektiivsemalt';
        }
        else if (this.keskmineNumber > this.madalNumber && this.keskmineNumber > this.korgeNumber) {
            this.muutuja1 = 'sama suur';
            this.muutuja2 = 'sama efektiivselt';
        }
        else if (this.korgeNumber > this.madalNumber && this.korgeNumber > this.keskmineNumber) {
            this.muutuja1 = 'suurem';
            this.muutuja2 = 'efektiivsemalt';
        }
        else if (this.keskmineNumber === this.madalNumber && this.keskmineNumber === this.korgeNumber) {
            this.muutuja1 = 'sama suur';
            this.muutuja2 = 'sama efektiivselt';
        }
        this.koondEfektTekst = this.tekst1 + this.muutuja1 + this.tekst2 + this.muutuja2 + this.tekst3;
        localStorage.setItem("efektTekst", this.koondEfektTekst);
        return this.koondEfektTekst;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Terminal1Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Terminal1Component, isStandalone: true, selector: "terminal1-component", ngImport: i0, template: "<div class=\"frame\">\r\n\r\n  <div class=\"rida\">\r\n     <div class=\"group\">\r\n       <div class=\"joonisval\">\r\n         <div class=\"joonis\">\r\n             \r\n           \r\n           \r\n          <div class=\"tekstike\">\r\n           Hinnang efektiivsusele eluj\u00F5ulisuse kaudu\r\n          </div>\r\n          <br>\r\n          <br>\r\n          <div class=\"tekstike2\"> \r\n            {{efektiivsusTekst()}}\r\n            <!--{{madalNumber}}\r\n            {{keskmineNumber}}\r\n            {{korgeNumber}}\r\n            {{message2}}\r\n            {{message3}}-->\r\n            {{getEfektMadal()}}\r\n            {{getEfektKeskmine()}}\r\n            {{getEfektKorge()}}\r\n           \r\n          <br><br>\r\n         \r\n          </div>\r\n           \r\n         </div>\r\n         \r\n       \r\n  \r\n        </div>\r\n       \r\n     </div>\r\n     <div class=\"tekstjanupp\">\r\n       <!--div class=\"graafikuke\"-->\r\n         \r\n       <graafmudelefekt></graafmudelefekt>\r\n       <!--graaf5></graaf5-->\r\n  \r\n       <!--/div-->\r\n  \r\n       <!--div class=\"nupp\">\r\n        <button>\r\n        Vaata t\u00E4psemat p\u00F5hjendust\r\n        </button>\r\n        </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n     </div>\r\n   </div>    \r\n  \r\n  </div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:600px;height:50px;top:8px;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:255px;height:183px;align-items:flex-start;gap:1px;padding-left:340px;padding-top:0;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:900;color:red;font-style:italic;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"], dependencies: [{ kind: "component", type: GraafMudelEfektComponent, selector: "graafmudelefekt" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Terminal1Component, decorators: [{
            type: Component,
            args: [{ selector: 'terminal1-component', standalone: true, imports: [XteechangeComponent, GraafMudelEfektComponent], template: "<div class=\"frame\">\r\n\r\n  <div class=\"rida\">\r\n     <div class=\"group\">\r\n       <div class=\"joonisval\">\r\n         <div class=\"joonis\">\r\n             \r\n           \r\n           \r\n          <div class=\"tekstike\">\r\n           Hinnang efektiivsusele eluj\u00F5ulisuse kaudu\r\n          </div>\r\n          <br>\r\n          <br>\r\n          <div class=\"tekstike2\"> \r\n            {{efektiivsusTekst()}}\r\n            <!--{{madalNumber}}\r\n            {{keskmineNumber}}\r\n            {{korgeNumber}}\r\n            {{message2}}\r\n            {{message3}}-->\r\n            {{getEfektMadal()}}\r\n            {{getEfektKeskmine()}}\r\n            {{getEfektKorge()}}\r\n           \r\n          <br><br>\r\n         \r\n          </div>\r\n           \r\n         </div>\r\n         \r\n       \r\n  \r\n        </div>\r\n       \r\n     </div>\r\n     <div class=\"tekstjanupp\">\r\n       <!--div class=\"graafikuke\"-->\r\n         \r\n       <graafmudelefekt></graafmudelefekt>\r\n       <!--graaf5></graaf5-->\r\n  \r\n       <!--/div-->\r\n  \r\n       <!--div class=\"nupp\">\r\n        <button>\r\n        Vaata t\u00E4psemat p\u00F5hjendust\r\n        </button>\r\n        </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n     </div>\r\n   </div>    \r\n  \r\n  </div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:600px;height:50px;top:8px;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:255px;height:183px;align-items:flex-start;gap:1px;padding-left:340px;padding-top:0;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:900;color:red;font-style:italic;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"] }]
        }] });

class GraafMudelMaksComponent {
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

//import { products } from '../products';
class Terminal2Component {
    constructor() {
        this.tekst1 = 'Ettevõtte maksevõime on teiste ettevõtetega võrreldes ';
        this.tekst2 = '. Lühiajalise maksevõime ehk likviidsuse suhtarvud näitavad ettevõtte võimet katta oma lühiajalisi kohustusi. Teisisõnu seda, kas ettevõttel on piisavalt raha võlgnevuste tasumiseks. Maksevõimet aitab suurendada see, kui lühiajalisi kohustusi vähendatakse rohkem (või suurendatakse vähem) kui käibevara, sh raha, likviidseid väärtpabereid ja/või laekumata arveid.';
        //  tekst3 = '. Efektiivsust aitab suurendada see, kui müügitulu kasvab rohkem (või kahaneb vähem) kui keskmine vara, lühiajalised nõuded ja/või varud.';
        this.muutuja1 = '';
        //  muutuja2 = '';
        this.koondEfektTekst = '';
        this.key = 'makseMadal';
        this.localValue = '';
        this.key2 = 'makseKeskmine';
        this.key3 = 'makseKorge';
    }
    getMakseMadal() {
        this.maksemadal = new XteechangeComponent;
        this.madalNumber = this.maksemadal.model2y1;
        //this.madalString = localStorage.getItem(this.key);
        //this.madalNumber=Number(this.madalString);
        return this.madalNumber;
    }
    getMakseKeskmine() {
        this.maksekeskmine = new XteechangeComponent;
        this.keskmineNumber = this.maksekeskmine.model2y2;
        //this.keskmineString = localStorage.getItem(this.key2);
        //this.keskmineNumber=Number(this.keskmineString);
        return this.keskmineNumber;
    }
    getMakseKorge() {
        this.maksekorge = new XteechangeComponent;
        this.korgeNumber = this.maksekorge.model2y3;
        //this.korgeString = localStorage.getItem(this.key3);
        //this.korgeNumber=Number(this.korgeString);
        return this.korgeNumber;
    }
    maksevoimeTekst() {
        this.getMakseMadal();
        this.getMakseKeskmine();
        this.getMakseKorge();
        if (this.madalNumber > this.keskmineNumber && this.madalNumber > this.korgeNumber) {
            this.muutuja1 = 'väiksem';
            //this.muutuja2 = 'ebaefektiivsemalt';
        }
        else if (this.keskmineNumber > this.madalNumber && this.keskmineNumber > this.korgeNumber) {
            this.muutuja1 = 'sama suur';
            //this.muutuja2 = 'sama efektiivselt';
        }
        else if (this.korgeNumber > this.madalNumber && this.korgeNumber > this.keskmineNumber) {
            this.muutuja1 = 'suurem';
            //this.muutuja2 = 'efektiivsemalt';
        }
        else if (this.keskmineNumber === this.madalNumber && this.keskmineNumber === this.korgeNumber) {
            this.muutuja1 = 'sama suur';
            //this.muutuja2 = 'sama efektiivselt';
        }
        this.koondEfektTekst = this.tekst1 + this.muutuja1 + this.tekst2;
        localStorage.setItem("makseTekst", this.koondEfektTekst);
        return this.koondEfektTekst;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Terminal2Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Terminal2Component, isStandalone: true, selector: "terminal2-component", ngImport: i0, template: "<div class=\"frame\">\r\n\r\n<div class=\"rida\">\r\n   <div class=\"group\">\r\n     <div class=\"joonisval\">\r\n       <div class=\"joonis\">\r\n           \r\n         \r\n         \r\n        <div class=\"tekstike\">\r\n         Hinnang maksev\u00F5imele eluj\u00F5ulisuse kaudu\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"tekstike2\"> \r\n        {{ maksevoimeTekst()}}\r\n        </div>\r\n         \r\n       </div>\r\n       \r\n     \r\n\r\n      </div>\r\n     \r\n   </div>\r\n   <div class=\"tekstjanupp\">\r\n     <!--div class=\"graafikuke\"-->\r\n       \r\n      <graafmudelmaks></graafmudelmaks>\r\n     <!--graaf6></graaf6-->\r\n\r\n     <!--/div-->\r\n\r\n     <!--div class=\"nupp\">\r\n      <button> \r\n      Vaata t\u00E4psemat p\u00F5hjendust\r\n      </button>\r\n      </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n   </div>\r\n </div>    \r\n\r\n</div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:600px;height:50px;top:8px;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:255px;height:183px;align-items:flex-start;gap:1px;padding-left:340px;padding-top:0;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"], dependencies: [{ kind: "component", type: GraafMudelMaksComponent, selector: "graafmudelmaks" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Terminal2Component, decorators: [{
            type: Component,
            args: [{ selector: 'terminal2-component', standalone: true, imports: [XteechangeComponent, GraafMudelMaksComponent], template: "<div class=\"frame\">\r\n\r\n<div class=\"rida\">\r\n   <div class=\"group\">\r\n     <div class=\"joonisval\">\r\n       <div class=\"joonis\">\r\n           \r\n         \r\n         \r\n        <div class=\"tekstike\">\r\n         Hinnang maksev\u00F5imele eluj\u00F5ulisuse kaudu\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"tekstike2\"> \r\n        {{ maksevoimeTekst()}}\r\n        </div>\r\n         \r\n       </div>\r\n       \r\n     \r\n\r\n      </div>\r\n     \r\n   </div>\r\n   <div class=\"tekstjanupp\">\r\n     <!--div class=\"graafikuke\"-->\r\n       \r\n      <graafmudelmaks></graafmudelmaks>\r\n     <!--graaf6></graaf6-->\r\n\r\n     <!--/div-->\r\n\r\n     <!--div class=\"nupp\">\r\n      <button> \r\n      Vaata t\u00E4psemat p\u00F5hjendust\r\n      </button>\r\n      </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n   </div>\r\n </div>    \r\n\r\n</div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:600px;height:50px;top:8px;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:255px;height:183px;align-items:flex-start;gap:1px;padding-left:340px;padding-top:0;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"] }]
        }] });

class GraafMudelVoimComponent {
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

//import { products } from '../products';
class Terminal3Component {
    constructor() {
        this.tekst1 = 'Ettevõtte finantsvõimendus on teiste sarnaste ettevõtetega võrreldes ';
        this.tekst2 = '. See tähendab, et ettevõtte võime tasuda lühi- ja pikaajalisi kohustusi on ';
        this.tekst3 = '. Finantsvõimenduse ehk kapitali struktuuri suhtarvud näitavad, kui palju kasutab ettevõte laenukapitali, ehk ettevõtte võimet tasuda lühi- ja pikaajalisi kohustusi. Laenukapitali ehk võõrkapitali hulka kuuluvad näiteks võetud laenud, ettevõtja emiteeritud ja kaubeldavad võlakohustised ning rahaturuinstrumendid.';
        this.muutuja1 = '';
        this.muutuja2 = '';
        this.koondEfektTekst = '';
        this.key = 'voimMadal';
        this.localValue = '';
        this.key2 = 'voimKeskmine';
        this.key3 = 'voimKorge';
    }
    getVoimMadal() {
        this.voimmadal = new XteechangeComponent;
        this.madalNumber = this.voimmadal.model3y1;
        //this.madalString = localStorage.getItem(this.key);
        //this.madalNumber=Number(this.madalString);
        return this.madalNumber;
    }
    getVoimKeskmine() {
        this.voimkeskmine = new XteechangeComponent;
        this.keskmineNumber = this.voimkeskmine.model3y2;
        //this.keskmineString = localStorage.getItem(this.key2);
        //this.keskmineNumber=Number(this.keskmineString);
        return this.keskmineNumber;
    }
    getVoimKorge() {
        this.voimkorge = new XteechangeComponent;
        this.korgeNumber = this.voimkorge.model3y3;
        //this.korgeString = localStorage.getItem(this.key3);
        //this.korgeNumber=Number(this.korgeString);
        return this.korgeNumber;
    }
    finantsvoimendusTekst() {
        this.getVoimMadal();
        this.getVoimKeskmine();
        this.getVoimKorge();
        if (this.madalNumber > this.keskmineNumber && this.madalNumber > this.korgeNumber) {
            this.muutuja1 = 'suurem';
            this.muutuja2 = 'ohustatud';
        }
        else if (this.keskmineNumber > this.madalNumber && this.keskmineNumber > this.korgeNumber) {
            this.muutuja1 = 'sama suur';
            this.muutuja2 = 'keskpärane';
        }
        else if (this.korgeNumber > this.madalNumber && this.korgeNumber > this.keskmineNumber) {
            this.muutuja1 = 'väiksem';
            this.muutuja2 = 'tagatud';
        }
        else if (this.keskmineNumber === this.madalNumber && this.keskmineNumber === this.korgeNumber) {
            this.muutuja1 = 'sama suur';
            this.muutuja2 = 'keskpärane';
        }
        this.koondEfektTekst = this.tekst1 + this.muutuja1 + this.tekst2 + this.muutuja2 + this.tekst3;
        localStorage.setItem("voimeTekst", this.koondEfektTekst);
        return this.koondEfektTekst;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Terminal3Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Terminal3Component, isStandalone: true, selector: "terminal3-component", ngImport: i0, template: "<div class=\"frame\">\r\n\r\n<div class=\"rida\">\r\n   <div class=\"group\">\r\n     <div class=\"joonisval\">\r\n       <div class=\"joonis\">\r\n           \r\n         \r\n         \r\n        <div class=\"tekstike\">\r\n         Hinnang finantsv\u00F5imendusele eluj\u00F5ulisuse kaudu\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"tekstike2\"> \r\n          \r\n          {{ finantsvoimendusTekst() }}\r\n          \r\n        </div>\r\n         \r\n       </div>\r\n       \r\n     \r\n\r\n      </div>\r\n     \r\n   </div>\r\n   <div class=\"tekstjanupp\">\r\n     <!--div class=\"graafikuke\"-->\r\n       \r\n     <graafmudelvoim></graafmudelvoim>\r\n     <!--graaf5></graaf5-->\r\n\r\n     <!--/div-->\r\n\r\n     <!--div class=\"nupp\">\r\n      <button>\r\n      Vaata t\u00E4psemat p\u00F5hjendust\r\n      </button>\r\n      </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n   </div>\r\n </div>    \r\n\r\n</div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:600px;height:50px;top:8px;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:255px;height:183px;align-items:flex-start;gap:1px;padding-left:340px;padding-top:0;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"], dependencies: [{ kind: "component", type: GraafMudelVoimComponent, selector: "graafmudelvoim" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Terminal3Component, decorators: [{
            type: Component,
            args: [{ selector: 'terminal3-component', standalone: true, imports: [XteechangeComponent, GraafMudelVoimComponent], template: "<div class=\"frame\">\r\n\r\n<div class=\"rida\">\r\n   <div class=\"group\">\r\n     <div class=\"joonisval\">\r\n       <div class=\"joonis\">\r\n           \r\n         \r\n         \r\n        <div class=\"tekstike\">\r\n         Hinnang finantsv\u00F5imendusele eluj\u00F5ulisuse kaudu\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"tekstike2\"> \r\n          \r\n          {{ finantsvoimendusTekst() }}\r\n          \r\n        </div>\r\n         \r\n       </div>\r\n       \r\n     \r\n\r\n      </div>\r\n     \r\n   </div>\r\n   <div class=\"tekstjanupp\">\r\n     <!--div class=\"graafikuke\"-->\r\n       \r\n     <graafmudelvoim></graafmudelvoim>\r\n     <!--graaf5></graaf5-->\r\n\r\n     <!--/div-->\r\n\r\n     <!--div class=\"nupp\">\r\n      <button>\r\n      Vaata t\u00E4psemat p\u00F5hjendust\r\n      </button>\r\n      </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n   </div>\r\n </div>    \r\n\r\n</div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:600px;height:50px;top:8px;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:255px;height:183px;align-items:flex-start;gap:1px;padding-left:340px;padding-top:0;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"] }]
        }] });

class GraafMudelTasuvComponent {
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

//import { products } from '../products';
class Terminal4Component {
    constructor() {
        this.tekst1 = 'Ettevõtte tasuvus on teiste ettevõtetega võrreldes ';
        this.tekst2 = '. Tasuvuse suhtarvud näitavad ettevõtte rentaablust ehk seda, kui efektiivselt suudab ettevõte oma vara kasutada ning kulusid kontrolli all hoida, et tagada oodatav tulusus. Ettevõtte käibe ärirentaablus on ';
        this.tekst3 = ' ja ettevõttesse investeeritud varade puhasrentaablus ';
        this.tekst4 = '. Tasuvuse suurendamiseks tuleb teatud müügitulu ja/või varade mahu juures luua suhteliselt enam kasumit.';
        this.muutuja1 = '';
        this.muutuja2 = '';
        this.muutuja3 = '';
        this.koondEfektTekst = '';
        this.key = 'tasuvMadal';
        this.localValue = '';
        this.key2 = 'tasuvKeskmine';
        this.key3 = 'tasuvKorge';
    }
    getTasuvMadal() {
        this.tasuvmadal = new XteechangeComponent;
        this.madalNumber = this.tasuvmadal.model4y1;
        //this.madalString = localStorage.getItem(this.key);
        //this.madalNumber=Number(this.madalString);
        return this.madalNumber;
    }
    getTasuvKeskmine() {
        this.tasuvkeskmine = new XteechangeComponent;
        this.keskmineNumber = this.tasuvkeskmine.model4y2;
        //this.keskmineString = localStorage.getItem(this.key2);
        //this.keskmineNumber=Number(this.keskmineString);
        return this.keskmineNumber;
    }
    getTasuvKorge() {
        this.tasuvkorge = new XteechangeComponent;
        this.korgeNumber = this.tasuvkorge.model4y3;
        //this.korgeString = localStorage.getItem(this.key3);
        //this.korgeNumber=Number(this.korgeString);
        return this.korgeNumber;
    }
    tasuvusTekst() {
        this.getTasuvMadal();
        this.getTasuvKeskmine();
        this.getTasuvKorge();
        if (this.madalNumber > this.keskmineNumber && this.madalNumber > this.korgeNumber) {
            this.muutuja1 = 'väiksem';
            this.muutuja2 = 'väike';
            this.muutuja3 = 'väike';
        }
        else if (this.keskmineNumber > this.madalNumber && this.keskmineNumber > this.korgeNumber) {
            this.muutuja1 = 'sama suur';
            this.muutuja2 = 'keskpärane';
            this.muutuja3 = 'keskpärane';
        }
        else if (this.korgeNumber > this.madalNumber && this.korgeNumber > this.keskmineNumber) {
            this.muutuja1 = 'suurem';
            this.muutuja2 = 'suur';
            this.muutuja3 = 'suur';
        }
        else if (this.keskmineNumber === this.madalNumber && this.keskmineNumber === this.korgeNumber) {
            this.muutuja1 = 'sama suur';
            this.muutuja2 = 'keskpärane';
            this.muutuja3 = 'keskpärane';
        }
        this.koondEfektTekst = this.tekst1 + this.muutuja1 + this.tekst2 + this.muutuja2 + this.tekst3 + this.muutuja3 + this.tekst4;
        localStorage.setItem("tasuvusTekst", this.koondEfektTekst);
        return this.koondEfektTekst;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Terminal4Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Terminal4Component, isStandalone: true, selector: "terminal4-component", ngImport: i0, template: "<div class=\"frame\">\r\n\r\n<div class=\"rida\">\r\n   <div class=\"group\">\r\n     <div class=\"joonisval\">\r\n       <div class=\"joonis\">\r\n           \r\n         \r\n         \r\n        <div class=\"tekstike\">\r\n         Hinnang tasuvusele eluj\u00F5ulisuse kaudu\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"tekstike2\"> \r\n          {{ tasuvusTekst() }}\r\n        </div>\r\n         \r\n       </div>\r\n       \r\n     \r\n\r\n      </div>\r\n     \r\n   </div>\r\n   <div class=\"tekstjanupp\">\r\n     <!--div class=\"graafikuke\"-->\r\n       \r\n     <graafmudeltasuv></graafmudeltasuv>\r\n     <!--graaf5></graaf5-->\r\n\r\n     <!--/div-->\r\n\r\n     <!--div class=\"nupp\">\r\n      <button>\r\n      Vaata t\u00E4psemat p\u00F5hjendust\r\n      </button>\r\n      </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n   </div>\r\n </div>    \r\n\r\n</div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:600px;height:50px;top:8px;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:255px;height:183px;align-items:flex-start;gap:1px;padding-left:340px;padding-top:0;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"], dependencies: [{ kind: "component", type: GraafMudelTasuvComponent, selector: "graafmudeltasuv" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Terminal4Component, decorators: [{
            type: Component,
            args: [{ selector: 'terminal4-component', standalone: true, imports: [XteechangeComponent, GraafMudelTasuvComponent], template: "<div class=\"frame\">\r\n\r\n<div class=\"rida\">\r\n   <div class=\"group\">\r\n     <div class=\"joonisval\">\r\n       <div class=\"joonis\">\r\n           \r\n         \r\n         \r\n        <div class=\"tekstike\">\r\n         Hinnang tasuvusele eluj\u00F5ulisuse kaudu\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"tekstike2\"> \r\n          {{ tasuvusTekst() }}\r\n        </div>\r\n         \r\n       </div>\r\n       \r\n     \r\n\r\n      </div>\r\n     \r\n   </div>\r\n   <div class=\"tekstjanupp\">\r\n     <!--div class=\"graafikuke\"-->\r\n       \r\n     <graafmudeltasuv></graafmudeltasuv>\r\n     <!--graaf5></graaf5-->\r\n\r\n     <!--/div-->\r\n\r\n     <!--div class=\"nupp\">\r\n      <button>\r\n      Vaata t\u00E4psemat p\u00F5hjendust\r\n      </button>\r\n      </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n   </div>\r\n </div>    \r\n\r\n</div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:600px;height:50px;top:8px;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:255px;height:183px;align-items:flex-start;gap:1px;padding-left:340px;padding-top:0;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"] }]
        }] });

class GraafMudelToojoudComponent {
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

class GraafMudelDataComponent {
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

//import { products } from '../products';
class Terminal5Component {
    constructor() {
        this.tekst1 = 'Ettevõtte tööjõu tootlikkus on teiste ettevõtetega võrreldes ';
        this.tekst2 = '. Tööjõu tootlikkus näitab, kui palju käivet suudab ettevõte luua teatud tööjõukulude juures. Tööjõu tootlikkuse vähenemine viitab sellele, et palkade tõus on olnud suurem kui käibe kasv (või käibe vähenemine on olnud ulatuslikum kui palkade vähendamine).';
        //tekst3 = ' ja ettevõttesse investeeritud varade puhasrentaablus ';
        //tekst4 = '. Tasuvuse suurendamiseks tuleb teatud müügitulu ja/või varade mahu juures luua suhteliselt enam kasumit.';
        this.muutuja1 = '';
        //muutuja2 = '';
        //muutuja3 = '';
        this.koondEfektTekst = '';
        this.key = 'toojoudMadal';
        this.localValue = '';
        this.key2 = 'toojoudKeskmine';
        this.key3 = 'toojoudKorge';
        this.valik = 1;
        this.valikTekst = 'algtekst';
        this.toomadal = new XteechangeComponent;
        this.madalNumber = this.toomadal.model5y1;
    }
    getToojoudMadal() {
        this.toomadal = new XteechangeComponent;
        this.madalNumber = this.toomadal.model5y1;
        //this.madalString = localStorage.getItem(this.key);
        //this.madalNumber=Number(this.madalString);
        return this.madalNumber;
    }
    getToojoudKeskmine() {
        this.tookeskmine = new XteechangeComponent;
        this.keskmineNumber = this.tookeskmine.model5y2;
        //this.keskmineString = localStorage.getItem(this.key2);
        //this.keskmineNumber=Number(this.keskmineString);
        return this.keskmineNumber;
    }
    getToojoudKorge() {
        this.tookorge = new XteechangeComponent;
        this.korgeNumber = this.tookorge.model5y3;
        //this.korgeString = localStorage.getItem(this.key3);
        //this.korgeNumber=Number(this.korgeString);
        return this.korgeNumber;
    }
    //if (isNaN(this.toomadalNumber)) {
    //   localStorage.setItem("toojoudVarv", '4');
    //}
    toojoudTekstValik() {
        if (!isNaN(this.madalNumber)) {
            this.valikTekst = this.toojoudTekst();
        }
        else if (isNaN(this.madalNumber)) {
            this.valikTekst = this.toojoudTekstPuudu();
        }
        return this.valikTekst;
    }
    toojoudTekstPuudu() {
        this.puudutekst = "Sinu ettevõttel kuvamiseks vajalikud andmed puuduvad.";
        localStorage.setItem("toojoudTekst", this.puudutekst);
        return this.puudutekst;
    }
    toojoudTekst() {
        this.getToojoudMadal();
        this.getToojoudKeskmine();
        this.getToojoudKorge();
        if (this.madalNumber > this.keskmineNumber && this.madalNumber > this.korgeNumber) {
            this.muutuja1 = 'väiksem';
            //  this.muutuja2 = 'väike';
            //  this.muutuja3 = 'väike';
        }
        else if (this.keskmineNumber > this.madalNumber && this.keskmineNumber > this.korgeNumber) {
            this.muutuja1 = 'sama suur';
            //  this.muutuja2 = 'keskpärane';
            //  this.muutuja3 = 'keskpärane';
        }
        else if (this.korgeNumber > this.madalNumber && this.korgeNumber > this.keskmineNumber) {
            this.muutuja1 = 'suurem';
            //  this.muutuja2 = 'suur';
            //  this.muutuja3 = 'suur';
        }
        else if (this.keskmineNumber === this.madalNumber && this.keskmineNumber === this.korgeNumber) {
            this.muutuja1 = 'sama suur';
            //  this.muutuja2 = 'keskpärane';
            //  this.muutuja3 = 'keskpärane';
        }
        this.koondEfektTekst = this.tekst1 + this.muutuja1 + this.tekst2;
        //+this.muutuja2+this.tekst3+this.muutuja3+this.tekst4;
        localStorage.setItem("toojoudTekst", this.koondEfektTekst);
        return this.koondEfektTekst;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Terminal5Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Terminal5Component, isStandalone: true, selector: "terminal5-component", ngImport: i0, template: "<div class=\"frame\">\r\n\r\n<div class=\"rida\">\r\n   <div class=\"group\">\r\n     <div class=\"joonisval\">\r\n       <div class=\"joonis\">\r\n           \r\n         \r\n         \r\n        <div class=\"tekstike\">\r\n         Hinnang t\u00F6\u00F6j\u00F5u tootlikkusele eluj\u00F5ulisuse kaudu\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"tekstike2\"> \r\n        {{ toojoudTekstValik() }}\r\n        \r\n        \r\n        </div>\r\n         \r\n       </div>\r\n       \r\n     \r\n\r\n      </div>\r\n     \r\n   </div>\r\n   <div class=\"tekstjanupp\">\r\n     <!--div class=\"graafikuke\"-->\r\n\r\n     <graafmudeltoojoud *ngIf=\"madalNumber\"></graafmudeltoojoud>\r\n     <graafmudeldata *ngIf=\"!madalNumber\"></graafmudeldata> \r\n     <!----graafmudeltoojoud></graafmudeltoojoud--->\r\n     <!----graafmudeldata></graafmudeldata--->\r\n     <!--graaf5></graaf5-->\r\n\r\n     <!--/div-->\r\n\r\n     <!--div class=\"nupp\">\r\n      <button>\r\n      Vaata t\u00E4psemat p\u00F5hjendust\r\n      </button>\r\n      </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n   </div>\r\n </div>    \r\n\r\n</div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:600px;height:50px;top:8px;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:255px;height:183px;align-items:flex-start;gap:1px;padding-left:340px;padding-top:0;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: GraafMudelToojoudComponent, selector: "graafmudeltoojoud" }, { kind: "component", type: GraafMudelDataComponent, selector: "graafmudeldata" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Terminal5Component, decorators: [{
            type: Component,
            args: [{ selector: 'terminal5-component', standalone: true, imports: [CommonModule, XteechangeComponent, GraafMudelToojoudComponent, GraafMudelDataComponent], template: "<div class=\"frame\">\r\n\r\n<div class=\"rida\">\r\n   <div class=\"group\">\r\n     <div class=\"joonisval\">\r\n       <div class=\"joonis\">\r\n           \r\n         \r\n         \r\n        <div class=\"tekstike\">\r\n         Hinnang t\u00F6\u00F6j\u00F5u tootlikkusele eluj\u00F5ulisuse kaudu\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"tekstike2\"> \r\n        {{ toojoudTekstValik() }}\r\n        \r\n        \r\n        </div>\r\n         \r\n       </div>\r\n       \r\n     \r\n\r\n      </div>\r\n     \r\n   </div>\r\n   <div class=\"tekstjanupp\">\r\n     <!--div class=\"graafikuke\"-->\r\n\r\n     <graafmudeltoojoud *ngIf=\"madalNumber\"></graafmudeltoojoud>\r\n     <graafmudeldata *ngIf=\"!madalNumber\"></graafmudeldata> \r\n     <!----graafmudeltoojoud></graafmudeltoojoud--->\r\n     <!----graafmudeldata></graafmudeldata--->\r\n     <!--graaf5></graaf5-->\r\n\r\n     <!--/div-->\r\n\r\n     <!--div class=\"nupp\">\r\n      <button>\r\n      Vaata t\u00E4psemat p\u00F5hjendust\r\n      </button>\r\n      </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n   </div>\r\n </div>    \r\n\r\n</div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:600px;height:50px;top:8px;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:255px;height:183px;align-items:flex-start;gap:1px;padding-left:340px;padding-top:0;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"] }]
        }], ctorParameters: () => [] });

//import { products } from '../products';
class LahtealumineComponent {
    constructor() {
        this.key = 'efektTekst';
        this.key2 = 'makseTekst';
        this.key3 = 'voimeTekst';
        this.key4 = 'tasuvusTekst';
        this.key5 = 'toojoudTekst';
        this.effComp = new Terminal1Component();
        this.effComp2 = this.effComp.efektiivsusTekst();
        this.makseComp = new Terminal2Component();
        this.makseComp2 = this.makseComp.maksevoimeTekst();
        this.voimeComp = new Terminal3Component;
        this.voimeComp2 = this.voimeComp.finantsvoimendusTekst();
        this.tasuComp = new Terminal4Component;
        this.tasuComp2 = this.tasuComp.tasuvusTekst();
        this.tooComp = new Terminal5Component;
        this.tooComp2 = this.tooComp.toojoudTekstValik();
    }
    callFun() {
        this.effComp = new Terminal1Component();
        this.effComp2.efektiivsusTekst();
        let makseComp = new Terminal2Component();
        makseComp.maksevoimeTekst();
        let voimeComp = new Terminal3Component();
        voimeComp.finantsvoimendusTekst();
        let tasuComp = new Terminal4Component();
        tasuComp.tasuvusTekst();
        let tooComp = new Terminal5Component();
        tooComp.toojoudTekst();
        //myCompOneObj.myFunctionOne()
        return this.effComp2;
    }
    getEfektText() {
        this.efText = localStorage.getItem(this.key);
        return this.efText;
    }
    getMakseText() {
        this.mkText = localStorage.getItem(this.key2);
        return this.mkText;
    }
    getVoimeText() {
        this.vmText = localStorage.getItem(this.key3);
        return this.vmText;
    }
    getTasuvusText() {
        this.tsText = localStorage.getItem(this.key4);
        return this.tsText;
    }
    getToojoudText() {
        this.tjText = localStorage.getItem(this.key5);
        return this.tjText;
    }
    efektVarv() {
        this.efectTxt = localStorage.getItem('efektVarv');
        this.efectNo = Number(this.efectTxt);
        return this.efectNo;
    }
    makseVarv() {
        this.mksTxt = localStorage.getItem('makseVarv');
        this.mksNo = Number(this.mksTxt);
        return this.mksNo;
    }
    toojoudVarv() {
        this.tjTxt = localStorage.getItem('toojoudVarv');
        this.tjNo = Number(this.tjTxt);
        return this.tjNo;
    }
    voimVarv() {
        this.vmTxt = localStorage.getItem('voimVarv');
        this.vmNo = Number(this.vmTxt);
        return this.vmNo;
    }
    tasuvVarv() {
        this.taTxt = localStorage.getItem('tasuvVarv');
        this.taNo = Number(this.taTxt);
        return this.taNo;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: LahtealumineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: LahtealumineComponent, isStandalone: true, selector: "lahtealumine-component", ngImport: i0, template: "<!--{{callFun()}}-->\r\n\r\n<div class=\"frame-811722\">\r\n<div class=\"frame-811719\">\r\n  <div class=\"dokumendid-ja-juhiload\">\r\n    <!--div class=\"effKast effKast1\"></div-->\r\n    \r\n    <div [ngClass] = \"{'effKast1':efektVarv() ==1,'effKast2':efektVarv() ==2,' effKast3':efektVarv() ==3}\"> </div>\r\n    <div class=\"frame-811485\">\r\n      <div class=\"frame-811393\">\r\n        <div class=\"efektiivsus\">Olukord efektiivsusega</div>\r\n        <div\r\n          class=\"effetekst\"\r\n        >\r\n        {{effComp2}}\r\n          <!--{{callFun()}}-->\r\n          <!--{{getEfektText()}}-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"dokumendid-ja-juhiload\">\r\n    <!--div class=\"rectangle-290\"></div-->\r\n    <div [ngClass] = \"{'mksKast1':makseVarv() ==1,'mksKast2':makseVarv() ==2,'mksKast3':makseVarv() ==3}\"> </div>\r\n    <div class=\"frame-811485\">\r\n      <div class=\"frame-811393\">\r\n        <div class=\"makspealkiri\">Olukord maksev\u00F5imega</div>\r\n        <div\r\n          class=\"makstekst\"\r\n        >\r\n        {{makseComp2}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"dokumendid-ja-juhiload\">\r\n    <!--div class=\"rectangle-2902\"></div-->\r\n    <div [ngClass] = \"{'tjKast1':toojoudVarv() ==1,'tjKast2':toojoudVarv() ==2,'tjKast3':toojoudVarv() ==3, 'tjKast4':toojoudVarv() ==4}\"> </div>\r\n    <div class=\"frame-811485\">\r\n      <div class=\"frame-811393\">\r\n        <div class=\"toojoupealkiri\">Olukord t\u00F6\u00F6j\u00F5u tootlikkusega</div>\r\n        <div class=\"toojoutekst\">\r\n          {{tooComp2}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--div class=\"buttons-primary-icon-enabled\">\r\n    <div class=\"vaata-l-hemalt\">Vaata tehnilist infot</div>\r\n  </div-->\r\n</div>\r\n<div class=\"frame-811721\">\r\n  <div class=\"dokumendid-ja-juhiload\">\r\n    <!--div class=\"rectangle-2903\"></div-->\r\n    <div [ngClass] = \"{'vmKast1':voimVarv() ==1,'vmKast2':voimVarv() ==2,'vmKast3':voimVarv() ==3}\"> </div>\r\n    <div class=\"frame-811485\">\r\n      <div class=\"frame-811393\">\r\n        <div class=\"finvoimpealkiri\">Olukord finantsv\u00F5imendusega</div>\r\n        <div\r\n          class=\"finvoimtekst\"\r\n        >\r\n          {{voimeComp2}}     </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"dokumendid-ja-juhiload\">\r\n    <!--div class=\"rectangle-2903\"></div-->\r\n    <div [ngClass] = \"{'taKast1':tasuvVarv() ==1,'taKast2':tasuvVarv() ==2,'taKast3':tasuvVarv() ==3}\"> </div>\r\n    <div class=\"frame-811485\">\r\n      <div class=\"frame-811393\">\r\n        <div class=\"tasuvuspealkiri\">\r\n          Olukord tasuvusega\r\n        </div>\r\n        <div\r\n          class=\"tasuvustekst\"\r\n        >\r\n          {{tasuComp2}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<br><br>  \r\n\r\n<!-----{{callFun()}}-->", styles: ["@charset \"UTF-8\";.frame-811722,.frame-811722 *{box-sizing:border-box}.frame-811722{display:flex;flex-direction:row;gap:15px;align-items:flex-start;justify-content:flex-start;position:relative;padding-left:40px;padding-right:40px}.frame-811719{display:flex;flex-direction:column;gap:16px;align-items:flex-start;justify-content:flex-start;flex:1;position:relative}.dokumendid-ja-juhiload{display:flex;flex-direction:row;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--4px-elevation-box-shadow, 0px 4px 15px 0px rgba(0, 0, 0, .14))}.effKast{border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.effKast1{background-color:#d73e3e;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.effKast2{background-color:#f3722c;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.effKast3{background:#90be6d;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.mksKast1{background-color:#d73e3e;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.mksKast2{background-color:#f3722c;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.mksKast3{background:#90be6d;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.tjKast1{background-color:#d73e3e;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.tjKast2{background-color:#f3722c;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.tjKast3{background:#90be6d;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.tjKast4{background:#5d6071;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.vmKast1{background-color:#d73e3e;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.vmKast2{background-color:#f3722c;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.vmKast3{background:#90be6d;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.taKast1{background-color:#d73e3e;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.taKast2{background-color:#f3722c;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.taKast3{background:#90be6d;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.frame-811485{background:var(--primary-full-white, #ffffff);border-radius:0 4px 4px 0;padding:16px 24px;display:flex;flex-direction:row;gap:8px;align-items:flex-start;justify-content:flex-start;flex:1;position:relative}.frame-811393{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex:1;position:relative}.efektiivsus{color:var(--text-black-medium-emphasis, #4d4f5d);text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 20px);font-weight:var(--body-small-font-weight, 700);position:relative}.effetekst{color:var(--text-black-high-emphasis, #09090b);text-align:justify;font-family:var(--body-regular-bold-font-family, \"Roboto-Bold\", sans-serif);font-size:var(--body-regular-bold-font-size, 14px);line-height:var(--body-regular-bold-line-heigh, t, 14px);font-weight:var(--body-regular-bold-font-weight, 400);position:relative}.makspealkiri{color:var(--text-black-medium-emphasis, #4d4f5d);text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 20px);font-weight:var(--body-small-font-weight, 700);position:relative}.makstekst{color:var(--text-black-high-emphasis, #09090b);text-align:justify;font-family:var(--body-regular-bold-font-family, \"Roboto-Bold\", sans-serif);font-size:var(--body-regular-bold-font-size, 14px);line-height:var(--body-regular-bold-line-height, 14px);font-weight:var(--body-regular-bold-font-weight, 400);position:relative}.rectangle-2902{background:#d73e3e;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.toojoupealkiri{color:var(--text-black-medium-emphasis, #4d4f5d);text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 20px);font-weight:var(--body-small-font-weight, 700);position:relative}.toojoutekst{color:var(--text-black-high-emphasis, #09090b);text-align:justify;font-family:var(--body-regular-bold-font-family, \"Roboto-Bold\", sans-serif);font-size:var(--body-regular-bold-font-size, 14px);line-height:var(--body-regular-bold-line-height, 14px);font-weight:var(--body-regular-bold-font-weight, 400);position:relative}.buttons-primary-icon-enabled{background:var(--primary-sapphire-blue, #005aa3);border-radius:20px;padding:8px 24px;display:flex;flex-direction:row;gap:10px;align-items:center;justify-content:flex-start;flex-shrink:0;height:40px;position:relative}.vaata-l-hemalt{color:var(--primary-full-white, #ffffff);text-align:center;font-family:var(--body-regular-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-regular-font-size, 16px);line-height:var(--body-regular-line-height, 24px);font-weight:var(--body-regular-font-weight, 400);position:relative;display:flex;align-items:center;justify-content:center}.frame-811721{display:flex;flex-direction:column;gap:16px;align-items:flex-start;justify-content:flex-start;flex:1;position:relative}.rectangle-2903{background:#f3722c;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.finvoimpealkiri{color:var(--text-black-medium-emphasis, #4d4f5d);text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 20px);font-weight:var(--body-small-font-weight, 700);position:relative}.finvoimtekst{color:var(--text-black-high-emphasis, #09090b);text-align:justify;font-family:var(--body-regular-bold-font-family, \"Roboto-Bold\", sans-serif);font-size:var(--body-regular-bold-font-size, 14px);line-height:var(--body-regular-bold-line-height, 14px);font-weight:var(--body-regular-bold-font-weight, 400);position:relative}.tasuvuspealkiri{color:var(--text-black-medium-emphasis, #4d4f5d);text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 20px);font-weight:var(--body-small-font-weight, 700);position:relative}.tasuvustekst{color:var(--text-black-high-emphasis, #09090b);text-align:justify;font-family:var(--body-regular-bold-font-family, \"Roboto-Bold\", sans-serif);font-size:var(--body-regular-bold-font-size, 14px);line-height:var(--body-regular-bold-line-height, 14px);font-weight:var(--body-regular-bold-font-weight, 400);position:relative}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: LahtealumineComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lahtealumine-component', standalone: true, imports: [NgClass], template: "<!--{{callFun()}}-->\r\n\r\n<div class=\"frame-811722\">\r\n<div class=\"frame-811719\">\r\n  <div class=\"dokumendid-ja-juhiload\">\r\n    <!--div class=\"effKast effKast1\"></div-->\r\n    \r\n    <div [ngClass] = \"{'effKast1':efektVarv() ==1,'effKast2':efektVarv() ==2,' effKast3':efektVarv() ==3}\"> </div>\r\n    <div class=\"frame-811485\">\r\n      <div class=\"frame-811393\">\r\n        <div class=\"efektiivsus\">Olukord efektiivsusega</div>\r\n        <div\r\n          class=\"effetekst\"\r\n        >\r\n        {{effComp2}}\r\n          <!--{{callFun()}}-->\r\n          <!--{{getEfektText()}}-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"dokumendid-ja-juhiload\">\r\n    <!--div class=\"rectangle-290\"></div-->\r\n    <div [ngClass] = \"{'mksKast1':makseVarv() ==1,'mksKast2':makseVarv() ==2,'mksKast3':makseVarv() ==3}\"> </div>\r\n    <div class=\"frame-811485\">\r\n      <div class=\"frame-811393\">\r\n        <div class=\"makspealkiri\">Olukord maksev\u00F5imega</div>\r\n        <div\r\n          class=\"makstekst\"\r\n        >\r\n        {{makseComp2}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"dokumendid-ja-juhiload\">\r\n    <!--div class=\"rectangle-2902\"></div-->\r\n    <div [ngClass] = \"{'tjKast1':toojoudVarv() ==1,'tjKast2':toojoudVarv() ==2,'tjKast3':toojoudVarv() ==3, 'tjKast4':toojoudVarv() ==4}\"> </div>\r\n    <div class=\"frame-811485\">\r\n      <div class=\"frame-811393\">\r\n        <div class=\"toojoupealkiri\">Olukord t\u00F6\u00F6j\u00F5u tootlikkusega</div>\r\n        <div class=\"toojoutekst\">\r\n          {{tooComp2}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--div class=\"buttons-primary-icon-enabled\">\r\n    <div class=\"vaata-l-hemalt\">Vaata tehnilist infot</div>\r\n  </div-->\r\n</div>\r\n<div class=\"frame-811721\">\r\n  <div class=\"dokumendid-ja-juhiload\">\r\n    <!--div class=\"rectangle-2903\"></div-->\r\n    <div [ngClass] = \"{'vmKast1':voimVarv() ==1,'vmKast2':voimVarv() ==2,'vmKast3':voimVarv() ==3}\"> </div>\r\n    <div class=\"frame-811485\">\r\n      <div class=\"frame-811393\">\r\n        <div class=\"finvoimpealkiri\">Olukord finantsv\u00F5imendusega</div>\r\n        <div\r\n          class=\"finvoimtekst\"\r\n        >\r\n          {{voimeComp2}}     </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"dokumendid-ja-juhiload\">\r\n    <!--div class=\"rectangle-2903\"></div-->\r\n    <div [ngClass] = \"{'taKast1':tasuvVarv() ==1,'taKast2':tasuvVarv() ==2,'taKast3':tasuvVarv() ==3}\"> </div>\r\n    <div class=\"frame-811485\">\r\n      <div class=\"frame-811393\">\r\n        <div class=\"tasuvuspealkiri\">\r\n          Olukord tasuvusega\r\n        </div>\r\n        <div\r\n          class=\"tasuvustekst\"\r\n        >\r\n          {{tasuComp2}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<br><br>  \r\n\r\n<!-----{{callFun()}}-->", styles: ["@charset \"UTF-8\";.frame-811722,.frame-811722 *{box-sizing:border-box}.frame-811722{display:flex;flex-direction:row;gap:15px;align-items:flex-start;justify-content:flex-start;position:relative;padding-left:40px;padding-right:40px}.frame-811719{display:flex;flex-direction:column;gap:16px;align-items:flex-start;justify-content:flex-start;flex:1;position:relative}.dokumendid-ja-juhiload{display:flex;flex-direction:row;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--4px-elevation-box-shadow, 0px 4px 15px 0px rgba(0, 0, 0, .14))}.effKast{border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.effKast1{background-color:#d73e3e;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.effKast2{background-color:#f3722c;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.effKast3{background:#90be6d;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.mksKast1{background-color:#d73e3e;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.mksKast2{background-color:#f3722c;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.mksKast3{background:#90be6d;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.tjKast1{background-color:#d73e3e;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.tjKast2{background-color:#f3722c;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.tjKast3{background:#90be6d;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.tjKast4{background:#5d6071;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.vmKast1{background-color:#d73e3e;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.vmKast2{background-color:#f3722c;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.vmKast3{background:#90be6d;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.taKast1{background-color:#d73e3e;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.taKast2{background-color:#f3722c;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.taKast3{background:#90be6d;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.frame-811485{background:var(--primary-full-white, #ffffff);border-radius:0 4px 4px 0;padding:16px 24px;display:flex;flex-direction:row;gap:8px;align-items:flex-start;justify-content:flex-start;flex:1;position:relative}.frame-811393{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex:1;position:relative}.efektiivsus{color:var(--text-black-medium-emphasis, #4d4f5d);text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 20px);font-weight:var(--body-small-font-weight, 700);position:relative}.effetekst{color:var(--text-black-high-emphasis, #09090b);text-align:justify;font-family:var(--body-regular-bold-font-family, \"Roboto-Bold\", sans-serif);font-size:var(--body-regular-bold-font-size, 14px);line-height:var(--body-regular-bold-line-heigh, t, 14px);font-weight:var(--body-regular-bold-font-weight, 400);position:relative}.makspealkiri{color:var(--text-black-medium-emphasis, #4d4f5d);text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 20px);font-weight:var(--body-small-font-weight, 700);position:relative}.makstekst{color:var(--text-black-high-emphasis, #09090b);text-align:justify;font-family:var(--body-regular-bold-font-family, \"Roboto-Bold\", sans-serif);font-size:var(--body-regular-bold-font-size, 14px);line-height:var(--body-regular-bold-line-height, 14px);font-weight:var(--body-regular-bold-font-weight, 400);position:relative}.rectangle-2902{background:#d73e3e;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.toojoupealkiri{color:var(--text-black-medium-emphasis, #4d4f5d);text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 20px);font-weight:var(--body-small-font-weight, 700);position:relative}.toojoutekst{color:var(--text-black-high-emphasis, #09090b);text-align:justify;font-family:var(--body-regular-bold-font-family, \"Roboto-Bold\", sans-serif);font-size:var(--body-regular-bold-font-size, 14px);line-height:var(--body-regular-bold-line-height, 14px);font-weight:var(--body-regular-bold-font-weight, 400);position:relative}.buttons-primary-icon-enabled{background:var(--primary-sapphire-blue, #005aa3);border-radius:20px;padding:8px 24px;display:flex;flex-direction:row;gap:10px;align-items:center;justify-content:flex-start;flex-shrink:0;height:40px;position:relative}.vaata-l-hemalt{color:var(--primary-full-white, #ffffff);text-align:center;font-family:var(--body-regular-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-regular-font-size, 16px);line-height:var(--body-regular-line-height, 24px);font-weight:var(--body-regular-font-weight, 400);position:relative;display:flex;align-items:center;justify-content:center}.frame-811721{display:flex;flex-direction:column;gap:16px;align-items:flex-start;justify-content:flex-start;flex:1;position:relative}.rectangle-2903{background:#f3722c;border-radius:4px 0 0 4px;align-self:stretch;flex-shrink:0;width:6px;position:relative}.finvoimpealkiri{color:var(--text-black-medium-emphasis, #4d4f5d);text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 20px);font-weight:var(--body-small-font-weight, 700);position:relative}.finvoimtekst{color:var(--text-black-high-emphasis, #09090b);text-align:justify;font-family:var(--body-regular-bold-font-family, \"Roboto-Bold\", sans-serif);font-size:var(--body-regular-bold-font-size, 14px);line-height:var(--body-regular-bold-line-height, 14px);font-weight:var(--body-regular-bold-font-weight, 400);position:relative}.tasuvuspealkiri{color:var(--text-black-medium-emphasis, #4d4f5d);text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 20px);font-weight:var(--body-small-font-weight, 700);position:relative}.tasuvustekst{color:var(--text-black-high-emphasis, #09090b);text-align:justify;font-family:var(--body-regular-bold-font-family, \"Roboto-Bold\", sans-serif);font-size:var(--body-regular-bold-font-size, 14px);line-height:var(--body-regular-bold-line-height, 14px);font-weight:var(--body-regular-bold-font-weight, 400);position:relative}\n"] }]
        }], ctorParameters: () => [] });

//import { products } from '../products';
class Yld6Component {
    constructor() {
        this.ReadMore = true;
        this.visible = false;
    }
    onclick() {
        this.ReadMore = !this.ReadMore; //not equal to condition
        this.visible = !this.visible;
        //alert("lgaj");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Yld6Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Yld6Component, isStandalone: true, selector: "yld6-component", ngImport: i0, template: "<div class=\"nupp\">\r\n \r\n<button (click)=\"onclick()\">\r\n    \r\n{{ReadMore?\"Vaata l\u00E4hemalt\":\"Sulge lisainfo\"}}\r\n\r\n\r\n</button>\r\n</div>\r\n<br>\r\n<br>\r\n<ng-container *ngIf=\"visible\">\r\n<!--lahteturn-component></lahteturn-component-->\r\n<lahtealumine-component></lahtealumine-component>\r\n<!--div class=\"tekstselgit2\">\r\n  \r\n  <br>   \r\n  \r\n  <lahteinfo-component></lahteinfo-component>    \r\n    \r\n</div-->\r\n\r\n\r\n</ng-container>", styles: [".nupp button{display:block;margin-left:40px;margin-top:-5px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:152px;min-height:43px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: LahtealumineComponent, selector: "lahtealumine-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Yld6Component, decorators: [{
            type: Component,
            args: [{ selector: 'yld6-component', standalone: true, imports: [CommonModule, LahtealumineComponent], template: "<div class=\"nupp\">\r\n \r\n<button (click)=\"onclick()\">\r\n    \r\n{{ReadMore?\"Vaata l\u00E4hemalt\":\"Sulge lisainfo\"}}\r\n\r\n\r\n</button>\r\n</div>\r\n<br>\r\n<br>\r\n<ng-container *ngIf=\"visible\">\r\n<!--lahteturn-component></lahteturn-component-->\r\n<lahtealumine-component></lahtealumine-component>\r\n<!--div class=\"tekstselgit2\">\r\n  \r\n  <br>   \r\n  \r\n  <lahteinfo-component></lahteinfo-component>    \r\n    \r\n</div-->\r\n\r\n\r\n</ng-container>", styles: [".nupp button{display:block;margin-left:40px;margin-top:-5px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:152px;min-height:43px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}\n"] }]
        }] });

class Varav3Component {
    constructor() {
        this.sections = [
            {
                name: 'Efektiivsus',
                content: 'Content 1'
            },
            {
                name: 'Maksevõime',
                content: '<progn1-component></progn1-component>'
            },
            {
                name: 'Finantsvõimendus',
                content: ''
            },
            {
                name: 'Tasuvus',
                content: ''
            },
            {
                name: 'Tööjõu tootlikkus',
                content: ''
            }
        ];
        this.showComponent1 = false;
        this.showComponent2 = false;
        this.showComponent3 = false;
        this.showComponent4 = false;
        this.showComponent5 = false;
    }
    expand(index) {
        if (this.currentIndex === index) {
            this.currentIndex = null;
            return;
        }
        this.currentIndex = index;
        //alert(this.currentIndex);
        if (this.currentIndex === 0) {
            this.showComponent1 = true;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 1) {
            this.showComponent1 = false;
            this.showComponent2 = true;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 2) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = true;
            this.showComponent4 = false;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 3) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = true;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 4) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = true;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav3Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Varav3Component, isStandalone: true, selector: "varav3", ngImport: i0, template: "\r\n<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\nV\u00F5rdlusprognoos teiste ettev\u00F5tete suhtes\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2\">\r\n\r\nSiin selgitame, milliste kriteeriumide alusel sai ettev\u00F5tte hetkeolukord \u00FClaltoodud hinnangu. \u00DChtlasi on ettev\u00F5ttel v\u00F5imalik v\u00F5rrelda ennast teistega k\u00F5igi mudelite alusel, mida hinnangu andmiseks rakendati. T\u00E4psemalt loe alamlehek\u00FCljelt \u201EKuidas tulemusi m\u00F5ista?\u201C\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <terminal1-component *ngIf=\"showComponent1\"></terminal1-component>\r\n    <terminal2-component *ngIf=\"showComponent2\"></terminal2-component>\r\n    <terminal3-component *ngIf=\"showComponent3\"></terminal3-component>\r\n    <terminal4-component *ngIf=\"showComponent4\"></terminal4-component>\r\n    <terminal5-component *ngIf=\"showComponent5\"></terminal5-component>\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px;height:400px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: Terminal1Component, selector: "terminal1-component" }, { kind: "component", type: Terminal2Component, selector: "terminal2-component" }, { kind: "component", type: Terminal3Component, selector: "terminal3-component" }, { kind: "component", type: Terminal4Component, selector: "terminal4-component" }, { kind: "component", type: Terminal5Component, selector: "terminal5-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav3Component, decorators: [{
            type: Component,
            args: [{ selector: 'varav3', standalone: true, imports: [CommonModule, Terminal1Component, Terminal2Component, Terminal3Component, Terminal4Component, Terminal5Component], template: "\r\n<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\nV\u00F5rdlusprognoos teiste ettev\u00F5tete suhtes\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2\">\r\n\r\nSiin selgitame, milliste kriteeriumide alusel sai ettev\u00F5tte hetkeolukord \u00FClaltoodud hinnangu. \u00DChtlasi on ettev\u00F5ttel v\u00F5imalik v\u00F5rrelda ennast teistega k\u00F5igi mudelite alusel, mida hinnangu andmiseks rakendati. T\u00E4psemalt loe alamlehek\u00FCljelt \u201EKuidas tulemusi m\u00F5ista?\u201C\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <terminal1-component *ngIf=\"showComponent1\"></terminal1-component>\r\n    <terminal2-component *ngIf=\"showComponent2\"></terminal2-component>\r\n    <terminal3-component *ngIf=\"showComponent3\"></terminal3-component>\r\n    <terminal4-component *ngIf=\"showComponent4\"></terminal4-component>\r\n    <terminal5-component *ngIf=\"showComponent5\"></terminal5-component>\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px;height:400px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"] }]
        }] });

class IlueluComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: IlueluComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: IlueluComponent, isStandalone: true, selector: "iluelu-component", ngImport: i0, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin2\">\r\nEttev\u00F5tte eluj\u00F5ulisuse indeks on \u00FCks Eesti riigi h\u00FCvanguks t\u00F6\u00F6le pandud krattidest. Eluj\u00F5ulisuse kratt on ettev\u00F5tte abivahend ja anal\u00FC\u00FCtiline t\u00F6\u00F6riist. Selle eesm\u00E4rk on olla abiks ettev\u00F5ttele oma majandusolukorra anal\u00FC\u00FCsi juures, et \u00F5igel ajal n\u00E4ha eluj\u00F5ulisuse v\u00E4henemise (ja suurenemise) m\u00E4rke. Kratt aitab suunata ettev\u00F5tet l\u00E4hemalt anal\u00FC\u00FCsima oma majandusn\u00E4itajaid ning julgustab ette astuma samme olukorra parandamiseks.\r\n\r\n\r\n\r\n</div>\r\n</div>\r\n<br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: IlueluComponent, decorators: [{
            type: Component,
            args: [{ selector: 'iluelu-component', standalone: true, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin2\">\r\nEttev\u00F5tte eluj\u00F5ulisuse indeks on \u00FCks Eesti riigi h\u00FCvanguks t\u00F6\u00F6le pandud krattidest. Eluj\u00F5ulisuse kratt on ettev\u00F5tte abivahend ja anal\u00FC\u00FCtiline t\u00F6\u00F6riist. Selle eesm\u00E4rk on olla abiks ettev\u00F5ttele oma majandusolukorra anal\u00FC\u00FCsi juures, et \u00F5igel ajal n\u00E4ha eluj\u00F5ulisuse v\u00E4henemise (ja suurenemise) m\u00E4rke. Kratt aitab suunata ettev\u00F5tet l\u00E4hemalt anal\u00FC\u00FCsima oma majandusn\u00E4itajaid ning julgustab ette astuma samme olukorra parandamiseks.\r\n\r\n\r\n\r\n</div>\r\n</div>\r\n<br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }]
        }] });

class IlukrattComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: IlukrattComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: IlukrattComponent, isStandalone: true, selector: "ilukratt-component", ngImport: i0, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin2\">\r\nKratt on tehisintellekti tehnoloogial p\u00F5hinev praktiline rakendus. Kratt p\u00F5hineb tarkvaralisel algoritmil, mis on \u00F5ppimisv\u00F5imeline ning t\u00E4idab traditsiooniliselt inimese poolt tehtavaid \u00FClesandeid. Tegemist on kitsa tehisintellektiga (narrow AI), mis t\u00E4hendab masina v\u00F5imet tegutseda intelligentselt \u00FChes kitsas valdkonnas. \r\n<br><br>\r\nEluj\u00F5ulisuse krati superv\u00F5ime on masin\u00F5ppel p\u00F5hineva prognoosi tegemise oskus, mis lisaks ettev\u00F5tte enda majandusn\u00E4itajatele arvestab teiste Eesti majanduses tegutsevate ettev\u00F5tete tegevust, finantsn\u00E4itajaid ja laiemat majanduskonteksti. Kratt on \u00F5ppinud v\u00E4ga suurelt andmekogumilt, millele \u00FCkski ettev\u00F5te tavap\u00E4raselt ligi ei p\u00E4\u00E4se. \r\n<br><br>\r\nSamas tuleb arvestada, et tegu on siiski masinaga, t\u00E4psemalt on kratt oma sisult arvutiprogramm. See on k\u00FCll v\u00F5imeline suure hulga informatsiooni abil prognoosima teie ettev\u00F5tte eluj\u00F5ulisust, kuid sel puudub v\u00F5ime n\u00E4ha tulevikku ning arvestada k\u00F5iki asjaolusid, s\u00FCndmusi ja ettev\u00F5tte tegutsemise konteksti. Arvestada tuleb teatava veam\u00E4\u00E4raga.\r\n</div>\r\n</div>\r\n<br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: IlukrattComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ilukratt-component', standalone: true, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin2\">\r\nKratt on tehisintellekti tehnoloogial p\u00F5hinev praktiline rakendus. Kratt p\u00F5hineb tarkvaralisel algoritmil, mis on \u00F5ppimisv\u00F5imeline ning t\u00E4idab traditsiooniliselt inimese poolt tehtavaid \u00FClesandeid. Tegemist on kitsa tehisintellektiga (narrow AI), mis t\u00E4hendab masina v\u00F5imet tegutseda intelligentselt \u00FChes kitsas valdkonnas. \r\n<br><br>\r\nEluj\u00F5ulisuse krati superv\u00F5ime on masin\u00F5ppel p\u00F5hineva prognoosi tegemise oskus, mis lisaks ettev\u00F5tte enda majandusn\u00E4itajatele arvestab teiste Eesti majanduses tegutsevate ettev\u00F5tete tegevust, finantsn\u00E4itajaid ja laiemat majanduskonteksti. Kratt on \u00F5ppinud v\u00E4ga suurelt andmekogumilt, millele \u00FCkski ettev\u00F5te tavap\u00E4raselt ligi ei p\u00E4\u00E4se. \r\n<br><br>\r\nSamas tuleb arvestada, et tegu on siiski masinaga, t\u00E4psemalt on kratt oma sisult arvutiprogramm. See on k\u00FCll v\u00F5imeline suure hulga informatsiooni abil prognoosima teie ettev\u00F5tte eluj\u00F5ulisust, kuid sel puudub v\u00F5ime n\u00E4ha tulevikku ning arvestada k\u00F5iki asjaolusid, s\u00FCndmusi ja ettev\u00F5tte tegutsemise konteksti. Arvestada tuleb teatava veam\u00E4\u00E4raga.\r\n</div>\r\n</div>\r\n<br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }]
        }] });

class IlukviaComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: IlukviaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: IlukviaComponent, isStandalone: true, selector: "ilukvia-component", ngImport: i0, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin2\">\r\nEttev\u00F5tte eluj\u00F5ulisuse indeksi metoodika aluseks on \u00FCldtunnustatud majandusanal\u00FC\u00FCtika n\u00E4itajad ja p\u00F5him\u00F5tted. Peamiselt kasutatakse anal\u00FC\u00FCsil finantssuhtarve. Kratt hindab viit t\u00FC\u00FCpi eluj\u00F5ulisust: maksev\u00F5imet, efektiivsust, finantsv\u00F5imendust, tasuvust ja t\u00F6\u00F6j\u00F5ukulude tootlikkust.\r\n</div>\r\n</div>\r\n<br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: IlukviaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ilukvia-component', standalone: true, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin2\">\r\nEttev\u00F5tte eluj\u00F5ulisuse indeksi metoodika aluseks on \u00FCldtunnustatud majandusanal\u00FC\u00FCtika n\u00E4itajad ja p\u00F5him\u00F5tted. Peamiselt kasutatakse anal\u00FC\u00FCsil finantssuhtarve. Kratt hindab viit t\u00FC\u00FCpi eluj\u00F5ulisust: maksev\u00F5imet, efektiivsust, finantsv\u00F5imendust, tasuvust ja t\u00F6\u00F6j\u00F5ukulude tootlikkust.\r\n</div>\r\n</div>\r\n<br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }]
        }] });

class Ilulisaf1Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Ilulisaf1Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Ilulisaf1Component, isStandalone: true, selector: "ilulisaf1-component", ngImport: i0, template: "<br>\r\n<div class=\"tekstike2 textmargin\">\r\n  <div class=\"rowmargin2\">\r\n    Finantssuhtarve kasutatakse ettev\u00F5tte tugevuste ja n\u00F5rkuste v\u00E4ljaselgitamiseks ning ettev\u00F5tete v\u00F5rdlemiseks. Need on olulised\r\n    finantsanal\u00FC\u00FCsi t\u00F6\u00F6riistad, mis aitavad hinnata ettev\u00F5tte tulemuslikkust ja j\u00E4lgida suundumusi.\r\n  </div>\r\n  <div class=\"rowmargin\">\u00DCldjuhul eristatakse j\u00E4rgmisi suhtarvude liike:</div>\r\n  <ul>\r\n    <li>\r\n      <span style=\"font-weight: 700\"\r\n        >L\u00FChiajalise maksev\u00F5ime ehk likviidsussuhtarvud</span>\r\n      (<em>short-term solvency ratios; liquidity ratios</em>) m\u00F5\u00F5davad ettev\u00F5tte v\u00F5imet tasuda l\u00FChiajalisi kohustusi t\u00E4htajaks;\r\n    </li>\r\n    <li>\r\n      <span style=\"font-weight: 700\">Efektiivsuse suhtarvud </span> (<em\r\n        >activity ratios</em\r\n      >) m\u00F5\u00F5davad, kui t\u00F5husalt kasutab ettev\u00F5te oma vara ja kohustusi kasumi maksimeerimiseks;\r\n    </li>\r\n    <li>\r\n      <span style=\"font-weight: 700\"\r\n        >Finantsv\u00F5imenduse ehk kapitali struktuuri suhtarvud\r\n      </span>\r\n      (<em>financial leverage ratios; debt ratios</em>) n\u00E4itavad, kui palju\r\n      m\u00F5\u00F5davad, kui palju ettev\u00F5te kasutab laenukapitali, ja n\u00E4itavad v\u00F5imet tasuda l\u00FChiajalisi ja pikaajalisi kohustusi;\r\n    </li>\r\n    <li>\r\n      <span style=\"font-weight: 700\">Tasuvuse suhtarvud </span> (<em\r\n        >profitability ratios</em\r\n      >) m\u00F5\u00F5davad ettev\u00F5tte tegevuse tulemuslikkust ja v\u00F5imet investeeritud kapitali tagasi teenida;\r\n    </li>\r\n    <li>\r\n      <span style=\"font-weight: 700\">T\u00F6\u00F6j\u00F5ukulude tootlikkus </span> k\u00E4ibe\r\n      alusel n\u00E4itab, mitu eurot k\u00E4ivet saadakse \u00FChe euro t\u00F6\u00F6j\u00F5ukulude kohta.\r\n    </li>\r\n  </ul>\r\n</div>\r\n", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Ilulisaf1Component, decorators: [{
            type: Component,
            args: [{ selector: 'ilulisaf1-component', standalone: true, template: "<br>\r\n<div class=\"tekstike2 textmargin\">\r\n  <div class=\"rowmargin2\">\r\n    Finantssuhtarve kasutatakse ettev\u00F5tte tugevuste ja n\u00F5rkuste v\u00E4ljaselgitamiseks ning ettev\u00F5tete v\u00F5rdlemiseks. Need on olulised\r\n    finantsanal\u00FC\u00FCsi t\u00F6\u00F6riistad, mis aitavad hinnata ettev\u00F5tte tulemuslikkust ja j\u00E4lgida suundumusi.\r\n  </div>\r\n  <div class=\"rowmargin\">\u00DCldjuhul eristatakse j\u00E4rgmisi suhtarvude liike:</div>\r\n  <ul>\r\n    <li>\r\n      <span style=\"font-weight: 700\"\r\n        >L\u00FChiajalise maksev\u00F5ime ehk likviidsussuhtarvud</span>\r\n      (<em>short-term solvency ratios; liquidity ratios</em>) m\u00F5\u00F5davad ettev\u00F5tte v\u00F5imet tasuda l\u00FChiajalisi kohustusi t\u00E4htajaks;\r\n    </li>\r\n    <li>\r\n      <span style=\"font-weight: 700\">Efektiivsuse suhtarvud </span> (<em\r\n        >activity ratios</em\r\n      >) m\u00F5\u00F5davad, kui t\u00F5husalt kasutab ettev\u00F5te oma vara ja kohustusi kasumi maksimeerimiseks;\r\n    </li>\r\n    <li>\r\n      <span style=\"font-weight: 700\"\r\n        >Finantsv\u00F5imenduse ehk kapitali struktuuri suhtarvud\r\n      </span>\r\n      (<em>financial leverage ratios; debt ratios</em>) n\u00E4itavad, kui palju\r\n      m\u00F5\u00F5davad, kui palju ettev\u00F5te kasutab laenukapitali, ja n\u00E4itavad v\u00F5imet tasuda l\u00FChiajalisi ja pikaajalisi kohustusi;\r\n    </li>\r\n    <li>\r\n      <span style=\"font-weight: 700\">Tasuvuse suhtarvud </span> (<em\r\n        >profitability ratios</em\r\n      >) m\u00F5\u00F5davad ettev\u00F5tte tegevuse tulemuslikkust ja v\u00F5imet investeeritud kapitali tagasi teenida;\r\n    </li>\r\n    <li>\r\n      <span style=\"font-weight: 700\">T\u00F6\u00F6j\u00F5ukulude tootlikkus </span> k\u00E4ibe\r\n      alusel n\u00E4itab, mitu eurot k\u00E4ivet saadakse \u00FChe euro t\u00F6\u00F6j\u00F5ukulude kohta.\r\n    </li>\r\n  </ul>\r\n</div>\r\n", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }]
        }] });

class Ilulisaf2Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Ilulisaf2Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Ilulisaf2Component, isStandalone: true, selector: "ilulisaf2-component", ngImport: i0, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\"> \r\n      <span style=\"font-weight: 700\">Efektiivsuse suhtarvud</span>\r\n    </div>\r\n  </div>\r\n<br><br> \r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin\">\r\n  Mida efektiivsemalt ettev\u00F5tte vara kasutatakse, seda suurem on ettev\u00F5tte eluj\u00F5ulisus. Vara ostetakse teatud summa eest ja see summa (investeeritud raha) peab ennast tagasi teenima. Mida t\u00F5husamalt raha ennast tagasi teenib, seda paremini ettev\u00F5ttel l\u00E4heb. Selle v\u00E4ljaselgitamisel on abiks efektiivsuse suhtarvud. Enamlevinud on kolm efektiivsuse suhtarvu, mida ongi selles t\u00F6\u00F6s kasutatud: vara k\u00E4ibesagedus, l\u00FChiajalise v\u00F5lgnevuse k\u00E4ibekordaja ja varude k\u00E4ibekordaja.\r\n  </div>\r\n </div>\r\n <br><br>\r\n <div class=\"tekstike2 textmargin\"> \r\n<div><span style=\"font-weight: 700\">Varade k\u00E4ibesagedus </span> (<em>asset turnover</em>), mida nimetatakse ka koguvara k\u00E4ibeks, annab m\u00E4rku sellest, kui efektiivselt kasutab ettev\u00F5te oma koguvara. Kordaja arvutamiseks jagatakse varade abil saadud m\u00FC\u00FCgitulu aasta keskmise varade maksumusega ning mida suurem on tulemuse arvuline v\u00E4\u00E4rtus, seda efektiivsemalt t\u00F5en\u00E4oliselt varasid kasutatakse. Varade k\u00E4ibesagedus arvutatakse allj\u00E4rgneva valemi abil:\r\n  </div>\r\n </div> <br>\r\n <div class=\"eq-c\">\r\n  Varade k\u00E4ibesagedus =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">M\u00FC\u00FCgitulu</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">Keskmine vara</span>\r\n   </div>\r\n</div><br>\r\n\r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin\">\r\n      M\u00FC\u00FCgitulu summa saadakse kasumiaruandest aasta l\u00F5pu seisuga ja keskmine varad bilansist aasta alguse ja l\u00F5pu keskmisena. Suurem varade k\u00E4ibesagedus on ka suurema eluj\u00F5ulisuse n\u00E4itaja, sest sellest v\u00F5ib j\u00E4reldada, et raha on paigutatud paremini t\u00F6\u00F6tavatesse vahenditesse (raha teenib ennast t\u00F5husamalt tagasi).\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div> <span style=\"font-weight: 700\">L\u00FChiajalise v\u00F5lgnevuse k\u00E4ibekordaja</span> (<em>receivables turnover</em>), mida nimetatakse ka debitoorse v\u00F5lgnevuse k\u00E4ibekordajaks, n\u00E4itab, mitu korda \u00FCletab ettev\u00F5tte m\u00FC\u00FCgitulu keskmist debitoorset v\u00F5lgnevust (mis peamiselt koosneb ostjate laekumata arvetest). Teisiti \u00F6eldes peegeldab see seda, kui palju k\u00E4iberaha on v\u00F5lgnike k\u00E4es. Samuti n\u00E4itab see suhtarv, mitu korda tasutakse vaadeldava ajavahemiku jooksul keskmine debitoorne v\u00F5lgnevus. L\u00FChiajalise v\u00F5lgnevuse k\u00E4ibekordaja arvutatakse allj\u00E4rgneva valemi abil:\r\n      \r\n    </div>\r\n  </div><br>\r\n  <div class=\"eq-c\">\r\n    L\u00FChiajalise v\u00F5lgnevuse k\u00E4ibekordaja =\r\n     <div class=\"fraction\">\r\n     <span class=\"fup\">M\u00FC\u00FCgitulu</span>\r\n     <span class=\"bar\">/</span>\r\n     <span class=\"fdn\">Keskmine debitoorne v\u00F5lgnevus</span>\r\n     </div>\r\n  </div> <br>\r\n  <div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    M\u00FC\u00FCgitulu summa saadakse kasumiaruandest aasta l\u00F5pu seisuga ja keskmine debitoorne v\u00F5lgnevus bilansist aasta alguse ja l\u00F5pu keskmisena. Eluj\u00F5ulisuse seisukohalt annab kordaja aimu sellest, kui suur osa ettev\u00F5tte rahast on klientide k\u00E4es. Mida suurem see osa on, seda suurem on pinge k\u00E4ibekapitalile; muude tingimuste samaks j\u00E4\u00E4des m\u00F5jub k\u00E4ttesaamata raha eluj\u00F5ulisusele negatiivselt.\r\n  </div>\r\n  </div>\r\n  <br><br>\r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div> <span style=\"font-weight: 700\">Varude k\u00E4ibesagedus </span> (<em>inventory turnover ratio</em>), mida nimetatakse ka varude k\u00E4ibekordajaks, annab m\u00E4rku sellest, kui efektiivselt kasutatakse kauba- v\u00F5i materjalivarusid. Mida aeglasemalt varud k\u00E4ibivad, seda ebaefektiivsem on varude kasutus. Varude k\u00E4ibesagedus arvutatakse allj\u00E4rgneva valemi abil:\r\n     \r\n    </div>\r\n  </div><br>\r\n  <div class=\"eq-c\">\r\n    Varude k\u00E4ibesagedus =\r\n     <div class=\"fraction\">\r\n     <span class=\"fup\">M\u00FC\u00FCgitulu</span>\r\n     <span class=\"bar\">/</span>\r\n     <span class=\"fdn\">Keskmised varud</span>\r\n     </div>\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    M\u00FC\u00FCgitulu summa saadakse kasumiaruandest aasta l\u00F5pu seisuga ja keskmised varud bilansist aasta alguse ja l\u00F5pu keskmisena. Eluj\u00F5ulisuse seisukohalt annab n\u00E4itaja aimu, kui palju raha on varude all ehk laos kinni. Mida suurem see osa on, seda v\u00E4hem saab raha kasutada \u00E4ritegevuseks (ehk samade k\u00E4ibevahendite juures vajatakse rohkem raha) ning seda v\u00E4iksem on muude tingimuste samaks j\u00E4\u00E4des ettev\u00F5tte eluj\u00F5ulisus.\r\n  \r\n  </div>\r\n  </div>\r\n\r\n\r\n  <br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Ilulisaf2Component, decorators: [{
            type: Component,
            args: [{ selector: 'ilulisaf2-component', standalone: true, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\"> \r\n      <span style=\"font-weight: 700\">Efektiivsuse suhtarvud</span>\r\n    </div>\r\n  </div>\r\n<br><br> \r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin\">\r\n  Mida efektiivsemalt ettev\u00F5tte vara kasutatakse, seda suurem on ettev\u00F5tte eluj\u00F5ulisus. Vara ostetakse teatud summa eest ja see summa (investeeritud raha) peab ennast tagasi teenima. Mida t\u00F5husamalt raha ennast tagasi teenib, seda paremini ettev\u00F5ttel l\u00E4heb. Selle v\u00E4ljaselgitamisel on abiks efektiivsuse suhtarvud. Enamlevinud on kolm efektiivsuse suhtarvu, mida ongi selles t\u00F6\u00F6s kasutatud: vara k\u00E4ibesagedus, l\u00FChiajalise v\u00F5lgnevuse k\u00E4ibekordaja ja varude k\u00E4ibekordaja.\r\n  </div>\r\n </div>\r\n <br><br>\r\n <div class=\"tekstike2 textmargin\"> \r\n<div><span style=\"font-weight: 700\">Varade k\u00E4ibesagedus </span> (<em>asset turnover</em>), mida nimetatakse ka koguvara k\u00E4ibeks, annab m\u00E4rku sellest, kui efektiivselt kasutab ettev\u00F5te oma koguvara. Kordaja arvutamiseks jagatakse varade abil saadud m\u00FC\u00FCgitulu aasta keskmise varade maksumusega ning mida suurem on tulemuse arvuline v\u00E4\u00E4rtus, seda efektiivsemalt t\u00F5en\u00E4oliselt varasid kasutatakse. Varade k\u00E4ibesagedus arvutatakse allj\u00E4rgneva valemi abil:\r\n  </div>\r\n </div> <br>\r\n <div class=\"eq-c\">\r\n  Varade k\u00E4ibesagedus =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">M\u00FC\u00FCgitulu</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">Keskmine vara</span>\r\n   </div>\r\n</div><br>\r\n\r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin\">\r\n      M\u00FC\u00FCgitulu summa saadakse kasumiaruandest aasta l\u00F5pu seisuga ja keskmine varad bilansist aasta alguse ja l\u00F5pu keskmisena. Suurem varade k\u00E4ibesagedus on ka suurema eluj\u00F5ulisuse n\u00E4itaja, sest sellest v\u00F5ib j\u00E4reldada, et raha on paigutatud paremini t\u00F6\u00F6tavatesse vahenditesse (raha teenib ennast t\u00F5husamalt tagasi).\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div> <span style=\"font-weight: 700\">L\u00FChiajalise v\u00F5lgnevuse k\u00E4ibekordaja</span> (<em>receivables turnover</em>), mida nimetatakse ka debitoorse v\u00F5lgnevuse k\u00E4ibekordajaks, n\u00E4itab, mitu korda \u00FCletab ettev\u00F5tte m\u00FC\u00FCgitulu keskmist debitoorset v\u00F5lgnevust (mis peamiselt koosneb ostjate laekumata arvetest). Teisiti \u00F6eldes peegeldab see seda, kui palju k\u00E4iberaha on v\u00F5lgnike k\u00E4es. Samuti n\u00E4itab see suhtarv, mitu korda tasutakse vaadeldava ajavahemiku jooksul keskmine debitoorne v\u00F5lgnevus. L\u00FChiajalise v\u00F5lgnevuse k\u00E4ibekordaja arvutatakse allj\u00E4rgneva valemi abil:\r\n      \r\n    </div>\r\n  </div><br>\r\n  <div class=\"eq-c\">\r\n    L\u00FChiajalise v\u00F5lgnevuse k\u00E4ibekordaja =\r\n     <div class=\"fraction\">\r\n     <span class=\"fup\">M\u00FC\u00FCgitulu</span>\r\n     <span class=\"bar\">/</span>\r\n     <span class=\"fdn\">Keskmine debitoorne v\u00F5lgnevus</span>\r\n     </div>\r\n  </div> <br>\r\n  <div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    M\u00FC\u00FCgitulu summa saadakse kasumiaruandest aasta l\u00F5pu seisuga ja keskmine debitoorne v\u00F5lgnevus bilansist aasta alguse ja l\u00F5pu keskmisena. Eluj\u00F5ulisuse seisukohalt annab kordaja aimu sellest, kui suur osa ettev\u00F5tte rahast on klientide k\u00E4es. Mida suurem see osa on, seda suurem on pinge k\u00E4ibekapitalile; muude tingimuste samaks j\u00E4\u00E4des m\u00F5jub k\u00E4ttesaamata raha eluj\u00F5ulisusele negatiivselt.\r\n  </div>\r\n  </div>\r\n  <br><br>\r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div> <span style=\"font-weight: 700\">Varude k\u00E4ibesagedus </span> (<em>inventory turnover ratio</em>), mida nimetatakse ka varude k\u00E4ibekordajaks, annab m\u00E4rku sellest, kui efektiivselt kasutatakse kauba- v\u00F5i materjalivarusid. Mida aeglasemalt varud k\u00E4ibivad, seda ebaefektiivsem on varude kasutus. Varude k\u00E4ibesagedus arvutatakse allj\u00E4rgneva valemi abil:\r\n     \r\n    </div>\r\n  </div><br>\r\n  <div class=\"eq-c\">\r\n    Varude k\u00E4ibesagedus =\r\n     <div class=\"fraction\">\r\n     <span class=\"fup\">M\u00FC\u00FCgitulu</span>\r\n     <span class=\"bar\">/</span>\r\n     <span class=\"fdn\">Keskmised varud</span>\r\n     </div>\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    M\u00FC\u00FCgitulu summa saadakse kasumiaruandest aasta l\u00F5pu seisuga ja keskmised varud bilansist aasta alguse ja l\u00F5pu keskmisena. Eluj\u00F5ulisuse seisukohalt annab n\u00E4itaja aimu, kui palju raha on varude all ehk laos kinni. Mida suurem see osa on, seda v\u00E4hem saab raha kasutada \u00E4ritegevuseks (ehk samade k\u00E4ibevahendite juures vajatakse rohkem raha) ning seda v\u00E4iksem on muude tingimuste samaks j\u00E4\u00E4des ettev\u00F5tte eluj\u00F5ulisus.\r\n  \r\n  </div>\r\n  </div>\r\n\r\n\r\n  <br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }]
        }] });

class Ilulisaf3Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Ilulisaf3Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Ilulisaf3Component, isStandalone: true, selector: "ilulisaf3-component", ngImport: i0, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\"> \r\n      <span style=\"font-weight: 700\">Maksev\u00F5ime suhtarvud</span>\r\n    </div>\r\n  </div>\r\n<br><br> \r\n\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin\"> \r\n      \r\n  Ettev\u00F5tte eluj\u00F5ulisuse seisukohalt on oluline v\u00F5ime katta oma kohustusi t\u00E4htaegselt. Maksev\u00F5ime ehk likviidsuse \u00FChe osana anal\u00FC\u00FCsitakse v\u00F5imet t\u00E4ita l\u00FChiajalisi kohustusi. Mida suurem on ettev\u00F5tte valmisolek ja v\u00F5imekus t\u00E4ita l\u00FChiajalisi kohustusi, seda eluj\u00F5ulisem ta on. L\u00FChiajalisi kohustusi saab katta likviidsete varade arvelt, seega vaadeldaksegi maksev\u00F5ime anal\u00FC\u00FCsis likviidset vara. Enamlevinud on kolm maksev\u00F5ime suhtarvu, mida oleme ka k\u00E4esolevas t\u00F6\u00F6s kasutanud: l\u00FChiajaliste kohustuste kattekordaja, maksev\u00F5ime kordaja ja rahakordaja.\r\n  \r\n    \r\n  \r\n  \r\n  </div>\r\n</div>\r\n<br><br>\r\n\r\n  <div class=\"tekstike2 textmargin\">\r\n    <span style=\"font-weight: 700\">L\u00FChiajaliste kohustuste kattekordaja </span> (<em>current ratio; working capital ratio</em>) n\u00E4itab, kui v\u00F5imekas on ettev\u00F5te v\u00F5lausaldajate l\u00FChiajaliste n\u00F5uete katmisel. Kuna n\u00E4itaja leidmiseks jagatakse k\u00E4ibevara l\u00FChiajaliste kohustustega, siis mida suurem on n\u00E4itaja arvuline v\u00E4\u00E4rtus, seda suurem on ettev\u00F5tte v\u00F5ime oma l\u00FChiajalisi kohustusi t\u00E4ita ja seega on suurema maksev\u00F5imega. L\u00FChiajaliste kohustuste kattekordaja arvutatakse allj\u00E4rgneva valemi abil:\r\n\r\n  </div><br>\r\n  \r\n   <div class=\"eq-c\">\r\n    L\u00FChiajaliste kohustuste kattekordaja =\r\n     <div class=\"fraction\">\r\n     <span class=\"fup\">K\u00E4ibevara</span>\r\n     <span class=\"bar\">/</span>\r\n     <span class=\"fdn\">L\u00FChiajalised kohustused</span>\r\n     </div>\r\n    </div> <br>\r\n  <div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    K\u00E4ibevara ja l\u00FChiajaliste kohustuste suurus tehakse kindlaks bilansist aasta l\u00F5pu seisuga. Kordaja optimaalne suurus on 1,5\u20132, selles vahemikus loetakse ettev\u00F5tet maksev\u00F5imeliseks. Kui kordaja on suurem, siis on ka maksev\u00F5ime suurem, kuid teiselt poolt tekib oht, et ettev\u00F5te ei kasuta oma k\u00E4ibevara efektiivselt. Kui aga kui l\u00FChiajalised kohustused \u00FCletavad k\u00E4ibevara suuruse ja n\u00E4itaja v\u00E4\u00E4rtus on alla 1, v\u00F5ib ettev\u00F5ttel esineda probleeme l\u00FChiajaliste kohustuste t\u00E4itmisel. Tasub silmas pidada, et kui l\u00FChiajaliste kohustuste t\u00E4itmisega on probleem, siis see ei pruugi t\u00E4hendada p\u00FCsivat maksej\u00F5uetust, sest kohustusi on endiselt v\u00F5imalik t\u00E4ita pikema aja jooksul.\r\n      \r\n  \r\n    </div>\r\n</div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"><span style=\"font-weight: 700\">Maksev\u00F5imekordaja </span>(<em>quick ratio; acid-test ratio</em>) osutab sellele, kas ettev\u00F5te on praegu v\u00F5imeline v\u00F5lausaldajatele k\u00F5ik l\u00FChiajalised kohustused tasuma. Arvesse v\u00F5etakse raha, likviidseid v\u00E4\u00E4rtpabereid ja laekumata arveid (ehk siis likviidsed v\u00E4\u00E4rtpaberid ja laekumata arved v\u00F5rdsustatakse rahaga, millega on v\u00F5imalik kohustusi katta). Laekumata arvete juures tuleb silmas pidada, et klient v\u00F5ib pikaks ajaks v\u00F5lgu j\u00E4\u00E4da, mis t\u00E4hendab, et plaanitud kuup\u00E4eval vajalikku summat rahavoogu tegelikult ei tule. Maksev\u00F5ime kordaja arvutatakse allj\u00E4rgneva valemi abil:\r\n  \r\n</div><br>\r\n<div class=\"eq-c\">\r\n  Maksev\u00F5ime kordaja =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Raha+Likviidsed v\u00E4\u00E4rtpaberid+Laekumata arved</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">L\u00FChiajalised kohustused</span>\r\n   </div>\r\n</div><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin\">\r\n  Selleks, et k\u00F5ik l\u00FChiajalised v\u00F5lgnevused oleks v\u00F5imalik vajadusel kohe tasuda, peab n\u00E4itaja v\u00E4\u00E4rtus olema suurem kui 1. Kui j\u00E4tta k\u00F5rvale klientide v\u00F5imalikud v\u00F5lgnevused, peab seda suhtarvu t\u00F5lgendades siiski arvestama ka arvete makset\u00E4htaegadega, mis v\u00F5ivad olla kaugemas tulevikus kui kohustus l\u00FChiajalisi v\u00F5lgnevusi tasuda ja nii v\u00F5ib see kordaja anda pisut ilustatud informatsiooni. Sisend suhtarvu leidmiseks saadakse vastavatest bilansikirjetest.\r\n\r\n</div>\r\n</div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"><span style=\"font-weight: 700\">Rahakordaja </span>(<em>cash ratio</em>) osutab sellele, kas ettev\u00F5te on v\u00F5imeline tasuma kohe saabuva t\u00E4htajaga kohustusi. V\u00F5rreldes maksev\u00F5ime kordajaga on siin arvestusest v\u00E4lja j\u00E4etud laekumata arved, ehk siis arvesse ei l\u00E4he klientide k\u00E4es olev raha (seega j\u00E4\u00E4b k\u00F5rvale risk, et klient ei maksa \u00F5igeaegselt, makset\u00E4htaeg on liiga kauges tulevikus vms), kuna n\u00F5ude\u00F5igust kliendi vastu ei saa kasutada oma kohustuste tasumiseks. Rahakordaja arvutatakse allj\u00E4rgneva valemi abil:\r\n  \r\n \r\n</div><br>\r\n<div class=\"eq-c\">\r\n  Rahakordaja =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Raha+Likviidsed v\u00E4\u00E4rtpaberid</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">L\u00FChiajalised kohustused</span>\r\n   </div>\r\n</div><br>\r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin\">\r\n      Selleks, et kohustusi oleks v\u00F5imalik kohe katta, peab n\u00E4itaja v\u00E4\u00E4rtus olema suurem kui 1. T\u00E4helepanu tuleb p\u00F6\u00F6rata ka sellele, millised on likviidsed v\u00E4\u00E4rtpaberid. B\u00F6rsil noteeritud v\u00E4\u00E4rtpaberite turustamisel on v\u00E4\u00E4rtusp\u00E4evad, st raha laekub (v\u00F5i on kontolt v\u00E4lja kantav) teatud arvu p\u00E4evade p\u00E4rast, lisaks ei ole k\u00F5ik p\u00E4evad b\u00F6rsil kauplemisp\u00E4evad. Samuti tuleb m\u00E4rkida, et b\u00F6rsiv\u00E4liste v\u00E4\u00E4rtpaberite juures t\u00E4hendab likviidsus, et tuleb leida ka reaalne ostja, teha tehing ja saada raha k\u00E4tte.\r\n  </div>\r\n</div>\r\n<br><br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Ilulisaf3Component, decorators: [{
            type: Component,
            args: [{ selector: 'ilulisaf3-component', standalone: true, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\"> \r\n      <span style=\"font-weight: 700\">Maksev\u00F5ime suhtarvud</span>\r\n    </div>\r\n  </div>\r\n<br><br> \r\n\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin\"> \r\n      \r\n  Ettev\u00F5tte eluj\u00F5ulisuse seisukohalt on oluline v\u00F5ime katta oma kohustusi t\u00E4htaegselt. Maksev\u00F5ime ehk likviidsuse \u00FChe osana anal\u00FC\u00FCsitakse v\u00F5imet t\u00E4ita l\u00FChiajalisi kohustusi. Mida suurem on ettev\u00F5tte valmisolek ja v\u00F5imekus t\u00E4ita l\u00FChiajalisi kohustusi, seda eluj\u00F5ulisem ta on. L\u00FChiajalisi kohustusi saab katta likviidsete varade arvelt, seega vaadeldaksegi maksev\u00F5ime anal\u00FC\u00FCsis likviidset vara. Enamlevinud on kolm maksev\u00F5ime suhtarvu, mida oleme ka k\u00E4esolevas t\u00F6\u00F6s kasutanud: l\u00FChiajaliste kohustuste kattekordaja, maksev\u00F5ime kordaja ja rahakordaja.\r\n  \r\n    \r\n  \r\n  \r\n  </div>\r\n</div>\r\n<br><br>\r\n\r\n  <div class=\"tekstike2 textmargin\">\r\n    <span style=\"font-weight: 700\">L\u00FChiajaliste kohustuste kattekordaja </span> (<em>current ratio; working capital ratio</em>) n\u00E4itab, kui v\u00F5imekas on ettev\u00F5te v\u00F5lausaldajate l\u00FChiajaliste n\u00F5uete katmisel. Kuna n\u00E4itaja leidmiseks jagatakse k\u00E4ibevara l\u00FChiajaliste kohustustega, siis mida suurem on n\u00E4itaja arvuline v\u00E4\u00E4rtus, seda suurem on ettev\u00F5tte v\u00F5ime oma l\u00FChiajalisi kohustusi t\u00E4ita ja seega on suurema maksev\u00F5imega. L\u00FChiajaliste kohustuste kattekordaja arvutatakse allj\u00E4rgneva valemi abil:\r\n\r\n  </div><br>\r\n  \r\n   <div class=\"eq-c\">\r\n    L\u00FChiajaliste kohustuste kattekordaja =\r\n     <div class=\"fraction\">\r\n     <span class=\"fup\">K\u00E4ibevara</span>\r\n     <span class=\"bar\">/</span>\r\n     <span class=\"fdn\">L\u00FChiajalised kohustused</span>\r\n     </div>\r\n    </div> <br>\r\n  <div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    K\u00E4ibevara ja l\u00FChiajaliste kohustuste suurus tehakse kindlaks bilansist aasta l\u00F5pu seisuga. Kordaja optimaalne suurus on 1,5\u20132, selles vahemikus loetakse ettev\u00F5tet maksev\u00F5imeliseks. Kui kordaja on suurem, siis on ka maksev\u00F5ime suurem, kuid teiselt poolt tekib oht, et ettev\u00F5te ei kasuta oma k\u00E4ibevara efektiivselt. Kui aga kui l\u00FChiajalised kohustused \u00FCletavad k\u00E4ibevara suuruse ja n\u00E4itaja v\u00E4\u00E4rtus on alla 1, v\u00F5ib ettev\u00F5ttel esineda probleeme l\u00FChiajaliste kohustuste t\u00E4itmisel. Tasub silmas pidada, et kui l\u00FChiajaliste kohustuste t\u00E4itmisega on probleem, siis see ei pruugi t\u00E4hendada p\u00FCsivat maksej\u00F5uetust, sest kohustusi on endiselt v\u00F5imalik t\u00E4ita pikema aja jooksul.\r\n      \r\n  \r\n    </div>\r\n</div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"><span style=\"font-weight: 700\">Maksev\u00F5imekordaja </span>(<em>quick ratio; acid-test ratio</em>) osutab sellele, kas ettev\u00F5te on praegu v\u00F5imeline v\u00F5lausaldajatele k\u00F5ik l\u00FChiajalised kohustused tasuma. Arvesse v\u00F5etakse raha, likviidseid v\u00E4\u00E4rtpabereid ja laekumata arveid (ehk siis likviidsed v\u00E4\u00E4rtpaberid ja laekumata arved v\u00F5rdsustatakse rahaga, millega on v\u00F5imalik kohustusi katta). Laekumata arvete juures tuleb silmas pidada, et klient v\u00F5ib pikaks ajaks v\u00F5lgu j\u00E4\u00E4da, mis t\u00E4hendab, et plaanitud kuup\u00E4eval vajalikku summat rahavoogu tegelikult ei tule. Maksev\u00F5ime kordaja arvutatakse allj\u00E4rgneva valemi abil:\r\n  \r\n</div><br>\r\n<div class=\"eq-c\">\r\n  Maksev\u00F5ime kordaja =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Raha+Likviidsed v\u00E4\u00E4rtpaberid+Laekumata arved</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">L\u00FChiajalised kohustused</span>\r\n   </div>\r\n</div><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin\">\r\n  Selleks, et k\u00F5ik l\u00FChiajalised v\u00F5lgnevused oleks v\u00F5imalik vajadusel kohe tasuda, peab n\u00E4itaja v\u00E4\u00E4rtus olema suurem kui 1. Kui j\u00E4tta k\u00F5rvale klientide v\u00F5imalikud v\u00F5lgnevused, peab seda suhtarvu t\u00F5lgendades siiski arvestama ka arvete makset\u00E4htaegadega, mis v\u00F5ivad olla kaugemas tulevikus kui kohustus l\u00FChiajalisi v\u00F5lgnevusi tasuda ja nii v\u00F5ib see kordaja anda pisut ilustatud informatsiooni. Sisend suhtarvu leidmiseks saadakse vastavatest bilansikirjetest.\r\n\r\n</div>\r\n</div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"><span style=\"font-weight: 700\">Rahakordaja </span>(<em>cash ratio</em>) osutab sellele, kas ettev\u00F5te on v\u00F5imeline tasuma kohe saabuva t\u00E4htajaga kohustusi. V\u00F5rreldes maksev\u00F5ime kordajaga on siin arvestusest v\u00E4lja j\u00E4etud laekumata arved, ehk siis arvesse ei l\u00E4he klientide k\u00E4es olev raha (seega j\u00E4\u00E4b k\u00F5rvale risk, et klient ei maksa \u00F5igeaegselt, makset\u00E4htaeg on liiga kauges tulevikus vms), kuna n\u00F5ude\u00F5igust kliendi vastu ei saa kasutada oma kohustuste tasumiseks. Rahakordaja arvutatakse allj\u00E4rgneva valemi abil:\r\n  \r\n \r\n</div><br>\r\n<div class=\"eq-c\">\r\n  Rahakordaja =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Raha+Likviidsed v\u00E4\u00E4rtpaberid</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">L\u00FChiajalised kohustused</span>\r\n   </div>\r\n</div><br>\r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin\">\r\n      Selleks, et kohustusi oleks v\u00F5imalik kohe katta, peab n\u00E4itaja v\u00E4\u00E4rtus olema suurem kui 1. T\u00E4helepanu tuleb p\u00F6\u00F6rata ka sellele, millised on likviidsed v\u00E4\u00E4rtpaberid. B\u00F6rsil noteeritud v\u00E4\u00E4rtpaberite turustamisel on v\u00E4\u00E4rtusp\u00E4evad, st raha laekub (v\u00F5i on kontolt v\u00E4lja kantav) teatud arvu p\u00E4evade p\u00E4rast, lisaks ei ole k\u00F5ik p\u00E4evad b\u00F6rsil kauplemisp\u00E4evad. Samuti tuleb m\u00E4rkida, et b\u00F6rsiv\u00E4liste v\u00E4\u00E4rtpaberite juures t\u00E4hendab likviidsus, et tuleb leida ka reaalne ostja, teha tehing ja saada raha k\u00E4tte.\r\n  </div>\r\n</div>\r\n<br><br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }]
        }] });

class Ilulisaf4Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Ilulisaf4Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Ilulisaf4Component, isStandalone: true, selector: "ilulisaf4-component", ngImport: i0, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\"> \r\n      <span style=\"font-weight: 700\">Finantsv\u00F5imenduse suhtarvud</span>\r\n    </div>\r\n  </div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    Ettev\u00F5tete eluj\u00F5ulisuse m\u00F5\u00F5tmisel on oluline, kui palju on ettev\u00F5te kaasanud oma tegevusse nn v\u00F5\u00F5rast raha. Selle hindamiseks kasutatakse finantsv\u00F5imenduse anal\u00FC\u00FCsi. Mida rohkem on bilansis laene, seda suurem on finantsv\u00F5imendus ja seda riskantsemaks (ja kulukamaks, sest laenurahal on oma hind) muutub ettev\u00F5tte tegevus. Mida rohkem on laenatud vahendeid ja mida suurem seega finantsv\u00F5imendus, seda v\u00E4iksemaks hinnatakse eluj\u00F5ulisust (olgugi, et just oskuslik v\u00F5\u00F5rvahendite kaasamine v\u00F5ib teinekord anda uue t\u00F5uke eduks). Enamlevinud on kolm finantsv\u00F5imenduse anal\u00FC\u00FCsimise suhtarvu, mida on ka k\u00E4esolevas t\u00F6\u00F6s kasutatud: v\u00F5lakordaja, kohustuste ja omakapitali suhe ning intresside kattekordaja.\r\n\r\n  </div>\r\n</div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">V\u00F5lakordaja</span> (<em>debt ratio</em>) leidmisel vaadatakse seda, kui palju on ettev\u00F5tte bilansis laenukapitali. Selleks v\u00F5rreldakse kogu ettev\u00F5tte v\u00F5lga ettev\u00F5tte varade mahuga. V\u00F5lakordaja arvutatakse allj\u00E4rgneva valemi abil:\r\n    \r\n\r\n  </div>\r\n</div><br>\r\n<div class=\"eq-c\">\r\n  V\u00F5lakordaja =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Kohustused kokku</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">Varad kokku</span>\r\n   </div>\r\n</div>\r\n<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    Kogukohustuste ja varade maht tehakse kindlaks vastavatest bilansikirjetest aasta l\u00F5pu seisuga. Milline on \u00F5ige v\u00F5i sobiv kohustuste osakaal, s\u00F5ltub suuresti tegevusvaldkonnast ning sellest, millist juhtimisstrateegiat rakendatakse (agressiivne kasv, turu hoidmine vms). Hea v\u00F5rdlusv\u00E4\u00E4rtus on 0,5. Kui n\u00E4itaja on sellest v\u00E4iksem, siis tehakse peamiselt \u00E4ri omanike raha eest ja laenuandjaid tuuakse v\u00E4hem sisse (konservatiivne strateegia). Kui n\u00E4itaja on 0,5-st suurem, siis on tegu peamiselt v\u00F5lausaldajate toel aetava \u00E4riga (see annab v\u00F5imaluse suuremaks kasvuks, kuid h\u00F5lmab suuremaid riske). Oluline on tuua v\u00E4lja ka asjaolu, et mida rohkem on v\u00E4list raha juba kaasatud, seda raskem on v\u00F5\u00F5rvahendeid lisaks tuua.\r\n    \r\n  </div>\r\n</div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">Kohustuste ja omakapitali suhe </span> (<em>debt-equity ratio, gearing, leverage</em>) osutab sellele, kui palju ettev\u00F5ttes kasutatakse laenukapitali v\u00F5rreldes omakapitaliga. Praktikas on oluline t\u00E4helepanu p\u00F6\u00F6rata sellele, mida arvestada kohustuste ja mida omakapitali hulka. N\u00E4iteks konverteeritavaid v\u00F5lakirju v\u00F5ib t\u00F5lgendada mitmeti. Samuti vajab lahendamist k\u00FCsimus, mida arvestada kohustuste hulka \u2013 \u00FCldjuhul v\u00F5etakse arvesse eelk\u00F5ige pikaajalisi kohustusi, kuid ka maksmata arved ja tasumata riiklikud maksud on kohustused. Kohustuste ja omakapitali suhe leitakse allj\u00E4rgneva valemi abil:\r\n       \r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"eq-c\">\r\n  Kohustuste ja omakapitali suhe =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Kohustused kokku</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">Omakapital kokku</span>\r\n   </div>\r\n</div>\r\n<br>\r\n\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin\">\r\n  Kohustuste hulk ja omakapital selgitatakse v\u00E4lja ettev\u00F5tte bilansikirjetest aasta l\u00F5pu seisuga. Nagu tegelike kohustuste v\u00E4ljaselgitamisel, tuleb ka omakapitali puhul praktikas arvestada keerukustega. Jaotamata kasum ei pruugi olla ettev\u00F5tte kontol ja k\u00E4ibekapitalina kasutatav, olgugi et raamatupidamisest v\u00F5ib sellise j\u00E4relduse teha.\r\n  \r\n</div>\r\n</div>\r\n<br><br>\r\n\r\n\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">Intresside kattekordaja </span> (<em>interest coverage ratio; times-interest-earned (TIE) ratio</em>) n\u00E4itab, kas ettev\u00F5tte tegevuselt (p\u00F5hitegevusest) teenitud rahavooga on v\u00F5imalik katta ettev\u00F5tte kohustustega (laenudega) kaasnevad intressikulud. Intresside kattekordaja arvutatakse allj\u00E4rgneva valemi abil:\r\n\r\n    \r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"eq-c\">\r\n  Intresside kattekordaja =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Kasum enne intresse ja makse</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">Aruandeperioodi intressikulu</span>\r\n   </div>\r\n</div><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    Suhtarv annab \u00FClevaate sellest, kas ettev\u00F5te suudab katta oma jooksvast tegevusest tulenevalt need kulud, mida toob kaasa v\u00F5\u00F5rvahendite kaasamine, st tasuda laenatud raha hinna. Kui kordaja on v\u00E4iksem kui 1, t\u00E4hendab see, et sisuliselt on ettev\u00F5te uppumisohus. Valemis kasutatakse jagatavana kas EBIT (kasum enne intresse ja makse) v\u00F5i EBITDA (kasum enne intresse, makse ja kulumit) n\u00E4itajat. Suhtarvu v\u00E4\u00E4rtus v\u00F5iks olla suurem kui 2,5, siis on ettev\u00F5te laenukohustuste teenindamine turvaliselt tagatud.\r\n  </div>\r\n</div>\r\n<br><br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Ilulisaf4Component, decorators: [{
            type: Component,
            args: [{ selector: 'ilulisaf4-component', standalone: true, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\"> \r\n      <span style=\"font-weight: 700\">Finantsv\u00F5imenduse suhtarvud</span>\r\n    </div>\r\n  </div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    Ettev\u00F5tete eluj\u00F5ulisuse m\u00F5\u00F5tmisel on oluline, kui palju on ettev\u00F5te kaasanud oma tegevusse nn v\u00F5\u00F5rast raha. Selle hindamiseks kasutatakse finantsv\u00F5imenduse anal\u00FC\u00FCsi. Mida rohkem on bilansis laene, seda suurem on finantsv\u00F5imendus ja seda riskantsemaks (ja kulukamaks, sest laenurahal on oma hind) muutub ettev\u00F5tte tegevus. Mida rohkem on laenatud vahendeid ja mida suurem seega finantsv\u00F5imendus, seda v\u00E4iksemaks hinnatakse eluj\u00F5ulisust (olgugi, et just oskuslik v\u00F5\u00F5rvahendite kaasamine v\u00F5ib teinekord anda uue t\u00F5uke eduks). Enamlevinud on kolm finantsv\u00F5imenduse anal\u00FC\u00FCsimise suhtarvu, mida on ka k\u00E4esolevas t\u00F6\u00F6s kasutatud: v\u00F5lakordaja, kohustuste ja omakapitali suhe ning intresside kattekordaja.\r\n\r\n  </div>\r\n</div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">V\u00F5lakordaja</span> (<em>debt ratio</em>) leidmisel vaadatakse seda, kui palju on ettev\u00F5tte bilansis laenukapitali. Selleks v\u00F5rreldakse kogu ettev\u00F5tte v\u00F5lga ettev\u00F5tte varade mahuga. V\u00F5lakordaja arvutatakse allj\u00E4rgneva valemi abil:\r\n    \r\n\r\n  </div>\r\n</div><br>\r\n<div class=\"eq-c\">\r\n  V\u00F5lakordaja =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Kohustused kokku</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">Varad kokku</span>\r\n   </div>\r\n</div>\r\n<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    Kogukohustuste ja varade maht tehakse kindlaks vastavatest bilansikirjetest aasta l\u00F5pu seisuga. Milline on \u00F5ige v\u00F5i sobiv kohustuste osakaal, s\u00F5ltub suuresti tegevusvaldkonnast ning sellest, millist juhtimisstrateegiat rakendatakse (agressiivne kasv, turu hoidmine vms). Hea v\u00F5rdlusv\u00E4\u00E4rtus on 0,5. Kui n\u00E4itaja on sellest v\u00E4iksem, siis tehakse peamiselt \u00E4ri omanike raha eest ja laenuandjaid tuuakse v\u00E4hem sisse (konservatiivne strateegia). Kui n\u00E4itaja on 0,5-st suurem, siis on tegu peamiselt v\u00F5lausaldajate toel aetava \u00E4riga (see annab v\u00F5imaluse suuremaks kasvuks, kuid h\u00F5lmab suuremaid riske). Oluline on tuua v\u00E4lja ka asjaolu, et mida rohkem on v\u00E4list raha juba kaasatud, seda raskem on v\u00F5\u00F5rvahendeid lisaks tuua.\r\n    \r\n  </div>\r\n</div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">Kohustuste ja omakapitali suhe </span> (<em>debt-equity ratio, gearing, leverage</em>) osutab sellele, kui palju ettev\u00F5ttes kasutatakse laenukapitali v\u00F5rreldes omakapitaliga. Praktikas on oluline t\u00E4helepanu p\u00F6\u00F6rata sellele, mida arvestada kohustuste ja mida omakapitali hulka. N\u00E4iteks konverteeritavaid v\u00F5lakirju v\u00F5ib t\u00F5lgendada mitmeti. Samuti vajab lahendamist k\u00FCsimus, mida arvestada kohustuste hulka \u2013 \u00FCldjuhul v\u00F5etakse arvesse eelk\u00F5ige pikaajalisi kohustusi, kuid ka maksmata arved ja tasumata riiklikud maksud on kohustused. Kohustuste ja omakapitali suhe leitakse allj\u00E4rgneva valemi abil:\r\n       \r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"eq-c\">\r\n  Kohustuste ja omakapitali suhe =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Kohustused kokku</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">Omakapital kokku</span>\r\n   </div>\r\n</div>\r\n<br>\r\n\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin\">\r\n  Kohustuste hulk ja omakapital selgitatakse v\u00E4lja ettev\u00F5tte bilansikirjetest aasta l\u00F5pu seisuga. Nagu tegelike kohustuste v\u00E4ljaselgitamisel, tuleb ka omakapitali puhul praktikas arvestada keerukustega. Jaotamata kasum ei pruugi olla ettev\u00F5tte kontol ja k\u00E4ibekapitalina kasutatav, olgugi et raamatupidamisest v\u00F5ib sellise j\u00E4relduse teha.\r\n  \r\n</div>\r\n</div>\r\n<br><br>\r\n\r\n\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">Intresside kattekordaja </span> (<em>interest coverage ratio; times-interest-earned (TIE) ratio</em>) n\u00E4itab, kas ettev\u00F5tte tegevuselt (p\u00F5hitegevusest) teenitud rahavooga on v\u00F5imalik katta ettev\u00F5tte kohustustega (laenudega) kaasnevad intressikulud. Intresside kattekordaja arvutatakse allj\u00E4rgneva valemi abil:\r\n\r\n    \r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"eq-c\">\r\n  Intresside kattekordaja =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Kasum enne intresse ja makse</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">Aruandeperioodi intressikulu</span>\r\n   </div>\r\n</div><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    Suhtarv annab \u00FClevaate sellest, kas ettev\u00F5te suudab katta oma jooksvast tegevusest tulenevalt need kulud, mida toob kaasa v\u00F5\u00F5rvahendite kaasamine, st tasuda laenatud raha hinna. Kui kordaja on v\u00E4iksem kui 1, t\u00E4hendab see, et sisuliselt on ettev\u00F5te uppumisohus. Valemis kasutatakse jagatavana kas EBIT (kasum enne intresse ja makse) v\u00F5i EBITDA (kasum enne intresse, makse ja kulumit) n\u00E4itajat. Suhtarvu v\u00E4\u00E4rtus v\u00F5iks olla suurem kui 2,5, siis on ettev\u00F5te laenukohustuste teenindamine turvaliselt tagatud.\r\n  </div>\r\n</div>\r\n<br><br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }]
        }] });

class Ilulisaf5Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Ilulisaf5Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Ilulisaf5Component, isStandalone: true, selector: "ilulisaf5-component", ngImport: i0, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\"> \r\n      <span style=\"font-weight: 700\">Tasuvuse suhtarvud</span>\r\n    </div>\r\n  </div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    Ettev\u00F5tte eluj\u00F5ulisuse hindamisel on oluline, kui tasuv ehk rentaabel ehk kasumlik on ettev\u00F5tte tegevus. Mida tasuvam on ettev\u00F5tte tegevus, seda suuremaks v\u00F5ib lugeda ettev\u00F5tte eluj\u00F5ulisust, sest seda parema turuni\u0161i on ettev\u00F5te t\u00F5en\u00E4oliselt avastanud ja seda kindlam on tema positsioon klientide juures. Enamlevinud on neli tasuvuse suhtarvu, mida on ka k\u00E4esolevas t\u00F6\u00F6s kasutatud: k\u00E4ibe \u00E4rirentaablus, k\u00E4ibe puhasrentaablus, vara puhasrentaablus ja omakapitali puhasrentaablus.\r\n</div>\r\n</div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">K\u00E4ibe \u00E4rirentaablus </span> (<em>operating margin</em>) n\u00E4itab, millise osa moodustab ettev\u00F5tte \u00E4rikasum m\u00FC\u00FCgituludest. Seda n\u00E4itajat vaadatakse ka kui kasumi teenimist p\u00F5hitegevustest. Eeldatakse, et m\u00FC\u00FCgitulu tuleb \u00FCksnes p\u00F5hitegevustest (kuid varieeruvust loob see, et p\u00F5hitegevused v\u00F5ivad muutuda, koosneda mitmest alategevusest, ettev\u00F5ttel v\u00F5ib olla mitu p\u00F5hisuunda jms). K\u00E4ibe \u00E4rirentaablus arvutatakse allj\u00E4rgneva valemi abil:\r\n    \r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"eq-c\">\r\n  K\u00E4ibe \u00E4rirentaablus =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">\u00C4rikasum</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">M\u00FC\u00FCgitulu</span>\r\n   </div>\r\n</div><br>\r\n\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin\">\r\n  \u00C4rikasum ja m\u00FC\u00FCgitulu leitakse kasumiaruandest aasta l\u00F5pu seisuga. N\u00E4itaja optimaalne suurus s\u00F5ltub v\u00E4ga suurel m\u00E4\u00E4ral \u00E4ritegevuse olemusest, tegevussektorist jms, kuid mida suurem n\u00E4itaja on, seda parem. Aga kui n\u00E4itaja on suurem kui 1, siis m\u00F5jutavad \u00E4rikasumit sissetulekud, mis ei kajastu m\u00FC\u00FCgitulus.\r\n\r\n  \r\n</div>\r\n</div>\r\n<br><br>\r\n\r\n\r\n\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">K\u00E4ibe puhasrentaablus </span> ehk puhaskasumimarginaal (<em>profit margin, net margin, net profit margin</em>) n\u00E4itab, millise osa moodustab ettev\u00F5tte puhaskasum m\u00FC\u00FCgitulust. Suhtarv kajastab, kui palju kasumit toodetakse k\u00E4ibe\u00FChiku kohta. Sellest saab j\u00E4reldada, kas ettev\u00F5te on turul hinnakonkurentsis ja kas kulud on optimaalses suuruses. Erinevate majandussektorite ettev\u00F5tete puhasrentaablust on omavahel raske v\u00F5rrelda, kuna nende kulustruktuur on v\u00F5ib olla v\u00E4ga erinev. K\u00E4ibe puhasrentaablus arvutatakse allj\u00E4rgneva valemi abil:\r\n   \r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"eq-c\">\r\n  K\u00E4ibe puhasrentaablus =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Puhaskasum</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">M\u00FC\u00FCgitulu</span>\r\n   </div>\r\n</div>\r\n<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin\">\r\n  Puhaskasum ja m\u00FC\u00FCgitulu v\u00F5etakse kasumiaruandest aasta l\u00F5pu seisuga. Sarnaselt k\u00E4ibe \u00E4rirentaablusega s\u00F5ltub n\u00E4itaja optimaalne suurus v\u00E4ga suurel m\u00E4\u00E4ral \u00E4ritegevuse olemusest, tegevussektorist jms, kuid mida suurem on n\u00E4itaja, seda parem. Aga kui n\u00E4itaja on suurem kui 1, siis m\u00F5jutavad puhaskasumit sissetulekud, mis ei kajastu m\u00FC\u00FCgitulus.\r\n\r\n  \r\n</div>\r\n</div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">Varade ehk kogukapitali puhasrentaablus </span>(<em>return on assets \u2014 ROA</em>) n\u00E4itab, kui efektiivselt kasutab ettev\u00F5te oma varasid puhaskasumi teenimiseks. N\u00E4itaja annab aimu sellest, kui palju toodab varasse paigutatud raha kasumit. N\u00E4itajat nimetatakse ka DuPonti valemiks. Varade puhasrentaablus arvutatakse allj\u00E4rgneva valemi abil:\r\n   \r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"eq-c\">\r\n  Varade puhasrentablus (ROA) = Puhaskasumimarginal \u00D7 Varade k\u00E4ibekordaja =\r\n\r\n  \r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Puhaskasum</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">M\u00FC\u00FCgitulu</span>\r\n   </div>\r\n   x\r\n   <div class=\"fraction\">\r\n    <span class=\"fup\">M\u00FC\u00FCgitulu</span>\r\n    <span class=\"bar\">/</span>\r\n    <span class=\"fdn\">Varad</span>\r\n    </div>\r\n    =\r\n  \r\n    \r\n<div class=\"fraction\">\r\n      <span class=\"fup\">Puhaskasum</span>\r\n      <span class=\"bar\">/</span>\r\n      <span class=\"fdn\">Varad</span>\r\n</div>\r\n  \r\n</div>\r\n\r\n\r\n<br>\r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin\">\r\n      Nagu \u00FClaltoodust n\u00E4ha, on valem ROA leidmiseks mitmeastmeline ja arvutust saab seega teostada mitmel viisil. Enamasti arvutatakse n\u00E4itaja puhaskasumi ja varade omavahelise jagatisena. Vajalikud sisendn\u00E4itajad v\u00F5etakse bilansist ja kasumiaruandest aasta l\u00F5pu seisuga. N\u00E4itaja v\u00F5imaldab anal\u00FC\u00FCsida \u00FChelt poolt ettev\u00F5tte kasumlikkust ja teiselt varade kasutamise efektiivsust.\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div> <span style=\"font-weight: 700\">Omakapitali tootlus ehk puhasrentaablus  </span>(<em>return on equity \u2014 ROE</em>) n\u00E4itab, kui efektiivselt kasutatakse omakapitali puhaskasumi teenimiseks. Ettev\u00F5tte omanikud on investeerinud omakapitali ning selle n\u00E4itaja abil on v\u00F5imalik saada \u00FClevaade sellest, kui efektiivselt need vahendid ennast taastoodavad. Omakapitali puhasrentaablus arvutatakse allj\u00E4rgneva valemi abil:\r\n      \r\n      \r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"eq-c\">\r\n    Omakapitali puhasrentaablus (ROE) = Puhaskasumimarginaal \u00D7 Varade k\u00E4ibekordaja \u00D7 Finanstv\u00F5imendus =\r\n    </div><br>\r\n    <div class=\"eq-c\"> \r\n      = ROA x \r\n      <div class=\"fraction\">\r\n      <span class=\"fup\">Varad</span>\r\n      <span class=\"bar\">/</span>\r\n      <span class=\"fdn\">Omakapital</span>\r\n      </div>\r\n      \r\n      =\r\n            \r\n   <div class=\"fraction\">\r\n         <span class=\"fup\">Puhaskasum</span>\r\n         <span class=\"bar\">/</span>\r\n         <span class=\"fdn\">Varad</span>\r\n   </div>\r\n     </div><br>\r\n     <div class=\"tekstike2 textmargin\"> \r\n      <div class=\"rowmargin\">\r\n        Omakapitali puhasrentaabluse arvutamiseks vajalikud andmed v\u00F5etakse ettev\u00F5tte kasumiaruandest ja bilansist aasta l\u00F5pu seisuga. Enamasti kasutatakse n\u00E4itaja arvutamisel puhaskasumi ja omakapitali jagatist. Nagu ka ROA puhul, on ROE puhul tegemist DuPonti anal\u00FC\u00FCsiga. See anal\u00FC\u00FCs v\u00F5imaldab eristada kolme p\u00F5hit\u00FC\u00FCpi ettev\u00F5tteid:\r\n      </div>\r\n    </div>\r\n    <div class=\"tekstike2 textmargin\"> \r\n      <div class=\"rowmargin\"> \r\n      \r\n      <ul>\r\n      <li>ettev\u00F5tted, kus kasumimarginaal on k\u00F5rge;</li>\r\n      <li>ettev\u00F5tted, kus on suur k\u00E4ive;</li>\r\n      <li>ettev\u00F5tted, kus on suur finantsv\u00F5imendus.</li>\r\n      </ul>\r\n      </div>\r\n    </div>\r\n    <br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Ilulisaf5Component, decorators: [{
            type: Component,
            args: [{ selector: 'ilulisaf5-component', standalone: true, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\"> \r\n      <span style=\"font-weight: 700\">Tasuvuse suhtarvud</span>\r\n    </div>\r\n  </div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    Ettev\u00F5tte eluj\u00F5ulisuse hindamisel on oluline, kui tasuv ehk rentaabel ehk kasumlik on ettev\u00F5tte tegevus. Mida tasuvam on ettev\u00F5tte tegevus, seda suuremaks v\u00F5ib lugeda ettev\u00F5tte eluj\u00F5ulisust, sest seda parema turuni\u0161i on ettev\u00F5te t\u00F5en\u00E4oliselt avastanud ja seda kindlam on tema positsioon klientide juures. Enamlevinud on neli tasuvuse suhtarvu, mida on ka k\u00E4esolevas t\u00F6\u00F6s kasutatud: k\u00E4ibe \u00E4rirentaablus, k\u00E4ibe puhasrentaablus, vara puhasrentaablus ja omakapitali puhasrentaablus.\r\n</div>\r\n</div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">K\u00E4ibe \u00E4rirentaablus </span> (<em>operating margin</em>) n\u00E4itab, millise osa moodustab ettev\u00F5tte \u00E4rikasum m\u00FC\u00FCgituludest. Seda n\u00E4itajat vaadatakse ka kui kasumi teenimist p\u00F5hitegevustest. Eeldatakse, et m\u00FC\u00FCgitulu tuleb \u00FCksnes p\u00F5hitegevustest (kuid varieeruvust loob see, et p\u00F5hitegevused v\u00F5ivad muutuda, koosneda mitmest alategevusest, ettev\u00F5ttel v\u00F5ib olla mitu p\u00F5hisuunda jms). K\u00E4ibe \u00E4rirentaablus arvutatakse allj\u00E4rgneva valemi abil:\r\n    \r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"eq-c\">\r\n  K\u00E4ibe \u00E4rirentaablus =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">\u00C4rikasum</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">M\u00FC\u00FCgitulu</span>\r\n   </div>\r\n</div><br>\r\n\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin\">\r\n  \u00C4rikasum ja m\u00FC\u00FCgitulu leitakse kasumiaruandest aasta l\u00F5pu seisuga. N\u00E4itaja optimaalne suurus s\u00F5ltub v\u00E4ga suurel m\u00E4\u00E4ral \u00E4ritegevuse olemusest, tegevussektorist jms, kuid mida suurem n\u00E4itaja on, seda parem. Aga kui n\u00E4itaja on suurem kui 1, siis m\u00F5jutavad \u00E4rikasumit sissetulekud, mis ei kajastu m\u00FC\u00FCgitulus.\r\n\r\n  \r\n</div>\r\n</div>\r\n<br><br>\r\n\r\n\r\n\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">K\u00E4ibe puhasrentaablus </span> ehk puhaskasumimarginaal (<em>profit margin, net margin, net profit margin</em>) n\u00E4itab, millise osa moodustab ettev\u00F5tte puhaskasum m\u00FC\u00FCgitulust. Suhtarv kajastab, kui palju kasumit toodetakse k\u00E4ibe\u00FChiku kohta. Sellest saab j\u00E4reldada, kas ettev\u00F5te on turul hinnakonkurentsis ja kas kulud on optimaalses suuruses. Erinevate majandussektorite ettev\u00F5tete puhasrentaablust on omavahel raske v\u00F5rrelda, kuna nende kulustruktuur on v\u00F5ib olla v\u00E4ga erinev. K\u00E4ibe puhasrentaablus arvutatakse allj\u00E4rgneva valemi abil:\r\n   \r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"eq-c\">\r\n  K\u00E4ibe puhasrentaablus =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Puhaskasum</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">M\u00FC\u00FCgitulu</span>\r\n   </div>\r\n</div>\r\n<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin\">\r\n  Puhaskasum ja m\u00FC\u00FCgitulu v\u00F5etakse kasumiaruandest aasta l\u00F5pu seisuga. Sarnaselt k\u00E4ibe \u00E4rirentaablusega s\u00F5ltub n\u00E4itaja optimaalne suurus v\u00E4ga suurel m\u00E4\u00E4ral \u00E4ritegevuse olemusest, tegevussektorist jms, kuid mida suurem on n\u00E4itaja, seda parem. Aga kui n\u00E4itaja on suurem kui 1, siis m\u00F5jutavad puhaskasumit sissetulekud, mis ei kajastu m\u00FC\u00FCgitulus.\r\n\r\n  \r\n</div>\r\n</div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">Varade ehk kogukapitali puhasrentaablus </span>(<em>return on assets \u2014 ROA</em>) n\u00E4itab, kui efektiivselt kasutab ettev\u00F5te oma varasid puhaskasumi teenimiseks. N\u00E4itaja annab aimu sellest, kui palju toodab varasse paigutatud raha kasumit. N\u00E4itajat nimetatakse ka DuPonti valemiks. Varade puhasrentaablus arvutatakse allj\u00E4rgneva valemi abil:\r\n   \r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"eq-c\">\r\n  Varade puhasrentablus (ROA) = Puhaskasumimarginal \u00D7 Varade k\u00E4ibekordaja =\r\n\r\n  \r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Puhaskasum</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">M\u00FC\u00FCgitulu</span>\r\n   </div>\r\n   x\r\n   <div class=\"fraction\">\r\n    <span class=\"fup\">M\u00FC\u00FCgitulu</span>\r\n    <span class=\"bar\">/</span>\r\n    <span class=\"fdn\">Varad</span>\r\n    </div>\r\n    =\r\n  \r\n    \r\n<div class=\"fraction\">\r\n      <span class=\"fup\">Puhaskasum</span>\r\n      <span class=\"bar\">/</span>\r\n      <span class=\"fdn\">Varad</span>\r\n</div>\r\n  \r\n</div>\r\n\r\n\r\n<br>\r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin\">\r\n      Nagu \u00FClaltoodust n\u00E4ha, on valem ROA leidmiseks mitmeastmeline ja arvutust saab seega teostada mitmel viisil. Enamasti arvutatakse n\u00E4itaja puhaskasumi ja varade omavahelise jagatisena. Vajalikud sisendn\u00E4itajad v\u00F5etakse bilansist ja kasumiaruandest aasta l\u00F5pu seisuga. N\u00E4itaja v\u00F5imaldab anal\u00FC\u00FCsida \u00FChelt poolt ettev\u00F5tte kasumlikkust ja teiselt varade kasutamise efektiivsust.\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div> <span style=\"font-weight: 700\">Omakapitali tootlus ehk puhasrentaablus  </span>(<em>return on equity \u2014 ROE</em>) n\u00E4itab, kui efektiivselt kasutatakse omakapitali puhaskasumi teenimiseks. Ettev\u00F5tte omanikud on investeerinud omakapitali ning selle n\u00E4itaja abil on v\u00F5imalik saada \u00FClevaade sellest, kui efektiivselt need vahendid ennast taastoodavad. Omakapitali puhasrentaablus arvutatakse allj\u00E4rgneva valemi abil:\r\n      \r\n      \r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"eq-c\">\r\n    Omakapitali puhasrentaablus (ROE) = Puhaskasumimarginaal \u00D7 Varade k\u00E4ibekordaja \u00D7 Finanstv\u00F5imendus =\r\n    </div><br>\r\n    <div class=\"eq-c\"> \r\n      = ROA x \r\n      <div class=\"fraction\">\r\n      <span class=\"fup\">Varad</span>\r\n      <span class=\"bar\">/</span>\r\n      <span class=\"fdn\">Omakapital</span>\r\n      </div>\r\n      \r\n      =\r\n            \r\n   <div class=\"fraction\">\r\n         <span class=\"fup\">Puhaskasum</span>\r\n         <span class=\"bar\">/</span>\r\n         <span class=\"fdn\">Varad</span>\r\n   </div>\r\n     </div><br>\r\n     <div class=\"tekstike2 textmargin\"> \r\n      <div class=\"rowmargin\">\r\n        Omakapitali puhasrentaabluse arvutamiseks vajalikud andmed v\u00F5etakse ettev\u00F5tte kasumiaruandest ja bilansist aasta l\u00F5pu seisuga. Enamasti kasutatakse n\u00E4itaja arvutamisel puhaskasumi ja omakapitali jagatist. Nagu ka ROA puhul, on ROE puhul tegemist DuPonti anal\u00FC\u00FCsiga. See anal\u00FC\u00FCs v\u00F5imaldab eristada kolme p\u00F5hit\u00FC\u00FCpi ettev\u00F5tteid:\r\n      </div>\r\n    </div>\r\n    <div class=\"tekstike2 textmargin\"> \r\n      <div class=\"rowmargin\"> \r\n      \r\n      <ul>\r\n      <li>ettev\u00F5tted, kus kasumimarginaal on k\u00F5rge;</li>\r\n      <li>ettev\u00F5tted, kus on suur k\u00E4ive;</li>\r\n      <li>ettev\u00F5tted, kus on suur finantsv\u00F5imendus.</li>\r\n      </ul>\r\n      </div>\r\n    </div>\r\n    <br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }]
        }] });

class Ilulisaf6Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Ilulisaf6Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Ilulisaf6Component, isStandalone: true, selector: "ilulisaf6-component", ngImport: i0, template: "<br>\r\n    <div class=\"tekstike2 textmargin\"> \r\n      <div class=\"rowmargin\"> \r\n          <span style=\"font-weight: 700\">T\u00F6\u00F6j\u00F5u tootlikkus</span>\r\n        </div>\r\n      </div>\r\n    <br><br>\r\n     <div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">T\u00F6\u00F6j\u00F5u tootlikkus </span> n\u00E4itab, mitu eurot k\u00E4ivet saadakse \u00FChe euro t\u00F6\u00F6j\u00F5ukulude kohta ehk kui palju k\u00E4ivet suudab ettev\u00F5te luua teatud t\u00F6\u00F6j\u00F5ukulude juures. T\u00F6\u00F6j\u00F5u tootlikkuse v\u00E4henemine viitab sellele, et palkade t\u00F5us on olnud suurem kui k\u00E4ibe kasv (v\u00F5i k\u00E4ibe v\u00E4henemine on olnud ulatuslikum kui palkade v\u00E4hendamine). Kui eelnevad suhtarvud p\u00F5hinesid majandusaasta aruandel, siis t\u00F6\u00F6j\u00F5ukulude tootlikkuse allikateks on k\u00E4ibedeklaratsioon (vorm KMD) ning tulu- ja sotsiaalmaksu, kohustusliku kogumispensioni ja t\u00F6\u00F6tuskindlustusmakse deklaratsioon (vorm TSD).\r\n    T\u00F6\u00F6j\u00F5u tootlikkus arvutatakse allj\u00E4rgneva valemi abil:\r\n    \r\n  </div>\r\n</div><br>\r\n<div class=\"eq-c\">\r\n  T\u00F6\u00F6j\u00F5u tootlikkus =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Perioodi k\u00E4ive</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">Perioodi t\u00F6\u00F6j\u00F5ukulud</span>\r\n   </div>\r\n</div>\r\n<br>\r\n<!--div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin\">\r\nPerioodi k\u00E4ive ja t\u00F6\u00F6j\u00F5ukulud leitakse kasumiaruandest perioodi l\u00F5pu seisuga. Oluline on j\u00E4lgida, mida v\u00F5etakse arvesse t\u00F6\u00F6j\u00F5ukuludena, v\u00F5imalik on kitsam, kuid ka m\u00E4rksa laiem k\u00E4sitlus. Selge on see, et t\u00F6\u00F6taja palga kulud ja sellega seotud maksud on t\u00F6\u00F6j\u00F5ukulud, kuid sageli t\u00E4hendab inimeste hoidmine tootmisplatsil ka muid kaasnevaid kulutusi, kasv\u00F5i n\u00E4iteks v\u00F5imaliku toitlustuse pakkumise n\u00E4ol (raamatupidamislikus m\u00F5ttes on tegemist teise kulureaga, kuid seondub otseselt sellega, kui t\u00F6\u00F6taja on olemas ja tarbib pakutavat).\r\n\r\n</div>\r\n</div-->\r\n<br><br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Ilulisaf6Component, decorators: [{
            type: Component,
            args: [{ selector: 'ilulisaf6-component', standalone: true, template: "<br>\r\n    <div class=\"tekstike2 textmargin\"> \r\n      <div class=\"rowmargin\"> \r\n          <span style=\"font-weight: 700\">T\u00F6\u00F6j\u00F5u tootlikkus</span>\r\n        </div>\r\n      </div>\r\n    <br><br>\r\n     <div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">T\u00F6\u00F6j\u00F5u tootlikkus </span> n\u00E4itab, mitu eurot k\u00E4ivet saadakse \u00FChe euro t\u00F6\u00F6j\u00F5ukulude kohta ehk kui palju k\u00E4ivet suudab ettev\u00F5te luua teatud t\u00F6\u00F6j\u00F5ukulude juures. T\u00F6\u00F6j\u00F5u tootlikkuse v\u00E4henemine viitab sellele, et palkade t\u00F5us on olnud suurem kui k\u00E4ibe kasv (v\u00F5i k\u00E4ibe v\u00E4henemine on olnud ulatuslikum kui palkade v\u00E4hendamine). Kui eelnevad suhtarvud p\u00F5hinesid majandusaasta aruandel, siis t\u00F6\u00F6j\u00F5ukulude tootlikkuse allikateks on k\u00E4ibedeklaratsioon (vorm KMD) ning tulu- ja sotsiaalmaksu, kohustusliku kogumispensioni ja t\u00F6\u00F6tuskindlustusmakse deklaratsioon (vorm TSD).\r\n    T\u00F6\u00F6j\u00F5u tootlikkus arvutatakse allj\u00E4rgneva valemi abil:\r\n    \r\n  </div>\r\n</div><br>\r\n<div class=\"eq-c\">\r\n  T\u00F6\u00F6j\u00F5u tootlikkus =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Perioodi k\u00E4ive</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">Perioodi t\u00F6\u00F6j\u00F5ukulud</span>\r\n   </div>\r\n</div>\r\n<br>\r\n<!--div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin\">\r\nPerioodi k\u00E4ive ja t\u00F6\u00F6j\u00F5ukulud leitakse kasumiaruandest perioodi l\u00F5pu seisuga. Oluline on j\u00E4lgida, mida v\u00F5etakse arvesse t\u00F6\u00F6j\u00F5ukuludena, v\u00F5imalik on kitsam, kuid ka m\u00E4rksa laiem k\u00E4sitlus. Selge on see, et t\u00F6\u00F6taja palga kulud ja sellega seotud maksud on t\u00F6\u00F6j\u00F5ukulud, kuid sageli t\u00E4hendab inimeste hoidmine tootmisplatsil ka muid kaasnevaid kulutusi, kasv\u00F5i n\u00E4iteks v\u00F5imaliku toitlustuse pakkumise n\u00E4ol (raamatupidamislikus m\u00F5ttes on tegemist teise kulureaga, kuid seondub otseselt sellega, kui t\u00F6\u00F6taja on olemas ja tarbib pakutavat).\r\n\r\n</div>\r\n</div-->\r\n<br><br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }]
        }] });

class IlusektorComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: IlusektorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: IlusektorComponent, isStandalone: true, selector: "ilusektor-component", ngImport: i0, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin2\">\r\nEttev\u00F5tluse eluj\u00F5ulisuse indeksi jaoks on defineeritud ettev\u00F5tete ja majandus\u00FCksuste tegevussektorid. Sektorid on moodustatud tegevusalade (EMTAK) kombineerimisel. Aluseks on sarnane p\u00F5hitegevusala, mis eelduslikult t\u00E4hendab sarnasust tehingute kajastuses bilanssides/kasumiaruannetes; sarnasust tehingute loogikas; sarnast majandusmudelit. Mudelite treenimiseks kasutatavate sisendandmete kokkupanekul kontrolliti iga sektori kohta, et sinna kuuluks piisav arv ettev\u00F5tteid, et masin\u00F5ppemudel saaks toimida ja vajaliku tulemi tagada.\r\n</div>\r\n</div>\r\n<br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: IlusektorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ilusektor-component', standalone: true, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin2\">\r\nEttev\u00F5tluse eluj\u00F5ulisuse indeksi jaoks on defineeritud ettev\u00F5tete ja majandus\u00FCksuste tegevussektorid. Sektorid on moodustatud tegevusalade (EMTAK) kombineerimisel. Aluseks on sarnane p\u00F5hitegevusala, mis eelduslikult t\u00E4hendab sarnasust tehingute kajastuses bilanssides/kasumiaruannetes; sarnasust tehingute loogikas; sarnast majandusmudelit. Mudelite treenimiseks kasutatavate sisendandmete kokkupanekul kontrolliti iga sektori kohta, et sinna kuuluks piisav arv ettev\u00F5tteid, et masin\u00F5ppemudel saaks toimida ja vajaliku tulemi tagada.\r\n</div>\r\n</div>\r\n<br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }]
        }] });

class IluklasterComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: IluklasterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: IluklasterComponent, isStandalone: true, selector: "iluklaster-component", ngImport: i0, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin2\">\r\nEttev\u00F5tted on oma olemuselt, tegevustelt ja bilansin\u00E4itajatelt mitmekesised ning see muudab masin\u00F5ppe keeruliseks. Seet\u00F5ttu jagati ettev\u00F5tete tegevusalad (EMTAKi j\u00E4rgi) klasteranal\u00FC\u00FCsiga nelja homogeensemasse tegevusalade gruppi. Ettev\u00F5tted saavad eluj\u00F5ulisuse prognoosi v\u00F5rdluses teiste sama klastri ettev\u00F5tetega. See v\u00F5imaldab suurendada hinnangu t\u00E4psust ning v\u00E4hendada olukordi, kus omavahel v\u00F5rdlusesse satuvad \u00E4\u00E4rmiselt erinevad ettev\u00F5tted. Need ettev\u00F5tted, mida ei saa seostada \u00FChegi tegevusalade grupiga, j\u00E4\u00E4vad eluj\u00F5ulisuse prognoosimisest k\u00F5rvale.\r\n</div>\r\n</div>\r\n<br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: IluklasterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'iluklaster-component', standalone: true, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin2\">\r\nEttev\u00F5tted on oma olemuselt, tegevustelt ja bilansin\u00E4itajatelt mitmekesised ning see muudab masin\u00F5ppe keeruliseks. Seet\u00F5ttu jagati ettev\u00F5tete tegevusalad (EMTAKi j\u00E4rgi) klasteranal\u00FC\u00FCsiga nelja homogeensemasse tegevusalade gruppi. Ettev\u00F5tted saavad eluj\u00F5ulisuse prognoosi v\u00F5rdluses teiste sama klastri ettev\u00F5tetega. See v\u00F5imaldab suurendada hinnangu t\u00E4psust ning v\u00E4hendada olukordi, kus omavahel v\u00F5rdlusesse satuvad \u00E4\u00E4rmiselt erinevad ettev\u00F5tted. Need ettev\u00F5tted, mida ei saa seostada \u00FChegi tegevusalade grupiga, j\u00E4\u00E4vad eluj\u00F5ulisuse prognoosimisest k\u00F5rvale.\r\n</div>\r\n</div>\r\n<br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }]
        }] });

class Iluprognoos1Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Iluprognoos1Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Iluprognoos1Component, isStandalone: true, selector: "iluprognoos1-component", ngImport: i0, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin2\">\r\n  Kratt prognoosib ettev\u00F5ttele kahe eelneva aasta andmete p\u00F5hjal kolmanda aasta eluj\u00F5ulisust. Kui olemasolevad andmed on aasta n kohta ja n-1 aasta kohta, siis kratt prognoosib aasta n+1 kohta. Kuiste andmete puhul v\u00F5etakse aluseks viimase teadaoleva 12 kuu andmed (m kuni m-11) ning eluj\u00F5ulisust prognoositakse sellele perioodile j\u00E4rgneva kolme kuu (m+1, m+2 ja m+3) kohta. Selleks kasutatakse k\u00F5igi ettev\u00F5tete eelmistel aastatel esitatud majandusaasta aruannete ja maksudeklaratsioonide andmeid.\r\n</div>\r\n</div>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin2\">\r\n    Rakendus eristab viit t\u00FC\u00FCpi eluj\u00F5ulisust: maksev\u00F5ime, efektiivsus, finantsv\u00F5imendus, tasuvus ja t\u00F6\u00F6j\u00F5ukulude tootlikkus. Igat t\u00FC\u00FCpi eluj\u00F5ulisust hinnatakse finantssuhtarve kasutades ning anal\u00FC\u00FCsitakse ettev\u00F5tte positsiooni tegevussektoris. Sektori ettev\u00F5tted j\u00E4rjestatakse finantssuhtarvude j\u00E4rgi. Neid ettev\u00F5tteid, kes kuulusid kolmandal aastal oma kitsamas sektoris suhtarvu j\u00E4rgi alumisse kvartiili (alumine neljandik), peetakse selles eluj\u00F5ulisuse aspektis v\u00E4he eluj\u00F5uliseks. \u00DClemisse kvartiili kuulumine t\u00E4hendab vastavalt suurt eluj\u00F5ulisust. Eluj\u00F5ulisuse prognoosimise tehisn\u00E4rviv\u00F5rkude v\u00E4ljundiks on kolm t\u00F5en\u00E4osust: v\u00E4ikese, keskp\u00E4rase ning suure eluj\u00F5ulisuse t\u00F5en\u00E4osused, mille summa on 1. Kasutajale kuvatakse l\u00E4htuvalt eri eluj\u00F5ulisuse mudelite v\u00E4ljunditest visuaalseid eluj\u00F5ulisuse indikaatoreid (roheline, kollane, punane) ning s\u00F5nalisi hinnanguid.\r\n  </div>\r\n  </div>\r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin2\">\r\n      Kratt annab igale ettev\u00F5ttele hinnangu selle kohta, kui t\u00F5en\u00E4oline on mineviku andmete p\u00F5hjal see, et j\u00E4rgmisel aastal ettev\u00F5tte eluj\u00F5ud on suur, keskp\u00E4rane v\u00F5i v\u00E4ike. Enamasti hindab rakendus k\u00F5igi kolme tulevikuperspektiivi realiseerumist mingil m\u00E4\u00E4ral t\u00F5en\u00E4oliseks. K\u00F5ige k\u00F5rgema t\u00F5en\u00E4osusprotsendiga tulemust esitataksegi k\u00F5ige t\u00F5en\u00E4olisemana.\r\n    </div>\r\n    </div>\r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin2\">\r\n      Treenitud masin\u00F5ppemudel (kratt) prognoosib hinnangud viie suhtarvude grupi koondindeksite (skooride) kohta (1. maksev\u00F5ime suhtarvud, 2. efektiivsuse suhtarvud, 3. finantsv\u00F5imenduse suhtarvud, 4. tasuvuse suhtarvud ja 5. t\u00F6\u00F6j\u00F5ukulude tootlikkus). Hinnang n\u00E4itab prognoosi v\u00F5rreldes suhtarvude koondindeksi paiknemisega teiste sarnaste ettev\u00F5tete (sama klaster, sama sektor) seas. Arvutuste aluseks on esitatud majandusaasta aruanded ja igakuised maksudeklaratsioonid (KMD, TSD).\r\n    </div>\r\n  </div>\r\n\r\n<br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Iluprognoos1Component, decorators: [{
            type: Component,
            args: [{ selector: 'iluprognoos1-component', standalone: true, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin2\">\r\n  Kratt prognoosib ettev\u00F5ttele kahe eelneva aasta andmete p\u00F5hjal kolmanda aasta eluj\u00F5ulisust. Kui olemasolevad andmed on aasta n kohta ja n-1 aasta kohta, siis kratt prognoosib aasta n+1 kohta. Kuiste andmete puhul v\u00F5etakse aluseks viimase teadaoleva 12 kuu andmed (m kuni m-11) ning eluj\u00F5ulisust prognoositakse sellele perioodile j\u00E4rgneva kolme kuu (m+1, m+2 ja m+3) kohta. Selleks kasutatakse k\u00F5igi ettev\u00F5tete eelmistel aastatel esitatud majandusaasta aruannete ja maksudeklaratsioonide andmeid.\r\n</div>\r\n</div>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin2\">\r\n    Rakendus eristab viit t\u00FC\u00FCpi eluj\u00F5ulisust: maksev\u00F5ime, efektiivsus, finantsv\u00F5imendus, tasuvus ja t\u00F6\u00F6j\u00F5ukulude tootlikkus. Igat t\u00FC\u00FCpi eluj\u00F5ulisust hinnatakse finantssuhtarve kasutades ning anal\u00FC\u00FCsitakse ettev\u00F5tte positsiooni tegevussektoris. Sektori ettev\u00F5tted j\u00E4rjestatakse finantssuhtarvude j\u00E4rgi. Neid ettev\u00F5tteid, kes kuulusid kolmandal aastal oma kitsamas sektoris suhtarvu j\u00E4rgi alumisse kvartiili (alumine neljandik), peetakse selles eluj\u00F5ulisuse aspektis v\u00E4he eluj\u00F5uliseks. \u00DClemisse kvartiili kuulumine t\u00E4hendab vastavalt suurt eluj\u00F5ulisust. Eluj\u00F5ulisuse prognoosimise tehisn\u00E4rviv\u00F5rkude v\u00E4ljundiks on kolm t\u00F5en\u00E4osust: v\u00E4ikese, keskp\u00E4rase ning suure eluj\u00F5ulisuse t\u00F5en\u00E4osused, mille summa on 1. Kasutajale kuvatakse l\u00E4htuvalt eri eluj\u00F5ulisuse mudelite v\u00E4ljunditest visuaalseid eluj\u00F5ulisuse indikaatoreid (roheline, kollane, punane) ning s\u00F5nalisi hinnanguid.\r\n  </div>\r\n  </div>\r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin2\">\r\n      Kratt annab igale ettev\u00F5ttele hinnangu selle kohta, kui t\u00F5en\u00E4oline on mineviku andmete p\u00F5hjal see, et j\u00E4rgmisel aastal ettev\u00F5tte eluj\u00F5ud on suur, keskp\u00E4rane v\u00F5i v\u00E4ike. Enamasti hindab rakendus k\u00F5igi kolme tulevikuperspektiivi realiseerumist mingil m\u00E4\u00E4ral t\u00F5en\u00E4oliseks. K\u00F5ige k\u00F5rgema t\u00F5en\u00E4osusprotsendiga tulemust esitataksegi k\u00F5ige t\u00F5en\u00E4olisemana.\r\n    </div>\r\n    </div>\r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin2\">\r\n      Treenitud masin\u00F5ppemudel (kratt) prognoosib hinnangud viie suhtarvude grupi koondindeksite (skooride) kohta (1. maksev\u00F5ime suhtarvud, 2. efektiivsuse suhtarvud, 3. finantsv\u00F5imenduse suhtarvud, 4. tasuvuse suhtarvud ja 5. t\u00F6\u00F6j\u00F5ukulude tootlikkus). Hinnang n\u00E4itab prognoosi v\u00F5rreldes suhtarvude koondindeksi paiknemisega teiste sarnaste ettev\u00F5tete (sama klaster, sama sektor) seas. Arvutuste aluseks on esitatud majandusaasta aruanded ja igakuised maksudeklaratsioonid (KMD, TSD).\r\n    </div>\r\n  </div>\r\n\r\n<br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }]
        }] });

class IluprognoosComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: IluprognoosComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: IluprognoosComponent, isStandalone: true, selector: "iluprognoos-component", ngImport: i0, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin2\">\r\nKrati prognooside t\u00F5lgendamisel tuleb olla ettevaatlik:\r\n</div>\r\n\r\n<ul>\r\n<li>Eluj\u00F5ulisuse indeksi rakenduse tulemuste ja soovituste puhul tuleb silmas pidada, et tegemist on masin\u00F5ppemudelil p\u00F5hineva prognoosiga. Tulevikuperspektiivide ennustamisel kasutatakse tehisn\u00E4rviv\u00F5rke ja tulemused s\u00F5ltuvad sellest, milliseid andmeid ja parameetreid on mudelite treenimisel kasutatud. Tegu on \u00FCldistusega, mis ei oska arvestada iga ettev\u00F5tte erip\u00E4rasid, konteksti, erakordseid s\u00FCndmusi ning majandustegevuse omap\u00E4rasid, mis ei kajastu peamistes finantsn\u00E4itajates. N\u00E4iteks ei oska indeks arvesse v\u00F5tta eriolukordi, nagu varade jagunemist osanike vahel;</li>\r\n<li>Masin\u00F5ppemudel suudab suure hulga minevikuinformatsiooni p\u00F5hjal teatava veam\u00E4\u00E4raga tulevikku prognoosida, kuid masinal puudub selgeltn\u00E4gemisv\u00F5ime. Kuna kratt on eelmiste aastate andmete p\u00F5hjal treenitud mudelite s\u00FCsteem, ei oska see arvesse v\u00F5tta eelnevast olukorrast v\u00E4ga erinevaid arenguid, ootamatuid s\u00FCndmusi ja muutusi ettev\u00F5tte tegevussektori keskkonnas. Sellisel juhul v\u00F5ib s\u00FCsteem ettev\u00F5tte andmetest n\u00E4htuvat (ja tegelikult muutuvast makrokeskkonnast tulenevat) majandusseisu muutust t\u00F5lgendada ebakorrektselt;</li>\r\n<li>Kratt ei pruugi osata anda usaldusv\u00E4\u00E4rset prognoosi juhul, kui ettev\u00F5te on anal\u00FC\u00FCsitava perioodi jooksul teinud l\u00E4bi olulise restruktureerimise ja/v\u00F5i majandustegevuse olemuse olulise muutuse, mille tulemusena perioodi kirjeldavad majandusaasta aruanded on v\u00E4ga erinevad. Kui ettev\u00F5te on viimastel aastatel muutnud p\u00F5hitegevusala (EMTAKi j\u00E4rgi), siis ei ole v\u00F5imalik prognoosi koostada;</li>\r\n<li>Masin\u00F5ppemudelite anal\u00FC\u00FCtilised tulemid on ainult osaliselt selgitatavad. Mudelid kasutavad  keerukaid matemaatilisi algoritme. Algoritmide olemusest tulenevalt ei ole alati tavaloogikat v\u00F5i majandusanal\u00FC\u00FCtika loogikat kasutades v\u00F5imalik lahti m\u00F5testada, miks \u00FCks v\u00F5i teine mudel on teinud m\u00F5ne konkreetse j\u00E4relduse;</li>\r\n<li>Eluj\u00F5ulisuse indeks kasutab anal\u00FC\u00FCsiks ettev\u00F5tte majandusaasta aruande, maksudeklaratsioonide, t\u00F6\u00F6tamise registri ja majandus\u00FCksuste statistilise registri andmeid. Seega s\u00F5ltub hinnangute t\u00E4psus sellest, kui t\u00E4psed on ettev\u00F5tte edastatud andmed;</li>\r\n<li>Juhul, kui ettev\u00F5te ei ole esitanud eelnevalt kirjeldatud perioodide kohta majandusaasta aruandeid ja/v\u00F5i maksudeklaratsioone, siis ei saa rakendus ettev\u00F5tte kohta hinnangut anda;</li>\r\n<li>Kui ettev\u00F5tte tegevus ja bilanss erinevad oluliselt teistest sama EMTAKi koodiga ettev\u00F5tetest, ei pruugi saadud prognoos usaldusv\u00E4\u00E4rne olla.</li>\r\n</ul>\r\n\r\n\r\n</div>\r\n<br>\r\n", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: IluprognoosComponent, decorators: [{
            type: Component,
            args: [{ selector: 'iluprognoos-component', standalone: true, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin2\">\r\nKrati prognooside t\u00F5lgendamisel tuleb olla ettevaatlik:\r\n</div>\r\n\r\n<ul>\r\n<li>Eluj\u00F5ulisuse indeksi rakenduse tulemuste ja soovituste puhul tuleb silmas pidada, et tegemist on masin\u00F5ppemudelil p\u00F5hineva prognoosiga. Tulevikuperspektiivide ennustamisel kasutatakse tehisn\u00E4rviv\u00F5rke ja tulemused s\u00F5ltuvad sellest, milliseid andmeid ja parameetreid on mudelite treenimisel kasutatud. Tegu on \u00FCldistusega, mis ei oska arvestada iga ettev\u00F5tte erip\u00E4rasid, konteksti, erakordseid s\u00FCndmusi ning majandustegevuse omap\u00E4rasid, mis ei kajastu peamistes finantsn\u00E4itajates. N\u00E4iteks ei oska indeks arvesse v\u00F5tta eriolukordi, nagu varade jagunemist osanike vahel;</li>\r\n<li>Masin\u00F5ppemudel suudab suure hulga minevikuinformatsiooni p\u00F5hjal teatava veam\u00E4\u00E4raga tulevikku prognoosida, kuid masinal puudub selgeltn\u00E4gemisv\u00F5ime. Kuna kratt on eelmiste aastate andmete p\u00F5hjal treenitud mudelite s\u00FCsteem, ei oska see arvesse v\u00F5tta eelnevast olukorrast v\u00E4ga erinevaid arenguid, ootamatuid s\u00FCndmusi ja muutusi ettev\u00F5tte tegevussektori keskkonnas. Sellisel juhul v\u00F5ib s\u00FCsteem ettev\u00F5tte andmetest n\u00E4htuvat (ja tegelikult muutuvast makrokeskkonnast tulenevat) majandusseisu muutust t\u00F5lgendada ebakorrektselt;</li>\r\n<li>Kratt ei pruugi osata anda usaldusv\u00E4\u00E4rset prognoosi juhul, kui ettev\u00F5te on anal\u00FC\u00FCsitava perioodi jooksul teinud l\u00E4bi olulise restruktureerimise ja/v\u00F5i majandustegevuse olemuse olulise muutuse, mille tulemusena perioodi kirjeldavad majandusaasta aruanded on v\u00E4ga erinevad. Kui ettev\u00F5te on viimastel aastatel muutnud p\u00F5hitegevusala (EMTAKi j\u00E4rgi), siis ei ole v\u00F5imalik prognoosi koostada;</li>\r\n<li>Masin\u00F5ppemudelite anal\u00FC\u00FCtilised tulemid on ainult osaliselt selgitatavad. Mudelid kasutavad  keerukaid matemaatilisi algoritme. Algoritmide olemusest tulenevalt ei ole alati tavaloogikat v\u00F5i majandusanal\u00FC\u00FCtika loogikat kasutades v\u00F5imalik lahti m\u00F5testada, miks \u00FCks v\u00F5i teine mudel on teinud m\u00F5ne konkreetse j\u00E4relduse;</li>\r\n<li>Eluj\u00F5ulisuse indeks kasutab anal\u00FC\u00FCsiks ettev\u00F5tte majandusaasta aruande, maksudeklaratsioonide, t\u00F6\u00F6tamise registri ja majandus\u00FCksuste statistilise registri andmeid. Seega s\u00F5ltub hinnangute t\u00E4psus sellest, kui t\u00E4psed on ettev\u00F5tte edastatud andmed;</li>\r\n<li>Juhul, kui ettev\u00F5te ei ole esitanud eelnevalt kirjeldatud perioodide kohta majandusaasta aruandeid ja/v\u00F5i maksudeklaratsioone, siis ei saa rakendus ettev\u00F5tte kohta hinnangut anda;</li>\r\n<li>Kui ettev\u00F5tte tegevus ja bilanss erinevad oluliselt teistest sama EMTAKi koodiga ettev\u00F5tetest, ei pruugi saadud prognoos usaldusv\u00E4\u00E4rne olla.</li>\r\n</ul>\r\n\r\n\r\n</div>\r\n<br>\r\n", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }]
        }] });

class IlusoovitusComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: IlusoovitusComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: IlusoovitusComponent, isStandalone: true, selector: "ilusoovitus-component", ngImport: i0, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin2\">\r\nL\u00E4htuvalt majandusteooriast ja suhtarvude anal\u00FC\u00FCsist annab kratt ettev\u00F5ttele tavap\u00E4raseid tegevussuuna soovitusi vastavalt hinnangule igas eluj\u00F5ulisuse t\u00FC\u00FCbis. Kuna rakendusel pole piisavalt detailset teavet iga ettev\u00F5tte kohta, siis ei saa see anda konkreetset n\u00F5u, vaid pigem suunata ettev\u00F5tet edasist olukorda anal\u00FC\u00FCsima. Krati soovitusi ilma nende sisu ja asjakohasust anal\u00FC\u00FCsimata ellu viia ei ole \u00F5ige. Edasiste tegevusplaanide tegemisse on soovitav kaasata ekspert v\u00F5i eriteadmistega konsultant. \r\n</div>\r\n</div>\r\n<br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: IlusoovitusComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ilusoovitus-component', standalone: true, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin2\">\r\nL\u00E4htuvalt majandusteooriast ja suhtarvude anal\u00FC\u00FCsist annab kratt ettev\u00F5ttele tavap\u00E4raseid tegevussuuna soovitusi vastavalt hinnangule igas eluj\u00F5ulisuse t\u00FC\u00FCbis. Kuna rakendusel pole piisavalt detailset teavet iga ettev\u00F5tte kohta, siis ei saa see anda konkreetset n\u00F5u, vaid pigem suunata ettev\u00F5tet edasist olukorda anal\u00FC\u00FCsima. Krati soovitusi ilma nende sisu ja asjakohasust anal\u00FC\u00FCsimata ellu viia ei ole \u00F5ige. Edasiste tegevusplaanide tegemisse on soovitav kaasata ekspert v\u00F5i eriteadmistega konsultant. \r\n</div>\r\n</div>\r\n<br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }]
        }] });

class Varav4aComponent {
    constructor() {
        this.sections = [
            {
                name: 'Mis on ettevõtte elujõulisuse indeks?',
                content: 'x',
            },
            {
                name: 'Mis on Kratt?',
                content: 'Kratt on tehisintellekti tehnoloogial põhinev praktiline rakendus. Kratt põhineb tarkvaralisel algoritmil, mis on õppimisvõimeline ning täidab traditsiooniliselt inimese poolt tehtavaid ülesandeid. Tegemist on kitsa tehisintellektiga (narrow AI), mis tähendab masina võimet tegutseda intelligentselt ühes kitsas valdkonnas.         Elujõulisuse krati supervõime on masinõppel põhineva prognoosi tegemise oskus, mis lisaks ettevõtte enda majandusnäitajatele arvestab teiste Eesti majanduses tegutsevate ettevõtete tegevust, finantsnäitajaid ja laiemat majanduskonteksti. Kratt on õppinud väga suurelt andmekogumilt, millele ükski ettevõte tavapäraselt ligi ei pääse. Samas tuleb arvestada, et tegu on siiski masinaga, täpsemalt on kratt oma sisult arvutiprogramm. See on küll võimeline suure hulga informatsiooni abil prognoosima teie ettevõtte elujõulisust, kuid sel puudub võime näha tulevikku ning arvestada kõiki asjaolusid, sündmusi ja ettevõtte tegutsemise konteksti. <b>Arvestada tuleb teatava veamääraga.</b>',
            },
            {
                name: 'Mis on elujõulisus?',
                content: 'Ettevõtte elujõulisuse indeksi metoodika aluseks on üldtunnustatud majandusanalüütika näitajad ja põhimõtted. Peamiselt kasutatakse analüüsil finantssuhtarve. Kratt hindab viit tüüpi elujõulisust: maksevõimet, efektiivsust, finantsvõimendust, tasuvust ja tööjõukulude tootlikkust. ',
            },
            {
                name: 'Finantssuhtarvud',
                content: 'Finantssuhtarve või ka raamatupidamise suhtarve kasutatakse ettevõtte või muu organisatsiooni üldise finantsseisundi hindamiseks ning need aitavad muuta finantsaruanded paremini loetavaks. Suhtarvud annavad kasulikku teavet nii ettevõtte juhtkonnale, omanikele kui ka võlausaldajatele. Finantsanalüüsides kasutatakse finantssuhtarve selleks, et võrrelda omavahel eri ettevõtete tugevaid ja nõrku külgi.'
            },
            {
                name: 'Efektiivsuse suhtarvud',
                content: 'Efektiivsuse suhtarvud (activity ratios) näitavad, kui efektiivselt ettevõte juhib eri varadesse investeeritud vahendeid.',
            },
            {
                name: 'Maksevõime suhtarvud',
                content: 'Efektiivsuse suhtarvud (activity ratios) näitavad, kui efektiivselt ettevõte juhib eri varadesse investeeritud vahendeid.',
            },
            {
                name: 'Finantsvõimenduse suhtarvud',
                content: 'Finantsvõimenduse ehk kapitali struktuuri suhtarvud (financial leverage ratios; debt ratios) näitavad, kui palju ettevõte kasutab laenukapitali ehk ettevõtte võimet tasuda lühi- ja pikaajalisi kohustusi.',
            },
            {
                name: 'Tasuvuse suhtarvud',
                content: 'Tasuvuse suhtarvud (profitability ratios) näitavad ettevõtte rentaablust ehk seda, kui palju toodab ettevõttesse investeeritud kapital kasumit.',
            },
            {
                name: 'Tööjõu tootlikkus',
                content: 'Tööjõukulude tootlikkus käibe alusel näitab, mitu eurot käivet saadakse ühe euro tööjõukulude kohta.',
            },
            {
                name: 'Tegevussektorite määramine',
                content: 'Ettevõtluse elujõulisuse indeksi jaoks on defineeritud ettevõtete ja majandusüksuste tegevussektorid. Sektorid on moodustatud tegevusalade (EMTAK) kombineerimisel. Aluseks on sarnane põhitegevusala, mis eelduslikult tähendab sarnasust tehingute kajastuses bilanssides/kasumiaruannetes; sarnasust tehingute loogikas; sarnast majandusmudelit. Mudelite treenimiseks kasutatavate sisendandmete kokkupanekul kontrolliti iga sektori kohta, et sinna kuuluks piisav arv ettevõtteid, et masinõppemudel saaks toimida ja vajaliku tulemi tagada.',
            },
            {
                name: 'Ettevõtete grupp (Klaster)',
                content: 'Ettevõtted on oma olemuselt, tegevustelt ja bilansinäitajatelt mitmekesised ning see muudab masinõppe keeruliseks. Seetõttu jagati ettevõtete tegevusalad (EMTAKi järgi) klasteranalüüsiga nelja homogeensemasse tegevusalade gruppi. Ettevõtted saavad elujõulisuse prognoosi võrdluses teiste sama klastri ettevõtetega. See võimaldab suurendada hinnangu täpsust ning vähendada olukordi, kus omavahel võrdlusesse satuvad äärmiselt erinevad ettevõtted. Need ettevõtted, mida ei saa seostada ühegi tegevusalade grupiga, jäävad elujõulisuse prognoosimisest kõrvale.',
            },
            {
                name: 'Kuidas prognoos kujuneb?',
                content: 'x',
            },
            {
                name: 'Prognooside kriitiline tõlgendamine',
                content: 'Krati prognooside tõlgendamisel tuleb olla ettevaatlik.         •	Elujõulisuse indeksi rakenduse tulemuste ja soovituste puhul tuleb silmas pidada, et tegemist on masinõppemudelil põhineva prognoosiga. Tulevikuperspektiivide ennustamisel kasutatakse tehisnärvivõrke ja tulemused sõltuvad sellest, milliseid andmeid ja parameetreid on mudelite treenimisel kasutatud. Tegu on üldistusega, mis ei oska arvestada iga ettevõtte eripärasid, konteksti, erakordseid sündmusi ning majandustegevuse omapärasid, mis ei kajastu peamistes finantsnäitajates. Näiteks ei oska indeks arvesse võtta eriolukordi, nagu varade jagunemist osanike vahel.         •	Masinõppemudel suudab suure hulga minevikuinformatsiooni põhjal teatava veamääraga tulevikku prognoosida, kuid masinal puudub selgeltnägemisvõime. Kuna kratt on eelmiste aastate andmete põhjal treenitud mudelite süsteem, ei oska see arvesse võtta eelnevast olukorrast väga erinevaid arenguid, ootamatuid sündmusi ja muutusi ettevõtte tegevussektori keskkonnas. Sellisel juhul võib süsteem ettevõtte andmetest nähtuvat (ja tegelikult muutuvast makrokeskkonnast tulenevat) majandusseisu muutust tõlgendada ebakorrektselt.         •	Kratt ei pruugi osata anda usaldusväärset prognoosi juhul, kui ettevõte on analüüsitava perioodi jooksul teinud läbi olulise restruktureerimise ja/või majandustegevuse olemuse olulise muutuse, mille tulemusena perioodi kirjeldavad majandusaasta aruanded on väga erinevad. Kui ettevõte on viimastel aastatel muutnud põhitegevusala (EMTAKi järgi), siis ei ole võimalik prognoosi koostada.         •	Masinõppemudelite analüütilised tulemid on ainult osaliselt selgitatavad. Mudelid kasutavad  keerukaid matemaatilisi algoritme. Algoritmide olemusest tulenevalt ei ole alati tavaloogikat või majandusanalüütika loogikat kasutades võimalik lahti mõtestada, miks üks või teine mudel on teinud mõne konkreetse järelduse.         •	Elujõulisuse indeks kasutab analüüsiks ettevõtte majandusaasta aruande, maksudeklaratsioonide, töötamise registri ja majandusüksuste statistilise registri andmeid. Seega sõltub hinnangute täpsus sellest, kui täpsed on ettevõtte edastatud andmed.         •	Juhul, kui ettevõte ei ole esitanud eelnevalt kirjeldatud perioodide kohta majandusaasta aruandeid ja/või maksudeklaratsioone, siis ei saa rakendus ettevõtte kohta hinnangut anda.         •	Kui ettevõtte tegevus ja bilanss erinevad oluliselt teistest sama EMTAKi koodiga ettevõtetest, ei pruugi saadud prognoos usaldusväärne olla. ',
            },
            {
                name: 'Soovitused',
                content: 'Lähtuvalt majandusteooriast ja suhtarvude analüüsist annab kratt ettevõttele tavapäraseid tegevussuuna soovitusi vastavalt hinnangule igas elujõulisuse tüübis. Kuna rakendusel pole piisavalt detailset teavet iga ettevõtte kohta, siis ei saa see anda konkreetset nõu, vaid pigem suunata ettevõtet edasist olukorda analüüsima. Krati soovitusi ilma nende sisu ja asjakohasust analüüsimata ellu viia ei ole õige. Edasiste tegevusplaanide tegemisse on soovitav kaasata ekspert või eriteadmistega konsultant. Täpsema metoodika leiab siit: …link metoodikaraportile…',
            },
        ];
        this.showComponent0 = false;
        this.showComponent1 = false;
        this.showComponent2 = false;
        this.showComponent3 = false;
        this.showComponent4 = false;
        this.showComponent5 = false;
        this.showComponent6 = false;
        this.showComponent7 = false;
        this.showComponent8 = false;
        this.showComponent9 = false;
        this.showComponent10 = false;
        this.showComponent11a = false;
        this.showComponent11 = false;
        this.showComponent12 = false;
    }
    expand(index) {
        if (this.currentIndex === index) {
            this.currentIndex = null;
            return;
        }
        this.currentIndex = index;
        //alert(this.currentIndex);
        if (this.currentIndex === 0) {
            this.showComponent0 = true;
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11a = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
        }
        else if (this.currentIndex === 1) {
            this.showComponent0 = false;
            this.showComponent1 = true;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11a = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
        }
        else if (this.currentIndex === 2) {
            this.showComponent0 = false;
            this.showComponent1 = false;
            this.showComponent2 = true;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11a = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
        }
        else if (this.currentIndex === 3) {
            this.showComponent0 = false;
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = true;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11a = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
        }
        else if (this.currentIndex === 4) {
            this.showComponent0 = false;
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = true;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11a = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
        }
        else if (this.currentIndex === 5) {
            this.showComponent0 = false;
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = true;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11a = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
        }
        else if (this.currentIndex === 6) {
            this.showComponent0 = false;
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = true;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11a = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
        }
        else if (this.currentIndex === 7) {
            this.showComponent0 = false;
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = true;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11a = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
        }
        else if (this.currentIndex === 8) {
            this.showComponent0 = false;
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = true;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11a = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
        }
        else if (this.currentIndex === 9) {
            this.showComponent0 = false;
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = true;
            this.showComponent10 = false;
            this.showComponent11a = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
        }
        else if (this.currentIndex === 10) {
            this.showComponent0 = false;
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = true;
            this.showComponent11a = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
        }
        else if (this.currentIndex === 11) {
            this.showComponent0 = false;
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11a = true;
            this.showComponent11 = false;
            this.showComponent12 = false;
        }
        else if (this.currentIndex === 12) {
            this.showComponent0 = false;
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11a = false;
            this.showComponent11 = true;
            this.showComponent12 = false;
        }
        else if (this.currentIndex === 13) {
            this.showComponent0 = false;
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11a = false;
            this.showComponent11 = false;
            this.showComponent12 = true;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav4aComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Varav4aComponent, isStandalone: true, selector: "varav4a", ngImport: i0, template: "<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n  \r\nTeadmiseks kasutajale\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2a\">\r\n\r\nRakendus on arvutiprogramm ja selle hinnang ei pruugi olla igas olukorras eksimatu. T\u00E4psemad selgitused ja \u00FClevaate piirangutest leiate sellest tekstiosast. Selgituse lugemiseks kl\u00F5psake vastaval alajaotusel.\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <div class=\"panel\"\r\n  [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n  <!--p>{{section.content}}</p-->\r\n  <iluelu-component *ngIf=\"showComponent0\"></iluelu-component>\r\n  <ilukratt-component *ngIf=\"showComponent1\"></ilukratt-component>\r\n  <ilukvia-component *ngIf=\"showComponent2\"></ilukvia-component>\r\n  <ilulisaf1-component *ngIf=\"showComponent3\"></ilulisaf1-component>\r\n  <ilulisaf2-component *ngIf=\"showComponent4\"></ilulisaf2-component>\r\n  <ilulisaf3-component *ngIf=\"showComponent5\"></ilulisaf3-component>\r\n  <ilulisaf4-component *ngIf=\"showComponent6\"></ilulisaf4-component>\r\n  <ilulisaf5-component *ngIf=\"showComponent7\"></ilulisaf5-component>\r\n  <ilulisaf6-component *ngIf=\"showComponent8\"></ilulisaf6-component>\r\n  <ilusektor-component *ngIf=\"showComponent9\"></ilusektor-component>\r\n  <iluklaster-component *ngIf=\"showComponent10\"></iluklaster-component>\r\n  <iluprognoos1-component *ngIf=\"showComponent11a\"></iluprognoos1-component>\r\n  <iluprognoos-component *ngIf=\"showComponent11\"></iluprognoos-component>\r\n  <ilusoovitus-component *ngIf=\"showComponent12\"></ilusoovitus-component>\r\n  \r\n  <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n  <!--progn1-component></progn1-component-->\r\n  <!--progn2-component></progn2-component-->\r\n<!--/div-->\r\n\r\n</div>\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <!--div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <span class=\"tekstike2\">{{section.content}}</span>\r\n      \r\n</div-->\r\n\r\n</div>\r\n\r\n</div>\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px 10px 10px 40px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2a{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: IlueluComponent, selector: "iluelu-component" }, { kind: "component", type: IlukrattComponent, selector: "ilukratt-component" }, { kind: "component", type: IlukviaComponent, selector: "ilukvia-component" }, { kind: "component", type: IlusektorComponent, selector: "ilusektor-component" }, { kind: "component", type: IluklasterComponent, selector: "iluklaster-component" }, { kind: "component", type: Iluprognoos1Component, selector: "iluprognoos1-component" }, { kind: "component", type: IluprognoosComponent, selector: "iluprognoos-component" }, { kind: "component", type: IlusoovitusComponent, selector: "ilusoovitus-component" }, { kind: "component", type: Ilulisaf1Component, selector: "ilulisaf1-component" }, { kind: "component", type: Ilulisaf2Component, selector: "ilulisaf2-component" }, { kind: "component", type: Ilulisaf3Component, selector: "ilulisaf3-component" }, { kind: "component", type: Ilulisaf4Component, selector: "ilulisaf4-component" }, { kind: "component", type: Ilulisaf5Component, selector: "ilulisaf5-component" }, { kind: "component", type: Ilulisaf6Component, selector: "ilulisaf6-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav4aComponent, decorators: [{
            type: Component,
            args: [{ selector: 'varav4a', standalone: true, imports: [CommonModule, IlueluComponent, IlukrattComponent, IlukviaComponent, IlusektorComponent, IluklasterComponent, Iluprognoos1Component, IluprognoosComponent, IlusoovitusComponent, Ilulisaf1Component, Ilulisaf2Component, Ilulisaf3Component, Ilulisaf4Component, Ilulisaf5Component, Ilulisaf6Component], template: "<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n  \r\nTeadmiseks kasutajale\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2a\">\r\n\r\nRakendus on arvutiprogramm ja selle hinnang ei pruugi olla igas olukorras eksimatu. T\u00E4psemad selgitused ja \u00FClevaate piirangutest leiate sellest tekstiosast. Selgituse lugemiseks kl\u00F5psake vastaval alajaotusel.\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <div class=\"panel\"\r\n  [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n  <!--p>{{section.content}}</p-->\r\n  <iluelu-component *ngIf=\"showComponent0\"></iluelu-component>\r\n  <ilukratt-component *ngIf=\"showComponent1\"></ilukratt-component>\r\n  <ilukvia-component *ngIf=\"showComponent2\"></ilukvia-component>\r\n  <ilulisaf1-component *ngIf=\"showComponent3\"></ilulisaf1-component>\r\n  <ilulisaf2-component *ngIf=\"showComponent4\"></ilulisaf2-component>\r\n  <ilulisaf3-component *ngIf=\"showComponent5\"></ilulisaf3-component>\r\n  <ilulisaf4-component *ngIf=\"showComponent6\"></ilulisaf4-component>\r\n  <ilulisaf5-component *ngIf=\"showComponent7\"></ilulisaf5-component>\r\n  <ilulisaf6-component *ngIf=\"showComponent8\"></ilulisaf6-component>\r\n  <ilusektor-component *ngIf=\"showComponent9\"></ilusektor-component>\r\n  <iluklaster-component *ngIf=\"showComponent10\"></iluklaster-component>\r\n  <iluprognoos1-component *ngIf=\"showComponent11a\"></iluprognoos1-component>\r\n  <iluprognoos-component *ngIf=\"showComponent11\"></iluprognoos-component>\r\n  <ilusoovitus-component *ngIf=\"showComponent12\"></ilusoovitus-component>\r\n  \r\n  <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n  <!--progn1-component></progn1-component-->\r\n  <!--progn2-component></progn2-component-->\r\n<!--/div-->\r\n\r\n</div>\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <!--div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <span class=\"tekstike2\">{{section.content}}</span>\r\n      \r\n</div-->\r\n\r\n</div>\r\n\r\n</div>\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px 10px 10px 40px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2a{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"] }]
        }] });

//import { products } from '../products';
class InfoakenComponent {
    constructor() {
        //  name = 'Angular ' + VERSION.major;
        this.articles = [
            {
                title: 'Item 1',
                content: 'Suhtarvude põhjal ettevõtte positsiooni hinnates ja seda hinnangut analüüsides on oluline silmas pidada, et suhtarvude väärtused on tinglikud, sõltuvad kontekstist ja neist ei saa teha kindlaid ainuõigeid järeldusi.',
                html: true,
                css: true,
                js: true
            }
        ];
    }
    PopUp(event, element) {
        // element.classList.remove('popup');
        // element.classList.add('test');
        // console.log(element.classList);
        element.classList.toggle('is-visible');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: InfoakenComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: InfoakenComponent, isStandalone: true, selector: "infoaken-component", ngImport: i0, template: "<!--p>infoaknake</p-->\r\n\r\n<section>\r\n  <div *ngFor=\"let article of articles\">\r\n    <!--article class=\"ui-titlebar\">\r\n      <h4 class=\"ui-titletext\">{{article.title}}</h4>\r\n    </article-->\r\n    <!--div class=\"windowsScreen\"-->\r\n    <div class=\"nupp\">\r\n      <button\r\n        href=\"#\"\r\n        id=\"info\"\r\n        class=\"nupp\"\r\n        title=\"info\"\r\n        (click)=\"PopUp($event, popupDiv)\">\r\n        Info\r\n      </button>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n      <div class=\"popup\" role=\"alert\" #popupDiv>\r\n        <div class=\"popup-container\">\r\n          <a href=\"#\" class=\"popup-close img-replace\" (click)=\"PopUp($event, popupDiv)\">Close</a>\r\n          <p>{{article.content}}</p> \r\n        </div>\r\n      </div>\r\n    <!--/div-->\r\n    <!--p class=\"windowsTech\">\r\n      Technologies:\r\n      <span class=\"THtml\"></span>\r\n      <span class=\"TCss\"></span>\r\n      <span class=\"TJs\"></span>\r\n    </p-->\r\n  </div>\r\n\r\n  \r\n\r\n</section>", styles: [".ArticlesGrid{max-width:1600px;max-height:100%;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,minmax(450px,auto));gap:30px 10px;padding:10px 15px}.ArticlesGrid div:hover{box-shadow:0 0 6px 3px #000}.ArticlesGrid :nth-child(1){grid-column:1/2;grid-row:1/2}.ArticlesGrid :nth-child(2){grid-column:2/3;grid-row:1/2}.ArticlesGrid :nth-child(3){grid-column:3/3;grid-row:1/2}.ArticlesGrid :nth-child(4){grid-column:1/2;grid-row:2/3}.ArticlesGrid :nth-child(5){grid-column:2/3;grid-row:2/3}.ArticlesGrid :nth-child(6){grid-column:3/3;grid-row:2/3}@media screen and (max-width: 1450px){.ArticlesGrid{grid-template-rows:repeat(2,minmax(350px,auto));gap:30px 30px;padding:10px 15px}}@media screen and (max-width: 1250px){.ArticlesGrid{grid-template-rows:repeat(2,minmax(300px,auto));gap:30px 20px;padding:10px 15px}}@media screen and (max-width: 850px){.ArticlesGrid{grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(3,minmax(380px,auto));gap:30px 10px;padding:10px 15px}.ArticlesGrid :nth-child(1){grid-column:1/2;grid-row:1/2}.ArticlesGrid :nth-child(2){grid-column:2/3;grid-row:1/2}.ArticlesGrid :nth-child(3){grid-column:1/2;grid-row:2/3}.ArticlesGrid :nth-child(4){grid-column:2/3;grid-row:2/3}.ArticlesGrid :nth-child(5){grid-column:1/2;grid-row:3/4}.ArticlesGrid :nth-child(6){grid-column:2/3;grid-row:3/4}.popup-trigger{top:40%!important;left:35%!important;width:120px!important;margin:0 auto!important;padding:3px!important}}@media screen and (max-width: 550px){.svgHeader{height:20px}.ArticlesGrid{grid-template-columns:repeat(1,1fr);grid-template-rows:repeat(6,minmax(320px,auto));gap:30px 10px;padding:10px 15px;font-size:1rem}.ArticlesGrid :nth-child(1){grid-column:1/2;grid-row:1/2}.ArticlesGrid :nth-child(2){grid-column:1/2;grid-row:2/3}.ArticlesGrid :nth-child(3){grid-column:1/2;grid-row:3/4}.ArticlesGrid :nth-child(4){grid-column:1/2;grid-row:4/5}.ArticlesGrid :nth-child(5){grid-column:1/2;grid-row:5/6}.ArticlesGrid :nth-child(6){grid-column:1/2;grid-row:6/7}.popup-trigger{top:40%!important;left:25%!important;width:120px!important;margin:0 auto!important;padding:3px!important}}.ui-titlebar{display:flex;width:100%;height:32px;background:#294c48;-webkit-user-select:none;user-select:none;cursor:default;border-radius:15px 15px 0 0}.ui-titletext{flex-grow:2;max-height:32px;width:auto;font-size:10px;color:#72909e;text-indent:10px}.windowsBox{height:100%;width:100%;background-color:#101518}.windowsScreen{width:100%;min-height:calc(100% - 75px);position:relative}.windowsScreen img{width:100%;height:100%;background-size:cover}.windowsTech{height:33px;background:#294c48;line-height:2.5;font-size:10px;color:#72909e}.popup-trigger{position:absolute;inset:0;height:20%;width:30%;margin:auto;text-align:center;color:#fff;font-size:18px;padding:10px;text-decoration:none;font-weight:700;text-transform:uppercase;border-radius:50em;background:#35a785;box-shadow:0 3px #00000012;transition:.3s all}.popup-trigger:hover{opacity:.8}.popup{position:fixed;left:0;top:0;height:100%;z-index:1000;width:100%;background-color:#5e6e8de6;opacity:0;visibility:hidden;transition:.5s all}.popup.is-visible{opacity:1;visibility:visible;transition:1s all}.popup-container{transform:translateY(-50%);transition:.5s all;position:relative;width:30%;margin:2em auto;top:5%;padding:1rem;background:#fff;border-radius:.25em .25em .4em .4em;text-align:center;box-shadow:0 0 20px #0003}.is-visible .popup-container{transform:translateY(0);transition:.5s all}.popup-container .popup-close{position:absolute;top:8px;font-size:0;right:8px;width:30px;height:30px}.popup-container .popup-close:before,.popup-container .popup-close:after{content:\"\";position:absolute;top:12px;width:14px;height:3px;background-color:#8f9cb5}.popup-container .popup-close:before{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);left:8px}.popup-container .popup-close:after{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);right:8px}.popup-container .popup-close:hover:before,.popup-container .popup-close:hover:after{background-color:#005aa3;transition:.3s all}.nupp button{display:block;margin-left:40px;margin-top:-5px;line-height:16px;background:#005aa3;color:#d73e3e;font-size:16px;font-weight:700;border-radius:20px;width:30px;min-height:13px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: InfoakenComponent, decorators: [{
            type: Component,
            args: [{ selector: 'infoaken-component', standalone: true, imports: [CommonModule], template: "<!--p>infoaknake</p-->\r\n\r\n<section>\r\n  <div *ngFor=\"let article of articles\">\r\n    <!--article class=\"ui-titlebar\">\r\n      <h4 class=\"ui-titletext\">{{article.title}}</h4>\r\n    </article-->\r\n    <!--div class=\"windowsScreen\"-->\r\n    <div class=\"nupp\">\r\n      <button\r\n        href=\"#\"\r\n        id=\"info\"\r\n        class=\"nupp\"\r\n        title=\"info\"\r\n        (click)=\"PopUp($event, popupDiv)\">\r\n        Info\r\n      </button>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n      <div class=\"popup\" role=\"alert\" #popupDiv>\r\n        <div class=\"popup-container\">\r\n          <a href=\"#\" class=\"popup-close img-replace\" (click)=\"PopUp($event, popupDiv)\">Close</a>\r\n          <p>{{article.content}}</p> \r\n        </div>\r\n      </div>\r\n    <!--/div-->\r\n    <!--p class=\"windowsTech\">\r\n      Technologies:\r\n      <span class=\"THtml\"></span>\r\n      <span class=\"TCss\"></span>\r\n      <span class=\"TJs\"></span>\r\n    </p-->\r\n  </div>\r\n\r\n  \r\n\r\n</section>", styles: [".ArticlesGrid{max-width:1600px;max-height:100%;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,minmax(450px,auto));gap:30px 10px;padding:10px 15px}.ArticlesGrid div:hover{box-shadow:0 0 6px 3px #000}.ArticlesGrid :nth-child(1){grid-column:1/2;grid-row:1/2}.ArticlesGrid :nth-child(2){grid-column:2/3;grid-row:1/2}.ArticlesGrid :nth-child(3){grid-column:3/3;grid-row:1/2}.ArticlesGrid :nth-child(4){grid-column:1/2;grid-row:2/3}.ArticlesGrid :nth-child(5){grid-column:2/3;grid-row:2/3}.ArticlesGrid :nth-child(6){grid-column:3/3;grid-row:2/3}@media screen and (max-width: 1450px){.ArticlesGrid{grid-template-rows:repeat(2,minmax(350px,auto));gap:30px 30px;padding:10px 15px}}@media screen and (max-width: 1250px){.ArticlesGrid{grid-template-rows:repeat(2,minmax(300px,auto));gap:30px 20px;padding:10px 15px}}@media screen and (max-width: 850px){.ArticlesGrid{grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(3,minmax(380px,auto));gap:30px 10px;padding:10px 15px}.ArticlesGrid :nth-child(1){grid-column:1/2;grid-row:1/2}.ArticlesGrid :nth-child(2){grid-column:2/3;grid-row:1/2}.ArticlesGrid :nth-child(3){grid-column:1/2;grid-row:2/3}.ArticlesGrid :nth-child(4){grid-column:2/3;grid-row:2/3}.ArticlesGrid :nth-child(5){grid-column:1/2;grid-row:3/4}.ArticlesGrid :nth-child(6){grid-column:2/3;grid-row:3/4}.popup-trigger{top:40%!important;left:35%!important;width:120px!important;margin:0 auto!important;padding:3px!important}}@media screen and (max-width: 550px){.svgHeader{height:20px}.ArticlesGrid{grid-template-columns:repeat(1,1fr);grid-template-rows:repeat(6,minmax(320px,auto));gap:30px 10px;padding:10px 15px;font-size:1rem}.ArticlesGrid :nth-child(1){grid-column:1/2;grid-row:1/2}.ArticlesGrid :nth-child(2){grid-column:1/2;grid-row:2/3}.ArticlesGrid :nth-child(3){grid-column:1/2;grid-row:3/4}.ArticlesGrid :nth-child(4){grid-column:1/2;grid-row:4/5}.ArticlesGrid :nth-child(5){grid-column:1/2;grid-row:5/6}.ArticlesGrid :nth-child(6){grid-column:1/2;grid-row:6/7}.popup-trigger{top:40%!important;left:25%!important;width:120px!important;margin:0 auto!important;padding:3px!important}}.ui-titlebar{display:flex;width:100%;height:32px;background:#294c48;-webkit-user-select:none;user-select:none;cursor:default;border-radius:15px 15px 0 0}.ui-titletext{flex-grow:2;max-height:32px;width:auto;font-size:10px;color:#72909e;text-indent:10px}.windowsBox{height:100%;width:100%;background-color:#101518}.windowsScreen{width:100%;min-height:calc(100% - 75px);position:relative}.windowsScreen img{width:100%;height:100%;background-size:cover}.windowsTech{height:33px;background:#294c48;line-height:2.5;font-size:10px;color:#72909e}.popup-trigger{position:absolute;inset:0;height:20%;width:30%;margin:auto;text-align:center;color:#fff;font-size:18px;padding:10px;text-decoration:none;font-weight:700;text-transform:uppercase;border-radius:50em;background:#35a785;box-shadow:0 3px #00000012;transition:.3s all}.popup-trigger:hover{opacity:.8}.popup{position:fixed;left:0;top:0;height:100%;z-index:1000;width:100%;background-color:#5e6e8de6;opacity:0;visibility:hidden;transition:.5s all}.popup.is-visible{opacity:1;visibility:visible;transition:1s all}.popup-container{transform:translateY(-50%);transition:.5s all;position:relative;width:30%;margin:2em auto;top:5%;padding:1rem;background:#fff;border-radius:.25em .25em .4em .4em;text-align:center;box-shadow:0 0 20px #0003}.is-visible .popup-container{transform:translateY(0);transition:.5s all}.popup-container .popup-close{position:absolute;top:8px;font-size:0;right:8px;width:30px;height:30px}.popup-container .popup-close:before,.popup-container .popup-close:after{content:\"\";position:absolute;top:12px;width:14px;height:3px;background-color:#8f9cb5}.popup-container .popup-close:before{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);left:8px}.popup-container .popup-close:after{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);right:8px}.popup-container .popup-close:hover:before,.popup-container .popup-close:hover:after{background-color:#005aa3;transition:.3s all}.nupp button{display:block;margin-left:40px;margin-top:-5px;line-height:16px;background:#005aa3;color:#d73e3e;font-size:16px;font-weight:700;border-radius:20px;width:30px;min-height:13px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}\n"] }]
        }] });

//import { products } from '../products';
class Tabel1Component {
    constructor() {
        this.effpsect = (xtee.EffpSect) * 100;
        this.effnsect = xtee.Eff_n_Sect;
        this.effpsize = (xtee.EffpSize) * 100;
        this.effnsize = xtee.Eff_n_Size;
        this.effpcount = (xtee.EffpCount) * 100;
        this.effncount = xtee.Eff_n_Count;
        this.aasta = xtee.prognAasta;
        this.aastax = this.aasta.replaceAll('"', "");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabel1Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Tabel1Component, isStandalone: true, selector: "tabel1-component", ngImport: i0, template: "<div class=\"dashboard\">\r\n<div class=\"dashboard-type\">\r\n  <div class=\"dashboard-row\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n      >\r\n      Mitu protsenti sama <span style=\"font-weight: 700\">maakonna </span> ettev\u00F5tetest on efektiivsuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{effpcount}}%</div>\r\n      <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{effncount}}</div>\r\n    </div>\r\n  </div>\r\n  <svg\r\n    class=\"divider2\"\r\n    width=\"950\"\r\n    height=\"16\"\r\n    viewBox=\"0 0 950 16\"\r\n    fill=\"none\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n  >\r\n    <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n  </svg>\r\n  <div class=\"dashboard-row2\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n      >\r\n      Mitu protsenti sama <span style=\"font-weight: 700\">tegevusalade grupi </span> ettev\u00F5tetest on efektiivsuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n          \r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{effpsect}}%</div>\r\n      <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{effnsect}}</div>\r\n    </div>\r\n  </div>\r\n  <svg\r\n    class=\"divider2\"\r\n    width=\"950\"\r\n    height=\"16\"\r\n    viewBox=\"0 0 950 16\"\r\n    fill=\"none\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n  >\r\n    <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n  </svg>\r\n  <div class=\"dashboard-row3\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n      >\r\n       \r\n      Mitu protsenti sama <span style=\"font-weight: 700\">suurusklassi </span> ettev\u00F5tetest on efektiivsuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n\r\n      \r\n      \r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{effpsize}}%</div>\r\n      <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{effnsize}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-10px;margin-bottom:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.label2{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabel1Component, decorators: [{
            type: Component,
            args: [{ selector: 'tabel1-component', standalone: true, template: "<div class=\"dashboard\">\r\n<div class=\"dashboard-type\">\r\n  <div class=\"dashboard-row\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n      >\r\n      Mitu protsenti sama <span style=\"font-weight: 700\">maakonna </span> ettev\u00F5tetest on efektiivsuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{effpcount}}%</div>\r\n      <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{effncount}}</div>\r\n    </div>\r\n  </div>\r\n  <svg\r\n    class=\"divider2\"\r\n    width=\"950\"\r\n    height=\"16\"\r\n    viewBox=\"0 0 950 16\"\r\n    fill=\"none\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n  >\r\n    <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n  </svg>\r\n  <div class=\"dashboard-row2\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n      >\r\n      Mitu protsenti sama <span style=\"font-weight: 700\">tegevusalade grupi </span> ettev\u00F5tetest on efektiivsuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n          \r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{effpsect}}%</div>\r\n      <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{effnsect}}</div>\r\n    </div>\r\n  </div>\r\n  <svg\r\n    class=\"divider2\"\r\n    width=\"950\"\r\n    height=\"16\"\r\n    viewBox=\"0 0 950 16\"\r\n    fill=\"none\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n  >\r\n    <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n  </svg>\r\n  <div class=\"dashboard-row3\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n      >\r\n       \r\n      Mitu protsenti sama <span style=\"font-weight: 700\">suurusklassi </span> ettev\u00F5tetest on efektiivsuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n\r\n      \r\n      \r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{effpsize}}%</div>\r\n      <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{effnsize}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-10px;margin-bottom:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.label2{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }]
        }], ctorParameters: () => [] });

//import { products } from '../products';
class Tabel2Component {
    constructor() {
        this.liqpsect = (xtee.LiqpSect) * 100;
        this.liqnsect = xtee.Liq_n_Sect;
        this.liqpsize = Math.round((xtee.LiqpSize) * 100 * 10) / 10;
        this.liqnsize = xtee.Liq_n_Size;
        this.liqpcount = (xtee.LiqpCount) * 100;
        this.liqncount = xtee.Liq_n_Count;
        this.aasta = xtee.prognAasta;
        this.aastax = this.aasta.replaceAll('"', "");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabel2Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Tabel2Component, isStandalone: true, selector: "tabel2-component", ngImport: i0, template: "<div class=\"dashboard\">\r\n  <div class=\"dashboard-type\">\r\n    <div class=\"dashboard-row\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n  \r\n        Mitu protsenti sama <span style=\"font-weight: 700\">maakonna </span>ettev\u00F5tetest on maksev\u00F5imelt sinu ettev\u00F5ttest madalamal positsioonil:\r\n  \r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{liqpcount}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{liqncount}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row2\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">tegevusalade grupi  </span>ettev\u00F5tetest on maksev\u00F5imelt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{liqpsect}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{liqnsect}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row3\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">suurusklassi  </span>ettev\u00F5tetest on maksev\u00F5imelt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{liqpsize}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{liqnsize}}</div>\r\n       \r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  ", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-10px;margin-bottom:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.label2{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabel2Component, decorators: [{
            type: Component,
            args: [{ selector: 'tabel2-component', standalone: true, template: "<div class=\"dashboard\">\r\n  <div class=\"dashboard-type\">\r\n    <div class=\"dashboard-row\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n  \r\n        Mitu protsenti sama <span style=\"font-weight: 700\">maakonna </span>ettev\u00F5tetest on maksev\u00F5imelt sinu ettev\u00F5ttest madalamal positsioonil:\r\n  \r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{liqpcount}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{liqncount}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row2\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">tegevusalade grupi  </span>ettev\u00F5tetest on maksev\u00F5imelt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{liqpsect}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{liqnsect}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row3\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">suurusklassi  </span>ettev\u00F5tetest on maksev\u00F5imelt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{liqpsize}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{liqnsize}}</div>\r\n       \r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  ", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-10px;margin-bottom:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.label2{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }]
        }], ctorParameters: () => [] });

//import { products } from '../products';
class Tabel3Component {
    constructor() {
        this.levpsect = (xtee.LevpSect) * 100;
        this.levnsect = xtee.Lev_n_Sect;
        this.levpsize = (xtee.LevpSize) * 100;
        //this.levpsize = Math.round((xtee.LevpSize)*100*10)/10;
        this.levnsize = xtee.Lev_n_Size;
        this.levpcount = (xtee.LevpCount) * 100;
        this.levncount = xtee.Lev_n_Count;
        this.aasta = xtee.prognAasta;
        this.aastax = this.aasta.replaceAll('"', "");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabel3Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Tabel3Component, isStandalone: true, selector: "tabel3-component", ngImport: i0, template: "<div class=\"dashboard\">\r\n  <div class=\"dashboard-type\">\r\n    <div class=\"dashboard-row\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">maakonna </span>ettev\u00F5tetest on finantsv\u00F5imenduselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{levpcount}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{levncount}}</div>\r\n        \r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row2\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">tegevusalade grupi  </span>ettev\u00F5tetest on finantsv\u00F5imenduselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{levpsect}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{levnsect}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row3\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">suurusklassi  </span>ettev\u00F5tetest on finantsv\u00F5imenduselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{levpsize}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{levnsize}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  ", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-10px;margin-bottom:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.label2{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabel3Component, decorators: [{
            type: Component,
            args: [{ selector: 'tabel3-component', standalone: true, template: "<div class=\"dashboard\">\r\n  <div class=\"dashboard-type\">\r\n    <div class=\"dashboard-row\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">maakonna </span>ettev\u00F5tetest on finantsv\u00F5imenduselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{levpcount}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{levncount}}</div>\r\n        \r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row2\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">tegevusalade grupi  </span>ettev\u00F5tetest on finantsv\u00F5imenduselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{levpsect}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{levnsect}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row3\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">suurusklassi  </span>ettev\u00F5tetest on finantsv\u00F5imenduselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{levpsize}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{levnsize}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  ", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-10px;margin-bottom:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.label2{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }]
        }], ctorParameters: () => [] });

//import { products } from '../products';
class Tabel4Component {
    constructor() {
        this.retpsect = (xtee.RetpSect) * 100;
        this.retnsect = xtee.Ret_n_Sect;
        //this.retpsize = (xtee.RetpSize)*100;
        this.retpsize = Math.round((xtee.RetpSize) * 100 * 10) / 10;
        this.retnsize = xtee.Ret_n_Size;
        this.retpcount = (xtee.RetpCount) * 100;
        this.retncount = xtee.Ret_n_Count;
        this.aasta = xtee.prognAasta;
        this.aastax = this.aasta.replaceAll('"', "");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabel4Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Tabel4Component, isStandalone: true, selector: "tabel4-component", ngImport: i0, template: "<div class=\"dashboard\">\r\n  <div class=\"dashboard-type\">\r\n    <div class=\"dashboard-row\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">maakonna </span>ettev\u00F5tetest on tasuvuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{retpcount}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{retncount}}</div>\r\n        \r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row2\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">tegevusalade grupi  </span>ettev\u00F5tetest on tasuvuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{retpsect}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{retnsect}}</div>\r\n        \r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row3\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">suurusklassi  </span>ettev\u00F5tetest on tasuvuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{retpsize}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{retnsize}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  ", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-10px;margin-bottom:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.label2{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabel4Component, decorators: [{
            type: Component,
            args: [{ selector: 'tabel4-component', standalone: true, template: "<div class=\"dashboard\">\r\n  <div class=\"dashboard-type\">\r\n    <div class=\"dashboard-row\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">maakonna </span>ettev\u00F5tetest on tasuvuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{retpcount}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{retncount}}</div>\r\n        \r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row2\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">tegevusalade grupi  </span>ettev\u00F5tetest on tasuvuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{retpsect}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{retnsect}}</div>\r\n        \r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row3\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">suurusklassi  </span>ettev\u00F5tetest on tasuvuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{retpsize}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{retnsize}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  ", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-10px;margin-bottom:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.label2{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }]
        }], ctorParameters: () => [] });

//import { products } from '../products';
class Tabel5Component {
    constructor() {
        this.emppsect = (xtee.EmppSect) * 100;
        this.empnsect = xtee.Emp_n_Sect;
        this.emppsize = (xtee.EmppSize) * 100;
        //this.emppsize = Math.round((xtee.EmppSize)*100*10)/10;
        this.empnsize = xtee.Emp_n_Size;
        this.emppcount = (xtee.EmppCount) * 100;
        this.empncount = xtee.Emp_n_Count;
        this.aasta = xtee.prognAasta;
        this.aastax = this.aasta.replaceAll('"', "");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabel5Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Tabel5Component, isStandalone: true, selector: "tabel5-component", ngImport: i0, template: "<div class=\"dashboard\">\r\n  <div class=\"dashboard-type\">\r\n    <div class=\"dashboard-row\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">maakonna </span>ettev\u00F5tetest on t\u00F6\u00F6j\u00F5u tootlikkuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{emppcount}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{empncount}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row2\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">tegevusalade grupi </span>ettev\u00F5tetest on t\u00F6\u00F6j\u00F5u tootlikkuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{emppsect}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{empnsect}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\" \r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row3\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">suurusklassi </span>ettev\u00F5tetest on t\u00F6\u00F6j\u00F5u tootlikkuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{emppsize}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{empnsize}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--/div-->\r\n  <!--br>\r\n  <iframe width=\"100%\" height=\"500\" src=\"https://interstat.info/Elujoud/Disain/Florish/florish3.html\"></iframe-->\r\n  \r\n  </div>\r\n  \r\n  <!--iframe [src]=\"urlSafe\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe-->", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-10px;margin-bottom:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.label2{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabel5Component, decorators: [{
            type: Component,
            args: [{ selector: 'tabel5-component', standalone: true, template: "<div class=\"dashboard\">\r\n  <div class=\"dashboard-type\">\r\n    <div class=\"dashboard-row\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">maakonna </span>ettev\u00F5tetest on t\u00F6\u00F6j\u00F5u tootlikkuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{emppcount}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{empncount}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row2\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">tegevusalade grupi </span>ettev\u00F5tetest on t\u00F6\u00F6j\u00F5u tootlikkuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{emppsect}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{empnsect}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\" \r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row3\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Mitu protsenti sama <span style=\"font-weight: 700\">suurusklassi </span>ettev\u00F5tetest on t\u00F6\u00F6j\u00F5u tootlikkuselt sinu ettev\u00F5ttest madalamal positsioonil:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{emppsize}}%</div>\r\n        <div class=\"label2\">Ettev\u00F5tteid v\u00F5rdluses: {{empnsize}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--/div-->\r\n  <!--br>\r\n  <iframe width=\"100%\" height=\"500\" src=\"https://interstat.info/Elujoud/Disain/Florish/florish3.html\"></iframe-->\r\n  \r\n  </div>\r\n  \r\n  <!--iframe [src]=\"urlSafe\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe-->", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-10px;margin-bottom:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.label2{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }]
        }], ctorParameters: () => [] });

class Varav5Component {
    constructor() {
        this.sections = [
            {
                name: 'Efektiivsus',
                content: 'Content 1'
            },
            {
                name: 'Maksevõime',
                content: '<progn1-component></progn1-component>'
            },
            {
                name: 'Finantsvõimendus',
                content: ''
            },
            {
                name: 'Tasuvus',
                content: ''
            },
            {
                name: 'Tööjõu tootlikkus',
                content: ''
            }
        ];
        this.showComponent1 = false;
        this.showComponent2 = false;
        this.showComponent3 = false;
        this.showComponent4 = false;
        this.showComponent5 = false;
    }
    expand(index) {
        if (this.currentIndex === index) {
            this.currentIndex = null;
            return;
        }
        this.currentIndex = index;
        //alert(this.currentIndex);
        if (this.currentIndex === 0) {
            this.showComponent1 = true;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 1) {
            this.showComponent1 = false;
            this.showComponent2 = true;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 2) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = true;
            this.showComponent4 = false;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 3) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = true;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 4) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = true;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav5Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Varav5Component, isStandalone: true, selector: "varav5", ngImport: i0, template: "<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\nV\u00F5rdlus teiste sarnaste ettev\u00F5tetega eluj\u00F5ulisuse t\u00FC\u00FCpide kaupa\r\n\r\n</div>\r\n\r\n<br>\r\n<div class=\"infoasukoht\">\r\n<infoaken-component></infoaken-component>\r\n</div>\r\n<div class=\"tekstike2\">\r\n\r\nSiin n\u00E4itame t\u00E4psemalt, millisel kohal on ettev\u00F5te v\u00F5rreldes teistega. Ettev\u00F5tet v\u00F5rreldakse viie eluj\u00F5ulisuse t\u00FC\u00FCbi arvestuses maakonna, tegevusalade grupi ja suurusklassi kaupa. Suurem arv n\u00E4itab k\u00F5rgemat positsiooni, aga ei pruugi t\u00E4hendada sisulises m\u00F5ttes paremat tulemust.\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <tabel1-component *ngIf=\"showComponent1\"></tabel1-component>\r\n    <tabel2-component *ngIf=\"showComponent2\"></tabel2-component>\r\n    <tabel3-component *ngIf=\"showComponent3\"></tabel3-component>\r\n    <tabel4-component *ngIf=\"showComponent4\"></tabel4-component>\r\n    <tabel5-component *ngIf=\"showComponent5\"></tabel5-component>\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.infoasukoht{margin-left:1000px;margin-top:-32px}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"], dependencies: [{ kind: "component", type: InfoakenComponent, selector: "infoaken-component" }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: Tabel1Component, selector: "tabel1-component" }, { kind: "component", type: Tabel2Component, selector: "tabel2-component" }, { kind: "component", type: Tabel3Component, selector: "tabel3-component" }, { kind: "component", type: Tabel4Component, selector: "tabel4-component" }, { kind: "component", type: Tabel5Component, selector: "tabel5-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav5Component, decorators: [{
            type: Component,
            args: [{ selector: 'varav5', standalone: true, imports: [InfoakenComponent, CommonModule, Tabel1Component, Tabel2Component, Tabel3Component, Tabel4Component, Tabel5Component], template: "<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\nV\u00F5rdlus teiste sarnaste ettev\u00F5tetega eluj\u00F5ulisuse t\u00FC\u00FCpide kaupa\r\n\r\n</div>\r\n\r\n<br>\r\n<div class=\"infoasukoht\">\r\n<infoaken-component></infoaken-component>\r\n</div>\r\n<div class=\"tekstike2\">\r\n\r\nSiin n\u00E4itame t\u00E4psemalt, millisel kohal on ettev\u00F5te v\u00F5rreldes teistega. Ettev\u00F5tet v\u00F5rreldakse viie eluj\u00F5ulisuse t\u00FC\u00FCbi arvestuses maakonna, tegevusalade grupi ja suurusklassi kaupa. Suurem arv n\u00E4itab k\u00F5rgemat positsiooni, aga ei pruugi t\u00E4hendada sisulises m\u00F5ttes paremat tulemust.\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <tabel1-component *ngIf=\"showComponent1\"></tabel1-component>\r\n    <tabel2-component *ngIf=\"showComponent2\"></tabel2-component>\r\n    <tabel3-component *ngIf=\"showComponent3\"></tabel3-component>\r\n    <tabel4-component *ngIf=\"showComponent4\"></tabel4-component>\r\n    <tabel5-component *ngIf=\"showComponent5\"></tabel5-component>\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.infoasukoht{margin-left:1000px;margin-top:-32px}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"] }]
        }] });

//import { products } from '../products';
class Tabele1Component {
    constructor() {
        this.vakk = Math.round((xtee.VaKK) * 100) / 100;
        //this.vakk = xtee.VaKK;
        this.lvkak = Math.round((xtee.LVKaK) * 100) / 100;
        //this.lvkak = xtee.LVKaK;
        this.vkk = Math.round((xtee.VKK) * 100) / 100;
        //this.vkk = xtee.VKK;
        this.aasta = xtee.prognAasta;
        this.aastax = this.aasta.replaceAll('"', "");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabele1Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Tabele1Component, isStandalone: true, selector: "tabele1-component", ngImport: i0, template: "<div class=\"dashboard\">\r\n  <div class=\"dashboard-type\">\r\n    <div class=\"dashboard-row\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n          Sinu ettev\u00F5tte varade k\u00E4ibesagedus: \r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{vakk}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row2\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n         Sinu ettev\u00F5tte l\u00FChiajalise v\u00F5lgnevuse k\u00E4ibekordaja:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{lvkak}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row3\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Sinu ettev\u00F5tte varude k\u00E4ibesagedus:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{vkk}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--/div-->\r\n  <!--br>\r\n  <iframe width=\"100%\" height=\"500\" src=\"https://interstat.info/Elujoud/Disain/Florish/florish3.html\"></iframe-->\r\n  \r\n  </div>\r\n  \r\n  <!--iframe [src]=\"urlSafe\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe-->", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabele1Component, decorators: [{
            type: Component,
            args: [{ selector: 'tabele1-component', standalone: true, template: "<div class=\"dashboard\">\r\n  <div class=\"dashboard-type\">\r\n    <div class=\"dashboard-row\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n          Sinu ettev\u00F5tte varade k\u00E4ibesagedus: \r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{vakk}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row2\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n         Sinu ettev\u00F5tte l\u00FChiajalise v\u00F5lgnevuse k\u00E4ibekordaja:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{lvkak}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row3\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Sinu ettev\u00F5tte varude k\u00E4ibesagedus:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{vkk}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--/div-->\r\n  <!--br>\r\n  <iframe width=\"100%\" height=\"500\" src=\"https://interstat.info/Elujoud/Disain/Florish/florish3.html\"></iframe-->\r\n  \r\n  </div>\r\n  \r\n  <!--iframe [src]=\"urlSafe\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe-->", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }]
        }], ctorParameters: () => [] });

//import { products } from '../products';
class Sekt1Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt1Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekt1Component, isStandalone: true, selector: "sekt1-component", ngImport: i0, template: "<tabele1-component></tabele1-component>\r\n<br>\r\n\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/sektefekt.html\"></iframe>", styles: [""], dependencies: [{ kind: "component", type: Tabele1Component, selector: "tabele1-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt1Component, decorators: [{
            type: Component,
            args: [{ selector: 'sekt1-component', imports: [Tabele1Component], standalone: true, template: "<tabele1-component></tabele1-component>\r\n<br>\r\n\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/sektefekt.html\"></iframe>" }]
        }] });

const sektorsuht = [
    {
        "sektor_nr": 1,
        "sektor_txt": "Taimekasvatus",
        "LVKK": 2.417,
        "MVK": 1.2227,
        "RK": 0.4679,
        "LLLK": 0.6072,
        "LLVK": 0.0732,
        "LLOK": 0.1269,
        "VAKK": 0.0714,
        "LVKAK": 1.4046,
        "VKK": 0.71,
        "VK": 0.3239,
        "KOS": 0.4565,
        "IKK": 1.5174,
        "LKKKK": 0.5687,
        "PKKKK": 0.6595,
        "AKM": 0.0714,
        "PKM": 0.0425,
        "ROA": 0.0114,
        "ROE": 0.021,
        "n_distinct(jykood)": 1564
    },
    {
        "sektor_nr": 2,
        "sektor_txt": "Loomakasvatus",
        "LVKK": 2.5194,
        "MVK": 1.3214,
        "RK": 0.4091,
        "LLLK": 0.5672,
        "LLVK": 0.0697,
        "LLOK": 0.122,
        "VAKK": 0.0666,
        "LVKAK": 1.4379,
        "VKK": 0.9849,
        "VK": 0.3153,
        "KOS": 0.4389,
        "IKK": 3.289,
        "LKKKK": 0.654,
        "PKKKK": 0.6862,
        "AKM": 0.116,
        "PKM": 0.0841,
        "ROA": 0.0264,
        "ROE": 0.0475,
        "n_distinct(jykood)": 1108
    },
    {
        "sektor_nr": 3,
        "sektor_txt": "Põllumajanduslikud abitegevused",
        "LVKK": 2.5134,
        "MVK": 1.2608,
        "RK": 0.7691,
        "LLLK": 0.6156,
        "LLVK": 0.0886,
        "LLOK": 0.1636,
        "VAKK": 0.1237,
        "LVKAK": 1.5788,
        "VKK": 1.508,
        "VK": 0.2997,
        "KOS": 0.3996,
        "IKK": 2.6538,
        "LKKKK": 1,
        "PKKKK": 0.6961,
        "AKM": 0.0847,
        "PKM": 0.0668,
        "ROA": 0.0286,
        "ROE": 0.0487,
        "n_distinct(jykood)": 282
    },
    {
        "sektor_nr": 4,
        "sektor_txt": "Metsakasvatus",
        "LVKK": 3.057,
        "MVK": 1.4589,
        "RK": 0.8579,
        "LLLK": 0.635,
        "LLVK": 0.0755,
        "LLOK": 0.1173,
        "VAKK": 0.1456,
        "LVKAK": 1.8846,
        "VKK": 1.9166,
        "VK": 0.2544,
        "KOS": 0.3132,
        "IKK": 3.4497,
        "LKKKK": 1,
        "PKKKK": 0.6308,
        "AKM": 0.0646,
        "PKM": 0.0584,
        "ROA": 0.0339,
        "ROE": 0.0581,
        "n_distinct(jykood)": 937
    },
    {
        "sektor_nr": 5,
        "sektor_txt": "Metsamajanduse abitegevused",
        "LVKK": 2.6104,
        "MVK": 1.3348,
        "RK": 0.9539,
        "LLLK": 0.5555,
        "LLVK": 0.1009,
        "LLOK": 0.1698,
        "VAKK": 0.2305,
        "LVKAK": 2.2738,
        "VKK": 4.3882,
        "VK": 0.2503,
        "KOS": 0.308,
        "IKK": 5.3005,
        "LKKKK": 1,
        "PKKKK": 0.5729,
        "AKM": 0.0866,
        "PKM": 0.0739,
        "ROA": 0.0584,
        "ROE": 0.1006,
        "n_distinct(jykood)": 738
    },
    {
        "sektor_nr": 6,
        "sektor_txt": "Kalapüük",
        "LVKK": 3.2833,
        "MVK": 2.2609,
        "RK": 0.6774,
        "LLLK": 0.6116,
        "LLVK": 0.0684,
        "LLOK": 0.121,
        "VAKK": 0.102,
        "LVKAK": 1.388,
        "VKK": 1.9276,
        "VK": 0.2542,
        "KOS": 0.295,
        "IKK": 8.2524,
        "LKKKK": 1,
        "PKKKK": 0.7856,
        "AKM": 0.1513,
        "PKM": 0.1628,
        "ROA": 0.0505,
        "ROE": 0.0911,
        "n_distinct(jykood)": 165
    },
    {
        "sektor_nr": 7,
        "sektor_txt": "Muu kaevandamine",
        "LVKK": 3.6387,
        "MVK": 1.5972,
        "RK": 0.864,
        "LLLK": 0.4541,
        "LLVK": 0.0649,
        "LLOK": 0.1107,
        "VAKK": 0.1472,
        "LVKAK": 1.5928,
        "VKK": 0.9388,
        "VK": 0.2067,
        "KOS": 0.2186,
        "IKK": 6.7679,
        "LKKKK": 0.872,
        "PKKKK": 0.4768,
        "AKM": 0.1202,
        "PKM": 0.1112,
        "ROA": 0.0583,
        "ROE": 0.079,
        "n_distinct(jykood)": 143
    },
    {
        "sektor_nr": 8,
        "sektor_txt": "Toiduainete tootmine",
        "LVKK": 2.146,
        "MVK": 1.073,
        "RK": 0.3775,
        "LLLK": 0.367,
        "LLVK": 0.0829,
        "LLOK": 0.1892,
        "VAKK": 0.3774,
        "LVKAK": 2.6123,
        "VKK": 2.5898,
        "VK": 0.402,
        "KOS": 0.5568,
        "IKK": 3.42,
        "LKKKK": 1,
        "PKKKK": 0.4888,
        "AKM": 0.0315,
        "PKM": 0.0273,
        "ROA": 0.0407,
        "ROE": 0.083,
        "n_distinct(jykood)": 521
    },
    {
        "sektor_nr": 9,
        "sektor_txt": "Joogi tootmine",
        "LVKK": 1.5982,
        "MVK": 0.7947,
        "RK": 0.1619,
        "LLLK": 0.4439,
        "LLVK": 0.0813,
        "LLOK": 0.1116,
        "VAKK": 0.1772,
        "LVKAK": 2.2225,
        "VKK": 0.7725,
        "VK": 0.721,
        "KOS": 1.4318,
        "IKK": 1.2326,
        "LKKKK": 0.5139,
        "PKKKK": 0.6888,
        "AKM": 0.033,
        "PKM": 0.0181,
        "ROA": 0.0068,
        "ROE": 0.0409,
        "n_distinct(jykood)": 86
    },
    {
        "sektor_nr": 10,
        "sektor_txt": "Tekstiilitootmine",
        "LVKK": 3.7401,
        "MVK": 1.783,
        "RK": 0.8259,
        "LLLK": 0.3478,
        "LLVK": 0.0917,
        "LLOK": 0.1637,
        "VAKK": 0.3332,
        "LVKAK": 3.2106,
        "VKK": 1.5045,
        "VK": 0.235,
        "KOS": 0.2787,
        "IKK": 3.8016,
        "LKKKK": 1,
        "PKKKK": 0.4477,
        "AKM": 0.026,
        "PKM": 0.021,
        "ROA": 0.0331,
        "ROE": 0.0559,
        "n_distinct(jykood)": 241
    },
    {
        "sektor_nr": 11,
        "sektor_txt": "Rõivatootmine",
        "LVKK": 3.2728,
        "MVK": 1.2811,
        "RK": 0.808,
        "LLLK": 0.3758,
        "LLVK": 0.1211,
        "LLOK": 0.2341,
        "VAKK": 0.3356,
        "LVKAK": 3.2251,
        "VKK": 0.9797,
        "VK": 0.2653,
        "KOS": 0.3155,
        "IKK": 3.4847,
        "LKKKK": 1,
        "PKKKK": 0.464,
        "AKM": 0.0298,
        "PKM": 0.0215,
        "ROA": 0.0344,
        "ROE": 0.0646,
        "n_distinct(jykood)": 409
    },
    {
        "sektor_nr": 12,
        "sektor_txt": "Puidu saagimine ja hööveldamine",
        "LVKK": 2.3407,
        "MVK": 1.1685,
        "RK": 0.5363,
        "LLLK": 0.3907,
        "LLVK": 0.0816,
        "LLOK": 0.1311,
        "VAKK": 0.2949,
        "LVKAK": 2.7808,
        "VKK": 1.4652,
        "VK": 0.3618,
        "KOS": 0.48,
        "IKK": 2.7316,
        "LKKKK": 1,
        "PKKKK": 0.4964,
        "AKM": 0.0223,
        "PKM": 0.0152,
        "ROA": 0.0189,
        "ROE": 0.0415,
        "n_distinct(jykood)": 899
    },
    {
        "sektor_nr": 13,
        "sektor_txt": "Paberimassi, paberi ja papi tootmine",
        "LVKK": 2.1348,
        "MVK": 1.5208,
        "RK": 0.6413,
        "LLLK": 0.2464,
        "LLVK": 0.0497,
        "LLOK": 0.0971,
        "VAKK": 0.3092,
        "LVKAK": 2.3875,
        "VKK": 2.1405,
        "VK": 0.4051,
        "KOS": 0.487,
        "IKK": 6.0447,
        "LKKKK": 0.9397,
        "PKKKK": 0.4712,
        "AKM": 0.032,
        "PKM": 0.032,
        "ROA": 0.0213,
        "ROE": 0.0501,
        "n_distinct(jykood)": 39
    },
    {
        "sektor_nr": 14,
        "sektor_txt": "Trükindus ja salvestiste paljundus",
        "LVKK": 2.7286,
        "MVK": 1.0584,
        "RK": 0.6837,
        "LLLK": 0.2962,
        "LLVK": 0.079,
        "LLOK": 0.1587,
        "VAKK": 0.3582,
        "LVKAK": 2.4965,
        "VKK": 2.8422,
        "VK": 0.336,
        "KOS": 0.434,
        "IKK": 5.2162,
        "LKKKK": 1,
        "PKKKK": 0.3769,
        "AKM": 0.0535,
        "PKM": 0.0426,
        "ROA": 0.0607,
        "ROE": 0.1134,
        "n_distinct(jykood)": 264
    },
    {
        "sektor_nr": 15,
        "sektor_txt": "Keemiatootmine",
        "LVKK": 3.6838,
        "MVK": 1.3821,
        "RK": 0.4794,
        "LLLK": 0.4259,
        "LLVK": 0.1135,
        "LLOK": 0.1615,
        "VAKK": 0.2766,
        "LVKAK": 1.5402,
        "VKK": 0.8471,
        "VK": 0.3294,
        "KOS": 0.2834,
        "IKK": 3.0783,
        "LKKKK": 1,
        "PKKKK": 0.4481,
        "AKM": 0.0886,
        "PKM": 0.0725,
        "ROA": 0.0636,
        "ROE": 0.1281,
        "n_distinct(jykood)": 108
    },
    {
        "sektor_nr": 16,
        "sektor_txt": "Plasttoodete tootmine",
        "LVKK": 3.1719,
        "MVK": 1.5228,
        "RK": 0.7116,
        "LLLK": 0.2072,
        "LLVK": 0.0477,
        "LLOK": 0.0827,
        "VAKK": 0.3605,
        "LVKAK": 2.2835,
        "VKK": 1.6282,
        "VK": 0.3167,
        "KOS": 0.383,
        "IKK": 4.2964,
        "LKKKK": 1,
        "PKKKK": 0.4181,
        "AKM": 0.0538,
        "PKM": 0.0413,
        "ROA": 0.0583,
        "ROE": 0.0995,
        "n_distinct(jykood)": 157
    },
    {
        "sektor_nr": 17,
        "sektor_txt": "Muude mittemetalsetest mineraalidest toodete tootmine",
        "LVKK": 2.5094,
        "MVK": 1.1307,
        "RK": 0.4471,
        "LLLK": 0.3883,
        "LLVK": 0.0884,
        "LLOK": 0.1194,
        "VAKK": 0.2913,
        "LVKAK": 2.6167,
        "VKK": 1.5135,
        "VK": 0.2981,
        "KOS": 0.3616,
        "IKK": 4.076,
        "LKKKK": 1,
        "PKKKK": 0.408,
        "AKM": 0.0443,
        "PKM": 0.0342,
        "ROA": 0.0449,
        "ROE": 0.0983,
        "n_distinct(jykood)": 203
    },
    {
        "sektor_nr": 18,
        "sektor_txt": "Metalltoodete tootmine, v.a masinad ja seadmed",
        "LVKK": 2.6692,
        "MVK": 1.39,
        "RK": 0.7382,
        "LLLK": 0.2997,
        "LLVK": 0.0687,
        "LLOK": 0.1144,
        "VAKK": 0.3742,
        "LVKAK": 2.3603,
        "VKK": 2.4972,
        "VK": 0.3019,
        "KOS": 0.3917,
        "IKK": 6.7936,
        "LKKKK": 1,
        "PKKKK": 0.3722,
        "AKM": 0.0418,
        "PKM": 0.0337,
        "ROA": 0.0516,
        "ROE": 0.0952,
        "n_distinct(jykood)": 1195
    },
    {
        "sektor_nr": 19,
        "sektor_txt": "Arvutite, elektroonika- ja optikaseadmete tootmine",
        "LVKK": 2.9084,
        "MVK": 1.627,
        "RK": 0.6194,
        "LLLK": 0.2562,
        "LLVK": 0.0692,
        "LLOK": 0.1155,
        "VAKK": 0.3771,
        "LVKAK": 2.0002,
        "VKK": 0.9839,
        "VK": 0.3687,
        "KOS": 0.5778,
        "IKK": 7.0199,
        "LKKKK": 1,
        "PKKKK": 0.3806,
        "AKM": 0.061,
        "PKM": 0.0533,
        "ROA": 0.0664,
        "ROE": 0.133,
        "n_distinct(jykood)": 96
    },
    {
        "sektor_nr": 20,
        "sektor_txt": "Elektriseadmete tootmine",
        "LVKK": 2.67,
        "MVK": 1.3433,
        "RK": 0.3042,
        "LLLK": 0.2593,
        "LLVK": 0.08,
        "LLOK": 0.0775,
        "VAKK": 0.3886,
        "LVKAK": 1.5453,
        "VKK": 1.4098,
        "VK": 0.3132,
        "KOS": 0.3886,
        "IKK": 7.1832,
        "LKKKK": 1,
        "PKKKK": 0.224,
        "AKM": 0.0498,
        "PKM": 0.0436,
        "ROA": 0.0676,
        "ROE": 0.1377,
        "n_distinct(jykood)": 88
    },
    {
        "sektor_nr": 21,
        "sektor_txt": "Üldmasinate tootmine",
        "LVKK": 2.7696,
        "MVK": 1.412,
        "RK": 0.5106,
        "LLLK": 0.2634,
        "LLVK": 0.0456,
        "LLOK": 0.0714,
        "VAKK": 0.3074,
        "LVKAK": 2.2706,
        "VKK": 1.2886,
        "VK": 0.3233,
        "KOS": 0.4023,
        "IKK": 8.4686,
        "LKKKK": 1,
        "PKKKK": 0.3159,
        "AKM": 0.0434,
        "PKM": 0.0374,
        "ROA": 0.0456,
        "ROE": 0.0895,
        "n_distinct(jykood)": 175
    },
    {
        "sektor_nr": 22,
        "sektor_txt": "Mootorsõidukite tootmine",
        "LVKK": 2.2742,
        "MVK": 0.9488,
        "RK": 0.3815,
        "LLLK": 0.2556,
        "LLVK": 0.0719,
        "LLOK": 0.0785,
        "VAKK": 0.3624,
        "LVKAK": 2.9779,
        "VKK": 1.2225,
        "VK": 0.4286,
        "KOS": 0.6165,
        "IKK": 4.5825,
        "LKKKK": 1,
        "PKKKK": 0.3671,
        "AKM": 0.0508,
        "PKM": 0.0386,
        "ROA": 0.0503,
        "ROE": 0.1331,
        "n_distinct(jykood)": 57
    },
    {
        "sektor_nr": 23,
        "sektor_txt": "Muude transpordivahendite tootmine",
        "LVKK": 2.1104,
        "MVK": 0.9484,
        "RK": 0.559,
        "LLLK": 0.4204,
        "LLVK": 0.0842,
        "LLOK": 0.1062,
        "VAKK": 0.3969,
        "LVKAK": 1.9532,
        "VKK": 1.3923,
        "VK": 0.3545,
        "KOS": 0.4756,
        "IKK": 8.3511,
        "LKKKK": 1,
        "PKKKK": 0.3768,
        "AKM": 0.0557,
        "PKM": 0.0434,
        "ROA": 0.0647,
        "ROE": 0.127,
        "n_distinct(jykood)": 90
    },
    {
        "sektor_nr": 24,
        "sektor_txt": "Mööbli tootmine",
        "LVKK": 2.163,
        "MVK": 1.0132,
        "RK": 0.5917,
        "LLLK": 0.3556,
        "LLVK": 0.092,
        "LLOK": 0.1923,
        "VAKK": 0.471,
        "LVKAK": 3.6371,
        "VKK": 2.4833,
        "VK": 0.3847,
        "KOS": 0.5421,
        "IKK": 3.9004,
        "LKKKK": 1,
        "PKKKK": 0.417,
        "AKM": 0.0214,
        "PKM": 0.018,
        "ROA": 0.0301,
        "ROE": 0.0659,
        "n_distinct(jykood)": 633
    },
    {
        "sektor_nr": 25,
        "sektor_txt": "Jalatsitootmine",
        "LVKK": 3.2386,
        "MVK": 0.7869,
        "RK": 0.2488,
        "LLLK": 0.1661,
        "LLVK": 0.1522,
        "LLOK": 0.0049,
        "VAKK": 0.4355,
        "LVKAK": 2.4086,
        "VKK": 0.8172,
        "VK": 0.4768,
        "KOS": 0.2593,
        "IKK": 74.072,
        "LKKKK": 1,
        "PKKKK": 0.4953,
        "AKM": 0.0221,
        "PKM": 0.0113,
        "ROA": 0.0604,
        "ROE": 0.1064,
        "n_distinct(jykood)": 14
    },
    {
        "sektor_nr": 26,
        "sektor_txt": "Muu tootmine",
        "LVKK": 3.4161,
        "MVK": 1.4196,
        "RK": 1.0387,
        "LLLK": 0.3598,
        "LLVK": 0.065,
        "LLOK": 0.0995,
        "VAKK": 0.3039,
        "LVKAK": 2.5161,
        "VKK": 1.056,
        "VK": 0.283,
        "KOS": 0.3175,
        "IKK": 6.3229,
        "LKKKK": 1,
        "PKKKK": 0.5028,
        "AKM": 0.0552,
        "PKM": 0.0464,
        "ROA": 0.052,
        "ROE": 0.0863,
        "n_distinct(jykood)": 309
    },
    {
        "sektor_nr": 27,
        "sektor_txt": "Masinate, seadmete remont ja paigaldus",
        "LVKK": 3.9034,
        "MVK": 2.0442,
        "RK": 1.3182,
        "LLLK": 0.3381,
        "LLVK": 0.075,
        "LLOK": 0.1203,
        "VAKK": 0.3805,
        "LVKAK": 2.2989,
        "VKK": 3.1972,
        "VK": 0.2325,
        "KOS": 0.2813,
        "IKK": 9.2183,
        "LKKKK": 1,
        "PKKKK": 0.3946,
        "AKM": 0.068,
        "PKM": 0.0641,
        "ROA": 0.0939,
        "ROE": 0.1488,
        "n_distinct(jykood)": 582
    },
    {
        "sektor_nr": 28,
        "sektor_txt": "Tööstuslike masinate ja seadmete paigaldus",
        "LVKK": 4.3075,
        "MVK": 2.6145,
        "RK": 2.158,
        "LLLK": 0.2147,
        "LLVK": 0.0715,
        "LLOK": 0.112,
        "VAKK": 0.3898,
        "LVKAK": 2.1005,
        "VKK": 4.2128,
        "VK": 0.2126,
        "KOS": 0.2675,
        "IKK": 15.0718,
        "LKKKK": 1,
        "PKKKK": 0.255,
        "AKM": 0.0852,
        "PKM": 0.0781,
        "ROA": 0.1201,
        "ROE": 0.163,
        "n_distinct(jykood)": 127
    },
    {
        "sektor_nr": 29,
        "sektor_txt": "Elektrienergia, gaasi, auru ja konditsioneeritud õhuga varustamine",
        "LVKK": 2.0131,
        "MVK": 1.2302,
        "RK": 0.8652,
        "LLLK": 0.8018,
        "LLVK": 0.0594,
        "LLOK": 0.1816,
        "VAKK": 0.0389,
        "LVKAK": 1.0344,
        "VKK": 7.6749,
        "VK": 0.3933,
        "KOS": 0.5315,
        "IKK": 1.7947,
        "LKKKK": 1,
        "PKKKK": 0.8877,
        "AKM": 0.4731,
        "PKM": 0.197,
        "ROA": 0.0383,
        "ROE": 0.0892,
        "n_distinct(jykood)": 581
    },
    {
        "sektor_nr": 30,
        "sektor_txt": "Veekogumine ja kanalisatsioon",
        "LVKK": 2.2748,
        "MVK": 1.6277,
        "RK": 1.1616,
        "LLLK": 0.3134,
        "LLVK": 0.009,
        "LLOK": 0.0098,
        "VAKK": 0.1012,
        "LVKAK": 1.8104,
        "VKK": 15.909,
        "VK": 0.1056,
        "KOS": 0.1181,
        "IKK": 0.7613,
        "LKKKK": 0.7443,
        "PKKKK": 0.6893,
        "AKM": 0.0372,
        "PKM": 0.0191,
        "ROA": 0.0104,
        "ROE": 0.0188,
        "n_distinct(jykood)": 109
    },
    {
        "sektor_nr": 31,
        "sektor_txt": "Jäätmekogumine, töötlus, taaskasutamine",
        "LVKK": 2.7426,
        "MVK": 1.8651,
        "RK": 0.7858,
        "LLLK": 0.4331,
        "LLVK": 0.0678,
        "LLOK": 0.1209,
        "VAKK": 0.3079,
        "LVKAK": 2.2921,
        "VKK": 5.2878,
        "VK": 0.3203,
        "KOS": 0.3447,
        "IKK": 5.2916,
        "LKKKK": 1,
        "PKKKK": 0.5203,
        "AKM": 0.0289,
        "PKM": 0.0309,
        "ROA": 0.0353,
        "ROE": 0.0587,
        "n_distinct(jykood)": 131
    },
    {
        "sektor_nr": 32,
        "sektor_txt": "Üldehitus",
        "LVKK": 2.5705,
        "MVK": 1.5234,
        "RK": 0.8115,
        "LLLK": 0.3681,
        "LLVK": 0.0902,
        "LLOK": 0.1574,
        "VAKK": 0.4662,
        "LVKAK": 2.2443,
        "VKK": 3.3751,
        "VK": 0.3479,
        "KOS": 0.4619,
        "IKK": 5.5268,
        "LKKKK": 1,
        "PKKKK": 0.4179,
        "AKM": 0.0437,
        "PKM": 0.0377,
        "ROA": 0.0657,
        "ROE": 0.1345,
        "n_distinct(jykood)": 3957
    },
    {
        "sektor_nr": 33,
        "sektor_txt": "Teede ja trasside ehitus",
        "LVKK": 2.7085,
        "MVK": 1.8144,
        "RK": 0.939,
        "LLLK": 0.2993,
        "LLVK": 0.0592,
        "LLOK": 0.0864,
        "VAKK": 0.3763,
        "LVKAK": 2.12,
        "VKK": 4.6596,
        "VK": 0.3191,
        "KOS": 0.4304,
        "IKK": 9.3415,
        "LKKKK": 1,
        "PKKKK": 0.4344,
        "AKM": 0.0554,
        "PKM": 0.0489,
        "ROA": 0.0696,
        "ROE": 0.1133,
        "n_distinct(jykood)": 874
    },
    {
        "sektor_nr": 34,
        "sektor_txt": "Eriosade ehitus",
        "LVKK": 3.0221,
        "MVK": 1.5307,
        "RK": 1.0654,
        "LLLK": 0.364,
        "LLVK": 0.0839,
        "LLOK": 0.1458,
        "VAKK": 0.4204,
        "LVKAK": 2.272,
        "VKK": 3.6776,
        "VK": 0.2934,
        "KOS": 0.3792,
        "IKK": 6.024,
        "LKKKK": 1,
        "PKKKK": 0.4673,
        "AKM": 0.0456,
        "PKM": 0.0386,
        "ROA": 0.0634,
        "ROE": 0.1101,
        "n_distinct(jykood)": 6122
    },
    {
        "sektor_nr": 35,
        "sektor_txt": "Mootorsõidukite hulgi ja jaemüük",
        "LVKK": 2.2473,
        "MVK": 0.8486,
        "RK": 0.4336,
        "LLLK": 0.5384,
        "LLVK": 0.1444,
        "LLOK": 0.2955,
        "VAKK": 0.4218,
        "LVKAK": 4.7306,
        "VKK": 1.3121,
        "VK": 0.439,
        "KOS": 0.667,
        "IKK": 4.1439,
        "LKKKK": 1,
        "PKKKK": 0.5379,
        "AKM": 0.0237,
        "PKM": 0.0211,
        "ROA": 0.0384,
        "ROE": 0.0959,
        "n_distinct(jykood)": 3224
    },
    {
        "sektor_nr": 36,
        "sektor_txt": "Üldine vahendamine",
        "LVKK": 3.9001,
        "MVK": 1.6069,
        "RK": 1.0156,
        "LLLK": 0.6143,
        "LLVK": 0.1384,
        "LLOK": 0.2154,
        "VAKK": 0.2016,
        "LVKAK": 1.2967,
        "VKK": 0.9383,
        "VK": 0.2455,
        "KOS": 0.2728,
        "IKK": 3.3491,
        "LKKKK": 1,
        "PKKKK": 0.6529,
        "AKM": 0.0615,
        "PKM": 0.0601,
        "ROA": 0.0579,
        "ROE": 0.108,
        "n_distinct(jykood)": 746
    },
    {
        "sektor_nr": 37,
        "sektor_txt": "Põllumajandustoorme ja elusloomade hulgimüük",
        "LVKK": 2.3709,
        "MVK": 1.2804,
        "RK": 0.3989,
        "LLLK": 0.3239,
        "LLVK": 0.0951,
        "LLOK": 0.2005,
        "VAKK": 0.4945,
        "LVKAK": 2.2828,
        "VKK": 1.8728,
        "VK": 0.4711,
        "KOS": 0.7723,
        "IKK": 6.4462,
        "LKKKK": 1,
        "PKKKK": 0.3815,
        "AKM": 0.0258,
        "PKM": 0.0228,
        "ROA": 0.0449,
        "ROE": 0.1069,
        "n_distinct(jykood)": 731
    },
    {
        "sektor_nr": 38,
        "sektor_txt": "Kodutarvete hulgimüük",
        "LVKK": 3.271,
        "MVK": 1.5294,
        "RK": 0.6263,
        "LLLK": 0.3967,
        "LLVK": 0.0946,
        "LLOK": 0.1772,
        "VAKK": 0.3335,
        "LVKAK": 1.856,
        "VKK": 1.0859,
        "VK": 0.3243,
        "KOS": 0.4206,
        "IKK": 9.8108,
        "LKKKK": 1,
        "PKKKK": 0.4035,
        "AKM": 0.0436,
        "PKM": 0.0388,
        "ROA": 0.0519,
        "ROE": 0.0893,
        "n_distinct(jykood)": 1054
    },
    {
        "sektor_nr": 39,
        "sektor_txt": "Muude asjade, masinate ja seadmete hulgimüük",
        "LVKK": 3.4483,
        "MVK": 1.6402,
        "RK": 0.9284,
        "LLLK": 0.2564,
        "LLVK": 0.0524,
        "LLOK": 0.0877,
        "VAKK": 0.372,
        "LVKAK": 2.2325,
        "VKK": 1.2245,
        "VK": 0.2783,
        "KOS": 0.3616,
        "IKK": 8.9778,
        "LKKKK": 1,
        "PKKKK": 0.283,
        "AKM": 0.0376,
        "PKM": 0.0336,
        "ROA": 0.0491,
        "ROE": 0.0883,
        "n_distinct(jykood)": 820
    },
    {
        "sektor_nr": 40,
        "sektor_txt": "Muu spetsialiseeritud hulgimüük",
        "LVKK": 3.6328,
        "MVK": 1.7218,
        "RK": 0.6803,
        "LLLK": 0.3239,
        "LLVK": 0.0696,
        "LLOK": 0.1068,
        "VAKK": 0.3709,
        "LVKAK": 1.8721,
        "VKK": 1.3202,
        "VK": 0.2742,
        "KOS": 0.3456,
        "IKK": 6.5803,
        "LKKKK": 1,
        "PKKKK": 0.3583,
        "AKM": 0.0324,
        "PKM": 0.0292,
        "ROA": 0.044,
        "ROE": 0.0764,
        "n_distinct(jykood)": 1213
    },
    {
        "sektor_nr": 41,
        "sektor_txt": "Spetsialiseerimata hulgikaubandus",
        "LVKK": 3.5338,
        "MVK": 1.719,
        "RK": 0.6633,
        "LLLK": 0.4924,
        "LLVK": 0.1158,
        "LLOK": 0.1882,
        "VAKK": 0.3259,
        "LVKAK": 1.7093,
        "VKK": 1.1293,
        "VK": 0.3095,
        "KOS": 0.408,
        "IKK": 7.5073,
        "LKKKK": 1,
        "PKKKK": 0.5226,
        "AKM": 0.0382,
        "PKM": 0.0347,
        "ROA": 0.0498,
        "ROE": 0.0901,
        "n_distinct(jykood)": 1254
    },
    {
        "sektor_nr": 42,
        "sektor_txt": "Spetsialiseerimata jaemüük",
        "LVKK": 2.5015,
        "MVK": 0.685,
        "RK": 0.422,
        "LLLK": 0.3335,
        "LLVK": 0.086,
        "LLOK": 0.1285,
        "VAKK": 0.4954,
        "LVKAK": 10.4478,
        "VKK": 1.5457,
        "VK": 0.3995,
        "KOS": 0.5339,
        "IKK": 4.9461,
        "LKKKK": 1,
        "PKKKK": 0.5109,
        "AKM": 0.0153,
        "PKM": 0.0129,
        "ROA": 0.031,
        "ROE": 0.067,
        "n_distinct(jykood)": 764
    },
    {
        "sektor_nr": 43,
        "sektor_txt": "Toidu jaemüük",
        "LVKK": 1.6793,
        "MVK": 0.7073,
        "RK": 0.4255,
        "LLLK": 0.4065,
        "LLVK": 0.1844,
        "LLOK": 0.2201,
        "VAKK": 0.6056,
        "LVKAK": 11.3718,
        "VKK": 1.942,
        "VK": 0.5075,
        "KOS": 0.7688,
        "IKK": 4.0808,
        "LKKKK": 1,
        "PKKKK": 0.5178,
        "AKM": 0.0141,
        "PKM": 0.014,
        "ROA": 0.0411,
        "ROE": 0.1255,
        "n_distinct(jykood)": 175
    },
    {
        "sektor_nr": 44,
        "sektor_txt": "Mootorikütuse jaemüük",
        "LVKK": 3.3862,
        "MVK": 2.036,
        "RK": 1.1852,
        "LLLK": 0.4115,
        "LLVK": 0.0716,
        "LLOK": 0.1213,
        "VAKK": 0.5626,
        "LVKAK": 2.9504,
        "VKK": 3.7233,
        "VK": 0.2817,
        "KOS": 0.2425,
        "IKK": 4.3819,
        "LKKKK": 1,
        "PKKKK": 0.481,
        "AKM": 0.0107,
        "PKM": 0.0109,
        "ROA": 0.0234,
        "ROE": 0.0438,
        "n_distinct(jykood)": 29
    },
    {
        "sektor_nr": 45,
        "sektor_txt": "Arvutite ja seadmete jaemüük",
        "LVKK": 2.8736,
        "MVK": 1.2628,
        "RK": 0.5983,
        "LLLK": 0.4021,
        "LLVK": 0.1067,
        "LLOK": 0.2176,
        "VAKK": 0.4247,
        "LVKAK": 4.6761,
        "VKK": 1.2816,
        "VK": 0.3101,
        "KOS": 0.4082,
        "IKK": 7.9331,
        "LKKKK": 1,
        "PKKKK": 0.4839,
        "AKM": 0.0205,
        "PKM": 0.0195,
        "ROA": 0.0345,
        "ROE": 0.0737,
        "n_distinct(jykood)": 155
    },
    {
        "sektor_nr": 46,
        "sektor_txt": "Muude kodutarvete jaemüük",
        "LVKK": 3.3609,
        "MVK": 0.9674,
        "RK": 0.4995,
        "LLLK": 0.2679,
        "LLVK": 0.0741,
        "LLOK": 0.1299,
        "VAKK": 0.4277,
        "LVKAK": 5.3954,
        "VKK": 0.8823,
        "VK": 0.3044,
        "KOS": 0.406,
        "IKK": 5.977,
        "LKKKK": 1,
        "PKKKK": 0.4004,
        "AKM": 0.0202,
        "PKM": 0.0146,
        "ROA": 0.025,
        "ROE": 0.0553,
        "n_distinct(jykood)": 509
    },
    {
        "sektor_nr": 47,
        "sektor_txt": "Kultuuri ja vabaaja kaupade jaemüük",
        "LVKK": 2.9486,
        "MVK": 0.8536,
        "RK": 0.4909,
        "LLLK": 0.4068,
        "LLVK": 0.1029,
        "LLOK": 0.2006,
        "VAKK": 0.4194,
        "LVKAK": 6.2519,
        "VKK": 0.9576,
        "VK": 0.3835,
        "KOS": 0.4721,
        "IKK": 4.997,
        "LKKKK": 1,
        "PKKKK": 0.5356,
        "AKM": 0.0228,
        "PKM": 0.0193,
        "ROA": 0.0349,
        "ROE": 0.0813,
        "n_distinct(jykood)": 1599
    },
    {
        "sektor_nr": 48,
        "sektor_txt": "Jaemüük kioskites ja turgudel",
        "LVKK": 2.7859,
        "MVK": 1.0896,
        "RK": 0.9796,
        "LLLK": 0.6424,
        "LLVK": 0.1754,
        "LLOK": 0.4436,
        "VAKK": 0.5717,
        "LVKAK": 6.8584,
        "VKK": 1.5824,
        "VK": 0.3741,
        "KOS": 0.542,
        "IKK": 3.7695,
        "LKKKK": 1,
        "PKKKK": 0.6471,
        "AKM": 0.0149,
        "PKM": 0.015,
        "ROA": 0.0353,
        "ROE": 0.0694,
        "n_distinct(jykood)": 218
    },
    {
        "sektor_nr": 49,
        "sektor_txt": "Jaemüük posti või interneti teel",
        "LVKK": 3.5344,
        "MVK": 1.1206,
        "RK": 0.7851,
        "LLLK": 0.6428,
        "LLVK": 0.2059,
        "LLOK": 0.3657,
        "VAKK": 0.3199,
        "LVKAK": 3.9127,
        "VKK": 0.988,
        "VK": 0.3461,
        "KOS": 0.3716,
        "IKK": 3.9598,
        "LKKKK": 1,
        "PKKKK": 0.6201,
        "AKM": 0.0455,
        "PKM": 0.0406,
        "ROA": 0.0506,
        "ROE": 0.1073,
        "n_distinct(jykood)": 2009
    },
    {
        "sektor_nr": 50,
        "sektor_txt": "Muu sõitjate maismaavedu",
        "LVKK": 2.4702,
        "MVK": 1.1327,
        "RK": 0.8541,
        "LLLK": 0.6234,
        "LLVK": 0.1715,
        "LLOK": 0.3414,
        "VAKK": 0.2721,
        "LVKAK": 2.5586,
        "VKK": 4.2461,
        "VK": 0.301,
        "KOS": 0.3999,
        "IKK": 3.8381,
        "LKKKK": 1,
        "PKKKK": 0.6432,
        "AKM": 0.056,
        "PKM": 0.05,
        "ROA": 0.0525,
        "ROE": 0.1033,
        "n_distinct(jykood)": 644
    },
    {
        "sektor_nr": 51,
        "sektor_txt": "Kaubavedu maanteel ja kolimisteenused",
        "LVKK": 1.8317,
        "MVK": 1.1726,
        "RK": 0.6102,
        "LLLK": 0.4783,
        "LLVK": 0.1214,
        "LLOK": 0.2399,
        "VAKK": 0.3343,
        "LVKAK": 2.1991,
        "VKK": 8.4042,
        "VK": 0.3801,
        "KOS": 0.555,
        "IKK": 2.1232,
        "LKKKK": 1,
        "PKKKK": 0.4816,
        "AKM": 0.0268,
        "PKM": 0.0162,
        "ROA": 0.0229,
        "ROE": 0.0503,
        "n_distinct(jykood)": 2660
    },
    {
        "sektor_nr": 52,
        "sektor_txt": "Sõitjate veevedu (veetransport)",
        "LVKK": 1.1958,
        "MVK": 1.2613,
        "RK": 0.5003,
        "LLLK": 0.7354,
        "LLVK": 0.0761,
        "LLOK": 0.4594,
        "VAKK": 0.0796,
        "LVKAK": 0.8685,
        "VKK": 17.7456,
        "VK": 0.6424,
        "KOS": 0.7974,
        "IKK": 2.0401,
        "LKKKK": 0.7321,
        "PKKKK": 0.8038,
        "AKM": 0.0535,
        "PKM": 0.0329,
        "ROA": 0.0139,
        "ROE": 0.1142,
        "n_distinct(jykood)": 44
    },
    {
        "sektor_nr": 53,
        "sektor_txt": "Kauba õhutransport",
        "LVKK": 2.445,
        "MVK": 2.4333,
        "RK": 0.3289,
        "LLLK": 0.5695,
        "LLVK": 0.05,
        "LLOK": 0.126,
        "VAKK": 0.2419,
        "LVKAK": 2.4387,
        "VKK": 25.3208,
        "VK": 0.4085,
        "KOS": 0.157,
        "IKK": 5.9713,
        "LKKKK": 1,
        "PKKKK": 0.8016,
        "AKM": 0.0342,
        "PKM": 0.0295,
        "ROA": 0.0379,
        "ROE": 0.574,
        "n_distinct(jykood)": 17
    },
    {
        "sektor_nr": 54,
        "sektor_txt": "Laondus",
        "LVKK": 1.7131,
        "MVK": 1.1356,
        "RK": 0.3915,
        "LLLK": 0.3553,
        "LLVK": 0.0856,
        "LLOK": 0.2659,
        "VAKK": 0.1462,
        "LVKAK": 1.7515,
        "VKK": 12.2201,
        "VK": 0.4588,
        "KOS": 0.6388,
        "IKK": 2.2915,
        "LKKKK": 1,
        "PKKKK": 0.3927,
        "AKM": 0.0742,
        "PKM": 0.0394,
        "ROA": 0.0414,
        "ROE": 0.0978,
        "n_distinct(jykood)": 68
    },
    {
        "sektor_nr": 55,
        "sektor_txt": "Veondust abistavad tegevused",
        "LVKK": 3.1113,
        "MVK": 2.3757,
        "RK": 1.0454,
        "LLLK": 0.3696,
        "LLVK": 0.0735,
        "LLOK": 0.128,
        "VAKK": 0.3402,
        "LVKAK": 1.6298,
        "VKK": 5.908,
        "VK": 0.2798,
        "KOS": 0.3637,
        "IKK": 6.5401,
        "LKKKK": 1,
        "PKKKK": 0.4962,
        "AKM": 0.0441,
        "PKM": 0.0381,
        "ROA": 0.0578,
        "ROE": 0.1078,
        "n_distinct(jykood)": 1161
    },
    {
        "sektor_nr": 56,
        "sektor_txt": "Posti ja kullerteenus",
        "LVKK": 3.3862,
        "MVK": 3.1468,
        "RK": 1.2834,
        "LLLK": 0.3647,
        "LLVK": 0.0945,
        "LLOK": 0.1781,
        "VAKK": 0.3146,
        "LVKAK": 1.9752,
        "VKK": 8.6702,
        "VK": 0.2323,
        "KOS": 0.2866,
        "IKK": 4.2455,
        "LKKKK": 1,
        "PKKKK": 0.4299,
        "AKM": 0.0934,
        "PKM": 0.0827,
        "ROA": 0.0897,
        "ROE": 0.1349,
        "n_distinct(jykood)": 194
    },
    {
        "sektor_nr": 57,
        "sektor_txt": "Majutus",
        "LVKK": 1.9553,
        "MVK": 1.1645,
        "RK": 0.6957,
        "LLLK": 0.77,
        "LLVK": 0.1142,
        "LLOK": 0.2132,
        "VAKK": 0.1135,
        "LVKAK": 3.2699,
        "VKK": 13.2445,
        "VK": 0.4232,
        "KOS": 0.5746,
        "IKK": 1.6344,
        "LKKKK": 1,
        "PKKKK": 0.8502,
        "AKM": 0.0662,
        "PKM": 0.0526,
        "ROA": 0.0232,
        "ROE": 0.0585,
        "n_distinct(jykood)": 969
    },
    {
        "sektor_nr": 58,
        "sektor_txt": "Toidu ja joogi serveerimine",
        "LVKK": 1.5575,
        "MVK": 0.9009,
        "RK": 0.6558,
        "LLLK": 0.4219,
        "LLVK": 0.1473,
        "LLOK": 0.2736,
        "VAKK": 0.7458,
        "LVKAK": 9.7539,
        "VKK": 9.5296,
        "VK": 0.5178,
        "KOS": 0.7515,
        "IKK": 4.9324,
        "LKKKK": 1,
        "PKKKK": 0.5768,
        "AKM": 0.0259,
        "PKM": 0.0234,
        "ROA": 0.0627,
        "ROE": 0.1589,
        "n_distinct(jykood)": 1828
    },
    {
        "sektor_nr": 59,
        "sektor_txt": "Kirjastamine",
        "LVKK": 6.5582,
        "MVK": 3.2212,
        "RK": 2.4507,
        "LLLK": 0.5109,
        "LLVK": 0.078,
        "LLOK": 0.1171,
        "VAKK": 0.2703,
        "LVKAK": 2.3558,
        "VKK": 0.5472,
        "VK": 0.1455,
        "KOS": 0.1463,
        "IKK": 6.2147,
        "LKKKK": 1,
        "PKKKK": 0.5827,
        "AKM": 0.1038,
        "PKM": 0.09,
        "ROA": 0.0997,
        "ROE": 0.1682,
        "n_distinct(jykood)": 481
    },
    {
        "sektor_nr": 60,
        "sektor_txt": "Kinofilmid, muusika ja Videod",
        "LVKK": 6.1447,
        "MVK": 2.8646,
        "RK": 2.4593,
        "LLLK": 0.4614,
        "LLVK": 0.0705,
        "LLOK": 0.111,
        "VAKK": 0.2692,
        "LVKAK": 2.2284,
        "VKK": 2.1071,
        "VK": 0.1384,
        "KOS": 0.1501,
        "IKK": 10.7796,
        "LKKKK": 1,
        "PKKKK": 0.6645,
        "AKM": 0.1254,
        "PKM": 0.121,
        "ROA": 0.1353,
        "ROE": 0.1779,
        "n_distinct(jykood)": 769
    },
    {
        "sektor_nr": 61,
        "sektor_txt": "Elektrooniline side",
        "LVKK": 3.2635,
        "MVK": 1.2001,
        "RK": 1.0354,
        "LLLK": 0.5459,
        "LLVK": 0.0833,
        "LLOK": 0.1929,
        "VAKK": 0.2934,
        "LVKAK": 1.6485,
        "VKK": 2.8363,
        "VK": 0.2649,
        "KOS": 0.3453,
        "IKK": 4.4724,
        "LKKKK": 1,
        "PKKKK": 0.4398,
        "AKM": 0.0469,
        "PKM": 0.0446,
        "ROA": 0.0413,
        "ROE": 0.0721,
        "n_distinct(jykood)": 162
    },
    {
        "sektor_nr": 62,
        "sektor_txt": "Programmeerimine",
        "LVKK": 9.2899,
        "MVK": 4.3898,
        "RK": 3.6928,
        "LLLK": 0.5822,
        "LLVK": 0.0773,
        "LLOK": 0.0922,
        "VAKK": 0.2646,
        "LVKAK": 2.1798,
        "VKK": 3.8656,
        "VK": 0.1049,
        "KOS": 0.0984,
        "IKK": 15.001,
        "LKKKK": 1,
        "PKKKK": 0.7335,
        "AKM": 0.1835,
        "PKM": 0.1749,
        "ROA": 0.1724,
        "ROE": 0.2439,
        "n_distinct(jykood)": 4975
    },
    {
        "sektor_nr": 63,
        "sektor_txt": "Infoalane tegevus",
        "LVKK": 5.9041,
        "MVK": 4.5288,
        "RK": 2.3898,
        "LLLK": 0.5567,
        "LLVK": 0.0675,
        "LLOK": 0.1012,
        "VAKK": 0.2577,
        "LVKAK": 2.3931,
        "VKK": 3.6361,
        "VK": 0.1697,
        "KOS": 0.1451,
        "IKK": 7.3571,
        "LKKKK": 1,
        "PKKKK": 0.8004,
        "AKM": 0.1432,
        "PKM": 0.1446,
        "ROA": 0.1318,
        "ROE": 0.2139,
        "n_distinct(jykood)": 943
    },
    {
        "sektor_nr": 64,
        "sektor_txt": "Finantsvahendus",
        "LVKK": 5.0959,
        "MVK": 3.247,
        "RK": 1.0656,
        "LLLK": 0.8997,
        "LLVK": 0.1374,
        "LLOK": 0.196,
        "VAKK": 0.0648,
        "LVKAK": 0.3933,
        "VKK": 0.5776,
        "VK": 0.2575,
        "KOS": 0.2895,
        "IKK": 1.8281,
        "LKKKK": 1,
        "PKKKK": 0.8889,
        "AKM": 0.2646,
        "PKM": 0.3471,
        "ROA": 0.0684,
        "ROE": 0.1271,
        "n_distinct(jykood)": 1098
    },
    {
        "sektor_nr": 65,
        "sektor_txt": "Kinnisvara",
        "LVKK": 2.9848,
        "MVK": 1.5389,
        "RK": 0.7899,
        "LLLK": 0.8153,
        "LLVK": 0.0805,
        "LLOK": 0.1695,
        "VAKK": 0.0386,
        "LVKAK": 1.3012,
        "VKK": 0.7276,
        "VK": 0.3269,
        "KOS": 0.4123,
        "IKK": 2.2919,
        "LKKKK": 1,
        "PKKKK": 0.8979,
        "AKM": 0.2829,
        "PKM": 0.2435,
        "ROA": 0.0388,
        "ROE": 0.0844,
        "n_distinct(jykood)": 9792
    },
    {
        "sektor_nr": 66,
        "sektor_txt": "Juriidilised toimingud",
        "LVKK": 5.5865,
        "MVK": 3.9308,
        "RK": 1.7806,
        "LLLK": 0.4966,
        "LLVK": 0.0595,
        "LLOK": 0.1027,
        "VAKK": 0.178,
        "LVKAK": 1.0454,
        "VKK": 5.3264,
        "VK": 0.1742,
        "KOS": 0.1982,
        "IKK": 17.1431,
        "LKKKK": 1,
        "PKKKK": 0.6584,
        "AKM": 0.2337,
        "PKM": 0.2262,
        "ROA": 0.1183,
        "ROE": 0.1624,
        "n_distinct(jykood)": 708
    },
    {
        "sektor_nr": 67,
        "sektor_txt": "Arvepidamine",
        "LVKK": 8.0427,
        "MVK": 2.6433,
        "RK": 2.3039,
        "LLLK": 0.6227,
        "LLVK": 0.0933,
        "LLOK": 0.1687,
        "VAKK": 0.1795,
        "LVKAK": 1.4728,
        "VKK": 2.4533,
        "VK": 0.1175,
        "KOS": 0.129,
        "IKK": 7.9112,
        "LKKKK": 1,
        "PKKKK": 0.713,
        "AKM": 0.1922,
        "PKM": 0.1824,
        "ROA": 0.1153,
        "ROE": 0.1492,
        "n_distinct(jykood)": 3998
    },
    {
        "sektor_nr": 68,
        "sektor_txt": "Peakontorid",
        "LVKK": 1.9588,
        "MVK": 2.449,
        "RK": 0.3069,
        "LLLK": 0.6964,
        "LLVK": 0.0903,
        "LLOK": 0.0994,
        "VAKK": 0.027,
        "LVKAK": 0.2201,
        "VKK": 16.5103,
        "VK": 0.2772,
        "KOS": 0.3308,
        "IKK": -0.0498,
        "LKKKK": 0.9937,
        "PKKKK": 0.5993,
        "AKM": 0.0767,
        "PKM": 0.5472,
        "ROA": 0.0618,
        "ROE": 0.1545,
        "n_distinct(jykood)": 66
    },
    {
        "sektor_nr": 69,
        "sektor_txt": "Juhtimisalane nõustamine",
        "LVKK": 8.2174,
        "MVK": 4.0643,
        "RK": 2.4914,
        "LLLK": 0.7985,
        "LLVK": 0.0871,
        "LLOK": 0.1159,
        "VAKK": 0.1414,
        "LVKAK": 1.0808,
        "VKK": 2.1454,
        "VK": 0.1215,
        "KOS": 0.1222,
        "IKK": 7.6594,
        "LKKKK": 1,
        "PKKKK": 0.7996,
        "AKM": 0.2797,
        "PKM": 0.2989,
        "ROA": 0.1328,
        "ROE": 0.1838,
        "n_distinct(jykood)": 3809
    },
    {
        "sektor_nr": 70,
        "sektor_txt": "Arhitektid, insenerid",
        "LVKK": 5.4432,
        "MVK": 3.0502,
        "RK": 2.2198,
        "LLLK": 0.4178,
        "LLVK": 0.0647,
        "LLOK": 0.0902,
        "VAKK": 0.2267,
        "LVKAK": 1.6659,
        "VKK": 4.3294,
        "VK": 0.1645,
        "KOS": 0.1844,
        "IKK": 12.9576,
        "LKKKK": 1,
        "PKKKK": 0.6079,
        "AKM": 0.1799,
        "PKM": 0.1706,
        "ROA": 0.1275,
        "ROE": 0.1759,
        "n_distinct(jykood)": 2449
    },
    {
        "sektor_nr": 71,
        "sektor_txt": "Teimimine, analüüs",
        "LVKK": 4.449,
        "MVK": 2.6041,
        "RK": 1.9099,
        "LLLK": 0.37,
        "LLVK": 0.0585,
        "LLOK": 0.1056,
        "VAKK": 0.2604,
        "LVKAK": 2.4211,
        "VKK": 9.3763,
        "VK": 0.1728,
        "KOS": 0.2089,
        "IKK": 21.7786,
        "LKKKK": 1,
        "PKKKK": 0.5024,
        "AKM": 0.1586,
        "PKM": 0.1537,
        "ROA": 0.1497,
        "ROE": 0.1817,
        "n_distinct(jykood)": 140
    },
    {
        "sektor_nr": 72,
        "sektor_txt": "Teadus- ja arendustegevus",
        "LVKK": 5.7052,
        "MVK": 1.9614,
        "RK": 2.02,
        "LLLK": 0.5795,
        "LLVK": 0.1676,
        "LLOK": 0.2712,
        "VAKK": 0.1465,
        "LVKAK": 1.2571,
        "VKK": 1.0882,
        "VK": 0.1554,
        "KOS": 0.1802,
        "IKK": 2.947,
        "LKKKK": 1,
        "PKKKK": 0.6389,
        "AKM": 0.2574,
        "PKM": 0.2475,
        "ROA": 0.1284,
        "ROE": 0.1822,
        "n_distinct(jykood)": 301
    },
    {
        "sektor_nr": 73,
        "sektor_txt": "Reklaam, turu-uuringud",
        "LVKK": 5.3904,
        "MVK": 2.2844,
        "RK": 1.9774,
        "LLLK": 0.508,
        "LLVK": 0.0933,
        "LLOK": 0.1559,
        "VAKK": 0.3059,
        "LVKAK": 1.9287,
        "VKK": 5.9758,
        "VK": 0.1714,
        "KOS": 0.1856,
        "IKK": 6.9774,
        "LKKKK": 1,
        "PKKKK": 0.5493,
        "AKM": 0.1076,
        "PKM": 0.1002,
        "ROA": 0.1186,
        "ROE": 0.178,
        "n_distinct(jykood)": 1330
    },
    {
        "sektor_nr": 74,
        "sektor_txt": "Disainerite tegevus",
        "LVKK": 6.8101,
        "MVK": 1.6352,
        "RK": 2.7422,
        "LLLK": 0.557,
        "LLVK": 0.1405,
        "LLOK": 0.2066,
        "VAKK": 0.2369,
        "LVKAK": 2.3211,
        "VKK": 1.1989,
        "VK": 0.1404,
        "KOS": 0.1537,
        "IKK": 5.074,
        "LKKKK": 1,
        "PKKKK": 0.649,
        "AKM": 0.1195,
        "PKM": 0.1112,
        "ROA": 0.0984,
        "ROE": 0.1355,
        "n_distinct(jykood)": 986
    },
    {
        "sektor_nr": 75,
        "sektor_txt": "Fotograafia",
        "LVKK": 5.4915,
        "MVK": 3.0603,
        "RK": 3.5589,
        "LLLK": 0.5627,
        "LLVK": 0.1212,
        "LLOK": 0.1888,
        "VAKK": 0.2624,
        "LVKAK": 3.3672,
        "VKK": 1.8736,
        "VK": 0.1389,
        "KOS": 0.1573,
        "IKK": 6.733,
        "LKKKK": 1,
        "PKKKK": 0.7331,
        "AKM": 0.1149,
        "PKM": 0.1196,
        "ROA": 0.1092,
        "ROE": 0.1295,
        "n_distinct(jykood)": 396
    },
    {
        "sektor_nr": 76,
        "sektor_txt": "Muu kutsetegevus",
        "LVKK": 6.8297,
        "MVK": 2.0916,
        "RK": 1.942,
        "LLLK": 0.6632,
        "LLVK": 0.1027,
        "LLOK": 0.1583,
        "VAKK": 0.1817,
        "LVKAK": 1.5143,
        "VKK": 1.7877,
        "VK": 0.142,
        "KOS": 0.1544,
        "IKK": 6.6555,
        "LKKKK": 1,
        "PKKKK": 0.7747,
        "AKM": 0.186,
        "PKM": 0.1803,
        "ROA": 0.1171,
        "ROE": 0.1663,
        "n_distinct(jykood)": 1500
    },
    {
        "sektor_nr": 77,
        "sektor_txt": "Veterinaaria",
        "LVKK": 3.1937,
        "MVK": 1.128,
        "RK": 1.0119,
        "LLLK": 0.3835,
        "LLVK": 0.0619,
        "LLOK": 0.1161,
        "VAKK": 0.3929,
        "LVKAK": 5.903,
        "VKK": 3.167,
        "VK": 0.2436,
        "KOS": 0.2759,
        "IKK": 12.0607,
        "LKKKK": 1,
        "PKKKK": 0.4961,
        "AKM": 0.1004,
        "PKM": 0.0813,
        "ROA": 0.1272,
        "ROE": 0.1688,
        "n_distinct(jykood)": 136
    },
    {
        "sektor_nr": 78,
        "sektor_txt": "Mootorsõidukite rentimine",
        "LVKK": 3.1872,
        "MVK": 1.5664,
        "RK": 0.6327,
        "LLLK": 0.8101,
        "LLVK": 0.1403,
        "LLOK": 0.2776,
        "VAKK": 0.0807,
        "LVKAK": 0.6429,
        "VKK": 1.3783,
        "VK": 0.3268,
        "KOS": 0.4108,
        "IKK": 1.9091,
        "LKKKK": 1,
        "PKKKK": 0.7786,
        "AKM": 0.0848,
        "PKM": 0.1248,
        "ROA": 0.0357,
        "ROE": 0.0879,
        "n_distinct(jykood)": 521
    },
    {
        "sektor_nr": 79,
        "sektor_txt": "Tarbeesemete üürimine ja kasutusrent",
        "LVKK": 2.3263,
        "MVK": 1.6351,
        "RK": 1.0468,
        "LLLK": 0.6624,
        "LLVK": 0.1219,
        "LLOK": 0.4094,
        "VAKK": 0.1546,
        "LVKAK": 1.9702,
        "VKK": 2.416,
        "VK": 0.4299,
        "KOS": 0.5218,
        "IKK": 6.7892,
        "LKKKK": 1,
        "PKKKK": 0.6838,
        "AKM": 0.0826,
        "PKM": 0.0771,
        "ROA": 0.0533,
        "ROE": 0.1255,
        "n_distinct(jykood)": 76
    },
    {
        "sektor_nr": 80,
        "sektor_txt": "Muude masinate, materiaalse vara üürimine, kasutusrent",
        "LVKK": 3.3043,
        "MVK": 1.6211,
        "RK": 0.7269,
        "LLLK": 0.7153,
        "LLVK": 0.1333,
        "LLOK": 0.2166,
        "VAKK": 0.0963,
        "LVKAK": 0.895,
        "VKK": 1.0593,
        "VK": 0.2731,
        "KOS": 0.304,
        "IKK": 3.5693,
        "LKKKK": 1,
        "PKKKK": 0.6919,
        "AKM": 0.137,
        "PKM": 0.1228,
        "ROA": 0.0475,
        "ROE": 0.085,
        "n_distinct(jykood)": 717
    },
    {
        "sektor_nr": 81,
        "sektor_txt": "Intellektuaalomandi rentimine",
        "LVKK": 5.6758,
        "MVK": 2.8728,
        "RK": 3.1196,
        "LLLK": 0.7948,
        "LLVK": 0.1254,
        "LLOK": 0.21,
        "VAKK": 0.1219,
        "LVKAK": 0.9917,
        "VKK": 0.8608,
        "VK": 0.2153,
        "KOS": 0.2239,
        "IKK": 5.5556,
        "LKKKK": 1,
        "PKKKK": 0.9015,
        "AKM": 0.3007,
        "PKM": 0.3415,
        "ROA": 0.1465,
        "ROE": 0.1942,
        "n_distinct(jykood)": 43
    },
    {
        "sektor_nr": 82,
        "sektor_txt": "Tööhõive",
        "LVKK": 2.982,
        "MVK": 2.0303,
        "RK": 0.8758,
        "LLLK": 0.4114,
        "LLVK": 0.0728,
        "LLOK": 0.1044,
        "VAKK": 0.3995,
        "LVKAK": 1.7598,
        "VKK": 10.6695,
        "VK": 0.2869,
        "KOS": 0.3356,
        "IKK": 7.5239,
        "LKKKK": 1,
        "PKKKK": 0.4574,
        "AKM": 0.0473,
        "PKM": 0.0405,
        "ROA": 0.074,
        "ROE": 0.1362,
        "n_distinct(jykood)": 543
    },
    {
        "sektor_nr": 83,
        "sektor_txt": "Reisibürood ja reisikorraldus",
        "LVKK": 2.9799,
        "MVK": 1.5611,
        "RK": 1.0951,
        "LLLK": 0.5149,
        "LLVK": 0.0828,
        "LLOK": 0.1263,
        "VAKK": 0.3134,
        "LVKAK": 1.7167,
        "VKK": 7.685,
        "VK": 0.3263,
        "KOS": 0.4816,
        "IKK": 16.4245,
        "LKKKK": 1,
        "PKKKK": 0.6759,
        "AKM": 0.0784,
        "PKM": 0.072,
        "ROA": 0.0839,
        "ROE": 0.1583,
        "n_distinct(jykood)": 377
    },
    {
        "sektor_nr": 84,
        "sektor_txt": "Turvatöö, juurdlus",
        "LVKK": 2.2162,
        "MVK": 1.3292,
        "RK": 0.9728,
        "LLLK": 0.2126,
        "LLVK": 0.0821,
        "LLOK": 0.1099,
        "VAKK": 0.4186,
        "LVKAK": 1.9436,
        "VKK": 4.7037,
        "VK": 0.3899,
        "KOS": 0.5673,
        "IKK": -2.6318,
        "LKKKK": 1,
        "PKKKK": 0.266,
        "AKM": 0.0354,
        "PKM": 0.0384,
        "ROA": 0.0597,
        "ROE": 0.086,
        "n_distinct(jykood)": 46
    },
    {
        "sektor_nr": 85,
        "sektor_txt": "Hoonete, maastike hooldus",
        "LVKK": 3.6574,
        "MVK": 1.7723,
        "RK": 1.2896,
        "LLLK": 0.4125,
        "LLVK": 0.0715,
        "LLOK": 0.1207,
        "VAKK": 0.2734,
        "LVKAK": 2.171,
        "VKK": 6.1462,
        "VK": 0.2268,
        "KOS": 0.2695,
        "IKK": 6.425,
        "LKKKK": 1,
        "PKKKK": 0.5531,
        "AKM": 0.0819,
        "PKM": 0.0736,
        "ROA": 0.0777,
        "ROE": 0.124,
        "n_distinct(jykood)": 1505
    },
    {
        "sektor_nr": 86,
        "sektor_txt": "Büroohaldus",
        "LVKK": 4.6857,
        "MVK": 2.7962,
        "RK": 1.3618,
        "LLLK": 0.61,
        "LLVK": 0.0708,
        "LLOK": 0.1029,
        "VAKK": 0.1699,
        "LVKAK": 1.1433,
        "VKK": 1.6424,
        "VK": 0.1958,
        "KOS": 0.2126,
        "IKK": 4.5938,
        "LKKKK": 1,
        "PKKKK": 0.7734,
        "AKM": 0.1238,
        "PKM": 0.1186,
        "ROA": 0.0916,
        "ROE": 0.1438,
        "n_distinct(jykood)": 1288
    },
    {
        "sektor_nr": 88,
        "sektor_txt": "Haridus",
        "LVKK": 5.3054,
        "MVK": 2.7092,
        "RK": 2.4145,
        "LLLK": 0.5989,
        "LLVK": 0.1177,
        "LLOK": 0.2018,
        "VAKK": 0.2315,
        "LVKAK": 2.6525,
        "VKK": 3.0085,
        "VK": 0.1692,
        "KOS": 0.1822,
        "IKK": 6.6946,
        "LKKKK": 1,
        "PKKKK": 0.6889,
        "AKM": 0.1442,
        "PKM": 0.1316,
        "ROA": 0.1202,
        "ROE": 0.1632,
        "n_distinct(jykood)": 1821
    },
    {
        "sektor_nr": 89,
        "sektor_txt": "Tervishoid",
        "LVKK": 4.1855,
        "MVK": 2.0288,
        "RK": 2.6354,
        "LLLK": 0.2581,
        "LLVK": 0.0508,
        "LLOK": 0.087,
        "VAKK": 0.4227,
        "LVKAK": 6.7919,
        "VKK": 15.5876,
        "VK": 0.1974,
        "KOS": 0.2327,
        "IKK": 20.7386,
        "LKKKK": 1,
        "PKKKK": 0.4889,
        "AKM": 0.1464,
        "PKM": 0.1332,
        "ROA": 0.195,
        "ROE": 0.2756,
        "n_distinct(jykood)": 1615
    },
    {
        "sektor_nr": 90,
        "sektor_txt": "Hoolekandeasutuste tegevus",
        "LVKK": 2.7384,
        "MVK": 1.1191,
        "RK": 0.9121,
        "LLLK": 0.3839,
        "LLVK": 0.0721,
        "LLOK": 0.1255,
        "VAKK": 0.3659,
        "LVKAK": 2.8823,
        "VKK": 35.6677,
        "VK": 0.28,
        "KOS": 0.3245,
        "IKK": 12.997,
        "LKKKK": 1,
        "PKKKK": 0.6247,
        "AKM": 0.1017,
        "PKM": 0.0859,
        "ROA": 0.1323,
        "ROE": 0.1976,
        "n_distinct(jykood)": 216
    },
    {
        "sektor_nr": 91,
        "sektor_txt": "Loome, kunst, meelelahutus",
        "LVKK": 6.9544,
        "MVK": 2.4626,
        "RK": 2.5784,
        "LLLK": 0.6388,
        "LLVK": 0.1108,
        "LLOK": 0.1914,
        "VAKK": 0.2457,
        "LVKAK": 2.2458,
        "VKK": 1.5594,
        "VK": 0.1317,
        "KOS": 0.1416,
        "IKK": 8.788,
        "LKKKK": 1,
        "PKKKK": 0.7603,
        "AKM": 0.1323,
        "PKM": 0.1291,
        "ROA": 0.1213,
        "ROE": 0.1587,
        "n_distinct(jykood)": 1708
    },
    {
        "sektor_nr": 92,
        "sektor_txt": "Muude kultuuriasutuste tegevus",
        "LVKK": 3.0809,
        "MVK": 4.0057,
        "RK": 1.4902,
        "LLLK": 0.7758,
        "LLVK": 0.0386,
        "LLOK": 0.0937,
        "VAKK": 0.2979,
        "LVKAK": 2.0162,
        "VKK": 0.9225,
        "VK": 0.4451,
        "KOS": 0.802,
        "IKK": 5.0879,
        "LKKKK": 0.7423,
        "PKKKK": 0.8456,
        "AKM": 0.0783,
        "PKM": 0.0783,
        "ROA": 0.0957,
        "ROE": 0.1189,
        "n_distinct(jykood)": 15
    },
    {
        "sektor_nr": 93,
        "sektor_txt": "Sporditegevus, lõbustus, vaba aeg",
        "LVKK": 3.3058,
        "MVK": 1.0773,
        "RK": 1.0919,
        "LLLK": 0.6539,
        "LLVK": 0.1582,
        "LLOK": 0.2736,
        "VAKK": 0.2481,
        "LVKAK": 2.7721,
        "VKK": 4.0493,
        "VK": 0.2752,
        "KOS": 0.2801,
        "IKK": 3.992,
        "LKKKK": 1,
        "PKKKK": 0.7063,
        "AKM": 0.0985,
        "PKM": 0.092,
        "ROA": 0.0881,
        "ROE": 0.1494,
        "n_distinct(jykood)": 1267
    },
    {
        "sektor_nr": 95,
        "sektor_txt": "Arvutite, tarbeesemete parandus",
        "LVKK": 3.4722,
        "MVK": 0.8917,
        "RK": 0.8918,
        "LLLK": 0.468,
        "LLVK": 0.149,
        "LLOK": 0.2949,
        "VAKK": 0.3686,
        "LVKAK": 3.3519,
        "VKK": 1.5488,
        "VK": 0.251,
        "KOS": 0.2898,
        "IKK": 3.587,
        "LKKKK": 1,
        "PKKKK": 0.5467,
        "AKM": 0.0233,
        "PKM": 0.0186,
        "ROA": 0.0261,
        "ROE": 0.0671,
        "n_distinct(jykood)": 305
    },
    {
        "sektor_nr": 96,
        "sektor_txt": "Muu teenindus",
        "LVKK": 3.837,
        "MVK": 1.1782,
        "RK": 1.1121,
        "LLLK": 0.6235,
        "LLVK": 0.1703,
        "LLOK": 0.2889,
        "VAKK": 0.354,
        "LVKAK": 2.9331,
        "VKK": 2.6765,
        "VK": 0.2445,
        "KOS": 0.2836,
        "IKK": 3.9584,
        "LKKKK": 1,
        "PKKKK": 0.7029,
        "AKM": 0.0431,
        "PKM": 0.0367,
        "ROA": 0.0504,
        "ROE": 0.088,
        "n_distinct(jykood)": 2931
    }
];

class Sekt1agraafComponent {
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
        ], ngImport: i0, template: "<!---br>\r\n<p>See on graafik...</p--->\r\n<br><br>\r\n<div class=\"tekstike2\">\r\n  Tegevusala valimine\r\n  </div>\r\n  <br>\r\n  <div class=\"tekstike2\">\r\n    \r\n    <!---/div--->\r\n  <select [formControl]=\"dropdown\" class=\"container2\">\r\n    <!--select [formControl]=\"dropdown\" class=\"container2\" name=\"options2[1]\" [(ngModel)]=\"options2[1]\"-->\r\n    <!---option value=\"\">Choose your city</option--->\r\n    <!--span>{{ valik }}</span-->\r\n    <option value=\"null\" hidden disabled>{{valdkonnake}}</option>\r\n    <option [value]=\"option\" *ngFor=\"let  option of options2\">{{option}}</option>\r\n  </select> \r\n  <!---{{suhtarvuvalik()}}-->\r\n  {{ muudaVaartust() }}\r\n  \r\n  </div>\r\n\r\n{{ paneAndmed() }}\r\n<div class=\"asukoht\">\r\n  <div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n  </div>\r\n\r\n\r\n  <!-----{{suhtarvuvalik()}}--->\r\n  <!----{{oigeSuhtarv}}--->", styles: [".asukoht{padding-left:10px;margin-top:-30px}.yld1-chart{height:400px;padding-left:0;width:920px;background-position:right}.tooltip-key{width:20px;color:red;word-break:break-word;white-space:normal}.tekstike2{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-30px}\n"], dependencies: [{ kind: "directive", type: NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "initOpts", "merge", "autoResize", "loading", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartHighlight", "chartDownplay", "chartSelectChanged", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendLegendSelectAll", "chartLegendLegendInverseSelect", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartGraphRoam", "chartGeoRoam", "chartTreeRoam", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartGeoSelectChanged", "chartGeoSelected", "chartGeoUnselected", "chartAxisAreaSelected", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartGlobalCursorTaken", "chartRendered", "chartFinished"], exportAs: ["echarts"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1$2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1$2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: FormsModule }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt1agraafComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sekt1agraaf', standalone: true, imports: [NgxEchartsDirective, ReactiveFormsModule, FormsModule, CommonModule], providers: [
                        provideEcharts(),
                    ], template: "<!---br>\r\n<p>See on graafik...</p--->\r\n<br><br>\r\n<div class=\"tekstike2\">\r\n  Tegevusala valimine\r\n  </div>\r\n  <br>\r\n  <div class=\"tekstike2\">\r\n    \r\n    <!---/div--->\r\n  <select [formControl]=\"dropdown\" class=\"container2\">\r\n    <!--select [formControl]=\"dropdown\" class=\"container2\" name=\"options2[1]\" [(ngModel)]=\"options2[1]\"-->\r\n    <!---option value=\"\">Choose your city</option--->\r\n    <!--span>{{ valik }}</span-->\r\n    <option value=\"null\" hidden disabled>{{valdkonnake}}</option>\r\n    <option [value]=\"option\" *ngFor=\"let  option of options2\">{{option}}</option>\r\n  </select> \r\n  <!---{{suhtarvuvalik()}}-->\r\n  {{ muudaVaartust() }}\r\n  \r\n  </div>\r\n\r\n{{ paneAndmed() }}\r\n<div class=\"asukoht\">\r\n  <div echarts [options]=\"options\" class=\"yld1-chart\"></div>\r\n  </div>\r\n\r\n\r\n  <!-----{{suhtarvuvalik()}}--->\r\n  <!----{{oigeSuhtarv}}--->", styles: [".asukoht{padding-left:10px;margin-top:-30px}.yld1-chart{height:400px;padding-left:0;width:920px;background-position:right}.tooltip-key{width:20px;color:red;word-break:break-word;white-space:normal}.tekstike2{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-30px}\n"] }]
        }], ctorParameters: () => [] });

//import { products } from '../products';
class Sekt1aComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt1aComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekt1aComponent, isStandalone: true, selector: "sekt1a-component", ngImport: i0, template: "<tabele1-component></tabele1-component>\r\n<br>\r\n\r\n<!---p>ALTERNATIIV SEKTORI EFEKTIIVSUSELE</p-->\r\n\r\n<sekt1agraaf></sekt1agraaf>", styles: [""], dependencies: [{ kind: "component", type: Tabele1Component, selector: "tabele1-component" }, { kind: "component", type: Sekt1agraafComponent, selector: "sekt1agraaf" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt1aComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sekt1a-component', imports: [Tabele1Component, Sekt1agraafComponent], standalone: true, template: "<tabele1-component></tabele1-component>\r\n<br>\r\n\r\n<!---p>ALTERNATIIV SEKTORI EFEKTIIVSUSELE</p-->\r\n\r\n<sekt1agraaf></sekt1agraaf>" }]
        }] });

//import { products } from '../products';
class Tabele2Component {
    constructor() {
        this.lvkk = Math.round((xtee.LVKK) * 100) / 100;
        //this.lvkk = xtee.LVKK;
        this.mvk = Math.round((xtee.MVK) * 100) / 100;
        //this.mvk = xtee.MVK;
        this.rk = Math.round((xtee.RK) * 100) / 100;
        //this.rk = xtee.RK;
        this.aasta = xtee.prognAasta;
        this.aastax = this.aasta.replaceAll('"', "");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabele2Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Tabele2Component, isStandalone: true, selector: "tabele2-component", ngImport: i0, template: "<div class=\"dashboard\">\r\n<div class=\"dashboard-type\">\r\n  <div class=\"dashboard-row\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n      >\r\n        Sinu ettev\u00F5tte l\u00FChiajaliste kohustuste kattekordaja: \r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{lvkk}}</div>\r\n    </div>\r\n  </div>\r\n  <svg\r\n    class=\"divider2\"\r\n    width=\"950\"\r\n    height=\"16\"\r\n    viewBox=\"0 0 950 16\"\r\n    fill=\"none\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n  >\r\n    <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n  </svg>\r\n  <div class=\"dashboard-row2\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n      >\r\n       Sinu ettev\u00F5tte maksev\u00F5ime kordaja:\r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{mvk}}</div>\r\n    </div>\r\n  </div>\r\n  <svg\r\n    class=\"divider2\"\r\n    width=\"950\"\r\n    height=\"16\"\r\n    viewBox=\"0 0 950 16\"\r\n    fill=\"none\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n  >\r\n    <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n  </svg>\r\n  <div class=\"dashboard-row3\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n      >\r\n      Sinu ettev\u00F5tte rahakordaja:\r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{rk}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--/div-->\r\n<!--br>\r\n<iframe width=\"100%\" height=\"500\" src=\"https://interstat.info/Elujoud/Disain/Florish/florish3.html\"></iframe-->\r\n\r\n</div>\r\n\r\n<!--iframe [src]=\"urlSafe\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe-->", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabele2Component, decorators: [{
            type: Component,
            args: [{ selector: 'tabele2-component', standalone: true, template: "<div class=\"dashboard\">\r\n<div class=\"dashboard-type\">\r\n  <div class=\"dashboard-row\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n      >\r\n        Sinu ettev\u00F5tte l\u00FChiajaliste kohustuste kattekordaja: \r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{lvkk}}</div>\r\n    </div>\r\n  </div>\r\n  <svg\r\n    class=\"divider2\"\r\n    width=\"950\"\r\n    height=\"16\"\r\n    viewBox=\"0 0 950 16\"\r\n    fill=\"none\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n  >\r\n    <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n  </svg>\r\n  <div class=\"dashboard-row2\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n      >\r\n       Sinu ettev\u00F5tte maksev\u00F5ime kordaja:\r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{mvk}}</div>\r\n    </div>\r\n  </div>\r\n  <svg\r\n    class=\"divider2\"\r\n    width=\"950\"\r\n    height=\"16\"\r\n    viewBox=\"0 0 950 16\"\r\n    fill=\"none\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n  >\r\n    <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n  </svg>\r\n  <div class=\"dashboard-row3\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n      >\r\n      Sinu ettev\u00F5tte rahakordaja:\r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{rk}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--/div-->\r\n<!--br>\r\n<iframe width=\"100%\" height=\"500\" src=\"https://interstat.info/Elujoud/Disain/Florish/florish3.html\"></iframe-->\r\n\r\n</div>\r\n\r\n<!--iframe [src]=\"urlSafe\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe-->", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }]
        }], ctorParameters: () => [] });

//import { products } from '../products';
class Sekt2Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt2Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekt2Component, isStandalone: true, selector: "sekt2-component", ngImport: i0, template: "<tabele2-component></tabele2-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/sektmaks.html\"></iframe>", styles: [""], dependencies: [{ kind: "component", type: Tabele2Component, selector: "tabele2-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt2Component, decorators: [{
            type: Component,
            args: [{ selector: 'sekt2-component', standalone: true, imports: [Tabele2Component], template: "<tabele2-component></tabele2-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/sektmaks.html\"></iframe>" }]
        }] });

//import { products } from '../products';
class Sekt2aComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt2aComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekt2aComponent, isStandalone: true, selector: "sekt2a-component", ngImport: i0, template: "<tabele2-component></tabele2-component>\r\n<br>\r\n<p>ALTERNATIIV SEKTORI MAKSEV\u00D5IMELE</p>\r\n", styles: [""], dependencies: [{ kind: "component", type: Tabele2Component, selector: "tabele2-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt2aComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sekt2a-component', standalone: true, imports: [Tabele2Component], template: "<tabele2-component></tabele2-component>\r\n<br>\r\n<p>ALTERNATIIV SEKTORI MAKSEV\u00D5IMELE</p>\r\n" }]
        }] });

//import { products } from '../products';
class Tabele3Component {
    constructor() {
        this.vk = Math.round((xtee.VK) * 100) / 100;
        //this.vk = xtee.VK;
        this.kos = Math.round((xtee.KOS) * 100) / 100;
        //this.kos = xtee.KOS;
        this.ikk = Math.round((xtee.IKK) * 100) / 100;
        //this.ikk = xtee.IKK;
        this.aasta = xtee.prognAasta;
        this.aastax = this.aasta.replaceAll('"', "");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabele3Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Tabele3Component, isStandalone: true, selector: "tabele3-component", ngImport: i0, template: "<div class=\"dashboard\">\r\n<div class=\"dashboard-type\">\r\n  <div class=\"dashboard-row\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n      >\r\n        Sinu ettev\u00F5tte v\u00F5lakordaja: \r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{vk}}</div>\r\n    </div>\r\n  </div>\r\n  <svg\r\n    class=\"divider2\"\r\n    width=\"950\"\r\n    height=\"16\"\r\n    viewBox=\"0 0 950 16\"\r\n    fill=\"none\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n  >\r\n    <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n  </svg>\r\n  <div class=\"dashboard-row2\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n      >\r\n       Sinu ettev\u00F5tte kohustuste ja omakapitali suhe:\r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{kos}}</div>\r\n    </div>\r\n  </div>\r\n  <svg\r\n    class=\"divider2\"\r\n    width=\"950\"\r\n    height=\"16\"\r\n    viewBox=\"0 0 950 16\"\r\n    fill=\"none\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n  >\r\n    <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n  </svg>\r\n  <div class=\"dashboard-row3\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n      >\r\n      Sinu ettev\u00F5tte intresside kattekordaja:\r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{ikk}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--/div-->\r\n<!--br>\r\n<iframe width=\"100%\" height=\"500\" src=\"https://interstat.info/Elujoud/Disain/Florish/florish3.html\"></iframe-->\r\n\r\n</div>\r\n\r\n<!--iframe [src]=\"urlSafe\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe-->", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabele3Component, decorators: [{
            type: Component,
            args: [{ selector: 'tabele3-component', standalone: true, template: "<div class=\"dashboard\">\r\n<div class=\"dashboard-type\">\r\n  <div class=\"dashboard-row\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n      >\r\n        Sinu ettev\u00F5tte v\u00F5lakordaja: \r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{vk}}</div>\r\n    </div>\r\n  </div>\r\n  <svg\r\n    class=\"divider2\"\r\n    width=\"950\"\r\n    height=\"16\"\r\n    viewBox=\"0 0 950 16\"\r\n    fill=\"none\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n  >\r\n    <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n  </svg>\r\n  <div class=\"dashboard-row2\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n      >\r\n       Sinu ettev\u00F5tte kohustuste ja omakapitali suhe:\r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{kos}}</div>\r\n    </div>\r\n  </div>\r\n  <svg\r\n    class=\"divider2\"\r\n    width=\"950\"\r\n    height=\"16\"\r\n    viewBox=\"0 0 950 16\"\r\n    fill=\"none\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n  >\r\n    <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n  </svg>\r\n  <div class=\"dashboard-row3\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n      >\r\n      Sinu ettev\u00F5tte intresside kattekordaja:\r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{ikk}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--/div-->\r\n<!--br>\r\n<iframe width=\"100%\" height=\"500\" src=\"https://interstat.info/Elujoud/Disain/Florish/florish3.html\"></iframe-->\r\n\r\n</div>\r\n\r\n<!--iframe [src]=\"urlSafe\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe-->", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }]
        }], ctorParameters: () => [] });

//import { products } from '../products';
class Sekt3Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt3Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekt3Component, isStandalone: true, selector: "sekt3-component", ngImport: i0, template: "<tabele3-component></tabele3-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"780\" src=\"http://185.174.163.35/flourish/sektvoim.html\"></iframe>", styles: [""], dependencies: [{ kind: "component", type: Tabele3Component, selector: "tabele3-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt3Component, decorators: [{
            type: Component,
            args: [{ selector: 'sekt3-component', standalone: true, imports: [Tabele3Component], template: "<tabele3-component></tabele3-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"780\" src=\"http://185.174.163.35/flourish/sektvoim.html\"></iframe>" }]
        }] });

//import { products } from '../products';
class Sekt3aComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt3aComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekt3aComponent, isStandalone: true, selector: "sekt3a-component", ngImport: i0, template: "<tabele3-component></tabele3-component>\r\n<br>\r\n<p>ALTERNATIIV SEKTORI FINANTSV\u00D5IMENDUSELE</p>", styles: [""], dependencies: [{ kind: "component", type: Tabele3Component, selector: "tabele3-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt3aComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sekt3a-component', standalone: true, imports: [Tabele3Component], template: "<tabele3-component></tabele3-component>\r\n<br>\r\n<p>ALTERNATIIV SEKTORI FINANTSV\u00D5IMENDUSELE</p>" }]
        }] });

//import { products } from '../products';
class Tabele4Component {
    constructor() {
        this.roe = Math.round((xtee.ROE) * 100) / 100;
        //this.roe = xtee.ROE;
        this.roa = Math.round((xtee.ROA) * 100) / 100;
        //this.roa = xtee.ROA;
        this.pkm = Math.round((xtee.PKM) * 100) / 100;
        //this.pkm = xtee.PKM;
        this.akm = Math.round((xtee.AKM) * 100) / 100;
        //this.akm = xtee.AKM;
        this.aasta = xtee.prognAasta;
        this.aastax = this.aasta.replaceAll('"', "");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabele4Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Tabele4Component, isStandalone: true, selector: "tabele4-component", ngImport: i0, template: "<div class=\"dashboard\">\r\n  <div class=\"dashboard-type\">\r\n    <div class=\"dashboard-row\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n          Sinu ettev\u00F5tte omakapitali puhasrentaablus (ROE): \r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{roe}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row2\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n         Sinu ettev\u00F5tte varade puhasrentaablus (ROA):\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{roa}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row3\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Sinu ettev\u00F5tte k\u00E4ibe puhasrentaablus:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{pkm}}</div>\r\n      </div>\r\n    </div>\r\n  \r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n  \r\n    <div class=\"dashboard-row3\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n      >\r\n      Sinu ettev\u00F5tte k\u00E4ibe \u00E4rirentaablus:\r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{akm}}</div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  </div>\r\n  <!--/div-->\r\n  <!--br>\r\n  <iframe width=\"100%\" height=\"500\" src=\"https://interstat.info/Elujoud/Disain/Florish/florish3.html\"></iframe-->\r\n  \r\n  </div>\r\n  \r\n  <!--iframe [src]=\"urlSafe\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe-->", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabele4Component, decorators: [{
            type: Component,
            args: [{ selector: 'tabele4-component', standalone: true, template: "<div class=\"dashboard\">\r\n  <div class=\"dashboard-type\">\r\n    <div class=\"dashboard-row\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n          Sinu ettev\u00F5tte omakapitali puhasrentaablus (ROE): \r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{roe}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row2\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus\"\r\n        >\r\n         Sinu ettev\u00F5tte varade puhasrentaablus (ROA):\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{roa}}</div>\r\n      </div>\r\n    </div>\r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n    <div class=\"dashboard-row3\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n        >\r\n        Sinu ettev\u00F5tte k\u00E4ibe puhasrentaablus:\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"label\">{{aastax}}</div>\r\n        <div class=\"content\">{{pkm}}</div>\r\n      </div>\r\n    </div>\r\n  \r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n  \r\n    <div class=\"dashboard-row3\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus\"\r\n      >\r\n      Sinu ettev\u00F5tte k\u00E4ibe \u00E4rirentaablus:\r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{akm}}</div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  </div>\r\n  <!--/div-->\r\n  <!--br>\r\n  <iframe width=\"100%\" height=\"500\" src=\"https://interstat.info/Elujoud/Disain/Florish/florish3.html\"></iframe-->\r\n  \r\n  </div>\r\n  \r\n  <!--iframe [src]=\"urlSafe\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe-->", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }]
        }], ctorParameters: () => [] });

//import { products } from '../products';
class Sekt4Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt4Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekt4Component, isStandalone: true, selector: "sekt4-component", ngImport: i0, template: "<tabele4-component></tabele4-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/sekttasuv.html\"></iframe>", styles: [""], dependencies: [{ kind: "component", type: Tabele4Component, selector: "tabele4-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt4Component, decorators: [{
            type: Component,
            args: [{ selector: 'sekt4-component', standalone: true, imports: [Tabele4Component], template: "<tabele4-component></tabele4-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/sekttasuv.html\"></iframe>" }]
        }] });

//import { products } from '../products';
class Sekt4aComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt4aComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekt4aComponent, isStandalone: true, selector: "sekt4a-component", ngImport: i0, template: "<tabele4-component></tabele4-component>\r\n<br>\r\n<p>ALTERNATIIV SEKTORI TASUVUSELE</p>", styles: [""], dependencies: [{ kind: "component", type: Tabele4Component, selector: "tabele4-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt4aComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sekt4a-component', standalone: true, imports: [Tabele4Component], template: "<tabele4-component></tabele4-component>\r\n<br>\r\n<p>ALTERNATIIV SEKTORI TASUVUSELE</p>" }]
        }] });

//import { products } from '../products';
class Tabele5Component {
    constructor() {
        this.tjt = Math.round((xtee.TJT) * 100) / 100;
        //this.tjt = xtee.TJT;
        this.aasta = xtee.prognAasta;
        this.aastax = this.aasta.replaceAll('"', "");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabele5Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Tabele5Component, isStandalone: true, selector: "tabele5-component", ngImport: i0, template: "<div class=\"dashboard\">\r\n<div class=\"dashboard-type\">\r\n  <div class=\"dashboard-row\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n      >\r\n        Sinu ettev\u00F5tte t\u00F6\u00F6j\u00F5u tootlikkus: \r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{tjt}}</div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n</div>\r\n<!--/div-->\r\n<!--br>\r\n<iframe width=\"100%\" height=\"500\" src=\"https://interstat.info/Elujoud/Disain/Florish/florish3.html\"></iframe-->\r\n\r\n</div>\r\n\r\n<!--iframe [src]=\"urlSafe\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe-->", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Tabele5Component, decorators: [{
            type: Component,
            args: [{ selector: 'tabele5-component', standalone: true, template: "<div class=\"dashboard\">\r\n<div class=\"dashboard-type\">\r\n  <div class=\"dashboard-row\">\r\n    <div class=\"dashboard-row-item\">\r\n      <div\r\n        class=\"mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus\"\r\n      >\r\n        Sinu ettev\u00F5tte t\u00F6\u00F6j\u00F5u tootlikkus: \r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-row-item2\">\r\n      <div class=\"label\">{{aastax}}</div>\r\n      <div class=\"content\">{{tjt}}</div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n</div>\r\n<!--/div-->\r\n<!--br>\r\n<iframe width=\"100%\" height=\"500\" src=\"https://interstat.info/Elujoud/Disain/Florish/florish3.html\"></iframe-->\r\n\r\n</div>\r\n\r\n<!--iframe [src]=\"urlSafe\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe-->", styles: [".dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 26px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:236px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:25px;line-height:150%;font-weight:700;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-ttega-samas-suuruses-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }]
        }], ctorParameters: () => [] });

//import { products } from '../products';
class Sekt5Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt5Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekt5Component, isStandalone: true, selector: "sekt5-component", ngImport: i0, template: "<tabele5-component></tabele5-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"750\" src=\"http://185.174.163.35/flourish/sekttoojoud.html\"></iframe>", styles: [""], dependencies: [{ kind: "component", type: Tabele5Component, selector: "tabele5-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt5Component, decorators: [{
            type: Component,
            args: [{ selector: 'sekt5-component', standalone: true, imports: [Tabele5Component], template: "<tabele5-component></tabele5-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"750\" src=\"http://185.174.163.35/flourish/sekttoojoud.html\"></iframe>" }]
        }] });

//import { products } from '../products';
class Sekt5aComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt5aComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekt5aComponent, isStandalone: true, selector: "sekt5a-component", ngImport: i0, template: "<tabele5-component></tabele5-component>\r\n<br>\r\n<p>ALTERNATIIV SEKTORI T\u00D6\u00D6J\u00D5ULE</p>", styles: [""], dependencies: [{ kind: "component", type: Tabele5Component, selector: "tabele5-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekt5aComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sekt5a-component', standalone: true, imports: [Tabele5Component], template: "<tabele5-component></tabele5-component>\r\n<br>\r\n<p>ALTERNATIIV SEKTORI T\u00D6\u00D6J\u00D5ULE</p>" }]
        }] });

class Varav6Component {
    constructor() {
        this.sections = [
            {
                name: 'Efektiivsus',
                content: 'Content 1'
            },
            {
                name: 'Maksevõime',
                content: '<progn1-component></progn1-component>'
            },
            {
                name: 'Finantsvõimendus',
                content: ''
            },
            {
                name: 'Tasuvus',
                content: ''
            },
            {
                name: 'Tööjõu tootlikkus',
                content: ''
            }
        ];
        this.showComponent1 = false;
        this.showComponent2 = false;
        this.showComponent3 = false;
        this.showComponent4 = false;
        this.showComponent5 = false;
    }
    expand(index) {
        if (this.currentIndex === index) {
            this.currentIndex = null;
            return;
        }
        this.currentIndex = index;
        //alert(this.currentIndex);
        if (this.currentIndex === 0) {
            this.showComponent1 = true;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 1) {
            this.showComponent1 = false;
            this.showComponent2 = true;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 2) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = true;
            this.showComponent4 = false;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 3) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = true;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 4) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = true;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav6Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Varav6Component, isStandalone: true, selector: "varav6", ngImport: i0, template: "<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\nSuhtarvude v\u00F5rdlus tegevussektorite kaupa\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2\">\r\n\r\nAllpool on esitatud suhtarvude anal\u00FC\u00FCs tegevussektorite kaupa. V\u00E4lja toodud on nii ettev\u00F5tte enda suhtarv kui ka suhtarvude mediaanv\u00E4\u00E4rtused k\u00F5igi tegevussektorite arvestuses, mis v\u00F5imaldab n\u00E4ha oma ettev\u00F5tet \u00FCldises v\u00F5rdluses. V\u00F5imalik on n\u00E4ha oma ettev\u00F5tet v\u00F5rrelduna nii sama sektori kui ka teiste sektoritega. Samuti saab omavahel k\u00F5rvutada ka sektoreid.\r\n\r\n\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <sekt1a-component *ngIf=\"showComponent1\"></sekt1a-component>\r\n    <sekt2-component *ngIf=\"showComponent2\"></sekt2-component>\r\n    <sekt3-component *ngIf=\"showComponent3\"></sekt3-component>\r\n    <sekt4-component *ngIf=\"showComponent4\"></sekt4-component>\r\n    <sekt5-component *ngIf=\"showComponent5\"></sekt5-component>\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: Sekt1aComponent, selector: "sekt1a-component" }, { kind: "component", type: Sekt2Component, selector: "sekt2-component" }, { kind: "component", type: Sekt3Component, selector: "sekt3-component" }, { kind: "component", type: Sekt4Component, selector: "sekt4-component" }, { kind: "component", type: Sekt5Component, selector: "sekt5-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav6Component, decorators: [{
            type: Component,
            args: [{ selector: 'varav6', standalone: true, imports: [CommonModule, Sekt1Component, Sekt1aComponent, Sekt2Component, Sekt2aComponent, Sekt3Component, Sekt3aComponent, Sekt4Component, Sekt4aComponent, Sekt5Component, Sekt5aComponent], template: "<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\nSuhtarvude v\u00F5rdlus tegevussektorite kaupa\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2\">\r\n\r\nAllpool on esitatud suhtarvude anal\u00FC\u00FCs tegevussektorite kaupa. V\u00E4lja toodud on nii ettev\u00F5tte enda suhtarv kui ka suhtarvude mediaanv\u00E4\u00E4rtused k\u00F5igi tegevussektorite arvestuses, mis v\u00F5imaldab n\u00E4ha oma ettev\u00F5tet \u00FCldises v\u00F5rdluses. V\u00F5imalik on n\u00E4ha oma ettev\u00F5tet v\u00F5rrelduna nii sama sektori kui ka teiste sektoritega. Samuti saab omavahel k\u00F5rvutada ka sektoreid.\r\n\r\n\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <sekt1a-component *ngIf=\"showComponent1\"></sekt1a-component>\r\n    <sekt2-component *ngIf=\"showComponent2\"></sekt2-component>\r\n    <sekt3-component *ngIf=\"showComponent3\"></sekt3-component>\r\n    <sekt4-component *ngIf=\"showComponent4\"></sekt4-component>\r\n    <sekt5-component *ngIf=\"showComponent5\"></sekt5-component>\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"] }]
        }] });

//import { products } from '../products';
class Sektp1Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp1Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sektp1Component, isStandalone: true, selector: "sektp1-component", ngImport: i0, template: "<tabele1-component></tabele1-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/valdefekt.html\"></iframe>", styles: [""], dependencies: [{ kind: "component", type: Tabele1Component, selector: "tabele1-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp1Component, decorators: [{
            type: Component,
            args: [{ selector: 'sektp1-component', standalone: true, imports: [Tabele1Component], template: "<tabele1-component></tabele1-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/valdefekt.html\"></iframe>" }]
        }] });

//import { products } from '../products';
class Sektp1aComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp1aComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sektp1aComponent, isStandalone: true, selector: "sektp1a-component", ngImport: i0, template: "<tabele1-component></tabele1-component>\r\n<br>\r\n<p>ALTERNATIIV OMAVALITSUSE EFEKTIIVSUSELE</p>", styles: [""], dependencies: [{ kind: "component", type: Tabele1Component, selector: "tabele1-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp1aComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sektp1a-component', standalone: true, imports: [Tabele1Component], template: "<tabele1-component></tabele1-component>\r\n<br>\r\n<p>ALTERNATIIV OMAVALITSUSE EFEKTIIVSUSELE</p>" }]
        }] });

//import { products } from '../products';
class Sektp2Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp2Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sektp2Component, isStandalone: true, selector: "sektp2-component", ngImport: i0, template: "<tabele2-component></tabele2-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/valdmaks.html\"></iframe>", styles: [""], dependencies: [{ kind: "component", type: Tabele2Component, selector: "tabele2-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp2Component, decorators: [{
            type: Component,
            args: [{ selector: 'sektp2-component', standalone: true, imports: [Tabele2Component], template: "<tabele2-component></tabele2-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/valdmaks.html\"></iframe>" }]
        }] });

//import { products } from '../products';
class Sektp2aComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp2aComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sektp2aComponent, isStandalone: true, selector: "sektp2a-component", ngImport: i0, template: "<tabele2-component></tabele2-component>\r\n<br>\r\n<p>ALTERNATIIV OMAVALITSUSE MAKSEV\u00D5IMELE</p>", styles: [""], dependencies: [{ kind: "component", type: Tabele2Component, selector: "tabele2-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp2aComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sektp2a-component', standalone: true, imports: [Tabele2Component], template: "<tabele2-component></tabele2-component>\r\n<br>\r\n<p>ALTERNATIIV OMAVALITSUSE MAKSEV\u00D5IMELE</p>" }]
        }] });

//import { products } from '../products';
class Sektp3Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp3Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sektp3Component, isStandalone: true, selector: "sektp3-component", ngImport: i0, template: "<tabele3-component></tabele3-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"800\" src=\"http://185.174.163.35/flourish/valdvoim.html\"></iframe>", styles: [""], dependencies: [{ kind: "component", type: Tabele3Component, selector: "tabele3-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp3Component, decorators: [{
            type: Component,
            args: [{ selector: 'sektp3-component', standalone: true, imports: [Tabele3Component], template: "<tabele3-component></tabele3-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"800\" src=\"http://185.174.163.35/flourish/valdvoim.html\"></iframe>" }]
        }] });

//import { products } from '../products';
class Sektp3aComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp3aComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sektp3aComponent, isStandalone: true, selector: "sektp3a-component", ngImport: i0, template: "<tabele3-component></tabele3-component>\r\n<br>\r\n<p>ALTERNATIIV OMAVALITSUSE FINANTSV\u00D5IMENDUSELE</p>", styles: [""], dependencies: [{ kind: "component", type: Tabele3Component, selector: "tabele3-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp3aComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sektp3a-component', standalone: true, imports: [Tabele3Component], template: "<tabele3-component></tabele3-component>\r\n<br>\r\n<p>ALTERNATIIV OMAVALITSUSE FINANTSV\u00D5IMENDUSELE</p>" }]
        }] });

//import { products } from '../products';
class Sektp4Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp4Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sektp4Component, isStandalone: true, selector: "sektp4-component", ngImport: i0, template: "<tabele4-component></tabele4-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/valdtasuv.html\"></iframe>", styles: [""], dependencies: [{ kind: "component", type: Tabele4Component, selector: "tabele4-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp4Component, decorators: [{
            type: Component,
            args: [{ selector: 'sektp4-component', standalone: true, imports: [Tabele4Component], template: "<tabele4-component></tabele4-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/valdtasuv.html\"></iframe>" }]
        }] });

//import { products } from '../products';
class Sektp4aComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp4aComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sektp4aComponent, isStandalone: true, selector: "sektp4a-component", ngImport: i0, template: "<tabele4-component></tabele4-component>\r\n<br>\r\n<p>ALTERNATIIV OMAVALITSUSE TASUVUSELE</p>", styles: [""], dependencies: [{ kind: "component", type: Tabele4Component, selector: "tabele4-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp4aComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sektp4a-component', standalone: true, imports: [Tabele4Component], template: "<tabele4-component></tabele4-component>\r\n<br>\r\n<p>ALTERNATIIV OMAVALITSUSE TASUVUSELE</p>" }]
        }] });

//import { products } from '../products';
class Sektp5Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp5Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sektp5Component, isStandalone: true, selector: "sektp5-component", ngImport: i0, template: "<tabele5-component></tabele5-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"750\" src=\"http://185.174.163.35/flourish/valdtoojoud.html\"></iframe>", styles: [""], dependencies: [{ kind: "component", type: Tabele5Component, selector: "tabele5-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp5Component, decorators: [{
            type: Component,
            args: [{ selector: 'sektp5-component', standalone: true, imports: [Tabele5Component], template: "<tabele5-component></tabele5-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"750\" src=\"http://185.174.163.35/flourish/valdtoojoud.html\"></iframe>" }]
        }] });

//import { products } from '../products';
class Sektp5aComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp5aComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sektp5aComponent, isStandalone: true, selector: "sektp5a-component", ngImport: i0, template: "<tabele5-component></tabele5-component>\r\n<br>\r\n<p>ALTERNATIIV OMAVALITSUSE T\u00D6\u00D6J\u00D5ULE</p>", styles: [""], dependencies: [{ kind: "component", type: Tabele5Component, selector: "tabele5-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sektp5aComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sektp5a-component', standalone: true, imports: [Tabele5Component], template: "<tabele5-component></tabele5-component>\r\n<br>\r\n<p>ALTERNATIIV OMAVALITSUSE T\u00D6\u00D6J\u00D5ULE</p>" }]
        }] });

class Varav7Component {
    constructor() {
        this.sections = [
            {
                name: 'Efektiivsus',
                content: 'Content 1'
            },
            {
                name: 'Maksevõime',
                content: '<progn1-component></progn1-component>'
            },
            {
                name: 'Finantsvõimendus',
                content: ''
            },
            {
                name: 'Tasuvus',
                content: ''
            },
            {
                name: 'Tööjõu tootlikkus',
                content: ''
            }
        ];
        this.showComponent1 = false;
        this.showComponent2 = false;
        this.showComponent3 = false;
        this.showComponent4 = false;
        this.showComponent5 = false;
    }
    expand(index) {
        if (this.currentIndex === index) {
            this.currentIndex = null;
            return;
        }
        this.currentIndex = index;
        //alert(this.currentIndex);
        if (this.currentIndex === 0) {
            this.showComponent1 = true;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 1) {
            this.showComponent1 = false;
            this.showComponent2 = true;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 2) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = true;
            this.showComponent4 = false;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 3) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = true;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 4) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = true;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav7Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Varav7Component, isStandalone: true, selector: "varav7", ngImport: i0, template: "<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\n  Suhtarvude v\u00F5rdlus kohalike omavalitsus\u00FCksuste kaupa\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2\">\r\n\r\n  Allpool on esitatud suhtarvude anal\u00FC\u00FCs kohalike omavalitsus\u00FCksuste kaupa. V\u00E4lja toodud on nii ettev\u00F5tte enda suhtarv kui ka suhtarvude mediaanv\u00E4\u00E4rtused k\u00F5igis kohalikes omavalitsus\u00FCksustes, mis v\u00F5imaldab asetada ettev\u00F5tet \u00FCldisesse v\u00F5rdlusesse. V\u00F5imalik on n\u00E4ha nii oma asukoha kui ka teiste piirkondade v\u00F5rdlust. Samuti saab omavahel k\u00F5rvutada ka piirkondi. \r\n\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <sektp1-component *ngIf=\"showComponent1\"></sektp1-component>\r\n    <sektp2-component *ngIf=\"showComponent2\"></sektp2-component>\r\n    <sektp3-component *ngIf=\"showComponent3\"></sektp3-component>\r\n    <sektp4-component *ngIf=\"showComponent4\"></sektp4-component>\r\n    <sektp5-component *ngIf=\"showComponent5\"></sektp5-component>\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: Sektp1Component, selector: "sektp1-component" }, { kind: "component", type: Sektp2Component, selector: "sektp2-component" }, { kind: "component", type: Sektp3Component, selector: "sektp3-component" }, { kind: "component", type: Sektp4Component, selector: "sektp4-component" }, { kind: "component", type: Sektp5Component, selector: "sektp5-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav7Component, decorators: [{
            type: Component,
            args: [{ selector: 'varav7', standalone: true, imports: [CommonModule, Sektp1Component, Sektp1aComponent, Sektp2Component, Sektp2aComponent, Sektp3Component, Sektp3aComponent, Sektp4Component, Sektp4aComponent, Sektp5Component, Sektp5aComponent], template: "<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\n  Suhtarvude v\u00F5rdlus kohalike omavalitsus\u00FCksuste kaupa\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2\">\r\n\r\n  Allpool on esitatud suhtarvude anal\u00FC\u00FCs kohalike omavalitsus\u00FCksuste kaupa. V\u00E4lja toodud on nii ettev\u00F5tte enda suhtarv kui ka suhtarvude mediaanv\u00E4\u00E4rtused k\u00F5igis kohalikes omavalitsus\u00FCksustes, mis v\u00F5imaldab asetada ettev\u00F5tet \u00FCldisesse v\u00F5rdlusesse. V\u00F5imalik on n\u00E4ha nii oma asukoha kui ka teiste piirkondade v\u00F5rdlust. Samuti saab omavahel k\u00F5rvutada ka piirkondi. \r\n\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <sektp1-component *ngIf=\"showComponent1\"></sektp1-component>\r\n    <sektp2-component *ngIf=\"showComponent2\"></sektp2-component>\r\n    <sektp3-component *ngIf=\"showComponent3\"></sektp3-component>\r\n    <sektp4-component *ngIf=\"showComponent4\"></sektp4-component>\r\n    <sektp5-component *ngIf=\"showComponent5\"></sektp5-component>\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"] }]
        }] });

//import { products } from '../products';
class Sekts1Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts1Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekts1Component, isStandalone: true, selector: "sekts1-component", ngImport: i0, template: "<tabele1-component></tabele1-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/suurefekt.html\"></iframe>", styles: [""], dependencies: [{ kind: "component", type: Tabele1Component, selector: "tabele1-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts1Component, decorators: [{
            type: Component,
            args: [{ selector: 'sekts1-component', standalone: true, imports: [Tabele1Component], template: "<tabele1-component></tabele1-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/suurefekt.html\"></iframe>" }]
        }] });

//import { products } from '../products';
class Sekts1aComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts1aComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekts1aComponent, isStandalone: true, selector: "sekts1a-component", ngImport: i0, template: "<tabele1-component></tabele1-component>\r\n<br>\r\n<p>ALTERNATIIV SUURUSKLASSI EFEKTIIVSUSELE</p>", styles: [""], dependencies: [{ kind: "component", type: Tabele1Component, selector: "tabele1-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts1aComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sekts1a-component', standalone: true, imports: [Tabele1Component], template: "<tabele1-component></tabele1-component>\r\n<br>\r\n<p>ALTERNATIIV SUURUSKLASSI EFEKTIIVSUSELE</p>" }]
        }] });

//import { products } from '../products';
class Sekts2Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts2Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekts2Component, isStandalone: true, selector: "sekts2-component", ngImport: i0, template: "<tabele2-component></tabele2-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/suurmaks.html\"></iframe>", styles: [""], dependencies: [{ kind: "component", type: Tabele2Component, selector: "tabele2-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts2Component, decorators: [{
            type: Component,
            args: [{ selector: 'sekts2-component', standalone: true, imports: [Tabele2Component], template: "<tabele2-component></tabele2-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/suurmaks.html\"></iframe>" }]
        }] });

//import { products } from '../products';
class Sekts2aComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts2aComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekts2aComponent, isStandalone: true, selector: "sekts2a-component", ngImport: i0, template: "<tabele2-component></tabele2-component>\r\n<br>\r\n<p>ALTERNATIIV SUURUSKLASSI MAKSEV\u00D5IMELE</p>", styles: [""], dependencies: [{ kind: "component", type: Tabele2Component, selector: "tabele2-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts2aComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sekts2a-component', standalone: true, imports: [Tabele2Component], template: "<tabele2-component></tabele2-component>\r\n<br>\r\n<p>ALTERNATIIV SUURUSKLASSI MAKSEV\u00D5IMELE</p>" }]
        }] });

//import { products } from '../products';
class Sekts3Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts3Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekts3Component, isStandalone: true, selector: "sekts3-component", ngImport: i0, template: "<tabele3-component></tabele3-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"800\" src=\"http://185.174.163.35/flourish/suurvoim.html\"></iframe>", styles: [""], dependencies: [{ kind: "component", type: Tabele3Component, selector: "tabele3-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts3Component, decorators: [{
            type: Component,
            args: [{ selector: 'sekts3-component', standalone: true, imports: [Tabele3Component], template: "<tabele3-component></tabele3-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"800\" src=\"http://185.174.163.35/flourish/suurvoim.html\"></iframe>" }]
        }] });

//import { products } from '../products';
class Sekts3aComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts3aComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekts3aComponent, isStandalone: true, selector: "sekts3a-component", ngImport: i0, template: "<tabele3-component></tabele3-component>\r\n<br>\r\n<p>ALTERNATIIV SUURUSKLASSI FINANTSV\u00D5IMENDUSELE</p>", styles: [""], dependencies: [{ kind: "component", type: Tabele3Component, selector: "tabele3-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts3aComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sekts3a-component', standalone: true, imports: [Tabele3Component], template: "<tabele3-component></tabele3-component>\r\n<br>\r\n<p>ALTERNATIIV SUURUSKLASSI FINANTSV\u00D5IMENDUSELE</p>" }]
        }] });

//import { products } from '../products';
class Sekts4Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts4Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekts4Component, isStandalone: true, selector: "sekts4-component", ngImport: i0, template: "<tabele4-component></tabele4-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/suurtasuv.html\"></iframe>", styles: [""], dependencies: [{ kind: "component", type: Tabele4Component, selector: "tabele4-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts4Component, decorators: [{
            type: Component,
            args: [{ selector: 'sekts4-component', standalone: true, imports: [Tabele4Component], template: "<tabele4-component></tabele4-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"760\" src=\"http://185.174.163.35/flourish/suurtasuv.html\"></iframe>" }]
        }] });

//import { products } from '../products';
class Sekts4aComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts4aComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekts4aComponent, isStandalone: true, selector: "sekts4a-component", ngImport: i0, template: "<tabele4-component></tabele4-component>\r\n<br>\r\n<p>ALTERNATIIV SUURUSKLASSI TASUVUSELE</p>", styles: [""], dependencies: [{ kind: "component", type: Tabele4Component, selector: "tabele4-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts4aComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sekts4a-component', standalone: true, imports: [Tabele4Component], template: "<tabele4-component></tabele4-component>\r\n<br>\r\n<p>ALTERNATIIV SUURUSKLASSI TASUVUSELE</p>" }]
        }] });

//import { products } from '../products';
class Sekts5Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts5Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekts5Component, isStandalone: true, selector: "sekts5-component", ngImport: i0, template: "<tabele5-component></tabele5-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"750\" src=\"http://185.174.163.35/flourish/suurtoojoud.html\"></iframe>", styles: [""], dependencies: [{ kind: "component", type: Tabele5Component, selector: "tabele5-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts5Component, decorators: [{
            type: Component,
            args: [{ selector: 'sekts5-component', standalone: true, imports: [Tabele5Component], template: "<tabele5-component></tabele5-component>\r\n<br>\r\n<iframe width=\"100%\" height=\"750\" src=\"http://185.174.163.35/flourish/suurtoojoud.html\"></iframe>" }]
        }] });

//import { products } from '../products';
class Sekts5aComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts5aComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sekts5aComponent, isStandalone: true, selector: "sekts5a-component", ngImport: i0, template: "<tabele5-component></tabele5-component>\r\n<br>\r\n<p>ALTERNATIIV SUURUSKLASSI T\u00D6\u00D6J\u00D5ULE</p>", styles: [""], dependencies: [{ kind: "component", type: Tabele5Component, selector: "tabele5-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sekts5aComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sekts5a-component', standalone: true, imports: [Tabele5Component], template: "<tabele5-component></tabele5-component>\r\n<br>\r\n<p>ALTERNATIIV SUURUSKLASSI T\u00D6\u00D6J\u00D5ULE</p>" }]
        }] });

class Varav8Component {
    constructor() {
        this.sections = [
            {
                name: 'Efektiivsus',
                content: 'Content 1'
            },
            {
                name: 'Maksevõime',
                content: '<progn1-component></progn1-component>'
            },
            {
                name: 'Finantsvõimendus',
                content: ''
            },
            {
                name: 'Tasuvus',
                content: ''
            },
            {
                name: 'Tööjõu tootlikkus',
                content: ''
            }
        ];
        this.showComponent1 = false;
        this.showComponent2 = false;
        this.showComponent3 = false;
        this.showComponent4 = false;
        this.showComponent5 = false;
    }
    expand(index) {
        if (this.currentIndex === index) {
            this.currentIndex = null;
            return;
        }
        this.currentIndex = index;
        //alert(this.currentIndex);
        if (this.currentIndex === 0) {
            this.showComponent1 = true;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 1) {
            this.showComponent1 = false;
            this.showComponent2 = true;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 2) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = true;
            this.showComponent4 = false;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 3) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = true;
            this.showComponent5 = false;
        }
        else if (this.currentIndex === 4) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = true;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav8Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Varav8Component, isStandalone: true, selector: "varav8", ngImport: i0, template: "<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\n  Suhtarvude v\u00F5rdlus suurusklasside kaupa\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2\">\r\n\r\n\r\n  Allpool on esitatud suhtarvude anal\u00FC\u00FCs suurusklasside kaupa. V\u00E4lja toodud on nii ettev\u00F5tte enda suhtarv kui ka suhtarvude mediaanv\u00E4\u00E4rtused k\u00F5igis suurusgruppides, mis v\u00F5imaldab asetada ettev\u00F5tet \u00FCldisesse v\u00F5rdlusesse. V\u00F5imalik on n\u00E4ha ettev\u00F5tet nii oma suurusklassi kui ka teiste suurusklasside v\u00F5rdluses. Samuti saab omavahel k\u00F5rvutada ka suurusklasse.\r\n\r\n\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <sekts1-component *ngIf=\"showComponent1\"></sekts1-component>\r\n    <sekts2-component *ngIf=\"showComponent2\"></sekts2-component>\r\n    <sekts3-component *ngIf=\"showComponent3\"></sekts3-component>\r\n    <sekts4-component *ngIf=\"showComponent4\"></sekts4-component>\r\n    <sekts5-component *ngIf=\"showComponent5\"></sekts5-component>\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: Sekts1Component, selector: "sekts1-component" }, { kind: "component", type: Sekts2Component, selector: "sekts2-component" }, { kind: "component", type: Sekts3Component, selector: "sekts3-component" }, { kind: "component", type: Sekts4Component, selector: "sekts4-component" }, { kind: "component", type: Sekts5Component, selector: "sekts5-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav8Component, decorators: [{
            type: Component,
            args: [{ selector: 'varav8', standalone: true, imports: [CommonModule, Sekts1Component, Sekts1aComponent, Sekts2Component, Sekts2aComponent, Sekts3Component, Sekts3aComponent, Sekts4Component, Sekts4aComponent, Sekts5Component, Sekts5aComponent], template: "<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\n  Suhtarvude v\u00F5rdlus suurusklasside kaupa\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2\">\r\n\r\n\r\n  Allpool on esitatud suhtarvude anal\u00FC\u00FCs suurusklasside kaupa. V\u00E4lja toodud on nii ettev\u00F5tte enda suhtarv kui ka suhtarvude mediaanv\u00E4\u00E4rtused k\u00F5igis suurusgruppides, mis v\u00F5imaldab asetada ettev\u00F5tet \u00FCldisesse v\u00F5rdlusesse. V\u00F5imalik on n\u00E4ha ettev\u00F5tet nii oma suurusklassi kui ka teiste suurusklasside v\u00F5rdluses. Samuti saab omavahel k\u00F5rvutada ka suurusklasse.\r\n\r\n\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <sekts1-component *ngIf=\"showComponent1\"></sekts1-component>\r\n    <sekts2-component *ngIf=\"showComponent2\"></sekts2-component>\r\n    <sekts3-component *ngIf=\"showComponent3\"></sekts3-component>\r\n    <sekts4-component *ngIf=\"showComponent4\"></sekts4-component>\r\n    <sekts5-component *ngIf=\"showComponent5\"></sekts5-component>\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"] }]
        }] });

//import { products } from '../products';
class SoovitusComponent {
    constructor() {
        this.koondSoovitus = '';
        this.koondSoovitusm = '';
        this.koondSoovitusv = '';
        this.koondSoovitust = '';
        this.koondSoovitusj = '';
        this.muutujaBlanco = ' ';
        this.muutujaEfekt = '';
        this.muutujaMaks = 'maksuke';
        this.muutujaVoim = 'voimuke';
        this.muutujaTasuv = 'tasuvuseke';
        this.muutujaToojoud = '';
        this.key = 'efektMadal';
        this.localValue = '';
        this.key2 = 'efektKeskmine';
        this.key3 = 'efektKorge';
        this.keym = 'makseMadal';
        this.localValuem = '';
        this.key2m = 'makseKeskmine';
        this.key3m = 'makseKorge';
        this.keyf = 'voimMadal';
        this.localValuef = '';
        this.key2f = 'voimKeskmine';
        this.key3f = 'voimKorge';
        this.keyt = 'tasuvMadal';
        this.localValuet = '';
        this.key2t = 'tasuvKeskmine';
        this.key3t = 'tasuvKorge';
        this.keyj = 'toojoudMadal';
        this.localValuej = '';
        this.key2j = 'toojoudKeskmine';
        this.key3j = 'toojoudKorge';
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
    }
    getEfektMadal() {
        this.madalString = localStorage.getItem(this.key);
        this.madalNumber = Number(this.madalString);
        return this.madalNumber;
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
    soovitusTekst() {
        //this.getEfektMadal();
        //this.getEfektKeskmine();
        //this.getEfektKorge();
        if (this.effmadalNumber > this.effkeskmineNumber && this.effmadalNumber > this.effkorgeNumber) {
            this.muutujaEfekt = 'Efektiivsus on väike, seega on oluline kasvatada müügitulu osakaalu varades. Praegu kasutatakse varasse investeeritud vahendeid ebaefektiivselt.';
        }
        else if (this.effkeskmineNumber > this.effmadalNumber && this.effkeskmineNumber > this.effkorgeNumber) {
            this.muutujaEfekt = 'Efektiivsus on mõõdukas, abi oleks sellest, kui müügitulu osakaal varades kasvaks, kuid see ei ole ilmtingimata vajalik.';
            //this.muutuja2 = 'sama efektiivselt';
        }
        else if (this.effkorgeNumber > this.effmadalNumber && this.effkorgeNumber > this.effkeskmineNumber) {
            this.muutujaEfekt = 'Efektiivsusega on praeguse hinnangu kohaselt kõik korras; see tähendab, et varasse investeeritud vahendeid kasutatakse efektiivselt.';
            //this.muutuja2 = 'efektiivsemalt';
        }
        else if (this.effkeskmineNumber === this.effmadalNumber && this.effkeskmineNumber === this.effkorgeNumber) {
            this.muutujaEfekt = 'Efektiivsus on mõõdukas, abi oleks sellest, kui müügitulu osakaal varades kasvaks, kuid see ei ole ilmtingimata vajalik.';
            //this.muutuja2 = 'sama efektiivselt';
        }
        this.koondSoovitus = this.muutujaEfekt;
        return this.koondSoovitus;
    }
    getMakseMadal() {
        this.madalStringm = localStorage.getItem(this.keym);
        this.madalNumberm = Number(this.madalStringm);
        return this.madalNumberm;
    }
    getMakseKeskmine() {
        this.keskmineStringm = localStorage.getItem(this.key2m);
        this.keskmineNumberm = Number(this.keskmineStringm);
        return this.keskmineNumberm;
    }
    getMakseKorge() {
        this.korgeStringm = localStorage.getItem(this.key3m);
        this.korgeNumberm = Number(this.korgeStringm);
        return this.korgeNumberm;
    }
    soovitusTekstm() {
        //this.getMakseMadal();
        //this.getMakseKeskmine();
        //this.getMakseKorge();
        if (this.maksmadalNumber > this.makskeskmineNumber && this.maksmadalNumber > this.makskorgeNumber) {
            this.muutujaMaks = 'Maksevõime on väike, ettevõttel ei ole piisavalt raha võlgnevuste tasumiseks. Oluline oleks suurendada likviidse vara suhtelist mahtu lühiajaliste kohustustega võrreldes.';
        }
        else if (this.makskeskmineNumber > this.maksmadalNumber && this.makskeskmineNumber > this.makskorgeNumber) {
            this.muutujaMaks = 'Maksevõime on mõõdukas, ettevõte tuleb oma võlgnevuste tasumisega toime, kuid soovitame mõelda likviidse vara kasvatamisele.';
            //this.muutuja2 = 'sama efektiivselt';
        }
        else if (this.makskorgeNumber > this.maksmadalNumber && this.makskorgeNumber > this.makskeskmineNumber) {
            this.muutujaMaks = 'Ettevõttel ei ole maksevõimega probleeme, lühiajalise kohustuste tasumisega tullakse edukalt toime. Maksevõime muudatusi ette võtta ei ole vaja.';
            //this.muutuja2 = 'efektiivsemalt';
        }
        else if (this.makskeskmineNumber === this.maksmadalNumber && this.makskeskmineNumber === this.makskorgeNumber) {
            this.muutujaMaks = 'Maksevõime on mõõdukas, ettevõte tuleb oma võlgnevuste tasumisega toime, kuid soovitame mõelda likviidse vara kasvatamisele.';
            //this.muutuja2 = 'sama efektiivselt';
        }
        this.koondSoovitusm = this.muutujaBlanco + this.muutujaMaks;
        return this.koondSoovitusm;
    }
    getVoimMadal() {
        this.madalStringf = localStorage.getItem(this.keyf);
        this.madalNumberf = Number(this.madalStringf);
        return this.madalNumberf;
    }
    getVoimKeskmine() {
        this.keskmineStringf = localStorage.getItem(this.key2f);
        this.keskmineNumberf = Number(this.keskmineStringf);
        return this.keskmineNumberf;
    }
    getVoimKorge() {
        this.korgeStringf = localStorage.getItem(this.key3f);
        this.korgeNumberf = Number(this.korgeStringf);
        return this.korgeNumberf;
    }
    finantsvoimendusTekst() {
        //this.getVoimMadal();
        //this.getVoimKeskmine();
        //this.getVoimKorge();
        if (this.voimmadalNumber > this.voimkeskmineNumber && this.voimmadalNumber > this.voimkorgeNumber) {
            this.muutujaVoim = 'Ettevõtte kohustuste maht on suur, võib-olla kriitiliselt suur. See tähendab, et kohustuste katmisel võib probleeme tekkida. Soovitame mõelda sellele, kuidas kasvatada kapitali ja likviidsust, et kohustustega toime tulla.';
            //this.muutuja2 = 'ohustatud';
        }
        else if (this.voimkeskmineNumber > this.voimmadalNumber && this.voimkeskmineNumber > this.voimkorgeNumber) {
            this.muutujaVoim = 'Ettevõtte kohustuste maht on mõõdukas, puudub otsene oht kohustustega hätta jääda. Siiski tuleb lisalaenu või muude uute rahaliste kohustuste võtmisel olla väga ettevaatlik.';
            //this.muutuja2 = 'keskpärane';
        }
        else if (this.voimkorgeNumber > this.voimmadalNumber && this.voimkorgeNumber > this.voimkeskmineNumber) {
            this.muutujaVoim = 'Ettevõttel on vähe kohustusi, nende katmisega tullakse edukalt toime. Olemas on reserv selleks, et ettevõte saaks kasutada täiendavat finantsvõimendust äritegevuse kasvatamiseks.';
            //this.muutuja2 = 'tagatud';
        }
        else if (this.voimkeskmineNumber === this.voimmadalNumber && this.voimkeskmineNumber === this.voimkorgeNumber) {
            this.muutujaVoim = 'Ettevõtte kohustuste maht on mõõdukas, puudub otsene oht kohustustega hätta jääda. Siiski tuleb lisalaenu või muude uute rahaliste kohustuste võtmisel olla väga ettevaatlik.';
            //this.muutuja2 = 'keskpärane';
        }
        this.koondSoovitusv = this.muutujaBlanco + this.muutujaVoim;
        return this.koondSoovitusv;
    }
    getTasuvMadal() {
        this.madalStringt = localStorage.getItem(this.keyt);
        this.madalNumbert = Number(this.madalStringt);
        return this.madalNumbert;
    }
    getTasuvKeskmine() {
        this.keskmineStringt = localStorage.getItem(this.key2t);
        this.keskmineNumbert = Number(this.keskmineStringt);
        return this.keskmineNumbert;
    }
    getTasuvKorge() {
        this.korgeStringt = localStorage.getItem(this.key3t);
        this.korgeNumbert = Number(this.korgeStringt);
        return this.korgeNumbert;
    }
    tasuvusTekst() {
        //this.getTasuvMadal();
        //this.getTasuvKeskmine();
        //this.getTasuvKorge();
        if (this.tasumadalNumber > this.tasukeskmineNumber && this.tasumadalNumber > this.tasukorgeNumber) {
            this.muutujaTasuv = 'Ettevõtte tasuvus on probleemne, ettevõttel ei ole piisavalt käivet, et varadesse investeeritud raha ennast ära tasuks. Oluline on mõelda käibe suurendamise võimalustele või ettevõtte vara vähendamisele.';
            //this.muutuja2 = 'väike';
            //this.muutuja3 = 'väike';
        }
        else if (this.tasukeskmineNumber > this.tasumadalNumber && this.tasukeskmineNumber > this.tasukorgeNumber) {
            this.muutujaTasuv = 'Ettevõtte tasuvus on keskmine, käive võimaldab turul püsida ja vara taastoota, kuid hea oleks mõelda lisaturu peale.';
            //this.muutuja2 = 'keskpärane';
            //this.muutuja3 = 'keskpärane';
        }
        else if (this.tasukorgeNumber > this.tasumadalNumber && this.tasukorgeNumber > this.tasukeskmineNumber) {
            this.muutujaTasuv = 'Ettevõtte tasuvus on hea, ettevõte toob piisavalt raha sisse ja seega on käive tegevusvahenditesse paigutatud raha arvestades piisav.';
            //this.muutuja2 = 'suur';
            //this.muutuja3 = 'suur';
        }
        else if (this.tasukeskmineNumber === this.tasumadalNumber && this.tasukeskmineNumber === this.tasukorgeNumber) {
            this.muutujaTasuv = 'Ettevõtte tasuvus on keskmine, käive võimaldab turul püsida ja vara taastoota, kuid hea oleks mõelda lisaturu peale.';
            //this.muutuja2 = 'keskpärane';
            //this.muutuja3 = 'keskpärane';
        }
        this.koondSoovitust = this.muutujaBlanco + this.muutujaTasuv;
        return this.koondSoovitust;
    }
    getToojoudMadal() {
        this.madalStringj = localStorage.getItem(this.keyj);
        this.madalNumberj = Number(this.madalStringj);
        return this.madalNumberj;
    }
    getToojoudKeskmine() {
        this.keskmineStringj = localStorage.getItem(this.key2j);
        this.keskmineNumberj = Number(this.keskmineStringj);
        return this.keskmineNumberj;
    }
    getToojoudKorge() {
        this.korgeStringj = localStorage.getItem(this.key3j);
        this.korgeNumberj = Number(this.korgeStringj);
        return this.korgeNumberj;
    }
    toojoudTekst() {
        //this.getToojoudMadal();
        //this.getToojoudKeskmine();
        //this.getToojoudKorge();
        if (this.toomadalNumber > this.tookeskmineNumber && this.toomadalNumber > this.tookorgeNumber) {
            this.muutujaToojoud = 'Ettevõtte tööjõu tootlikkus näib olevat languses, mis tähendab seda, et palgad kasvavad võrreldes käibega liiga kiiresti. Palgataseme määrab üldjuhul turg, seega on oluline ärimudel kriitilise pilguga üle vaadata ja otsustada, kas praegustes tööturutingimustes saab samal viisil jätkata.';
            //  this.muutuja2 = 'väike';
            //  this.muutuja3 = 'väike';
        }
        else if (this.tookeskmineNumber > this.toomadalNumber && this.tookeskmineNumber > this.tookorgeNumber) {
            this.muutujaToojoud = 'Ettevõtte tööjõu tootlikkus näib püsivat stabiilsel tasemel, mis ühelt poolt tähendab teatud palgasurvet, kuid teiselt poolt seda, et palgatõusuks on ruumi. Ettevõttel on võimalik häid töötajaid tööl hoida.';
            //  this.muutuja2 = 'keskpärane';
            //  this.muutuja3 = 'keskpärane';
        }
        else if (this.tookorgeNumber > this.toomadalNumber && this.tookorgeNumber > this.tookeskmineNumber) {
            this.muutujaToojoud = 'Ettevõtte tööjõu tootlikkus näib olevat kasvutrendis. See tähendab, et kui palku tõsta, jääb tööjõu tootlikkus konkurentsivõimeliseks. Selles olukorras on võimalik vajadusel lisatööjõudu kaasata.';
            //  this.muutuja2 = 'suur';
            //  this.muutuja3 = 'suur';
        }
        else if (this.tookeskmineNumber === this.toomadalNumber && this.tookeskmineNumber === this.tookorgeNumber) {
            this.muutujaToojoud = 'Ettevõtte tööjõu tootlikkus näib püsivat stabiilsel tasemel, mis ühelt poolt tähendab teatud palgasurvet, kuid teiselt poolt seda, et palgatõusuks on ruumi. Ettevõttel on võimalik häid töötajaid tööl hoida.';
            //  this.muutuja2 = 'keskpärane';
            //  this.muutuja3 = 'keskpärane';
        }
        this.koondSoovitusj = this.muutujaBlanco + this.muutujaToojoud;
        //+this.muutuja2+this.tekst3+this.muutuja3+this.tekst4;
        return this.koondSoovitusj;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: SoovitusComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: SoovitusComponent, isStandalone: true, selector: "soovitus-component", ngImport: i0, template: "<div class=\"frame\">\r\n\r\n  <div class=\"rida\">\r\n     <div class=\"group\">\r\n       <div class=\"joonisval\">\r\n         <div class=\"joonis\">\r\n             \r\n           \r\n           \r\n          <div class=\"tekstike\">\r\n           Soovitus ettev\u00F5ttele masin\u00F5ppe mudelite poolt\r\n          </div>\r\n          <br>\r\n          <br>\r\n          <div class=\"tekstike2\"> \r\n            {{ soovitusTekst() }} {{ soovitusTekstm() }} {{ finantsvoimendusTekst() }} {{ tasuvusTekst() }} {{ toojoudTekst() }}\r\n           \r\n          <br><br>\r\n         \r\n          </div>\r\n           \r\n         </div>\r\n         \r\n       \r\n  \r\n        </div>\r\n       \r\n     </div>\r\n     <div class=\"tekstjanupp\">\r\n       <!--div class=\"graafikuke\"-->\r\n         \r\n       <!--graafmudelefekt></graafmudelefekt-->\r\n       <!--graaf5></graaf5-->\r\n  \r\n       <!--/div-->\r\n  \r\n       <!--div class=\"nupp\">\r\n        <button>\r\n        Vaata t\u00E4psemat p\u00F5hjendust\r\n        </button>\r\n        </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n     </div>\r\n   </div>    \r\n  \r\n  </div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:1000px;top:8px;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:0px;align-items:flex-start;gap:1px;padding-left:340px;padding-top:0;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:900;color:red;font-style:italic;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: SoovitusComponent, decorators: [{
            type: Component,
            args: [{ selector: 'soovitus-component', standalone: true, imports: [XteechangeComponent], template: "<div class=\"frame\">\r\n\r\n  <div class=\"rida\">\r\n     <div class=\"group\">\r\n       <div class=\"joonisval\">\r\n         <div class=\"joonis\">\r\n             \r\n           \r\n           \r\n          <div class=\"tekstike\">\r\n           Soovitus ettev\u00F5ttele masin\u00F5ppe mudelite poolt\r\n          </div>\r\n          <br>\r\n          <br>\r\n          <div class=\"tekstike2\"> \r\n            {{ soovitusTekst() }} {{ soovitusTekstm() }} {{ finantsvoimendusTekst() }} {{ tasuvusTekst() }} {{ toojoudTekst() }}\r\n           \r\n          <br><br>\r\n         \r\n          </div>\r\n           \r\n         </div>\r\n         \r\n       \r\n  \r\n        </div>\r\n       \r\n     </div>\r\n     <div class=\"tekstjanupp\">\r\n       <!--div class=\"graafikuke\"-->\r\n         \r\n       <!--graafmudelefekt></graafmudelefekt-->\r\n       <!--graaf5></graaf5-->\r\n  \r\n       <!--/div-->\r\n  \r\n       <!--div class=\"nupp\">\r\n        <button>\r\n        Vaata t\u00E4psemat p\u00F5hjendust\r\n        </button>\r\n        </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n     </div>\r\n   </div>    \r\n  \r\n  </div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:1000px;top:8px;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:0px;align-items:flex-start;gap:1px;padding-left:340px;padding-top:0;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:900;color:red;font-style:italic;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"] }]
        }], ctorParameters: () => [] });

class Varav9Component {
    constructor() {
        this.sections = [
            {
                name: 'Vaata soovitust',
                content: 'Content 1'
            }
        ];
        this.showComponent1 = false;
        this.showComponent2 = false;
        this.showComponent3 = false;
        this.showComponent4 = false;
        this.showComponent5 = false;
    }
    expand(index) {
        if (this.currentIndex === index) {
            this.currentIndex = null;
            return;
        }
        this.currentIndex = index;
        //alert(this.currentIndex);
        if (this.currentIndex === 0) {
            this.showComponent1 = true;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
        }
        //    else if ( this.currentIndex === 1) {
        //      this.showComponent1 = false;
        //      this.showComponent2 = true;
        //      this.showComponent3 = false;
        //      this.showComponent4 = false;
        //      this.showComponent5 = false;
        //    }
        //    else if ( this.currentIndex === 2) {
        //      this.showComponent1 = false;
        //      this.showComponent2 = false;
        //      this.showComponent3 = true;
        //      this.showComponent4 = false;
        //      this.showComponent5 = false;
        //    }
        //    else if ( this.currentIndex === 3) {
        //      this.showComponent1 = false;
        //      this.showComponent2 = false;
        //      this.showComponent3 = false;
        //      this.showComponent4 = true;
        //      this.showComponent5 = false;
        //    }
        //    else if ( this.currentIndex === 4) {
        //      this.showComponent1 = false;
        //      this.showComponent2 = false;
        //      this.showComponent3 = false;
        //      this.showComponent4 = false;
        //      this.showComponent5 = true;
        //    }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav9Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Varav9Component, isStandalone: true, selector: "varav9", ngImport: i0, template: "<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\nSoovitus tehtud prognooside pinnalt\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2\">\r\n\r\nPrognooside pinnalt on tehtud soovitus, millega on v\u00F5imalik tutvuda allpool. Soovitus on masina arvamus sellest, milliste sammude astumist v\u00F5iks ettev\u00F5ttes kaaluda, kui mudelite k\u00E4est on saadud sellised hinnangud, nagu need on saadud.\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <soovitus-component *ngIf=\"showComponent1\"></soovitus-component>\r\n    <!--terminal2-component *ngIf=\"showComponent2\"></terminal2-component>\r\n    <terminal3-component *ngIf=\"showComponent3\"></terminal3-component>\r\n    <terminal4-component *ngIf=\"showComponent4\"></terminal4-component>\r\n    <terminal5-component *ngIf=\"showComponent5\"></terminal5-component-->\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px 10px 150px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: SoovitusComponent, selector: "soovitus-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav9Component, decorators: [{
            type: Component,
            args: [{ selector: 'varav9', standalone: true, imports: [CommonModule, SoovitusComponent], template: "<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\nSoovitus tehtud prognooside pinnalt\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2\">\r\n\r\nPrognooside pinnalt on tehtud soovitus, millega on v\u00F5imalik tutvuda allpool. Soovitus on masina arvamus sellest, milliste sammude astumist v\u00F5iks ettev\u00F5ttes kaaluda, kui mudelite k\u00E4est on saadud sellised hinnangud, nagu need on saadud.\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <soovitus-component *ngIf=\"showComponent1\"></soovitus-component>\r\n    <!--terminal2-component *ngIf=\"showComponent2\"></terminal2-component>\r\n    <terminal3-component *ngIf=\"showComponent3\"></terminal3-component>\r\n    <terminal4-component *ngIf=\"showComponent4\"></terminal4-component>\r\n    <terminal5-component *ngIf=\"showComponent5\"></terminal5-component-->\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px 10px 150px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"] }]
        }] });

//import { products } from '../products';
class MaakComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: MaakComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: MaakComponent, isStandalone: true, selector: "maak-component", ngImport: i0, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://www.arenduskeskused.ee\"></iframe>\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: MaakComponent, decorators: [{
            type: Component,
            args: [{ selector: 'maak-component', standalone: true, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://www.arenduskeskused.ee\"></iframe>\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class MaakxComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: MaakxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: MaakxComponent, isStandalone: true, selector: "maakx-component", ngImport: i0, template: "<br>\r\n\r\n<p>ARENDUSKESKUSED ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://www.arenduskeskused.ee\"></iframe-->\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: MaakxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'maakx-component', standalone: true, template: "<br>\r\n\r\n<p>ARENDUSKESKUSED ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://www.arenduskeskused.ee\"></iframe-->\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak1Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak1Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak1Component, isStandalone: true, selector: "maak1-component", ngImport: i0, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://www.heak.ee\"></iframe>\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak1Component, decorators: [{
            type: Component,
            args: [{ selector: 'maak1-component', standalone: true, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://www.heak.ee\"></iframe>\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak1xComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak1xComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak1xComponent, isStandalone: true, selector: "maak1x-component", ngImport: i0, template: "<br>\r\n\r\n<p>HARJU ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://www.heak.ee\"></iframe-->\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak1xComponent, decorators: [{
            type: Component,
            args: [{ selector: 'maak1x-component', standalone: true, template: "<br>\r\n\r\n<p>HARJU ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://www.heak.ee\"></iframe-->\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak2Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak2Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak2Component, isStandalone: true, selector: "maak2-component", ngImport: i0, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://hiiumaaarenduskeskus.ee\"></iframe>\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak2Component, decorators: [{
            type: Component,
            args: [{ selector: 'maak2-component', standalone: true, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://hiiumaaarenduskeskus.ee\"></iframe>\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak2xComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak2xComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak2xComponent, isStandalone: true, selector: "maak2x-component", ngImport: i0, template: "<br>\r\n\r\n<p>HIIU ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://hiiumaaarenduskeskus.ee\"></iframe-->\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak2xComponent, decorators: [{
            type: Component,
            args: [{ selector: 'maak2x-component', standalone: true, template: "<br>\r\n\r\n<p>HIIU ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://hiiumaaarenduskeskus.ee\"></iframe-->\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak3Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak3Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak3Component, isStandalone: true, selector: "maak3-component", ngImport: i0, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://ivek.ee\"></iframe>\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak3Component, decorators: [{
            type: Component,
            args: [{ selector: 'maak3-component', standalone: true, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://ivek.ee\"></iframe>\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak3xComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak3xComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak3xComponent, isStandalone: true, selector: "maak3x-component", ngImport: i0, template: "<br>\r\n\r\n<p>IDAVIRU ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://ivek.ee\"></iframe-->\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak3xComponent, decorators: [{
            type: Component,
            args: [{ selector: 'maak3x-component', standalone: true, template: "<br>\r\n\r\n<p>IDAVIRU ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://ivek.ee\"></iframe-->\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak4Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak4Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak4Component, isStandalone: true, selector: "maak4-component", ngImport: i0, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://www.jaek.ee\"></iframe>\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak4Component, decorators: [{
            type: Component,
            args: [{ selector: 'maak4-component', standalone: true, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://www.jaek.ee\"></iframe>\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak4xComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak4xComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak4xComponent, isStandalone: true, selector: "maak4x-component", ngImport: i0, template: "<br>\r\n\r\n<p>J\u00D5GEVA ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://www.jaek.ee\"></iframe-->\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak4xComponent, decorators: [{
            type: Component,
            args: [{ selector: 'maak4x-component', standalone: true, template: "<br>\r\n\r\n<p>J\u00D5GEVA ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://www.jaek.ee\"></iframe-->\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak5Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak5Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak5Component, isStandalone: true, selector: "maak5-component", ngImport: i0, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://jarva.kovtp.ee/kontakt/\"></iframe>\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak5Component, decorators: [{
            type: Component,
            args: [{ selector: 'maak5-component', standalone: true, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://jarva.kovtp.ee/kontakt/\"></iframe>\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak5xComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak5xComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak5xComponent, isStandalone: true, selector: "maak5x-component", ngImport: i0, template: "<br>\r\n\r\n<p>J\u00C4RVA ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://jarva.kovtp.ee/kontakt/\"></iframe-->\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak5xComponent, decorators: [{
            type: Component,
            args: [{ selector: 'maak5x-component', standalone: true, template: "<br>\r\n\r\n<p>J\u00C4RVA ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://jarva.kovtp.ee/kontakt/\"></iframe-->\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak6Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak6Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak6Component, isStandalone: true, selector: "maak6-component", ngImport: i0, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://laanemaa.ee/sihtasutus-laanemaa/\"></iframe>\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak6Component, decorators: [{
            type: Component,
            args: [{ selector: 'maak6-component', standalone: true, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://laanemaa.ee/sihtasutus-laanemaa/\"></iframe>\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak6xComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak6xComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak6xComponent, isStandalone: true, selector: "maak6x-component", ngImport: i0, template: "<br>\r\n\r\n<p>L\u00C4\u00C4NE ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://laanemaa.ee/sihtasutus-laanemaa/\"></iframe-->\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak6xComponent, decorators: [{
            type: Component,
            args: [{ selector: 'maak6x-component', standalone: true, template: "<br>\r\n\r\n<p>L\u00C4\u00C4NE ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://laanemaa.ee/sihtasutus-laanemaa/\"></iframe-->\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak7Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak7Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak7Component, isStandalone: true, selector: "maak7-component", ngImport: i0, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://www.virol.ee/buroo\"></iframe>\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak7Component, decorators: [{
            type: Component,
            args: [{ selector: 'maak7-component', standalone: true, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://www.virol.ee/buroo\"></iframe>\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak7xComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak7xComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak7xComponent, isStandalone: true, selector: "maak7x-component", ngImport: i0, template: "<br>\r\n\r\n<p>L\u00C4\u00C4NEVIRU ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://www.virol.ee/buroo\"></iframe-->\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak7xComponent, decorators: [{
            type: Component,
            args: [{ selector: 'maak7x-component', standalone: true, template: "<br>\r\n\r\n<p>L\u00C4\u00C4NEVIRU ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://www.virol.ee/buroo\"></iframe-->\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak8Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak8Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak8Component, isStandalone: true, selector: "maak8-component", ngImport: i0, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://arenduskeskus.eu/\"></iframe>\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak8Component, decorators: [{
            type: Component,
            args: [{ selector: 'maak8-component', standalone: true, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://arenduskeskus.eu/\"></iframe>\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak8xComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak8xComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak8xComponent, isStandalone: true, selector: "maak8x-component", ngImport: i0, template: "<br>\r\n\r\n<p>P\u00C4RNU ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://arenduskeskus.eu/\"></iframe-->\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak8xComponent, decorators: [{
            type: Component,
            args: [{ selector: 'maak8x-component', standalone: true, template: "<br>\r\n\r\n<p>P\u00C4RNU ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://arenduskeskus.eu/\"></iframe-->\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak9Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak9Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak9Component, isStandalone: true, selector: "maak9-component", ngImport: i0, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://arenduskeskus.polvamaa.ee/arenduskeskus/\"></iframe>\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak9Component, decorators: [{
            type: Component,
            args: [{ selector: 'maak9-component', standalone: true, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://arenduskeskus.polvamaa.ee/arenduskeskus/\"></iframe>\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak9xComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak9xComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak9xComponent, isStandalone: true, selector: "maak9x-component", ngImport: i0, template: "<br>\r\n\r\n<p>P\u00D5LVA ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://arenduskeskus.polvamaa.ee/arenduskeskus/\"></iframe-->\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak9xComponent, decorators: [{
            type: Component,
            args: [{ selector: 'maak9x-component', standalone: true, template: "<br>\r\n\r\n<p>P\u00D5LVA ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://arenduskeskus.polvamaa.ee/arenduskeskus/\"></iframe-->\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak10Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak10Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak10Component, isStandalone: true, selector: "maak10-component", ngImport: i0, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://raek.ee/\"></iframe>\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak10Component, decorators: [{
            type: Component,
            args: [{ selector: 'maak10-component', standalone: true, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://raek.ee/\"></iframe>\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak10xComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak10xComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak10xComponent, isStandalone: true, selector: "maak10x-component", ngImport: i0, template: "<br>\r\n\r\n<p>RAPLA ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://raek.ee/\"></iframe-->\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak10xComponent, decorators: [{
            type: Component,
            args: [{ selector: 'maak10x-component', standalone: true, template: "<br>\r\n\r\n<p>RAPLA ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://raek.ee/\"></iframe-->\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak11Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak11Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak11Component, isStandalone: true, selector: "maak11-component", ngImport: i0, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://sasak.ee/est\"></iframe>\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak11Component, decorators: [{
            type: Component,
            args: [{ selector: 'maak11-component', standalone: true, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://sasak.ee/est\"></iframe>\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak11xComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak11xComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak11xComponent, isStandalone: true, selector: "maak11x-component", ngImport: i0, template: "<br>\r\n\r\n<p>SAARE ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://sasak.ee/est\"></iframe-->\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak11xComponent, decorators: [{
            type: Component,
            args: [{ selector: 'maak11x-component', standalone: true, template: "<br>\r\n\r\n<p>SAARE ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://sasak.ee/est\"></iframe-->\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak12Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak12Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak12Component, isStandalone: true, selector: "maak12-component", ngImport: i0, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://arinouandla.ee/\"></iframe>\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak12Component, decorators: [{
            type: Component,
            args: [{ selector: 'maak12-component', standalone: true, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://arinouandla.ee/\"></iframe>\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak12xComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak12xComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak12xComponent, isStandalone: true, selector: "maak12x-component", ngImport: i0, template: "<br>\r\n\r\n<p>TARTU ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://arinouandla.ee/\"></iframe-->\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak12xComponent, decorators: [{
            type: Component,
            args: [{ selector: 'maak12x-component', standalone: true, template: "<br>\r\n\r\n<p>TARTU ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://arinouandla.ee/\"></iframe-->\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak13Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak13Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak13Component, isStandalone: true, selector: "maak13-component", ngImport: i0, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://www.arenguagentuur.ee/\"></iframe>\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak13Component, decorators: [{
            type: Component,
            args: [{ selector: 'maak13-component', standalone: true, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://www.arenguagentuur.ee/\"></iframe>\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak13xComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak13xComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak13xComponent, isStandalone: true, selector: "maak13x-component", ngImport: i0, template: "<br>\r\n\r\n<p>VALGA ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://www.arenguagentuur.ee/\"></iframe-->\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak13xComponent, decorators: [{
            type: Component,
            args: [{ selector: 'maak13x-component', standalone: true, template: "<br>\r\n\r\n<p>VALGA ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://www.arenguagentuur.ee/\"></iframe-->\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak14Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak14Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak14Component, isStandalone: true, selector: "maak14-component", ngImport: i0, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://arenduskeskus.viljandimaa.ee/tutvustus\"></iframe>\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak14Component, decorators: [{
            type: Component,
            args: [{ selector: 'maak14-component', standalone: true, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://arenduskeskus.viljandimaa.ee/tutvustus\"></iframe>\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak14xComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak14xComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak14xComponent, isStandalone: true, selector: "maak14x-component", ngImport: i0, template: "<br>\r\n\r\n<p>VILJANDI ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://arenduskeskus.viljandimaa.ee/tutvustus\"></iframe-->\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak14xComponent, decorators: [{
            type: Component,
            args: [{ selector: 'maak14x-component', standalone: true, template: "<br>\r\n\r\n<p>VILJANDI ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://arenduskeskus.viljandimaa.ee/tutvustus\"></iframe-->\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak15Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak15Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak15Component, isStandalone: true, selector: "maak15-component", ngImport: i0, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://vorumaa.ee/\"></iframe>\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak15Component, decorators: [{
            type: Component,
            args: [{ selector: 'maak15-component', standalone: true, template: "<br>\r\n\r\n<iframe width=\"100%\" height=\"750\" src=\"https://vorumaa.ee/\"></iframe>\r\n\r\n<br>" }]
        }] });

//import { products } from '../products';
class Maak15xComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak15xComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Maak15xComponent, isStandalone: true, selector: "maak15x-component", ngImport: i0, template: "<br>\r\n\r\n<p>V\u00D5RU ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://vorumaa.ee/\"></iframe-->\r\n\r\n<br>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Maak15xComponent, decorators: [{
            type: Component,
            args: [{ selector: 'maak15x-component', standalone: true, template: "<br>\r\n\r\n<p>V\u00D5RU ASENDUS</p>\r\n<!--iframe width=\"100%\" height=\"750\" src=\"https://vorumaa.ee/\"></iframe-->\r\n\r\n<br>" }]
        }] });

class Varav10Component {
    constructor() {
        this.sections = [
            {
                name: 'Maakondlike arenduskeskuste võrgustik',
                content: 'Content 1'
            },
            {
                name: 'Harju Ettevõtlus- ja Arenduskeskus',
                content: '<progn1-component></progn1-component>'
            },
            {
                name: 'Hiiumaa Arenduskeskus',
                content: ''
            },
            {
                name: 'Ida-Viru Ettevõtluskeskus',
                content: ''
            },
            {
                name: 'Jõgevamaa Arendus- ja Ettevõtluskeskus',
                content: ''
            },
            {
                name: 'Sihtasutus Järvamaa',
                content: ''
            },
            {
                name: 'Sihtasutus Läänemaa',
                content: ''
            },
            {
                name: 'Lääne-Viru Omavalitsuste Liit',
                content: ''
            },
            {
                name: 'Pärnumaa Arenduskeskus',
                content: ''
            },
            {
                name: 'Põlvamaa Arenduskeskus',
                content: ''
            },
            {
                name: 'Raplamaa Arendus- ja Ettevõtluskeskus',
                content: ''
            },
            {
                name: 'Saare Arenduskeskus',
                content: ''
            },
            {
                name: 'Tartu Ärinõuandla',
                content: ''
            },
            {
                name: 'Valgamaa Arenguagentuur',
                content: ''
            },
            {
                name: 'Viljandimaa Arenduskeskus',
                content: ''
            },
            {
                name: 'Võrumaa Arenduskeskus',
                content: ''
            }
        ];
        this.showComponent1 = false;
        this.showComponent2 = false;
        this.showComponent3 = false;
        this.showComponent4 = false;
        this.showComponent5 = false;
        this.showComponent6 = false;
        this.showComponent7 = false;
        this.showComponent8 = false;
        this.showComponent9 = false;
        this.showComponent10 = false;
        this.showComponent11 = false;
        this.showComponent12 = false;
        this.showComponent13 = false;
        this.showComponent14 = false;
        this.showComponent15 = false;
        this.showComponent16 = false;
    }
    expand(index) {
        if (this.currentIndex === index) {
            this.currentIndex = null;
            return;
        }
        this.currentIndex = index;
        //alert(this.currentIndex);
        if (this.currentIndex === 0) {
            this.showComponent1 = true;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
            this.showComponent13 = false;
            this.showComponent14 = false;
            this.showComponent15 = false;
            this.showComponent16 = false;
        }
        else if (this.currentIndex === 1) {
            this.showComponent1 = false;
            this.showComponent2 = true;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
            this.showComponent13 = false;
            this.showComponent14 = false;
            this.showComponent15 = false;
            this.showComponent16 = false;
        }
        else if (this.currentIndex === 2) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = true;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
            this.showComponent13 = false;
            this.showComponent14 = false;
            this.showComponent15 = false;
            this.showComponent16 = false;
        }
        else if (this.currentIndex === 3) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = true;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
            this.showComponent13 = false;
            this.showComponent14 = false;
            this.showComponent15 = false;
            this.showComponent16 = false;
        }
        else if (this.currentIndex === 4) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = true;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
            this.showComponent13 = false;
            this.showComponent14 = false;
            this.showComponent15 = false;
            this.showComponent16 = false;
        }
        else if (this.currentIndex === 5) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = true;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
            this.showComponent13 = false;
            this.showComponent14 = false;
            this.showComponent15 = false;
            this.showComponent16 = false;
        }
        else if (this.currentIndex === 6) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = true;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
            this.showComponent13 = false;
            this.showComponent14 = false;
            this.showComponent15 = false;
            this.showComponent16 = false;
        }
        else if (this.currentIndex === 7) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = true;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
            this.showComponent13 = false;
            this.showComponent14 = false;
            this.showComponent15 = false;
            this.showComponent16 = false;
        }
        else if (this.currentIndex === 8) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = true;
            this.showComponent10 = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
            this.showComponent13 = false;
            this.showComponent14 = false;
            this.showComponent15 = false;
            this.showComponent16 = false;
        }
        else if (this.currentIndex === 9) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = true;
            this.showComponent11 = false;
            this.showComponent12 = false;
            this.showComponent13 = false;
            this.showComponent14 = false;
            this.showComponent15 = false;
            this.showComponent16 = false;
        }
        else if (this.currentIndex === 10) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11 = true;
            this.showComponent12 = false;
            this.showComponent13 = false;
            this.showComponent14 = false;
            this.showComponent15 = false;
            this.showComponent16 = false;
        }
        else if (this.currentIndex === 11) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11 = false;
            this.showComponent12 = true;
            this.showComponent13 = false;
            this.showComponent14 = false;
            this.showComponent15 = false;
            this.showComponent16 = false;
        }
        else if (this.currentIndex === 12) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
            this.showComponent13 = true;
            this.showComponent14 = false;
            this.showComponent15 = false;
            this.showComponent16 = false;
        }
        else if (this.currentIndex === 13) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
            this.showComponent13 = false;
            this.showComponent14 = true;
            this.showComponent15 = false;
            this.showComponent16 = false;
        }
        else if (this.currentIndex === 14) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
            this.showComponent13 = false;
            this.showComponent14 = false;
            this.showComponent15 = true;
            this.showComponent16 = false;
        }
        else if (this.currentIndex === 15) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = false;
            this.showComponent4 = false;
            this.showComponent5 = false;
            this.showComponent6 = false;
            this.showComponent7 = false;
            this.showComponent8 = false;
            this.showComponent9 = false;
            this.showComponent10 = false;
            this.showComponent11 = false;
            this.showComponent12 = false;
            this.showComponent13 = false;
            this.showComponent14 = false;
            this.showComponent15 = false;
            this.showComponent16 = true;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav10Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Varav10Component, isStandalone: true, selector: "varav10", ngImport: i0, template: "<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\nMaakondlike arenduskeskuste informatsioon\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2\">\r\n\r\nAllpool on tutvustav informatsioon maakondlike arenduskeskuste kaupa. Alajaotuse kaudu p\u00E4\u00E4seb valitud maakonna arenduskeskuse kodulehele ja saab tutvuda v\u00F5imalustega, mida arenduskeskus pakub.\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <maak-component *ngIf=\"showComponent1\"></maak-component>\r\n    <maak1-component *ngIf=\"showComponent2\"></maak1-component>\r\n    <maak2-component *ngIf=\"showComponent3\"></maak2-component>\r\n    <maak3-component *ngIf=\"showComponent4\"></maak3-component>\r\n    <maak4-component *ngIf=\"showComponent5\"></maak4-component>\r\n    <maak5-component *ngIf=\"showComponent6\"></maak5-component>\r\n    <maak6-component *ngIf=\"showComponent7\"></maak6-component>\r\n    <maak7-component *ngIf=\"showComponent8\"></maak7-component>\r\n    <maak8-component *ngIf=\"showComponent9\"></maak8-component>\r\n    <maak9-component *ngIf=\"showComponent10\"></maak9-component>\r\n    <maak10-component *ngIf=\"showComponent11\"></maak10-component>\r\n    <maak11-component *ngIf=\"showComponent12\"></maak11-component>\r\n    <maak12-component *ngIf=\"showComponent13\"></maak12-component>\r\n    <maak13-component *ngIf=\"showComponent14\"></maak13-component>\r\n    <maak14-component *ngIf=\"showComponent15\"></maak14-component>\r\n    <maak15-component *ngIf=\"showComponent16\"></maak15-component>\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: MaakComponent, selector: "maak-component" }, { kind: "component", type: Maak1Component, selector: "maak1-component" }, { kind: "component", type: Maak2Component, selector: "maak2-component" }, { kind: "component", type: Maak3Component, selector: "maak3-component" }, { kind: "component", type: Maak4Component, selector: "maak4-component" }, { kind: "component", type: Maak5Component, selector: "maak5-component" }, { kind: "component", type: Maak6Component, selector: "maak6-component" }, { kind: "component", type: Maak7Component, selector: "maak7-component" }, { kind: "component", type: Maak8Component, selector: "maak8-component" }, { kind: "component", type: Maak9Component, selector: "maak9-component" }, { kind: "component", type: Maak10Component, selector: "maak10-component" }, { kind: "component", type: Maak11Component, selector: "maak11-component" }, { kind: "component", type: Maak12Component, selector: "maak12-component" }, { kind: "component", type: Maak13Component, selector: "maak13-component" }, { kind: "component", type: Maak14Component, selector: "maak14-component" }, { kind: "component", type: Maak15Component, selector: "maak15-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav10Component, decorators: [{
            type: Component,
            args: [{ selector: 'varav10', standalone: true, imports: [CommonModule, NgClass, MaakComponent, MaakxComponent, Maak1Component, Maak1xComponent, Maak2Component, Maak2xComponent, Maak3Component, Maak3xComponent, Maak4Component, Maak4xComponent, Maak5Component, Maak5xComponent, Maak6Component, Maak6xComponent, Maak7Component, Maak7xComponent, Maak8Component, Maak8xComponent, Maak9Component, Maak9xComponent, Maak10Component, Maak10xComponent, Maak11Component, Maak11xComponent, Maak12Component, Maak12xComponent, Maak13Component, Maak13xComponent, Maak14Component, Maak14xComponent, Maak15Component, Maak15xComponent], template: "<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\nMaakondlike arenduskeskuste informatsioon\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2\">\r\n\r\nAllpool on tutvustav informatsioon maakondlike arenduskeskuste kaupa. Alajaotuse kaudu p\u00E4\u00E4seb valitud maakonna arenduskeskuse kodulehele ja saab tutvuda v\u00F5imalustega, mida arenduskeskus pakub.\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <maak-component *ngIf=\"showComponent1\"></maak-component>\r\n    <maak1-component *ngIf=\"showComponent2\"></maak1-component>\r\n    <maak2-component *ngIf=\"showComponent3\"></maak2-component>\r\n    <maak3-component *ngIf=\"showComponent4\"></maak3-component>\r\n    <maak4-component *ngIf=\"showComponent5\"></maak4-component>\r\n    <maak5-component *ngIf=\"showComponent6\"></maak5-component>\r\n    <maak6-component *ngIf=\"showComponent7\"></maak6-component>\r\n    <maak7-component *ngIf=\"showComponent8\"></maak7-component>\r\n    <maak8-component *ngIf=\"showComponent9\"></maak8-component>\r\n    <maak9-component *ngIf=\"showComponent10\"></maak9-component>\r\n    <maak10-component *ngIf=\"showComponent11\"></maak10-component>\r\n    <maak11-component *ngIf=\"showComponent12\"></maak11-component>\r\n    <maak12-component *ngIf=\"showComponent13\"></maak12-component>\r\n    <maak13-component *ngIf=\"showComponent14\"></maak13-component>\r\n    <maak14-component *ngIf=\"showComponent15\"></maak14-component>\r\n    <maak15-component *ngIf=\"showComponent16\"></maak15-component>\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"] }]
        }] });

class Varav11Component {
    constructor() {
        this.sections = [
            {
                name: 'Laenusisend',
                content: 'Antakse sisendit, kuidas plaanib ettevõte muuta oma laenukoormust ning süsteem ütleb, et kuidas siis muutub tulemus. Täiendav laen võib olla abiks turuvõimaluste kasutamisel ja kasvamisel, mis aitab kaasa ettevõtte arengule. Samas, kui täiendavat laenu kasutatakse refinantseerimiseks ja kahjumlikkusest tekkindu käibekapitali kao korvamiseks, siis võib täiendav kohustus hoopis negatiivselt mõjuda.',
            },
            {
                name: 'Varade muutus',
                content: 'Antakse sisendit, kas ettevõte plaanib muuta varade hulka ning süsteem ütleb, kuidas see mõjuab elujõulisust. Kui ettevõttel on võimalik kasvada, siis on täiendavad varad vajalikud.  Samas, kui ollakse käibekapitali defitsiidis ning turg on kehvapoolne, siis osade varade müük võib aidata ettevõtte olukorda parandada - ollakse turul väiksemas mahus, kuid see-eest kindlamalt.',
            },
            {
                name: 'Turu muutus',
                content: 'Kui ettevõttel on võimalik turuolukorda parandada ja seeläbi muude tingimuste samaksjäädes teenida täiendavat kasumit, siis võib see suure tõenäosusega aidata oluliselt kaasa ettevõtte elujõulisuse paranemisele.',
            }
        ];
        this.showComponent1 = false;
        this.showComponent2 = false;
        this.showComponent3 = false;
    }
    expand(index) {
        if (this.currentIndex === index) {
            this.currentIndex = null;
            return;
        }
        this.currentIndex = index;
        //alert(this.currentIndex);
        if (this.currentIndex === 0) {
            this.showComponent1 = true;
            this.showComponent2 = false;
            this.showComponent3 = false;
        }
        else if (this.currentIndex === 1) {
            this.showComponent1 = false;
            this.showComponent2 = true;
            this.showComponent3 = false;
        }
        else if (this.currentIndex === 2) {
            this.showComponent1 = false;
            this.showComponent2 = false;
            this.showComponent3 = true;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav11Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Varav11Component, isStandalone: true, selector: "varav11", ngImport: i0, template: "<div class=\"raamYmber\" >\r\n\r\n  <br>\r\n  <div class=\"tekstike\">\r\n  \r\n  Kaasam\u00F5tlemise v\u00F5imalused sisendi andmisel\r\n  \r\n  </div>\r\n  \r\n  <br>\r\n  \r\n  <div class=\"tekstike2a\">\r\n  \r\n  Allj\u00E4rgnevalt on toodud alajaotuste l\u00F5ikes olulisemad selgitused v\u00F5imaluste osas, et kasutaja saaks anda omapoolset sisendit ja kuidas seda sisendit arvesse v\u00F5etakse.\r\n  <br> <br>\r\n  </div>\r\n  \r\n  <div *ngFor=\"let section of sections; let i = index;\">\r\n    <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n  \r\n    <!--div class=\"raamYmber\" -->\r\n  \r\n    <div class=\"panel\"\r\n      [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n      <span class=\"tekstike2\">{{section.content}}</span>\r\n        \r\n  </div>\r\n  \r\n  </div>\r\n  \r\n  </div>\r\n  \r\n  ", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px 10px 10px 40px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2a{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav11Component, decorators: [{
            type: Component,
            args: [{ selector: 'varav11', standalone: true, imports: [CommonModule], template: "<div class=\"raamYmber\" >\r\n\r\n  <br>\r\n  <div class=\"tekstike\">\r\n  \r\n  Kaasam\u00F5tlemise v\u00F5imalused sisendi andmisel\r\n  \r\n  </div>\r\n  \r\n  <br>\r\n  \r\n  <div class=\"tekstike2a\">\r\n  \r\n  Allj\u00E4rgnevalt on toodud alajaotuste l\u00F5ikes olulisemad selgitused v\u00F5imaluste osas, et kasutaja saaks anda omapoolset sisendit ja kuidas seda sisendit arvesse v\u00F5etakse.\r\n  <br> <br>\r\n  </div>\r\n  \r\n  <div *ngFor=\"let section of sections; let i = index;\">\r\n    <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n  \r\n    <!--div class=\"raamYmber\" -->\r\n  \r\n    <div class=\"panel\"\r\n      [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n      <span class=\"tekstike2\">{{section.content}}</span>\r\n        \r\n  </div>\r\n  \r\n  </div>\r\n  \r\n  </div>\r\n  \r\n  ", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px 10px 10px 40px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2a{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"] }]
        }] });

//import { products } from '../products';
class Hetk1Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Hetk1Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Hetk1Component, isStandalone: true, selector: "hetk1-component", ngImport: i0, template: "<p class=\"tekstike\">\r\nPrognoos sinu ettev\u00F5tte kohta\r\n</p>\r\n<br>\r\n<yld3-component></yld3-component>\r\n<br><br>\r\n<br>\r\n<p class=\"tekstikev\">\r\n  Mis infot me sinu ettev\u00F5tte olukorrast teame\r\n  </p>\r\n \r\n    <p class=\"tekstike2\">\r\n\r\n    Saame \u00F6elda, et ettev\u00F5tte \u00FCldine eluj\u00F5ud on keskmisel tasemel. Eluj\u00F5u koondindikaatori v\u00E4\u00E4rtus on 0.57. Koondindikaator on eluj\u00F5ulisuse n\u00E4itaja vahemikus 0\u20131, kus 0 on minimaalne ja 1 maksimaalne. \u00DClaltoodud joonisel on n\u00E4idatud ettev\u00F5tte eluj\u00F5ud komponentide kaupa k\u00F5igi viie kasutatud mudeli j\u00E4rgi. Jooniselt n\u00E4eb, millised on ettev\u00F5tte probleemsed ja tugevad k\u00FCljed.\r\n\r\n    </p>", styles: [".tekstike{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px;margin-bottom:-20px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px;margin-top:-32px}.tekstike2{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-13px}\n"], dependencies: [{ kind: "component", type: Yld3Component, selector: "yld3-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Hetk1Component, decorators: [{
            type: Component,
            args: [{ selector: 'hetk1-component', standalone: true, imports: [Yld3Component], template: "<p class=\"tekstike\">\r\nPrognoos sinu ettev\u00F5tte kohta\r\n</p>\r\n<br>\r\n<yld3-component></yld3-component>\r\n<br><br>\r\n<br>\r\n<p class=\"tekstikev\">\r\n  Mis infot me sinu ettev\u00F5tte olukorrast teame\r\n  </p>\r\n \r\n    <p class=\"tekstike2\">\r\n\r\n    Saame \u00F6elda, et ettev\u00F5tte \u00FCldine eluj\u00F5ud on keskmisel tasemel. Eluj\u00F5u koondindikaatori v\u00E4\u00E4rtus on 0.57. Koondindikaator on eluj\u00F5ulisuse n\u00E4itaja vahemikus 0\u20131, kus 0 on minimaalne ja 1 maksimaalne. \u00DClaltoodud joonisel on n\u00E4idatud ettev\u00F5tte eluj\u00F5ud komponentide kaupa k\u00F5igi viie kasutatud mudeli j\u00E4rgi. Jooniselt n\u00E4eb, millised on ettev\u00F5tte probleemsed ja tugevad k\u00FCljed.\r\n\r\n    </p>", styles: [".tekstike{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px;margin-bottom:-20px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px;margin-top:-32px}.tekstike2{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-13px}\n"] }]
        }] });

//import { products } from '../products';
class Hetk3Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Hetk3Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Hetk3Component, isStandalone: true, selector: "hetk3-component", ngImport: i0, template: "<p class=\"tekstike\">\r\nEttev\u00F5tte eluj\u00F5ulisuse indeksi metoodika\r\n  </p>\r\n\r\n  <!--p class=\"tekstikev\">\r\n    Mis infot me hetkeolukorra kohta teame\r\n    </p-->\r\n\r\n    <p class=\"tekstike2\">\r\n    Siit leiate \u00FClevaate ettev\u00F5tte eluj\u00F5ulisuse indeksi metoodikast. Esitame alajaotuste kaupa olulisemad selgitused rakenduse toimimise kohta ja rakenduse antud hinnangut kallutada v\u00F5ivad asjaolud.\r\n    </p>", styles: [".tekstike{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px;margin-top:-32px}.tekstike2{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-30px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Hetk3Component, decorators: [{
            type: Component,
            args: [{ selector: 'hetk3-component', standalone: true, template: "<p class=\"tekstike\">\r\nEttev\u00F5tte eluj\u00F5ulisuse indeksi metoodika\r\n  </p>\r\n\r\n  <!--p class=\"tekstikev\">\r\n    Mis infot me hetkeolukorra kohta teame\r\n    </p-->\r\n\r\n    <p class=\"tekstike2\">\r\n    Siit leiate \u00FClevaate ettev\u00F5tte eluj\u00F5ulisuse indeksi metoodikast. Esitame alajaotuste kaupa olulisemad selgitused rakenduse toimimise kohta ja rakenduse antud hinnangut kallutada v\u00F5ivad asjaolud.\r\n    </p>", styles: [".tekstike{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px;margin-top:-32px}.tekstike2{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-30px}\n"] }]
        }] });

const konsultantideNimekiri = [
    {
        "Eesnimi": "Oige",
        "Perenimi": "Wkfjeeydled",
        "Asutus": "Konsultandid tootvale teenindusele Co",
        "Telefon": "8821193224",
        "Email": "77wwe77d3@4dlsdffj998dkj.vmk",
        "MAAKONDK": 45,
        "MAAKOND": "Harju maakond"
    },
    {
        "Eesnimi": "Teine",
        "Perenimi": "Weeydled",
        "Asutus": "Konsultandid tootvale tööle Co",
        "Telefon": "88211934",
        "Email": "wwe77d3@4dlfj998dkj.vmk",
        "MAAKONDK": 45,
        "MAAKOND": "Harju maakond"
    },
    {
        "Eesnimi": "Andreassk",
        "Perenimi": "Klramskdl",
        "Asutus": "Vabakutseliste Co",
        "Telefon": "438437",
        "Email": "aaddrelkdjf@2wwwd.aa",
        "MAAKOND": "Harju maakond"
    },
    {
        "Eesnimi": "Vlzzdyydf",
        "Perenimi": "Zydled",
        "Asutus": "Konsultandid võtku vabalt Co",
        "Telefon": "882215934",
        "Email": "77d3@4dlfj998dkj.vmk",
        "MAAKOND": "Hiiu maakond"
    },
    {
        "Eesnimi": "Vldyksdjfydf",
        "Perenimi": "Iklskdfj",
        "Asutus": "Konsultandid infopäevale Co",
        "Telefon": "2215934",
        "Email": "8uifd3@47998dkj.vmk",
        "MAAKOND": "Ida-Viru maakond"
    },
    {
        "Eesnimi": "Eesnjfydf",
        "Perenimi": "Pereklskdfj",
        "Asutus": "Informatsioon infopäevale Co",
        "Telefon": "77215934",
        "Email": "idavirukons@47998dkj.vmk",
        "MAAKOND": "Ida-Viru maakond"
    },
    {
        "Eesnimi": "Vldyydf",
        "Perenimi": "/yyydled",
        "Asutus": "Konsultandid mingu koosolekule Co",
        "Telefon": "2215934",
        "Email": "8uifd3@47998dkj.vmk",
        "MAAKOND": "Järva maakond"
    },
    {
        "Eesnimi": "Eesnldyydf",
        "Perenimi": "Järvperyyydled",
        "Asutus": "Konsultandid ABC Co",
        "Telefon": "2215934",
        "Email": "jaarv@47998dkj.jr",
        "MAAKOND": "Järva maakond"
    },
    {
        "Eesnimi": "EesnimTm",
        "Perenimi": "JPeryyydled",
        "Asutus": "Programmeerijad Co",
        "Telefon": "82215934",
        "Email": "jarva2@47998dkj.vmk",
        "MAAKOND": "Järva maakond"
    },
    {
        "Eesnimi": "Qwexyydf",
        "Perenimi": "Uuyydled",
        "Asutus": "Konsultandid olgu omaette ja Co",
        "Telefon": "1115934",
        "Email": "VVedfd3@47783dkj.vmk",
        "MAAKOND": "Jõgeva maakond"
    },
    {
        "Eesnimi": "JgvEsnim",
        "Perenimi": "PerUuyydled",
        "Asutus": "Konsultandid ja meie Co",
        "Telefon": "881115934",
        "Email": "Jõgev88@47783dkj.vmk",
        "MAAKOND": "Jõgeva maakond"
    },
    {
        "Eesnimi": "Lxxyydf",
        "Perenimi": "Vlyydled",
        "Asutus": "Konsultandid Olgu tasem Co",
        "Telefon": "343515934",
        "Email": "HHu373@4uuyy383dkj.vmk",
        "MAAKOND": "Lääne maakond"
    },
    {
        "Eesnimi": "Llsyyydf",
        "Perenimi": "Xyyydled",
        "Asutus": "Konsultandid Olgu omaette Co",
        "Telefon": "983515934",
        "Email": "HHu3@4yy383dkj.vmk",
        "MAAKOND": "Lääne-Viru maakond"
    },
    {
        "Eesnimi": "Llsxxdf",
        "Perenimi": "Xpärnfmdled",
        "Asutus": "Konsultandid Virtuaalkoosolekul Co",
        "Telefon": "33515934",
        "Email": "11e7u3@4yy3dkj.vmk",
        "MAAKOND": "Pärnu maakond"
    },
    {
        "Eesnimi": "Llsxxdf",
        "Perenimi": "Xxpõlvfmdled",
        "Asutus": "Konsultandid Mõttetud mehed Co",
        "Telefon": "2115934",
        "Email": "11ed88@4hh3dkj.mk",
        "MAAKOND": "Põlva maakond"
    },
    {
        "Eesnimi": "Llsdfrapl",
        "Perenimi": "Yldfmdled",
        "Asutus": "Konsultandid Juravad Co",
        "Telefon": "83645934",
        "Email": "vvd88@hh3dkj.mk",
        "MAAKOND": "Rapla maakond"
    },
    {
        "Eesnimi": "Devvdf",
        "Perenimi": "Uusaar",
        "Asutus": "Konsultandid Jauravad Co",
        "Telefon": "645934",
        "Email": "vvd@883dkj.mk",
        "MAAKOND": "Saare maakond"
    },
    {
        "Eesnimi": "Vtarteesnimi",
        "Perenimi": "Wdfmmdled",
        "Asutus": "Konsultandid Hirmuvad Co",
        "Telefon": "988445934",
        "Email": "2233@lfg3dkj.fk",
        "MAAKOND": "Tartu maakond"
    },
    { "Eesnimi": "Aamxdf,",
        "Perenimi": "Lmmvalg",
        "Asutus": "Konsultandid kardavad Co",
        "Telefon": "668445934",
        "Email": "sxx33@ldkj.fk",
        "MAAKOND": "Valga maakond"
    },
    {
        "Eesnimi": "Tmxdf",
        "Perenimi": "Sldfbksdled",
        "Asutus": "Konsultandid Lasid jalga Co",
        "Telefon": "778445934",
        "Email": "sxxxx@ldddfkj.dfk",
        "MAAKOND": "Viljandi maakond"
    },
    {
        "Eesnimi": "Lmnmxdfvilj",
        "Perenimi": "Olhhsldf",
        "Asutus": "Konsultandid jooksid Co",
        "Telefon": "7878445934",
        "Email": "sddxxx@ldddfkj.dfk",
        "MAAKOND": "Viljandi maakond"
    },
    {
        "Eesnimi": "Tmldf",
        "Perenimi": "Obksdled",
        "Asutus": "Konsultandid and Co",
        "Telefon": "334445934",
        "Email": "sdfjd@lsdfkj.dfk",
        "MAAKOND": "Võru maakond"
    },
    {
        "Eesnimi": "Tmldfvõr",
        "Perenimi": "Obksdled",
        "Asutus": "Konsultandid and Co",
        "Telefon": "33444593466",
        "Email": "sdfjd@lsdfkj.ll",
        "MAAKOND": "Võru maakond"
    }
];

//import { SampleJson } from "/home/projects/bzkfnq-qq3qff/src/app/konsultant/sampleJson"
//import * as SampleJSON from './sampleJson.json';
//https://stackoverflow.com/questions/34944099/how-to-import-a-json-file-in-ecmascript-6
//https://stackoverflow.com/questions/57141983/cannot-find-module-on-import-with-local-json-file
class KonsultantComponent {
    constructor() {
        //Eesnimi:string;
        this.kooonsultArray = [];
        this.nimeke = "Wkkeerlzzdyydf";
        this.nimeke2 = "Vlzzdyydf";
        this.maak = xtee.county;
    }
    ////   this.ngOnInit();
    //} 
    ngOnInit() {
        //this.filterKirjetUus();
        for (let key in konsultantideNimekiri) {
            if (konsultantideNimekiri.hasOwnProperty(key)) {
                this.kooonsultArray.push(konsultantideNimekiri[key]);
            }
            //this.filterKirjet();
            // konsultantideNimekiri.Eesnimi;
            ///localStorage.setItem("Array", this.kooonsultArray);
            ///this.maakonnaValik();
            ///this.filterKirjet2();
        }
        this.maakonnaValik();
        console.log("maakonnakee praegu", this.maakond);
        this.filterKirjetUus();
        //alert(this.maakonnanimi);
        //alert(this.kooonsultArray);
    }
    maakonnaValik() {
        this.maakond = this.maak; // localStorage.getItem("maakond");
        //this.maakonnanimi = "Harju maakond";
    }
    //"MAAKOND": "Harju maakond"
    //oigeKirje:any;
    filterKirjet() {
        var oigeKirje = this.kooonsultArray.filter(e => {
            return e.Eesnimi === this.nimeke;
        });
        oigeKirje.forEach(obj => {
            console.log(obj.Asutus);
            localStorage.setItem("Firmanimi", obj.Asutus);
        });
    }
    filterKirjetUus() {
        this.oigeKirjeUus = this.kooonsultArray.filter(e => {
            return e.MAAKONDK === this.maakond;
        });
        //console.log("nimeke", this.nimeke);
        //console.log("uusOige", this.oigeKirjeUus);
    }
    //// filterSektorKirjet(){
    ////   this.oigeKirjeSektor = this.sektorArray.filter(e=>{
    ////     return e.Sektor === this.sektorinimi
    ////   })  
    //for (var index in indexar) {
    //  console.log('Indexx:', index); // prints indexes: 0, 1, 2, 3
    //  console.log('Index array:', indexar[index]); // prints elements: 10, 20, 30, 40
    //}
    //}
    filterKirjet2() {
        for (let index in konsultantideNimekiri) {
            //this.valjamuutuja ='xx';
            if (konsultantideNimekiri[index].Eesnimi === "Weerlzzdyydf") {
                console.log("Siin see on");
                console.log("emailide trukkimine", konsultantideNimekiri[index].Email);
                this.valjamuutuja = konsultantideNimekiri[index].Email;
            }
            console.log(index);
            console.log(konsultantideNimekiri[index]);
            console.log(konsultantideNimekiri[index].Eesnimi);
            this.valjamuutuja2 = konsultantideNimekiri[index].Telefon;
            //this.valjamuutuja = konsultantideNimekiri[index].Email;
            // let obj: MyObj = JSON.parse(konsultantideNimekiri);
            //console.log(obj.Eesnimi);
            //console.log(obj.Perenimi);
            //https://stackoverflow.com/questions/38688822/how-to-parse-json-string-in-typescript  
            //var oigeKirje= this.kooonsultArray[index].filter(e=>{
            //  return e.MAAKOND === this.maakonnanimi
            //})
            //oigeKirje.forEach(obj=> {
            //  console.log(obj.Asutus);
            //  localStorage.setItem("Firmanimi", obj.Asutus); 
            //});
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: KonsultantComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: KonsultantComponent, isStandalone: true, selector: "konsultant-component", ngImport: i0, template: "<p class=\"tekstike\">\r\n  Konsultandid piirkonnas\r\n  </p>\r\n  {{maakonnaValik()}}\r\n  {{filterKirjetUus()}}\r\n  \r\n  <!--p class=\"tekstikev\">\r\n    Mis infot me hetkeolukorra kohta teame\r\n    </p-->\r\n  \r\n    <p class=\"tekstike2\">\r\n      \r\n      Esitatud tulemuste paremaks m\u00F5istmiseks ja nende rakendamise l\u00E4bim\u00F5tlemiseks soovitame n\u00F5u pidada erialan\u00F5ustajaga. <br><br>\r\n  Teie piirkonna n\u00F5ustajad:\r\n  \r\n  \r\n  \r\n  <!--\r\n      {{ kooonsultArray }}\r\n     <br><br><br>\r\n     {{ valjamuutuja }}\r\n     \r\n  -->\r\n  \r\n    </p>\r\n  \r\n    <p class=\"tekstikev\">\r\n    \r\n    \r\n    </p>\r\n  \r\n    <!--table id=\"employees\">\r\n    \r\n    <tr>\r\n    <th>Eesnimi</th>\r\n    <th>Perenimi</th>\r\n    <th>Asutus</th>\r\n    <th>Telefon</th>\r\n    <th>Email</th>\r\n    \r\n  </tr>\r\n  \r\n    <tr *ngFor=\"let sekid1 of oigeKirjeUus\">\r\n    <td>{{sekid1.Eesnimi}}</td>\r\n    <td>{{sekid1.Perenimi}}</td>\r\n    <td>{{sekid1.Asutus}}</td>\r\n    <td>{{sekid1.Telefon}}</td>\r\n    <td>{{sekid1.Email}}</td>\r\n    </tr>\r\n  \r\n    </table-->\r\n  \r\n  <br>\r\n  <!--p class=\"tekstike2a\">\r\n  Alternatiivne variant konsultantide info kuvamiseks:\r\n  </p-->\r\n  \r\n    <table id=\"employees2\">\r\n    \r\n      <!--tr>\r\n      <th>Eesnimi</th>\r\n      <th>Perenimi</th>\r\n      <th>Asutus</th>\r\n      <th>Telefon</th>\r\n      <th>Email</th>\r\n      \r\n    </tr-->\r\n      <div class=\"dashboard\">\r\n      <div class=\"dashboard-type\">\r\n      <tr *ngFor=\"let sekid1 of oigeKirjeUus\">\r\n      <!--td>{{sekid1.Eesnimi}}</td>\r\n      <td>{{sekid1.Perenimi}}</td>\r\n      <td>{{sekid1.Asutus}}</td>\r\n      <td>{{sekid1.Telefon}}</td>\r\n      <td>{{sekid1.Email}}</td-->\r\n      <!--div class=\"dashboard-type\"-->\r\n      <div class=\"dashboard-row2\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"rida\"\r\n        >\r\n        {{sekid1.Eesnimi}},&nbsp;&nbsp;{{sekid1.Perenimi}} <br>\r\n        {{sekid1.Asutus}}\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"content\">Tel: {{sekid1.Telefon}}</div>\r\n        <div class=\"content\">Email: {{sekid1.Email}}</div>\r\n      </div>\r\n    </div>\r\n    \r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n      <!--/div-->\r\n  \r\n    </tr>\r\n      </div>\r\n      </div>\r\n    \r\n      </table>\r\n  \r\n  <br><br>\r\n  \r\n    <!--table>\r\n    \r\n    <tr *ngFor=\"let sekid2 of kooonsultArray\">\r\n    <td>{{sekid2.Asutus}}</td>\r\n    <td>jjj</td>\r\n    <td>{{sekid2.Eesnimi}}</td>\r\n    <td>ll</td>\r\n    <td>ll</td>\r\n    <td>ll</td>\r\n    <td>lkj</td>\r\n  </tr>\r\n  \r\n    </table-->", styles: [".tekstike{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:20px;letter-spacing:0;line-height:28px;margin-top:-12px}.tekstike2{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-30px}.tekstike2a{position:relative;width:1034px;height:24px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:0}#employees{font-family:Trebuchet MS,Arial,Helvetica,sans-serif;border-collapse:collapse;width:90%;margin-left:40px}#employees td,#employees th{border:1px solid #ddd;padding:8px}#employees tr:nth-child(2n){background-color:#f2f2f2}#employees tr:hover{background-color:#ddd}#employees th{padding-top:6px;padding-bottom:6px;text-align:left;background-color:#005aa3;color:#fff;font-family:Roboto-Regular,Helvetica;font-weight:400;font-size:16px}#employees td{font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px}#employees2{font-family:Trebuchet MS,Arial,Helvetica,sans-serif;border-collapse:collapse;width:90%;margin-left:40px;border-color:var(--colors-blue-blue-300, #99bdda)}#employees2 td,#employees2 th{border:1px solid #ddd;padding:8px}.dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 10px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:436px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:18px;line-height:100%;font-weight:400;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.rida{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: KonsultantComponent, decorators: [{
            type: Component,
            args: [{ selector: 'konsultant-component', standalone: true, imports: [CommonModule], template: "<p class=\"tekstike\">\r\n  Konsultandid piirkonnas\r\n  </p>\r\n  {{maakonnaValik()}}\r\n  {{filterKirjetUus()}}\r\n  \r\n  <!--p class=\"tekstikev\">\r\n    Mis infot me hetkeolukorra kohta teame\r\n    </p-->\r\n  \r\n    <p class=\"tekstike2\">\r\n      \r\n      Esitatud tulemuste paremaks m\u00F5istmiseks ja nende rakendamise l\u00E4bim\u00F5tlemiseks soovitame n\u00F5u pidada erialan\u00F5ustajaga. <br><br>\r\n  Teie piirkonna n\u00F5ustajad:\r\n  \r\n  \r\n  \r\n  <!--\r\n      {{ kooonsultArray }}\r\n     <br><br><br>\r\n     {{ valjamuutuja }}\r\n     \r\n  -->\r\n  \r\n    </p>\r\n  \r\n    <p class=\"tekstikev\">\r\n    \r\n    \r\n    </p>\r\n  \r\n    <!--table id=\"employees\">\r\n    \r\n    <tr>\r\n    <th>Eesnimi</th>\r\n    <th>Perenimi</th>\r\n    <th>Asutus</th>\r\n    <th>Telefon</th>\r\n    <th>Email</th>\r\n    \r\n  </tr>\r\n  \r\n    <tr *ngFor=\"let sekid1 of oigeKirjeUus\">\r\n    <td>{{sekid1.Eesnimi}}</td>\r\n    <td>{{sekid1.Perenimi}}</td>\r\n    <td>{{sekid1.Asutus}}</td>\r\n    <td>{{sekid1.Telefon}}</td>\r\n    <td>{{sekid1.Email}}</td>\r\n    </tr>\r\n  \r\n    </table-->\r\n  \r\n  <br>\r\n  <!--p class=\"tekstike2a\">\r\n  Alternatiivne variant konsultantide info kuvamiseks:\r\n  </p-->\r\n  \r\n    <table id=\"employees2\">\r\n    \r\n      <!--tr>\r\n      <th>Eesnimi</th>\r\n      <th>Perenimi</th>\r\n      <th>Asutus</th>\r\n      <th>Telefon</th>\r\n      <th>Email</th>\r\n      \r\n    </tr-->\r\n      <div class=\"dashboard\">\r\n      <div class=\"dashboard-type\">\r\n      <tr *ngFor=\"let sekid1 of oigeKirjeUus\">\r\n      <!--td>{{sekid1.Eesnimi}}</td>\r\n      <td>{{sekid1.Perenimi}}</td>\r\n      <td>{{sekid1.Asutus}}</td>\r\n      <td>{{sekid1.Telefon}}</td>\r\n      <td>{{sekid1.Email}}</td-->\r\n      <!--div class=\"dashboard-type\"-->\r\n      <div class=\"dashboard-row2\">\r\n      <div class=\"dashboard-row-item\">\r\n        <div\r\n          class=\"rida\"\r\n        >\r\n        {{sekid1.Eesnimi}},&nbsp;&nbsp;{{sekid1.Perenimi}} <br>\r\n        {{sekid1.Asutus}}\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-row-item2\">\r\n        <div class=\"content\">Tel: {{sekid1.Telefon}}</div>\r\n        <div class=\"content\">Email: {{sekid1.Email}}</div>\r\n      </div>\r\n    </div>\r\n    \r\n    <svg\r\n      class=\"divider2\"\r\n      width=\"950\"\r\n      height=\"16\"\r\n      viewBox=\"0 0 950 16\"\r\n      fill=\"none\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <line y1=\"7.5\" x2=\"950\" y2=\"7.5\" stroke=\"#669CC8\" />\r\n    </svg>\r\n      <!--/div-->\r\n  \r\n    </tr>\r\n      </div>\r\n      </div>\r\n    \r\n      </table>\r\n  \r\n  <br><br>\r\n  \r\n    <!--table>\r\n    \r\n    <tr *ngFor=\"let sekid2 of kooonsultArray\">\r\n    <td>{{sekid2.Asutus}}</td>\r\n    <td>jjj</td>\r\n    <td>{{sekid2.Eesnimi}}</td>\r\n    <td>ll</td>\r\n    <td>ll</td>\r\n    <td>ll</td>\r\n    <td>lkj</td>\r\n  </tr>\r\n  \r\n    </table-->", styles: [".tekstike{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:20px;letter-spacing:0;line-height:28px;margin-top:-12px}.tekstike2{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-30px}.tekstike2a{position:relative;width:1034px;height:24px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:0}#employees{font-family:Trebuchet MS,Arial,Helvetica,sans-serif;border-collapse:collapse;width:90%;margin-left:40px}#employees td,#employees th{border:1px solid #ddd;padding:8px}#employees tr:nth-child(2n){background-color:#f2f2f2}#employees tr:hover{background-color:#ddd}#employees th{padding-top:6px;padding-bottom:6px;text-align:left;background-color:#005aa3;color:#fff;font-family:Roboto-Regular,Helvetica;font-weight:400;font-size:16px}#employees td{font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px}#employees2{font-family:Trebuchet MS,Arial,Helvetica,sans-serif;border-collapse:collapse;width:90%;margin-left:40px;border-color:var(--colors-blue-blue-300, #99bdda)}#employees2 td,#employees2 th{border:1px solid #ddd;padding:8px}.dashboard,.dashboard *{box-sizing:border-box}.dashboard{background:var(--colors-surface-primary, #ffffff);border-radius:4px;border-style:solid;border-color:var(--colors-blue-blue-300, #99bdda);border-width:0px 0px 0px 6px;padding:var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 16px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;position:relative;box-shadow:var(--elevation-01-light-mode-box-shadow, 0px 1px 5px 0px rgba(0, 0, 0, .2))}.dashboard-type{border-radius:8px;border-style:solid;border-color:var(--colors-blue-blue-400, #669cc8);border-width:1px;padding:var(--cards-sizing-padding-small, 20px) var(--cards-sizing-padding-medium, 24px) var(--cards-sizing-padding-small, 10px) var(--cards-sizing-padding-medium, 24px);display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;align-self:stretch;flex-shrink:0;position:relative}.dashboard-row{display:flex;flex-direction:row;gap:22px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.dashboard-row-item{display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;flex:1;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-maakonnas-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.dashboard-row-item2{display:flex;flex-direction:column;gap:4px;align-items:flex-start;justify-content:flex-start;flex-shrink:0;width:436px;position:relative}.label{color:var(--colors-text-tertiary, #686b78);margin-top:-5px;text-align:left;font-family:var(--body-small-font-family, \"Roboto-Regular\", sans-serif);font-size:var(--body-small-font-size, 14px);line-height:var(--body-small-line-height, 100%);font-weight:var(--body-small-font-weight, 400);position:relative;align-self:stretch}.content{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Bold,sans-serif;font-size:18px;line-height:100%;font-weight:400;position:relative;align-self:stretch}.divider{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:24px;position:relative;overflow:visible}.dashboard-row2{display:flex;flex-direction:row;gap:83px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.mitu-ettev-tetest-on-sinu-ettev-tte-tegevusalade-grupis-sinu-ettev-ttest-paremas-seisus{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}.divider2{padding:8px 0;display:flex;flex-direction:column;gap:0px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:auto;position:relative;overflow:visible}.dashboard-row3{display:flex;flex-direction:row;gap:108px;align-items:flex-start;justify-content:flex-start;align-self:stretch;flex-shrink:0;height:40px;position:relative}.rida{color:var(--colors-text-primary, #131317);text-align:left;font-family:Roboto-Regular,sans-serif;font-size:18px;line-height:133%;font-weight:400;position:relative;align-self:stretch}\n"] }]
        }], ctorParameters: () => [] });

class KonsultantAvaComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: KonsultantAvaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: KonsultantAvaComponent, isStandalone: true, selector: "konsultantava-component", ngImport: i0, template: "<p class=\"tekstike\">\r\n  Konsultatsioonid\r\n  </p>\r\n  \r\n  <!--p class=\"tekstikev\">\r\n    Mis infot me hetkeolukorra kohta teame\r\n    </p-->\r\n  \r\n    <p class=\"tekstike2\">\r\n    Masin\u00F5ppe tulemuste t\u00F5lgendamine v\u00F5ib olla keerukas ja arvestades masin\u00F5ppe olemust, v\u00F5ib s\u00FCsteem j\u00F5uda ka eksitavale v\u00F5i kallutatud j\u00E4reldusele. Seega on \u00E4\u00E4rmiselt oluline suhelda erialan\u00F5ustajaga, kui kahtlete tulemustes v\u00F5i nende t\u00F5lgenduses. Sellelt alalehelt leiate juhtn\u00F6\u00F6rid, kuidas erialan\u00F5ustaja poole p\u00F6\u00F6rduda.\r\n  \r\n  <!--\r\n      {{ kooonsultArray }}\r\n     <br><br><br>\r\n     {{ valjamuutuja }}\r\n     \r\n  -->\r\n  \r\n    </p>", styles: [".tekstike{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px;margin-top:-32px}.tekstike2{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-30px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: KonsultantAvaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'konsultantava-component', standalone: true, template: "<p class=\"tekstike\">\r\n  Konsultatsioonid\r\n  </p>\r\n  \r\n  <!--p class=\"tekstikev\">\r\n    Mis infot me hetkeolukorra kohta teame\r\n    </p-->\r\n  \r\n    <p class=\"tekstike2\">\r\n    Masin\u00F5ppe tulemuste t\u00F5lgendamine v\u00F5ib olla keerukas ja arvestades masin\u00F5ppe olemust, v\u00F5ib s\u00FCsteem j\u00F5uda ka eksitavale v\u00F5i kallutatud j\u00E4reldusele. Seega on \u00E4\u00E4rmiselt oluline suhelda erialan\u00F5ustajaga, kui kahtlete tulemustes v\u00F5i nende t\u00F5lgenduses. Sellelt alalehelt leiate juhtn\u00F6\u00F6rid, kuidas erialan\u00F5ustaja poole p\u00F6\u00F6rduda.\r\n  \r\n  <!--\r\n      {{ kooonsultArray }}\r\n     <br><br><br>\r\n     {{ valjamuutuja }}\r\n     \r\n  -->\r\n  \r\n    </p>", styles: [".tekstike{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px;margin-top:-32px}.tekstike2{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-30px}\n"] }]
        }] });

class KonsultantInfoComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: KonsultantInfoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: KonsultantInfoComponent, isStandalone: true, selector: "konsultantinfo-component", ngImport: i0, template: "<p class=\"tekstike\">\r\n  Konsultatsioonile p\u00F6\u00F6rdumine\r\n  </p>\r\n  \r\n  <p class=\"tekstike2\">\r\n  Konsultatsioonile saab p\u00F6\u00F6rduda maakondlike arenduskeskuste (MAK-ide) vahendusel. MAK-id on maakondades paiknevad arendusorganisatsioonid, mis aitavad luua uusi ja arendada juba tegutsevaid ettev\u00F5tteid. Investeeringute abil soodustavad need t\u00F6\u00F6kohtade loomist ja aitavad nii kaasa elanike majanduslikule toimetulekule. Eelk\u00F5ige tegutsevadki maakondlikud arenduskeskused heaolu m\u00F5jutavates valdkondades.\r\n  \r\n  <br><br>\r\n  Maakondlike arenduskeskuste katusorganisatsioon MT\u00DC Maakondlikud Arenduskeskused on majandus- ja kommunikatsiooniministeeriumi koost\u00F6\u00F6partner. MT\u00DC pakub ettev\u00F5tluskoolitusi, n\u00F5ustamist ja v\u00F5imalust osaleda projektides, r\u00F5huga reaalajamajandusel.\r\n  \r\n  </p>\r\n  \r\n  <!--br-->\r\n  \r\n  <!--iframe width=\"100%\" height=\"750\" src=\"https://www.arenduskeskused.ee/\"></iframe-->\r\n  \r\n  <!--br-->", styles: [".tekstike{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikeb{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:20px;letter-spacing:0;line-height:28px;margin-top:-12px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-30px}.tekstike2a{position:relative;width:1034px;height:24px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:0}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: KonsultantInfoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'konsultantinfo-component', standalone: true, template: "<p class=\"tekstike\">\r\n  Konsultatsioonile p\u00F6\u00F6rdumine\r\n  </p>\r\n  \r\n  <p class=\"tekstike2\">\r\n  Konsultatsioonile saab p\u00F6\u00F6rduda maakondlike arenduskeskuste (MAK-ide) vahendusel. MAK-id on maakondades paiknevad arendusorganisatsioonid, mis aitavad luua uusi ja arendada juba tegutsevaid ettev\u00F5tteid. Investeeringute abil soodustavad need t\u00F6\u00F6kohtade loomist ja aitavad nii kaasa elanike majanduslikule toimetulekule. Eelk\u00F5ige tegutsevadki maakondlikud arenduskeskused heaolu m\u00F5jutavates valdkondades.\r\n  \r\n  <br><br>\r\n  Maakondlike arenduskeskuste katusorganisatsioon MT\u00DC Maakondlikud Arenduskeskused on majandus- ja kommunikatsiooniministeeriumi koost\u00F6\u00F6partner. MT\u00DC pakub ettev\u00F5tluskoolitusi, n\u00F5ustamist ja v\u00F5imalust osaleda projektides, r\u00F5huga reaalajamajandusel.\r\n  \r\n  </p>\r\n  \r\n  <!--br-->\r\n  \r\n  <!--iframe width=\"100%\" height=\"750\" src=\"https://www.arenduskeskused.ee/\"></iframe-->\r\n  \r\n  <!--br-->", styles: [".tekstike{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikeb{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:20px;letter-spacing:0;line-height:28px;margin-top:-12px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-30px}.tekstike2a{position:relative;width:1034px;height:24px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px;margin-top:0}\n"] }]
        }] });

//import { products } from '../products';
class VarvidComponent {
    constructor() {
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
    }
    ngOnInit() {
        this.kirjutaVarvid();
    }
    //varvid
    //thresholdConfig = {
    //  '0': {color: '#EFB2B2'},
    //  '0.4': {color: '#FFE1A0'},
    //  '0.6': {color: '#ACCFBA'}
    //};
    kirjutaVarvid() {
        if (this.effmadalNumber > this.effkeskmineNumber && this.effmadalNumber > this.effkorgeNumber) {
            localStorage.setItem("efektVarv", '1');
        }
        if (this.effkeskmineNumber > this.effmadalNumber && this.effkeskmineNumber > this.effkorgeNumber) {
            localStorage.setItem("efektVarv", '2');
        }
        if (this.effkorgeNumber > this.effkeskmineNumber && this.effkorgeNumber > this.effmadalNumber) {
            localStorage.setItem("efektVarv", '3');
        }
        if (this.maksmadalNumber > this.makskeskmineNumber && this.maksmadalNumber > this.makskorgeNumber) {
            localStorage.setItem("makseVarv", '1');
        }
        if (this.makskeskmineNumber > this.maksmadalNumber && this.makskeskmineNumber > this.makskorgeNumber) {
            localStorage.setItem("makseVarv", '2');
        }
        if (this.makskorgeNumber > this.makskeskmineNumber && this.makskorgeNumber > this.maksmadalNumber) {
            localStorage.setItem("makseVarv", '3');
        }
        if (this.voimmadalNumber > this.voimkeskmineNumber && this.voimmadalNumber > this.voimkorgeNumber) {
            localStorage.setItem("voimVarv", '1');
        }
        if (this.voimkeskmineNumber > this.voimmadalNumber && this.voimkeskmineNumber > this.voimkorgeNumber) {
            localStorage.setItem("voimVarv", '2');
        }
        if (this.voimkorgeNumber > this.voimkeskmineNumber && this.voimkorgeNumber > this.voimmadalNumber) {
            localStorage.setItem("voimVarv", '3');
        }
        if (this.tasumadalNumber > this.tasukeskmineNumber && this.tasumadalNumber > this.tasukorgeNumber) {
            localStorage.setItem("tasuvVarv", '1');
        }
        if (this.tasukeskmineNumber > this.tasumadalNumber && this.tasukeskmineNumber > this.tasukorgeNumber) {
            localStorage.setItem("tasuvVarv", '2');
        }
        if (this.tasukorgeNumber > this.tasukeskmineNumber && this.tasukorgeNumber > this.tasumadalNumber) {
            localStorage.setItem("tasuvVarv", '3');
        }
        if (this.toomadalNumber > this.tookeskmineNumber && this.toomadalNumber > this.tookorgeNumber) {
            localStorage.setItem("toojoudVarv", '1');
        }
        if (this.tookeskmineNumber > this.toomadalNumber && this.tookeskmineNumber > this.tookorgeNumber) {
            localStorage.setItem("toojoudVarv", '2');
        }
        if (this.tookorgeNumber > this.tookeskmineNumber && this.tookorgeNumber > this.toomadalNumber) {
            localStorage.setItem("toojoudVarv", '3');
        }
        if (isNaN(this.toomadalNumber)) {
            localStorage.setItem("toojoudVarv", '4');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: VarvidComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: VarvidComponent, isStandalone: true, selector: "varvid-component", ngImport: i0, template: "", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: VarvidComponent, decorators: [{
            type: Component,
            args: [{ selector: 'varvid-component', standalone: true, imports: [XteechangeComponent], template: "" }]
        }], ctorParameters: () => [] });

//import { FormControl } from '@angular/forms';
//mport { Subscription } from 'rxjs'
//import { xtee } from '../../xtee/xtee';
//import { products } from '../products';
class Motle1Component {
    constructor() {
    }
    ngOnInit() {
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Motle1Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Motle1Component, isStandalone: true, selector: "motle1-component", ngImport: i0, template: "<div class=\"tekstike\">\r\n  Hea kasutaja!\r\n  </div>\r\n  \r\n  \r\n  <div class=\"tekstike2\">\r\n    Ettev\u00F5tte eluj\u00F5ulisuse rakendus on tehisintellekti tehnoloogial p\u00F5hinev rakendus, mis prognoosib ettev\u00F5tte majandusn\u00E4itajate ja riigile esitatud andmete p\u00F5hjal<span style=\"font-weight: 700\"> ettev\u00F5tte eluj\u00F5ulisust</span>.\r\n  </div>\r\n  \r\n  <div class=\"tekstike2\">\r\n    Eluj\u00F5ulisuse rakendus on abiks majandusn\u00E4itajate anal\u00FC\u00FCsimisel ja v\u00F5iks seega aidata hoida kokku v\u00E4ike- ja keskmise ettev\u00F5tja raha ja aega.\r\n  </div>\r\n  \r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin2\">\r\n      Rakendus v\u00F5iks olla kasulik t\u00F6\u00F6riist kolmel erineval moel: \r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin\"> \r\n    \r\n    <ul>\r\n    <li>annab p\u00F5hjaliku \u00FClevaate <span style=\"font-weight: 700\">ettev\u00F5tte hetkeseisust</span>;</li>\r\n    <li>v\u00F5imaldab <span style=\"font-weight: 700\">v\u00F5rrelda</span> oma ettev\u00F5tet teiste sarnaste ettev\u00F5tetega;</li>\r\n    <li>pakub <span style=\"font-weight: 700\">tulevikuprognoosi</span> ehk hindab, kui eluj\u00F5uline on ettev\u00F5te l\u00E4hitulevikus v\u00F5rreldes teiste ettev\u00F5tetega.</li>\r\n    </ul>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin2\">\r\n      Rakendus hindab viit t\u00FC\u00FCpi eluj\u00F5ulisust: maksev\u00F5imet, efektiivsust, finantsv\u00F5imendust, tasuvust ja t\u00F6\u00F6j\u00F5ukulude tootlikkust. Olles anal\u00FC\u00FCsinud ettev\u00F5tte majandusn\u00E4itajaid, annab rakendus muuhulgas teada, millised tegevused v\u00F5iksid ettev\u00F5tte k\u00E4ek\u00E4iku parandada.\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin3\">\r\n      Rakendusest ettev\u00F5ttele t\u00F5usev kasu on suurem, kui <span style=\"font-weight: 700\">m\u00F5elda rakendusega kaasa</span>. Kaasa on v\u00F5imalik rakendusega m\u00F5elda selliselt, et anda omapoolset sisendit.\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"tekstike2\">\r\n    Hetkel ei ole kaasam\u00F5tlemise komponente lisatud, kuid neid hakkab siia alalehek\u00FCljele j\u00E4rk-j\u00E4rgult lisanduma.\r\n  </div>\r\n  \r\n  <!--div class=\"tekstike2\">\r\n    Klienditugi: tel 625 9300 (E\u2013N 8.30\u201316.30, R 8.30\u201315.30), stat&#64;stat.ee\r\n  </div>\r\n  \r\n  <div class=\"tekstike2\">\r\n    Rakenduse kohta k\u00E4ivatele k\u00FCsimustele saab vastata <a [href]=\"'https://kysitlus.stat.ee/552226?lang=et'\"\r\n    appExternalUrl target=\"_blank\"\r\n    >siin</a> (palun kasutage arvutit, mobiilivaates ei pruugi lehed \u00F5igesti kuvada).\r\n  </div-->\r\n  \r\n", styles: [".container{display:block;position:relative;margin-left:20px;padding-top:10px;padding-left:.5rem;margin-right:.8rem;margin-bottom:.5rem;width:270px;height:30px;cursor:pointer;color:#1dd826f5;background-color:#961756;font-size:16px;font-weight:700;font-family:Arial,Helvetica,sans-serif;float:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container.container input{background-color:#420e96}.container:hover input~.checkmark{background-color:#6b95c5}.container input{position:absolute;opacity:0;background-color:#420e96;cursor:pointer;height:0;width:0}.container input~.checkmark{position:absolute;top:0;left:0;height:2rem;width:2rem;background-color:#22b3a6}.container input~.checkmark:after{content:\"\";position:absolute;display:none;left:.4rem;top:.1rem;width:1rem;height:.8rem;border:solid rgb(248,209,36);border-width:0 .3rem .5rem 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition:1.4s;transition:1.4s}.container input:checked~.checkmark{background-color:#420e96}.container input:checked~.checkmark:after{display:block}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none}.container2{display:block;position:relative;margin-left:20px;padding-top:3px;padding-left:.5rem;margin-right:.8rem;margin-bottom:.8rem;width:270px;height:30px;color:#1dd826f5;background-color:#961756;font-size:16px;font-weight:700;font-family:Arial,Helvetica,sans-serif;float:left}.tekstselgit4{color:#1e144bf5;font-size:16px;font-weight:700;font-family:Arial,Helvetica,sans-serif;margin:5px 20px 5px 0;padding-left:20px}.tekstselgit5{color:#1e144bf5;font-size:16px;font-weight:700;font-family:Arial,Helvetica,sans-serif;margin:5px 20px -10px 0;padding-left:20px}.tekstselgit6{color:#1e144bf5;font-size:26px;font-weight:700;font-family:Arial,Helvetica,sans-serif;margin:5px 20px 10px 0;padding-left:20px}.tekstselgit7{color:#1e144bf5;font-size:36px;font-weight:700;font-family:Arial,Helvetica,sans-serif;margin:5px 20px 10px 0;padding-left:20px}.tekstselgit8{color:#1e144bf5;font-size:16px;font-weight:400;font-family:Arial,Helvetica,sans-serif;margin:5px 20px 10px 0;padding-left:20px;font-style:italic}.tekstselgit9{color:#1e144bf5;font-size:16px;font-weight:700;font-family:Arial,Helvetica,sans-serif;margin:5px 20px 10px 0;padding-left:20px}.tekstike{position:relative;width:1034px;padding-top:23px;padding-bottom:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:10px;padding-bottom:20px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px;margin-top:-32px}.tekstike2{position:relative;width:1084px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:-23px}.rowmargin3{margin-top:23px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Motle1Component, decorators: [{
            type: Component,
            args: [{ selector: 'motle1-component', standalone: true, template: "<div class=\"tekstike\">\r\n  Hea kasutaja!\r\n  </div>\r\n  \r\n  \r\n  <div class=\"tekstike2\">\r\n    Ettev\u00F5tte eluj\u00F5ulisuse rakendus on tehisintellekti tehnoloogial p\u00F5hinev rakendus, mis prognoosib ettev\u00F5tte majandusn\u00E4itajate ja riigile esitatud andmete p\u00F5hjal<span style=\"font-weight: 700\"> ettev\u00F5tte eluj\u00F5ulisust</span>.\r\n  </div>\r\n  \r\n  <div class=\"tekstike2\">\r\n    Eluj\u00F5ulisuse rakendus on abiks majandusn\u00E4itajate anal\u00FC\u00FCsimisel ja v\u00F5iks seega aidata hoida kokku v\u00E4ike- ja keskmise ettev\u00F5tja raha ja aega.\r\n  </div>\r\n  \r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin2\">\r\n      Rakendus v\u00F5iks olla kasulik t\u00F6\u00F6riist kolmel erineval moel: \r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin\"> \r\n    \r\n    <ul>\r\n    <li>annab p\u00F5hjaliku \u00FClevaate <span style=\"font-weight: 700\">ettev\u00F5tte hetkeseisust</span>;</li>\r\n    <li>v\u00F5imaldab <span style=\"font-weight: 700\">v\u00F5rrelda</span> oma ettev\u00F5tet teiste sarnaste ettev\u00F5tetega;</li>\r\n    <li>pakub <span style=\"font-weight: 700\">tulevikuprognoosi</span> ehk hindab, kui eluj\u00F5uline on ettev\u00F5te l\u00E4hitulevikus v\u00F5rreldes teiste ettev\u00F5tetega.</li>\r\n    </ul>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin2\">\r\n      Rakendus hindab viit t\u00FC\u00FCpi eluj\u00F5ulisust: maksev\u00F5imet, efektiivsust, finantsv\u00F5imendust, tasuvust ja t\u00F6\u00F6j\u00F5ukulude tootlikkust. Olles anal\u00FC\u00FCsinud ettev\u00F5tte majandusn\u00E4itajaid, annab rakendus muuhulgas teada, millised tegevused v\u00F5iksid ettev\u00F5tte k\u00E4ek\u00E4iku parandada.\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"tekstike2 textmargin\"> \r\n    <div class=\"rowmargin3\">\r\n      Rakendusest ettev\u00F5ttele t\u00F5usev kasu on suurem, kui <span style=\"font-weight: 700\">m\u00F5elda rakendusega kaasa</span>. Kaasa on v\u00F5imalik rakendusega m\u00F5elda selliselt, et anda omapoolset sisendit.\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"tekstike2\">\r\n    Hetkel ei ole kaasam\u00F5tlemise komponente lisatud, kuid neid hakkab siia alalehek\u00FCljele j\u00E4rk-j\u00E4rgult lisanduma.\r\n  </div>\r\n  \r\n  <!--div class=\"tekstike2\">\r\n    Klienditugi: tel 625 9300 (E\u2013N 8.30\u201316.30, R 8.30\u201315.30), stat&#64;stat.ee\r\n  </div>\r\n  \r\n  <div class=\"tekstike2\">\r\n    Rakenduse kohta k\u00E4ivatele k\u00FCsimustele saab vastata <a [href]=\"'https://kysitlus.stat.ee/552226?lang=et'\"\r\n    appExternalUrl target=\"_blank\"\r\n    >siin</a> (palun kasutage arvutit, mobiilivaates ei pruugi lehed \u00F5igesti kuvada).\r\n  </div-->\r\n  \r\n", styles: [".container{display:block;position:relative;margin-left:20px;padding-top:10px;padding-left:.5rem;margin-right:.8rem;margin-bottom:.5rem;width:270px;height:30px;cursor:pointer;color:#1dd826f5;background-color:#961756;font-size:16px;font-weight:700;font-family:Arial,Helvetica,sans-serif;float:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container.container input{background-color:#420e96}.container:hover input~.checkmark{background-color:#6b95c5}.container input{position:absolute;opacity:0;background-color:#420e96;cursor:pointer;height:0;width:0}.container input~.checkmark{position:absolute;top:0;left:0;height:2rem;width:2rem;background-color:#22b3a6}.container input~.checkmark:after{content:\"\";position:absolute;display:none;left:.4rem;top:.1rem;width:1rem;height:.8rem;border:solid rgb(248,209,36);border-width:0 .3rem .5rem 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition:1.4s;transition:1.4s}.container input:checked~.checkmark{background-color:#420e96}.container input:checked~.checkmark:after{display:block}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none}.container2{display:block;position:relative;margin-left:20px;padding-top:3px;padding-left:.5rem;margin-right:.8rem;margin-bottom:.8rem;width:270px;height:30px;color:#1dd826f5;background-color:#961756;font-size:16px;font-weight:700;font-family:Arial,Helvetica,sans-serif;float:left}.tekstselgit4{color:#1e144bf5;font-size:16px;font-weight:700;font-family:Arial,Helvetica,sans-serif;margin:5px 20px 5px 0;padding-left:20px}.tekstselgit5{color:#1e144bf5;font-size:16px;font-weight:700;font-family:Arial,Helvetica,sans-serif;margin:5px 20px -10px 0;padding-left:20px}.tekstselgit6{color:#1e144bf5;font-size:26px;font-weight:700;font-family:Arial,Helvetica,sans-serif;margin:5px 20px 10px 0;padding-left:20px}.tekstselgit7{color:#1e144bf5;font-size:36px;font-weight:700;font-family:Arial,Helvetica,sans-serif;margin:5px 20px 10px 0;padding-left:20px}.tekstselgit8{color:#1e144bf5;font-size:16px;font-weight:400;font-family:Arial,Helvetica,sans-serif;margin:5px 20px 10px 0;padding-left:20px;font-style:italic}.tekstselgit9{color:#1e144bf5;font-size:16px;font-weight:700;font-family:Arial,Helvetica,sans-serif;margin:5px 20px 10px 0;padding-left:20px}.tekstike{position:relative;width:1034px;padding-top:23px;padding-bottom:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:10px;padding-bottom:20px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px;margin-top:-32px}.tekstike2{position:relative;width:1084px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:-23px}.rowmargin3{margin-top:23px}\n"] }]
        }], ctorParameters: () => [] });

//import { products } from '../products';
class MettextComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: MettextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: MettextComponent, isStandalone: true, selector: "mettext-component", ngImport: i0, template: "<p class=\"tekstike\">\r\n  Metoodika \u00FClevaade\r\n  </p>\r\n  \r\n  <!--p class=\"tekstikev\">\r\n    Mis infot me hetkeolukorra kohta teame\r\n    </p-->\r\n  \r\n    <p class=\"tekstike2\">\r\n      K\u00E4esoleva rakenduse tulemuste m\u00F5istmiseks on oluline vajadusel s\u00FCveneda rohkem detailidesse, kuidas on j\u00F5utud sellistele j\u00E4reldustele, nagu need selle s\u00FCsteemi poolt on siinkohal esitatud. \u00DClaltoodud vastused k\u00FCsimustele aitavad m\u00F5ista s\u00FCsteemi t\u00F6\u00F6 olemust, kuid p\u00F5hjalikumalt on alusloogika lahti kirjeldatud metoodika \u00FClevaates.  \u00DClevaade on vaadatav alltoodud nupu kaudu sisenedes, seal on v\u00F5imalik lugeda p\u00F5hjalikku materjali, seda endale alla laadida ja vajadusel v\u00E4lja tr\u00FCkkida.\r\n  \r\n    </p>", styles: [".tekstike{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:32px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-23px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: MettextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mettext-component', standalone: true, template: "<p class=\"tekstike\">\r\n  Metoodika \u00FClevaade\r\n  </p>\r\n  \r\n  <!--p class=\"tekstikev\">\r\n    Mis infot me hetkeolukorra kohta teame\r\n    </p-->\r\n  \r\n    <p class=\"tekstike2\">\r\n      K\u00E4esoleva rakenduse tulemuste m\u00F5istmiseks on oluline vajadusel s\u00FCveneda rohkem detailidesse, kuidas on j\u00F5utud sellistele j\u00E4reldustele, nagu need selle s\u00FCsteemi poolt on siinkohal esitatud. \u00DClaltoodud vastused k\u00FCsimustele aitavad m\u00F5ista s\u00FCsteemi t\u00F6\u00F6 olemust, kuid p\u00F5hjalikumalt on alusloogika lahti kirjeldatud metoodika \u00FClevaates.  \u00DClevaade on vaadatav alltoodud nupu kaudu sisenedes, seal on v\u00F5imalik lugeda p\u00F5hjalikku materjali, seda endale alla laadida ja vajadusel v\u00E4lja tr\u00FCkkida.\r\n  \r\n    </p>", styles: [".tekstike{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:32px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#09090b;font-size:16px;letter-spacing:0;line-height:24px;margin-top:-23px}\n"] }]
        }] });

class PdfService {
    constructor() {
    }
    getPdf() {
        return of(this.pdfBase64).pipe(delay(3000));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: PdfService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: PdfService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: PdfService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });

//import { products } from '../products';
class Metraport2Component {
    constructor(pdfService) {
        this.pdfService = pdfService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.pdfService.getPdf().subscribe({
            next: (res) => {
                this.pdfData = res;
                this.isLoading = false;
                if (this.pdfData) {
                    this.handleRenderPdf(this.pdfData);
                }
            },
        });
    }
    handleRenderPdf(data) {
        const pdfObject = PDFObject.embed(data, '#pdfContainer');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Metraport2Component, deps: [{ token: PdfService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Metraport2Component, isStandalone: true, selector: "metraport2-component", ngImport: i0, template: "<!--p>Metraport2</p-->\r\n\r\n<div class=\"pdfobject-container\">\r\n  <p *ngIf=\"isLoading\">Laeme raportit, pisut metoodilist kannatust palun...</p>\r\n  <div width=\"50%\" height=\"8000\" id=\"pdfContainer\"></div>\r\n  </div>\r\n  <br><br>", styles: [".pdfobject-container{height:1180px;border:1px solid #ccc}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Metraport2Component, decorators: [{
            type: Component,
            args: [{ selector: 'metraport2-component', standalone: true, template: "<!--p>Metraport2</p-->\r\n\r\n<div class=\"pdfobject-container\">\r\n  <p *ngIf=\"isLoading\">Laeme raportit, pisut metoodilist kannatust palun...</p>\r\n  <div width=\"50%\" height=\"8000\" id=\"pdfContainer\"></div>\r\n  </div>\r\n  <br><br>", styles: [".pdfobject-container{height:1180px;border:1px solid #ccc}\n"] }]
        }], ctorParameters: () => [{ type: PdfService }] });

//import { products } from '../products';
class MetlouadComponent {
    constructor() {
        this.ReadMore = true;
        this.visible = false;
    }
    onclick() {
        this.ReadMore = !this.ReadMore; //not equal to condition
        this.visible = !this.visible;
        //alert("lgaj");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: MetlouadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: MetlouadComponent, isStandalone: true, selector: "metlouad-component", ngImport: i0, template: "<div class=\"nupp\">\r\n \r\n<button (click)=\"onclick()\">\r\n    \r\n{{ReadMore?\"Ava metoodikaraport\":\"Sulge metoodikaraport\"}}\r\n\r\n\r\n</button>\r\n</div>\r\n<br>\r\n<br>\r\n<ng-container *ngIf=\"visible\">\r\n<!--lahteturn-component></lahteturn-component-->\r\n<!--lahtealumine-component></lahtealumine-component-->\r\n<metraport2-component></metraport2-component>\r\n<!--div class=\"tekstselgit2\">\r\n  \r\n  <br>   \r\n  \r\n  <lahteinfo-component></lahteinfo-component>    \r\n    \r\n</div-->\r\n\r\n\r\n</ng-container>", styles: [".nupp button{display:block;margin-left:40px;margin-top:30px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:201px;min-height:43px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: Metraport2Component, selector: "metraport2-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: MetlouadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'metlouad-component', standalone: true, imports: [CommonModule, Metraport2Component], template: "<div class=\"nupp\">\r\n \r\n<button (click)=\"onclick()\">\r\n    \r\n{{ReadMore?\"Ava metoodikaraport\":\"Sulge metoodikaraport\"}}\r\n\r\n\r\n</button>\r\n</div>\r\n<br>\r\n<br>\r\n<ng-container *ngIf=\"visible\">\r\n<!--lahteturn-component></lahteturn-component-->\r\n<!--lahtealumine-component></lahtealumine-component-->\r\n<metraport2-component></metraport2-component>\r\n<!--div class=\"tekstselgit2\">\r\n  \r\n  <br>   \r\n  \r\n  <lahteinfo-component></lahteinfo-component>    \r\n    \r\n</div-->\r\n\r\n\r\n</ng-container>", styles: [".nupp button{display:block;margin-left:40px;margin-top:30px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:201px;min-height:43px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}\n"] }]
        }] });

//import { products } from '../products';
class Sisend1Component {
    constructor() {
        this.tekst1 = 'Ettevõtte tasuvus on teiste ettevõtetega võrreldes ';
        this.tekst2 = '. Tasuvuse suhtarvud näitavad ettevõtte rentaablust ehk seda, kui efektiivselt suudab ettevõte oma vara kasutada ning kulusid kontrolli all hoida, et tagada oodatav tulusus. Ettevõtte käibe ärirentaablus on ';
        this.tekst3 = ' ja ettevõttesse investeeritud varade puhasrentaablus ';
        this.tekst4 = '. Tasuvuse suurendamiseks tuleb teatud müügitulu ja/või varade mahu juures luua suhteliselt enam kasumit.';
        this.muutuja1 = '';
        this.muutuja2 = '';
        this.muutuja3 = '';
        this.koondEfektTekst = '';
        this.key = 'tasuvMadal';
        this.localValue = '';
        this.key2 = 'tasuvKeskmine';
        this.key3 = 'tasuvKorge';
    }
    getTasuvMadal() {
        this.tasuvmadal = new XteechangeComponent;
        this.madalNumber = this.tasuvmadal.model4y1;
        //this.madalString = localStorage.getItem(this.key);
        //this.madalNumber=Number(this.madalString);
        return this.madalNumber;
    }
    getTasuvKeskmine() {
        this.tasuvkeskmine = new XteechangeComponent;
        this.keskmineNumber = this.tasuvkeskmine.model4y2;
        //this.keskmineString = localStorage.getItem(this.key2);
        //this.keskmineNumber=Number(this.keskmineString);
        return this.keskmineNumber;
    }
    getTasuvKorge() {
        this.tasuvkorge = new XteechangeComponent;
        this.korgeNumber = this.tasuvkorge.model4y3;
        //this.korgeString = localStorage.getItem(this.key3);
        //this.korgeNumber=Number(this.korgeString);
        return this.korgeNumber;
    }
    tasuvusTekst() {
        this.getTasuvMadal();
        this.getTasuvKeskmine();
        this.getTasuvKorge();
        if (this.madalNumber > this.keskmineNumber && this.madalNumber > this.korgeNumber) {
            this.muutuja1 = 'väiksem';
            this.muutuja2 = 'väike';
            this.muutuja3 = 'väike';
        }
        else if (this.keskmineNumber > this.madalNumber && this.keskmineNumber > this.korgeNumber) {
            this.muutuja1 = 'sama suur';
            this.muutuja2 = 'keskpärane';
            this.muutuja3 = 'keskpärane';
        }
        else if (this.korgeNumber > this.madalNumber && this.korgeNumber > this.keskmineNumber) {
            this.muutuja1 = 'suurem';
            this.muutuja2 = 'suur';
            this.muutuja3 = 'suur';
        }
        else if (this.keskmineNumber === this.madalNumber && this.keskmineNumber === this.korgeNumber) {
            this.muutuja1 = 'sama suur';
            this.muutuja2 = 'keskpärane';
            this.muutuja3 = 'keskpärane';
        }
        this.koondEfektTekst = this.tekst1 + this.muutuja1 + this.tekst2 + this.muutuja2 + this.tekst3 + this.muutuja3 + this.tekst4;
        localStorage.setItem("tasuvusTekst", this.koondEfektTekst);
        return this.koondEfektTekst;
    }
    sisendTekst() {
        this.liugurtext = "Liuguri abil on võimalik muuta sisendit, mida rakendus saab.";
        return this.liugurtext;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sisend1Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sisend1Component, isStandalone: true, selector: "sisend1-component", ngImport: i0, template: "<div class=\"frame\">\r\n\r\n  <div class=\"rida\">\r\n     <div class=\"group\">\r\n       <div class=\"joonisval\">\r\n         <div class=\"joonis\">\r\n             \r\n           \r\n           \r\n          <div class=\"tekstike\">\r\n           Laenuinfo sisestamine\r\n          </div>\r\n          <br>\r\n          <br>\r\n          <div class=\"tekstike2\"> \r\n            {{ sisendTekst() }}\r\n          </div>\r\n           \r\n         </div>\r\n         \r\n       \r\n  \r\n        </div>\r\n       \r\n     </div>\r\n     <div class=\"tekstjanupp\">\r\n       <!--div class=\"graafikuke\"-->\r\n         \r\n       <graafmudeltasuv></graafmudeltasuv>\r\n       <!--graaf5></graaf5-->\r\n  \r\n       <!--/div-->\r\n  \r\n       <!--div class=\"nupp\">\r\n        <button>\r\n        Vaata t\u00E4psemat p\u00F5hjendust\r\n        </button>\r\n        </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n     </div>\r\n   </div>    \r\n  \r\n  </div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:600px;height:50px;top:8px;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:255px;height:183px;align-items:flex-start;gap:1px;padding-left:340px;padding-top:0;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"], dependencies: [{ kind: "component", type: GraafMudelTasuvComponent, selector: "graafmudeltasuv" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sisend1Component, decorators: [{
            type: Component,
            args: [{ selector: 'sisend1-component', standalone: true, imports: [XteechangeComponent, GraafMudelTasuvComponent], template: "<div class=\"frame\">\r\n\r\n  <div class=\"rida\">\r\n     <div class=\"group\">\r\n       <div class=\"joonisval\">\r\n         <div class=\"joonis\">\r\n             \r\n           \r\n           \r\n          <div class=\"tekstike\">\r\n           Laenuinfo sisestamine\r\n          </div>\r\n          <br>\r\n          <br>\r\n          <div class=\"tekstike2\"> \r\n            {{ sisendTekst() }}\r\n          </div>\r\n           \r\n         </div>\r\n         \r\n       \r\n  \r\n        </div>\r\n       \r\n     </div>\r\n     <div class=\"tekstjanupp\">\r\n       <!--div class=\"graafikuke\"-->\r\n         \r\n       <graafmudeltasuv></graafmudeltasuv>\r\n       <!--graaf5></graaf5-->\r\n  \r\n       <!--/div-->\r\n  \r\n       <!--div class=\"nupp\">\r\n        <button>\r\n        Vaata t\u00E4psemat p\u00F5hjendust\r\n        </button>\r\n        </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n     </div>\r\n   </div>    \r\n  \r\n  </div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:600px;height:50px;top:8px;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:255px;height:183px;align-items:flex-start;gap:1px;padding-left:340px;padding-top:0;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"] }]
        }] });

//import { products } from '../products';
class Sisend2Component {
    constructor() {
        this.tekst1 = 'Ettevõtte tasuvus on teiste ettevõtetega võrreldes ';
        this.tekst2 = '. Tasuvuse suhtarvud näitavad ettevõtte rentaablust ehk seda, kui efektiivselt suudab ettevõte oma vara kasutada ning kulusid kontrolli all hoida, et tagada oodatav tulusus. Ettevõtte käibe ärirentaablus on ';
        this.tekst3 = ' ja ettevõttesse investeeritud varade puhasrentaablus ';
        this.tekst4 = '. Tasuvuse suurendamiseks tuleb teatud müügitulu ja/või varade mahu juures luua suhteliselt enam kasumit.';
        this.muutuja1 = '';
        this.muutuja2 = '';
        this.muutuja3 = '';
        this.koondEfektTekst = '';
        this.key = 'tasuvMadal';
        this.localValue = '';
        this.key2 = 'tasuvKeskmine';
        this.key3 = 'tasuvKorge';
    }
    getTasuvMadal() {
        this.tasuvmadal = new XteechangeComponent;
        this.madalNumber = this.tasuvmadal.model4y1;
        //this.madalString = localStorage.getItem(this.key);
        //this.madalNumber=Number(this.madalString);
        return this.madalNumber;
    }
    getTasuvKeskmine() {
        this.tasuvkeskmine = new XteechangeComponent;
        this.keskmineNumber = this.tasuvkeskmine.model4y2;
        //this.keskmineString = localStorage.getItem(this.key2);
        //this.keskmineNumber=Number(this.keskmineString);
        return this.keskmineNumber;
    }
    getTasuvKorge() {
        this.tasuvkorge = new XteechangeComponent;
        this.korgeNumber = this.tasuvkorge.model4y3;
        //this.korgeString = localStorage.getItem(this.key3);
        //this.korgeNumber=Number(this.korgeString);
        return this.korgeNumber;
    }
    tasuvusTekst() {
        this.getTasuvMadal();
        this.getTasuvKeskmine();
        this.getTasuvKorge();
        if (this.madalNumber > this.keskmineNumber && this.madalNumber > this.korgeNumber) {
            this.muutuja1 = 'väiksem';
            this.muutuja2 = 'väike';
            this.muutuja3 = 'väike';
        }
        else if (this.keskmineNumber > this.madalNumber && this.keskmineNumber > this.korgeNumber) {
            this.muutuja1 = 'sama suur';
            this.muutuja2 = 'keskpärane';
            this.muutuja3 = 'keskpärane';
        }
        else if (this.korgeNumber > this.madalNumber && this.korgeNumber > this.keskmineNumber) {
            this.muutuja1 = 'suurem';
            this.muutuja2 = 'suur';
            this.muutuja3 = 'suur';
        }
        else if (this.keskmineNumber === this.madalNumber && this.keskmineNumber === this.korgeNumber) {
            this.muutuja1 = 'sama suur';
            this.muutuja2 = 'keskpärane';
            this.muutuja3 = 'keskpärane';
        }
        this.koondEfektTekst = this.tekst1 + this.muutuja1 + this.tekst2 + this.muutuja2 + this.tekst3 + this.muutuja3 + this.tekst4;
        localStorage.setItem("tasuvusTekst", this.koondEfektTekst);
        return this.koondEfektTekst;
    }
    sisendTekst() {
        this.liugurtext = "Liuguri abil on võimalik muuta sisendit, mida rakendus saab.";
        return this.liugurtext;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sisend2Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Sisend2Component, isStandalone: true, selector: "sisend2-component", ngImport: i0, template: "<div class=\"frame\">\r\n\r\n<div class=\"rida\">\r\n   <div class=\"group\">\r\n     <div class=\"joonisval\">\r\n       <div class=\"joonis\">\r\n           \r\n         \r\n         \r\n        <div class=\"tekstike\">\r\n         Varade muutuse sisestamine\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"tekstike2\"> \r\n          {{ sisendTekst() }}\r\n        </div>\r\n         \r\n       </div>\r\n       \r\n     \r\n\r\n      </div>\r\n     \r\n   </div>\r\n   <div class=\"tekstjanupp\">\r\n     <!--div class=\"graafikuke\"-->\r\n       \r\n     <graafmudeltasuv></graafmudeltasuv>\r\n     <!--graaf5></graaf5-->\r\n\r\n     <!--/div-->\r\n\r\n     <!--div class=\"nupp\">\r\n      <button>\r\n      Vaata t\u00E4psemat p\u00F5hjendust\r\n      </button>\r\n      </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n   </div>\r\n </div>    \r\n\r\n</div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:600px;height:50px;top:8px;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:255px;height:183px;align-items:flex-start;gap:1px;padding-left:340px;padding-top:0;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"], dependencies: [{ kind: "component", type: GraafMudelTasuvComponent, selector: "graafmudeltasuv" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Sisend2Component, decorators: [{
            type: Component,
            args: [{ selector: 'sisend2-component', standalone: true, imports: [XteechangeComponent, GraafMudelTasuvComponent], template: "<div class=\"frame\">\r\n\r\n<div class=\"rida\">\r\n   <div class=\"group\">\r\n     <div class=\"joonisval\">\r\n       <div class=\"joonis\">\r\n           \r\n         \r\n         \r\n        <div class=\"tekstike\">\r\n         Varade muutuse sisestamine\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"tekstike2\"> \r\n          {{ sisendTekst() }}\r\n        </div>\r\n         \r\n       </div>\r\n       \r\n     \r\n\r\n      </div>\r\n     \r\n   </div>\r\n   <div class=\"tekstjanupp\">\r\n     <!--div class=\"graafikuke\"-->\r\n       \r\n     <graafmudeltasuv></graafmudeltasuv>\r\n     <!--graaf5></graaf5-->\r\n\r\n     <!--/div-->\r\n\r\n     <!--div class=\"nupp\">\r\n      <button>\r\n      Vaata t\u00E4psemat p\u00F5hjendust\r\n      </button>\r\n      </div-->  <!--Teksti kohta on stiiliinfot 224-->\r\n   </div>\r\n </div>    \r\n\r\n</div>", styles: [".frame{display:inline-flex;flex-direction:column;align-items:flex-end;gap:6px;padding:0;position:relative;background-color:#fff;border-radius:0 4px 4px;border:0px solid;border-color:#878a97}.frame .rida{display:flex;height:163px;align-items:center;gap:2px;padding-top:25px;position:relative;align-self:stretch;width:100%;background-color:var(--primary-full-white);border-radius:4px}.frame .group{position:relative}.frame .joonisval{position:absolute;width:0px;height:0px;top:0;left:0;margin-top:-80px}.frame .joonis{position:absolute;width:600px;height:50px;top:8px;left:0}.frame .tekstjanupp{display:flex;flex-direction:column;width:255px;height:183px;align-items:flex-start;gap:1px;padding-left:340px;padding-top:0;padding-right:0;margin-right:0;position:relative}.frame .span{font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:24px}.nupp button{margin-left:0%;margin-top:55px;line-height:24px;background:#005aa3;color:#fff;font-size:16px;border-radius:20px;width:238px;min-height:43px;padding-left:22px;align-content:center}.nupp button:hover{color:#ff8000;font-size:16px;background-color:#004277}.nupp button .label{white-space:nowrap;overflow:hidden;color:red}.tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}\n"] }]
        }] });

class TabComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: TabComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: TabComponent, isStandalone: true, selector: "app-tab", ngImport: i0, template: "<!--form [formGroup]=\"myForm\"-->\r\n\r\n<p class=\"tekstike\">\r\nEttev\u00F5tte eluj\u00F5ulisuse indeks\r\n</p> \r\n\r\n<div class=\"tabset\">\r\n  <!-- Tab 1 -->\r\n  <input type=\"radio\" name=\"tabset\" id=\"tab1\" aria-controls=\"yks\" checked>\r\n  <label for=\"tab1\">\u00DCldinfo</label>\r\n  <!-- Tab 2 -->\r\n  <input type=\"radio\" name=\"tabset\" id=\"tab2\" aria-controls=\"kaks\">\r\n  <label for=\"tab2\">Olukord praegu</label>\r\n\r\n  <input type=\"radio\" name=\"tabset\" id=\"tab3\" aria-controls=\"kolm\">\r\n  <label for=\"tab3\">Prognoos</label>\r\n\r\n  <input type=\"radio\" name=\"tabset\" id=\"tab4\" aria-controls=\"neli\">\r\n  <label for=\"tab4\">Kuidas tulemusi m\u00F5ista?</label>\r\n\r\n  <input type=\"radio\" name=\"tabset\" id=\"tab5\" aria-controls=\"viis\">\r\n  <label for=\"tab5\">Kaasa konsultant</label>\r\n\r\n  <input type=\"radio\" name=\"tabset\" id=\"tab6\" aria-controls=\"kuus\">\r\n  <label for=\"tab6\">M\u00F5tle kaasa</label>\r\n\r\n  <div class=\"tab-panels\">\r\n    <section id=\"yks\" class=\"tab-panel\">\r\n      <div class=\"raamI2\">\r\n        <varvid-component></varvid-component>\r\n        <yld1-component></yld1-component>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <yld2-component></yld2-component>\r\n        <br>\r\n        <yld3-component></yld3-component>\r\n        <!--p>Esimene</p-->\r\n        <!--koondind7-component></koondind7-component-->\r\n        <!--input type =\"text\" placeholder=\"Enter Amount\" formControlName=\"buyInAmount\" /-->\r\n        <yld4-component></yld4-component>\r\n        <!--yld5-component></yld5-component-->\r\n\r\n        <br><br>\r\n        <!--graaf4></graaf4-->\r\n         \r\n        <br>\r\n        <graaf10></graaf10>\r\n        \r\n\r\n        <yld6-component></yld6-component>\r\n        <!--graaf1></graaf1-->\r\n        <!--graaf2></graaf2-->\r\n        <!--graaf3></graaf3-->\r\n      </div>\r\n    </section>\r\n    <section id=\"kaks\" class=\"tab-panel\">\r\n      <!--div class= \"raam raamh1\">\r\n       \r\n        <hetk1-component></hetk1-component>\r\n        \r\n      </div-->\r\n      <div class= \"raam raamh1a\">\r\n      <hetkava-component></hetkava-component>\r\n      </div>\r\n      <br><br>\r\n       \r\n      <!--ilukiri-component></ilukiri-component-->\r\n\r\n      <varav5></varav5>\r\n      \r\n      <br><br>\r\n      \r\n\r\n      <varav6></varav6>\r\n\r\n      <br><br>\r\n\r\n      <varav7></varav7>\r\n\r\n      <br><br>\r\n\r\n      <varav8></varav8>\r\n\r\n      <!--div class=\"raam\"-->\r\n      <!--div class= \"raam raam2c\">\r\n        <hetk3-component></hetk3-component>\r\n      </div-->\r\n      <!--/div-->\r\n      \r\n      \r\n      <!--br><br><br>\r\n      <br>\r\n      <div class= \"raam raam2d\">\r\n        <hetk4-component></hetk4-component>\r\n      </div-->\r\n    \r\n      <!--br><br><br>\r\n      <br>\r\n      <div class= \"raam raam2d\">\r\n        <hetk5-component></hetk5-component>\r\n      </div-->\r\n\r\n      <!--br><br><br>\r\n      <br>\r\n      <div class= \"raam raam2d\">\r\n        <hetk6-component></hetk6-component>\r\n      </div-->\r\n    \r\n      <!--graaf8></graaf8-->\r\n\r\n      <!--br><br><br>\r\n      <br-->\r\n      <!--div class=\"raam\"-->\r\n      <!--div class= \"raam raam2c\">\r\n        <hetk7-component></hetk7-component>\r\n      </div-->\r\n      <!--infoaken-component></infoaken-component-->\r\n     <!--graaf9></graaf9-->\r\n    </section>\r\n    <section id=\"kolm\" class=\"tab-panel\">\r\n      <div class=\"raam raamh1\">\r\n      \r\n      <hetk1-component></hetk1-component>\r\n      \r\n        <!--progn1-component></progn1-component-->\r\n        <!--yld3-component></yld3-component-->\r\n        <!--progn2-component></progn2-component-->\r\n        <!--p>Kolmas</p-->\r\n        <!--koondind7-component></koondind7-component-->\r\n        <!--input type =\"text\" placeholder=\"Types In Grams\" formControlName=\"buyInGrams\" /-->\r\n      </div>\r\n\r\n      <br><br>\r\n          \r\n      <varav3></varav3>\r\n      \r\n      <br><br>\r\n      \r\n      <varav9></varav9>\r\n      \r\n      <br>\r\n\r\n      <br><br><br>\r\n      <br>\r\n      <!--div class= \"raam raam2d\">\r\n        <progn3-component></progn3-component>\r\n      </div>\r\n\r\n      <br><br><br>\r\n      <br>\r\n      <div class= \"raam raam2d\">\r\n        <progn4-component></progn4-component>\r\n      </div-->\r\n\r\n    </section>\r\n    <section id=\"neli\" class=\"tab-panel\">\r\n      <div class=\"raam raamMoist\">\r\n        <hetk3-component></hetk3-component>\r\n      </div>\r\n      <br><br>\r\n\r\n      <varav4a></varav4a>\r\n\r\n      <br><br><br><br><br>\r\n      <!--metraport-component></metraport-component-->\r\n      <div class=\"raamI2\">\r\n      <mettext-component></mettext-component>\r\n      <br><br>\r\n      <metlouad-component></metlouad-component>\r\n      <!--metraport2-component></metraport2-component-->\r\n      </div>\r\n    </section>\r\n\r\n    <section id=\"viis\" class=\"tab-panel\">\r\n      <div class=\"raam raamKons1\">\r\n\r\n        <konsultantava-component></konsultantava-component>\r\n        <!--p>Kaasa n\u00FC\u00FCd konsultant siitkaudu...</p-->\r\n        <!--img src=\"https://interstat.info/Elujoud/Disain/Florish/florish.html\"-->\r\n\r\n      </div>\r\n\r\n      <br><br><br><br>\r\n\r\n      <div class=\"raamxxx\">\r\n        <konsultantinfo-component></konsultantinfo-component>\r\n      <br><br>\r\n      </div>\r\n\r\n      <br><br>\r\n\r\n      <!--div class=\"raamxxx\"-->\r\n        <varav10></varav10>\r\n      <br><br>\r\n      <!--/div-->\r\n\r\n      <br><br><br>\r\n\r\n      <div class=\"raamxxx\">\r\n        <konsultant-component></konsultant-component>\r\n      <br><br>\r\n      </div>\r\n\r\n      \r\n\r\n    </section>\r\n\r\n    <section id=\"kuus\" class=\"tab-panel\">\r\n      <div class=\"raam raamXtee\">\r\n        <motle1-component></motle1-component>\r\n        <!--p>M\u00F5tlemise koht...</p-->\r\n        <!--metraport2-component></metraport2-component--> \r\n        <!---xroadimit-component></xroadimit-component-->\r\n        <br><br>\r\n      </div> \r\n        \r\n        <br><br>\r\n        <varav11></varav11>\r\n        <!--flrsh></flrsh-->\r\n        <br><br><br><br>\r\n        <div class=\"raam raamSisend1\">\r\n        <sisend1-component></sisend1-component>\r\n        </div>\r\n        <br><br><br><br>\r\n        <div class=\"raam raamSisend1\">\r\n        <sisend2-component></sisend2-component>\r\n        </div>\r\n        <sekt1agraaf></sekt1agraaf>\r\n        <!--varav1></varav1-->\r\n        <!--varav2></varav2-->\r\n\r\n        <!---lib-elujou-lib></lib-elujou-lib--->\r\n        <!---elujoutest-component></elujoutest-component-->\r\n<!--lib2-elujou-lib2></lib2-elujou-lib2-->\r\n<!---parent></parent-->\r\n\r\n      \r\n    </section>\r\n\r\n  </div>\r\n\r\n</div>\r\n<!--/form-->", styles: [".tabset>input[type=radio]{position:absolute;left:-100vw}.tabset .tab-panel{display:none}.tabset>input:first-child:checked~.tab-panels>.tab-panel:first-child,.tabset>input:nth-child(3):checked~.tab-panels>.tab-panel:nth-child(2),.tabset>input:nth-child(5):checked~.tab-panels>.tab-panel:nth-child(3),.tabset>input:nth-child(7):checked~.tab-panels>.tab-panel:nth-child(4),.tabset>input:nth-child(9):checked~.tab-panels>.tab-panel:nth-child(5),.tabset>input:nth-child(11):checked~.tab-panels>.tab-panel:nth-child(6){display:block}body{border-color:red;font-weight:300}.tabset>label{text-transform:lowercase;height:40px;min-width:160px;background-color:#e5e7e7;position:relative;display:inline-block;padding:11px 16px 3px;text-align:center;font-size:16px;font-family:Roboto,sans-serif;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom:#5d6071 2px solid;border-left:#8f91a8 0px solid;border-top:#8f91a8 0px solid;border-right:#8f91a8 0px solid;cursor:pointer;font-weight:400}.tabset>label:first-letter{text-transform:uppercase}.tabset>label:hover,.tabset>input:focus+label{color:#005aa3;border-color:#005aa3}.tabset>input:checked+label{border-bottom:1px solid #fff;margin-bottom:-1px;background-color:#fff;border-top:1px red}.tab-panel{padding:30px 0}*,*:before,*:after{box-sizing:border-box}body{padding:30px}.tabset{max-width:1122px}.raam{width:100%;margin-top:-36px;height:1040px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}.raam2{width:100%;margin-top:-36px;height:400px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}.raam2a{width:100%;margin-top:-36px;height:300px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}.raam2c{height:160px}.raam2d{height:90px}.raam2e{height:600px}.raam2a>.raam2b{height:160px}.raamh1{height:440px}.raamh1a{height:510px}.raamI{height:1240px}.raamI2{width:100%;margin-top:-36px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}.raamI3{width:100%;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}.raamMoist{height:190px}.raamXtee{height:460px}.raamPdf{height:3000px}.raamKons1{height:200px}.raamKons2{height:720px}.raamSisend1{height:380px}.panelKons{padding:10px 10px 10px 40px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.raamxxx{width:100%;margin-top:-36px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}.tekstike{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:0;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px;margin-top:10px;margin-bottom:10px}\n"], dependencies: [{ kind: "component", type: Yld1Component, selector: "yld1-component" }, { kind: "component", type: HetkavaComponent, selector: "hetkava-component" }, { kind: "component", type: Yld2Component, selector: "yld2-component" }, { kind: "component", type: Yld3Component, selector: "yld3-component" }, { kind: "component", type: Yld4Component, selector: "yld4-component" }, { kind: "component", type: Graaf10Component, selector: "graaf10" }, { kind: "component", type: Yld6Component, selector: "yld6-component" }, { kind: "component", type: Varav3Component, selector: "varav3" }, { kind: "component", type: Varav4aComponent, selector: "varav4a" }, { kind: "component", type: Varav5Component, selector: "varav5" }, { kind: "component", type: Varav6Component, selector: "varav6" }, { kind: "component", type: Varav7Component, selector: "varav7" }, { kind: "component", type: Varav8Component, selector: "varav8" }, { kind: "component", type: Varav9Component, selector: "varav9" }, { kind: "component", type: Varav10Component, selector: "varav10" }, { kind: "component", type: Varav11Component, selector: "varav11" }, { kind: "component", type: Hetk1Component, selector: "hetk1-component" }, { kind: "component", type: Hetk3Component, selector: "hetk3-component" }, { kind: "component", type: KonsultantComponent, selector: "konsultant-component" }, { kind: "component", type: KonsultantAvaComponent, selector: "konsultantava-component" }, { kind: "component", type: KonsultantInfoComponent, selector: "konsultantinfo-component" }, { kind: "component", type: VarvidComponent, selector: "varvid-component" }, { kind: "component", type: Motle1Component, selector: "motle1-component" }, { kind: "component", type: MettextComponent, selector: "mettext-component" }, { kind: "component", type: MetlouadComponent, selector: "metlouad-component" }, { kind: "component", type: Sisend1Component, selector: "sisend1-component" }, { kind: "component", type: Sisend2Component, selector: "sisend2-component" }, { kind: "component", type: Sekt1agraafComponent, selector: "sekt1agraaf" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: TabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-tab', standalone: true, imports: [Yld1Component, HetkavaComponent, Yld2Component, Yld3Component, Yld4Component, Graaf10Component, Yld6Component, Varav3Component, Varav4aComponent, Varav5Component, Varav6Component, Varav7Component, Varav8Component, Varav9Component, Varav10Component, Varav11Component, Hetk1Component, Hetk3Component, KonsultantComponent, KonsultantAvaComponent, KonsultantInfoComponent, VarvidComponent, Motle1Component, MettextComponent, MetlouadComponent, Sisend1Component, Sisend2Component, Sekt1agraafComponent], template: "<!--form [formGroup]=\"myForm\"-->\r\n\r\n<p class=\"tekstike\">\r\nEttev\u00F5tte eluj\u00F5ulisuse indeks\r\n</p> \r\n\r\n<div class=\"tabset\">\r\n  <!-- Tab 1 -->\r\n  <input type=\"radio\" name=\"tabset\" id=\"tab1\" aria-controls=\"yks\" checked>\r\n  <label for=\"tab1\">\u00DCldinfo</label>\r\n  <!-- Tab 2 -->\r\n  <input type=\"radio\" name=\"tabset\" id=\"tab2\" aria-controls=\"kaks\">\r\n  <label for=\"tab2\">Olukord praegu</label>\r\n\r\n  <input type=\"radio\" name=\"tabset\" id=\"tab3\" aria-controls=\"kolm\">\r\n  <label for=\"tab3\">Prognoos</label>\r\n\r\n  <input type=\"radio\" name=\"tabset\" id=\"tab4\" aria-controls=\"neli\">\r\n  <label for=\"tab4\">Kuidas tulemusi m\u00F5ista?</label>\r\n\r\n  <input type=\"radio\" name=\"tabset\" id=\"tab5\" aria-controls=\"viis\">\r\n  <label for=\"tab5\">Kaasa konsultant</label>\r\n\r\n  <input type=\"radio\" name=\"tabset\" id=\"tab6\" aria-controls=\"kuus\">\r\n  <label for=\"tab6\">M\u00F5tle kaasa</label>\r\n\r\n  <div class=\"tab-panels\">\r\n    <section id=\"yks\" class=\"tab-panel\">\r\n      <div class=\"raamI2\">\r\n        <varvid-component></varvid-component>\r\n        <yld1-component></yld1-component>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <yld2-component></yld2-component>\r\n        <br>\r\n        <yld3-component></yld3-component>\r\n        <!--p>Esimene</p-->\r\n        <!--koondind7-component></koondind7-component-->\r\n        <!--input type =\"text\" placeholder=\"Enter Amount\" formControlName=\"buyInAmount\" /-->\r\n        <yld4-component></yld4-component>\r\n        <!--yld5-component></yld5-component-->\r\n\r\n        <br><br>\r\n        <!--graaf4></graaf4-->\r\n         \r\n        <br>\r\n        <graaf10></graaf10>\r\n        \r\n\r\n        <yld6-component></yld6-component>\r\n        <!--graaf1></graaf1-->\r\n        <!--graaf2></graaf2-->\r\n        <!--graaf3></graaf3-->\r\n      </div>\r\n    </section>\r\n    <section id=\"kaks\" class=\"tab-panel\">\r\n      <!--div class= \"raam raamh1\">\r\n       \r\n        <hetk1-component></hetk1-component>\r\n        \r\n      </div-->\r\n      <div class= \"raam raamh1a\">\r\n      <hetkava-component></hetkava-component>\r\n      </div>\r\n      <br><br>\r\n       \r\n      <!--ilukiri-component></ilukiri-component-->\r\n\r\n      <varav5></varav5>\r\n      \r\n      <br><br>\r\n      \r\n\r\n      <varav6></varav6>\r\n\r\n      <br><br>\r\n\r\n      <varav7></varav7>\r\n\r\n      <br><br>\r\n\r\n      <varav8></varav8>\r\n\r\n      <!--div class=\"raam\"-->\r\n      <!--div class= \"raam raam2c\">\r\n        <hetk3-component></hetk3-component>\r\n      </div-->\r\n      <!--/div-->\r\n      \r\n      \r\n      <!--br><br><br>\r\n      <br>\r\n      <div class= \"raam raam2d\">\r\n        <hetk4-component></hetk4-component>\r\n      </div-->\r\n    \r\n      <!--br><br><br>\r\n      <br>\r\n      <div class= \"raam raam2d\">\r\n        <hetk5-component></hetk5-component>\r\n      </div-->\r\n\r\n      <!--br><br><br>\r\n      <br>\r\n      <div class= \"raam raam2d\">\r\n        <hetk6-component></hetk6-component>\r\n      </div-->\r\n    \r\n      <!--graaf8></graaf8-->\r\n\r\n      <!--br><br><br>\r\n      <br-->\r\n      <!--div class=\"raam\"-->\r\n      <!--div class= \"raam raam2c\">\r\n        <hetk7-component></hetk7-component>\r\n      </div-->\r\n      <!--infoaken-component></infoaken-component-->\r\n     <!--graaf9></graaf9-->\r\n    </section>\r\n    <section id=\"kolm\" class=\"tab-panel\">\r\n      <div class=\"raam raamh1\">\r\n      \r\n      <hetk1-component></hetk1-component>\r\n      \r\n        <!--progn1-component></progn1-component-->\r\n        <!--yld3-component></yld3-component-->\r\n        <!--progn2-component></progn2-component-->\r\n        <!--p>Kolmas</p-->\r\n        <!--koondind7-component></koondind7-component-->\r\n        <!--input type =\"text\" placeholder=\"Types In Grams\" formControlName=\"buyInGrams\" /-->\r\n      </div>\r\n\r\n      <br><br>\r\n          \r\n      <varav3></varav3>\r\n      \r\n      <br><br>\r\n      \r\n      <varav9></varav9>\r\n      \r\n      <br>\r\n\r\n      <br><br><br>\r\n      <br>\r\n      <!--div class= \"raam raam2d\">\r\n        <progn3-component></progn3-component>\r\n      </div>\r\n\r\n      <br><br><br>\r\n      <br>\r\n      <div class= \"raam raam2d\">\r\n        <progn4-component></progn4-component>\r\n      </div-->\r\n\r\n    </section>\r\n    <section id=\"neli\" class=\"tab-panel\">\r\n      <div class=\"raam raamMoist\">\r\n        <hetk3-component></hetk3-component>\r\n      </div>\r\n      <br><br>\r\n\r\n      <varav4a></varav4a>\r\n\r\n      <br><br><br><br><br>\r\n      <!--metraport-component></metraport-component-->\r\n      <div class=\"raamI2\">\r\n      <mettext-component></mettext-component>\r\n      <br><br>\r\n      <metlouad-component></metlouad-component>\r\n      <!--metraport2-component></metraport2-component-->\r\n      </div>\r\n    </section>\r\n\r\n    <section id=\"viis\" class=\"tab-panel\">\r\n      <div class=\"raam raamKons1\">\r\n\r\n        <konsultantava-component></konsultantava-component>\r\n        <!--p>Kaasa n\u00FC\u00FCd konsultant siitkaudu...</p-->\r\n        <!--img src=\"https://interstat.info/Elujoud/Disain/Florish/florish.html\"-->\r\n\r\n      </div>\r\n\r\n      <br><br><br><br>\r\n\r\n      <div class=\"raamxxx\">\r\n        <konsultantinfo-component></konsultantinfo-component>\r\n      <br><br>\r\n      </div>\r\n\r\n      <br><br>\r\n\r\n      <!--div class=\"raamxxx\"-->\r\n        <varav10></varav10>\r\n      <br><br>\r\n      <!--/div-->\r\n\r\n      <br><br><br>\r\n\r\n      <div class=\"raamxxx\">\r\n        <konsultant-component></konsultant-component>\r\n      <br><br>\r\n      </div>\r\n\r\n      \r\n\r\n    </section>\r\n\r\n    <section id=\"kuus\" class=\"tab-panel\">\r\n      <div class=\"raam raamXtee\">\r\n        <motle1-component></motle1-component>\r\n        <!--p>M\u00F5tlemise koht...</p-->\r\n        <!--metraport2-component></metraport2-component--> \r\n        <!---xroadimit-component></xroadimit-component-->\r\n        <br><br>\r\n      </div> \r\n        \r\n        <br><br>\r\n        <varav11></varav11>\r\n        <!--flrsh></flrsh-->\r\n        <br><br><br><br>\r\n        <div class=\"raam raamSisend1\">\r\n        <sisend1-component></sisend1-component>\r\n        </div>\r\n        <br><br><br><br>\r\n        <div class=\"raam raamSisend1\">\r\n        <sisend2-component></sisend2-component>\r\n        </div>\r\n        <sekt1agraaf></sekt1agraaf>\r\n        <!--varav1></varav1-->\r\n        <!--varav2></varav2-->\r\n\r\n        <!---lib-elujou-lib></lib-elujou-lib--->\r\n        <!---elujoutest-component></elujoutest-component-->\r\n<!--lib2-elujou-lib2></lib2-elujou-lib2-->\r\n<!---parent></parent-->\r\n\r\n      \r\n    </section>\r\n\r\n  </div>\r\n\r\n</div>\r\n<!--/form-->", styles: [".tabset>input[type=radio]{position:absolute;left:-100vw}.tabset .tab-panel{display:none}.tabset>input:first-child:checked~.tab-panels>.tab-panel:first-child,.tabset>input:nth-child(3):checked~.tab-panels>.tab-panel:nth-child(2),.tabset>input:nth-child(5):checked~.tab-panels>.tab-panel:nth-child(3),.tabset>input:nth-child(7):checked~.tab-panels>.tab-panel:nth-child(4),.tabset>input:nth-child(9):checked~.tab-panels>.tab-panel:nth-child(5),.tabset>input:nth-child(11):checked~.tab-panels>.tab-panel:nth-child(6){display:block}body{border-color:red;font-weight:300}.tabset>label{text-transform:lowercase;height:40px;min-width:160px;background-color:#e5e7e7;position:relative;display:inline-block;padding:11px 16px 3px;text-align:center;font-size:16px;font-family:Roboto,sans-serif;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom:#5d6071 2px solid;border-left:#8f91a8 0px solid;border-top:#8f91a8 0px solid;border-right:#8f91a8 0px solid;cursor:pointer;font-weight:400}.tabset>label:first-letter{text-transform:uppercase}.tabset>label:hover,.tabset>input:focus+label{color:#005aa3;border-color:#005aa3}.tabset>input:checked+label{border-bottom:1px solid #fff;margin-bottom:-1px;background-color:#fff;border-top:1px red}.tab-panel{padding:30px 0}*,*:before,*:after{box-sizing:border-box}body{padding:30px}.tabset{max-width:1122px}.raam{width:100%;margin-top:-36px;height:1040px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}.raam2{width:100%;margin-top:-36px;height:400px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}.raam2a{width:100%;margin-top:-36px;height:300px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}.raam2c{height:160px}.raam2d{height:90px}.raam2e{height:600px}.raam2a>.raam2b{height:160px}.raamh1{height:440px}.raamh1a{height:510px}.raamI{height:1240px}.raamI2{width:100%;margin-top:-36px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}.raamI3{width:100%;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}.raamMoist{height:190px}.raamXtee{height:460px}.raamPdf{height:3000px}.raamKons1{height:200px}.raamKons2{height:720px}.raamSisend1{height:380px}.panelKons{padding:10px 10px 10px 40px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.raamxxx{width:100%;margin-top:-36px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}.tekstike{position:relative;width:1034px;height:48px;padding-top:1px;padding-left:0;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px;margin-top:10px;margin-bottom:10px}\n"] }]
        }] });

//import { Yld3Component } from '../yld3/yld3.component';
//import { products } from '../products';
class TabzComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: TabzComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: TabzComponent, isStandalone: true, selector: "tabz-component", ngImport: i0, template: "<p class=\"tekstike4\">S\u00FCsteem ei v\u00E4ljastanud andmeid, p\u00F5hjuseks v\u00F5ib olla andmete puudumumine v\u00F5i osalised andmed, mille pealt ei saa tulemust toota.</p>\r\n<br><br><br><br>\r\n\r\n<!-- Rakendus t\u00E4iega panges, tee v\u00F5i tina...-->", styles: [".tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.tekstike4{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:36px;letter-spacing:0;line-height:36px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: TabzComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tabz-component', standalone: true, imports: [], template: "<p class=\"tekstike4\">S\u00FCsteem ei v\u00E4ljastanud andmeid, p\u00F5hjuseks v\u00F5ib olla andmete puudumumine v\u00F5i osalised andmed, mille pealt ei saa tulemust toota.</p>\r\n<br><br><br><br>\r\n\r\n<!-- Rakendus t\u00E4iega panges, tee v\u00F5i tina...-->", styles: [".tekstike{position:relative;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:32px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.tekstike4{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:36px;letter-spacing:0;line-height:36px}\n"] }]
        }] });

class ElujouLibComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: ElujouLibComponent, isStandalone: true, selector: "lib-elujou-lib", ngImport: i0, template: "<!--h1>Html failist tulev pealkiri - Riia v\u00E4rk....</h1>\r\n\r\n<div class=\"tekstike2\"> \r\nSee on tekst stiilifailist....\r\n</div-->\r\n\r\n\r\n<!--elujoutest-component></elujoutest-component-->\r\n\r\n<!--lib2-elujou-lib2></lib2-elujou-lib2-->\r\n<!--uustest-elujou-uustest></uustest-elujou-uustest-->\r\n<!------app-tab></app-tab---->\r\n<!-----tabz-component></tabz-component---->\r\n\r\n\r\n    <!-----app-tab *ngIf=\"ekraanimuutuja2===1\"></app-tab>\r\n     <tabz-component *ngIf=\"ekraanimuutuja2===0\"></tabz-component--->\r\n\r\n     <app-tab *ngIf=\"ekraanimuutuja\"></app-tab>\r\n     <tabz-component *ngIf=\"!ekraanimuutuja\"></tabz-component>\r\n\r\n<!--Kumbat taabi kuvada, viia otsustuse komponendi alla, see peab ikka siinsamas toimuma, sest otsustus toimub ju kohe alguses...-->\r\n\r\n\r\n", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:22px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: TabComponent, selector: "app-tab" }, { kind: "component", type: TabzComponent, selector: "tabz-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: ElujouLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-elujou-lib', standalone: true, imports: [CommonModule, ElujouLib2Component, UustestComponent, TabComponent, TabzComponent, XteechangeComponent], template: "<!--h1>Html failist tulev pealkiri - Riia v\u00E4rk....</h1>\r\n\r\n<div class=\"tekstike2\"> \r\nSee on tekst stiilifailist....\r\n</div-->\r\n\r\n\r\n<!--elujoutest-component></elujoutest-component-->\r\n\r\n<!--lib2-elujou-lib2></lib2-elujou-lib2-->\r\n<!--uustest-elujou-uustest></uustest-elujou-uustest-->\r\n<!------app-tab></app-tab---->\r\n<!-----tabz-component></tabz-component---->\r\n\r\n\r\n    <!-----app-tab *ngIf=\"ekraanimuutuja2===1\"></app-tab>\r\n     <tabz-component *ngIf=\"ekraanimuutuja2===0\"></tabz-component--->\r\n\r\n     <app-tab *ngIf=\"ekraanimuutuja\"></app-tab>\r\n     <tabz-component *ngIf=\"!ekraanimuutuja\"></tabz-component>\r\n\r\n<!--Kumbat taabi kuvada, viia otsustuse komponendi alla, see peab ikka siinsamas toimuma, sest otsustus toimub ju kohe alguses...-->\r\n\r\n\r\n", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:red;font-size:16px;letter-spacing:0;line-height:22px}\n"] }]
        }], ctorParameters: () => [] });

class ElujoutestComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: ElujoutestComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: ElujoutestComponent, isStandalone: true, selector: "elujoutest-component", ngImport: i0, template: "<br>\r\n<br>\r\n<p>Siin on alakomponendi materjaaaal....</p>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: ElujoutestComponent, decorators: [{
            type: Component,
            args: [{ selector: 'elujoutest-component', standalone: true, template: "<br>\r\n<br>\r\n<p>Siin on alakomponendi materjaaaal....</p>" }]
        }] });

//import { UustestComponent } from './elujou-uustest/elujou-uustest.component';
class ElujouLibModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: ElujouLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.3", ngImport: i0, type: ElujouLibModule, imports: [CommonModule, ElujoutestComponent, ElujouLib2Component], exports: [ElujoutestComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: ElujouLibModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: ElujouLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule, ElujoutestComponent, ElujouLib2Component
                    ],
                    exports: [ElujoutestComponent]
                    //providers: [ProfileService, CompilerService],
                    //bootstrap: [
                    //  ElujouLibComponent
                    //]
                }]
        }] });

/*
 * Public API Surface of elujou-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ElujouLibComponent, ElujouLibModule, ElujouLibService, ElujoutestComponent };
//# sourceMappingURL=elujou-lib.mjs.map