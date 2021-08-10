import AsyncStorage from "@react-native-async-storage/async-storage"

export const setCookie = async (key: string, value : string) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
        console.log(e?.message)
    }
}

export const getCookie = async (callback : any, token: string) => {
    try {
      const value = await AsyncStorage.getItem(token)
      //Check if the token exists, it will just return or else it will go to graphql mutation and get the token back
      if(value !== null) {
        return;
      }else{
        callback();
      }
    } catch(e) {
      console.log(e?.message);
    }
  }