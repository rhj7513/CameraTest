// 약 상세 화면
import axios from 'axios';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, Image, Button, Animated} from 'react-native';
import {WebView} from 'react-native-webview';

// image import
import Medi from '../../assets/medi.png';

// 즐겨찾기 icon
// import BookMark from '../../components/BookMarkButton';
import BookMarkButton from '../../Components/BookMarkButton';

// 서버 포트
import ServerPort from '../../Components/ServerPort';
const IP = ServerPort();



function MedicineDetail({route}) {
  const {medicinedatitemSeq} = route.params;//다른 컴포넌트에서 넘겨받은 약 고유값
  const[medicinedetail, setMedicinedetail] = React.useState(null);
  const[medicinname, setMedicinName] = React.useState("");

  React.useEffect(()=>{
    const setData = async () =>{
      await axios.get(`${IP}/medicine/detail`,{
        params: {
          itemSeq: medicinedatitemSeq, // 약 고유 번호 서버로 보내서 그값만 보여줌
        },
      })
      .then(function(res){
        // console.log("res데이터 잘 받아왔나요?: ", res.data);
        // console.log("1",res.data);
        const data = res.data;
        console.log(`Data:\n${JSON.stringify(data, null, 2)}`);
        setMedicinedetail(res.data);
        setMedicinName(res.data.itemName);
      })
      .catch(function(error){
        console.log("Medicindetail 목록 가져오기 실패,,,", error)
      })
    }
    setData();
    console.log(medicinname)
  },[]);

 
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titlebutton}>
          <Text style={styles.title}>약 상세페이지  </Text>
          <BookMarkButton />
        </View>

        <View style={styles.imagebox}>
        {medicinedetail && medicinedetail.itemImage !== null ? <Image source={{uri:medicinedetail.itemImage}} style={styles.image}/> : (medicinedetail ? null : <Image source={Medi} style={styles.image} />)}
          {/* {medicinedetail && medicinedetail.itemImage === null ? <Image source={Medi} style={styles.image} /> : <Image source={{uri:medicinedetail.itemImage}} style={styles.image}/>} */}
          
        </View>

        <View style={styles.meditextbox}>
          <Text style={styles.meditexttitle}>
            {/* 약 이름 */}
            {medicinedetail&&medicinedetail.itemName}
          </Text>
          
          <Text style={styles.meditextcontent}>
            {/* 약 설명 */}
            <View>
              <Text>
                약 정보
              </Text>
            </View>
            {/* <View>
              <HTML source{{}} />
            </View> */}
            {medicinedetail&&medicinedetail.atpnQesitm}

            
            {/* {medicinedetail&&<Text dangerouslySetInnerHTML={{ __html: medicinedetail.atpnQesitm }} />} */}

            {/* <View>
              <Text>
                {medicinedetail&&medicinedetail.atpnQesitm}
              </Text>
            </View> */}
          </Text>
        </View>
        
      </ScrollView> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    // borderBottomWidth:1,
    // borderBottomColor: 'black',
    width:'93%'
    // marginBottom: '15%',
  },
  titlebutton:{
    borderBottomWidth:1,
    // borderColor:"blue",
    flexDirection: 'row',
    marginBottom: '15%',
  },
  imagebox:{
    flex:1,
    // borderWidth:1,
    // borderColor:'black',
    marginBottom:'10%',
  },
  image:{
    width: '100%',
    height: 150,
    resizeMode: "contain"
  },
  meditextbox:{
    borderWidth:1,
    borderColor:'black',
    padding:10,
  },
  meditexttitle:{
    // borderWidth:1,
    // borderColor:'#800000',
    marginBottom:'5%',
  },
  meditextcontent:{
    // borderWidth:1,
    // borderColor:'#B22222',
  }
  
});

export default MedicineDetail;

