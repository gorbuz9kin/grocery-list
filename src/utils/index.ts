export const delay = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, 3000),
  );
