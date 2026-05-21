import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section id="home" class="min-h-screen grid grid-cols-2 gap-12 items-center px-20 py-28 relative" [style.background]="'var(--bg)'">
      <div class="hero-content">
        <p class="text-xs tracking-widest uppercase mb-7" style="color:var(--accent);opacity:0;animation:fadeUp 0.6s ease forwards 0.5s">
          // Full-Stack Developer · Colombia
        </p>
        <h1 class="font-serif font-light leading-none tracking-tight mb-2" style="font-size:clamp(3rem,6vw,5rem);opacity:0;animation:fadeUp 0.6s ease forwards 0.7s">
          Diana<br><strong style="font-weight:600;color:var(--accent)">Arévalo</strong>
        </h1>
        <p class="text-xs uppercase tracking-wider mb-8" style="color:var(--text-dim);opacity:0;animation:fadeUp 0.6s ease forwards 0.9s">
          Angular · Spring Boot · Arquitecturas Empresariales
        </p>
        <p class="text-sm leading-relaxed max-w-md mb-10" style="color:var(--text-mid);opacity:0;animation:fadeUp 0.6s ease forwards 1.1s">
          Desarrolladora que <em class="text-[var(--text)] italic font-serif text-base">entiende el negocio</em> y lo lleva a una vista exitosa —
          especializada en aplicaciones empresariales a la medida,
          logrando una <em class="text-[var(--text)] italic font-serif text-base">marca en cada web</em> que se realiza.
        </p>
        <div class="flex gap-4" style="opacity:0;animation:fadeUp 0.6s ease forwards 1.3s">
          <a class="btn btn-fill" href="#proyectos">Ver proyectos</a>
          <a class="btn" href="#contacto">Hablemos</a>
        </div>
      </div>

      <div class="hero-visual relative h-[560px] flex items-center justify-center" style="opacity:0;animation:fadeIn 1.2s ease forwards 1.2s">
        <svg class="otter-svg absolute inset-0 w-full h-full" viewBox="0 0 380 560" xmlns="http://www.w3.org/2000/svg" style="animation:otterFloat 7s ease-in-out infinite">
          <path class="op op-thick" d="M190,105 C248,105 290,148 292,200 C294,252 272,295 258,342 C244,389 238,435 200,468 C183,481 161,481 144,468 C106,435 100,389 86,342 C72,295 50,252 52,200 C54,148 132,105 190,105 Z"/>
          <path class="op op-thick" d="M190,28 C236,28 270,64 270,112 C270,160 236,190 190,190 C144,190 110,160 110,112 C110,64 144,28 190,28 Z"/>
          <path class="op op-mid" d="M124,68 C108,44 120,28 138,50"/>
          <path class="op op-mid" d="M256,68 C272,44 260,28 242,50"/>
          <path class="op op-mid" d="M148,104 C148,92 166,92 166,104 C166,116 148,116 148,104 Z"/>
          <path class="op op-mid" d="M214,104 C214,92 232,92 232,104 C232,116 214,116 214,104 Z"/>
          <path class="op op-mid" d="M153,104 C153,99 161,99 161,104 C161,109 153,109 153,104 Z"/>
          <path class="op op-mid" d="M219,104 C219,99 227,99 227,104 C227,109 219,109 219,104 Z"/>
          <path class="op op-fine" d="M155,100 C157,98 160,99 160,101"/>
          <path class="op op-fine" d="M221,100 C223,98 226,99 226,101"/>
          <path class="op op-mid" d="M182,138 C182,130 198,130 198,138 C198,146 182,146 182,138 Z"/>
          <path class="op op-mid" d="M176,146 C182,158 198,158 204,146"/>
          <path class="op op-fine" d="M180,137 L130,125"/>
          <path class="op op-fine" d="M180,140 L128,141"/>
          <path class="op op-fine" d="M180,143 L132,154"/>
          <path class="op op-fine" d="M200,137 L250,125"/>
          <path class="op op-fine" d="M200,140 L252,141"/>
          <path class="op op-fine" d="M200,143 L248,154"/>
          <path class="op op-fine" d="M120,130 C116,150 118,170 128,182"/>
          <path class="op op-fine" d="M260,130 C264,150 262,170 252,182"/>
          <path class="op op-fine" d="M154,182 C168,188 212,188 226,182"/>
          <path class="op op-mid" d="M138,186 C130,202 118,218 108,234"/>
          <path class="op op-mid" d="M242,186 C250,202 262,218 272,234"/>
          <path class="op op-fine" d="M118,248 C152,236 228,236 262,248"/>
          <path class="op op-fine" d="M110,292 C148,279 232,279 270,292"/>
          <path class="op op-fine" d="M107,338 C146,324 234,324 273,338"/>
          <path class="op op-fine" d="M110,384 C148,370 232,370 270,384"/>
          <path class="op op-fine" d="M118,428 C152,415 228,415 262,428"/>
          <path class="op op-mid" d="M98,255 C66,242 42,258 46,282 C50,306 82,300 102,282"/>
          <path class="op op-fine" d="M47,279 C44,265 58,260 60,274"/>
          <path class="op op-fine" d="M60,274 C64,260 76,264 74,278"/>
          <path class="op op-fine" d="M74,278 C80,265 90,272 86,285"/>
          <path class="op op-mid" d="M282,255 C314,242 338,258 334,282 C330,306 298,300 278,282"/>
          <path class="op op-fine" d="M333,279 C336,265 322,260 320,274"/>
          <path class="op op-fine" d="M320,274 C316,260 304,264 306,278"/>
          <path class="op op-fine" d="M306,278 C300,265 290,272 294,285"/>
          <path class="op op-mid" d="M104,432 C72,420 50,436 54,462 C58,486 90,486 108,465"/>
          <path class="op op-fine" d="M55,459 C52,444 66,439 68,454"/>
          <path class="op op-fine" d="M68,454 C72,440 84,445 82,460"/>
          <path class="op op-fine" d="M82,460 C88,446 98,454 94,468"/>
          <path class="op op-mid" d="M276,432 C308,420 330,436 326,462 C322,486 290,486 272,465"/>
          <path class="op op-fine" d="M325,459 C328,444 314,439 312,454"/>
          <path class="op op-fine" d="M312,454 C308,440 296,445 298,460"/>
          <path class="op op-fine" d="M298,460 C292,446 282,454 286,468"/>
          <path class="op op-thick" d="M154,462 C132,482 130,512 152,528 C164,537 190,539 206,537 C222,535 236,527 248,512 C268,490 262,468 240,456"/>
          <path class="op op-fine" d="M162,474 C180,467 200,467 220,474"/>
          <path class="op op-fine" d="M157,492 C177,484 203,484 223,492"/>
          <path class="op op-fine" d="M156,511 C176,503 204,503 224,511"/>
          <path class="op op-fine" d="M160,528 C178,521 202,521 220,528"/>
        </svg>

        <div class="photo-ring absolute z-10 w-[180px] h-[180px] rounded-full border border-[var(--accent)] flex items-center justify-center overflow-hidden" style="background:var(--surface);box-shadow:0 0 60px var(--accent-glow);top:50%;left:50%;transform:translate(-50%,-58%)">
          <span class="text-xs text-center leading-relaxed" style="color:var(--text-dim)">Tu<br/>foto</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: contents; }
    .btn {
      padding: 0.7rem 1.8rem; font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase;
      border: 1px solid var(--accent); background: transparent;
      color: var(--text); text-decoration: none; display: inline-block;
      transition: background 0.2s, color 0.2s; cursor: pointer;
    }
    .btn:hover, .btn-fill { background: var(--accent); color: var(--bg); }
    .btn-fill { background: var(--accent); color: var(--bg); }
    .photo-ring { transition: border-color 0.3s, box-shadow 0.3s; }
  `]
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    const paths = document.querySelectorAll('.op');
    paths.forEach((p, i) => {
      const el = p as SVGPathElement;
      try {
        const len = el.getTotalLength ? el.getTotalLength() : 400;
        el.style.strokeDasharray = String(len);
        el.style.strokeDashoffset = String(len);
        const delay = 900 + i * 55;
        const dur = el.classList.contains('op-thick') ? 900 : 600;
        setTimeout(() => {
          el.style.transition = `stroke-dashoffset ${dur}ms cubic-bezier(.4,0,.2,1)`;
          el.style.strokeDashoffset = '0';
        }, delay);
      } catch(e){}
    });
  }
}
