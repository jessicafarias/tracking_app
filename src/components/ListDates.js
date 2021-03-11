
import '../styles/date.css'
const ListDates = () => (
  <div>
    <p className="day-tag">Today</p>
    <div className="row w-100 justify-content-center align-items-center">
      <div className="col-2"> 
        <svg viewBox="0 0 36 36" className="circular-chart blue">
          <path
            className="circle-bg"
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            //strokeDasharray={`${book.percentage} ,100`}
            strokeDasharray="50,100"
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
      </div>
      <div className="col-7">
        <p>Sep 5 2013</p>
        <p className="xs">other ting</p>
      </div>
      <p className="col-3"> -0.4</p>
    </div>
    <p className="day-tag">Yesterday</p>
    <div className="row w-100 justify-content-center align-items-center">
      <div className="col-2"> 
        <svg viewBox="0 0 36 36" className="circular-chart blue">
          <path
            className="circle-bg"
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            //strokeDasharray={`${book.percentage} ,100`}
            strokeDasharray="50,100"
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
      </div>
      <div className="col-7">
        <p>Sep 5 2013</p>
        <p className="xs">other ting</p>
      </div>
      <p className="col-3"> -0.4</p>
    </div>
    <p className="day-tag">Last week</p>
    <div className="row w-100 justify-content-center align-items-center">
      <div className="col-2"> 
        <svg viewBox="0 0 36 36" className="circular-chart blue">
          <path
            className="circle-bg"
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            //strokeDasharray={`${book.percentage} ,100`}
            strokeDasharray="50,100"
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
      </div>
      <div className="col-7">
        <p>Sep 5 2013</p>
        <p className="xs">other ting</p>
      </div>
      <p className="col-3"> -0.4</p>
    </div>
  </div>
);

export default ListDates;
