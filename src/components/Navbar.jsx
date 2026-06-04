import { useState, useRef, useEffect } from 'react'
import { C, CAT_META } from '../data.js'
import { Search, Heart, Bag, Store } from '../Icons.jsx'

function IconBtn({ children, badge, badgeBg = '#111111', onClick }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width:38, height:38, borderRadius:'50%', border:'none', cursor:'pointer',
        display:'flex', alignItems:'center', justifyContent:'center',
        color:C.ink, background: hov ? C.cloud : 'transparent',
        transition:'background 0.15s', position:'relative', flexShrink:0,
      }}
    >
      {children}
      {badge > 0 && (
        <span style={{
          position:'absolute', top:2, right:2,
          background:badgeBg, color:'#fff',
          fontSize:8, fontWeight:700, borderRadius:'50%',
          width:15, height:15, display:'flex', alignItems:'center', justifyContent:'center',
        }}>{badge}</span>
      )}
    </button>
  )
}

function HamburgerIcon({ open }) {
  return (
    <div style={{ width:22, height:16, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
      {[0,1,2].map(i => (
        <div key={i} style={{
          height:2, background:C.ink, borderRadius:1,
          transformOrigin:'center',
          transition:'all 0.2s ease',
          transform: open
            ? i === 0 ? 'translateY(7px) rotate(45deg)'
            : i === 2 ? 'translateY(-7px) rotate(-45deg)'
            : 'scaleX(0)'
            : 'none',
          opacity: open && i === 1 ? 0 : 1,
        }}/>
      ))}
    </div>
  )
}

const QUICK_CATS = ['clothes', 'shoes', 'electronics', 'beauty']

export default function Navbar({ view, navigate, cartCount, wishlistCount, userType }) {
  const [mega,       setMega]       = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const timer = useRef(null)
  const open  = () => { clearTimeout(timer.current); setMega(true) }
  const close = () => { timer.current = setTimeout(() => setMega(false), 160) }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const goTo = (catId) => {
    navigate('category', { category:catId, sub:'all' })
    setMobileOpen(false)
    setMega(false)
  }

  return (
    <>
      <nav
        onMouseLeave={close}
        style={{
          background:C.canvas, borderBottom:`1px solid ${C.hairline}`,
          height:60, padding:'0 20px',
          display:'flex', alignItems:'center',
          position:'sticky', top:0, zIndex:300,
          gap:8,
        }}
      >
        <button
          className="nav-hamburger-btn"
          onClick={() => setMobileOpen(v => !v)}
          style={{ width:38, height:38, borderRadius:6, border:'none', cursor:'pointer', background:'transparent', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}
          aria-label="Menu"
        >
          <HamburgerIcon open={mobileOpen} />
        </button>

        <button
          onClick={() => { navigate('home'); setMobileOpen(false) }}
          style={{ fontWeight:700, fontSize:18, letterSpacing:'0.07em', background:'none', border:'none', cursor:'pointer', color:C.ink, flexShrink:0, marginRight:8 }}
        >
          VELA
        </button>

        <div className="nav-desktop-links" style={{ display:'flex', flex:1, position:'relative', height:60, alignItems:'center' }}>
          <div onMouseEnter={open} style={{ height:'100%', display:'flex', alignItems:'center' }}>
            <button style={{ height:'100%', padding:'0 14px', background:'none', border:'none', cursor:'pointer', fontSize:13, fontWeight:600, color:C.ink, display:'flex', alignItems:'center', gap:5, borderBottom: mega ? `2px solid ${C.ink}` : '2px solid transparent', transition:'border-color 0.15s', flexShrink:0 }}>
              ☰ All Departments
            </button>
          </div>

          {QUICK_CATS.map(id => (
            <button key={id} onClick={() => goTo(id)} style={{ height:'100%', padding:'0 12px', background:'none', border:'none', cursor:'pointer', fontSize:13, fontWeight:400, color:C.ink, borderBottom:'2px solid transparent', transition:'border-color 0.15s', flexShrink:0 }}
              onMouseEnter={e => e.currentTarget.style.borderBottomColor = C.hairline}
              onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}
            >
              {CAT_META[id].label}
            </button>
          ))}

          {[['Sale', C.sale, 600], ['New In', C.ink, 500]].map(([l, col, fw]) => (
            <button key={l} style={{ height:'100%', padding:'0 12px', background:'none', border:'none', cursor:'pointer', fontSize:13, fontWeight:fw, color:col, borderBottom:'2px solid transparent', flexShrink:0 }}>{l}</button>
          ))}

          {mega && (
            <div onMouseEnter={() => clearTimeout(timer.current)} style={{ position:'absolute', top:58, left:0, background:C.canvas, border:`1px solid ${C.hairline}`, borderTop:`2.5px solid ${C.ink}`, padding:'20px 24px 18px', boxShadow:'0 12px 36px rgba(0,0,0,0.09)', zIndex:300, minWidth:520, animation:'slideDown 0.15s ease' }}>
              <div style={{ fontSize:10, fontWeight:600, letterSpacing:'0.12em', color:C.mute, textTransform:'uppercase', marginBottom:14 }}>All Departments</div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:7 }}>
                {Object.values(CAT_META).map(cat => (
                  <button key={cat.id} onClick={() => goTo(cat.id)}
                    style={{ display:'flex', flexDirection:'column', alignItems:'flex-start', gap:4, padding:'9px 11px', borderRadius:6, background:'transparent', border:`1px solid ${C.hairline}`, cursor:'pointer', transition:'all 0.15s', textAlign:'left' }}
                    onMouseEnter={e => { e.currentTarget.style.background=C.ink; e.currentTarget.style.borderColor=C.ink; e.currentTarget.querySelectorAll('span').forEach(s=>s.style.color='#fff') }}
                    onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor=C.hairline; e.currentTarget.querySelectorAll('span').forEach(s=>s.style.color='') }}
                  >
                    <span style={{ fontSize:17 }}>{cat.icon}</span>
                    <span style={{ fontSize:11, fontWeight:600, color:C.ink, lineHeight:1.2 }}>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div style={{ display:'flex', alignItems:'center', gap:2, marginLeft:'auto' }}>
          <div className="nav-search-desktop" style={{ alignItems:'center', gap:7, background:C.cloud, borderRadius:9999, padding:'6px 14px', height:36, minWidth:170, cursor:'text' }}>
            <Search />
            <span style={{ fontSize:13, color:C.stone }}>Search everything…</span>
          </div>
          <button className="nav-search-mobile" style={{ width:38, height:38, borderRadius:'50%', border:'none', cursor:'pointer', alignItems:'center', justifyContent:'center', background:'transparent', color:C.ink, flexShrink:0 }}>
            <Search />
          </button>
          {userType === 'vendor' && (
            <button onClick={() => navigate('vendor')} style={{ display:'flex', alignItems:'center', gap:5, background: view === 'vendor' ? C.ink : C.cloud, color: view === 'vendor' ? '#fff' : C.ink, fontSize:12, fontWeight:500, padding:'6px 12px', borderRadius:9999, border:'none', cursor:'pointer', transition:'all 0.15s', marginLeft:4, flexShrink:0 }}>
              <Store /> My Store
            </button>
          )}
          <IconBtn badge={wishlistCount} badgeBg={C.sale}><Heart f={false} /></IconBtn>
          <IconBtn badge={cartCount} badgeBg={C.ink}><Bag /></IconBtn>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu" style={{ zIndex:299 }}>
          <div onClick={() => setMobileOpen(false)} style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.35)' }} />
          <div style={{ position:'absolute', top:0, left:0, right:0, background:C.canvas, paddingTop:72, maxHeight:'100dvh', overflowY:'auto', animation:'slideDown 0.2s ease' }}>
            <div style={{ padding:'14px 20px', borderBottom:`1px solid ${C.hairline}` }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, background:C.cloud, borderRadius:9999, padding:'10px 16px' }}>
                <Search />
                <span style={{ fontSize:14, color:C.stone }}>Search everything…</span>
              </div>
            </div>
            <div style={{ padding:'16px 20px 8px' }}>
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.12em', color:C.mute, textTransform:'uppercase', marginBottom:12 }}>All Departments</div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
                {Object.values(CAT_META).map(cat => (
                  <button key={cat.id} onClick={() => goTo(cat.id)} style={{ display:'flex', alignItems:'center', gap:10, padding:'12px 14px', borderRadius:8, background:C.cloud, border:'none', cursor:'pointer', textAlign:'left' }}>
                    <span style={{ width:36, height:36, borderRadius:8, background:cat.color, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0 }}>{cat.icon}</span>
                    <span style={{ fontSize:13, fontWeight:500, color:C.ink, lineHeight:1.3 }}>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div style={{ padding:'8px 20px 16px', borderTop:`1px solid ${C.hairline}`, marginTop:8 }}>
              {[['🔥 Sale', C.sale], ['✦ New In', C.ink], ['⭐ Top Sellers', C.ink]].map(([label, col]) => (
                <button key={label} onClick={() => setMobileOpen(false)} style={{ display:'block', width:'100%', textAlign:'left', padding:'13px 0', background:'none', border:'none', borderBottom:`1px solid ${C.hairline}`, fontSize:14, fontWeight:500, color:col, cursor:'pointer' }}>{label}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}