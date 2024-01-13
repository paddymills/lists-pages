
import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

Alpine.data('todos', () => ({
  async init() {
    console.log(await fetch('/todo/all'))
  }
}));