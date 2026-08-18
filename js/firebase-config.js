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
  'PRE_SEM1': { rival: 'Packers', code: 'gb', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/gb.png', date: 'Jue 13 Ago', isoDate: '2026-08-13', label: 'Pretemporada Sem 1: Packers (Jue 13 Ago)' },
  'PRE_SEM2': { rival: 'Jets', code: 'nyj', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png', date: 'Vie 21 Ago', isoDate: '2026-08-21', label: 'Pretemporada Sem 2: Jets (Vie 21 Ago)' },
  'PRE_SEM3': { rival: 'Bills', code: 'buf', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/buf.png', date: 'Jue 27 Ago', isoDate: '2026-08-27', label: 'Pretemporada Sem 3: Bills (Jue 27 Ago)' },
  'SEM1':     { rival: 'Falcons', code: 'atl', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/atl.png', date: 'Dom 13 Sep', isoDate: '2026-09-13', label: 'Sem 1: Falcons (Dom 13 Sep)' },
  'SEM2':     { rival: 'Patriots', code: 'ne', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ne.png', date: 'Dom 20 Sep', isoDate: '2026-09-20', label: 'Sem 2: Patriots (Dom 20 Sep)' },
  'SEM3':     { rival: 'Bengals', code: 'cin', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/cin.png', date: 'Dom 27 Sep', isoDate: '2026-09-27', label: 'Sem 3: Bengals (Dom 27 Sep)' },
  'SEM4':     { rival: 'Browns', code: 'cle', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/cle.png', date: 'Jue 01 Oct', isoDate: '2026-10-01', label: 'Sem 4: Browns (Jue 01 Oct)' },
  'SEM5':     { rival: 'Colts', code: 'ind', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ind.png', date: 'Dom 11 Oct', isoDate: '2026-10-11', label: 'Sem 5: Colts (Dom 11 Oct)' },
  'SEM6':     { rival: 'Buccaneers', code: 'tb', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/tb.png', date: 'Dom 18 Oct', isoDate: '2026-10-18', label: 'Sem 6: Buccaneers (Dom 18 Oct)' },
  'SEM7':     { rival: 'Saints', code: 'no', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/no.png', date: 'Dom 25 Oct', isoDate: '2026-10-25', label: 'Sem 7: Saints (Dom 25 Oct)' },
  'SEM8':     { rival: 'Browns', code: 'cle', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/cle.png', date: 'Dom 01 Nov', isoDate: '2026-11-01', label: 'Sem 8: Browns (Dom 01 Nov)' },
  'SEM9':     { rival: 'BYE WEEK', code: 'pit', logo: 'assets/logo.png', date: 'Mar 10 Nov', isoDate: '2026-11-10', label: 'Sem 9: BYE WEEK (Mar 10 Nov)' },
  'SEM10':    { rival: 'Bengals', code: 'cin', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/cin.png', date: 'Dom 15 Nov', isoDate: '2026-11-15', label: 'Sem 10: Bengals (Dom 15 Nov)' },
  'SEM11':    { rival: 'Eagles', code: 'phi', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/phi.png', date: 'Dom 22 Nov', isoDate: '2026-11-22', label: 'Sem 11: Eagles (Dom 22 Nov)' },
  'SEM12':    { rival: 'Broncos', code: 'den', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/den.png', date: 'Vie 27 Nov', isoDate: '2026-11-27', label: 'Sem 12: Broncos (Vie 27 Nov)' },
  'SEM13':    { rival: 'Texans', code: 'hou', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/hou.png', date: 'Dom 06 Dic', isoDate: '2026-12-06', label: 'Sem 13: Texans (Dom 06 Dic)' },
  'SEM14':    { rival: 'Jaguars', code: 'jax', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/jax.png', date: 'Lun 14 Dic', isoDate: '2026-12-14', label: 'Sem 14: Jaguars (Lun 14 Dic)' },
  'SEM15':    { rival: 'Ravens', code: 'bal', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/bal.png', date: 'Dom 20 Dic', isoDate: '2026-12-20', label: 'Sem 15: Ravens (Dom 20 Dic)' },
  'SEM16':    { rival: 'Panthers', code: 'car', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/car.png', date: 'Dom 27 Dic', isoDate: '2026-12-27', label: 'Sem 16: Panthers (Dom 27 Dic)' },
  'SEM17':    { rival: 'Titans', code: 'ten', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ten.png', date: 'Dom 03 Ene', isoDate: '2027-01-03', label: 'Sem 17: Titans (Dom 03 Ene)' },
  'SEM18':    { rival: 'Ravens', code: 'bal', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/bal.png', date: 'Dom 10 Ene', isoDate: '2027-01-10', label: 'Sem 18: Ravens (Dom 10 Ene)' },
  'VISITA_NORMAL': { rival: 'Buffalo Wild Wings', code: 'bww', logo: 'assets/bww-buffalo.png', date: 'Restaurante', isoDate: '', label: 'Visita Regular (Restaurante)' }
};

window.isPartidoPast = function(partidoId) {
  const info = window.PARTIDOS_INFO[partidoId];
  if (!info || !info.isoDate) return false;
  const todayStr = new Date().toISOString().split('T')[0];
  return info.isoDate < todayStr;
};

window.getAttendeesLegendTitle = function(partidoId, count = 0) {
  if (partidoId === 'VISITA_NORMAL') {
    return `👥 Fans Registrados en Restaurante (<span style="color:var(--gold);">${count}</span>)`;
  }
  const isPast = window.isPartidoPast(partidoId);
  if (isPast) {
    return `👥 QUIÉNES ESTUVIERON EN EL JUEGO (<span style="color:var(--gold);">${count}</span>)`;
  } else {
    return `👥 QUIÉNES ESTÁN EN EL JUEGO (<span style="color:var(--gold);">${count}</span>)`;
  }
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

  const scorePit = opts.scoreSteelers !== undefined ? opts.scoreSteelers : (info.scoreSteelers !== undefined ? info.scoreSteelers : null);
  const scoreRiv = opts.scoreRival !== undefined ? opts.scoreRival : (info.scoreRival !== undefined ? info.scoreRival : null);
  const hasScore = (scorePit !== null && scorePit !== undefined && scorePit !== '') && (scoreRiv !== null && scoreRiv !== undefined && scoreRiv !== '');

  if (hasScore) {
    const p1 = Number(scorePit);
    const p2 = Number(scoreRiv);
    const isWin = p1 > p2;
    const isTie = p1 === p2;
    
    let badgeBg = isWin ? '#22c55e' : (isTie ? '#eab308' : '#ef4444');
    let badgeText = isWin ? 'GANADO 🏈' : (isTie ? 'EMPATE 🤝' : 'FINAL');

    if (opts.isLive) {
      badgeBg = '#dc2626';
      badgeText = `🔴 EN VIVO ${opts.detail ? `(${opts.detail})` : ''}`;
    }

    return `
      <div style="display:inline-flex; flex-direction:column; align-items:center; gap:4px;">
        <div style="display:inline-flex; align-items:center; justify-content:center; gap:8px; flex-wrap:wrap;">
          <div style="display:inline-flex; align-items:center; gap:6px;">
            <img src="${steelersLogo}" style="height:${size}px; width:${size}px; object-fit:contain;"/>
            <span style="font-weight:900; color:var(--steelers-yellow); font-size:14px;">STEELERS</span>
            <span style="font-size:18px; font-weight:900; color:#fff; background:#222; padding:1px 8px; border-radius:6px; border:1px solid #444;">${scorePit}</span>
          </div>
          <span style="font-weight:900; color:#888; font-size:11px;">VS</span>
          <div style="display:inline-flex; align-items:center; gap:6px;">
            <span style="font-size:18px; font-weight:900; color:#fff; background:#222; padding:1px 8px; border-radius:6px; border:1px solid #444;">${scoreRiv}</span>
            <span style="font-weight:900; color:#ffffff; font-size:14px;">${info.rival.toUpperCase()}</span>
            <img src="${info.logo}" style="height:${size}px; width:${size}px; object-fit:contain;"/>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:6px; font-size:10px; margin-top:2px;">
          <span style="background:${badgeBg}; color:#fff; font-weight:900; padding:1px 6px; border-radius:4px; text-transform:uppercase;">${badgeText}</span>
          <span style="color:#aaa; font-weight:bold;">MARCADOR OFICIAL ${info.date ? `(${info.date})` : ''}</span>
        </div>
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

// ============================================
// CONEXIÓN AUTOMÁTICA CON ESPN NFL LIVE SCORES
// ============================================
window.fetchAutoMatchScore = async function(partidoId) {
  const info = window.PARTIDOS_INFO[partidoId];
  if (!info || partidoId === 'VISITA_NORMAL' || partidoId === 'SEM9') return null;

  try {
    const res = await fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/pit/schedule');
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.events) return null;

    const rivalName = (info.rival || '').toLowerCase();
    const rivalCode = (info.code || '').toLowerCase();

    const matchEvent = data.events.find(evt => {
      const name = (evt.name || '').toLowerCase();
      if (name.includes(rivalName)) return true;
      const comps = evt.competitions && evt.competitions[0] ? evt.competitions[0].competitors : [];
      return comps.some(c => (c.team.abbreviation || '').toLowerCase() === rivalCode || (c.team.name || '').toLowerCase().includes(rivalName));
    });

    if (!matchEvent) return null;

    const comp = matchEvent.competitions[0];
    const pitComp = comp.competitors.find(c => (c.team.abbreviation || '').toUpperCase() === 'PIT');
    const rivComp = comp.competitors.find(c => (c.team.abbreviation || '').toUpperCase() !== 'PIT');

    if (!pitComp || !rivComp) return null;

    const isCompleted = comp.status && comp.status.type && comp.status.type.completed;
    const isLive = comp.status && comp.status.type && comp.status.type.state === 'in';
    const detail = comp.status && comp.status.type ? (comp.status.type.shortDetail || comp.status.type.detail) : '';

    const pitScore = pitComp.score ? Number(pitComp.score.value) : null;
    const rivScore = rivComp.score ? Number(rivComp.score.value) : null;

    if (pitScore !== null && rivScore !== null && !isNaN(pitScore) && !isNaN(rivScore)) {
      return {
        scoreSteelers: pitScore,
        scoreRival: rivScore,
        isCompleted: isCompleted,
        isLive: isLive,
        detail: detail
      };
    }
  } catch(e) {
    console.warn('Error fetching auto score from ESPN:', e);
  }
  return null;
};

// ============================================
// COMPONENTE VISUAL: TARJETA DEL GANADOR OFICIAL
// ============================================
window.renderWinnerCardHTML = function(wData, winnerProfile) {
  const winnerNombre = (winnerProfile ? `${winnerProfile.nombre || ''} ${winnerProfile.apellidoPaterno || ''}` : wData.winnerNombre || 'Fan').trim().toUpperCase();
  const winnerPhoto = (winnerProfile && winnerProfile.photoURL) ? winnerProfile.photoURL : (wData.winnerPhotoURL || '');
  const partidoId = wData.partidoId || '';
  const matchInfo = window.PARTIDOS_INFO[partidoId] || {};
  const matchRival = matchInfo.rival ? `vs ${matchInfo.rival.toUpperCase()}` : '';
  
  const photoHtml = winnerPhoto 
    ? `<img src="${winnerPhoto}" style="width: 110px; height: 110px; border-radius: 50%; object-fit: cover; border: 4px solid var(--gold); box-shadow: 0 0 25px rgba(255, 182, 18, 0.6), inset 0 0 10px rgba(0,0,0,0.8);" alt="${winnerNombre}"/>`
    : `<div style="width: 110px; height: 110px; border-radius: 50%; background: #262626; border: 4px solid var(--gold); display: flex; align-items: center; justify-content: center; font-size: 50px; box-shadow: 0 0 25px rgba(255, 182, 18, 0.6);">🏆</div>`;

  return `
    <div style="background: linear-gradient(145deg, #1f1a0e 0%, #0d0d0d 100%); border: 2px solid var(--gold); border-radius: 16px; padding: 20px 16px; text-align: center; position: relative; overflow: hidden; box-shadow: 0 8px 30px rgba(255, 182, 18, 0.25); margin-bottom:16px;">
      
      <!-- Glow superior -->
      <div style="position: absolute; top: -40px; left: 50%; transform: translateX(-50%); width: 180px; height: 180px; background: radial-gradient(circle, rgba(255, 182, 18, 0.25) 0%, rgba(0,0,0,0) 70%); pointer-events: none;"></div>

      <!-- Subtítulo Superior -->
      <div style="font-size: 11px; font-weight: 900; color: #aaa; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;">
        🛡️ GUARDIÁN DE LA CORTINA DE ACERO 🛡️
      </div>

      <!-- Título Principal -->
      <div style="font-size: 17px; font-weight: 900; color: var(--gold); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 14px;">
        🏆 ¡GANADOR OFICIAL DEL PARTIDO!
      </div>

      <!-- Foto de Perfil con Insignias BWW y Steelers -->
      <div style="position: relative; display: inline-block; margin-bottom: 12px;">
        ${photoHtml}
        
        <!-- Insignia Izquierda: BWW -->
        <div style="position: absolute; bottom: 2px; left: -8px; background: #000; border: 2px solid var(--gold); border-radius: 50%; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.9);" title="Buffalo Wild Wings">
          <img src="assets/bww-buffalo.png" style="width: 26px; height: 26px; object-fit: contain;"/>
        </div>

        <!-- Insignia Derecha: Steelers Nation -->
        <div style="position: absolute; bottom: 2px; right: -8px; background: #000; border: 2px solid var(--gold); border-radius: 50%; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.9);" title="Steelers Nation Qro">
          <img src="assets/logo.png" style="width: 24px; height: 24px; object-fit: contain;"/>
        </div>
      </div>

      <!-- Nombre del Ganador -->
      <div style="font-size: 22px; font-weight: 900; color: #ffffff; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; text-shadow: 0 2px 4px rgba(0,0,0,0.8);">
        ${winnerNombre}
      </div>

      <!-- Badge Fanático de la Semana -->
      <div style="display: inline-block; background: rgba(255, 182, 18, 0.15); border: 1px solid var(--gold); color: var(--gold); font-size: 11px; font-weight: 800; padding: 4px 14px; border-radius: 20px; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
        ⭐ FANÁTICO DE LA SEMANA ${matchRival}
      </div>

      <!-- Descripción del Premio -->
      <div style="font-size: 12px; color: #ddd; max-width: 440px; margin: 0 auto; line-height: 1.5; background: rgba(0,0,0,0.6); padding: 10px 14px; border-radius: 10px; border: 1px solid #333;">
        ¡Felicidades! Disfruta tu premio de <b>Buffalo Wild Wings</b> (1 Orden de Nachos + 2 Bebidas + Mesa Reservada) y tu regalo sorpresa de <b>Steelers Nation Querétaro</b> 🎉.
      </div>

    </div>
  `;
};



