import { C } from '../data.js'

export default function UtilityBar({ userType, setUserType }) {
  return (
    <div style={{
      background:C.ink, color:'#fff',
      padding:'8px 40px',
      display:'flex', alignItems:'center', justifyContent:'space-between',
    }}>
      <div style={{ fontSize:11, fontWeight:500, letterSpacing:'0.08em' }}>
        FREE SHIPPING ON ORDERS OVER $49 · FREE RETURNS · SECURE CHECKOUT
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <span style={{ fontSize:11, color:'rgba(255,255,255,0.4)' }}>
          {userType === 'shopper' ? 'Browsing as Customer' : 'Managing as Vendor'}
        </span>
        <button
          onClick={() => setUserType(userType === 'shopper' ? 'vendor' : 'shopper')}
          style={{
            background:C.aloe, color:C.ink,
            fontSize:11, fontWeight:600, letterSpacing:'0.05em',
            padding:'4px 12px', borderRadius:9999, border:'none', cursor:'pointer',
          }}
        >
          {userType === 'shopper' ? '→ Vendor Mode' : '→ Customer Mode'}
        </button>
      </div>
    </div>
  )
}
