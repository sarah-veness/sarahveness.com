import App from './App';
import { Nav } from '../components';
import { Route } from "react-router-dom";

describe('App', () => {
  it('contains a Nav component', () => {
    expect(App).toContain(Nav)
  });
  it('contains four main routes', () => {
    expect(App).toContain(Route)
  })
})