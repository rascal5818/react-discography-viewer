import React from 'react';
import DisplayAlbums from './DisplayAlbums';

class ArtistSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albumCount: null,
            artistSelected: null,
        };
        //this.setArtist = this.setArtist.bind(this);
    }

    setArtist(e) {
        switch (e.target.value) {
            case '':
                return this.setState({
                    albumCount: null,
                    artistSelected: null,
                });
            case 'radiohead':
                return this.setState({
                    albumCount: '8 Studio Albums',
                    artistSelected: 'Radiohead',
                });
            case 'beatles':
                return this.setState({
                    albumCount: '12 Studio Albums',
                    artistSelected: 'The Beatles',
                });
            case 'arcadefire':
                return this.setState({
                    albumCount: '5 Studio Albums',
                    artistSelected: 'Arcade Fire',
                });
            case 'beachhouse':
                return this.setState({
                    albumCount: '7 Studio Albums',
                    artistSelected: 'Beach House',
                });
            case 'sufjanstevens':
                return this.setState({
                    albumCount: '8 Studio Albums',
                    artistSelected: 'Sufjan Stevens',
                });
            default:
                return;
        }
    }

    render() {
        return (
            <div>
                <h2>Select an artist</h2>
                <select
                    name="artists"
                    id="artists"
                    onChange={e => this.setArtist(e)}
                >
                    <option value=""></option>
                    <option value="beatles">The Beatles</option>
                    <option value="radiohead">Radiohead</option>
                    <option value="arcadefire">Arcade Fire</option>
                    <option value="beachhouse">Beach House</option>
                    <option value="sufjanstevens">Sufjan Stevens</option>
                </select>
                <DisplayAlbums
                    artist={this.state.artistSelected}
                    albums={this.state.albumCount}
                />
            </div>
        );
    }
}

export default ArtistSelection;
