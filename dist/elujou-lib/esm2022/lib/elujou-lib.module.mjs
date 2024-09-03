import { CommonModule } from '@angular/common';
import { ElujoutestComponent } from './elujoutest/elujoutest.component';
import { NgModule } from '@angular/core';
import { ElujouLib2Component } from './elujou-lib2/elujou-lib2.component';
import * as i0 from "@angular/core";
//import { UustestComponent } from './elujou-uustest/elujou-uustest.component';
export class ElujouLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWx1am91LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lbHVqb3UtbGliL3NyYy9saWIvZWx1am91LWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBQzFFLCtFQUErRTtBQWUvRSxNQUFNLE9BQU8sZUFBZTs4R0FBZixlQUFlOytHQUFmLGVBQWUsWUFWeEIsWUFBWSxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixhQUU5QyxtQkFBbUI7K0dBUWxCLGVBQWUsWUFWeEIsWUFBWTs7MkZBVUgsZUFBZTtrQkFiM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsRUFBRztvQkFDakIsT0FBTyxFQUFFO3dCQUNQLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUI7cUJBQ3ZEO29CQUNELE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUU5QiwrQ0FBK0M7b0JBRS9DLGNBQWM7b0JBQ2Qsc0JBQXNCO29CQUN0QixHQUFHO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRWx1am91dGVzdENvbXBvbmVudCB9IGZyb20gJy4vZWx1am91dGVzdC9lbHVqb3V0ZXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBFbHVqb3VMaWJDb21wb25lbnQgfSBmcm9tICcuL2VsdWpvdS1saWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRWx1am91TGliMkNvbXBvbmVudCB9IGZyb20gJy4vZWx1am91LWxpYjIvZWx1am91LWxpYjIuY29tcG9uZW50JztcclxuLy9pbXBvcnQgeyBVdXN0ZXN0Q29tcG9uZW50IH0gZnJvbSAnLi9lbHVqb3UtdXVzdGVzdC9lbHVqb3UtdXVzdGVzdC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFsgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsIEVsdWpvdXRlc3RDb21wb25lbnQsIEVsdWpvdUxpYjJDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtFbHVqb3V0ZXN0Q29tcG9uZW50XVxyXG5cclxuICAvL3Byb3ZpZGVyczogW1Byb2ZpbGVTZXJ2aWNlLCBDb21waWxlclNlcnZpY2VdLFxyXG5cclxuICAvL2Jvb3RzdHJhcDogW1xyXG4gIC8vICBFbHVqb3VMaWJDb21wb25lbnRcclxuICAvL11cclxufSlcclxuZXhwb3J0IGNsYXNzIEVsdWpvdUxpYk1vZHVsZSB7IH0iXX0=