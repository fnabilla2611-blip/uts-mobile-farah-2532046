import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const isSelesai = status === 'selesai';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View
        style={[
          styles.badge,
          isSelesai ? styles.badgeSelesai : styles.badgeProses,
        ]}
      >
        <Text
          style={[
            styles.statusText,
            isSelesai ? styles.textSelesai : styles.textProses,
          ]}
        >
          {status}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel={`Lihat detail ${title}`}
      >
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F2D5E2',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#352A30',
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginTop: 10,
    marginBottom: 12,
  },
  badgeSelesai: {
    backgroundColor: '#DCFCE7',
  },
  badgeProses: {
    backgroundColor: '#FFEDD5',
  },
  statusText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  textSelesai: {
    color: '#15803D',
  },
  textProses: {
    color: '#C2410C',
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#B83270',
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});