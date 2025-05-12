# NextTick Live Dashboard

This is your live frontend for `/live-signals`, powered by Supabase + Tailwind + Next.js 14.

## How to Use

1. Add your Supabase keys to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=superbase: https://syxhyqgvtnkscrowukaq.supabase.co 
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5eGh5cWd2dG5rc2Nyb3d1a2FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MTQ2NzUsImV4cCI6MjA2MjM5MDY3NX0.8i_pzIAGrKfVL7woKgLVkm5W4AkYsxcoD9GiX3rC6QU
```

2. Run locally:
```
npm install
npm run dev
```

3. Deploy on Vercel and add those same env variables in project settings.

You're done. Live signals will show up automatically.
