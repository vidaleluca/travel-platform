// Shared components: nav, footer, tweaks panel
(function(){
  const NAV_HTML = (activePage, onHero) => `
  <nav class="st-nav ${onHero?'on-hero':''}">
    <div class="wrap">
      <a href="index.html" class="logo"><span class="logo-mark"></span> SOCIALTRAVELS</a>
      <div class="city-switch" id="citySwitch">
        <button class="city-btn" id="cityBtn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span id="cityLabel">Rome</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="city-drop" id="cityDrop">
          <a href="SocialTravels.html" data-city="rome"><span>Rome</span><small>Italy · live</small></a>
          <a href="#" data-city="milan" class="soon"><span>Milan</span><small>Coming soon</small></a>
          <a href="#" data-city="florence" class="soon"><span>Florence</span><small>Coming soon</small></a>
          <a href="#" data-city="venice" class="soon"><span>Venice</span><small>Coming soon</small></a>
          <a href="#" data-city="naples" class="soon"><span>Naples</span><small>Coming soon</small></a>
          <div class="city-sep"></div>
          <a href="index.html" class="all">All cities →</a>
        </div>
      </div>
      <div class="nav-links">
        <a href="SocialTravels.html" data-i18n="nav.destinations" class="${activePage==='home'?'active':''}">Experiences</a>
        <a href="Category.html" data-i18n="nav.categories" class="${activePage==='cat'?'active':''}">Categories</a>
        <a href="#" data-i18n="nav.journal">Journal</a>
      </div>
      <div class="nav-right">
        <div class="lang-switch">
          <button data-lang="en">EN</button>
          <button data-lang="it">IT</button>
        </div>
        <a href="Account.html" class="nav-iconbtn" title="Account">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>
        </a>
        <a href="#" class="nav-iconbtn" title="Cart">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6h15l-2 10H8L6 3H3"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>
        </a>
        <a href="Experience.html" class="nav-cta" data-i18n="exp.reserve">Book now</a>
      </div>
    </div>
  </nav>`;

  const FOOTER_HTML = `
  <footer>
    <div class="wrap">
      <div class="foot-grid">
        <div class="foot-about">
          <div class="logo" style="color:#fff"><span class="logo-mark"></span> SOCIALTRAVELS</div>
          <p data-i18n="foot.about">SocialTravels has run tours in Rome since 2011.</p>
          <div class="foot-social">
            <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
            <a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="m10 9 5 3-5 3V9z" fill="currentColor"/></svg></a>
            <a href="#" aria-label="TikTok"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 3v12a4 4 0 1 1-4-4"/><path d="M15 3c0 3 2 5 5 5"/></svg></a>
          </div>
        </div>
        <div>
          <h5 data-i18n="foot.explore">Explore</h5>
          <a href="Category.html">Walking tours</a>
          <a href="Category.html">Golf cart tours</a>
          <a href="Category.html">Cooking class</a>
          <a href="Category.html">Day trips</a>
          <a href="Category.html">Monuments</a>
        </div>
        <div>
          <h5 data-i18n="foot.company">Company</h5>
          <a href="#">About</a>
          <a href="#">Our guides</a>
          <a href="#">Press</a>
          <a href="#">Careers</a>
        </div>
        <div>
          <h5 data-i18n="foot.help">Help</h5>
          <a href="#">Contact</a>
          <a href="#">FAQ</a>
          <a href="#">Cancellation</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
        <div>
          <h5 data-i18n="foot.newsletter">Newsletter</h5>
          <p style="font-size:14px;margin:0 0 14px" data-i18n="foot.newsletter.d">A dispatch every other week.</p>
          <form style="display:flex;gap:6px" onsubmit="event.preventDefault();this.querySelector('button').textContent='✓'">
            <input type="email" placeholder="you@email.com" style="flex:1;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:10px 14px;color:#fff;font-family:inherit;font-size:13px;outline:none"/>
            <button style="background:var(--coral);color:#fff;border-radius:999px;padding:10px 16px;font-weight:700;font-size:12px;letter-spacing:.1em">JOIN</button>
          </form>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 SocialTravels Srl · Via del Corso 112, Roma · P.IVA 06341850588</span>
        <div class="badges"><span>GDPR</span><span>PCI-DSS</span><span>WCAG AA</span></div>
      </div>
    </div>
  </footer>`;

  const TWEAKS_HTML = `
  <div class="tweaks" id="tweaks">
    <h6>Tweaks</h6>
    <div class="tweak-row">
      <label>Primary</label>
      <input type="color" id="tw-teal" value="#0a4a5c"/>
    </div>
    <div class="tweak-row">
      <label>Accent</label>
      <input type="color" id="tw-coral" value="#e8634a"/>
    </div>
  </div>`;

  window.STComponents = {
    mountNav(activePage, onHero){
      const el = document.createElement('div');
      el.innerHTML = NAV_HTML(activePage, onHero);
      document.body.insertBefore(el.firstElementChild, document.body.firstChild);
      window.STI18N && window.STI18N.applyLang();
      // city switcher
      const savedCity = localStorage.getItem('st_city') || 'rome';
      const cityNames = {rome:'Rome',milan:'Milan',florence:'Florence',venice:'Venice',naples:'Naples'};
      const lbl = document.getElementById('cityLabel');
      if(lbl) lbl.textContent = cityNames[savedCity] || 'Rome';
      const btn = document.getElementById('cityBtn');
      const drop = document.getElementById('cityDrop');
      if(btn && drop){
        btn.addEventListener('click',e=>{e.stopPropagation();drop.classList.toggle('on')});
        document.addEventListener('click',()=>drop.classList.remove('on'));
        drop.querySelectorAll('a[data-city]').forEach(a=>{
          a.addEventListener('click',e=>{
            const city = a.dataset.city;
            localStorage.setItem('st_city',city);
            if(a.classList.contains('soon')){
              e.preventDefault();
              a.innerHTML = '<span>'+cityNames[city]+'</span><small>Launching Q3 2026 — notify me ✓</small>';
            }
          });
        });
      }
    },
    mountFooter(){
      const el = document.createElement('div');
      el.innerHTML = FOOTER_HTML;
      document.body.appendChild(el.firstElementChild);
      window.STI18N && window.STI18N.applyLang();
    },
    mountTweaks(opts){
      const el = document.createElement('div');
      el.innerHTML = TWEAKS_HTML;
      document.body.appendChild(el.firstElementChild);

      // persisted state
      const DEF = window.ST_TWEAKS || {teal:'#0a4a5c',coral:'#e8634a'};
      function apply(t){
        document.documentElement.style.setProperty('--teal-800',t.teal);
        document.documentElement.style.setProperty('--coral',t.coral);
      }
      apply(DEF);
      const panel = document.getElementById('tweaks');
      window.addEventListener('message',(e)=>{
        if(e.data?.type==='__activate_edit_mode') panel.classList.add('on');
        if(e.data?.type==='__deactivate_edit_mode') panel.classList.remove('on');
      });
      window.parent.postMessage({type:'__edit_mode_available'},'*');

      const bind = (id,key)=>{
        const el = document.getElementById(id);
        if(!el) return;
        el.value = DEF[key];
        el.addEventListener('input',()=>{
          DEF[key] = el.value;
          apply(DEF);
          window.parent.postMessage({type:'__edit_mode_set_keys',edits:{[key]:el.value}},'*');
        });
      };
      bind('tw-teal','teal');
      bind('tw-coral','coral');
    }
  };
})();
