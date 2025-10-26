-- Create waitlist responses table
CREATE TABLE IF NOT EXISTS waitlist_responses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  referral_code TEXT,
  features TEXT, -- JSON array of selected features
  pricing_style TEXT,
  demo_rating INTEGER,
  monthly_budget TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  completed BOOLEAN DEFAULT 0
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_email ON waitlist_responses(email);
CREATE INDEX IF NOT EXISTS idx_created_at ON waitlist_responses(created_at);
