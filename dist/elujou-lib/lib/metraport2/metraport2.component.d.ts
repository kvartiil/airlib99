import { OnInit } from '@angular/core';
import { PdfService } from './pdf.service';
import * as i0 from "@angular/core";
export declare class Metraport2Component implements OnInit {
    private pdfService;
    pdfData: any;
    isLoading: boolean;
    constructor(pdfService: PdfService);
    ngOnInit(): void;
    handleRenderPdf(data: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Metraport2Component, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Metraport2Component, "metraport2-component", never, {}, {}, never, never, true, never>;
}
//# sourceMappingURL=metraport2.component.d.ts.map