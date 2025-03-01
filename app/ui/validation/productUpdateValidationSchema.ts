import * as Yup from 'yup';

const ProductUpdateValidationSchema = Yup.object().shape({
 
    name: Yup.string()
        .required('required')
        .min(5, 'min')
        .max(100, 'max'),

    description: Yup.string()
        .required('required')
        .min(10, 'min')
        .max(200, 'max'),

    logo: Yup.string()
        .required('required'),

    date_release: Yup.date()
        .required('required')
        .min(new Date(), 'min_date'),

    date_revision: Yup.date()
        .required('required')
        .test('is-one-year-later', 'one_year_later', function (value) {
            const { date_release } = this.parent;
            if (!date_release || !value) return false;
            const oneYearLater = new Date(date_release);
            oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
            return value.getTime() === oneYearLater.getTime();
        }),
});


export default ProductUpdateValidationSchema;
