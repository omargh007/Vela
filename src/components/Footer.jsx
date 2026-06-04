import { C } from '../data.js'

const COLS = [
  { h:'Shop',    links:['Fashion','Electronics','Beauty','Home & Living','Sports','Toys & Kids','Food & Grocery','Sale'] },
  { h:'Help',    links:['Size Guide','Shipping','Returns','Track Order','FAQ','Contact'] },
  { h:'Company', links:['About VELA','Sustainability','Careers','Press','Sell on VELA'] },
  { h:'Connect', links:['Instagram','TikTok','Pinterest','YouTube','Newsletter'] },
]

export default function Footer() {
  return (
    <footer style={{ background:C.canvas, borderTop:`1px solid ${C.hairline}`, padding:'clamp(32px,4vw,48px) clamp(16px,4vw,40px) clamp(20px,3vw,28px)' }}>
      <div style={{ maxWidth:1440, margin:'0 auto' }}>
        <div className="footer-grid">
          <div>
            <div style={{ fontWeight:700, fontSize:17, letterSpacing:'0.07em', marginBottom:12 }}>VELA</div>
            <p style={{ fontSize:13, color:C.mute, lineHeight:1.75, maxWidth:200, marginBottom:18 }}>
              Everything you need, from verified sellers worldwide. Fashion, tech, beauty and more.
            </p>
            <div style={{ display:'flex', gap:8 }}>
              <input placeholder="Your email" style={{ flex:1, padding:'8px 14px', borderRadius:9999, border:`1px solid ${C.hairline}`, fontSize:13, outline:'none', background:C.cloud, minWidth:0 }}
                onFocus={e => { e.target.style.borderColor=C.ink; e.target.style.background=C.canvas }}
                onBlur={e  => { e.target.style.borderColor=C.hairline; e.target.style.background=C.cloud }}
              />
              <button style={{ background:C.ink, color:'#fff', fontSize:13, fontWeight:500, padding:'8px 16px', borderRadius:9999, border:'none', cursor:'pointer', flexShrink:0 }}>Subscribe</button>
            </div>
          </div>
          {COLS.map(col => (
            <div key={col.h}>
              <div style={{ fontSize:13, fontWeight:600, marginBottom:14, letterSpacing:'0.02em' }}>{col.h}</div>
              {col.links.map(l => (
                <a key={l} href="#" style={{ display:'block', fontSize:13, color:C.mute, marginBottom:9, transition:'color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.color=C.ink}
                  onMouseLeave={e => e.currentTarget.style.color=C.mute}
                >{l}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop:`1px solid ${C.hairline}`, paddingTop:20, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <span style={{ fontSize:11, color:C.stone }}>© 2025 VELA Marketplace, Inc.</span>
          <div style={{ display:'flex', gap:18 }}>
            {['Privacy','Terms','Cookies','Accessibility'].map(l => (
              <a key={l} href="#" style={{ fontSize:11, color:C.stone, transition:'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color=C.ink}
                onMouseLeave={e => e.currentTarget.style.color=C.stone}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}