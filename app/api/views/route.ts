import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS page_views (
      id SERIAL PRIMARY KEY,
      count INTEGER NOT NULL DEFAULT 0
    )
  `
  await sql`
    INSERT INTO page_views (id, count)
    VALUES (1, 0)
    ON CONFLICT (id) DO NOTHING
  `
}

export async function GET() {
  try {
    await ensureTable()
    const { rows } = await sql`SELECT count FROM page_views WHERE id = 1`
    return NextResponse.json({ count: rows[0]?.count ?? 0 })
  } catch (error) {
    console.error('Failed to get view count:', error)
    return NextResponse.json({ count: null }, { status: 500 })
  }
}

export async function POST() {
  try {
    await ensureTable()
    const { rows } = await sql`
      UPDATE page_views SET count = count + 1 WHERE id = 1 RETURNING count
    `
    return NextResponse.json({ count: rows[0].count })
  } catch (error) {
    console.error('Failed to increment view count:', error)
    return NextResponse.json({ count: null }, { status: 500 })
  }
}
