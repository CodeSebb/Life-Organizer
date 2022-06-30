import * as React from 'react';
import * as RN from 'react-native';
import {Calendar, CalendarList} from 'react-native-calendars';

class MyCalendar extends React.Component {
    render() {
        return(
            <RN.View>
                <Calendar 
                    theme={{
                        backgroundColor: '#B5C6E0',
                        selectedDayBackgroundColor: '#B5C6E0'
                    }}
                />
            </RN.View>
        );
    }
}

export default MyCalendar;