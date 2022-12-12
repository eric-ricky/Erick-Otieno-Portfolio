import { Form, FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { getFirebaseClient } from '../../../../lib/firebase/config';
import { IAlert } from '../../../../types';

const SubscribeForm = () => {
  const [formAlert, setFormAlert] = useState<IAlert | undefined>(undefined);

  const facilitySchema = Yup.object().shape({
    email: Yup.string()
      .required('Enter your email address')
      .email('Provide a valid email'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: facilitySchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // importing firebase
        const FirebaseClient = await getFirebaseClient();
        const { db, collection, addDoc, query, getDocs, where } =
          FirebaseClient;

        const { email } = values;
        const colRef = collection(db, 'subscribers');

        const q = query(
          collection(db, 'subscribers'),
          where('email', '==', email)
        );
        const snap = await getDocs(q);

        if (snap.empty) await addDoc(colRef, { email });

        setFormAlert({
          message: "You've subscribed successfully",
          severity: 'success',
        });
        setTimeout(() => {
          resetForm({ values: { email: '' } });
          setFormAlert(undefined);
        }, 2000);
      } catch (error) {
        console.log(error);
        setFormAlert({ message: 'Something went wrong', severity: 'error' });
      }
    },
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="mt-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <input
              {...getFieldProps('email')}
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="block bg-white rounded-md px-4 h-10"
            />

            <button
              type="submit"
              className="rounded-md h-10 px-4 border-2 border-white text-white"
            >
              {isSubmitting ? 'Subscribing..' : ' Subscribe'}
            </button>
          </div>

          <p className="text-sm text-red-500 text-left mt-1 pl-1 outline-slate-400">
            {touched.email && `${errors.email ? errors.email : ''}`}
          </p>

          {formAlert && (
            <p
              className={`text-sm ${
                formAlert.severity === 'error'
                  ? 'text-red-500'
                  : 'text-green-500'
              } text-left mt-1 pl-1 outline-slate-400`}
            >
              {formAlert.message}
            </p>
          )}
        </div>
      </Form>
    </FormikProvider>
  );
};

export default SubscribeForm;
