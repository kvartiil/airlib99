import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class Sekt1agraafComponent implements OnInit {
    suhtarvArray: any;
    oigeSuhtarv: any;
    sektor: number;
    varudeKaibesagedus: any;
    lyhVolgnKaibek: any;
    varKaibesag: any;
    suhtarvuvalik(): void;
    kysiVKK(): any;
    kysiLVKAK(): any;
    kysiVAKK(): any;
    options: any;
    valik: string;
    valdkonnaandmed: any;
    name: FormControl<any>;
    dropdown: FormControl<any>;
    optionxx: string[];
    options2: string[];
    testSubscription: Subscription;
    valdkonnake: string;
    muudaVaartust(): void;
    paneAndmed(): void;
    minVarKaibs: number;
    newdata: any;
    constructor();
    newdata2: number[][];
    newdata3: number[][];
    newdata4: number[][];
    naitajad: string[];
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Sekt1agraafComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Sekt1agraafComponent, "sekt1agraaf", never, {}, {}, never, never, true, never>;
}
//# sourceMappingURL=sekt1agraaf.component.d.ts.map