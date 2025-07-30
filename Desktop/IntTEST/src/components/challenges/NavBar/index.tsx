import React, { useEffect, useState, useCallback } from 'react';
import { Dimensions, StyleSheet, View, SafeAreaView } from 'react-native';
import BrowserView from './browerView';
import MobileView from './nativeView';  
import { DESKTOP_WIDTH,windowWidth } from '../../../utils/constants/defaultValues';




const Navbar: React.FC = () => {
  const [selected, setSelected] = useState('AEON');
  const [search, setSearch] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const width = windowWidth;
      setIsDesktop(width >= DESKTOP_WIDTH);
    };

    updateLayout();
    const sub = Dimensions.addEventListener('change', updateLayout);
    return () => sub?.remove?.();
  }, []);

  const handleSelect = useCallback((name: string) => {
    setSelected(name);
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        {isDesktop ? (
          <BrowserView
            selected={selected}
            onSelect={handleSelect}
            search={search}
            onSearch={setSearch}
          />
        ) : (
          <MobileView />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default Navbar;
