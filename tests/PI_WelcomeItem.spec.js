import { mount } from '@vue/test-utils';
import WelcomeItem from '@/components/WelcomeItem.vue';
import DocumentationIcon from '@/components/icons/IconDocumentation.vue';

describe('WelcomeItem.vue', () => {
  it('renders with a given icon and heading', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        icon: '<DocumentationIcon />', // Slot para el icono
        heading: 'Documentation', // Slot para el encabezado
        default: 'Vue’s official documentation provides you with all information you need to get started.' // Contenido por defecto
      },
      global: {
        components: {
          DocumentationIcon // Registrando el componente del icono
        }
      }
    });

    // Verifica que el icono se renderiza
    const icon = wrapper.find('i');
    expect(icon.exists()).toBe(true); // El icono debe existir

    // Verifica que el encabezado se renderiza correctamente
    const heading = wrapper.find('h3');
    expect(heading.text()).toBe('Documentation'); // Verifica el texto del encabezado

    // Verifica que el contenido por defecto se renderiza correctamente
    expect(wrapper.text()).toContain('Vue’s official documentation provides you with all information you need to get started.');
  });
});
