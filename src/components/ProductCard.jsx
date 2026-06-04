import { useState } from 'react'
import { Heart, Edit } from '../Icons.jsx'
import { C, VENDORS } from '../data.js'

const BADGE_BG = { 'Best Seller':'#c1fbd4', 'New In':'#d4f9e0', 'Trending':'#c1fbd4', 'Sale':'#fde8e8' }

function Swatch({ color }) {
  const white = color === '#fff' || color === '#ffffff' || color === '#FFFFFF'
  return <div style={{ width:11, height:11, borderRadius:'50%', background:color, flexShrink:0, border: white ? `1px solid ${C.hairline}` : 'none' }}/>
}

export default function ProductCard({ product, wishlisted, onWishlist, delay = 0, vendorView = false }) {
  const [hov, setHov] = useState(false)
  const sale = product.orig !== null
  const pct  = sale ? Math.round((1 - product.price / product.orig) * 100) : 0
  const vendor = VENDORS.find(v => v.id === product.vendorId)

  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ cursor:'pointer', animation:`fadeUp 0.5s ease ${delay}ms both` }}>
      <div style={{ background: product.image ? C.cloud : (product.cardColor || C.cloud), aspectRatio:'3/4', overflow:'hidden', position:'relative' }}>
        {product.image ? (
          <img src={product.image} alt={product.name} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)', transform: hov ? 'scale(1.05)' : 'scale(1)' }} />
        ) : (
          <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:10, transition:'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)', transform: hov ? 'scale(1.05)' : 'scale(1)' }}>
            <div style={{ fontSize:52 }}>{product.emoji || '📦'}</div>
            <div style={{ fontSize:11, fontWeight:500, color:'rgba(255,255,255,0.5)', textAlign:'center', padding:'0 16px', lineHeight:1.4 }}>{product.name}</div>
          </div>
        )}
        {product.badge && <div style={{ position:'absolute', top:10, left:10, background: BADGE_BG[product.badge] || C.aloe, color:C.ink, fontSize:10, fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', padding:'4px 10px', borderRadius:9999 }}>{product.badge}</div>}
        {vendorView ? (hov && <button style={{ position:'absolute', top:8, right:8, width:30, height:30, borderRadius:'50%', background:'rgba(255,255,255,0.95)', display:'flex', alignItems:'center', justifyContent:'center', border:'none', cursor:'pointer' }}><Edit /></button>) : (
          <button onClick={e => { e.stopPropagation(); onWishlist(product.id) }} style={{ position:'absolute', top:8, right:8, width:32, height:32, borderRadius:'50%', background:'rgba(255,255,255,0.95)', display:'flex', alignItems:'center', justifyContent:'center', opacity: hov || wishlisted ? 1 : 0, transition:'opacity 0.2s', border:'none', cursor:'pointer' }}><Heart f={wishlisted} /></button>
        )}
        {!vendorView && <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'0 10px 10px', transform: hov ? 'translateY(0)' : 'translateY(110%)', transition:'transform 0.25s cubic-bezier(0.25,0.46,0.45,0.94)' }}><button style={{ width:'100%', background:C.ink, color:'#fff', fontSize:12, fontWeight:500, padding:'10px', borderRadius:9999, border:'none', cursor:'pointer', letterSpacing:'0.03em' }}>Quick Add +</button></div>}
      </div>
      <div style={{ paddingTop:10 }}>
        {product.colors && product.colors.length > 0 && (
          <div style={{ display:'flex', gap:4, marginBottom:7, alignItems:'center' }}>
            {product.colors.slice(0,4).map((c,i) => <Swatch key={i} color={c} />)}
            <span style={{ fontSize:11, color:C.stone, marginLeft:2 }}>{product.colors.length} {product.colors.length===1?'color':'colors'}</span>
          </div>
        )}
        <div style={{ fontSize:13, fontWeight:500, marginBottom:2, lineHeight:1.35 }}>{product.name}</div>
        <div style={{ fontSize:11, color:C.mute, marginBottom:3 }}>{product.label}</div>
        {vendor && !vendorView && <div style={{ fontSize:11, color:C.stone, marginBottom:5 }}>by {vendor.name}</div>}
        {vendorView && <div style={{ fontSize:11, color:C.mute, marginBottom:5, textTransform:'capitalize' }}>{product.cat} · {product.sub}</div>}
        <div style={{ display:'flex', gap:6, alignItems:'baseline' }}>
          <span style={{ fontSize:14, fontWeight:600, color: sale ? C.sale : C.ink }}>${product.price.toFixed(2)}</span>
          {sale && <><span style={{ fontSize:12, color:C.stone, textDecoration:'line-through' }}>${product.orig.toFixed(2)}</span><span style={{ fontSize:12, fontWeight:500, color:C.sale }}>{pct}% off</span></> }
        </div>
      </div>
    </div>
  )
}