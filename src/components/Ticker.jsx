import { C } from '../data.js'

const TEXT = 'SHOES · CLOTHES · FREE SHIPPING · NEW ARRIVALS · SALE · FREE RETURNS · MEMBERS ONLY · '

export default function Ticker() {
  return (
    <div style={{ background:C.aloe, height:34, overflow:'hidden', display:'flex', alignItems:'center' }}>
      <div style={{
        whiteSpace:'nowrap',
        animation:'marquee 28s linear infinite',
        fontSize:10, fontWeight:600, letterSpacing:'0.11em', color:C.ink,
        display:'flex',
      }}>
        {[0,1,2,3].map(i => <span key={i}>{TEXT}&nbsp;&nbsp;</span>)}
      </div>
    </div>
  )
}