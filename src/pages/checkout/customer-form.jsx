import React, { useRef, useState } from 'react';
import { Formik } from 'formik';
import { GET_FEE } from '../../data/queries/checkout-queries';
import { useLazyQuery } from '@apollo/client/react/hooks';

const Fee = async () => {
    const [HandleGetFee, GetFeeResult] = useLazyQuery(GET_FEE);
    const [addressValue, setAddressValue] = useState(null);

    const GetFee = await HandleGetFee({
        variables: {
            location: '', 
        },
        fetchPolicy: 'no-cache'
    })
}


const CustomerForm = () => (

  <div>
    <Formik
      initialValues={{ name: '', location: '' }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = ' * Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)
        ) {
          errors.name = 'Invalid name';
        }
        if (!values.location) {
            errors.location = ' * Required';
          } else if (
            values.location > 20
          ) {
            errors.location = 'Invalid address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit} className="style-customer-form">
          <label htmlFor="name">Name (*)</label>
          <input
            type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className="styleinput"
            placeholder='Put your name here'
          />
          <div className='styleerror'>
            {errors.name && touched.name && errors.name}
          </div>

          <label htmlFor="location" className='stylelabel'>Address (*)</label>
          <input
            type="location"
            name="location"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.location}
            className="styleinput"
            placeholder='Put your address here'            
          />
          <div className='styleerror'>
            {errors.location && touched.location && errors.location}
          </div>
          <button type="submit" disabled={isSubmitting} class="btn w-100 checkout-btn d-flex justify-content-center align-items-center checkoutbtn-bottom">
            CHECKOUT
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default CustomerForm;