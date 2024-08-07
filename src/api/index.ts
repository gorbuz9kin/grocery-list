import {
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

import { MainConfig } from 'configs';
import { delay } from 'utils';
import { queryClient } from 'utils/queryClient';
import { QueryKeys, ItemType } from 'types';

const BASE_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Accept-Encoding': 'gzip, br',
};

export const useFetchShoppingList = () => {
  return useQuery({
    queryKey: [QueryKeys.SHOPPING_LIST],
    queryFn: async () => {
      try {
        const resp = await fetch(
          `${MainConfig.API_URL}/list`,
          {
            headers: BASE_HEADERS,
          },
        );

        return (await resp.json()) as ItemType[];
      } catch (e) {
        console.warn('ERROR FETCH SHOPPING LIST', e);
      }
    },
  });
};

export const useCreateListItem = () => {
  return useMutation({
    mutationFn: async ({ item }: { item: ItemType }) => {
      const response = await fetch(
        `${MainConfig.API_URL}/list`,
        {
          method: 'POST',
          headers: BASE_HEADERS,
          body: JSON.stringify(item),
        },
      );
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.SHOPPING_LIST],
      });
    },
    onError: () => {
      console.warn('ERROR CREATE LIST ITEM');
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2:
          'Something happened. We are already working on it!',
      });
    },
  });
};

export const useUpdateListItem = () => {
  return useMutation({
    mutationFn: async ({
      item,
    }: {
      item: ItemType | Partial<ItemType>;
    }) => {
      const response = await fetch(
        `${MainConfig.API_URL}/list/${item.id}`,
        {
          method: 'PATCH',
          headers: BASE_HEADERS,
          body: JSON.stringify(item),
        },
      );

      await delay();

      return await response.json();
    },
    onMutate: async (item) => {
      await queryClient.cancelQueries({
        queryKey: [QueryKeys.SHOPPING_LIST],
      });

      const prevItems: ItemType[] | undefined =
        queryClient.getQueryData([QueryKeys.SHOPPING_LIST]);
      const idx = prevItems?.findIndex(
        (i: ItemType) => i.id === item.item.id,
      );
      const newItems: ItemType[] = prevItems
        ? [...prevItems]
        : [];

      if (idx && newItems[idx]) {
        newItems[idx] = {
          ...newItems[idx],
          ...item.item,
        };
      }

      queryClient.setQueryData(
        [QueryKeys.SHOPPING_LIST],
        () => newItems,
      );

      return { prevItems };
    },
    onError: (err, _, context) => {
      console.warn('ERROR UPDATE LIST ITEM', err);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2:
          'Something happened. We are already working on it!',
      });
      queryClient.setQueryData(
        [QueryKeys.SHOPPING_LIST],
        context?.prevItems,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.SHOPPING_LIST],
      });
    },
  });
};

export const useDeleteListItem = () => {
  return useMutation({
    mutationFn: async ({ item }: { item: ItemType }) => {
      const response = await fetch(
        `${MainConfig.API_URL}/list/${item.id}`,
        {
          method: 'DELETE',
          headers: BASE_HEADERS,
        },
      );
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.SHOPPING_LIST],
      });
    },
    onError: () => {
      console.warn('ERROR DELETE LIST ITEM');
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2:
          'Something happened. We are already working on it!',
      });
    },
  });
};
