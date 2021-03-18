import PropTypes from 'prop-types';

const Day = ({ task }) => (
  <div className="row w-100 justify-content-center align-items-center p-2 m-auto">
    <div className="col-2">
      <svg viewBox="0 0 36 36" className="circular-chart blue p-2">
        <path
          className="circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          strokeDasharray={`${task.progress} ,100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </div>
    <div className="col-7">
      <p className="font-sm-regular">{task.expiration_day}</p>
      <p className="font-sm">{task.name}</p>
    </div>
    <div className="col-3 flex-row">
      <div className="row">
        <div className="col-8 p-0 justify-content-center align-items-center m-auto">
          <p className="text-right m-auto font-sm-bold">
            {task.time - task.goal}
            <span className="font-sm">hrs</span>
          </p>
        </div>
        <div className="col-4 p-0">
          <svg
            className="w-50 p-0"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 172 172"
          >
            <g
              fill="#000000;"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <path d="M0,172v-172h172v172z" fill="none" />
              <g fill="#666666"><path d="M68.8,154.8h-11.46667c-2.21307,0 -4.2312,-1.27853 -5.18293,-3.27947c-0.95173,-2.00093 -0.65933,-4.3688 0.74533,-6.0888l48.63013,-59.43173l-48.63013,-59.43747c-1.40467,-1.71427 -1.69133,-4.08213 -0.74533,-6.0888c0.946,-2.00667 2.96987,-3.27373 5.18293,-3.27373h11.46667c1.72,0 3.34827,0.774 4.4376,2.10413l51.6,63.06667c1.72573,2.1156 1.72573,5.14853 0,7.26413l-51.6,63.06667c-1.08933,1.3244 -2.7176,2.0984 -4.4376,2.0984z" /></g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
);

Day.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    goal: PropTypes.number,
    time: PropTypes.number,
    progress: PropTypes.number,
    expiration_day: PropTypes.string,
  }).isRequired,
};

export default Day;
