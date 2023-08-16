export const setInputState = (setState, e) => {
  const { name, value } = e.target;
  setState((prvState) => ({ ...prvState, [name]: value }));
};
