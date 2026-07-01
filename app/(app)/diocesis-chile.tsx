import React from 'react';
import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const zonas = [
  {
    titulo: 'Zona Norte',
    diocesis: [
      { nombre: 'Arica', url: 'https://obispadoarica.cl' },
      { nombre: 'Iquique', url: 'https://www.iglesiadeiquique.cl' },
      { nombre: 'Antofagasta', url: 'https://iglesiadeantofagasta.cl' },
      { nombre: 'Copiapó', url: 'https://www.obispadodecopiapo.cl' },
    ],
  },
  {
    titulo: 'Zona Centro',
    diocesis: [
      { nombre: 'La Serena', url: 'https://www.arzobispadodelaserena.cl' },
      { nombre: 'Valparaíso', url: 'https://www.obispadodevalparaiso.cl' },
      { nombre: 'Santiago', url: 'https://www.iglesiadesantiago.cl' },
      { nombre: 'Melipilla', url: 'https://www.iglesiademelipilla.cl' },
      { nombre: 'San Bernardo', url: 'https://www.obispadodesanbernardo.cl' },
      { nombre: 'Rancagua', url: 'https://www.obispadoderancagua.cl' },
    ],
  },
  {
    titulo: 'Zona Sur',
    diocesis: [
      { nombre: 'Talca', url: 'https://www.diocesisdetalca.cl' },
      { nombre: 'Chillán', url: 'https://www.diocesisdechillan.cl' },
      { nombre: 'Concepción', url: 'https://www.iglesiadeconcepcion.cl' },
      { nombre: 'Temuco', url: 'https://www.obispadodetemuco.cl' },
      { nombre: 'Valdivia', url: 'https://www.obispadodevaldivia.cl' },
      { nombre: 'Osorno', url: 'https://www.obispadodeosorno.cl' },
      { nombre: 'Puerto Montt', url: 'https://www.arzobispadodepuertomontt.cl' },
    ],
  },
  {
    titulo: 'Zona Austral',
    diocesis: [
      { nombre: 'Ancud', url: 'https://www.obispadodeancud.cl' },
      { nombre: 'Aysén', url: 'https://www.iglesiadeaysen.cl' },
      { nombre: 'Punta Arenas', url: 'https://www.iglesiademagallanes.cl' },
    ],
  },
];

export default function DiocesisChileScreen() {
  const abrirLink = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (!supported) {
        Alert.alert('Enlace no disponible', 'No fue posible abrir el sitio web.');
        return;
      }
      await Linking.openURL(url);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No fue posible abrir el sitio web.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="church" size={38} color={Colors.primary} />
          <Text style={styles.title}>Diócesis de Chile</Text>
          <Text style={styles.subtitle}>
            Selecciona una diócesis para visitar su sitio web oficial.
          </Text>
        </View>

        {zonas.map((zona) => (
          <View key={zona.titulo} style={styles.zoneContainer}>
            <Text style={styles.zoneTitle}>{zona.titulo}</Text>

            {zona.diocesis.map((diocesis) => (
              <TouchableOpacity
                key={diocesis.nombre}
                style={styles.item}
                activeOpacity={0.7}
                onPress={() => abrirLink(diocesis.url)}
              >
                <View style={styles.leftContent}>
                  <MaterialCommunityIcons
                    name="church"
                    size={24}
                    color={Colors.primary}
                  />
                  <Text style={styles.itemText}>{diocesis.nombre}</Text>
                </View>

                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color="#999"
                />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.secondary,
    marginTop: 10,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  zoneContainer: {
    marginBottom: 28,
  },
  zoneTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ECECEC',
    elevation: 3,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 17,
    color: Colors.secondary,
  },
});
