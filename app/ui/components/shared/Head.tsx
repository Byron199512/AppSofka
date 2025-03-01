import React from 'react'

import { Text, View } from 'react-native'
interface Props{
    title:string
}
export const Head = ({title}:Props) => {

  return (
    <View style={{display:'flex',alignItems:'center'}}>
        <Text style={{fontSize:24,fontWeight:'500'}}>{title}</Text>
    </View>
  )
}
