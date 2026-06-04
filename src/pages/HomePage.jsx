import { useState } from 'react'
import { C, CAT_META, PRODUCTS, VENDORS } from '../data.js'
import ProductCard from '../components/ProductCard.jsx'
import Ticker from '../components/Ticker.jsx'

/* Images per category: 3 → mosaic, 1 → full-bleed, 0 → emoji */
const DEPT_IMAGES = {
  clothes:     ['/images/red-dress.png', '/images/suit.png', '/images/jeans.png'],
  shoes:       ['/images/white-shoes.png', '/images/grey-shoes.png', '/images/brown-boots.png'],
  beauty:      ['/images/serum.png', '/images/palette.png', '/images/lipstick.png'],
  electronics: ['/images/pad-12-ultra.png'],
  sports:      ['/images/sports-outdoors.png'],
  home:        ['/images/home-living.png'],
  toys:        ['/images/toys-kids.png'],
  food:        ['/images/food-grocery.png'],
}

function DeptTile({ cat, navigate }) {
  const [hov, setHov] = useState(false)
  const count = PRODUCTS.filter(p => p.cat === cat.id).length
  const imgs  = DEPT_IMAGES[cat.id] || []

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => navigate('category', { category:cat.id, sub:'all' })}
      style={{
        cursor:'pointer', borderRadius:8, overflow:'hidden',
        background: cat.color,
        transition:'transform 0.2s ease, box-shadow 0.2s ease',
        transform: hov ? 'translateY(-3px)' : 'none',
        boxShadow: hov ? '0 10px 32px rgba(0,0,0,0.22)' : '0 2px 10px rgba(0,0,0,0.1)',
      }}
    >
      {/* Image area */}
      {imgs.length >= 3 ? (
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gridTemplateRows:'1fr 1fr', height:180, gap:1 }}>
          <div style={{ gridRow:'1/3', overflow:'hidden' }}>
            <img src={imgs[0]} alt="" style={{
              width:'100%', height:'100%', objectFit:'cover', opacity:0.9,
              transition:'transform 0.5s ease',
              transform: hov ? 'scale(1.06)' : 'scale(1)',
            }}/>
          </div>
          {imgs.slice(1).map(src => (
            <div key={src} style={{ overflow:'hidden' }}>
              <img src={src} alt="" style={{
                width:'100%', height:'100%', objectFit:'cover', opacity:0.9,
                transition:'transform 0.5s ease',
                transform: hov ? 'scale(1.06)' : 'scale(1)',
              }}/>
            </div>
          ))}
        </div>
      ) : imgs.length === 1 ? (
        <div style={{ height:180, overflow:'hidden' }}>
          <img src={imgs[0]} alt="" style={{
            width:'100%', height:'100%', objectFit:'cover', opacity:0.9,
            transition:'transform 0.5s ease',
            transform: hov ? 'scale(1.06)' : 'scale(1)',
          }}/>
        </div>
      ) : (
        <div style={{
          height:180, display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:58,
          transition:'transform 0.3s ease',
          transform: hov ? 'scale(1.1)' : 'scale(1)',
        }}>
          {cat.icon}
        </div>
      )}

      {/* Label bar */}
      <div style={{ padding:'12px 14px 14px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div>
            <div style={{ fontSize:13, fontWeight:600, color:'#fff', lineHeight:1.2 }}>{cat.label}</div>
            <div style={{ fontSize:10, color:'rgba(255,255,255,0.4)', marginTop:2 }}>{count} products</div>
          </div>
          <div style={{
            fontSize:11, fontWeight:600,
            color: hov ? cat.color : 'rgba(255,255,255,0.75)',
            background: hov ? cat.accent : 'rgba(255,255,255,0.12)',
            padding:'4px 11px', borderRadius:9999,
            transition:'all 0.2s',
            whiteSpace:'nowrap',
          }}>
            Shop →
          </div>
        </div>
      </div>
    </div>
  )
}

function VendorCard({ vendor }) {
  const [hov, setHov] = useState(false)
  const primaryCat = CAT_META[vendor.cats[0]]

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border:`1px solid ${C.hairline}`, borderRadius:8,
        padding:'18px 20px', cursor:'pointer',
        transition:'all 0.15s',
        boxShadow: hov ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
        transform: hov ? 'translateY(-2px)' : 'none',
      }}
    >
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12 }}>
        <div style={{
          width:42, height:42, borderRadius:8,
          background: primaryCat?.color || C.ink,
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:20,
        }}>
          {primaryCat?.icon || '🏪'}
        </div>
        {vendor.verified && (
          <span style={{
            fontSize:10, fontWeight:600, color:'#166534',
            background:'#dcfce7', padding:'3px 8px', borderRadius:9999,
          }}>✓ Verified</span>
        )}
      </div>
      <div style={{ fontSize:14, fontWeight:600, marginBottom:3 }}>{vendor.name}</div>
      <div style={{ fontSize:11, color:C.mute, marginBottom:12 }}>
        {vendor.cats.map(c => CAT_META[c]?.label).join(' · ')}
      </div>
      <div style={{ display:'flex', gap:16 }}>
        <div>
          <div style={{ fontSize:13, fontWeight:600 }}>⭐ {vendor.rating}</div>
          <div style={{ fontSize:10, color:C.stone, marginTop:1 }}>Rating</div>
        </div>
        <div>
          <div style={{ fontSize:13, fontWeight:600 }}>{vendor.totalSales.toLocaleString()}</div>
          <div style={{ fontSize:10, color:C.stone, marginTop:1 }}>Sales</div>
        </div>
        <div>
          <div style={{ fontSize:13, fontWeight:600 }}>{vendor.orders}</div>
          <div style={{ fontSize:10, color:C.stone, marginTop:1 }}>This month</div>
        </div>
      </div>
    </div>
  )
}

