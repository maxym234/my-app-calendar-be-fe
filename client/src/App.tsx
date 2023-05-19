import { Header } from "./common/components/header/header.component";
import { AvalibelTime } from "./modules/main/avalibelTime/main-time.components";
import { Calendar } from "./modules/main/calendar/main-calendar.components";


export const App = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1200px] flex flex-col m-auto">
        <Calendar />
        <AvalibelTime />
      </div>
    </>
  );
}
