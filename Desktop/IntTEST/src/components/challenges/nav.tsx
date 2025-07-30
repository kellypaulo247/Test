import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  SafeAreaView,
} from 'react-native';

interface NavLink {
  name: string;
  path: string;
}

const NAV_LINKS: NavLink[] = [
  { name: 'AEON', path: '/' },
  { name: 'Showcase', path: '/Showcase' },
  { name: 'Docs', path: '/Docs' },
  { name: 'Blog', path: '/Blog' },
  { name: 'Analytics', path: '/Analytics' },
  { name: 'Commerce', path: '/Commerce' },
  { name: 'Templates', path: '/Templates' },
  { name: 'Enterprise', path: '/Enterprise' },
];

const DESKTOP_BREAKPOINT = 768;

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<string>('AEON');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsDesktop(Dimensions.get('window').width >= DESKTOP_BREAKPOINT);
    };
    updateSize();
    const subscription = Dimensions.addEventListener('change', updateSize);
    return () => subscription?.remove?.();
  }, []);

  const handleLinkPress = useCallback((name: string) => {
    setSelectedLink(name);
    if (!isDesktop) setOpen(false);
  }, [isDesktop]);

  const handleSearchChange = useCallback((text: string) => {
    setSearchQuery(text);
  }, []);

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.navbar}>
          {isDesktop ? (
            <>
             
              <View style={styles.linksContainer}>
                {NAV_LINKS.map((link) => (
                  <TouchableOpacity
                    key={link.path}
                    onPress={() => handleLinkPress(link.name)}
                    style={styles.linkWrapper}
                  >
                    <Text
                      style={[
                        styles.link,
                        selectedLink === link.name ? styles.linkSelected : null,
                      ]}
                    >
                      {link.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <TextInput
                style={styles.searchInput}
                placeholder="Search documentation..."
                value={searchQuery}
                onChangeText={handleSearchChange}
              />
            </>
          ) : (
            <>
              <Text style={styles.title}>{selectedLink}</Text>
              <TouchableOpacity style={styles.iconContainer} onPress={toggleMenu}>
                <Text style={styles.icon}>{open ? '✕' : '☰'}</Text>
              </TouchableOpacity>
              {open && (
                <View style={styles.mobileMenu}>
                  <View style={styles.mobileMenuHeader}>
                    <Text style={styles.mobileTitle}>AEON (Bonus)</Text>
                    <TouchableOpacity onPress={toggleMenu}>
                      <Text style={styles.closeIcon}>✕</Text>
                    </TouchableOpacity>
                  </View>
                  {NAV_LINKS.map((link) => (
                    <TouchableOpacity
                      key={link.path}
                      onPress={() => handleLinkPress(link.name)}
                      style={styles.mobileLinkWrapper}
                    >
                      <Text style={styles.mobileLink}>{link.name}</Text>
                    </TouchableOpacity>
                  ))}
                  <TextInput
                    style={styles.mobileSearchInput}
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChangeText={handleSearchChange}
                  />
                </View>
              )}
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // fix long content on small screens
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  linkWrapper: {
    marginLeft: 20,
  },
  link: {
    fontSize: 16,
    color: '#000',
  },
  linkSelected: {
    fontWeight: '600',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginLeft: 20,
    flex: 1,
    maxWidth: 300,
    backgroundColor: '#f8f8f8',
  },
  iconContainer: {
    padding: 10,
  },
  icon: {
    fontSize: 30,
  },
  mobileMenu: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 20,
    zIndex: 10,
  },
  mobileMenuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  mobileTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  closeIcon: {
    fontSize: 20,
  },
  mobileLinkWrapper: {
    marginVertical: 10,
  },
  mobileLink: {
    fontSize: 16,
    color: '#666',
  },
  mobileSearchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginTop: 20,
    backgroundColor: '#f8f8f8',
  },
});

export default Navbar;
