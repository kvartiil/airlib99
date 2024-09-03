import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./pdf.service";
//import { products } from '../products';
export class Metraport2Component {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Metraport2Component, deps: [{ token: i1.PdfService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Metraport2Component, isStandalone: true, selector: "metraport2-component", ngImport: i0, template: "<!--p>Metraport2</p-->\r\n\r\n<div class=\"pdfobject-container\">\r\n  <p *ngIf=\"isLoading\">Laeme raportit, pisut metoodilist kannatust palun...</p>\r\n  <div width=\"50%\" height=\"8000\" id=\"pdfContainer\"></div>\r\n  </div>\r\n  <br><br>", styles: [".pdfobject-container{height:1180px;border:1px solid #ccc}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Metraport2Component, decorators: [{
            type: Component,
            args: [{ selector: 'metraport2-component', standalone: true, template: "<!--p>Metraport2</p-->\r\n\r\n<div class=\"pdfobject-container\">\r\n  <p *ngIf=\"isLoading\">Laeme raportit, pisut metoodilist kannatust palun...</p>\r\n  <div width=\"50%\" height=\"8000\" id=\"pdfContainer\"></div>\r\n  </div>\r\n  <br><br>", styles: [".pdfobject-container{height:1180px;border:1px solid #ccc}\n"] }]
        }], ctorParameters: () => [{ type: i1.PdfService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0cmFwb3J0Mi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lbHVqb3UtbGliL3NyYy9saWIvbWV0cmFwb3J0Mi9tZXRyYXBvcnQyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi9tZXRyYXBvcnQyL21ldHJhcG9ydDIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBS2xELHlDQUF5QztBQVF6QyxNQUFNLE9BQU8sbUJBQW1CO0lBSTlCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFEMUMsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUMyQixDQUFDO0lBRTlDLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNqQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDWixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3BDO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBSTtRQUNsQixNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztJQUMzRCxDQUFDOzhHQXJCVSxtQkFBbUI7a0dBQW5CLG1CQUFtQixnRkNiaEMscVBBTVU7OzJGRE9HLG1CQUFtQjtrQkFOL0IsU0FBUzsrQkFDRSxzQkFBc0IsY0FHcEIsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBkZlNlcnZpY2UgfSBmcm9tICcuL3BkZi5zZXJ2aWNlJztcclxuLy9pbXBvcnQgKiBhcyBQREZPYmplY3QgZnJvbSAncGRmb2JqZWN0JztcclxuZGVjbGFyZSBjb25zdCBQREZPYmplY3Q6IGFueTtcclxuXHJcbi8vaW1wb3J0IHsgcHJvZHVjdHMgfSBmcm9tICcuLi9wcm9kdWN0cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21ldHJhcG9ydDItY29tcG9uZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWV0cmFwb3J0Mi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWV0cmFwb3J0Mi5jb21wb25lbnQuc2NzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1ldHJhcG9ydDJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG4gIHBkZkRhdGE7XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwZGZTZXJ2aWNlOiBQZGZTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMucGRmU2VydmljZS5nZXRQZGYoKS5zdWJzY3JpYmUoe1xyXG4gICAgICBuZXh0OiAocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wZGZEYXRhID0gcmVzO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMucGRmRGF0YSkge1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVSZW5kZXJQZGYodGhpcy5wZGZEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbmRlclBkZihkYXRhKSB7XHJcbiAgICBjb25zdCBwZGZPYmplY3QgPSBQREZPYmplY3QuZW1iZWQoZGF0YSwgJyNwZGZDb250YWluZXInKTtcclxuICB9XHJcblxyXG59IiwiPCEtLXA+TWV0cmFwb3J0MjwvcC0tPlxyXG5cclxuPGRpdiBjbGFzcz1cInBkZm9iamVjdC1jb250YWluZXJcIj5cclxuICA8cCAqbmdJZj1cImlzTG9hZGluZ1wiPkxhZW1lIHJhcG9ydGl0LCBwaXN1dCBtZXRvb2RpbGlzdCBrYW5uYXR1c3QgcGFsdW4uLi48L3A+XHJcbiAgPGRpdiB3aWR0aD1cIjUwJVwiIGhlaWdodD1cIjgwMDBcIiBpZD1cInBkZkNvbnRhaW5lclwiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxicj48YnI+Il19