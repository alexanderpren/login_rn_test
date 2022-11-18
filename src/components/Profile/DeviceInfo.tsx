import DeviceInfo from 'react-native-device-info';
import * as React from 'react';
import {Paragraph, Dialog, Portal} from 'react-native-paper';

const MyComponent = ({visible, hideDialog}) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>My Phone</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{`Brand: ${DeviceInfo.getBrand()}`}</Paragraph>
          <Paragraph>{`Model: ${DeviceInfo.getModel()}`}</Paragraph>
          <Paragraph>{`Device Id: ${DeviceInfo.getDeviceId()}`}</Paragraph>
          <Paragraph>{`Base OS ${DeviceInfo.getBaseOs()}`}</Paragraph>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default MyComponent;
