import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

    state = {
        albums: []
    };

    componentWillMount() {
        console.log('AlbumList::componentWillMount');
        // debugger
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((res) => {
                // console.log(res);
                this.setState({
                    albums: res.data
                })
            })
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <Text key={album.title}>{album.title}</Text>
        )
    }

    render() {
        console.log('AlbumList::render');
        // console.log('AlbumList::albums', this.state);

        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
};

export default AlbumList;
