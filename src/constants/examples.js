export const CRON_EXAMPLES = [
  {
    expression: '* * * * *',
    schedule: 'Every minute'
  },
  {
    expression: '0 * * * *',
    schedule: 'Every hour'
  },
  {
    expression: '0 0 * * *',
    schedule: 'Every day at 12:00 AM'
  },
  {
    expression: '0 10 * * ? *',
    schedule: 'Every day at 10:00 AM'
  },
  {
    expression: '0 18 ? * MON-FRI *',
    schedule: 'Every Monday through Friday at 6:00 PM'
  },
  {
    expression: '0/15 * * * ? *',
    schedule: 'Run every 15 minutes'
  },
  {
    expression: '0/5 8-17 ? * MON-FRI *',
    schedule: 'Run every 5 minutes Monday through Friday between 8:00 AM and 5:55 PM'
  },
  {
    expression: '0 0 1 * *',
    schedule: 'At 12:00 AM, on day 1 of the month'
  }
]
