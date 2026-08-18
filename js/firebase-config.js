// ============================================
// STEELERS FAN CLUB QRO — Firebase Config
// Proyecto: steelers-nation-queretaro
// ============================================
const firebaseConfig = {
  apiKey: "AIzaSyDZAD_rAdj8OvuoswoU3Tqdj8sGgNaaOwg",
  authDomain: "steelers-nation-queretaro.firebaseapp.com",
  projectId: "steelers-nation-queretaro",
  storageBucket: "steelers-nation-queretaro.firebasestorage.app",
  messagingSenderId: "120474707665",
  appId: "1:120474707665:web:e8ef34f21110732293c7f0"
};

firebase.initializeApp(firebaseConfig);

window.db      = firebase.firestore();
window.auth    = firebase.auth();
window.storage = firebase.storage();

// ============================================
// DICCIÓNARIO GLOBAL DE PARTIDOS Y LOGOS
// ============================================
window.PARTIDOS_INFO = {
  'PRE_SEM1': { rival: 'Packers', code: 'gb', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/gb.png', date: 'Jue 13 Ago', label: 'Pretemporada Sem 1: Packers (Jue 13 Ago)' },
  'PRE_SEM2': { rival: 'Jets', code: 'nyj', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png', date: 'Vie 21 Ago', label: 'Pretemporada Sem 2: Jets (Vie 21 Ago)' },
  'PRE_SEM3': { rival: 'Bills', code: 'buf', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/buf.png', date: 'Jue 27 Ago', label: 'Pretemporada Sem 3: Bills (Jue 27 Ago)' },
  'SEM1':     { rival: 'Falcons', code: 'atl', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/atl.png', date: 'Dom 13 Sep', label: 'Sem 1: Falcons (Dom 13 Sep)' },
  'SEM2':     { rival: 'Patriots', code: 'ne', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ne.png', date: 'Dom 20 Sep', label: 'Sem 2: Patriots (Dom 20 Sep)' },
  'SEM3':     { rival: 'Bengals', code: 'cin', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/cin.png', date: 'Dom 27 Sep', label: 'Sem 3: Bengals (Dom 27 Sep)' },
  'SEM4':     { rival: 'Browns', code: 'cle', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/cle.png', date: 'Jue 01 Oct', label: 'Sem 4: Browns (Jue 01 Oct)' },
  'SEM5':     { rival: 'Colts', code: 'ind', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ind.png', date: 'Dom 11 Oct', label: 'Sem 5: Colts (Dom 11 Oct)' },
  'SEM6':     { rival: 'Buccaneers', code: 'tb', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/tb.png', date: 'Dom 18 Oct', label: 'Sem 6: Buccaneers (Dom 18 Oct)' },
  'SEM7':     { rival: 'Saints', code: 'no', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/no.png', date: 'Dom 25 Oct', label: 'Sem 7: Saints (Dom 25 Oct)' },
  'SEM8':     { rival: 'Browns', code: 'cle', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/cle.png', date: 'Dom 01 Nov', label: 'Sem 8: Browns (Dom 01 Nov)' },
  'SEM9':     { rival: 'BYE WEEK', code: 'pit', logo: 'assets/logo.png', date: 'Mar 10 Nov', label: 'Sem 9: BYE WEEK (Mar 10 Nov)' },
  'SEM10':    { rival: 'Bengals', code: 'cin', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/cin.png', date: 'Dom 15 Nov', label: 'Sem 10: Bengals (Dom 15 Nov)' },
  'SEM11':    { rival: 'Eagles', code: 'phi', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/phi.png', date: 'Dom 22 Nov', label: 'Sem 11: Eagles (Dom 22 Nov)' },
  'SEM12':    { rival: 'Broncos', code: 'den', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/den.png', date: 'Vie 27 Nov', label: 'Sem 12: Broncos (Vie 27 Nov)' },
  'SEM13':    { rival: 'Texans', code: 'hou', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/hou.png', date: 'Dom 06 Dic', label: 'Sem 13: Texans (Dom 06 Dic)' },
  'SEM14':    { rival: 'Jaguars', code: 'jax', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/jax.png', date: 'Lun 14 Dic', label: 'Sem 14: Jaguars (Lun 14 Dic)' },
  'SEM15':    { rival: 'Ravens', code: 'bal', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/bal.png', date: 'Dom 20 Dic', label: 'Sem 15: Ravens (Dom 20 Dic)' },
  'SEM16':    { rival: 'Panthers', code: 'car', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/car.png', date: 'Dom 27 Dic', label: 'Sem 16: Panthers (Dom 27 Dic)' },
  'SEM17':    { rival: 'Titans', code: 'ten', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ten.png', date: 'Dom 03 Ene', label: 'Sem 17: Titans (Dom 03 Ene)' },
  'SEM18':    { rival: 'Ravens', code: 'bal', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/bal.png', date: 'Dom 10 Ene', label: 'Sem 18: Ravens (Dom 10 Ene)' },
  'VISITA_NORMAL': { rival: 'Buffalo Wild Wings', code: 'bww', logo: 'assets/bww-buffalo.png', date: 'Restaurante', label: 'Visita Regular (Restaurante)' }
};

window.getMatchHeaderHTML = function(partidoId, opts = {}) {
  const info = window.PARTIDOS_INFO[partidoId] || { rival: 'Rival', logo: 'assets/logo.png', date: '', label: partidoId };
  const steelersLogo = 'assets/logo.png';
  const size = opts.size || 26;
  const isBye = partidoId === 'SEM9';
  
  if (isBye) {
    return `
      <div style="display:inline-flex; align-items:center; justify-content:center; gap:8px; flex-wrap:wrap;">
        <img src="${steelersLogo}" style="height:${size}px; width:${size}px; object-fit:contain;"/>
        <span style="font-weight:900; color:var(--steelers-yellow); font-size:14px;">STEELERS — SEMANA DE DESCANSO</span>
      </div>
    `;
  }

  return `
    <div style="display:inline-flex; align-items:center; justify-content:center; gap:8px; flex-wrap:wrap;">
      <div style="display:inline-flex; align-items:center; gap:5px;">
        <img src="${steelersLogo}" style="height:${size}px; width:${size}px; object-fit:contain;"/>
        <span style="font-weight:900; color:var(--steelers-yellow); font-size:14px; letter-spacing:0.5px;">STEELERS</span>
      </div>
      <span style="font-weight:900; color:#FFB612; font-size:12px; padding:2px 6px; background:rgba(255,182,18,0.15); border-radius:4px;">VS</span>
      <div style="display:inline-flex; align-items:center; gap:5px;">
        <img src="${info.logo}" style="height:${size}px; width:${size}px; object-fit:contain;"/>
        <span style="font-weight:900; color:#ffffff; font-size:14px; letter-spacing:0.5px;">${info.rival.toUpperCase()}</span>
      </div>
      ${info.date ? `<span style="font-size:11px; color:#aaa; font-weight:600;">(${info.date})</span>` : ''}
    </div>
  `;
};


