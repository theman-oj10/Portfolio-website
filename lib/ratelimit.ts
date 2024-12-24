// lib/ratelimit.ts
export class SimpleRateLimit {
  private attempts: Map<string, { count: number; reset: number }> = new Map()
  private readonly limit: number
  private readonly window: number // in milliseconds

  constructor(limit: number, windowInHours: number) {
    this.limit = limit
    this.window = windowInHours * 60 * 60 * 1000
  }

  async check(key: string) {
    const now = Date.now()
    const record = this.attempts.get(key)

    // Clean up expired records
    if (record && now > record.reset) {
      this.attempts.delete(key)
    }

    // Get current record or create new one
    const current = this.attempts.get(key) || { count: 0, reset: now + this.window }

    // Check if limit exceeded
    if (current.count >= this.limit) {
      return {
        success: false,
        remaining: 0,
        reset: current.reset
      }
    }

    // Update attempts
    this.attempts.set(key, {
      count: current.count + 1,
      reset: current.reset
    })

    return {
      success: true,
      remaining: this.limit - (current.count + 1),
      reset: current.reset
    }
  }
}

export const ratelimit = new SimpleRateLimit(3, 1) // 3 attempts per hour