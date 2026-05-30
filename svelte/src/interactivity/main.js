import { mount } from 'svelte';
import '../../static/fonts.css';
import InteractivityApp from '../InteractivityApp.svelte';

mount(InteractivityApp, {
  target: document.getElementById('app')
});
