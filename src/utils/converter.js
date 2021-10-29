import cronstrue from 'cronstrue'
import parser from 'cron-parser'
import dayjs from 'dayjs'

const MAX_NEXT_EXECUTIONS = 8

export const getCronDescription = (cron = '* * * * * *') => {
  try {
    const interval = parser.parseExpression(cron)
    return {
      status: true,
      resultString: cronstrue.toString(cron, { verbose: true }),
      listExecutions: getNextExecutions(interval)
    }
  } catch (error) {
    return {
      status: false, msg: 'Invalid expression'
    }
  }
}

const getNextExecutions = (interval) => {
  const nextExecutions = []
  let i = 1
  try {
    while (i <= MAX_NEXT_EXECUTIONS) {
      try {
        const obj = interval.next()
        nextExecutions.push(dayjs(obj.toString()).format('DD-MM-YYYY HH:mm:ss'))
        i++
      } catch (e) {
        break
      }
    }
  } catch (err) {
    console.error('Error: ' + err.message)
  }

  return nextExecutions
}
