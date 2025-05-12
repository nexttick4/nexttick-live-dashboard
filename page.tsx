'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function LiveSignals() {
  const [signals, setSignals] = useState([])

  useEffect(() => {
    const fetchSignals = async () => {
      const { data, error } = await supabase
        .from('signals')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20)
      if (!error && data) setSignals(data)
    }

    fetchSignals()
    const interval = setInterval(fetchSignals, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">📡 Live Signals</h1>
      {signals.length === 0 ? (
        <p className="text-gray-400">No signals found.</p>
      ) : (
        <div className="space-y-4">
          {signals.map((s) => (
            <div key={s.id} className="bg-gray-800 rounded-lg p-4 shadow">
              <div className="text-sm text-gray-500">
                {new Date(s.created_at).toLocaleString()}
              </div>
              <div className="text-lg font-semibold text-blue-300">{s.headline}</div>
              <div className="text-sm text-gray-300">{s.summary}</div>
              <div className="text-xs text-gray-400 mt-2">
                Source: <b>{s.source}</b> | Sector: <b>{s.sector}</b> | Confidence: <b>{s.confidence}%</b>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
