import { Component } from '@angular/core';
import { xtee } from '../xtee/xtee';
import * as i0 from "@angular/core";
//import { products } from '../products';
export class Tabel4Component {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiZWw0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi90YWJlbDQvdGFiZWw0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi90YWJlbDQvdGFiZWw0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFcEMseUNBQXlDO0FBUXpDLE1BQU0sT0FBTyxlQUFlO0lBVzFCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hDLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUMsR0FBRyxHQUFDLEVBQUUsQ0FBQyxHQUFDLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBQyxHQUFHLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOzhHQXJCVSxlQUFlO2tHQUFmLGVBQWUsNEVDWDVCLHlvRkFvRUU7OzJGRHpEVyxlQUFlO2tCQU4zQixTQUFTOytCQUNFLGtCQUFrQixjQUdoQixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHh0ZWUgfSBmcm9tICcuLi94dGVlL3h0ZWUnO1xyXG5cclxuLy9pbXBvcnQgeyBwcm9kdWN0cyB9IGZyb20gJy4uL3Byb2R1Y3RzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGFiZWw0LWNvbXBvbmVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmVsNC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFiZWw0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiZWw0Q29tcG9uZW50IHtcclxuXHJcbiAgcmV0cHNlY3Q6IG51bWJlcjsgIFxyXG4gIHJldG5zZWN0OiBudW1iZXI7XHJcbiAgcmV0cHNpemU6IG51bWJlcjtcclxuICByZXRuc2l6ZTogbnVtYmVyO1xyXG4gIHJldHBjb3VudDogbnVtYmVyO1xyXG4gIHJldG5jb3VudDogbnVtYmVyO1xyXG4gIGFhc3RhOiBzdHJpbmc7XHJcbiAgYWFzdGF4OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgIHRoaXMucmV0cHNlY3QgPSAoeHRlZS5SZXRwU2VjdCkqMTAwO1xyXG4gICAgdGhpcy5yZXRuc2VjdCA9IHh0ZWUuUmV0X25fU2VjdDtcclxuICAgIC8vdGhpcy5yZXRwc2l6ZSA9ICh4dGVlLlJldHBTaXplKSoxMDA7XHJcbiAgICB0aGlzLnJldHBzaXplID0gTWF0aC5yb3VuZCgoeHRlZS5SZXRwU2l6ZSkqMTAwKjEwKS8xMDtcclxuICAgIHRoaXMucmV0bnNpemUgPSB4dGVlLlJldF9uX1NpemU7XHJcbiAgICB0aGlzLnJldHBjb3VudCA9ICh4dGVlLlJldHBDb3VudCkqMTAwO1xyXG4gICAgdGhpcy5yZXRuY291bnQgPSB4dGVlLlJldF9uX0NvdW50O1xyXG4gICAgdGhpcy5hYXN0YSA9IHh0ZWUucHJvZ25BYXN0YTtcclxuICAgIHRoaXMuYWFzdGF4ID0gdGhpcy5hYXN0YS5yZXBsYWNlQWxsKCdcIicsIFwiXCIpO1xyXG4gIH1cclxuICBcclxufSIsIjxkaXYgY2xhc3M9XCJkYXNoYm9hcmRcIj5cclxuICA8ZGl2IGNsYXNzPVwiZGFzaGJvYXJkLXR5cGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJkYXNoYm9hcmQtcm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkYXNoYm9hcmQtcm93LWl0ZW1cIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzcz1cIm1pdHUtZXR0ZXYtdGV0ZXN0LW9uLXNpbnUtbWFha29ubmFzLXNpbnUtZXR0ZXYtdHRlc3QtcGFyZW1hcy1zZWlzdXNcIlxyXG4gICAgICAgID5cclxuICAgICAgICBNaXR1IHByb3RzZW50aSBzYW1hIDxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDcwMFwiPm1hYWtvbm5hIDwvc3Bhbj5ldHRldsO1dGV0ZXN0IG9uIHRhc3V2dXNlbHQgc2ludSBldHRldsO1dHRlc3QgbWFkYWxhbWFsIHBvc2l0c2lvb25pbDpcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkYXNoYm9hcmQtcm93LWl0ZW0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+e3thYXN0YXh9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+e3tyZXRwY291bnR9fSU8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwyXCI+RXR0ZXbDtXR0ZWlkIHbDtXJkbHVzZXM6IHt7cmV0bmNvdW50fX08L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdmdcclxuICAgICAgY2xhc3M9XCJkaXZpZGVyMlwiXHJcbiAgICAgIHdpZHRoPVwiOTUwXCJcclxuICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDk1MCAxNlwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICA+XHJcbiAgICAgIDxsaW5lIHkxPVwiNy41XCIgeDI9XCI5NTBcIiB5Mj1cIjcuNVwiIHN0cm9rZT1cIiM2NjlDQzhcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGFzaGJvYXJkLXJvdzJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRhc2hib2FyZC1yb3ctaXRlbVwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwibWl0dS1ldHRldi10ZXRlc3Qtb24tc2ludS1ldHRldi10dGUtdGVnZXZ1c2FsYWRlLWdydXBpcy1zaW51LWV0dGV2LXR0ZXN0LXBhcmVtYXMtc2Vpc3VzXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgTWl0dSBwcm90c2VudGkgc2FtYSA8c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA3MDBcIj50ZWdldnVzYWxhZGUgZ3J1cGkgIDwvc3Bhbj5ldHRldsO1dGV0ZXN0IG9uIHRhc3V2dXNlbHQgc2ludSBldHRldsO1dHRlc3QgbWFkYWxhbWFsIHBvc2l0c2lvb25pbDpcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkYXNoYm9hcmQtcm93LWl0ZW0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+e3thYXN0YXh9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+e3tyZXRwc2VjdH19JTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbDJcIj5FdHRldsO1dHRlaWQgdsO1cmRsdXNlczoge3tyZXRuc2VjdH19PC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3ZnXHJcbiAgICAgIGNsYXNzPVwiZGl2aWRlcjJcIlxyXG4gICAgICB3aWR0aD1cIjk1MFwiXHJcbiAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgdmlld0JveD1cIjAgMCA5NTAgMTZcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgPlxyXG4gICAgICA8bGluZSB5MT1cIjcuNVwiIHgyPVwiOTUwXCIgeTI9XCI3LjVcIiBzdHJva2U9XCIjNjY5Q0M4XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgPGRpdiBjbGFzcz1cImRhc2hib2FyZC1yb3czXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkYXNoYm9hcmQtcm93LWl0ZW1cIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzcz1cIm1pdHUtZXR0ZXYtdGV0ZXN0LW9uLXNpbnUtZXR0ZXYtdHRlZ2Etc2FtYXMtc3V1cnVzZXMtZXR0ZXYtdHRlc3QtcGFyZW1hcy1zZWlzdXNcIlxyXG4gICAgICAgID5cclxuICAgICAgICBNaXR1IHByb3RzZW50aSBzYW1hIDxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDcwMFwiPnN1dXJ1c2tsYXNzaSAgPC9zcGFuPmV0dGV2w7V0ZXRlc3Qgb24gdGFzdXZ1c2VsdCBzaW51IGV0dGV2w7V0dGVzdCBtYWRhbGFtYWwgcG9zaXRzaW9vbmlsOlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRhc2hib2FyZC1yb3ctaXRlbTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj57e2Fhc3RheH19PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj57e3JldHBzaXplfX0lPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsMlwiPkV0dGV2w7V0dGVpZCB2w7VyZGx1c2VzOiB7e3JldG5zaXplfX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICAiXX0=