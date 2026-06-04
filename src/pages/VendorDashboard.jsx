import { useState } from 'react'
import { C, VENDORS, PRODUCTS, MY_VENDOR_ID, CAT_META, RECENT_ORDERS } from '../data.js'
import { Plus, Box, Dollar, Store, Trend, Star, Close, Edit } from '../Icons.jsx'
import ProductCard from '../components/ProductCard.jsx'

function StarRating({ rating }) {
  return <div style={{ display:'flex', gap:1 }}>{[1,2,3,4,5].map(i => <Star key={i} f={i<=Math.round(rating)} />)}</div>
}

function AddProductModal({ onClose }) {
  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:500, animation:'fadeIn 0.15s ease' }} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{ background:C.canvas, borderRadius:10, padding:36, width:520, maxWidth:'90vw', boxShadow:'0 28px 72px rgba(0,0,0,0.22)', animation:'slideDown 0.2s ease' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:28 }}>
          <h2 style={{ fontSize:20, fontWeight:600 }}>Add New Product</h2>
          <button onClick={onClose} style={{ background:'none', border:'none', cursor:'pointer', color:C.mute }}><Close /></button>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          {[{label:'Product Name',placeholder:'e.g. Classic White Sneaker',type:'text'},{label:'Price ($)',placeholder:'0.00',type:'number'},{label:'Original Price ($) — leave blank if no discount',placeholder:'0.00',type:'number'}].map(({label,placeholder,type}) => (
            <div key={label}>
              <div style={{ fontSize:13, fontWeight:500, marginBottom:6 }}>{label}</div>
              <input type={type} placeholder={placeholder} style={{ width:'100%', padding:'10px 14px', borderRadius:8, border:`1px solid ${C.hairline}`, fontSize:14, outline:'none', transition:'border-color 0.15s' }} onFocus={e=>e.target.style.borderColor=C.ink} onBlur={e=>e.target.style.borderColor=C.hairline}/>
            </div>
          ))}
          <div>
            <div style={{ fontSize:13, fontWeight:500, marginBottom:6 }}>Category</div>
            <select style={{ width:'100%', padding:'10px 14px', borderRadius:8, border:`1px solid ${C.hairline}`, fontSize:14, outline:'none', background:C.canvas, cursor:'pointer' }}>
              <option value="">Select a category…</option>
              {Object.values(CAT_META).map(cat => (
                <optgroup key={cat.id} label={cat.label}>
                  {cat.subcategories.filter(s=>s.id!=='all').map(sub => <option key={sub.id} value={`${cat.id}/${sub.id}`}>{sub.label}</option>)}
                </optgroup>
              ))}
            </select>
          </div>
          <div>
            <div style={{ fontSize:13, fontWeight:500, marginBottom:6 }}>Product Image</div>
            <div style={{ border:`2px dashed ${C.hairline}`, borderRadius:8, padding:'32px 24px', textAlign:'center', cursor:'pointer', color:C.stone, fontSize:13, transition:'all 0.15s' }} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.ink;e.currentTarget.style.color=C.ink}} onMouseLeave={e=>{e.currentTarget.style.borderColor=C.hairline;e.currentTarget.style.color=C.stone}}>
              <div style={{ fontSize:28, marginBottom:8 }}>↑</div>
              Click to upload or drag &amp; drop<br/>
              <span style={{ fontSize:11, marginTop:4, display:'block' }}>JPG, PNG, WEBP up to 10MB</span>
            </div>
          </div>
        </div>
        <div style={{ display:'flex', gap:10, marginTop:28 }}>
          <button onClick={onClose} style={{ flex:1, padding:'12px', borderRadius:9999, background:C.cloud, border:'none', cursor:'pointer', fontSize:14, fontWeight:500 }}>Cancel</button>
          <button style={{ flex:2, padding:'12px', borderRadius:9999, background:C.ink, color:'#fff', border:'none', cursor:'pointer', fontSize:14, fontWeight:500 }}>Publish Product</button>
        </div>
      </div>
    </div>
  )
}

