import { getCronDescription } from './utils/converter'
import { CRON_EXAMPLES } from './constants/examples'

const cronExpression = document.querySelector('#cronExpression')
const resultExpression = document.querySelector('.ct-result-string span')
const tableExecutions = document.querySelector('.table-executions').getElementsByTagName('tbody')[0]
const tableExamples = document.querySelector('.table-examples').getElementsByTagName('tbody')[0]

cronExpression.addEventListener('paste', e => {
  cronExpression.value = ''
  setTimeout(() => {
    const { status, ...data } = getCronDescription(e.target.value)
    if (status) {
      resultExpression.classList.remove('invalid')
      cronExpression.classList.remove('invalid')
      const { listExecutions, resultString } = data
      resultExpression.textContent = resultString
      if (listExecutions.length > 0) {
        let listDates = ''
        listExecutions.forEach(item => {
          listDates += `<tr><td>${ item.date }</td><td>${ item.hour }</td></tr>`
        })

        tableExecutions.innerHTML = listDates
      }
    } else {
      resultExpression.textContent = 'Invalid expression'
      resultExpression.classList.add('invalid')
      cronExpression.classList.add('invalid')
    }
  }, 500)
})

;(() => {
  let rows = ''
  CRON_EXAMPLES.forEach(example => {
    rows += `<tr><td class>${ example.expression }</td><td>${ example.schedule }</td></tr>`
  })
  tableExamples.innerHTML = rows
})()
