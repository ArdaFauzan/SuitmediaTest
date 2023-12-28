import React, { useEffect, useState } from 'react';
import { FlatList, Image, RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

const DaftarUserScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const setData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=10`);
      setUsers((userSebelumnya) => (page === 1 ? response.data.data : [...userSebelumnya, ...response.data.data]));
      setPage((halamanSebelumnya) => halamanSebelumnya + 1);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setPage(1);
    setData();
  };

  const onEndReached = () => {
    if (!loading) {
      setData();
    }
  };

  const renderItemUser = ({ item }) => (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('SecondPage', { title: `${item.first_name} ${item.last_name}` })}>
        <View style={{ padding: 16, borderColor: '#000000', flexDirection: 'row' }}>
          <Image source={{ uri: item.avatar }} style={{ width: 49, height: 49, borderRadius: 49 / 2 }} />

          <View style={{ marginLeft: 10, justifyContent: 'center', alignContent: 'center' }}>
            <Text style={{ color: 'black' }}>{`${item.first_name} ${item.last_name}`}</Text>
            <Text style={{ color: 'black' }}>{item.email}</Text>
          </View>
        </View>
      </TouchableOpacity>

    </View>
  );

  useEffect(() => {
    setData();
  }, []);

  return (
    <View style={{backgroundColor: 'white' }}>
      <View
        style={{
          backgroundColor: '#ffffff',
          paddingTop: 30,
          paddingBottom: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/back.png')}
            style={{ height: 50, width: 50, marginLeft: 10 }}
          />
        </TouchableOpacity>

        <Text
          style={{
            color: '#000000',
            fontWeight: '600',
            fontSize: 22,
            textAlign: 'center',
            flex: 1,
            marginRight: 35,
          }}
        >
          Third Page
        </Text>
      </View>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItemUser}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        ListEmptyComponent={<Text>User Not Found</Text>}
      />
    </View>
  );
};

export default DaftarUserScreen;
