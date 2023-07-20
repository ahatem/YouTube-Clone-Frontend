import { formatDistanceToNowStrict } from 'date-fns'

export function formatTime(seconds: number): string {
  const hours: number = Math.floor(seconds / 3600)
  const minutes: number = Math.floor((seconds % 3600) / 60)
  const remainingSeconds: number = seconds % 60

  let formattedTime: string = ''

  if (hours > 0) {
    formattedTime += `${hours}:`
  }

  formattedTime += `${minutes.toString().padStart(2, '0')}:${remainingSeconds
    .toString()
    .padStart(2, '0')}`
  return formattedTime
}

export function formatViews(views: number): string {
  if (views >= 1000000000) {
    return (views / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B'
  } else if (views >= 1000000) {
    return (views / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  } else {
    return views.toString()
  }
}

export function formatDate(timeString: string): string {
  return formatDistanceToNowStrict(new Date(timeString), { addSuffix: true })
}
