import { useState } from 'react'
import { C, CAT_META, PRODUCTS } from '../data.js'
import ProductCard from '../components/ProductCard.jsx'

function Pill({ label, active, onClick }) {
  return (
    <button onClick={onClick} style={{
      fontSize:13, fontWeight:500,
      padding:'7px 16px', borderRadius:9999,
      background: active ? C.ink : C.canvas,
      color: active ? '#fff' : C.ink,
      border:`1px solid ${active ? C.ink : C.hairline}`,
      transition:'all 0.15s', cursor:'pointer', whiteSpace:'nowrap', flexShrink:0,
    }}>
      {label}
    </button>
  )
}

export default function CategoryPage({ activeCategory, setActiveCategory, wishlistIds, toggleWishlist }) {
  const { category, sub } = activeCategory
  const meta = CAT_META[category]
  const [sort, setSort] = useState('featured')
  const [priceFilter, setPriceFilter] = useState('all')

  const allInCat = PRODUCTS.filter(p => p.cat === category)
  const products = allInCat.filter(p => sub === 'all' || p.sub === sub)

  const priceFiltered = products.filter(p => {
    if (priceFilter === 'under50')   return p.price < 50
    if (priceFilter === '50to150')   return p.price >= 50 && p.price <= 150
    if (priceFilter === 'over150')   return p.price > 150
    if (priceFilter === 'sale')      return p.orig !== null
    return true
  })

  const sorted = [...priceFiltered].sort((a, b) => {
    if (sort === 'price-asc')  return a.price - b.price
    if (sort === 'price-desc') return b.price - a.price
    if (sort === 'sale')       return (b.orig ? 1 : 0) - (a.orig ? 1 : 0)
    if (sort === 'newest')     return (b.badge === 'New In' ? 1 : 0) - (a.badge === 'New In' ? 1 : 0)
    return 0
  })

  return (
    <div>
      {/* Category header */}
      <div style={{
        background: meta.color || C.ink,
        color:'#fff', padding:'clamp(24px,4vw,40px) clamp(16px,4vw,40px) clamp(20px,3vw,30px)',
        position:'relative', overflow:'hidden',
      }}>
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:`radial-gradient(ellipse 40% 70% at 85% 50%, ${meta.accent || C.aloe}15 0%, transparent 70%)`,
          pointerEvents:'none',
        }}/>
        <div style={{ maxWidth:1440, margin:'0 auto', display:'flex', alignItems:'flex-end', justifyContent:'space-between', position:'relative' }}>
          <div style={{ display:'flex', alignItems:'center', gap:16 }}>
            <div style={{ fontSize:42, lineHeight:1 }}>{meta.icon}</div>
            <div>
              <div style={{ fontSize:11, fontWeight:600, letterSpacing:'0.14em', color: meta.accent || C.aloe, textTransform:'uppercase', marginBottom:8 }}>
                {meta.label}
              </div>
              <h1 style={{ fontSize:'clamp(24px,4vw,42px)', fontWeight:200, letterSpacing:'-0.02em', lineHeight:1 }}>
                {meta.tagline}
              </h1>
            </div>
          </div>
          <div style={{ fontSize:13, color:'rgba(255,255,255,0.35)', paddingBottom:4 }}>
            {allInCat.length} products
          </div>
        </div>
      </div>

      {/* Subcategory chips */}
      <div style={{
        borderBottom:`1px solid ${C.hairline}`,
        padding:'13px 40px',
        display:'flex', gap:8,
        overflowX:'auto', scrollbarWidth:'none',
      }}>
        {meta.subcategories.map(s => (
          <Pill
            key={s.id} label={s.label}
            active={sub === s.id}
            onClick={() => setActiveCategory({ category, sub:s.id })}
          />
        ))}
      </div>

      {/* Filter + sort bar */}
      <div className="cat-filter-bar">
        <div className="cat-filter-inner">
          <div className="price-pills">
            <span style={{ fontSize:12, color:C.mute, whiteSpace:'nowrap' }}>Price:</span>
            {[
              ['all', 'All'],
              ['under50', 'Under $50'],
              ['50to150', '$50–$150'],
              ['over150', '$150+'],
              ['sale', 'On Sale'],
            ].map(([val, label]) => (
              <button
                key={val}
                onClick={() => setPriceFilter(val)}
                style={{
                  fontSize:12, fontWeight:500,
                  padding:'5px 11px', borderRadius:9999,
                  background: priceFilter === val ? C.ink : 'transparent',
                  color: priceFilter === val ? '#fff' : C.mute,
                  border:`1px solid ${priceFilter === val ? C.ink : C.hairline}`,
                  cursor:'pointer', transition:'all 0.12s', whiteSpace:'nowrap',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <div style={{ display:'flex', alignItems:'center', gap:10, flexShrink:0 }}>
            <span style={{ fontSize:12, color:C.mute, whiteSpace:'nowrap' }}>
              {sorted.length} item{sorted.length !== 1 ? 's' : ''}
            </span>
            <select
              value={sort} onChange={e => setSort(e.target.value)}
              style={{
                fontSize:12, fontWeight:500, color:C.ink,
                background:'none', border:`1px solid ${C.hairline}`,
                borderRadius:9999, padding:'5px 12px', cursor:'pointer', outline:'none',
              }}
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest First</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="sale">Sale First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth:1440, margin:'0 auto', padding:'28px 20px 64px' }}>
        {sorted.length === 0 ? (
          <div style={{ textAlign:'center', padding:'80px 0', color:C.stone }}>
            <div style={{ fontSize:48, marginBottom:14 }}>{meta.icon}</div>
            <div style={{ fontSize:16, fontWeight:500, marginBottom:8 }}>
              No products match your filters
            </div>
            <button
              onClick={() => { setActiveCategory({ category, sub:'all' }); setPriceFilter('all') }}
              style={{
                background:C.ink, color:'#fff', fontSize:13, fontWeight:500,
                padding:'10px 22px', borderRadius:9999, border:'none', cursor:'pointer', marginTop:8,
              }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="product-grid">
            {sorted.map((p, i) => (
              <ProductCard
                key={p.id} product={p}
                wishlisted={wishlistIds.has(p.id)}
                onWishlist={toggleWishlist}
                delay={i * 45}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
