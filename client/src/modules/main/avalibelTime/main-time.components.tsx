import { useEffect } from 'react';
import Button from 'antd/lib/button';
import { userList, fetchData } from "@app/plugins/redux/endpointSlice";
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '@app/store';


export const AvalibelTime = () => {  
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(userList);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  
    return (
        <div className="mt-[30px] mb-[15px]">
          <h2 className="text-center text-[24px] font-semibold mb-[15px]">Available start times</h2>
          <div className='flex max-w-[1190px] flex-wrap'>
            {data?.map( (d: any) => 
            <Button>
              {d?.time}
            </Button>
            )}
          </div>
        </div>
    )
}