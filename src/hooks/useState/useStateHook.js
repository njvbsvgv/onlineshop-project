export const useState = (initialState) => {
  let state = initialState;

  const setState = (newState) => {
    state = newState;
  };

  return [state, setState];
};

export const useEffect = (callbackFn, dependencies) => {
  let oldDependencies = [];

  callbackFn();

  const checkDependencies = () => {
    const hasChanged = dependencies.some(
      (dep, index) => dep !== oldDependencies[index],
    );

    if (hasChanged) {
      callbackFn();
      oldDependencies = [...dependencies];
    }
  };

  checkDependencies();
};
