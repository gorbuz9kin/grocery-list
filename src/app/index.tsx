import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

import { GroceryList } from 'containers';
import { queryClient } from 'utils/queryClient';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <GroceryList />
      <Toast />
    </QueryClientProvider>
  );
}

export default App;