function Campaign() {
  return (
    <section style={{ background:C.ink, color:'#fff', padding:'64px 40px', position:'relative', overflow:'hidden' }}>
      <div style={{
        position:'absolute', inset:0,
        backgroundImage:'radial-gradient(ellipse 35% 60% at 88% 50%, rgba(193,251,212,0.07) 0%, transparent 70%)',
        pointerEvents:'none',
      }}/>
      <div style={{ maxWidth:1440, margin:'0 auto' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:48, flexWrap:'wrap' }}>
          <div style={{ maxWidth:480 }}>
            <div style={{ fontSize:11, fontWeight:600, letterSpacing:'0.14em', color:C.aloe, textTransform:'uppercase', marginBottom:16 }}>
              Members Only
            </div>
            <h2 style={{ fontSize:'clamp(36px,5vw,58px)', fontWeight:200, lineHeight:0.94, letterSpacing:'-0.025em', marginBottom:20 }}>
              UP TO 60%<br/>
              <em style={{ fontStyle:'italic', color:'rgba(255,255,255,0.52)' }}>off for</em><br/>
              MEMBERS
            </h2>
            <p style={{ fontSize:15, lineHeight:1.75, color:'rgba(255,255,255,0.38)', maxWidth:320, marginBottom:30 }}>
              Join VELA for exclusive prices, early access across all departments, and free returns on every order.
            </p>
            <button style={{
              background:C.aloe, color:C.ink,
              fontSize:14, fontWeight:600,
              padding:'12px 28px', borderRadius:9999, border:'none', cursor:'pointer',
            }}>
              Join Free
            </button>
          </div>
          <div style={{ display:'flex', gap:'clamp(24px,4vw,52px)', flexWrap:'wrap' }}>
            {[['5M+','Members'],['50K+','Products'],['9','Categories'],['190+','Countries']].map(([n,l]) => (
              <div key={n} style={{ textAlign:'center', minWidth:60 }}>
                <div style={{ fontSize:'clamp(28px,3vw,40px)', fontWeight:200, letterSpacing:'-0.03em', marginBottom:6, lineHeight:1 }}>{n}</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,0.32)', fontWeight:500 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage({ navigate, wishlistIds, toggleWishlist }) {
  const featured   = PRODUCTS.filter(p => p.badge === 'Best Seller' || p.badge === 'Trending').slice(0, 8)
  const newArrivals = PRODUCTS.filter(p => p.badge === 'New In').slice(0, 4)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{ background:C.ink, color:'#fff', position:'relative', overflow:'hidden' }}>
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:'radial-gradient(ellipse 55% 80% at 72% 50%, rgba(193,251,212,0.07) 0%, transparent 65%)',
          pointerEvents:'none',
        }}/>

        <div className="hero-inner">
          {/* Left: copy */}
          <div>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              fontSize:11, fontWeight:600, letterSpacing:'0.14em',
              color:C.aloe, textTransform:'uppercase', marginBottom:24,
            }}>
              <span style={{
                width:6, height:6, borderRadius:'50%',
                background:C.aloe, display:'inline-block', flexShrink:0,
              }}/>
              9 Categories · 1,000s of Products
            </div>

            <h1 className="hero-h1">
              SHOP<br/>
              <em style={{ fontStyle:'italic', fontWeight:200, color:'rgba(255,255,255,0.50)' }}>everything</em><br/>
              ONE PLACE
            </h1>

            <p style={{
              fontSize:15, lineHeight:1.8,
              color:'rgba(255,255,255,0.38)',
              maxWidth:340, marginBottom:0,
            }}>
              Fashion, electronics, beauty, home, sports and more. Verified sellers worldwide, free returns always.
            </p>

            {/* CTA buttons — clear 3-level hierarchy */}
            <div className="hero-buttons">
              {/* Primary */}
              <button
                className="btn-primary"
                onClick={() => navigate('category', { category:'electronics', sub:'all' })}
                style={{
                  background:'#fff', color:C.ink,
                  fontSize:14, fontWeight:600,
                  padding:'13px 28px', borderRadius:9999,
                  border:'2px solid #fff', cursor:'pointer',
                  transition:'opacity 0.15s',
                  flexShrink:0,
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Shop Electronics
              </button>

              {/* Secondary */}
              <button
                className="btn-secondary"
                onClick={() => navigate('category', { category:'clothes', sub:'all' })}
                style={{
                  background:'transparent', color:'#fff',
                  fontSize:14, fontWeight:500,
                  padding:'13px 28px', borderRadius:9999,
                  border:'1.5px solid rgba(255,255,255,0.40)',
                  cursor:'pointer', transition:'border-color 0.15s, background 0.15s',
                  flexShrink:0,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.8)'; e.currentTarget.style.background='rgba(255,255,255,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.40)'; e.currentTarget.style.background='transparent' }}
              >
                Shop Fashion
              </button>

              {/* Tertiary — text only, hidden on mobile */}
              <button
                className="hero-tertiary"
                onClick={() => navigate('category', { category:'beauty', sub:'all' })}
                style={{
                  background:'transparent', color:'rgba(255,255,255,0.45)',
                  fontSize:13, fontWeight:400,
                  padding:'13px 4px', border:'none',
                  cursor:'pointer', transition:'color 0.15s',
                  display:'flex', alignItems:'center', gap:4,
                  flexShrink:0,
                }}
                onMouseEnter={e => e.currentTarget.style.color='rgba(255,255,255,0.85)'}
                onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.45)'}
              >
                Explore all →
              </button>
            </div>
          </div>

          {/* Right: image mosaic — hidden on mobile */}
          <div className="hero-mosaic">
            {[
              { img:'/images/white-shoes.png' },
              { img:'/images/red-dress.png' },
              { img:'/images/pad-12-ultra.png' },
              { img:'/images/brown-boots.png' },
              { img:'/images/serum.png' },
              { img:'/images/camel-dress.png' },
            ].map((tile, i) => (
              <div key={i} style={{
                background:'#1a1a1a',
                aspectRatio:'3/4', borderRadius:6, overflow:'hidden',
              }}>
                <img src={tile.img} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', opacity:0.9 }}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Ticker />

      {/* ── Departments ───────────────────────────────────────────────────── */}
      <section className="page-section">
        <div className="section-header">
          <h2 style={{ fontSize:20, fontWeight:600, letterSpacing:'-0.01em' }}>Shop by Department</h2>
          <span style={{ fontSize:13, color:C.mute }}>9 categories</span>
        </div>
        <div className="dept-grid">
          {Object.values(CAT_META).map(cat => (
            <DeptTile key={cat.id} cat={cat} navigate={navigate} />
          ))}
        </div>
      </section>

      {/* ── Trending ──────────────────────────────────────────────────────── */}
      <section className="page-section">
        <div className="section-header">
          <h2 style={{ fontSize:20, fontWeight:600, letterSpacing:'-0.01em' }}>Trending Right Now</h2>
          <span style={{ fontSize:13, color:C.mute }}>Across all categories</span>
        </div>
        <div className="product-grid">
          {featured.map((p, i) => (
            <ProductCard
              key={p.id} product={p}
              wishlisted={wishlistIds.has(p.id)}
              onWishlist={toggleWishlist}
              delay={i * 55}
            />
          ))}
        </div>
      </section>

      {/* ── Top Sellers ───────────────────────────────────────────────────── */}
      <section className="page-section">
        <div className="section-header">
          <h2 style={{ fontSize:20, fontWeight:600, letterSpacing:'-0.01em' }}>Top Sellers This Month</h2>
          <button style={{
            fontSize:13, fontWeight:500, color:C.ink,
            background:'none', border:`1px solid ${C.hairline}`,
            padding:'6px 14px', borderRadius:9999, cursor:'pointer',
            whiteSpace:'nowrap',
          }}>
            Browse All →
          </button>
        </div>
        <div className="vendor-grid">
          {VENDORS.filter(v => v.verified).slice(0, 6).map(v => (
            <VendorCard key={v.id} vendor={v} />
          ))}
        </div>
      </section>

      {/* ── New Arrivals ──────────────────────────────────────────────────── */}
      <section className="page-section" style={{ paddingBottom:0 }}>
        <div className="section-header">
          <h2 style={{ fontSize:20, fontWeight:600, letterSpacing:'-0.01em' }}>New Arrivals</h2>
          <span style={{ fontSize:13, color:C.mute }}>Just dropped</span>
        </div>
        <div className="product-grid">
          {newArrivals.map((p, i) => (
            <ProductCard
              key={p.id} product={p}
              wishlisted={wishlistIds.has(p.id)}
              onWishlist={toggleWishlist}
              delay={i * 55}
            />
          ))}
        </div>
      </section>

      <div style={{ marginTop:56 }}>
        <Campaign />
      </div>
    </>
  )
}
