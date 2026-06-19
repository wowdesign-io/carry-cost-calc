(function () {
  'use strict';

  var WEBHOOK_URL = 'https://hook.us2.make.com/aamk11siz299581bp71ezhif746dh8i1';
  var _d = {};

  // ── CSS ──────────────────────────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&family=Inter:wght@400;500&display=swap');

.wwd-calc * { box-sizing: border-box; margin: 0; padding: 0; }

.wwd-calc {
  font-family: 'Inter', Arial, sans-serif;
  color: #ffffff;
  width: 100%;
}

.wwd-calc h2 {
  font-family: 'Outfit', Arial, sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.3;
  color: #ffffff;
  margin-bottom: 8px;
}

.wwd-calc h3 {
  font-family: 'Outfit', Arial, sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 8px;
}

.wwd-calc p {
  font-size: 14px;
  line-height: 1.6;
  color: #94a3b8;
}

.wwd-field { margin-top: 20px; }

.wwd-label {
  display: block;
  font-family: 'Outfit', Arial, sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #ffffff;
  margin-bottom: 6px;
  letter-spacing: 0.02em;
}

.wwd-label span { font-weight: 400; color: #64748b; }

.wwd-input,
.wwd-select {
  width: 100%;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 0;
  color: #ffffff;
  font-family: 'Inter', Arial, sans-serif;
  font-size: 15px;
  padding: 12px 14px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  transition: border-color 0.15s;
}

.wwd-input::placeholder { color: #475569; }
.wwd-input:focus, .wwd-select:focus { border-color: #2E77FA; }
.wwd-select option { background: #1a2235; color: #ffffff; }

.wwd-select-wrap { position: relative; }
.wwd-select-wrap::after {
  content: '';
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 0; height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #94a3b8;
  pointer-events: none;
}

.wwd-btn {
  display: block;
  width: 100%;
  margin-top: 24px;
  padding: 14px 24px;
  background: #2E77FA;
  color: #ffffff;
  border: none;
  border-radius: 0;
  font-family: 'Outfit', Arial, sans-serif;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.15s;
}

.wwd-btn:hover { background: #1d66e8; }

.wwd-gate-header {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.wwd-error {
  margin-top: 10px;
  font-size: 13px;
  color: #FF2C55;
  display: none;
}

.wwd-results-header {
  font-family: 'Outfit', Arial, sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 16px;
}

.wwd-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  font-size: 14px;
  color: #94a3b8;
}

.wwd-row:last-of-type { border-bottom: none; }
.wwd-row span:last-child { font-weight: 500; color: #ffffff; font-variant-numeric: tabular-nums; }

.wwd-row.wwd-total {
  padding: 14px 0;
  margin-top: 4px;
  border-top: 1px solid rgba(255,255,255,0.15);
  border-bottom: 1px solid rgba(255,255,255,0.15);
  font-family: 'Outfit', Arial, sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
}

.wwd-row.wwd-total span:last-child { color: #2E77FA; font-size: 17px; }

.wwd-summary {
  margin-top: 16px;
  font-size: 13px;
  line-height: 1.7;
  color: #94a3b8;
}

.wwd-cta {
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.wwd-cta p {
  font-family: 'Outfit', Arial, sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
}

.wwd-cta-btn {
  display: inline-block;
  padding: 12px 24px;
  background: #2E77FA;
  color: #ffffff;
  text-decoration: none;
  font-family: 'Outfit', Arial, sans-serif;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 0;
  white-space: nowrap;
  transition: background 0.15s;
}

.wwd-cta-btn:hover { background: #1d66e8; }
`;
  document.head.appendChild(style);

  // ── HTML ─────────────────────────────────────────────────────────────────────
  var root = document.getElementById('wwd-calc-root');
  if (!root) return;

  root.innerHTML = `
<div class="wwd-calc">

  <div id="wwd-form">
    <h2>What Is One Month of Delay Costing You?</h2>
    <p style="margin-top:8px;">See how much capital you preserve by accelerating sell-out by just 2–6 months.</p>

    <div class="wwd-field">
      <label class="wwd-label" for="wwd-loan">Total Construction Loan ($)</label>
      <input class="wwd-input" type="text" id="wwd-loan" placeholder="e.g. 18,000,000" inputmode="numeric">
    </div>

    <div class="wwd-field">
      <label class="wwd-label" for="wwd-rate">Annual Interest Rate (%)</label>
      <input class="wwd-input" type="text" id="wwd-rate" placeholder="e.g. 8.5" inputmode="decimal">
    </div>

    <div class="wwd-field">
      <label class="wwd-label" for="wwd-months">Months Saved on Sell-Out</label>
      <div class="wwd-select-wrap">
        <select class="wwd-select" id="wwd-months">
          <option value="1">1 Month</option>
          <option value="2">2 Months</option>
          <option value="3">3 Months</option>
          <option value="4">4 Months</option>
          <option value="5">5 Months</option>
          <option value="6">6 Months</option>
        </select>
      </div>
    </div>

    <div class="wwd-field">
      <label class="wwd-label" for="wwd-burn">Monthly Marketing/Ops Burn ($) <span>(optional)</span></label>
      <input class="wwd-input" type="text" id="wwd-burn" placeholder="e.g. 25,000" inputmode="numeric">
    </div>

    <button class="wwd-btn" id="wwd-calc-btn">Calculate Savings</button>
  </div>

  <div id="wwd-gate" style="display:none;">
    <div class="wwd-gate-header">
      <h3>Receive Your Capital Preservation Report</h3>
      <p style="margin-top:6px;">Enter your details to unlock the full breakdown — we'll also send a copy to your email.</p>
    </div>

    <div class="wwd-field">
      <label class="wwd-label" for="wwd-name">First Name</label>
      <input class="wwd-input" type="text" id="wwd-name" placeholder="e.g. David" autocomplete="given-name">
    </div>

    <div class="wwd-field">
      <label class="wwd-label" for="wwd-email">Work Email</label>
      <input class="wwd-input" type="email" id="wwd-email" placeholder="david@developer.com" autocomplete="email">
    </div>

    <button class="wwd-btn" id="wwd-gate-btn">Reveal Savings</button>
    <p class="wwd-error" id="wwd-error">Please enter your name and a valid work email.</p>
  </div>

  <div id="wwd-results" style="display:none;">
    <p class="wwd-results-header">Financial Impact Analysis</p>

    <div class="wwd-row">
      <span>Monthly Carry Cost</span>
      <span id="wwd-r-carry"></span>
    </div>
    <div class="wwd-row">
      <span>Interest Capital Saved</span>
      <span id="wwd-r-interest"></span>
    </div>
    <div class="wwd-row">
      <span>Operational Cash Saved</span>
      <span id="wwd-r-ops"></span>
    </div>
    <div class="wwd-row wwd-total">
      <span>Total Capital Preserved</span>
      <span id="wwd-r-total"></span>
    </div>
    <div class="wwd-row">
      <span>Equivalent Monthly Erosion</span>
      <span id="wwd-r-erosion"></span>
    </div>

    <p class="wwd-summary" id="wwd-summary"></p>

    <p style="margin-top:14px; font-size:12px; color:#64748b;">We've sent a copy of these results to your email.</p>

    <div class="wwd-cta">
      <p>Ready to close 31% faster?</p>
      <a class="wwd-cta-btn" id="wwd-cta-link" href="https://cal.com/wowdesign/book-a-demo" target="_blank" rel="noopener">Book a 30-min demo &#8594;</a>
    </div>
  </div>

</div>
`;

  // ── Logic ────────────────────────────────────────────────────────────────────
  function clean(v) {
    return parseFloat(String(v).replace(/[$,%\s,]/g, '')) || 0;
  }

  function fmt(n) {
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function showGate() {
    var loan   = clean(document.getElementById('wwd-loan').value);
    var rate   = clean(document.getElementById('wwd-rate').value);
    var months = parseInt(document.getElementById('wwd-months').value, 10);

    if (!loan || !rate || !months) {
      alert('Please enter the construction loan amount and interest rate.');
      return;
    }

    _d = { loan: loan, rate: rate, months: months, burn: clean(document.getElementById('wwd-burn').value) };
    document.getElementById('wwd-form').style.display = 'none';
    document.getElementById('wwd-gate').style.display = 'block';
  }

  function reveal() {
    var name  = document.getElementById('wwd-name').value.trim();
    var email = document.getElementById('wwd-email').value.trim();
    var errEl = document.getElementById('wwd-error');

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errEl.style.display = 'block';
      return;
    }
    errEl.style.display = 'none';

    var monthly_carry   = (_d.loan * (_d.rate / 100)) / 12;
    var interest_saved  = monthly_carry * _d.months;
    var ops_saved       = _d.burn * _d.months;
    var total_saved     = interest_saved + ops_saved;
    var monthly_erosion = total_saved / _d.months;
    var roi_multiplier  = (total_saved / 45000).toFixed(1) + 'x';

    document.getElementById('wwd-r-carry').textContent    = fmt(monthly_carry);
    document.getElementById('wwd-r-interest').textContent = fmt(interest_saved);
    document.getElementById('wwd-r-ops').textContent      = fmt(ops_saved);
    document.getElementById('wwd-r-total').textContent    = fmt(total_saved);
    document.getElementById('wwd-r-erosion').textContent  = fmt(monthly_erosion);
    document.getElementById('wwd-summary').textContent    =
      'By accelerating your absorption timeline by ' + _d.months +
      ' month' + (_d.months > 1 ? 's' : '') + ', you prevent ' +
      fmt(total_saved) + ' in capital erosion — approximately ' +
      fmt(monthly_erosion) + ' per month. This level of efficiency offsets the cost of the wowdesign system ' +
      roi_multiplier + ' within a single project cycle.';

    document.getElementById('wwd-gate').style.display    = 'none';
    document.getElementById('wwd-results').style.display = 'block';

    try {
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email:               email,
          first_name:          name,
          loan_amount:         _d.loan,
          interest_rate:       _d.rate,
          months_saved:        _d.months,
          monthly_burn:        _d.burn,
          monthly_carry:       Math.round(monthly_carry),
          interest_saved:      Math.round(interest_saved),
          ops_saved:           Math.round(ops_saved),
          total_saved:         Math.round(total_saved),
          monthly_erosion:     Math.round(monthly_erosion),
          roi_multiplier:      roi_multiplier,
          monthly_carry_fmt:   fmt(monthly_carry),
          total_saved_fmt:     fmt(total_saved),
          monthly_erosion_fmt: fmt(monthly_erosion),
          months_saved_label:  _d.months + ' month' + (_d.months > 1 ? 's' : '')
        })
      }).catch(function () {});
    } catch (e) {}
  }

  // Wire button events (no global scope pollution)
  document.getElementById('wwd-calc-btn').addEventListener('click', showGate);
  document.getElementById('wwd-gate-btn').addEventListener('click', reveal);
})();
