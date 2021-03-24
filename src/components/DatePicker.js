import SemanticDatepicker from 'react-semantic-ui-datepickers';
import { useState } from 'react';

import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

const DatePicker = () => {
  const [currentDate, setNewDate] = useState(null);
  const onChange = (event, data) => setNewDate(data.value);
  console.log(currentDate);

  return <SemanticDatepicker onChange={onChange} />;
};

export default DatePicker;
