import cronstrue from 'cronstrue'
import parser from 'cron-parser'
import dayjs from 'dayjs'

const MAX_NEXT_EXECUTIONS = 10

export const getCronDescription = (cron = '* * * * * *') => {
  try {
    const interval = parser.parseExpression('* * * * * *')
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
        const item = {
          date: dayjs(obj.toString()).format('DD-MM-YYYY'),
          hour: dayjs(obj.toString()).format('HH:mm:ss')
        }
        nextExecutions.push(item)
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
