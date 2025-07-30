import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { NAV_LINKS } from '../NavBar/constants';


type Props = {
  selected: string;
  onSelect: (name: string) => void;
  search: string;
  onSearch: (value: string) => void;
};

const BrowserView: React.FC<Props> = ({ selected, onSelect, search, onSearch }) => (
  <View style={styles.wrapper}>
    <View style={styles.links}>
      {NAV_LINKS.map((link) => (
        <TouchableOpacity key={link.path} onPress={() => onSelect(link.name)}>
          <Text style={[styles.link, selected === link.name && styles.active]}>
            {link.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <TextInput
      placeholder="Search documentation..."
      value={search}
      onChangeText={onSearch}
      style={styles.search}
    />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 16,
  },
  links: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  link: {
    fontSize: 16,
    color: '#000',
  },
  active: {
    fontWeight: '600',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  search: {
    marginLeft: 'auto',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    maxWidth: 300,
    backgroundColor: '#f8f8f8',
  },
});

export default BrowserView;
