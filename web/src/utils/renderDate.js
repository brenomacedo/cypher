import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import 'dayjs/locale/pt-br'

dayjs.extend(timezone)
dayjs.extend(utc)

export default (date) => {
    const createdDate = dayjs(date).tz("America/Sao_Paulo").format('DD/MM/YYYY H:M:ss')
    return createdDate
}