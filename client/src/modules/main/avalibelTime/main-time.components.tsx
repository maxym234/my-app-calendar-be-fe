import { useEffect } from 'react';
import Button from 'antd/lib/button';
import { fetchAvalibleTime } from '@app/slices/avalibleTime.slice';
import { useAppSelector, useAppDispatch } from '@app/store/hooks';

interface Props {
  date: string
}

export const AvalibelTime: React.FC<Props> = ({ date }) => {  
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.avalibleTimeSlice.data);
  console.log(date, 'date');
  useEffect(() => {
    dispatch(fetchAvalibleTime(date));
  }, [date, dispatch]);
  
    return (
        <div className="mt-[30px] mb-[15px]">
          <h2 className="text-center text-[24px] font-semibold mb-[15px]">Available start times</h2>
          <div className='flex max-w-[1190px] flex-wrap'>
            {data?.time?.map( (time: any) => 
            <Button >
              {time}
            </Button>
            )}
          </div>
        </div>
    )
}