import Form from 'react-bootstrap/Form';

const Select= ({ opt1, opt2, optDefault}) => {
  return (
    <Form.Select aria-label="Default select example">
      <option value={optDefault}>{optDefault}</option>
      <option value={opt1}>{opt1}</option>
      <option value={opt2}>{opt2}</option>
    </Form.Select>
  );
}

export default Select;