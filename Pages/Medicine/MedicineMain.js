// 모든 약 정보 볼 수 있는 메인화면
import axios from 'axios';
import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity , Button} from 'react-native';

// navigation
import 'react-native-gesture-handler';

// 외부에서 불러온 것들
import Icon from 'react-native-vector-icons/FontAwesome';
import BookMarkModal from '../BookMark/BookMarkModal';
// 약목록 보여주는 component
import List from '../../Components/Lists';

// 서버 포트
import ServerPort from '../../Components/ServerPort';
const IP = ServerPort();

function MedicineMain({navigation}) {

  const [medicinedata, setMedicinedata] = React.useState([]);//약 정보
  const [page, setPage] = React.useState(1);//다음 page 번호


  React.useEffect(()=>{
    const setData = async () =>{
      await axios.get(`${IP}/medicine/search`,{
        params: {
          pageNo: page, // 동적으로 변경되는 페이지 번호 값
        },
      })
      .then(function(res){
        // console.log("res데이터 잘 받아왔나요?: ", res.data);
        // console.log("페이지", page)
        setMedicinedata(res.data.items);
      })
      .catch(function(error){
        console.log("Medicin 목록 가져오기 실패,,,", error)
      })
    }
    setData();
    // console.log("랜더링 되나?")
  },[page]);//페이지 번호가 변경될 때마다 실행되도록 해줌

  const handlePageChange = (newPage) => {
    // console.log("페이지 바뀜?",newPage)
    setPage(newPage);
  }



  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>모든 약 확인할 수 있는 곳</Text>
        
          <List medicinedata={medicinedata}/>

            <View style={{flexDirection: 'row',justifyContent:"space-between"}}>
              <TouchableOpacity style={{borderWidth:1,}} onPress={()=>{page > 1 && handlePageChange(page -1)}}>
                <Text>이전 페이지</Text>
              </TouchableOpacity>
              <Text>{page}</Text>
              <TouchableOpacity style={{borderWidth:1,}} onPress={()=>{handlePageChange(page +1)}}>
                <Text>다음 페이지</Text>
              </TouchableOpacity>
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
    borderBottomWidth:1,
    borderBottomColor: 'black',
    marginBottom: '10%',
  },
  medibox: {
    flex:1,
    flexDirection: 'row',
    alignItems: "center",
    borderWidth:1,
    borderBottomColor: 'black',
    marginBottom: '10%',
  },
  mediicon:{
    borderWidth:1,
    // height:'100%',
    justifyContent: "center",
    alignItems: "center",
  },
  medititletext:{
     borderWidth:1,
     borderColor:'blue',
     width:'70%',
    justifyContent: "center",
    alignItems: "center",
  },
  meditext:{
    borderWidth:1,
    justifyContent: "center",
    alignItems: "center",
  },
  medimodal:{
    flex: 1, 
    // borderBottomWidth:1,
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default MedicineMain;

