import { Component } from '@angular/core';
import { xtee } from '../xtee/xtee';
import * as i0 from "@angular/core";
//import { products } from '../products';
export class Tabele3Component {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiZWxlMy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lbHVqb3UtbGliL3NyYy9saWIvdGFiZWxlMy90YWJlbGUzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi90YWJlbGUzL3RhYmVsZTMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUVwQyx5Q0FBeUM7QUFRekMsTUFBTSxPQUFPLGdCQUFnQjtJQVEzQjtRQUNFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBQyxHQUFHLENBQUMsR0FBQyxHQUFHLENBQUM7UUFDeEMsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBQyxHQUFHLENBQUMsR0FBQyxHQUFHLENBQUM7UUFDMUMsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBQyxHQUFHLENBQUMsR0FBQyxHQUFHLENBQUM7UUFDMUMsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOzhHQWpCVSxnQkFBZ0I7a0dBQWhCLGdCQUFnQiw2RUNYN0IsdXJFQW9FaUg7OzJGRHpEcEcsZ0JBQWdCO2tCQU41QixTQUFTOytCQUNFLG1CQUFtQixjQUdqQixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHh0ZWUgfSBmcm9tICcuLi94dGVlL3h0ZWUnO1xyXG5cclxuLy9pbXBvcnQgeyBwcm9kdWN0cyB9IGZyb20gJy4uL3Byb2R1Y3RzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGFiZWxlMy1jb21wb25lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJlbGUzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJlbGUzLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiZWxlM0NvbXBvbmVudCB7XHJcblxyXG4gIHZrOiBudW1iZXI7ICBcclxuICBrb3M6IG51bWJlcjtcclxuICBpa2s6IG51bWJlcjtcclxuICBhYXN0YTogc3RyaW5nO1xyXG4gIGFhc3RheDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICB0aGlzLnZrID0gTWF0aC5yb3VuZCgoeHRlZS5WSykqMTAwKS8xMDA7XHJcbiAgICAvL3RoaXMudmsgPSB4dGVlLlZLO1xyXG4gICAgdGhpcy5rb3MgPSBNYXRoLnJvdW5kKCh4dGVlLktPUykqMTAwKS8xMDA7XHJcbiAgICAvL3RoaXMua29zID0geHRlZS5LT1M7XHJcbiAgICB0aGlzLmlrayA9IE1hdGgucm91bmQoKHh0ZWUuSUtLKSoxMDApLzEwMDtcclxuICAgIC8vdGhpcy5pa2sgPSB4dGVlLklLSztcclxuICAgIHRoaXMuYWFzdGEgPSB4dGVlLnByb2duQWFzdGE7XHJcbiAgICB0aGlzLmFhc3RheCA9IHRoaXMuYWFzdGEucmVwbGFjZUFsbCgnXCInLCBcIlwiKTtcclxuICB9XHJcbiAgXHJcbn0iLCI8ZGl2IGNsYXNzPVwiZGFzaGJvYXJkXCI+XHJcbjxkaXYgY2xhc3M9XCJkYXNoYm9hcmQtdHlwZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJkYXNoYm9hcmQtcm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGFzaGJvYXJkLXJvdy1pdGVtXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cIm1pdHUtZXR0ZXYtdGV0ZXN0LW9uLXNpbnUtbWFha29ubmFzLXNpbnUtZXR0ZXYtdHRlc3QtcGFyZW1hcy1zZWlzdXNcIlxyXG4gICAgICA+XHJcbiAgICAgICAgU2ludSBldHRldsO1dHRlIHbDtWxha29yZGFqYTogXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGFzaGJvYXJkLXJvdy1pdGVtMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj57e2Fhc3RheH19PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+e3t2a319PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8c3ZnXHJcbiAgICBjbGFzcz1cImRpdmlkZXIyXCJcclxuICAgIHdpZHRoPVwiOTUwXCJcclxuICAgIGhlaWdodD1cIjE2XCJcclxuICAgIHZpZXdCb3g9XCIwIDAgOTUwIDE2XCJcclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gID5cclxuICAgIDxsaW5lIHkxPVwiNy41XCIgeDI9XCI5NTBcIiB5Mj1cIjcuNVwiIHN0cm9rZT1cIiM2NjlDQzhcIiAvPlxyXG4gIDwvc3ZnPlxyXG4gIDxkaXYgY2xhc3M9XCJkYXNoYm9hcmQtcm93MlwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImRhc2hib2FyZC1yb3ctaXRlbVwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJtaXR1LWV0dGV2LXRldGVzdC1vbi1zaW51LWV0dGV2LXR0ZS10ZWdldnVzYWxhZGUtZ3J1cGlzLXNpbnUtZXR0ZXYtdHRlc3QtcGFyZW1hcy1zZWlzdXNcIlxyXG4gICAgICA+XHJcbiAgICAgICBTaW51IGV0dGV2w7V0dGUga29odXN0dXN0ZSBqYSBvbWFrYXBpdGFsaSBzdWhlOlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImRhc2hib2FyZC1yb3ctaXRlbTJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+e3thYXN0YXh9fTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPnt7a29zfX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxzdmdcclxuICAgIGNsYXNzPVwiZGl2aWRlcjJcIlxyXG4gICAgd2lkdGg9XCI5NTBcIlxyXG4gICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgdmlld0JveD1cIjAgMCA5NTAgMTZcIlxyXG4gICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgPlxyXG4gICAgPGxpbmUgeTE9XCI3LjVcIiB4Mj1cIjk1MFwiIHkyPVwiNy41XCIgc3Ryb2tlPVwiIzY2OUNDOFwiIC8+XHJcbiAgPC9zdmc+XHJcbiAgPGRpdiBjbGFzcz1cImRhc2hib2FyZC1yb3czXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGFzaGJvYXJkLXJvdy1pdGVtXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cIm1pdHUtZXR0ZXYtdGV0ZXN0LW9uLXNpbnUtZXR0ZXYtdHRlZ2Etc2FtYXMtc3V1cnVzZXMtZXR0ZXYtdHRlc3QtcGFyZW1hcy1zZWlzdXNcIlxyXG4gICAgICA+XHJcbiAgICAgIFNpbnUgZXR0ZXbDtXR0ZSBpbnRyZXNzaWRlIGthdHRla29yZGFqYTpcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJkYXNoYm9hcmQtcm93LWl0ZW0yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPnt7YWFzdGF4fX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj57e2lra319PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwhLS0vZGl2LS0+XHJcbjwhLS1icj5cclxuPGlmcmFtZSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI1MDBcIiBzcmM9XCJodHRwczovL2ludGVyc3RhdC5pbmZvL0VsdWpvdWQvRGlzYWluL0Zsb3Jpc2gvZmxvcmlzaDMuaHRtbFwiPjwvaWZyYW1lLS0+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwhLS1pZnJhbWUgW3NyY109XCJ1cmxTYWZlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNDUwXCIgZnJhbWVib3JkZXI9XCIwXCIgc3R5bGU9XCJib3JkZXI6MFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZS0tPiJdfQ==