import SemanticDatepicker from 'react-semantic-ui-datepickers';
import PropTypes from 'prop-types';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { Label } from 'semantic-ui-react';

const DatePicker = ({ handleDate }) => (
  <>
    <SemanticDatepicker
      id="id"
      name="DATEPICKER"
      onChange={handleDate}
    />
    <Label as="a" color="teal" tag title="You gonna start to track starting today until expiration day">
      Expiration day
    </Label>
  </>
);

DatePicker.propTypes = {
  handleDate: PropTypes.func.isRequired,
};
export default DatePicker;
