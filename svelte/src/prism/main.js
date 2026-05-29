import { mount } from 'svelte';
import '../../static/fonts.css';
import PrismApp from '../PrismApp.svelte';

mount(PrismApp, {
  target: document.getElementById('app')
});
