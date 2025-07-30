import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { NAV_LINKS } from '../NavBar/constants';


const MobileView: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState('AEON');
  const [search, setSearch] = useState('');

  const handleSelect = (name: string) => {
    setSelected(name);
    setMenuOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{selected}</Text>
        <TouchableOpacity onPress={() => setMenuOpen((prev) => !prev)}>
          <Text style={styles.icon}>{menuOpen ? '✕' : '☰'}</Text>
        </TouchableOpacity>
      </View>

      {menuOpen && (
        <View style={styles.menu}>
          {NAV_LINKS.map((link) => (
            <TouchableOpacity key={link.path} onPress={() => handleSelect(link.name)}>
              <Text style={styles.link}>{link.name}</Text>
            </TouchableOpacity>
          ))}
          
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 28,
  },
  menu: {
    marginTop: 10,
    padding: 16,
    borderRadius: 6,
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#ccc',
    gap: 16,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  search: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    backgroundColor: '#fff',
  },
});

export default MobileView;
