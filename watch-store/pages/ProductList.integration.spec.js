import { mount } from '@vue/test-utils';
import ProductList from '.';
import ProductCard from '@/components/ProductCard';
import Search from '@/components/Search';

describe('ProductList - integration', () => {
  it('shoul mount the component', () => {
    const wrapper = mount(ProductList);
    expect(wrapper.vm).toBeDefined();
  })

  it('shoul mount de search component as a child', () => {
    const wrapper = mount(ProductList);
    expect(wrapper.findComponent(Search)).toBeDefined();
  })


  it('shoul mount de search component as a child', () => {
    const wrapper = mount(ProductList);
    const cards = wrapper.findAllComponents(ProductCard);
    expect(wrapper.findAllComponents(ProductCard)).toHaveLength(9)
  })
})
