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
import { ItemType } from 'types';
import styles from './styles';

const dummyData: ItemType[] = [
  {
    id: 1,
    name: 'Eggs',
    quantity: '20',
    unit: '',
    isCompleted: true,
  },
  {
    id: 2,
    name: 'Butter',
    quantity: '1',
    unit: 'gr',
    isCompleted: false,
  },
  {
    id: 3,
    name: 'Bread',
    quantity: '2',
    unit: '',
    isCompleted: false,
  },
  {
    id: 4,
    name: 'Milk',
    quantity: '2',
    unit: 'l',
    isCompleted: false,
  },
];

const GroceryList = (): React.JSX.Element => {
  const [activeItem, setActiveItem] =
    useState<ItemType | null>(null);
  const [itemsList, setItemsList] =
    useState<ItemType[]>(dummyData);
  const [isVisiblePopup, setVisiblePopup] =
    useState<boolean>(false);
  const completedItemsCount = useMemo(
    () =>
      itemsList
        ? itemsList?.filter((item) => item?.isCompleted)
            .length
        : 0,
    [itemsList],
  );

  const onAddItem = useCallback(() => {
    setActiveItem(null);
    setVisiblePopup(true);
  }, []);

  const onClosePopup = useCallback(() => {
    setVisiblePopup(false);
  }, []);

  const onUpdateItem = useCallback(
    (value: ItemType) => {
      const items = [...itemsList];
      const idx = items.findIndex(
        (el) => el.id === value.id,
      );
      if (idx > -1) {
        items[idx] = value;
        setItemsList(items);
      }
    },
    [itemsList],
  );

  const onSaveItem = useCallback(
    (value: ItemType | Partial<ItemType>) => {
      if (value.id) {
        onUpdateItem(value as ItemType);
      } else {
        const newItem = {
          id: itemsList?.length + 1,
          name: value?.name ?? '',
          quantity: value?.quantity ?? '',
          unit: value?.unit ?? '',
          isCompleted: false,
        };
        setItemsList((prev) => [...prev, newItem]);
      }
      onClosePopup();
    },
    [onClosePopup, itemsList, onUpdateItem],
  );

  const onComplete = useCallback(
    (value: ItemType | Partial<ItemType>) => {
      const items = [...itemsList];
      const idx = items.findIndex(
        (el) => el.id === value.id,
      );
      if (idx > -1) {
        items[idx].isCompleted = !items[idx].isCompleted;
        setItemsList(items);
      }
    },
    [itemsList],
  );

  const onEdit = useCallback((value: ItemType) => {
    setActiveItem(value);
    setVisiblePopup(true);
  }, []);

  const onDelete = useCallback(
    (value: ItemType | Partial<ItemType>) => {
      setItemsList((prev) =>
        prev.filter((item) => item.id !== value.id),
      );
    },
    [],
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
                itemsList?.length ?? 0
              } Completed`}
            </Text>
          </View>
          <View style={styles.content}>
            {itemsList?.length > 0 ? (
              <FlatList
                data={itemsList}
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
