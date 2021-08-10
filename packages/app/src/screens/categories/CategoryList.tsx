import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CategoryList({data}:any) {
    return <><Text> From category List - { data?.categoryList?.map((item:any) => <Text key={`${item.name}-cateList`}>{item.name}</Text>)}</Text>
    </>;
    
}

const styles = StyleSheet.create({})
