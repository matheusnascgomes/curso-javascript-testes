import { mount } from '@vue/test-utils'
import ProductCard from '@/components/ProductCard';
import { makeServer } from '@/miragejs/server';
describe('ProductCard - unit', () => {

  let server;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
  })

  afterEach(() => {
    server.shutdown();
  })

  it('shoul match snapshot', () => {
    const wrapper = mount(ProductCard, {
      propsData: {
        product: server.create('product', {
          title: 'Xablauzinho',
          price: '25.00',
          image: 'http://placeimg.com/640/480/food'
        })
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  })

  it('should mount the component', () => {
    const wrapper = mount(ProductCard, {
      propsData: {
        product: server.create('product')
      }
    });


    expect(wrapper.vm).toBeDefined();
  })
})
