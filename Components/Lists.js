// 약 정보 보여주는 리스트 컴포넌트
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

// navigation
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// 아이콘
import Icon from 'react-native-vector-icons/FontAwesome';

const List = ({medicinedata}) => {

  const navigation = useNavigation();

  const handlePress = (medicinedata) => {
    console.log("itemSeq나와라@",medicinedata)
    navigation.navigate('Detail', {medicinedatitemSeq: medicinedata})
  }

  return (
    // <TouchableOpacity onPress={()=>{navigation.navigate("MedicineDetail")}}>
        <View>
          {
          medicinedata && medicinedata.map((e, idx) =>{
            return(
              <TouchableOpacity 
                key = {idx}
                onPress={() => handlePress(medicinedata[idx].itemSeq)}>
                <View style={styles.medibox}>
                  <View>
                    {
                      medicinedata[idx].itemImage === null?<Icon style={styles.mediicon} name="medkit" size={70} color="black" />:
                      <Image style={styles.mediimage} source={{uri : medicinedata[idx].itemImage}}/>
                    }
                  </View> 
                  <View style={styles.medititletext}>
                    <Text style={styles.meditext}>{medicinedata[idx].itemName}</Text>
                    <Text>업데이트 날짜: {medicinedata[idx].updateDe}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
          
          {/* {
            input === "" ?
              medicinedata && medicinedata.map((e, idx) =>{
                return(
                  <TouchableOpacity onPress={()=>navigation.navigate("MedicineDetail",{medicinedata:medicinedata[idx].itemName})}>
                    <View style={styles.medibox}>
                      <View>
                        {
                          medicinedata[idx].itemImage === null?<Icon style={styles.mediicon} name="medkit" size={80} color="black" />:
                          <Image style={styles.mediimage} source={{uri : medicinedata[idx].itemImage}}/>
                        }
                      </View> 
                      <View style={styles.medititletext}>
                        <Text style={styles.meditext}>{medicinedata[idx].itemName}</Text>
                        <Text>업데이터 된 날짜: {medicinedata[idx].updateDe}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              })
            : 
            medicinedata && medicinedata.map((e, idx) =>{
              return(
                medicinedata[idx].itemName.includes(input) ?
                <TouchableOpacity onPress={()=>navigation.navigate("MedicineDetail",{medicinedata:medicinedata[idx].itemName})}>
                  <View style={styles.medibox}>
                    <View>
                      {
                        medicinedata[idx].itemImage === null?<Icon style={styles.mediicon} name="medkit" size={80} color="black" />:
                        <Image style={styles.mediimage} source={{uri : medicinedata[idx].itemImage}}/>
                      }
                    </View> 
                    <View style={styles.medititletext}>
                      <Text style={styles.meditext}>{medicinedata[idx].itemName}</Text>
                      <Text>업데이터 된 날짜: {medicinedata[idx].updateDe}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                :null
              )
            })
          } */}
        </View>          
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
medibox: {
    flex:1,
    flexDirection: 'row',
    alignItems: "center",
    borderWidth:1,
    borderRadius:10,
    borderBottomColor: 'black',
    marginBottom: '10%',
    padding:5,
    },
    mediicon:{
    // borderWidth:1,
    // borderColor:'red',
    padding:2,
    justifyContent: "center",
    alignItems: "center",
    marginRight:15,
    },
    mediimage:{
      width: 100 , 
      height: 100,
      resizeMode:"contain",
      
    },
    medititletext:{
        // borderWidth:1,
        // borderColor:'blue',
        width:'90%',
        margin:10,
    // justifyContent: "center",
    // alignItems: "center",
    },
    meditext:{
    // borderWidth:1,
    // justifyContent: "center",
    // alignItems: "center",
    },
});


export default List;