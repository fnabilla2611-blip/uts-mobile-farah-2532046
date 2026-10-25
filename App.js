import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import InfoCard from './src/components/InfoCard';

// Data statis diletakkan di luar komponen utama.
const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
];

export default function App() {
  const [keyword, setKeyword] = useState('');

  // Hasil berubah setiap kali pengguna mengetik.
  const hasilPencarian = DAFTAR_MAHASISWA.filter((mahasiswa) =>
    mahasiswa.nama.toLowerCase().includes(keyword.trim().toLowerCase())
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />

        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <FlatList
            style={styles.flex}
            data={hasilPencarian}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            ListHeaderComponent={
              <View>
                <Text style={styles.appTitle}>UTS Pemrograman Mobile</Text>
                <Text style={styles.identity}>
                  Farah Nabilla Azri | 2532046
                </Text>

                <Text style={styles.sectionTitle}>1. Kartu Informasi</Text>

                <InfoCard
                  title="Membuat Komponen InfoCard"
                  status="selesai"
                  onPress={() =>
                    Alert.alert(
                      'Detail Kegiatan',
                      'Judul: Membuat Komponen InfoCard\nStatus: selesai'
                    )
                  }
                />

                <InfoCard
                  title="Mempelajari Pencarian Mahasiswa"
                  status="proses"
                  onPress={() =>
                    Alert.alert(
                      'Detail Kegiatan',
                      'Judul: Mempelajari Pencarian Mahasiswa\nStatus: proses'
                    )
                  }
                />

                <Text style={styles.sectionTitle}>
                  2. Direktori Mahasiswa
                </Text>

                <TextInput
                  style={styles.searchInput}
                  placeholder="Cari nama mahasiswa..."
                  placeholderTextColor="#866D79"
                  value={keyword}
                  onChangeText={setKeyword}
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="done"
                  accessibilityLabel="Cari nama mahasiswa"
                />

                <Text style={styles.resultCount}>
                  Menampilkan {hasilPencarian.length} dari{' '}
                  {DAFTAR_MAHASISWA.length} mahasiswa
                </Text>
              </View>
            }
            renderItem={({ item }) => (
              <View style={styles.studentCard}>
                <View style={styles.numberBadge}>
                  <Text style={styles.numberText}>{item.id}</Text>
                </View>

                <View style={styles.flex}>
                  <Text style={styles.studentName}>{item.nama}</Text>
                  <Text style={styles.studentProgram}>{item.prodi}</Text>
                </View>
              </View>
            )}
            ListEmptyComponent={
              <View style={styles.emptyBox}>
                <Text style={styles.emptyText}>Data tidak ditemukan!</Text>
              </View>
            }
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3F8',
  },
  flex: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8F2457',
  },
  identity: {
    fontSize: 13,
    color: '#735D68',
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#452638',
    marginTop: 22,
    marginBottom: 12,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D784AA',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 16,
    color: '#352A30',
  },
  resultCount: {
    color: '#735D68',
    marginTop: 10,
    marginBottom: 12,
  },
  studentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#F2D5E2',
  },
  numberBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FCE0ED',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  numberText: {
    color: '#922858',
    fontWeight: 'bold',
    fontSize: 16,
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#352A30',
  },
  studentProgram: {
    fontSize: 13,
    color: '#735D68',
    marginTop: 4,
  },
  emptyBox: {
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  emptyText: {
    color: '#A1265A',
    fontSize: 16,
    fontWeight: 'bold',
  },
});