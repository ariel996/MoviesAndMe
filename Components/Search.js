import React from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi';

//import films from '../Helpers/filmsData';
import FilmItem from './FilmItem';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.searchedText= ""
        this.state = { 
            films: []
         }
    }
    _searchInputChanged(text) {
        this.searchedText = text
    }
    _loadFilms() {
        if (this.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
                this.setState({ films: data.results })
            })
        }
    }
    render() {
        return (
            <View style={ styles.main_container }>
                <TextInput style={styles.textinput} placeholder='Titre du film' onChangeText={(text) => this._searchInputChanged(text)}/>
                <Button style={styles.textinput} title='Rechercher' onPress={() => this._loadFilms()}/>

                <FlatList data={this.state.films} 
                keyExtractor={(item) => item.id.toString()} 
                renderItem={({item})=> <FilmItem film={item}/>} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
        marginLeft: 5, 
        marginRight: 5, 
        height: 50,  
        borderColor: '#000000', 
        borderWidth:1, 
        paddingLeft: 5
    }
})


export default Search