/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App.js';
import '@testing-library/jest-dom';

jest.mock("../../../server/routes/main.js");
global.fetch = jest.fn();
jest.spyOn(global, 'fetch').mockResolvedValue(() => {
  console.log("spying?");
})

test('shows loading message before calling the api', async () => {
  render(<App />); 
  const loader = screen.getByText("calling the api...");
  expect(loader).toBeInTheDocument();
  await waitFor(() => expect(screen.getByText("Hello omegamart api!")).toBeInTheDocument());
});
