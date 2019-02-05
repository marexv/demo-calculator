import React, { Component } from 'react';
import logo from './logo.svg';
import Styles from './Styles'
import './App.css';
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  // await sleep(300)
  priceCalc(values)
  window.alert(JSON.stringify(values, 0, 2))
}

const priceCalc = (props) => {
  console.log(props)
  console.log(props.notes)
}

const MyForm = () => (
  <Styles>
    <h1>🏁 React Final Form - Simple Example</h1>
    <a href="https://github.com/erikras/react-final-form#-react-final-form">
      Read Docs
    </a>
    <Form
      onSubmit={onSubmit}
      initialValues={{ customerType: 'b2b', sendToEmail: true }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={event => {
          handleSubmit(event).then(() => reset())
        }}>
          <div>
            <label>Wall Height</label>
            <Field
              name="segmentheight"
              component="input"
              type="number"
              placeholder="Segment height in mm"
            />
          </div>
          <div>
            <label>Wall Width</label>
            <Field
              name="segmenwidth"
              component="input"
              type="number"
              placeholder="Segment width in mm"
            />
          </div>
          <div>
            <label>Panel Type</label>
            <Field name="favoriteColor" component="select">
              <option />
              <option value="#ff0000">❤️ Aquapanel Cement Board Floor</option>
              <option value="#00ff00">💚 Aquapanel Cement Board Floor MF</option>
              <option value="#0000ff">💙 Aquapanel Indoor Panel</option>
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
                  value="radiation-protection"
                />{' '}
                Radiation protection
              </label>
              <label>
                <Field
                  name="requirements"
                  component="input"
                  type="checkbox"
                  value="bulletproof-wall"
                />{' '}
                Bulletproof wall
              </label>
            </div>
          </div>
          <div>
            <label>Additional</label>
            <Field name="additionl" component="select" multiple>
              <option value="kleber">Aquapanel Nutkleber</option>
              <option value="tipla">Aquapalne Tiple</option>
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
            <button type="submit" disabled={submitting || pristine}>
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

class App extends Component {
  render() {
    return (
      <MyForm />
    );
  }
}

export default App;
