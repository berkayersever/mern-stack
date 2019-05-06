import ProductModel from '../Product';

test('It accepts all parameters and implements all methods', () => {
    const raw = { id: '1234', name: 'foo', price: 123, images: ['1'] };
    const product = new ProductModel(raw);
    expect(product.getId()).toEqual(raw.id);
    expect(product.getName()).toEqual(raw.name);
    expect(product.getPrice()).toEqual(raw.price);
    expect(product.getImages()).toEqual(raw.images);
    expect(product.getData()).toEqual(raw);
});