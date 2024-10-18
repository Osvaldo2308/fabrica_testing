// example.spec.js
import { mount } from '@vue/test-utils';
import ExampleComponent from '@/components/HelloWorld.vue';

describe('ExampleComponent', () => {
  it('renders the correct message', () => {
    const msg = 'Hello World';  // Valor que deseas mostrar
    const wrapper = mount(ExampleComponent, {
      props: { msg }  // Pasar la prop msg al componente
    });

    // Verificar que el mensaje se renderiza correctamente
    expect(wrapper.find('h1').text()).toBe(msg);  // Verifica que el h1 contenga "Hello World"
    expect(wrapper.text()).toContain("You’ve successfully created a project with Vite + Vue 3.");
  });
});
