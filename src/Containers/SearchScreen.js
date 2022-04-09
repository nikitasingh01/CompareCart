import React,{useState} from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity } from 'react-native';
import SearchBar from '../Components/SearchBar';

const SearchScreen =() => {
    const [term,setTerm]=useState('');
    return(
        <View>
            <SearchBar 
                term={term} 
                onTermChange={newTerm =>setTerm(newTerm)}
                onTermSubmit={() => console.log('term was submitted')}
                />
            
            
        </View>
    )
};

const styles=StyleSheet.create({});

export default SearchScreen;