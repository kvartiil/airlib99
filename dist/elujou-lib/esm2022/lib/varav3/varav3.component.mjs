import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Terminal1Component } from '../terminal1/terminal1.component';
import { Terminal2Component } from '../terminal2/terminal2.component';
import { Terminal3Component } from '../terminal3/terminal3.component';
import { Terminal4Component } from '../terminal4/terminal4.component';
import { Terminal5Component } from '../terminal5/terminal5.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class Varav3Component {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Varav3Component, isStandalone: true, selector: "varav3", ngImport: i0, template: "\r\n<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\nV\u00F5rdlusprognoos teiste ettev\u00F5tete suhtes\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2\">\r\n\r\nSiin selgitame, milliste kriteeriumide alusel sai ettev\u00F5tte hetkeolukord \u00FClaltoodud hinnangu. \u00DChtlasi on ettev\u00F5ttel v\u00F5imalik v\u00F5rrelda ennast teistega k\u00F5igi mudelite alusel, mida hinnangu andmiseks rakendati. T\u00E4psemalt loe alamlehek\u00FCljelt \u201EKuidas tulemusi m\u00F5ista?\u201C\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <terminal1-component *ngIf=\"showComponent1\"></terminal1-component>\r\n    <terminal2-component *ngIf=\"showComponent2\"></terminal2-component>\r\n    <terminal3-component *ngIf=\"showComponent3\"></terminal3-component>\r\n    <terminal4-component *ngIf=\"showComponent4\"></terminal4-component>\r\n    <terminal5-component *ngIf=\"showComponent5\"></terminal5-component>\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px;height:400px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: Terminal1Component, selector: "terminal1-component" }, { kind: "component", type: Terminal2Component, selector: "terminal2-component" }, { kind: "component", type: Terminal3Component, selector: "terminal3-component" }, { kind: "component", type: Terminal4Component, selector: "terminal4-component" }, { kind: "component", type: Terminal5Component, selector: "terminal5-component" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Varav3Component, decorators: [{
            type: Component,
            args: [{ selector: 'varav3', standalone: true, imports: [CommonModule, Terminal1Component, Terminal2Component, Terminal3Component, Terminal4Component, Terminal5Component], template: "\r\n<div class=\"raamYmber\" >\r\n\r\n<br>\r\n<div class=\"tekstike\">\r\n\r\nV\u00F5rdlusprognoos teiste ettev\u00F5tete suhtes\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"tekstike2\">\r\n\r\nSiin selgitame, milliste kriteeriumide alusel sai ettev\u00F5tte hetkeolukord \u00FClaltoodud hinnangu. \u00DChtlasi on ettev\u00F5ttel v\u00F5imalik v\u00F5rrelda ennast teistega k\u00F5igi mudelite alusel, mida hinnangu andmiseks rakendati. T\u00E4psemalt loe alamlehek\u00FCljelt \u201EKuidas tulemusi m\u00F5ista?\u201C\r\n<br> <br>\r\n</div>\r\n\r\n<div *ngFor=\"let section of sections; let i = index;\">\r\n  <button class=\"accordion\" (click) = \"expand(i)\"> <span class=\"tekstikev\">{{section.name}}</span></button>\r\n\r\n  <!--div class=\"raamYmber\" -->\r\n\r\n  <div class=\"panel\"\r\n    [ngClass]=\"{ 'visible' : currentIndex === i }\">\r\n    <!--p>{{section.content}}</p-->\r\n    <terminal1-component *ngIf=\"showComponent1\"></terminal1-component>\r\n    <terminal2-component *ngIf=\"showComponent2\"></terminal2-component>\r\n    <terminal3-component *ngIf=\"showComponent3\"></terminal3-component>\r\n    <terminal4-component *ngIf=\"showComponent4\"></terminal4-component>\r\n    <terminal5-component *ngIf=\"showComponent5\"></terminal5-component>\r\n    \r\n    <!--progn2-component *ngIf=\"{{section.content}}=='progn2'\"></progn2-component *ngIf=\"{{section.content}}=='progn2'\"-->\r\n    <!--progn1-component></progn1-component-->\r\n    <!--progn2-component></progn2-component-->\r\n  <!--/div-->\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n", styles: ["p{font-family:Lato}.accordion{background-color:#f2f3f3;color:#4f4f4f;cursor:pointer;padding:0;width:100%;height:60px;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.active,.accordion:hover{background-color:#dbdfe2}.panel{padding:10px;height:400px;display:none;background-color:#fff;overflow:hidden;border-color:#5d6071;border:solid 1px;border-radius:4px}.visible{display:block}.tekstike{position:relative;width:1034px;padding-top:10px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:32px;letter-spacing:0;line-height:24px}.tekstikev{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:25px;letter-spacing:0;line-height:24px}.tekstike2{position:relative;width:1034px;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:24px}.raamYmber{width:100%;margin-top:3px;border-color:#5d6071;border:solid 2px;background-color:#fff;border-radius:4px}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyYXYzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi92YXJhdjMvdmFyYXYzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi92YXJhdjMvdmFyYXYzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7QUFVdEUsTUFBTSxPQUFPLGVBQWU7SUFQNUI7UUFVRSxhQUFRLEdBQUc7WUFDVDtnQkFDRSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsT0FBTyxFQUFFLFdBQVc7YUFDckI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsT0FBTyxFQUFFLHVDQUF1QzthQUNqRDtZQUNEO2dCQUNFLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLE9BQU8sRUFBRSxFQUFFO2FBQ1o7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUUsRUFBRTthQUNaO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsT0FBTyxFQUFFLEVBQUU7YUFDWjtTQUVGLENBQUM7UUFDRixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztLQStDakM7SUE3Q0MsTUFBTSxDQUFDLEtBQUs7UUFDVixJQUFHLElBQUksQ0FBQyxZQUFZLEtBQUssS0FBSyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLDJCQUEyQjtRQUUzQixJQUFLLElBQUksQ0FBQyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCO2FBQ0ksSUFBSyxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztTQUM3QjthQUNJLElBQUssSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7U0FDN0I7YUFDSSxJQUFLLElBQUksQ0FBQyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCO2FBQ0ksSUFBSyxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNILENBQUM7OEdBM0VVLGVBQWU7a0dBQWYsZUFBZSxrRUNoQjVCLG9pREEwQ0EsK25DRDVCWSxZQUFZLDhWQUFFLGtCQUFrQixnRUFBRSxrQkFBa0IsZ0VBQUUsa0JBQWtCLGdFQUFFLGtCQUFrQixnRUFBRSxrQkFBa0I7OzJGQUUvRyxlQUFlO2tCQVAzQixTQUFTOytCQUNFLFFBQVEsY0FHTixJQUFJLFdBQ1AsQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVGVybWluYWwxQ29tcG9uZW50IH0gZnJvbSAnLi4vdGVybWluYWwxL3Rlcm1pbmFsMS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZXJtaW5hbDJDb21wb25lbnQgfSBmcm9tICcuLi90ZXJtaW5hbDIvdGVybWluYWwyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlcm1pbmFsM0NvbXBvbmVudCB9IGZyb20gJy4uL3Rlcm1pbmFsMy90ZXJtaW5hbDMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGVybWluYWw0Q29tcG9uZW50IH0gZnJvbSAnLi4vdGVybWluYWw0L3Rlcm1pbmFsNC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZXJtaW5hbDVDb21wb25lbnQgfSBmcm9tICcuLi90ZXJtaW5hbDUvdGVybWluYWw1LmNvbXBvbmVudCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2YXJhdjMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi92YXJhdjMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3ZhcmF2My5jb21wb25lbnQuc2NzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVGVybWluYWwxQ29tcG9uZW50LCBUZXJtaW5hbDJDb21wb25lbnQsIFRlcm1pbmFsM0NvbXBvbmVudCwgVGVybWluYWw0Q29tcG9uZW50LCBUZXJtaW5hbDVDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWYXJhdjNDb21wb25lbnQge1xyXG4gIGN1cnJlbnRJbmRleDtcclxuXHJcbiAgc2VjdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdFZmVrdGlpdnN1cycsXHJcbiAgICAgIGNvbnRlbnQ6ICdDb250ZW50IDEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnTWFrc2V2w7VpbWUnLFxyXG4gICAgICBjb250ZW50OiAnPHByb2duMS1jb21wb25lbnQ+PC9wcm9nbjEtY29tcG9uZW50PidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdGaW5hbnRzdsO1aW1lbmR1cycsXHJcbiAgICAgIGNvbnRlbnQ6ICcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnVGFzdXZ1cycsXHJcbiAgICAgIGNvbnRlbnQ6ICcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnVMO2w7Zqw7V1IHRvb3RsaWtrdXMnLFxyXG4gICAgICBjb250ZW50OiAnJ1xyXG4gICAgfVxyXG5cclxuICBdO1xyXG4gIHNob3dDb21wb25lbnQxOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2hvd0NvbXBvbmVudDI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93Q29tcG9uZW50MzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHNob3dDb21wb25lbnQ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2hvd0NvbXBvbmVudDU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBcclxuICBleHBhbmQoaW5kZXgpIHtcclxuICAgIGlmKHRoaXMuY3VycmVudEluZGV4ID09PSBpbmRleCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IG51bGw7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XHJcbiAgICAvL2FsZXJ0KHRoaXMuY3VycmVudEluZGV4KTtcclxuICAgIFxyXG4gICAgaWYgKCB0aGlzLmN1cnJlbnRJbmRleCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIHRoaXMuY3VycmVudEluZGV4ID09PSAxKSB7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MiA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ1ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggdGhpcy5jdXJyZW50SW5kZXggPT09IDIpIHtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDMgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCB0aGlzLmN1cnJlbnRJbmRleCA9PT0gMykge1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQxID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDIgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQ0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIHRoaXMuY3VycmVudEluZGV4ID09PSA0KSB7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDEgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50MiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dDb21wb25lbnQzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd0NvbXBvbmVudDQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93Q29tcG9uZW50NSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSIsIlxyXG48ZGl2IGNsYXNzPVwicmFhbVltYmVyXCIgPlxyXG5cclxuPGJyPlxyXG48ZGl2IGNsYXNzPVwidGVrc3Rpa2VcIj5cclxuXHJcblbDtXJkbHVzcHJvZ25vb3MgdGVpc3RlIGV0dGV2w7V0ZXRlIHN1aHRlc1xyXG5cclxuPC9kaXY+XHJcblxyXG48YnI+XHJcblxyXG48ZGl2IGNsYXNzPVwidGVrc3Rpa2UyXCI+XHJcblxyXG5TaWluIHNlbGdpdGFtZSwgbWlsbGlzdGUga3JpdGVlcml1bWlkZSBhbHVzZWwgc2FpIGV0dGV2w7V0dGUgaGV0a2VvbHVrb3JkIMO8bGFsdG9vZHVkIGhpbm5hbmd1LiDDnGh0bGFzaSBvbiBldHRldsO1dHRlbCB2w7VpbWFsaWsgdsO1cnJlbGRhIGVubmFzdCB0ZWlzdGVnYSBrw7VpZ2kgbXVkZWxpdGUgYWx1c2VsLCBtaWRhIGhpbm5hbmd1IGFuZG1pc2VrcyByYWtlbmRhdGkuIFTDpHBzZW1hbHQgbG9lIGFsYW1sZWhla8O8bGplbHQg4oCeS3VpZGFzIHR1bGVtdXNpIG3DtWlzdGE/4oCcXHJcbjxicj4gPGJyPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgKm5nRm9yPVwibGV0IHNlY3Rpb24gb2Ygc2VjdGlvbnM7IGxldCBpID0gaW5kZXg7XCI+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cImFjY29yZGlvblwiIChjbGljaykgPSBcImV4cGFuZChpKVwiPiA8c3BhbiBjbGFzcz1cInRla3N0aWtldlwiPnt7c2VjdGlvbi5uYW1lfX08L3NwYW4+PC9idXR0b24+XHJcblxyXG4gIDwhLS1kaXYgY2xhc3M9XCJyYWFtWW1iZXJcIiAtLT5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInBhbmVsXCJcclxuICAgIFtuZ0NsYXNzXT1cInsgJ3Zpc2libGUnIDogY3VycmVudEluZGV4ID09PSBpIH1cIj5cclxuICAgIDwhLS1wPnt7c2VjdGlvbi5jb250ZW50fX08L3AtLT5cclxuICAgIDx0ZXJtaW5hbDEtY29tcG9uZW50ICpuZ0lmPVwic2hvd0NvbXBvbmVudDFcIj48L3Rlcm1pbmFsMS1jb21wb25lbnQ+XHJcbiAgICA8dGVybWluYWwyLWNvbXBvbmVudCAqbmdJZj1cInNob3dDb21wb25lbnQyXCI+PC90ZXJtaW5hbDItY29tcG9uZW50PlxyXG4gICAgPHRlcm1pbmFsMy1jb21wb25lbnQgKm5nSWY9XCJzaG93Q29tcG9uZW50M1wiPjwvdGVybWluYWwzLWNvbXBvbmVudD5cclxuICAgIDx0ZXJtaW5hbDQtY29tcG9uZW50ICpuZ0lmPVwic2hvd0NvbXBvbmVudDRcIj48L3Rlcm1pbmFsNC1jb21wb25lbnQ+XHJcbiAgICA8dGVybWluYWw1LWNvbXBvbmVudCAqbmdJZj1cInNob3dDb21wb25lbnQ1XCI+PC90ZXJtaW5hbDUtY29tcG9uZW50PlxyXG4gICAgXHJcbiAgICA8IS0tcHJvZ24yLWNvbXBvbmVudCAqbmdJZj1cInt7c2VjdGlvbi5jb250ZW50fX09PSdwcm9nbjInXCI+PC9wcm9nbjItY29tcG9uZW50ICpuZ0lmPVwie3tzZWN0aW9uLmNvbnRlbnR9fT09J3Byb2duMidcIi0tPlxyXG4gICAgPCEtLXByb2duMS1jb21wb25lbnQ+PC9wcm9nbjEtY29tcG9uZW50LS0+XHJcbiAgICA8IS0tcHJvZ24yLWNvbXBvbmVudD48L3Byb2duMi1jb21wb25lbnQtLT5cclxuICA8IS0tL2Rpdi0tPlxyXG5cclxuPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG4iXX0=