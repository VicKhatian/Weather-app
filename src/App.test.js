import { render, screen } from "@testing-library/react";
import App from "./App";

it("expect api call to change h1", async () => {
  const fakeUserResponse = { data: "response" };
  var { getByTestId } = render(<App />);
  var apiFunc = jest.spyOn(global, "getApiData").mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeUserResponse),
    });
  });
});
