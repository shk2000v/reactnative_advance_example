import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { FC, JSXElementConstructor } from 'react';

const KeyboardAvoidingViewWrapper = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const headerHeight = useHeaderHeight();

  return (
    <>
      {children}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={headerHeight + StatusBar.currentHeight!}
      />
    </>
  );
};

export default KeyboardAvoidingViewWrapper;
