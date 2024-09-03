import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class Varav11Component {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Varav11Component, isStandalone: true, selector: "varav11", ngImport: i0, template: "<div class=\"raamYmber\" >\r\n\r\n  <br>\r\n  <div class=\"tekstike\">\r\n  \r\n  Kaasam\u00F5tlemise v\u00F5imalused sisendi andmisel\r\n  \r\n  </div>\r\n  \r\n  <br>\r\n  \r\n  <div class=\"tekstike2a\">\r\n  \r\n  Allj\u00E4rgnevalt on toodud alajaotuste l\u00F5ikes olulisemad selgitused v\u00F5imaluste osas, et kasutaja saaks anda omapoolset sisendit ja kuidas seda sisendit arvesse v\u00F5etakse.\r\n  <br> <br>\r\n  </div>\r\n  \r\n  <div *ngFor=\"let section of sections; let i = index;\">\r\n    <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n  \r\n    <!--div class=\"raamYmber\" -->\r\n  \r\n    <div class=\"panel\"\r\n      [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n      <span class=\"tekstike2\">{{section.content}}</span>\r\n        \r\n  </div>\r\n  \r\n  </div>\r\n  \r\n  </div>\r\n  \r\n  ", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px 10px 10px 40px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2a{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav11Component, decorators: [{
            type: Component,
            args: [{ selector: 'varav11', standalone: true, imports: [CommonModule], template: "<div class=\"raamYmber\" >\r\n\r\n  <br>\r\n  <div class=\"tekstike\">\r\n  \r\n  Kaasam\u00F5tlemise v\u00F5imalused sisendi andmisel\r\n  \r\n  </div>\r\n  \r\n  <br>\r\n  \r\n  <div class=\"tekstike2a\">\r\n  \r\n  Allj\u00E4rgnevalt on toodud alajaotuste l\u00F5ikes olulisemad selgitused v\u00F5imaluste osas, et kasutaja saaks anda omapoolset sisendit ja kuidas seda sisendit arvesse v\u00F5etakse.\r\n  <br> <br>\r\n  </div>\r\n  \r\n  <div *ngFor=\"let section of sections; let i = index;\">\r\n    <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n  \r\n    <!--div class=\"raamYmber\" -->\r\n  \r\n    <div class=\"panel\"\r\n      [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n      <span class=\"tekstike2\">{{section.content}}</span>\r\n        \r\n  </div>\r\n  \r\n  </div>\r\n  \r\n  </div>\r\n  \r\n  ", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px 10px 10px 40px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2a{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyYXYxMS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lbHVqb3UtbGliL3NyYy9saWIvdmFyYXYxMS92YXJhdjExLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi92YXJhdjExL3ZhcmF2MTEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQVMvQyxNQUFNLE9BQU8sZ0JBQWdCO0lBUDdCO1FBVUUsYUFBUSxHQUFHO1lBQ1Q7Z0JBQ0UsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLE9BQU8sRUFDTCxpWkFBaVo7YUFDbFo7WUFDSDtnQkFDRSxJQUFJLEVBQUUsZUFBZTtnQkFDckIsT0FBTyxFQUNMLDBYQUEwWDthQUM3WDtZQUNEO2dCQUNFLElBQUksRUFBRSxhQUFhO2dCQUNuQixPQUFPLEVBQ0wscU5BQXFOO2FBQ3hOO1NBRUYsQ0FBQztRQU1GLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLG1CQUFjLEdBQVksS0FBSyxDQUFDO0tBMkJqQztJQXpCQyxNQUFNLENBQUMsS0FBSztRQUNWLElBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxLQUFLLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsMkJBQTJCO1FBRTNCLElBQUssSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7U0FDN0I7YUFDSSxJQUFLLElBQUksQ0FBQyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCO2FBQ0ksSUFBSyxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNILENBQUM7OEdBckRVLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLG1FQ1Y3Qiw0M0JBZ0NFLGd6Q0R4QlcsWUFBWTs7MkZBRVosZ0JBQWdCO2tCQVA1QixTQUFTOytCQUNFLFNBQVMsY0FHUCxJQUFJLFdBQ1AsQ0FBRSxZQUFZLENBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmFyYXYxMScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3ZhcmF2MTEuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3ZhcmF2MTEuY29tcG9uZW50LnNjc3MnXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZhcmF2MTFDb21wb25lbnQge1xyXG4gIGN1cnJlbnRJbmRleDtcclxuXHJcbiAgc2VjdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdMYWVudXNpc2VuZCcsXHJcbiAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgJ0FudGFrc2Ugc2lzZW5kaXQsIGt1aWRhcyBwbGFhbmliIGV0dGV2w7V0ZSBtdXV0YSBvbWEgbGFlbnVrb29ybXVzdCBuaW5nIHPDvHN0ZWVtIMO8dGxlYiwgZXQga3VpZGFzIHNpaXMgbXV1dHViIHR1bGVtdXMuIFTDpGllbmRhdiBsYWVuIHbDtWliIG9sbGEgYWJpa3MgdHVydXbDtWltYWx1c3RlIGthc3V0YW1pc2VsIGphIGthc3ZhbWlzZWwsIG1pcyBhaXRhYiBrYWFzYSBldHRldsO1dHRlIGFyZW5ndWxlLiBTYW1hcywga3VpIHTDpGllbmRhdmF0IGxhZW51IGthc3V0YXRha3NlIHJlZmluYW50c2VlcmltaXNla3MgamEga2FoanVtbGlra3VzZXN0IHRla2tpbmR1IGvDpGliZWthcGl0YWxpIGthbyBrb3J2YW1pc2Vrcywgc2lpcyB2w7VpYiB0w6RpZW5kYXYga29odXN0dXMgaG9vcGlzIG5lZ2F0aWl2c2VsdCBtw7VqdWRhLicsXHJcbiAgICAgIH0sIFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnVmFyYWRlIG11dXR1cycsXHJcbiAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgJ0FudGFrc2Ugc2lzZW5kaXQsIGthcyBldHRldsO1dGUgcGxhYW5pYiBtdXV0YSB2YXJhZGUgaHVsa2EgbmluZyBzw7xzdGVlbSDDvHRsZWIsIGt1aWRhcyBzZWUgbcO1anVhYiBlbHVqw7V1bGlzdXN0LiBLdWkgZXR0ZXbDtXR0ZWwgb24gdsO1aW1hbGlrIGthc3ZhZGEsIHNpaXMgb24gdMOkaWVuZGF2YWQgdmFyYWQgdmFqYWxpa3VkLiAgU2FtYXMsIGt1aSBvbGxha3NlIGvDpGliZWthcGl0YWxpIGRlZml0c2lpZGlzIG5pbmcgdHVyZyBvbiBrZWh2YXBvb2xuZSwgc2lpcyBvc2FkZSB2YXJhZGUgbcO8w7xrIHbDtWliIGFpZGF0YSBldHRldsO1dHRlIG9sdWtvcmRhIHBhcmFuZGFkYSAtIG9sbGFrc2UgdHVydWwgdsOkaWtzZW1hcyBtYWh1cywga3VpZCBzZWUtZWVzdCBraW5kbGFtYWx0LicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnVHVydSBtdXV0dXMnLFxyXG4gICAgICBjb250ZW50OlxyXG4gICAgICAgICdLdWkgZXR0ZXbDtXR0ZWwgb24gdsO1aW1hbGlrIHR1cnVvbHVrb3JkYSBwYXJhbmRhZGEgamEgc2VlbMOkYmkgbXV1ZGUgdGluZ2ltdXN0ZSBzYW1ha3Nqw6TDpGRlcyB0ZWVuaWRhIHTDpGllbmRhdmF0IGthc3VtaXQsIHNpaXMgdsO1aWIgc2VlIHN1dXJlIHTDtWVuw6Rvc3VzZWdhIGFpZGF0YSBvbHVsaXNlbHQga2Fhc2EgZXR0ZXbDtXR0ZSBlbHVqw7V1bGlzdXNlIHBhcmFuZW1pc2VsZS4nLFxyXG4gICAgfVxyXG4gICAgXHJcbiAgXTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gIHNob3dDb21wb25lbnQxOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2hvd0NvbXBvbmVudDI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93Q29tcG9uZW50MzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIGV4cGFuZChpbmRleCkge1xyXG4gICAgaWYodGhpcy5jdXJyZW50SW5kZXggPT09IGluZGV4KSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gbnVsbDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcclxuICAgIC8vYWxlcnQodGhpcy5jdXJyZW50SW5kZXgpO1xyXG4gICAgXHJcbiAgICBpZiAoIHRoaXMuY3VycmVudEluZGV4ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDMgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCB0aGlzLmN1cnJlbnRJbmRleCA9PT0gMSkge1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDIgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQzID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggdGhpcy5jdXJyZW50SW5kZXggPT09IDIpIHtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDMgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iLCI8ZGl2IGNsYXNzPVwicmFhbVltYmVyXCIgPlxyXG5cclxuICA8YnI+XHJcbiAgPGRpdiBjbGFzcz1cInRla3N0aWtlXCI+XHJcbiAgXHJcbiAgS2Fhc2Ftw7V0bGVtaXNlIHbDtWltYWx1c2VkIHNpc2VuZGkgYW5kbWlzZWxcclxuICBcclxuICA8L2Rpdj5cclxuICBcclxuICA8YnI+XHJcbiAgXHJcbiAgPGRpdiBjbGFzcz1cInRla3N0aWtlMmFcIj5cclxuICBcclxuICBBbGxqw6RyZ25ldmFsdCBvbiB0b29kdWQgYWxhamFvdHVzdGUgbMO1aWtlcyBvbHVsaXNlbWFkIHNlbGdpdHVzZWQgdsO1aW1hbHVzdGUgb3NhcywgZXQga2FzdXRhamEgc2Fha3MgYW5kYSBvbWFwb29sc2V0IHNpc2VuZGl0IGphIGt1aWRhcyBzZWRhIHNpc2VuZGl0IGFydmVzc2UgdsO1ZXRha3NlLlxyXG4gIDxicj4gPGJyPlxyXG4gIDwvZGl2PlxyXG4gIFxyXG4gIDxkaXYgKm5nRm9yPVwibGV0IHNlY3Rpb24gb2Ygc2VjdGlvbnM7IGxldCBpID0gaW5kZXg7XCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYWNjb3JkaW9uXCIgKGNsaWNrKSA9IFwiZXhwYW5kKGkpXCI+IDxzcGFuIGNsYXNzPVwidGVrc3Rpa2V2XCI+e3tzZWN0aW9uLm5hbWV9fTwvc3Bhbj48L2J1dHRvbj5cclxuICBcclxuICAgIDwhLS1kaXYgY2xhc3M9XCJyYWFtWW1iZXJcIiAtLT5cclxuICBcclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbFwiXHJcbiAgICAgIFtuZ0NsYXNzXT1cInsgJ3Zpc2libGUnIDogY3VycmVudEluZGV4ID09PSBpIH1cIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJ0ZWtzdGlrZTJcIj57e3NlY3Rpb24uY29udGVudH19PC9zcGFuPlxyXG4gICAgICAgIFxyXG4gIDwvZGl2PlxyXG4gIFxyXG4gIDwvZGl2PlxyXG4gIFxyXG4gIDwvZGl2PlxyXG4gIFxyXG4gICJdfQ==