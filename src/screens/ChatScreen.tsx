// screens/Home.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RootStackParamList } from '../store/types';
import { StackScreenProps } from '@react-navigation/stack';

type ChatScreenProps = StackScreenProps<RootStackParamList, 'ChatScreen'>;

const ChatScreen = ({ navigation }: ChatScreenProps) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>Trường đại học Thủ Dầu Một</Text>
      </View>
      
      <View style={styles.cardContainer}>
        <TouchableOpacity 
          style={[styles.card, { backgroundColor: '#FFB74D' }]}
          onPress={() => navigation.navigate('ChatScreen')} // Chuyển đến màn hình khác
        >
          <Icon name="plane" size={30} color="#fff" />
          <Text style={styles.cardText}>Tìm chuyến bay</Text>
        </TouchableOpacity>
        {/* Các TouchableOpacity khác... */}
      </View>

      <View style={styles.promotionContainer}>
        <Text style={styles.promotionTitle}>Ưu đãi hiện hành</Text>
        <TouchableOpacity style={styles.promotionCard}>
          <Text style={styles.promotionText}>Xem tất cả khuyến mãi</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Ưu đãi về máy</Text>
        <TouchableOpacity style={styles.footerCard}>
          <Text style={styles.footerText}>Sản phẩm, vé, thuê xe</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    padding: 20,
    backgroundColor: '#3F51B5',
    alignItems: 'center',
  },
  username: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    width: '48%',
    padding: 20,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  cardText: {
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  promotionContainer: {
    padding: 20,
  },
  promotionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  promotionCard: {
    backgroundColor: '#FFB74D',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  promotionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerCard: {
    backgroundColor: '#3F51B5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  customButtonContainer: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default ChatScreen;
