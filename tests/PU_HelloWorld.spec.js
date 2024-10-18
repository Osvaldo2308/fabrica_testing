// tests/HelloWorld.spec.js
import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders the correct message when passed as a prop', () => {
    const msg = 'Hello World';
    const wrapper = mount(HelloWorld, {
      props: { msg }
    });

    // Verifica que el componente renderiza el mensaje correcto
    expect(wrapper.find('h1').text()).toBe(msg);
  });

  it('renders correctly with different messages', () => {
    const msg = 'Test Message';
    const wrapper = mount(HelloWorld, {
      props: { msg }
    });

    // Verifica que el componente renderiza el nuevo mensaje
    expect(wrapper.find('h1').text()).toBe(msg);
  });
});
