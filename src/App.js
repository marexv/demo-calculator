import React, { Component } from 'react';
import logo from './logo.svg';
import Styles from './Styles'
import './App.css';
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const priceCalc = (props) => {
  var panelPrice = 0;

  if (props.panelType.one) {
    panelPrice = 10;
  } else if (props.panelType.one) {
    panelPrice = 20;
  } else {
    panelPrice = 30;
  }

  var price = props.segmentheight * props.segmenwidth * (0.000001) * panelPrice;

  if (props.requirements.radiationProtection) {
    price += 500;
  }

  if (props.requirements.bulletproofWall) {
    price += 500;
  }

  console.log(props.notes)

  return price;
}

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const MyForm = () => (
  <Styles>
    <h1>Knauf - Simple Calculator</h1>
    <a href="https://knauf.hr/diy/kontakt">
      help
    </a>
    <Form
      onSubmit={onSubmit}
      initialValues={{ panelType: 'one', customerType: 'b2b', sendToEmail: true }}

      validate={values => {
        const errors = {};
        if (!values.segmentheight) {
          errors.segmentheight = "Required";
        } else if (values.segmentheight < 0) {
          errors.segmentheight = "Must be positive";
        }

        if (!values.segmenwidth) {
          errors.segmenwidth = "Required";
        } else if (values.segmenwidth < 0) {
          errors.segmenwidth = "Must be positive";
        }

        return errors;
      }}

      render={({ handleSubmit, form, reset, submitting, pristine, values }) => (
        <form
          onSubmit={event => {
            handleSubmit(event).then(reset);
          }}
        >
          <Field name="segmentheight">
            {({ input, meta }) => (
              <div>
                <label>Wall Height</label>
                <input {...input} type="number" placeholder="Segment height in mm" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="segmenwidth">
            {({ input, meta }) => (
              <div>
                <label>Wall Widtht</label>
                <input {...input} type="number" placeholder="Segment width in mm" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div>
            <label>Panel Type</label>
            <Field name="panelType" component="select">
              <option value="one">❤️ Aquapanel Cement Board Floor</option>
              <option value="two">💚 Aquapanel Cement Board Floor MF</option>
              <option value="three">💙 Aquapanel Indoor Panel</option>
            </Field>
          </div>
          <div>
            <label>Requirements</label>
            <div>
              <label>
                <Field
                  name="requirements"
                  component="input"
                  type="checkbox"
                  value="radiationProtection"
                />{' '}
                Radiation protection
              </label>
              <label>
                <Field
                  name="requirements"
                  component="input"
                  type="checkbox"
                  value="bulletproofWall"
                />{' '}
                Bulletproof wall
              </label>
            </div>
          </div>
          <div>
            <label>Additional</label>
            <Field name="additionl" component="select" multiple>
              <option value="kleber">Aquapanel Nutkleber</option>
              <option value="tipla">Aquapanel Tiple</option>
              <option value="armierungsband">Aquapanel Armierungsband aussen</option>
              <option value="fugen">Aquapanel Fugen und Flächenspachtel</option>
              <option value="gruierung">Aquapanel Grundierung aussen</option>
              <option value="gewebe">Aquapanel Gewebe plus</option>
            </Field>
          </div>
          <div>
            <label>Customer</label>
            <Field
              name="customer"
              component="input"
              type="text"
              placeholder="Customer Name"
            />
          </div>
          <div>
            <label>Customer Type</label>
            <div>
              <label>
                <Field
                  name="customerType"
                  component="input"
                  type="radio"
                  value="b2b"
                />{' '}
                B2B
              </label>
              <label>
                <Field
                  name="customerType"
                  component="input"
                  type="radio"
                  value="b2c"
                />{' '}
                B2C
              </label>
            </div>
          </div>
          <div>
            <label>Notes</label>
            <Field name="notes" component="textarea" placeholder="Notes" />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <div>
            <label>Send To Email</label>
            <Field name="sendToEmail" component="input" type="checkbox" />
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  </Styles>
)

const CustomerDetails = () => (
  <Styles>
    <Form
      onSubmit={onSubmit}
      initialValues={{ panelType: 'one', customerType: 'b2b', sendToEmail: true }}
      validate={values => {
        const errors = {};
        if (!values.segmentheight) {
          errors.segmentheight = "Required";
        } else if (values.segmentheight < 0) {
          errors.segmentheight = "Must be positive";
        }

        if (!values.segmenwidth) {
          errors.segmenwidth = "Required";
        } else if (values.segmenwidth < 0) {
          errors.segmenwidth = "Must be positive";
        }

        return errors;
      }}

      render={({ handleSubmit, form, reset, submitting, pristine, values }) => (
        <form>
          <div>
            <label>Customer</label>
            <Field
              name="customer"
              component="input"
              type="text"
              placeholder="Customer Name"
            />
          </div>
          <div>
            <label>Customer Type</label>
            <div>
              <label>
                <Field
                  name="customerType"
                  component="input"
                  type="radio"
                  value="b2b"
                />{' '}
                B2B
             </label>
              <label>
                <Field
                  name="customerType"
                  component="input"
                  type="radio"
                  value="b2c"
                />{' '}
                B2C
            </label>
            </div>
          </div>
          <div>
            <label>Notes</label>
            <Field name="notes" component="textarea" placeholder="Notes" />
          </div>
        </form>
      )}
    />
  </Styles>
)


class SegmentDetails extends React.Component {
  constructor(props) {
    super();
  }

  handleSubmit(values) {
    console.log(values);
  };

  render() {
    return (
      <Styles>
        <Form
          onSubmit={this.props.handleSubmit}
          initialValues={{ panelType: 'one', customerType: 'b2b', sendToEmail: true }}

          validate={values => {
            const errors = {};
            if (!values.segmentheight) {
              errors.segmentheight = "Required";
            } else if (values.segmentheight < 0) {
              errors.segmentheight = "Must be positive";
            }

            if (!values.segmenwidth) {
              errors.segmenwidth = "Required";
            } else if (values.segmenwidth < 0) {
              errors.segmenwidth = "Must be positive";
            }

            return errors;
          }}

          render={({ handleSubmit, form, reset, submitting, pristine, values }) => (
            <form
              onSubmit={handleSubmit}
            >
              <Field name="segmentheight">
                {({ input, meta }) => (
                  <div>
                    <label>Wall Height</label>
                    <input {...input} type="number" placeholder="Segment height in mm" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="segmenwidth">
                {({ input, meta }) => (
                  <div>
                    <label>Wall Widtht</label>
                    <input {...input} type="number" placeholder="Segment width in mm" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div>
                <label>Panel Type</label>
                <Field name="panelType" component="select">
                  <option value="one">❤️ Aquapanel Cement Board Floor</option>
                  <option value="two">💚 Aquapanel Cement Board Floor MF</option>
                  <option value="three">💙 Aquapanel Indoor Panel</option>
                </Field>
              </div>
              <div>
                <label>Requirements</label>
                <div>
                  <label>
                    <Field
                      name="requirements"
                      component="input"
                      type="checkbox"
                      value="radiationProtection"
                    />{' '}
                    Radiation protection
            </label>
                  <label>
                    <Field
                      name="requirements"
                      component="input"
                      type="checkbox"
                      value="bulletproofWall"
                    />{' '}
                    Bulletproof wall
            </label>
                </div>
              </div>
              <div>
                <label>Additional</label>
                <Field name="additionl" component="select" type="select" multiple>
                  <option value="kleber">Aquapanel Nutkleber</option>
                  <option value="tipla">Aquapanel Tiple</option>
                  <option value="armierungsband">Aquapanel Armierungsband aussen</option>
                  <option value="fugen">Aquapanel Fugen und Flächenspachtel</option>
                  <option value="gruierung">Aquapanel Grundierung aussen</option>
                  <option value="gewebe">Aquapanel Gewebe plus</option>
                </Field>
              </div>
              <div>
                <label>Notes</label>
                <Field name="notes" component="textarea" placeholder="Notes" />
              </div>
              <div className="buttons">
                <button
                  type="submit"
                  // onClick={props.onClick}
                  disabled={submitting}
                >
                  Save Segment
            </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
            </button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
      </Styles >
    )
  }
}

const Segment = (props) => (
  <p>Segment Type: {props.segment}</p>
)

class Project extends React.Component {
  constructor(props) {
    super();
    this.state = {
      segments: [],
    };
  }

  // save sagment to segments
  saveSegmentOnClick(segment) {
    const segments = this.state.segments;
    const id = segments.length;

    this.setState(prevState => ({
      segments: [...prevState.segments, { id, segment }]
    }));

    // console.log(segments);
  }

  loadSegmentOnClick() {

  }

  handleCompleteProject() {
    const segments = this.state.segments;
    alert(JSON.stringify(segments, 0, 2))
  }

  render() {

    return (
      <div>
        <CustomerDetails />

        <SegmentDetails handleSubmit={(values) => this.saveSegmentOnClick(values)} />

        {this.state.segments.map((segment, id) => {
          return (<Segment key={id} segment={segment.segment.panelType} />)
        })}

        <button onClick={() => this.handleCompleteProject()}>Finish Project</button>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <Project />
    );
  }
}

export default App;
