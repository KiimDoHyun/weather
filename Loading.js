import React from "react"
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting the fucking weather</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    // flex :1 = 화면 차지 비율
    /*
      두개의 컴포넌트가 동일한 컴포넌트 아래에 있을때
      각각 flex 를 1씩 가지면 화면을 1:1로 나눠가진다는 뜻
  
      하나는 1, 하나는 2 로 설정하면 특정 부분을 1:2로 나눈다는뜻
    */
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA",
    },

    text: {
        color: "#2c2c2c",
        fontSize: 30,
    }
})