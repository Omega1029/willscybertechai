/*
  # Email Subscriptions Table

  1. New Tables
    - `email_subscriptions`
      - `id` (bigint, primary key)
      - `email` (text, unique, not null)
      - `subscribed_at` (timestamp)
      - `is_active` (boolean, default true)
      - `unsubscribe_token` (uuid, for future unsubscribe functionality)

  2. Security
    - Enable RLS on `email_subscriptions` table
    - Add policy for inserting new subscriptions (public access)
    - Add policy for viewing subscriptions (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS email_subscriptions (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  unsubscribe_token uuid DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to subscribe (insert)
CREATE POLICY "Anyone can subscribe to newsletter"
  ON email_subscriptions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can view subscriptions (for admin purposes)
CREATE POLICY "Authenticated users can view subscriptions"
  ON email_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_email ON email_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_active ON email_subscriptions(is_active);