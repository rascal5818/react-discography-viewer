import React from 'react';
import radiohead1 from './img/radiohead_pablohoney.jpg';
import radiohead2 from './img/radiohead_thebends.jpg';
import radiohead3 from './img/radiohead_okcomputer.jpg';
import radiohead4 from './img/radiohead_kida.jpg';
import radiohead5 from './img/radiohead_amnesiac.jpg';
import radiohead6 from './img/radiohead_hailtothethief.jpg';
import radiohead7 from './img/radiohead_inrainbows.jpg';
import radiohead8 from './img/radiohead_kingoflimbs.jpg';
import radiohead9 from './img/radiohead_amoonshapedpool.jpg';
import beachhouse1 from './img/beachhouse_beachhouse.jpg';
import beachhouse2 from './img/beachhouse_devotion.jpg';
import beachhouse3 from './img/beachhouse_teendream.jpg';
import beachhouse4 from './img/beachhouse_bloom.jpg';
import beachhouse5 from './img/beachhouse_depressioncherry.jpg';
import beachhouse6 from './img/beachhouse_thankyourluckystars.jpg';
import beachhouse7 from './img/beachhouse_7.jpg';
import beatles1 from './img/beatles_pleasepleaseme.jpg';
import beatles2 from './img/beatles_withthebeatles.jpg';
import beatles3 from './img/beatles_harddaysnight.jpg';
import beatles4 from './img/beatles_beatlesforsale.jpg';
import beatles5 from './img/beatles_help.jpg';
import beatles6 from './img/beatles_rubbersoul.jpg';
import beatles7 from './img/beatles_revolver.jpg';
import beatles8 from './img/beatles_sgtpeppers.jpg';
import beatles9 from './img/beatles_magicalmysterytour.jpg';
import beatles10 from './img/beatles_whitealbum.jpg';
import beatles11 from './img/beatles_abbeyroad.jpg';
import beatles12 from './img/beatles_letitbe.jpg';
import arcadefire1 from './img/arcadefire_funeral.jpg';
import arcadefire2 from './img/arcadefire_neonbible.jpg';
import arcadefire3 from './img/arcadefire_suburbs.jpg';
import arcadefire4 from './img/arcadefire_reflektor.jpg';
import arcadefire5 from './img/arcadefire_everythingnow.jpg';
import sufjanstevens1 from './img/sufjanstevens_asuncame.jpg';
import sufjanstevens2 from './img/sufjanstevens_enjoyyourrabbit.jpg';
import sufjanstevens3 from './img/sufjanstevens_michigan.jpg';
import sufjanstevens4 from './img/sufjanstevens_sevenswans.jpg';
import sufjanstevens5 from './img/sufjanstevens_illinois.jpg';
import sufjanstevens6 from './img/sufjanstevens_ageofadz.jpg';
import sufjanstevens7 from './img/sufjanstevens_carrielowell.jpg';
import sufjanstevens8 from './img/sufjanstevens_ascension.jpg';

function imageLoop(props) {
    let albums = [];

    const radioheadAlbums = [
        radiohead1,
        radiohead2,
        radiohead3,
        radiohead4,
        radiohead5,
        radiohead6,
        radiohead7,
        radiohead8,
        radiohead9,
    ];

    const beachHouseAlbums = [
        beachhouse1,
        beachhouse2,
        beachhouse3,
        beachhouse4,
        beachhouse5,
        beachhouse6,
        beachhouse7,
    ];

    const beatlesAlbums = [
        beatles1,
        beatles2,
        beatles3,
        beatles4,
        beatles5,
        beatles6,
        beatles7,
        beatles8,
        beatles9,
        beatles10,
        beatles11,
        beatles12,
    ];

    const arcadeFireAlbums = [
        arcadefire1,
        arcadefire2,
        arcadefire3,
        arcadefire4,
        arcadefire5,
    ];

    const sufjanStevensAlbums = [
        sufjanstevens1,
        sufjanstevens2,
        sufjanstevens3,
        sufjanstevens4,
        sufjanstevens5,
        sufjanstevens6,
        sufjanstevens7,
        sufjanstevens8,
    ];

    switch (props.artist) {
        case '':
            albums = [];
            break;
        case 'Radiohead':
            albums = [...radioheadAlbums];
            break;
        case 'The Beatles':
            albums = [...beatlesAlbums];
            break;
        case 'Arcade Fire':
            albums = [...arcadeFireAlbums];
            break;
        case 'Sufjan Stevens':
            albums = [...sufjanStevensAlbums];
            break;
        case 'Beach House':
            albums = [...beachHouseAlbums];
            break;
        default:
            break;
    }

    return (
        <div>
            {albums.map(album => {
                return (
                    <React.Fragment>
                        <img src={album} alt="" />
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default imageLoop;
