import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Modal, View, Text, Pressable } from 'react-native';

import { UI, SvgIcon } from 'components';
import { Constants } from 'configs';
import { ItemType } from 'types';
import styles from './styles';

type Props = {
  isVisible: boolean;
  activeItem: ItemType | null;
  onClose: () => void;
  onSaveItem: (value: ItemType | Partial<ItemType>) => void;
};

const AddNewItem = ({
  isVisible,
  activeItem,
  onClose,
  onSaveItem,
}: Props): React.JSX.Element => {
  const [item, setItem] = useState<
    ItemType | Partial<ItemType> | null
  >(null);

  useEffect(() => {
    if (!isVisible) {
      setItem(null);
    }
  }, [isVisible]);

  useEffect(() => {
    if (activeItem) {
      setItem(activeItem);
    }
  }, [activeItem]);

  const onChangeInput = useCallback(
    (value: string, field: keyof ItemType) => {
      setItem((prev) =>
        prev
          ? { ...prev, [field]: value }
          : { [field]: value },
      );
    },
    [],
  );

  const onSave = useCallback(() => {
    if (item) {
      onSaveItem(item);
    }
  }, [item, onSaveItem]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modal}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {item?.id ? 'Edit Item' : 'Add New Item'}
            </Text>
            <Pressable
              style={styles.btnClose}
              onPress={onClose}
              hitSlop={Constants.hitSlop8}
            >
              <SvgIcon.Close />
            </Pressable>
          </View>
          <View>
            <View
              style={[
                styles.oneInputInRowWidth,
                styles.inputWrapper,
              ]}
            >
              <UI.Input
                label="Name"
                value={item?.name ?? ''}
                onChangeText={(text) =>
                  onChangeInput(text, 'name')
                }
              />
            </View>
            <View style={styles.rowWrapper}>
              <View style={styles.twoInputsInRowWidth}>
                <UI.Input
                  label="Quantity"
                  value={item?.quantity ?? ''}
                  keyboardType="decimal-pad"
                  onChangeText={(text) =>
                    onChangeInput(text, 'quantity')
                  }
                />
              </View>
              <View style={styles.twoInputsInRowWidth}>
                <UI.Input
                  label="Unit"
                  value={item?.unit ?? ''}
                  onChangeText={(text) =>
                    onChangeInput(text, 'unit')
                  }
                />
              </View>
            </View>
          </View>
          <UI.PrimaryButton
            label="Save"
            onPress={onSave}
            isDisabled={!item || !item?.name}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddNewItem;
