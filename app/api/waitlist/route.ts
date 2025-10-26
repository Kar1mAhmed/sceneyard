import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as {
      email: string;
      referralCode?: string;
      features?: string[];
      pricingStyle?: string;
      demoRating?: number;
      monthlyBudget?: string;
      completed?: boolean;
    };
    const { email, referralCode, features, pricingStyle, demoRating, monthlyBudget, completed } = body;

    // Get D1 database from Cloudflare context
    const { env } = await getCloudflareContext();
    const db = env.SCENERYARD_DB as D1Database;

    if (!db) {
      console.error('Database binding not found');
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      );
    }

    console.log('Saving waitlist data:', { email, completed });

    // Check if user exists
    const existing = await db
      .prepare('SELECT * FROM waitlist_responses WHERE email = ?')
      .bind(email)
      .first();

    if (existing) {
      // Update existing record
      await db
        .prepare(`
          UPDATE waitlist_responses 
          SET 
            referral_code = COALESCE(?, referral_code),
            features = COALESCE(?, features),
            pricing_style = COALESCE(?, pricing_style),
            demo_rating = COALESCE(?, demo_rating),
            monthly_budget = COALESCE(?, monthly_budget),
            completed = COALESCE(?, completed),
            updated_at = CURRENT_TIMESTAMP
          WHERE email = ?
        `)
        .bind(
          referralCode || null,
          features ? JSON.stringify(features) : null,
          pricingStyle || null,
          demoRating || null,
          monthlyBudget || null,
          completed || null,
          email
        )
        .run();

      console.log('Updated existing user:', email);
      return NextResponse.json({ 
        success: true, 
        message: 'Progress saved',
        existing: true 
      });
    } else {
      // Insert new record
      await db
        .prepare(`
          INSERT INTO waitlist_responses (
            email, 
            referral_code, 
            features, 
            pricing_style, 
            demo_rating, 
            monthly_budget,
            completed
          ) VALUES (?, ?, ?, ?, ?, ?, ?)
        `)
        .bind(
          email,
          referralCode || null,
          features ? JSON.stringify(features) : null,
          pricingStyle || null,
          demoRating || null,
          monthlyBudget || null,
          completed || 0
        )
        .run();

      console.log('Created new user:', email);
      return NextResponse.json({ 
        success: true, 
        message: 'Email saved',
        existing: false 
      });
    }
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Failed to save waitlist data', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { env } = await getCloudflareContext();
    const db = env.SCENERYARD_DB as D1Database;

    if (!db) {
      console.error('Database binding not found');
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      );
    }

    // Get all waitlist responses
    const { results } = await db
      .prepare('SELECT * FROM waitlist_responses ORDER BY created_at DESC')
      .all();

    return NextResponse.json({ 
      success: true, 
      data: results 
    });
  } catch (error) {
    console.error('Waitlist GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch waitlist data' },
      { status: 500 }
    );
  }
}
