import * as Yup from 'yup';
import ProductLogic from '../../core/domain/productLogic/ProductLogic';
import ProductUseCase from '../../core/useCases/product/ProductUseCase';

const ProductValidationSchema = Yup.object().shape({
    id: Yup.string()
        .required('required')
        .min(3, 'min')
        .max(10, 'max')
        .test('id-valido', 'invalidId', async function (value) {
            try {
                const productLogic = new ProductLogic();
                const productUseCase = new ProductUseCase(productLogic);
                return !(await productUseCase.verifyProduct(value));
            } catch (error) {
                return false;
            }
        }),

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


export default ProductValidationSchema;