export default function VendorDashboard() {
  const vendor     = VENDORS.find(v => v.id === MY_VENDOR_ID)
  const myProducts = PRODUCTS.filter(p => p.vendorId === MY_VENDOR_ID)
  const [modal, setModal] = useState(false)

  const stats = [
    { label:"Today's Orders",  value:vendor.orders,                         icon:<Box/>,    bg:'#f0fdf4', accent:'#22c55e' },
    { label:'Total Revenue',   value:`$${vendor.revenue.toLocaleString()}`,  icon:<Dollar/>, bg:'#fefce8', accent:'#eab308' },
    { label:'Active Listings', value:myProducts.length,                      icon:<Store/>,  bg:'#eff6ff', accent:'#3b82f6' },
    { label:'Avg. Rating',     value:`${vendor.rating} ★`,                   icon:<Trend/>,  bg:'#fdf4ff', accent:'#a855f7' },
  ]

  return (
    <div style={{ background:C.cloud, minHeight:'80vh' }}>
      <div style={{ background:C.canvas, borderBottom:`1px solid ${C.hairline}`, padding:'28px 40px' }}>
        <div style={{ maxWidth:1440, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div>
            <div style={{ fontSize:11, fontWeight:600, letterSpacing:'0.1em', color:C.mute, textTransform:'uppercase', marginBottom:6 }}>Vendor Dashboard</div>
            <h1 style={{ fontSize:26, fontWeight:600, letterSpacing:'-0.01em' }}>{vendor.name}</h1>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginTop:6 }}>
              <StarRating rating={vendor.rating} />
              <span style={{ fontSize:13, color:C.mute }}>{vendor.rating} · {vendor.totalSales.toLocaleString()} total sales</span>
            </div>
          </div>
          <button onClick={() => setModal(true)} style={{ display:'flex', alignItems:'center', gap:8, background:C.ink, color:'#fff', fontSize:14, fontWeight:500, padding:'12px 24px', borderRadius:9999, border:'none', cursor:'pointer', transition:'background 0.15s' }} onMouseEnter={e=>e.currentTarget.style.background='#333'} onMouseLeave={e=>e.currentTarget.style.background=C.ink}>
            <Plus /> Add New Product
          </button>
        </div>
      </div>
      <div style={{ maxWidth:1440, margin:'0 auto', padding:'32px 40px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16, marginBottom:32 }}>
          {stats.map(({label,value,icon,bg,accent}) => (
            <div key={label} style={{ background:C.canvas, border:`1px solid ${C.hairline}`, borderRadius:10, padding:'20px 22px', display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
              <div>
                <div style={{ fontSize:12, fontWeight:500, color:C.mute, marginBottom:10 }}>{label}</div>
                <div style={{ fontSize:26, fontWeight:600, letterSpacing:'-0.02em' }}>{value}</div>
              </div>
              <div style={{ background:bg, padding:10, borderRadius:8, color:accent }}>{icon}</div>
            </div>
          ))}
        </div>
        <div style={{ background:C.canvas, border:`1px solid ${C.hairline}`, borderRadius:10, marginBottom:16 }}>
          <div style={{ padding:'18px 24px', borderBottom:`1px solid ${C.hairline}`, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <h2 style={{ fontSize:16, fontWeight:600 }}>My Listings</h2>
            <span style={{ fontSize:13, color:C.mute }}>{myProducts.length} active products</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'24px 16px', padding:24 }}>
            {myProducts.map((p,i) => <ProductCard key={p.id} product={p} vendorView delay={i*50} />)}
          </div>
        </div>
        <div style={{ background:C.canvas, border:`1px solid ${C.hairline}`, borderRadius:10, overflow:'hidden' }}>
          <div style={{ padding:'18px 24px', borderBottom:`1px solid ${C.hairline}` }}>
            <h2 style={{ fontSize:16, fontWeight:600 }}>Recent Orders</h2>
          </div>
          <table style={{ width:'100%', borderCollapse:'collapse' }}>
            <thead>
              <tr style={{ background:C.cloud }}>
                {['Order ID','Product','Customer','Date','Amount','Status'].map(h => (
                  <th key={h} style={{ padding:'10px 20px', fontSize:11, fontWeight:600, letterSpacing:'0.06em', textTransform:'uppercase', color:C.mute, textAlign:'left', borderBottom:`1px solid ${C.hairline}` }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RECENT_ORDERS.map(row => (
                <tr key={row.id} style={{ borderBottom:`1px solid ${C.hairline}`, transition:'background 0.1s' }} onMouseEnter={e=>e.currentTarget.style.background=C.cloud} onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
                  <td style={{ padding:'12px 20px', fontSize:13, fontWeight:600 }}>{row.id}</td>
                  <td style={{ padding:'12px 20px', fontSize:13 }}>{row.product}</td>
                  <td style={{ padding:'12px 20px', fontSize:13, color:C.mute }}>{row.customer}</td>
                  <td style={{ padding:'12px 20px', fontSize:13, color:C.mute }}>{row.date}</td>
                  <td style={{ padding:'12px 20px', fontSize:13, fontWeight:600 }}>{row.amount}</td>
                  <td style={{ padding:'12px 20px' }}><span style={{ fontSize:11, fontWeight:600, padding:'4px 10px', borderRadius:9999, background:row.sc+'22', color:row.sc, letterSpacing:'0.04em' }}>{row.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {modal && <AddProductModal onClose={() => setModal(false)} />}
    </div>
  )
}