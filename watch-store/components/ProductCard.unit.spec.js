import { mount } from '@vue/test-utils'
import ProductCard from '@/components/ProductCard';
import { makeServer } from '@/miragejs/server';

const mountProductComponent = () => {

  const product = server.create('product', {
    title: 'Xablauzinho',
    price: '25.00',
    image: 'http://placeimg.com/640/480/food'
  })

  return {
    wrapper: mount(ProductCard, {
      propsData: {
        product: product
      }
    }),
    product
  }

};

describe('ProductCard - unit', () => {

  let server;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
  })

  afterEach(() => {
    server.shutdown();
  })

  it('shoul match snapshot', () => {
    const { wrapper } = mountProductComponent()

    expect(wrapper.element).toMatchSnapshot();
  })

  it('should mount the component', () => {
    const { wrapper } = mountProductComponent()

    expect(wrapper.vm).toBeDefined();
    expect(wrapper.text()).toContain('Xablauzinho')
  })

  it('should emit the event addToCart with product object', async () => {
    const { wrapper, product } = mountProductComponent();

    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted().addToCart).toBeTruthy();
    expect(wrapper.emitted().addToCart.length).toBe(1);
    expect(wrapper.emitted().addToCart[0]).toEqual([{ product }])
  })
})
