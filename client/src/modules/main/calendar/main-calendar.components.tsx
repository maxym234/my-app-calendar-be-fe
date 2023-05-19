import { Calendar as CalendarAntd, Typography, Badge, BadgeProps }  from 'antd/lib';
import type { Dayjs } from 'dayjs';
export const Calendar = () => {  
    const dateCurrent = new Date().getDate();    
    const getListData = (value: Dayjs, text: string) => {
        let listData;
        switch (value.date()) {
          case 8:
            listData = [
              { type: 'warning', content: text },
              { type: 'success', content: 'This is usual event.' },
            ];
            break;
          case 10:
            listData = [
              { type: 'warning', content: 'This is warning event.' },
              { type: 'success', content: 'This is usual event.' },
              { type: 'error', content: 'This is error event.' },
            ];
            break;
          case 15:
            listData = [
              { type: 'warning', content: 'This is warning event' },
              { type: 'success', content: 'This is very long usual event。。....' },
              { type: 'error', content: 'This is error event 1.' },
            ];
            break;
          default:
        }
        return listData || [];
      };
    const dateCellRender = (value: Dayjs) => {
        const listData = getListData(value, 'text');
        return (
          <ul className="events">
            {listData.map((item) => (
              <li key={item.content}>
                <Badge status={item.type as BadgeProps['status']} text={item.content} />
              </li>
            ))}
          </ul>
        );
      };
    const cellRender = (date: Dayjs ) => {
        return dateCellRender(date);
    }
    return (
        <div>
            <CalendarAntd 
                cellRender={cellRender}
                disabledDate={
                    (date) => {
                        
                    if (date.date() < +dateCurrent) {
                        return true;
                    }
                    return false;
                }}
                headerRender={({ value }) => {
                    console.log(value.toDate().toDateString());
                    
                    return (
                    <div style={{ padding: 8 }}>
                        <Typography.Title className='text-center font-bold' level={4}>{value.toDate().toDateString()}</Typography.Title>
                    </div>
                    );
                }}
            />
        </div>
    )
}