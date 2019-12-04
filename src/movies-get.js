import blackmirror from "./images/blackmirror.jpg";
import breakingbad from "./images/breakingbad.jpg";
import deathnote from "./images/deathnote.jpg";
import got from "./images/got.jpg";
import thewalkingdead from "./images/thewalkingdead.jpg";
import thewire from "./images/thewire.jpg";

export default function getMovies(){
    return [
  { id:"blackmirror", img:blackmirror, alt:'Black Mirror', title:'Black Mirror' },
  { id:"breakingbad", img:breakingbad, alt:'Breaking Bad', title:'Breaking Bad' },
  { id:"deathnote", img:deathnote, alt:'Death Note', title:'Death Note' },
  { id:"gameofthrones", img:got, alt:'Game Of Thrones', title:'Game Of Thrones' },
  { id:"thewalkingdead", img:thewalkingdead, alt:'The Walking Dead', title:'The Walking Dead' },
  { id:"thewire", img:thewire, alt:'The Wire', title:'The Wire' }
    ]
  }