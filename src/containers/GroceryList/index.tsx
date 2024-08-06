import React, {
  useCallback,
  useMemo,
  useState,
} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
} from 'react-native';

import {
  SvgIcon,
  EmptyList,
  UI,
  Popup,
  Card,
} from 'components';
import {
  useFetchShoppingList,
  useCreateListItem,
  useUpdateListItem,
  useDeleteListItem,
} from 'api';
import { ItemType } from 'types';
import styles from './styles';

const GroceryList = (): React.JSX.Element => {
  const { data, isError } = useFetchShoppingList();
  const [activeItem, setActiveItem] =
    useState<ItemType | null>(null);
  const [isVisiblePopup, setVisiblePopup] =
    useState<boolean>(false);
  const completedItemsCount = useMemo(
    () =>
      data
        ? data?.filter((item) => item?.isCompleted).length
        : 0,
    [data],
  );
  const createListItem = useCreateListItem();
  const updateListItem = useUpdateListItem();
  const deleteListItem = useDeleteListItem();

  const onAddItem = useCallback(() => {
    setActiveItem(null);
    setVisiblePopup(true);
  }, []);

  const onClosePopup = useCallback(() => {
    setVisiblePopup(false);
  }, []);

  const onUpdateItem = useCallback(
    async (value: ItemType | Partial<ItemType>) => {
      await updateListItem.mutateAsync({ item: value });
    },
    [updateListItem],
  );

  const onSaveItem = useCallback(
    async (value: ItemType | Partial<ItemType>) => {
      if (value.id) {
        onUpdateItem(value);
      } else {
        const id = data ? data?.length + 1 : 1;
        const newItem = {
          id: `${id}`,
          name: value?.name ?? '',
          quantity: value?.quantity ?? '',
          unit: value?.unit ?? '',
          isCompleted: false,
        };
        await createListItem.mutateAsync({ item: newItem });
      }
      onClosePopup();
    },
    [onClosePopup, onUpdateItem, data, createListItem],
  );

  const onComplete = useCallback(
    (value: ItemType | Partial<ItemType>) => {
      const newItem = {
        ...value,
        isCompleted: !value.isCompleted,
      };
      onUpdateItem(newItem);
    },
    [onUpdateItem],
  );

  const onEdit = useCallback((value: ItemType) => {
    setActiveItem(value);
    setVisiblePopup(true);
  }, []);

  const onDelete = useCallback(
    async (value: ItemType | Partial<ItemType>) => {
      await deleteListItem.mutateAsync({
        item: value as ItemType,
      });
    },
    [deleteListItem],
  );

  const getRenderItem = useCallback(
    ({ item }: { item: ItemType }) => (
      <Card.GroceryCard
        name={item?.name}
        unit={item?.unit}
        quantity={item?.quantity}
        isCompleted={item.isCompleted}
        onComplete={() => onComplete(item)}
        onEdit={() => onEdit(item)}
        onDelete={() => onDelete(item)}
      />
    ),
    [onComplete, onEdit, onDelete],
  );

  const getKey = useCallback(
    (item: ItemType) => `${item.id}-${item.name}`,
    [],
  );

  return (
    <>
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.header}>
            Grocery Shopping List
          </Text>
          <View style={styles.section}>
            <SvgIcon.List />
            <Text style={styles.text}>
              {`List ${completedItemsCount}/${
                data?.length ?? 0
              } Completed`}
            </Text>
          </View>
          <View style={styles.content}>
            {isError && (
              <Text style={[styles.text, styles.textError]}>
                Something wrong. Please check your
                connection!
              </Text>
            )}
            {data && data?.length > 0 ? (
              <FlatList
                data={data}
                renderItem={getRenderItem}
                keyExtractor={getKey}
              />
            ) : (
              <EmptyList />
            )}
          </View>
          <UI.PrimaryButton
            label="Add new Item"
            onPress={onAddItem}
          >
            <SvgIcon.Plus />
          </UI.PrimaryButton>
        </View>
      </SafeAreaView>
      <Popup.AddNewItem
        isVisible={isVisiblePopup}
        activeItem={activeItem}
        onClose={onClosePopup}
        onSaveItem={onSaveItem}
      />
    </>
  );
};

export default GroceryList;
