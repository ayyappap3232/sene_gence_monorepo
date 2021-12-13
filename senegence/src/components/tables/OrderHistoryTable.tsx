import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import {COLORS, images, SIZES} from '../../constants';

export default function OrderHistoryTable() {
  const [state, setstate] = useState({
    tableHead: ['#Order', 'Date', 'Status', 'Total', '', ''],
    tableData: [
      ['100 Kredits', '03/21/2021', 'Pending', '$100', '', ''],
      ['100 Kredits', '03/21/2021', 'Pending', '$100', '', ''],
      ['100 Kredits', '03/21/2021', 'Pending', '$100', '', ''],
      ['100 Kredits', '03/21/2021', 'Pending', '$100', '', ''],
      ['100 Kredits', '03/21/2021', 'Pending', '$100', '', ''],
      ['100 Kredits', '03/21/2021', 'Pending', '$100', '', ''],
      ['100 Kredits', '03/21/2021', 'Pending', '$100', '', ''],
    ],
    widthArr: [
      SIZES.width / 2,
      SIZES.width / 2,
      SIZES.width / 2,
      SIZES.width / 2,
      SIZES.width / 2,
      SIZES.width / 2,
    ],
  });

  const buyAgain = (data: any, index: number) => (
    <TouchableOpacity onPress={() => console.warn(index)}>
      <View>
        <Text style={styles.btnText}>Buy Again</Text>
      </View>
    </TouchableOpacity>
  );

  const eyeView = (data: any, index: number) => (
    <TouchableOpacity onPress={() => console.warn(index)}>
      <View>
        <Image source={images.eyes} style={{width: 16, height: 16}}/>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Table >
            <Row
              data={state.tableHead}
              style={styles.rowHead}
              textStyle={styles.rowText}
            />
            {state.tableData.map((rowData, index) => (
              <TableWrapper key={index} >
                <View style={[styles.row,index % 2 && {backgroundColor: '#ffffff'}]}>
                  {rowData.map((cellData, cellIndex) => (
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Cell
                      key={cellIndex}
                      data={
                        cellIndex === 5 ? buyAgain(cellData, index) : (cellIndex === 4) ? eyeView(cellData, index): cellData
                      }
                      textStyle={styles.text}
                    />
                    </ScrollView>
                  ))}
                </View>
              </TableWrapper>
            ))}
          </Table>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#ffffff' },
  text: { margin: 6 ,width: SIZES.width/5},
  rowText: { margin: 6, alignSelf:'flex-start'},
  rowHead: { flexDirection: 'row', backgroundColor: '#f7f7fa', alignSelf:'flex-start'},
  row: { flexDirection: 'row', backgroundColor: '#f7f7fa', alignSelf:'flex-start'},
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: COLORS.primary3 }
});
