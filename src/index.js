import _ from 'lodash'
import React, {Component} from 'react'; //used to create and manage components
import ReactDOM from 'react-dom'; //interact with actual DOM
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyClMcNtXNHe5kpeSb-PbNgxx5da4JXz-bc'; //youtube api

// DOM == Document Object Model
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

      this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });

  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)} , 300)

    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch}/>
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
          videos = {this.state.videos} />
      </div>
    );
  }
}
//component is function or objext that spits html
ReactDOM.render(<App />, document.querySelector('.container')); //mkaing a jsx tag creats an instance
  //make use of component, wrap it arounf jsx tag


  //one component per file
