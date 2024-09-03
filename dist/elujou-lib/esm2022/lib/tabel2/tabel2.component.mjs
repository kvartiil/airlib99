import { Component } from '@angular/core';
import { xtee } from '../xtee/xtee';
import * as i0 from "@angular/core";
//import { products } from '../products';
export class Tabel2Component {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiZWwyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi90YWJlbDIvdGFiZWwyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi90YWJlbDIvdGFiZWwyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFcEMseUNBQXlDO0FBUXpDLE1BQU0sT0FBTyxlQUFlO0lBVzFCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBQyxHQUFHLEdBQUMsRUFBRSxDQUFDLEdBQUMsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFDLEdBQUcsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7OEdBcEJVLGVBQWU7a0dBQWYsZUFBZSw0RUNYNUIsNnBGQXFFRTs7MkZEMURXLGVBQWU7a0JBTjNCLFNBQVM7K0JBQ0Usa0JBQWtCLGNBR2hCLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgeHRlZSB9IGZyb20gJy4uL3h0ZWUveHRlZSc7XHJcblxyXG4vL2ltcG9ydCB7IHByb2R1Y3RzIH0gZnJvbSAnLi4vcHJvZHVjdHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YWJlbDItY29tcG9uZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFiZWwyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJlbDIuY29tcG9uZW50LnNjc3MnXSxcclxuICBzdGFuZGFsb25lOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJlbDJDb21wb25lbnQge1xyXG5cclxubGlxcHNlY3Q6IG51bWJlcjsgIFxyXG5saXFuc2VjdDogbnVtYmVyO1xyXG5saXFwc2l6ZTogbnVtYmVyO1xyXG5saXFuc2l6ZTogbnVtYmVyO1xyXG5saXFwY291bnQ6IG51bWJlcjtcclxubGlxbmNvdW50OiBudW1iZXI7XHJcbmFhc3RhOiBzdHJpbmc7XHJcbmFhc3RheDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICB0aGlzLmxpcXBzZWN0ID0gKHh0ZWUuTGlxcFNlY3QpKjEwMDtcclxuICAgIHRoaXMubGlxbnNlY3QgPSB4dGVlLkxpcV9uX1NlY3Q7XHJcbiAgICB0aGlzLmxpcXBzaXplID0gTWF0aC5yb3VuZCgoeHRlZS5MaXFwU2l6ZSkqMTAwKjEwKS8xMDtcclxuICAgIHRoaXMubGlxbnNpemUgPSB4dGVlLkxpcV9uX1NpemU7XHJcbiAgICB0aGlzLmxpcXBjb3VudCA9ICh4dGVlLkxpcXBDb3VudCkqMTAwO1xyXG4gICAgdGhpcy5saXFuY291bnQgPSB4dGVlLkxpcV9uX0NvdW50O1xyXG4gICAgdGhpcy5hYXN0YSA9IHh0ZWUucHJvZ25BYXN0YTtcclxuICAgIHRoaXMuYWFzdGF4ID0gdGhpcy5hYXN0YS5yZXBsYWNlQWxsKCdcIicsIFwiXCIpO1xyXG4gIH1cclxuICBcclxuICAvL01hdGgucm91bmQocGFyYW1zLnZhbHVlICogMTApIC8gMTBcclxuXHJcblxyXG59IiwiPGRpdiBjbGFzcz1cImRhc2hib2FyZFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJkYXNoYm9hcmQtdHlwZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImRhc2hib2FyZC1yb3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRhc2hib2FyZC1yb3ctaXRlbVwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwibWl0dS1ldHRldi10ZXRlc3Qtb24tc2ludS1tYWFrb25uYXMtc2ludS1ldHRldi10dGVzdC1wYXJlbWFzLXNlaXN1c1wiXHJcbiAgICAgICAgPlxyXG4gIFxyXG4gICAgICAgIE1pdHUgcHJvdHNlbnRpIHNhbWEgPHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogNzAwXCI+bWFha29ubmEgPC9zcGFuPmV0dGV2w7V0ZXRlc3Qgb24gbWFrc2V2w7VpbWVsdCBzaW51IGV0dGV2w7V0dGVzdCBtYWRhbGFtYWwgcG9zaXRzaW9vbmlsOlxyXG4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRhc2hib2FyZC1yb3ctaXRlbTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj57e2Fhc3RheH19PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj57e2xpcXBjb3VudH19JTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbDJcIj5FdHRldsO1dHRlaWQgdsO1cmRsdXNlczoge3tsaXFuY291bnR9fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN2Z1xyXG4gICAgICBjbGFzcz1cImRpdmlkZXIyXCJcclxuICAgICAgd2lkdGg9XCI5NTBcIlxyXG4gICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgOTUwIDE2XCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgID5cclxuICAgICAgPGxpbmUgeTE9XCI3LjVcIiB4Mj1cIjk1MFwiIHkyPVwiNy41XCIgc3Ryb2tlPVwiIzY2OUNDOFwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICAgIDxkaXYgY2xhc3M9XCJkYXNoYm9hcmQtcm93MlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGFzaGJvYXJkLXJvdy1pdGVtXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3M9XCJtaXR1LWV0dGV2LXRldGVzdC1vbi1zaW51LWV0dGV2LXR0ZS10ZWdldnVzYWxhZGUtZ3J1cGlzLXNpbnUtZXR0ZXYtdHRlc3QtcGFyZW1hcy1zZWlzdXNcIlxyXG4gICAgICAgID5cclxuICAgICAgICBNaXR1IHByb3RzZW50aSBzYW1hIDxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDcwMFwiPnRlZ2V2dXNhbGFkZSBncnVwaSAgPC9zcGFuPmV0dGV2w7V0ZXRlc3Qgb24gbWFrc2V2w7VpbWVsdCBzaW51IGV0dGV2w7V0dGVzdCBtYWRhbGFtYWwgcG9zaXRzaW9vbmlsOlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRhc2hib2FyZC1yb3ctaXRlbTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj57e2Fhc3RheH19PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj57e2xpcXBzZWN0fX0lPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsMlwiPkV0dGV2w7V0dGVpZCB2w7VyZGx1c2VzOiB7e2xpcW5zZWN0fX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdmdcclxuICAgICAgY2xhc3M9XCJkaXZpZGVyMlwiXHJcbiAgICAgIHdpZHRoPVwiOTUwXCJcclxuICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDk1MCAxNlwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICA+XHJcbiAgICAgIDxsaW5lIHkxPVwiNy41XCIgeDI9XCI5NTBcIiB5Mj1cIjcuNVwiIHN0cm9rZT1cIiM2NjlDQzhcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGFzaGJvYXJkLXJvdzNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRhc2hib2FyZC1yb3ctaXRlbVwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwibWl0dS1ldHRldi10ZXRlc3Qtb24tc2ludS1ldHRldi10dGVnYS1zYW1hcy1zdXVydXNlcy1ldHRldi10dGVzdC1wYXJlbWFzLXNlaXN1c1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIE1pdHUgcHJvdHNlbnRpIHNhbWEgPHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogNzAwXCI+c3V1cnVza2xhc3NpICA8L3NwYW4+ZXR0ZXbDtXRldGVzdCBvbiBtYWtzZXbDtWltZWx0IHNpbnUgZXR0ZXbDtXR0ZXN0IG1hZGFsYW1hbCBwb3NpdHNpb29uaWw6XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGFzaGJvYXJkLXJvdy1pdGVtMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPnt7YWFzdGF4fX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPnt7bGlxcHNpemV9fSU8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwyXCI+RXR0ZXbDtXR0ZWlkIHbDtXJkbHVzZXM6IHt7bGlxbnNpemV9fTwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgIl19