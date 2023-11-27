import { Formik } from 'formik';
import { Field, Form, FormButton, Wrapper } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{
          search: '',
        }}
        onSubmit={values => {
          onSubmit(values.search);
        }}
      >
        <Form>
          <Wrapper>
            <Field
              id="search"
              name="search"
            />
            <FormButton type="submit">
              Search
            </FormButton>
          </Wrapper>
        </Form>
      </Formik>
    </div>
  );
};
