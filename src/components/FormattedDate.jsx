const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

export function FormattedDate({ date, ...props }) {
  return (
    <time dateTime={date.toISOString()} {...props}>
      <span style={{ color: 'purple' }}>{dateFormatter.format(date)}</span>
    </time>
  )
}