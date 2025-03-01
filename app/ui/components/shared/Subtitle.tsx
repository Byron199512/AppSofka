import React from 'react'
import { Text, View } from 'react-native'
interface Props{
    label:string,
    value:string
}
export const Subtitle = ({label,value}:Props) => {
  return (
   <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={{fontSize:18,opacity:0.6}}>{label}</Text>
    <Text style={{fontSize:18,fontWeight:'500'}}>{value}</Text>
   </View>
  )
}
