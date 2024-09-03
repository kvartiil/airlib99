import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { MaakComponent } from '../maak/maak.component';
import { MaakxComponent } from '../maakx/maakx.component';
import { Maak1Component } from '../maak1/maak1.component';
import { Maak1xComponent } from '../maak1x/maak1x.component';
import { Maak2Component } from '../maak2/maak2.component';
import { Maak2xComponent } from '../maak2x/maak2x.component';
import { Maak3Component } from '../maak3/maak3.component';
import { Maak3xComponent } from '../maak3x/maak3x.component';
import { Maak4Component } from '../maak4/maak4.component';
import { Maak4xComponent } from '../maak4x/maak4x.component';
import { Maak5Component } from '../maak5/maak5.component';
import { Maak5xComponent } from '../maak5x/maak5x.component';
import { Maak6Component } from '../maak6/maak6.component';
import { Maak6xComponent } from '../maak6x/maak6x.component';
import { Maak7Component } from '../maak7/maak7.component';
import { Maak7xComponent } from '../maak7x/maak7x.component';
import { Maak8Component } from '../maak8/maak8.component';
import { Maak8xComponent } from '../maak8x/maak8x.component';
import { Maak9Component } from '../maak9/maak9.component';
import { Maak9xComponent } from '../maak9x/maak9x.component';
import { Maak10Component } from '../maak10/maak10.component';
import { Maak10xComponent } from '../maak10x/maak10x.component';
import { Maak11Component } from '../maak11/maak11.component';
import { Maak11xComponent } from '../maak11x/maak11x.component';
import { Maak12Component } from '../maak12/maak12.component';
import { Maak12xComponent } from '../maak12x/maak12x.component';
import { Maak13Component } from '../maak13/maak13.component';
import { Maak13xComponent } from '../maak13x/maak13x.component';
import { Maak14Component } from '../maak14/maak14.component';
import { Maak14xComponent } from '../maak14x/maak14x.component';
import { Maak15Component } from '../maak15/maak15.component';
import { Maak15xComponent } from '../maak15x/maak15x.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class Varav10Component {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Varav10Component, isStandalone: true, selector: "varav10", ngImport: i0, template: "<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\nMaakondlike arenduskeskuste informatsioon\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2\">\r\n\r\nAllpool on tutvustav informatsioon maakondlike arenduskeskuste kaupa. Alajaotuse kaudu p\u00E4\u00E4seb valitud maakonna arenduskeskuse kodulehele ja saab tutvuda v\u00F5imalustega, mida arenduskeskus pakub.\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <maak-component *ngIf=\"showComponent1\"></maak-component>\r\n    <maak1-component *ngIf=\"showComponent2\"></maak1-component>\r\n    <maak2-component *ngIf=\"showComponent3\"></maak2-component>\r\n    <maak3-component *ngIf=\"showComponent4\"></maak3-component>\r\n    <maak4-component *ngIf=\"showComponent5\"></maak4-component>\r\n    <maak5-component *ngIf=\"showComponent6\"></maak5-component>\r\n    <maak6-component *ngIf=\"showComponent7\"></maak6-component>\r\n    <maak7-component *ngIf=\"showComponent8\"></maak7-component>\r\n    <maak8-component *ngIf=\"showComponent9\"></maak8-component>\r\n    <maak9-component *ngIf=\"showComponent10\"></maak9-component>\r\n    <maak10-component *ngIf=\"showComponent11\"></maak10-component>\r\n    <maak11-component *ngIf=\"showComponent12\"></maak11-component>\r\n    <maak12-component *ngIf=\"showComponent13\"></maak12-component>\r\n    <maak13-component *ngIf=\"showComponent14\"></maak13-component>\r\n    <maak14-component *ngIf=\"showComponent15\"></maak14-component>\r\n    <maak15-component *ngIf=\"showComponent16\"></maak15-component>\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: MaakComponent, selector: "maak-component" }, { kind: "component", type: Maak1Component, selector: "maak1-component" }, { kind: "component", type: Maak2Component, selector: "maak2-component" }, { kind: "component", type: Maak3Component, selector: "maak3-component" }, { kind: "component", type: Maak4Component, selector: "maak4-component" }, { kind: "component", type: Maak5Component, selector: "maak5-component" }, { kind: "component", type: Maak6Component, selector: "maak6-component" }, { kind: "component", type: Maak7Component, selector: "maak7-component" }, { kind: "component", type: Maak8Component, selector: "maak8-component" }, { kind: "component", type: Maak9Component, selector: "maak9-component" }, { kind: "component", type: Maak10Component, selector: "maak10-component" }, { kind: "component", type: Maak11Component, selector: "maak11-component" }, { kind: "component", type: Maak12Component, selector: "maak12-component" }, { kind: "component", type: Maak13Component, selector: "maak13-component" }, { kind: "component", type: Maak14Component, selector: "maak14-component" }, { kind: "component", type: Maak15Component, selector: "maak15-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav10Component, decorators: [{
            type: Component,
            args: [{ selector: 'varav10', standalone: true, imports: [CommonModule, NgClass, MaakComponent, MaakxComponent, Maak1Component, Maak1xComponent, Maak2Component, Maak2xComponent, Maak3Component, Maak3xComponent, Maak4Component, Maak4xComponent, Maak5Component, Maak5xComponent, Maak6Component, Maak6xComponent, Maak7Component, Maak7xComponent, Maak8Component, Maak8xComponent, Maak9Component, Maak9xComponent, Maak10Component, Maak10xComponent, Maak11Component, Maak11xComponent, Maak12Component, Maak12xComponent, Maak13Component, Maak13xComponent, Maak14Component, Maak14xComponent, Maak15Component, Maak15xComponent], template: "<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\nMaakondlike arenduskeskuste informatsioon\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2\">\r\n\r\nAllpool on tutvustav informatsioon maakondlike arenduskeskuste kaupa. Alajaotuse kaudu p\u00E4\u00E4seb valitud maakonna arenduskeskuse kodulehele ja saab tutvuda v\u00F5imalustega, mida arenduskeskus pakub.\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <maak-component *ngIf=\"showComponent1\"></maak-component>\r\n    <maak1-component *ngIf=\"showComponent2\"></maak1-component>\r\n    <maak2-component *ngIf=\"showComponent3\"></maak2-component>\r\n    <maak3-component *ngIf=\"showComponent4\"></maak3-component>\r\n    <maak4-component *ngIf=\"showComponent5\"></maak4-component>\r\n    <maak5-component *ngIf=\"showComponent6\"></maak5-component>\r\n    <maak6-component *ngIf=\"showComponent7\"></maak6-component>\r\n    <maak7-component *ngIf=\"showComponent8\"></maak7-component>\r\n    <maak8-component *ngIf=\"showComponent9\"></maak8-component>\r\n    <maak9-component *ngIf=\"showComponent10\"></maak9-component>\r\n    <maak10-component *ngIf=\"showComponent11\"></maak10-component>\r\n    <maak11-component *ngIf=\"showComponent12\"></maak11-component>\r\n    <maak12-component *ngIf=\"showComponent13\"></maak12-component>\r\n    <maak13-component *ngIf=\"showComponent14\"></maak13-component>\r\n    <maak14-component *ngIf=\"showComponent15\"></maak14-component>\r\n    <maak15-component *ngIf=\"showComponent16\"></maak15-component>\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyYXYxMC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lbHVqb3UtbGliL3NyYy9saWIvdmFyYXYxMC92YXJhdjEwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi92YXJhdjEwL3ZhcmF2MTAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7OztBQVNoRSxNQUFNLE9BQU8sZ0JBQWdCO0lBUDdCO1FBVUUsYUFBUSxHQUFHO1lBQ1Q7Z0JBQ0UsSUFBSSxFQUFFLHVDQUF1QztnQkFDN0MsT0FBTyxFQUFFLFdBQVc7YUFDckI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsb0NBQW9DO2dCQUMxQyxPQUFPLEVBQUUsdUNBQXVDO2FBQ2pEO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLHVCQUF1QjtnQkFDN0IsT0FBTyxFQUFFLEVBQUU7YUFDWjtZQUNEO2dCQUNFLElBQUksRUFBRSwyQkFBMkI7Z0JBQ2pDLE9BQU8sRUFBRSxFQUFFO2FBQ1o7WUFDRDtnQkFDRSxJQUFJLEVBQUUsd0NBQXdDO2dCQUM5QyxPQUFPLEVBQUUsRUFBRTthQUNaO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsT0FBTyxFQUFFLEVBQUU7YUFDWjtZQUNEO2dCQUNFLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLE9BQU8sRUFBRSxFQUFFO2FBQ1o7WUFDRDtnQkFDRSxJQUFJLEVBQUUsK0JBQStCO2dCQUNyQyxPQUFPLEVBQUUsRUFBRTthQUNaO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLHdCQUF3QjtnQkFDOUIsT0FBTyxFQUFFLEVBQUU7YUFDWjtZQUNEO2dCQUNFLElBQUksRUFBRSx3QkFBd0I7Z0JBQzlCLE9BQU8sRUFBRSxFQUFFO2FBQ1o7WUFDRDtnQkFDRSxJQUFJLEVBQUUsdUNBQXVDO2dCQUM3QyxPQUFPLEVBQUUsRUFBRTthQUNaO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsT0FBTyxFQUFFLEVBQUU7YUFDWjtZQUNEO2dCQUNFLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLE9BQU8sRUFBRSxFQUFFO2FBQ1o7WUFDRDtnQkFDRSxJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixPQUFPLEVBQUUsRUFBRTthQUNaO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLDJCQUEyQjtnQkFDakMsT0FBTyxFQUFFLEVBQUU7YUFDWjtZQUNEO2dCQUNFLElBQUksRUFBRSx1QkFBdUI7Z0JBQzdCLE9BQU8sRUFBRSxFQUFFO2FBQ1o7U0FFRixDQUFDO1FBQ0YsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsb0JBQWUsR0FBWSxLQUFLLENBQUM7S0E0U2xDO0lBMVNDLE1BQU0sQ0FBQyxLQUFLO1FBQ1YsSUFBRyxJQUFJLENBQUMsWUFBWSxLQUFLLEtBQUssRUFBRTtZQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQiwyQkFBMkI7UUFFM0IsSUFBSyxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztTQUM5QjthQUNJLElBQUssSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDOUI7YUFDSSxJQUFLLElBQUksQ0FBQyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1NBQzlCO2FBQ0ksSUFBSyxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztTQUM5QjthQUNJLElBQUssSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDOUI7YUFDSSxJQUFLLElBQUksQ0FBQyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1NBQzlCO2FBQ0ksSUFBSyxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztTQUM5QjthQUNJLElBQUssSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDOUI7YUFDSSxJQUFLLElBQUksQ0FBQyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1NBQzlCO2FBQ0ksSUFBSyxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztTQUM5QjthQUNJLElBQUssSUFBSSxDQUFDLFlBQVksS0FBSyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDOUI7YUFDSSxJQUFLLElBQUksQ0FBQyxZQUFZLEtBQUssRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1NBQzlCO2FBQ0ksSUFBSyxJQUFJLENBQUMsWUFBWSxLQUFLLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztTQUM5QjthQUNJLElBQUssSUFBSSxDQUFDLFlBQVksS0FBSyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDOUI7YUFDSSxJQUFLLElBQUksQ0FBQyxZQUFZLEtBQUssRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1NBQzlCO2FBQ0ksSUFBSyxJQUFJLENBQUMsWUFBWSxLQUFLLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNILENBQUM7OEdBL1hVLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLG1FQzNDN0IsNG5FQXFEQSxrbkNEWlksWUFBWSw4VkFBVyxhQUFhLDJEQUFrQixjQUFjLDREQUFtQixjQUFjLDREQUFtQixjQUFjLDREQUFtQixjQUFjLDREQUFtQixjQUFjLDREQUFtQixjQUFjLDREQUFtQixjQUFjLDREQUFtQixjQUFjLDREQUFtQixjQUFjLDREQUFtQixlQUFlLDZEQUFvQixlQUFlLDZEQUFvQixlQUFlLDZEQUFvQixlQUFlLDZEQUFvQixlQUFlLDZEQUFvQixlQUFlOzsyRkFFNWhCLGdCQUFnQjtrQkFQNUIsU0FBUzsrQkFDRSxTQUFTLGNBR1AsSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNYWFrQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFhay9tYWFrLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hYWt4Q29tcG9uZW50IH0gZnJvbSAnLi4vbWFha3gvbWFha3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFhazFDb21wb25lbnQgfSBmcm9tICcuLi9tYWFrMS9tYWFrMS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYWFrMXhDb21wb25lbnQgfSBmcm9tICcuLi9tYWFrMXgvbWFhazF4LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hYWsyQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFhazIvbWFhazIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFhazJ4Q29tcG9uZW50IH0gZnJvbSAnLi4vbWFhazJ4L21hYWsyeC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYWFrM0NvbXBvbmVudCB9IGZyb20gJy4uL21hYWszL21hYWszLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hYWszeENvbXBvbmVudCB9IGZyb20gJy4uL21hYWszeC9tYWFrM3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFhazRDb21wb25lbnQgfSBmcm9tICcuLi9tYWFrNC9tYWFrNC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYWFrNHhDb21wb25lbnQgfSBmcm9tICcuLi9tYWFrNHgvbWFhazR4LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hYWs1Q29tcG9uZW50IH0gZnJvbSAnLi4vbWFhazUvbWFhazUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFhazV4Q29tcG9uZW50IH0gZnJvbSAnLi4vbWFhazV4L21hYWs1eC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYWFrNkNvbXBvbmVudCB9IGZyb20gJy4uL21hYWs2L21hYWs2LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hYWs2eENvbXBvbmVudCB9IGZyb20gJy4uL21hYWs2eC9tYWFrNnguY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFhazdDb21wb25lbnQgfSBmcm9tICcuLi9tYWFrNy9tYWFrNy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYWFrN3hDb21wb25lbnQgfSBmcm9tICcuLi9tYWFrN3gvbWFhazd4LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hYWs4Q29tcG9uZW50IH0gZnJvbSAnLi4vbWFhazgvbWFhazguY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFhazh4Q29tcG9uZW50IH0gZnJvbSAnLi4vbWFhazh4L21hYWs4eC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYWFrOUNvbXBvbmVudCB9IGZyb20gJy4uL21hYWs5L21hYWs5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hYWs5eENvbXBvbmVudCB9IGZyb20gJy4uL21hYWs5eC9tYWFrOXguY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFhazEwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFhazEwL21hYWsxMC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYWFrMTB4Q29tcG9uZW50IH0gZnJvbSAnLi4vbWFhazEweC9tYWFrMTB4LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hYWsxMUNvbXBvbmVudCB9IGZyb20gJy4uL21hYWsxMS9tYWFrMTEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFhazExeENvbXBvbmVudCB9IGZyb20gJy4uL21hYWsxMXgvbWFhazExeC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYWFrMTJDb21wb25lbnQgfSBmcm9tICcuLi9tYWFrMTIvbWFhazEyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hYWsxMnhDb21wb25lbnQgfSBmcm9tICcuLi9tYWFrMTJ4L21hYWsxMnguY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFhazEzQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFhazEzL21hYWsxMy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYWFrMTN4Q29tcG9uZW50IH0gZnJvbSAnLi4vbWFhazEzeC9tYWFrMTN4LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hYWsxNENvbXBvbmVudCB9IGZyb20gJy4uL21hYWsxNC9tYWFrMTQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFhazE0eENvbXBvbmVudCB9IGZyb20gJy4uL21hYWsxNHgvbWFhazE0eC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYWFrMTVDb21wb25lbnQgfSBmcm9tICcuLi9tYWFrMTUvbWFhazE1LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hYWsxNXhDb21wb25lbnQgfSBmcm9tICcuLi9tYWFrMTV4L21hYWsxNXguY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmFyYXYxMCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3ZhcmF2MTAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3ZhcmF2MTAuY29tcG9uZW50LnNjc3MnXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5nQ2xhc3MsIE1hYWtDb21wb25lbnQsIE1hYWt4Q29tcG9uZW50LCBNYWFrMUNvbXBvbmVudCwgTWFhazF4Q29tcG9uZW50LCBNYWFrMkNvbXBvbmVudCwgTWFhazJ4Q29tcG9uZW50LCBNYWFrM0NvbXBvbmVudCwgTWFhazN4Q29tcG9uZW50LCBNYWFrNENvbXBvbmVudCwgTWFhazR4Q29tcG9uZW50LCBNYWFrNUNvbXBvbmVudCwgTWFhazV4Q29tcG9uZW50LCBNYWFrNkNvbXBvbmVudCwgTWFhazZ4Q29tcG9uZW50LCBNYWFrN0NvbXBvbmVudCwgTWFhazd4Q29tcG9uZW50LCBNYWFrOENvbXBvbmVudCwgTWFhazh4Q29tcG9uZW50LCBNYWFrOUNvbXBvbmVudCwgTWFhazl4Q29tcG9uZW50LCBNYWFrMTBDb21wb25lbnQsIE1hYWsxMHhDb21wb25lbnQsIE1hYWsxMUNvbXBvbmVudCwgTWFhazExeENvbXBvbmVudCwgTWFhazEyQ29tcG9uZW50LCBNYWFrMTJ4Q29tcG9uZW50LCBNYWFrMTNDb21wb25lbnQsIE1hYWsxM3hDb21wb25lbnQsIE1hYWsxNENvbXBvbmVudCwgTWFhazE0eENvbXBvbmVudCwgTWFhazE1Q29tcG9uZW50LCBNYWFrMTV4Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmFyYXYxMENvbXBvbmVudCB7XHJcbiAgY3VycmVudEluZGV4O1xyXG5cclxuICBzZWN0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ01hYWtvbmRsaWtlIGFyZW5kdXNrZXNrdXN0ZSB2w7VyZ3VzdGlrJywgLy9odHRwczovL3d3dy5hcmVuZHVza2Vza3VzZWQuZWUvXHJcbiAgICAgIGNvbnRlbnQ6ICdDb250ZW50IDEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnSGFyanUgRXR0ZXbDtXRsdXMtIGphIEFyZW5kdXNrZXNrdXMnLCAvL2h0dHBzOi8vd3d3LmhlYWsuZWUvXHJcbiAgICAgIGNvbnRlbnQ6ICc8cHJvZ24xLWNvbXBvbmVudD48L3Byb2duMS1jb21wb25lbnQ+J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0hpaXVtYWEgQXJlbmR1c2tlc2t1cycsICAvL2h0dHBzOi8vaGlpdW1hYWFyZW5kdXNrZXNrdXMuZWUvXHJcbiAgICAgIGNvbnRlbnQ6ICcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnSWRhLVZpcnUgRXR0ZXbDtXRsdXNrZXNrdXMnLCAvL2h0dHBzOi8vaXZlay5lZS9cclxuICAgICAgY29udGVudDogJydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdKw7VnZXZhbWFhIEFyZW5kdXMtIGphIEV0dGV2w7V0bHVza2Vza3VzJywgIC8vaHR0cHM6Ly93d3cuamFlay5lZS9cclxuICAgICAgY29udGVudDogJydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdTaWh0YXN1dHVzIErDpHJ2YW1hYScsICAvL2h0dHBzOi8vamFydmEua292dHAuZWUva29udGFrdC9cclxuICAgICAgY29udGVudDogJydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdTaWh0YXN1dHVzIEzDpMOkbmVtYWEnLCAgLy9odHRwczovL2xhYW5lbWFhLmVlL3NpaHRhc3V0dXMtbGFhbmVtYWEvb3JnYW5pc2F0c2lvb24vXHJcbiAgICAgIGNvbnRlbnQ6ICcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnTMOkw6RuZS1WaXJ1IE9tYXZhbGl0c3VzdGUgTGlpdCcsICAvL2h0dHBzOi8vd3d3LnZpcm9sLmVlL2J1cm9vXHJcbiAgICAgIGNvbnRlbnQ6ICcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnUMOkcm51bWFhIEFyZW5kdXNrZXNrdXMnLCAgLy9odHRwczovL2FyZW5kdXNrZXNrdXMuZXUvXHJcbiAgICAgIGNvbnRlbnQ6ICcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnUMO1bHZhbWFhIEFyZW5kdXNrZXNrdXMnLCAgLy9odHRwczovL2FyZW5kdXNrZXNrdXMucG9sdmFtYWEuZWUvYXJlbmR1c2tlc2t1cy9cclxuICAgICAgY29udGVudDogJydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdSYXBsYW1hYSBBcmVuZHVzLSBqYSBFdHRldsO1dGx1c2tlc2t1cycsICAvL2h0dHBzOi8vcmFlay5lZS9cclxuICAgICAgY29udGVudDogJydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdTYWFyZSBBcmVuZHVza2Vza3VzJywgIC8vaHR0cHM6Ly9zYXNhay5lZS9lc3RcclxuICAgICAgY29udGVudDogJydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdUYXJ0dSDDhHJpbsO1dWFuZGxhJywgIC8vaHR0cHM6Ly9hcmlub3VhbmRsYS5lZS9cclxuICAgICAgY29udGVudDogJydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdWYWxnYW1hYSBBcmVuZ3VhZ2VudHV1cicsICAvL2h0dHBzOi8vd3d3LmFyZW5ndWFnZW50dXVyLmVlL1xyXG4gICAgICBjb250ZW50OiAnJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1ZpbGphbmRpbWFhIEFyZW5kdXNrZXNrdXMnLCAgLy9odHRwczovL2FyZW5kdXNrZXNrdXMudmlsamFuZGltYWEuZWUvdHV0dnVzdHVzXHJcbiAgICAgIGNvbnRlbnQ6ICcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnVsO1cnVtYWEgQXJlbmR1c2tlc2t1cycsICAvL2h0dHBzOi8vdm9ydW1hYS5lZS9cclxuICAgICAgY29udGVudDogJydcclxuICAgIH1cclxuXHJcbiAgXTtcclxuICBzaG93Q29tcG9uZW50MTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHNob3dDb21wb25lbnQyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2hvd0NvbXBvbmVudDM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93Q29tcG9uZW50NDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHNob3dDb21wb25lbnQ1OiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2hvd0NvbXBvbmVudDY6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93Q29tcG9uZW50NzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHNob3dDb21wb25lbnQ4OiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2hvd0NvbXBvbmVudDk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93Q29tcG9uZW50MTA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93Q29tcG9uZW50MTE6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93Q29tcG9uZW50MTI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93Q29tcG9uZW50MTM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93Q29tcG9uZW50MTQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93Q29tcG9uZW50MTU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93Q29tcG9uZW50MTY6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgZXhwYW5kKGluZGV4KSB7XHJcbiAgICBpZih0aGlzLmN1cnJlbnRJbmRleCA9PT0gaW5kZXgpIHtcclxuICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBudWxsO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4O1xyXG4gICAgLy9hbGVydCh0aGlzLmN1cnJlbnRJbmRleCk7XHJcbiAgICBcclxuICAgIGlmICggdGhpcy5jdXJyZW50SW5kZXggPT09IDApIHtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MSA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDIgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ3ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDggPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50OSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxNCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxNSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxNiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIHRoaXMuY3VycmVudEluZGV4ID09PSAxKSB7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MiA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ1ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDYgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ4ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDkgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTAgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTEgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTIgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTYgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCB0aGlzLmN1cnJlbnRJbmRleCA9PT0gMikge1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDIgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ2ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50OCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ5ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEwID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDExID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDE0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDE1ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDE2ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggdGhpcy5jdXJyZW50SW5kZXggPT09IDMpIHtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NCA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ3ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDggPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50OSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxNCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxNSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxNiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIHRoaXMuY3VycmVudEluZGV4ID09PSA0KSB7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NSA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDYgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ4ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDkgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTAgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTEgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTIgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTYgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCB0aGlzLmN1cnJlbnRJbmRleCA9PT0gNSkge1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDIgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NiA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50OCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ5ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEwID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDExID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDE0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDE1ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDE2ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggdGhpcy5jdXJyZW50SW5kZXggPT09IDYpIHtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ1ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDYgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDggPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50OSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxNCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxNSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxNiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIHRoaXMuY3VycmVudEluZGV4ID09PSA3KSB7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ2ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50OCA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDkgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTAgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTEgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTIgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTYgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCB0aGlzLmN1cnJlbnRJbmRleCA9PT0gOCkge1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDIgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ3ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDggPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50OSA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEwID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDExID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDE0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDE1ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDE2ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggdGhpcy5jdXJyZW50SW5kZXggPT09IDkpIHtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ1ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDYgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ4ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDkgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTAgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxNCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxNSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxNiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIHRoaXMuY3VycmVudEluZGV4ID09PSAxMCkge1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDIgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ3ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDggPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50OSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMSA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDE0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDE1ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDE2ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggdGhpcy5jdXJyZW50SW5kZXggPT09IDExKSB7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ2ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50OCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ5ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEwID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDExID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEyID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTYgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCB0aGlzLmN1cnJlbnRJbmRleCA9PT0gMTIpIHtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ1ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDYgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ4ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDkgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTAgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTEgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTIgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTMgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxNCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxNSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxNiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIHRoaXMuY3VycmVudEluZGV4ID09PSAxMykge1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDIgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ3ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDggPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50OSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxMyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxNCA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDE1ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDE2ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggdGhpcy5jdXJyZW50SW5kZXggPT09IDE0KSB7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ2ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50OCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ5ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEwID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDExID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDE0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDE1ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTYgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCB0aGlzLmN1cnJlbnRJbmRleCA9PT0gMTUpIHtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ1ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDYgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ4ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDkgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTAgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTEgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTIgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MTYgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iLCI8ZGl2IGNsYXNzPVwicmFhbVltYmVyXCIgPlxyXG5cclxuPGJyPlxyXG48ZGl2IGNsYXNzPVwidGVrc3Rpa2VcIj5cclxuXHJcbk1hYWtvbmRsaWtlIGFyZW5kdXNrZXNrdXN0ZSBpbmZvcm1hdHNpb29uXHJcblxyXG48L2Rpdj5cclxuXHJcbjxicj5cclxuXHJcbjxkaXYgY2xhc3M9XCJ0ZWtzdGlrZTJcIj5cclxuXHJcbkFsbHBvb2wgb24gdHV0dnVzdGF2IGluZm9ybWF0c2lvb24gbWFha29uZGxpa2UgYXJlbmR1c2tlc2t1c3RlIGthdXBhLiBBbGFqYW90dXNlIGthdWR1IHDDpMOkc2ViIHZhbGl0dWQgbWFha29ubmEgYXJlbmR1c2tlc2t1c2Uga29kdWxlaGVsZSBqYSBzYWFiIHR1dHZ1ZGEgdsO1aW1hbHVzdGVnYSwgbWlkYSBhcmVuZHVza2Vza3VzIHBha3ViLlxyXG48YnI+IDxicj5cclxuPC9kaXY+XHJcblxyXG48ZGl2ICpuZ0Zvcj1cImxldCBzZWN0aW9uIG9mIHNlY3Rpb25zOyBsZXQgaSA9IGluZGV4O1wiPlxyXG4gIDxidXR0b24gY2xhc3M9XCJhY2NvcmRpb25cIiAoY2xpY2spID0gXCJleHBhbmQoaSlcIj4gPHNwYW4gY2xhc3M9XCJ0ZWtzdGlrZXZcIj57e3NlY3Rpb24ubmFtZX19PC9zcGFuPjwvYnV0dG9uPlxyXG5cclxuICA8IS0tZGl2IGNsYXNzPVwicmFhbVltYmVyXCIgLS0+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJwYW5lbFwiXHJcbiAgICBbbmdDbGFzc109XCJ7ICd2aXNpYmxlJyA6IGN1cnJlbnRJbmRleCA9PT0gaSB9XCI+XHJcbiAgICA8IS0tcD57e3NlY3Rpb24uY29udGVudH19PC9wLS0+XHJcbiAgICA8bWFhay1jb21wb25lbnQgKm5nSWY9XCJzaG93Q29tcG9uZW50MVwiPjwvbWFhay1jb21wb25lbnQ+XHJcbiAgICA8bWFhazEtY29tcG9uZW50ICpuZ0lmPVwic2hvd0NvbXBvbmVudDJcIj48L21hYWsxLWNvbXBvbmVudD5cclxuICAgIDxtYWFrMi1jb21wb25lbnQgKm5nSWY9XCJzaG93Q29tcG9uZW50M1wiPjwvbWFhazItY29tcG9uZW50PlxyXG4gICAgPG1hYWszLWNvbXBvbmVudCAqbmdJZj1cInNob3dDb21wb25lbnQ0XCI+PC9tYWFrMy1jb21wb25lbnQ+XHJcbiAgICA8bWFhazQtY29tcG9uZW50ICpuZ0lmPVwic2hvd0NvbXBvbmVudDVcIj48L21hYWs0LWNvbXBvbmVudD5cclxuICAgIDxtYWFrNS1jb21wb25lbnQgKm5nSWY9XCJzaG93Q29tcG9uZW50NlwiPjwvbWFhazUtY29tcG9uZW50PlxyXG4gICAgPG1hYWs2LWNvbXBvbmVudCAqbmdJZj1cInNob3dDb21wb25lbnQ3XCI+PC9tYWFrNi1jb21wb25lbnQ+XHJcbiAgICA8bWFhazctY29tcG9uZW50ICpuZ0lmPVwic2hvd0NvbXBvbmVudDhcIj48L21hYWs3LWNvbXBvbmVudD5cclxuICAgIDxtYWFrOC1jb21wb25lbnQgKm5nSWY9XCJzaG93Q29tcG9uZW50OVwiPjwvbWFhazgtY29tcG9uZW50PlxyXG4gICAgPG1hYWs5LWNvbXBvbmVudCAqbmdJZj1cInNob3dDb21wb25lbnQxMFwiPjwvbWFhazktY29tcG9uZW50PlxyXG4gICAgPG1hYWsxMC1jb21wb25lbnQgKm5nSWY9XCJzaG93Q29tcG9uZW50MTFcIj48L21hYWsxMC1jb21wb25lbnQ+XHJcbiAgICA8bWFhazExLWNvbXBvbmVudCAqbmdJZj1cInNob3dDb21wb25lbnQxMlwiPjwvbWFhazExLWNvbXBvbmVudD5cclxuICAgIDxtYWFrMTItY29tcG9uZW50ICpuZ0lmPVwic2hvd0NvbXBvbmVudDEzXCI+PC9tYWFrMTItY29tcG9uZW50PlxyXG4gICAgPG1hYWsxMy1jb21wb25lbnQgKm5nSWY9XCJzaG93Q29tcG9uZW50MTRcIj48L21hYWsxMy1jb21wb25lbnQ+XHJcbiAgICA8bWFhazE0LWNvbXBvbmVudCAqbmdJZj1cInNob3dDb21wb25lbnQxNVwiPjwvbWFhazE0LWNvbXBvbmVudD5cclxuICAgIDxtYWFrMTUtY29tcG9uZW50ICpuZ0lmPVwic2hvd0NvbXBvbmVudDE2XCI+PC9tYWFrMTUtY29tcG9uZW50PlxyXG4gICAgXHJcbiAgICA8IS0tcHJvZ24yLWNvbXBvbmVudCAqbmdJZj1cInt7c2VjdGlvbi5jb250ZW50fX09PSdwcm9nbjInXCI+PC9wcm9nbjItY29tcG9uZW50ICpuZ0lmPVwie3tzZWN0aW9uLmNvbnRlbnR9fT09J3Byb2duMidcIi0tPlxyXG4gICAgPCEtLXByb2duMS1jb21wb25lbnQ+PC9wcm9nbjEtY29tcG9uZW50LS0+XHJcbiAgICA8IS0tcHJvZ24yLWNvbXBvbmVudD48L3Byb2duMi1jb21wb25lbnQtLT5cclxuICA8IS0tL2Rpdi0tPlxyXG5cclxuPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuIl19