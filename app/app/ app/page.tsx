'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

type Signal = {
  id: number
  headline: string
  summary: string
  source: string
  confidence: number
  created_at: string
}

export default function Home() {
  const [signals, setSignals] = useState<Signal[]>([])

  useEffect(() => {
    const fetchSignals = async () => {
      const { data, error } = await supabase
        .from('signals')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10)

      if (error) console.error('Error fetching signals:', error)
      else setSignals(data || [])
    }

    fetchSignals()
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📈 Live Signals</h1>
      {signals.map(signal => (
        <div key={signal.id} style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #ccc' }}>
          <h3>{signal.headline}</h3>
          <p><strong>Confidence:</strong> {signal.confidence}%</p>
          <p><strong>Source:</strong> {signal.source}</p>
          <p><strong>Summary:</strong> {signal.summary}</p>
          <p style={{ fontSize: '0.8rem', color: '#777' }}>{new Date(signal.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}
