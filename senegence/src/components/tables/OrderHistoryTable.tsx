import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Table, TableWrapper, Row} from 'react-native-table-component';
import {SIZES} from '../../constants';

export default function OrderHistoryTable() {
  const [state, setstate] = useState({
    tableHead: ['#Order', 'Date', 'Status', 'Total'],
    tableData: [
      ['100 Kredits', '03/21/2021', 'Pending', '$100'],
      ['100 Kredits', '03/21/2021', 'Pending', '$100'],
      ['100 Kredits', '03/21/2021', 'Pending', '$100'],
      ['100 Kredits', '03/21/2021', 'Pending', '$100'],
      ['100 Kredits', '03/21/2021', 'Pending', '$100'],
      ['100 Kredits', '03/21/2021', 'Pending', '$100'],
      ['100 Kredits', '03/21/2021', 'Pending', '$100'],
    ],
    widthArr: [
      SIZES.width / 3,
      SIZES.width / 3,
      SIZES.width / 3,
      SIZES.width / 3,
    ],
  });

  return (
    <View>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
            <Row
              data={state.tableHead}
              widthArr={state.widthArr}
              style={styles.header}
              textStyle={styles.text}
            />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              {state.tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={state.widthArr}
                  style={[
                    styles.row,
                    index % 2 && {backgroundColor: '#ffffff'},
                  ]}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  header: {height: 50, backgroundColor: '#ffffff'},
  text: {textAlign: 'center', fontWeight: '100'},
  dataWrapper: {marginTop: -1},
  row: {height: 40, backgroundColor: '#f7f7fa'},
});
