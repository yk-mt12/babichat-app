import formatDate from './formatDate'

function daysAgo(time: Date) {
  const now = new Date()
  let diffTime = now.getFullYear() - time.getFullYear()
  if (diffTime == 0) {
    diffTime = now.getMonth() - time.getMonth()
    if (diffTime == 0) {
      diffTime = now.getDate() - time.getDate()
      if (diffTime == 0) {
        diffTime = now.getHours() - time.getHours()
        if (diffTime == 0) {
          diffTime = now.getMinutes() - time.getMinutes()
          if (diffTime == 0) {
            diffTime = now.getSeconds() - time.getSeconds()
            return `${diffTime}s`
          }
          return `${diffTime}m`
        }
        return `${diffTime}h`
      } else if (diffTime >= 7) {
        return formatDate(time, 'yyyy/MM/dd')
      }
      return `${diffTime}d`
    }
  }
}

export default daysAgo
