import '../styles/toggle.css';
import { useState } from 'react';
import Display from './Display';

const Toggle = () => {
  const [style, setStyle] = useState(['selected', '', '', '']);
  const [background, setBackground] = useState(
    [{ class1: 'st2', class2: 'st3' },
      { class1: 'st0', class2: 'st1' },
      { class1: 'st0', class2: 'st1' },
      { class1: 'st0', class2: 'st1' }],
  );
  const [state, setState] = useState('Add');

  const SetSelected = element => {
    const style = ['', '', '', ''];
    const background = [{ class1: 'st0', class2: 'st1' },
      { class1: 'st0', class2: 'st1' },
      { class1: 'st0', class2: 'st1' },
      { class1: 'st0', class2: 'st1' }];

    style[element] = 'selected';
    background[element].class1 = 'st2';
    background[element].class2 = 'st3';

    setStyle(style);
    setBackground(background);
    setState(element === 0 ? 'Add' : 'Tasks');
  };

  return (
    <>
      <div className="view">
        <Display toggle={state} />
      </div>
      <div className="toggle">
        <div className="row w-100 m-0 p-0">
          <button type="button" onClick={() => SetSelected(0)} className={`col-3 p-2 ${style[0]} `}>
            <div>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 100 70"
                className="svg-icon"
                enableBackground="new 0 0 100 70"
              >
                <g id="out_1_" className={background[0].class1}>
                  <rect x="-3.81" y="34.84" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 56.93 23.85)" width="40.7" height="11.1" />
                  <rect x="14.69" y="42.24" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 75.43 20.15)" width="25.9" height="11.1" />
                  <rect x="9.14" y="25.59" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 69.88 -7.6)" width="59.2" height="11.1" />
                  <rect x="53.54" y="47.79" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 114.28 -7.6)" width="14.8" height="11.1" />
                  <rect x="38.74" y="44.09" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 99.48 -0.2)" width="22.2" height="11.1" />
                  <rect x="33.19" y="34.84" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 101.33 23.85)" width="11.1" height="55.5" />
                  <rect x="51.69" y="12.64" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 90.23 -50.15)" width="37" height="14.8" />
                  <rect x="62.79" y="1.54" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 90.23 -50.15)" width="14.8" height="37" />
                </g>
                <g id="in_1_" className={background[0].class2}>
                  <rect x="14.69" y="23.74" width="3.7" height="33.3" />
                  <rect x="25.79" y="38.54" width="3.7" height="18.5" />
                  <rect x="36.89" y="5.24" width="3.7" height="51.8" />
                  <rect x="59.09" y="49.64" width="3.7" height="7.4" />
                  <rect x="47.99" y="42.24" width="3.7" height="14.8" />
                  <rect x="14.69" y="60.74" width="48.1" height="3.7" />
                  <rect x="66.49" y="5.24" width="7.4" height="29.6" />
                  <rect x="66.49" y="5.24" transform="matrix(6.123234e-17 -1 1 6.123234e-17 50.15 90.23)" width="7.4" height="29.6" />
                </g>
              </svg>
            </div>
            <p className="xs">Add task</p>
          </button>
          <button type="button" onClick={() => SetSelected(1)} className={`col-3 p-2 ${style[1]}`}>
            <div>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 100 70"
                className="svg-icon"
                style={{ padding: '5px' }}
                enableBackground="new 0 0 100 70"
              >
                <g id="out">
                  <polygon
                    className={background[1].class1}
                    points="8.07,54.07 30.26,31.88 45.7,37.03 61.61,25.1 61.61,22.6 56.61,22.6 56.61,7.6 91.61,7.6 91.61,42.6
                  76.61,42.6 76.61,38.2 74.78,38.4 52.98,58.1 32.19,52.9 13.84,62.08"
                  />
                </g>
                <polygon
                  id="in"
                  className={background[1].class2}
                  points="11.61,57.6 31.61,37.6 46.61,42.6 66.61,27.6 66.61,17.6 61.61,17.6 61.61,12.6 86.61,12.6
                86.61,37.6 81.61,37.6 81.61,32.6 72.62,33.62 51.61,52.6 31.61,47.6 "
                />
              </svg>
            </div>
            <p className="xs">Track</p>
          </button>
          <button type="button" onClick={() => SetSelected(2)} className={`col-3 p-2 ${style[2]}`}>
            <div>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 100 70"
                className="svg-icon"
                enableBackground="new 0 0 100 70"
              >
                <circle className={background[2].class1} cx="47.84" cy="36.85" r="30" />
                <path className={background[2].class1} d="M49.84,2.85v32h32C81.86,13.25,71.44,2.33,49.84,2.85z" />
              </svg>
            </div>
            <p className="xs">Your Progress</p>
          </button>
          <button type="button" onClick={() => SetSelected(3)} className={`col-3 p-2 ${style[3]}`}>
            <div>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 100 70"
                className="svg-icon"
                style={{ padding: '5px' }}
                enableBackground="new 0 0 100 100;"
              >
                <circle className={background[3].class1} cx="21" cy="34.84" r="10" />
                <circle className={background[3].class1} cx="46" cy="34.84" r="10" />
                <circle className={background[3].class1} cx="70" cy="34.84" r="10" />
              </svg>
            </div>
            <p className="xs">More</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Toggle;
