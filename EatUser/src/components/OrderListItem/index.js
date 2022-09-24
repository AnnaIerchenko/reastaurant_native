import { Text, View , Image, Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const OrderListItem = ({ order}) => {

  const navigation = useNavigation()

  return (
    <Pressable 
      onPress={() => navigation.navigate("Order", { id: order.id})}
      style={{ flexDirection: "row", margin: 10, alignItems: "center"}}>
      <Image 
        source={{ url: order.Restaurant.image}}
        style={{ width: 100, height: 100, marginRight: 5}}
      />

      <View>
        <Text style={{ fontWeight: "600", fontSize: 16}}>
          {order.Restaurant.name}
        </Text>
        <Text>1 items $10.45</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </Pressable>
  )
}

export default OrderListItem

