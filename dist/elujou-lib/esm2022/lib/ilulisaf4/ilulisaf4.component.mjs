import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class Ilulisaf4Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Ilulisaf4Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.3", type: Ilulisaf4Component, isStandalone: true, selector: "ilulisaf4-component", ngImport: i0, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\"> \r\n      <span style=\"font-weight: 700\">Finantsv\u00F5imenduse suhtarvud</span>\r\n    </div>\r\n  </div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    Ettev\u00F5tete eluj\u00F5ulisuse m\u00F5\u00F5tmisel on oluline, kui palju on ettev\u00F5te kaasanud oma tegevusse nn v\u00F5\u00F5rast raha. Selle hindamiseks kasutatakse finantsv\u00F5imenduse anal\u00FC\u00FCsi. Mida rohkem on bilansis laene, seda suurem on finantsv\u00F5imendus ja seda riskantsemaks (ja kulukamaks, sest laenurahal on oma hind) muutub ettev\u00F5tte tegevus. Mida rohkem on laenatud vahendeid ja mida suurem seega finantsv\u00F5imendus, seda v\u00E4iksemaks hinnatakse eluj\u00F5ulisust (olgugi, et just oskuslik v\u00F5\u00F5rvahendite kaasamine v\u00F5ib teinekord anda uue t\u00F5uke eduks). Enamlevinud on kolm finantsv\u00F5imenduse anal\u00FC\u00FCsimise suhtarvu, mida on ka k\u00E4esolevas t\u00F6\u00F6s kasutatud: v\u00F5lakordaja, kohustuste ja omakapitali suhe ning intresside kattekordaja.\r\n\r\n  </div>\r\n</div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">V\u00F5lakordaja</span> (<em>debt ratio</em>) leidmisel vaadatakse seda, kui palju on ettev\u00F5tte bilansis laenukapitali. Selleks v\u00F5rreldakse kogu ettev\u00F5tte v\u00F5lga ettev\u00F5tte varade mahuga. V\u00F5lakordaja arvutatakse allj\u00E4rgneva valemi abil:\r\n    \r\n\r\n  </div>\r\n</div><br>\r\n<div class=\"eq-c\">\r\n  V\u00F5lakordaja =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Kohustused kokku</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">Varad kokku</span>\r\n   </div>\r\n</div>\r\n<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    Kogukohustuste ja varade maht tehakse kindlaks vastavatest bilansikirjetest aasta l\u00F5pu seisuga. Milline on \u00F5ige v\u00F5i sobiv kohustuste osakaal, s\u00F5ltub suuresti tegevusvaldkonnast ning sellest, millist juhtimisstrateegiat rakendatakse (agressiivne kasv, turu hoidmine vms). Hea v\u00F5rdlusv\u00E4\u00E4rtus on 0,5. Kui n\u00E4itaja on sellest v\u00E4iksem, siis tehakse peamiselt \u00E4ri omanike raha eest ja laenuandjaid tuuakse v\u00E4hem sisse (konservatiivne strateegia). Kui n\u00E4itaja on 0,5-st suurem, siis on tegu peamiselt v\u00F5lausaldajate toel aetava \u00E4riga (see annab v\u00F5imaluse suuremaks kasvuks, kuid h\u00F5lmab suuremaid riske). Oluline on tuua v\u00E4lja ka asjaolu, et mida rohkem on v\u00E4list raha juba kaasatud, seda raskem on v\u00F5\u00F5rvahendeid lisaks tuua.\r\n    \r\n  </div>\r\n</div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">Kohustuste ja omakapitali suhe </span> (<em>debt-equity ratio, gearing, leverage</em>) osutab sellele, kui palju ettev\u00F5ttes kasutatakse laenukapitali v\u00F5rreldes omakapitaliga. Praktikas on oluline t\u00E4helepanu p\u00F6\u00F6rata sellele, mida arvestada kohustuste ja mida omakapitali hulka. N\u00E4iteks konverteeritavaid v\u00F5lakirju v\u00F5ib t\u00F5lgendada mitmeti. Samuti vajab lahendamist k\u00FCsimus, mida arvestada kohustuste hulka \u2013 \u00FCldjuhul v\u00F5etakse arvesse eelk\u00F5ige pikaajalisi kohustusi, kuid ka maksmata arved ja tasumata riiklikud maksud on kohustused. Kohustuste ja omakapitali suhe leitakse allj\u00E4rgneva valemi abil:\r\n       \r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"eq-c\">\r\n  Kohustuste ja omakapitali suhe =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Kohustused kokku</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">Omakapital kokku</span>\r\n   </div>\r\n</div>\r\n<br>\r\n\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin\">\r\n  Kohustuste hulk ja omakapital selgitatakse v\u00E4lja ettev\u00F5tte bilansikirjetest aasta l\u00F5pu seisuga. Nagu tegelike kohustuste v\u00E4ljaselgitamisel, tuleb ka omakapitali puhul praktikas arvestada keerukustega. Jaotamata kasum ei pruugi olla ettev\u00F5tte kontol ja k\u00E4ibekapitalina kasutatav, olgugi et raamatupidamisest v\u00F5ib sellise j\u00E4relduse teha.\r\n  \r\n</div>\r\n</div>\r\n<br><br>\r\n\r\n\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">Intresside kattekordaja </span> (<em>interest coverage ratio; times-interest-earned (TIE) ratio</em>) n\u00E4itab, kas ettev\u00F5tte tegevuselt (p\u00F5hitegevusest) teenitud rahavooga on v\u00F5imalik katta ettev\u00F5tte kohustustega (laenudega) kaasnevad intressikulud. Intresside kattekordaja arvutatakse allj\u00E4rgneva valemi abil:\r\n\r\n    \r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"eq-c\">\r\n  Intresside kattekordaja =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Kasum enne intresse ja makse</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">Aruandeperioodi intressikulu</span>\r\n   </div>\r\n</div><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    Suhtarv annab \u00FClevaate sellest, kas ettev\u00F5te suudab katta oma jooksvast tegevusest tulenevalt need kulud, mida toob kaasa v\u00F5\u00F5rvahendite kaasamine, st tasuda laenatud raha hinna. Kui kordaja on v\u00E4iksem kui 1, t\u00E4hendab see, et sisuliselt on ettev\u00F5te uppumisohus. Valemis kasutatakse jagatavana kas EBIT (kasum enne intresse ja makse) v\u00F5i EBITDA (kasum enne intresse, makse ja kulumit) n\u00E4itajat. Suhtarvu v\u00E4\u00E4rtus v\u00F5iks olla suurem kui 2,5, siis on ettev\u00F5te laenukohustuste teenindamine turvaliselt tagatud.\r\n  </div>\r\n</div>\r\n<br><br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.3", ngImport: i0, type: Ilulisaf4Component, decorators: [{
            type: Component,
            args: [{ selector: 'ilulisaf4-component', standalone: true, template: "<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\"> \r\n      <span style=\"font-weight: 700\">Finantsv\u00F5imenduse suhtarvud</span>\r\n    </div>\r\n  </div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    Ettev\u00F5tete eluj\u00F5ulisuse m\u00F5\u00F5tmisel on oluline, kui palju on ettev\u00F5te kaasanud oma tegevusse nn v\u00F5\u00F5rast raha. Selle hindamiseks kasutatakse finantsv\u00F5imenduse anal\u00FC\u00FCsi. Mida rohkem on bilansis laene, seda suurem on finantsv\u00F5imendus ja seda riskantsemaks (ja kulukamaks, sest laenurahal on oma hind) muutub ettev\u00F5tte tegevus. Mida rohkem on laenatud vahendeid ja mida suurem seega finantsv\u00F5imendus, seda v\u00E4iksemaks hinnatakse eluj\u00F5ulisust (olgugi, et just oskuslik v\u00F5\u00F5rvahendite kaasamine v\u00F5ib teinekord anda uue t\u00F5uke eduks). Enamlevinud on kolm finantsv\u00F5imenduse anal\u00FC\u00FCsimise suhtarvu, mida on ka k\u00E4esolevas t\u00F6\u00F6s kasutatud: v\u00F5lakordaja, kohustuste ja omakapitali suhe ning intresside kattekordaja.\r\n\r\n  </div>\r\n</div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">V\u00F5lakordaja</span> (<em>debt ratio</em>) leidmisel vaadatakse seda, kui palju on ettev\u00F5tte bilansis laenukapitali. Selleks v\u00F5rreldakse kogu ettev\u00F5tte v\u00F5lga ettev\u00F5tte varade mahuga. V\u00F5lakordaja arvutatakse allj\u00E4rgneva valemi abil:\r\n    \r\n\r\n  </div>\r\n</div><br>\r\n<div class=\"eq-c\">\r\n  V\u00F5lakordaja =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Kohustused kokku</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">Varad kokku</span>\r\n   </div>\r\n</div>\r\n<br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    Kogukohustuste ja varade maht tehakse kindlaks vastavatest bilansikirjetest aasta l\u00F5pu seisuga. Milline on \u00F5ige v\u00F5i sobiv kohustuste osakaal, s\u00F5ltub suuresti tegevusvaldkonnast ning sellest, millist juhtimisstrateegiat rakendatakse (agressiivne kasv, turu hoidmine vms). Hea v\u00F5rdlusv\u00E4\u00E4rtus on 0,5. Kui n\u00E4itaja on sellest v\u00E4iksem, siis tehakse peamiselt \u00E4ri omanike raha eest ja laenuandjaid tuuakse v\u00E4hem sisse (konservatiivne strateegia). Kui n\u00E4itaja on 0,5-st suurem, siis on tegu peamiselt v\u00F5lausaldajate toel aetava \u00E4riga (see annab v\u00F5imaluse suuremaks kasvuks, kuid h\u00F5lmab suuremaid riske). Oluline on tuua v\u00E4lja ka asjaolu, et mida rohkem on v\u00E4list raha juba kaasatud, seda raskem on v\u00F5\u00F5rvahendeid lisaks tuua.\r\n    \r\n  </div>\r\n</div>\r\n<br><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">Kohustuste ja omakapitali suhe </span> (<em>debt-equity ratio, gearing, leverage</em>) osutab sellele, kui palju ettev\u00F5ttes kasutatakse laenukapitali v\u00F5rreldes omakapitaliga. Praktikas on oluline t\u00E4helepanu p\u00F6\u00F6rata sellele, mida arvestada kohustuste ja mida omakapitali hulka. N\u00E4iteks konverteeritavaid v\u00F5lakirju v\u00F5ib t\u00F5lgendada mitmeti. Samuti vajab lahendamist k\u00FCsimus, mida arvestada kohustuste hulka \u2013 \u00FCldjuhul v\u00F5etakse arvesse eelk\u00F5ige pikaajalisi kohustusi, kuid ka maksmata arved ja tasumata riiklikud maksud on kohustused. Kohustuste ja omakapitali suhe leitakse allj\u00E4rgneva valemi abil:\r\n       \r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"eq-c\">\r\n  Kohustuste ja omakapitali suhe =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Kohustused kokku</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">Omakapital kokku</span>\r\n   </div>\r\n</div>\r\n<br>\r\n\r\n<div class=\"tekstike2 textmargin\"> \r\n<div class=\"rowmargin\">\r\n  Kohustuste hulk ja omakapital selgitatakse v\u00E4lja ettev\u00F5tte bilansikirjetest aasta l\u00F5pu seisuga. Nagu tegelike kohustuste v\u00E4ljaselgitamisel, tuleb ka omakapitali puhul praktikas arvestada keerukustega. Jaotamata kasum ei pruugi olla ettev\u00F5tte kontol ja k\u00E4ibekapitalina kasutatav, olgugi et raamatupidamisest v\u00F5ib sellise j\u00E4relduse teha.\r\n  \r\n</div>\r\n</div>\r\n<br><br>\r\n\r\n\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div> <span style=\"font-weight: 700\">Intresside kattekordaja </span> (<em>interest coverage ratio; times-interest-earned (TIE) ratio</em>) n\u00E4itab, kas ettev\u00F5tte tegevuselt (p\u00F5hitegevusest) teenitud rahavooga on v\u00F5imalik katta ettev\u00F5tte kohustustega (laenudega) kaasnevad intressikulud. Intresside kattekordaja arvutatakse allj\u00E4rgneva valemi abil:\r\n\r\n    \r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"eq-c\">\r\n  Intresside kattekordaja =\r\n   <div class=\"fraction\">\r\n   <span class=\"fup\">Kasum enne intresse ja makse</span>\r\n   <span class=\"bar\">/</span>\r\n   <span class=\"fdn\">Aruandeperioodi intressikulu</span>\r\n   </div>\r\n</div><br>\r\n<div class=\"tekstike2 textmargin\"> \r\n  <div class=\"rowmargin\">\r\n    Suhtarv annab \u00FClevaate sellest, kas ettev\u00F5te suudab katta oma jooksvast tegevusest tulenevalt need kulud, mida toob kaasa v\u00F5\u00F5rvahendite kaasamine, st tasuda laenatud raha hinna. Kui kordaja on v\u00E4iksem kui 1, t\u00E4hendab see, et sisuliselt on ettev\u00F5te uppumisohus. Valemis kasutatakse jagatavana kas EBIT (kasum enne intresse ja makse) v\u00F5i EBITDA (kasum enne intresse, makse ja kulumit) n\u00E4itajat. Suhtarvu v\u00E4\u00E4rtus v\u00F5iks olla suurem kui 2,5, siis on ettev\u00F5te laenukohustuste teenindamine turvaliselt tagatud.\r\n  </div>\r\n</div>\r\n<br><br>", styles: [".tekstike2{position:relative;padding-top:1px;padding-left:40px;font-family:Roboto-Regular,Helvetica;font-weight:400;color:#4f4f4f;font-size:16px;letter-spacing:0;line-height:22px}.textmargin{margin-bottom:0;margin-right:40px}.rowmargin{margin-bottom:-10px}.rowmargin2{margin-bottom:10px}.span{font-weight:700}body{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-style:italic}.eq-c{font-style:italic;margin-left:40px}.fraction{display:inline-block;vertical-align:middle;margin:0 .2em .4ex;text-align:center;font-style:italic}.fraction>span{display:block;padding-top:.15em}.fraction span.fdn{border-top:thin solid black}.fraction span.bar{display:none}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWx1bGlzYWY0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi9pbHVsaXNhZjQvaWx1bGlzYWY0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VsdWpvdS1saWIvc3JjL2xpYi9pbHVsaXNhZjQvaWx1bGlzYWY0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUTFDLE1BQU0sT0FBTyxrQkFBa0I7OEdBQWxCLGtCQUFrQjtrR0FBbEIsa0JBQWtCLCtFQ1IvQiwyakxBaUZROzsyRkR6RUssa0JBQWtCO2tCQU45QixTQUFTOytCQUNFLHFCQUFxQixjQUduQixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lsdWxpc2FmNC1jb21wb25lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbHVsaXNhZjQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2lsdWxpc2FmNC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIElsdWxpc2FmNENvbXBvbmVudCB7XHJcblxyXG4gXHJcbn0iLCI8YnI+XHJcbjxkaXYgY2xhc3M9XCJ0ZWtzdGlrZTIgdGV4dG1hcmdpblwiPiBcclxuICA8ZGl2IGNsYXNzPVwicm93bWFyZ2luXCI+IFxyXG4gICAgICA8c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA3MDBcIj5GaW5hbnRzdsO1aW1lbmR1c2Ugc3VodGFydnVkPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjxicj48YnI+XHJcbjxkaXYgY2xhc3M9XCJ0ZWtzdGlrZTIgdGV4dG1hcmdpblwiPiBcclxuICA8ZGl2IGNsYXNzPVwicm93bWFyZ2luXCI+XHJcbiAgICBFdHRldsO1dGV0ZSBlbHVqw7V1bGlzdXNlIG3DtcO1dG1pc2VsIG9uIG9sdWxpbmUsIGt1aSBwYWxqdSBvbiBldHRldsO1dGUga2Fhc2FudWQgb21hIHRlZ2V2dXNzZSBubiB2w7XDtXJhc3QgcmFoYS4gU2VsbGUgaGluZGFtaXNla3Mga2FzdXRhdGFrc2UgZmluYW50c3bDtWltZW5kdXNlIGFuYWzDvMO8c2kuIE1pZGEgcm9oa2VtIG9uIGJpbGFuc2lzIGxhZW5lLCBzZWRhIHN1dXJlbSBvbiBmaW5hbnRzdsO1aW1lbmR1cyBqYSBzZWRhIHJpc2thbnRzZW1ha3MgKGphIGt1bHVrYW1ha3MsIHNlc3QgbGFlbnVyYWhhbCBvbiBvbWEgaGluZCkgbXV1dHViIGV0dGV2w7V0dGUgdGVnZXZ1cy4gTWlkYSByb2hrZW0gb24gbGFlbmF0dWQgdmFoZW5kZWlkIGphIG1pZGEgc3V1cmVtIHNlZWdhIGZpbmFudHN2w7VpbWVuZHVzLCBzZWRhIHbDpGlrc2VtYWtzIGhpbm5hdGFrc2UgZWx1asO1dWxpc3VzdCAob2xndWdpLCBldCBqdXN0IG9za3VzbGlrIHbDtcO1cnZhaGVuZGl0ZSBrYWFzYW1pbmUgdsO1aWIgdGVpbmVrb3JkIGFuZGEgdXVlIHTDtXVrZSBlZHVrcykuIEVuYW1sZXZpbnVkIG9uIGtvbG0gZmluYW50c3bDtWltZW5kdXNlIGFuYWzDvMO8c2ltaXNlIHN1aHRhcnZ1LCBtaWRhIG9uIGthIGvDpGVzb2xldmFzIHTDtsO2cyBrYXN1dGF0dWQ6IHbDtWxha29yZGFqYSwga29odXN0dXN0ZSBqYSBvbWFrYXBpdGFsaSBzdWhlIG5pbmcgaW50cmVzc2lkZSBrYXR0ZWtvcmRhamEuXHJcblxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPGJyPjxicj5cclxuPGRpdiBjbGFzcz1cInRla3N0aWtlMiB0ZXh0bWFyZ2luXCI+IFxyXG4gIDxkaXY+IDxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDcwMFwiPlbDtWxha29yZGFqYTwvc3Bhbj4gKDxlbT5kZWJ0IHJhdGlvPC9lbT4pIGxlaWRtaXNlbCB2YWFkYXRha3NlIHNlZGEsIGt1aSBwYWxqdSBvbiBldHRldsO1dHRlIGJpbGFuc2lzIGxhZW51a2FwaXRhbGkuIFNlbGxla3MgdsO1cnJlbGRha3NlIGtvZ3UgZXR0ZXbDtXR0ZSB2w7VsZ2EgZXR0ZXbDtXR0ZSB2YXJhZGUgbWFodWdhLiBWw7VsYWtvcmRhamEgYXJ2dXRhdGFrc2UgYWxsasOkcmduZXZhIHZhbGVtaSBhYmlsOlxyXG4gICAgXHJcblxyXG4gIDwvZGl2PlxyXG48L2Rpdj48YnI+XHJcbjxkaXYgY2xhc3M9XCJlcS1jXCI+XHJcbiAgVsO1bGFrb3JkYWphID1cclxuICAgPGRpdiBjbGFzcz1cImZyYWN0aW9uXCI+XHJcbiAgIDxzcGFuIGNsYXNzPVwiZnVwXCI+S29odXN0dXNlZCBrb2trdTwvc3Bhbj5cclxuICAgPHNwYW4gY2xhc3M9XCJiYXJcIj4vPC9zcGFuPlxyXG4gICA8c3BhbiBjbGFzcz1cImZkblwiPlZhcmFkIGtva2t1PC9zcGFuPlxyXG4gICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxicj5cclxuPGRpdiBjbGFzcz1cInRla3N0aWtlMiB0ZXh0bWFyZ2luXCI+IFxyXG4gIDxkaXYgY2xhc3M9XCJyb3dtYXJnaW5cIj5cclxuICAgIEtvZ3Vrb2h1c3R1c3RlIGphIHZhcmFkZSBtYWh0IHRlaGFrc2Uga2luZGxha3MgdmFzdGF2YXRlc3QgYmlsYW5zaWtpcmpldGVzdCBhYXN0YSBsw7VwdSBzZWlzdWdhLiBNaWxsaW5lIG9uIMO1aWdlIHbDtWkgc29iaXYga29odXN0dXN0ZSBvc2FrYWFsLCBzw7VsdHViIHN1dXJlc3RpIHRlZ2V2dXN2YWxka29ubmFzdCBuaW5nIHNlbGxlc3QsIG1pbGxpc3QganVodGltaXNzdHJhdGVlZ2lhdCByYWtlbmRhdGFrc2UgKGFncmVzc2lpdm5lIGthc3YsIHR1cnUgaG9pZG1pbmUgdm1zKS4gSGVhIHbDtXJkbHVzdsOkw6RydHVzIG9uIDAsNS4gS3VpIG7DpGl0YWphIG9uIHNlbGxlc3QgdsOkaWtzZW0sIHNpaXMgdGVoYWtzZSBwZWFtaXNlbHQgw6RyaSBvbWFuaWtlIHJhaGEgZWVzdCBqYSBsYWVudWFuZGphaWQgdHV1YWtzZSB2w6RoZW0gc2lzc2UgKGtvbnNlcnZhdGlpdm5lIHN0cmF0ZWVnaWEpLiBLdWkgbsOkaXRhamEgb24gMCw1LXN0IHN1dXJlbSwgc2lpcyBvbiB0ZWd1IHBlYW1pc2VsdCB2w7VsYXVzYWxkYWphdGUgdG9lbCBhZXRhdmEgw6RyaWdhIChzZWUgYW5uYWIgdsO1aW1hbHVzZSBzdXVyZW1ha3Mga2FzdnVrcywga3VpZCBow7VsbWFiIHN1dXJlbWFpZCByaXNrZSkuIE9sdWxpbmUgb24gdHV1YSB2w6RsamEga2EgYXNqYW9sdSwgZXQgbWlkYSByb2hrZW0gb24gdsOkbGlzdCByYWhhIGp1YmEga2Fhc2F0dWQsIHNlZGEgcmFza2VtIG9uIHbDtcO1cnZhaGVuZGVpZCBsaXNha3MgdHV1YS5cclxuICAgIFxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPGJyPjxicj5cclxuPGRpdiBjbGFzcz1cInRla3N0aWtlMiB0ZXh0bWFyZ2luXCI+IFxyXG4gIDxkaXY+IDxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDcwMFwiPktvaHVzdHVzdGUgamEgb21ha2FwaXRhbGkgc3VoZSA8L3NwYW4+ICg8ZW0+ZGVidC1lcXVpdHkgcmF0aW8sIGdlYXJpbmcsIGxldmVyYWdlPC9lbT4pIG9zdXRhYiBzZWxsZWxlLCBrdWkgcGFsanUgZXR0ZXbDtXR0ZXMga2FzdXRhdGFrc2UgbGFlbnVrYXBpdGFsaSB2w7VycmVsZGVzIG9tYWthcGl0YWxpZ2EuIFByYWt0aWthcyBvbiBvbHVsaW5lIHTDpGhlbGVwYW51IHDDtsO2cmF0YSBzZWxsZWxlLCBtaWRhIGFydmVzdGFkYSBrb2h1c3R1c3RlIGphIG1pZGEgb21ha2FwaXRhbGkgaHVsa2EuIE7DpGl0ZWtzIGtvbnZlcnRlZXJpdGF2YWlkIHbDtWxha2lyanUgdsO1aWIgdMO1bGdlbmRhZGEgbWl0bWV0aS4gU2FtdXRpIHZhamFiIGxhaGVuZGFtaXN0IGvDvHNpbXVzLCBtaWRhIGFydmVzdGFkYSBrb2h1c3R1c3RlIGh1bGthIOKAkyDDvGxkanVodWwgdsO1ZXRha3NlIGFydmVzc2UgZWVsa8O1aWdlIHBpa2FhamFsaXNpIGtvaHVzdHVzaSwga3VpZCBrYSBtYWtzbWF0YSBhcnZlZCBqYSB0YXN1bWF0YSByaWlrbGlrdWQgbWFrc3VkIG9uIGtvaHVzdHVzZWQuIEtvaHVzdHVzdGUgamEgb21ha2FwaXRhbGkgc3VoZSBsZWl0YWtzZSBhbGxqw6RyZ25ldmEgdmFsZW1pIGFiaWw6XHJcbiAgICAgICBcclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxicj5cclxuPGRpdiBjbGFzcz1cImVxLWNcIj5cclxuICBLb2h1c3R1c3RlIGphIG9tYWthcGl0YWxpIHN1aGUgPVxyXG4gICA8ZGl2IGNsYXNzPVwiZnJhY3Rpb25cIj5cclxuICAgPHNwYW4gY2xhc3M9XCJmdXBcIj5Lb2h1c3R1c2VkIGtva2t1PC9zcGFuPlxyXG4gICA8c3BhbiBjbGFzcz1cImJhclwiPi88L3NwYW4+XHJcbiAgIDxzcGFuIGNsYXNzPVwiZmRuXCI+T21ha2FwaXRhbCBrb2trdTwvc3Bhbj5cclxuICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48YnI+XHJcblxyXG48ZGl2IGNsYXNzPVwidGVrc3Rpa2UyIHRleHRtYXJnaW5cIj4gXHJcbjxkaXYgY2xhc3M9XCJyb3dtYXJnaW5cIj5cclxuICBLb2h1c3R1c3RlIGh1bGsgamEgb21ha2FwaXRhbCBzZWxnaXRhdGFrc2UgdsOkbGphIGV0dGV2w7V0dGUgYmlsYW5zaWtpcmpldGVzdCBhYXN0YSBsw7VwdSBzZWlzdWdhLiBOYWd1IHRlZ2VsaWtlIGtvaHVzdHVzdGUgdsOkbGphc2VsZ2l0YW1pc2VsLCB0dWxlYiBrYSBvbWFrYXBpdGFsaSBwdWh1bCBwcmFrdGlrYXMgYXJ2ZXN0YWRhIGtlZXJ1a3VzdGVnYS4gSmFvdGFtYXRhIGthc3VtIGVpIHBydXVnaSBvbGxhIGV0dGV2w7V0dGUga29udG9sIGphIGvDpGliZWthcGl0YWxpbmEga2FzdXRhdGF2LCBvbGd1Z2kgZXQgcmFhbWF0dXBpZGFtaXNlc3QgdsO1aWIgc2VsbGlzZSBqw6RyZWxkdXNlIHRlaGEuXHJcbiAgXHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuPGJyPjxicj5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwidGVrc3Rpa2UyIHRleHRtYXJnaW5cIj4gXHJcbiAgPGRpdj4gPHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogNzAwXCI+SW50cmVzc2lkZSBrYXR0ZWtvcmRhamEgPC9zcGFuPiAoPGVtPmludGVyZXN0IGNvdmVyYWdlIHJhdGlvOyB0aW1lcy1pbnRlcmVzdC1lYXJuZWQgKFRJRSkgcmF0aW88L2VtPikgbsOkaXRhYiwga2FzIGV0dGV2w7V0dGUgdGVnZXZ1c2VsdCAocMO1aGl0ZWdldnVzZXN0KSB0ZWVuaXR1ZCByYWhhdm9vZ2Egb24gdsO1aW1hbGlrIGthdHRhIGV0dGV2w7V0dGUga29odXN0dXN0ZWdhIChsYWVudWRlZ2EpIGthYXNuZXZhZCBpbnRyZXNzaWt1bHVkLiBJbnRyZXNzaWRlIGthdHRla29yZGFqYSBhcnZ1dGF0YWtzZSBhbGxqw6RyZ25ldmEgdmFsZW1pIGFiaWw6XHJcblxyXG4gICAgXHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48YnI+XHJcbjxkaXYgY2xhc3M9XCJlcS1jXCI+XHJcbiAgSW50cmVzc2lkZSBrYXR0ZWtvcmRhamEgPVxyXG4gICA8ZGl2IGNsYXNzPVwiZnJhY3Rpb25cIj5cclxuICAgPHNwYW4gY2xhc3M9XCJmdXBcIj5LYXN1bSBlbm5lIGludHJlc3NlIGphIG1ha3NlPC9zcGFuPlxyXG4gICA8c3BhbiBjbGFzcz1cImJhclwiPi88L3NwYW4+XHJcbiAgIDxzcGFuIGNsYXNzPVwiZmRuXCI+QXJ1YW5kZXBlcmlvb2RpIGludHJlc3Npa3VsdTwvc3Bhbj5cclxuICAgPC9kaXY+XHJcbjwvZGl2Pjxicj5cclxuPGRpdiBjbGFzcz1cInRla3N0aWtlMiB0ZXh0bWFyZ2luXCI+IFxyXG4gIDxkaXYgY2xhc3M9XCJyb3dtYXJnaW5cIj5cclxuICAgIFN1aHRhcnYgYW5uYWIgw7xsZXZhYXRlIHNlbGxlc3QsIGthcyBldHRldsO1dGUgc3V1ZGFiIGthdHRhIG9tYSBqb29rc3Zhc3QgdGVnZXZ1c2VzdCB0dWxlbmV2YWx0IG5lZWQga3VsdWQsIG1pZGEgdG9vYiBrYWFzYSB2w7XDtXJ2YWhlbmRpdGUga2Fhc2FtaW5lLCBzdCB0YXN1ZGEgbGFlbmF0dWQgcmFoYSBoaW5uYS4gS3VpIGtvcmRhamEgb24gdsOkaWtzZW0ga3VpIDEsIHTDpGhlbmRhYiBzZWUsIGV0IHNpc3VsaXNlbHQgb24gZXR0ZXbDtXRlIHVwcHVtaXNvaHVzLiBWYWxlbWlzIGthc3V0YXRha3NlIGphZ2F0YXZhbmEga2FzIEVCSVQgKGthc3VtIGVubmUgaW50cmVzc2UgamEgbWFrc2UpIHbDtWkgRUJJVERBIChrYXN1bSBlbm5lIGludHJlc3NlLCBtYWtzZSBqYSBrdWx1bWl0KSBuw6RpdGFqYXQuIFN1aHRhcnZ1IHbDpMOkcnR1cyB2w7Vpa3Mgb2xsYSBzdXVyZW0ga3VpIDIsNSwgc2lpcyBvbiBldHRldsO1dGUgbGFlbnVrb2h1c3R1c3RlIHRlZW5pbmRhbWluZSB0dXJ2YWxpc2VsdCB0YWdhdHVkLlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPGJyPjxicj4iXX0=