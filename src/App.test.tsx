import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

describe(
  "App component testing", () => {
    it('should be ok for basic rendering', () => {
      const app = render(<App />);
      expect(app.container.innerHTML).toMatch('Task Planner');
    });
  }
)
