import * as moment from 'moment';
import { ENV } from '../config/env';
import { Meeting } from '../types';

const FORMAT = 'hh:mm A, ddd MMM DD';

export const getNextSessionTime = (
    meeting: Meeting,
    end: boolean = false,
    format: string = FORMAT
): string => {
    const now = moment();
    const time = end ? moment(meeting.endTime) : moment(meeting.startTime);

    const IST_OFFSET = ENV.NODE_ENV === 'development' ? '+00:00' : '+05:30';

    let nextSessionTime: moment.Moment;

    switch (meeting.frequency.toLowerCase()) {
        case 'none':
            return time.utcOffset(IST_OFFSET).format(format);
        case 'daily':
            nextSessionTime = time.clone().set({
                hour: time.hour(),
                minute: time.minute(),
                second: 0,
                millisecond: 0,
            });
            while (nextSessionTime.isBefore(now)) {
                nextSessionTime = nextSessionTime.add(1, 'day');
            }
            break;
        case 'weekly':
            nextSessionTime = time.clone().day(meeting.day).set({
                hour: time.hour(),
                minute: time.minute(),
                second: 0,
                millisecond: 0,
            });
            while (nextSessionTime.isBefore(now)) {
                nextSessionTime = nextSessionTime.add(1, 'week');
            }
            break;
        case 'monthly':
            nextSessionTime = time.clone().set({
                date: meeting.date,
                hour: time.hour(),
                minute: time.minute(),
                second: 0,
                millisecond: 0,
            });
            while (nextSessionTime.isBefore(now)) {
                nextSessionTime = nextSessionTime.add(1, 'month');
            }
            break;
        default:
            return time.utcOffset(IST_OFFSET).format(format);
    }

    return nextSessionTime.utcOffset(IST_OFFSET).format(format);
};
