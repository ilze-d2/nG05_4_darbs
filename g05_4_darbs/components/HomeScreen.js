import * as React from 'react';
import { ActivityIndicator, FlatList, Button, View, Text,} from 'react-native';
import { useState, useEffect} from 'react';
export default function HomeScreen({ navigation,stock }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://date.nager.at/api/v2/publicholidays/2021/LV')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "teal", padding:10}}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList 
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={{marginTop: 5, backgroundColor: "#fff", padding: 20, textAlign: "center"}}>
              <Text onPress={() => navigation.navigate ('Screen2')}>
              <Text style={{color: "#323232", fontSize: 18 , fontFamily: "Helvetica"}}>{item.date}</Text>
              </Text>
              <Text style={{color: "#323232", paddingVertical: 5, fontFamily: "Helvetica", fontSize: 16, fontWeight: 600}}>{item.localName}</Text>
              <Text style= {{color: "#323232"}}>{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}