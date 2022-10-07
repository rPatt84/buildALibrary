class Catalogue {
    constructor(){
      this._catalogue = [];
    }
  
    static addToCat(title, mediaType){
     catalogue._catalogue.push(['Media Type : ' + mediaType, 'title : ' + title]);
    }
  
    static showCatalogue() {
      return catalogue._catalogue;
    }
  }
  
  class Media{
    constructor(title, mediaType){
      this._title = title;
      this._mediaType = mediaType;
      this._ratings = [];
      this._isCheckedOut = false;
      Catalogue.addToCat(title, mediaType);
    }
  
    get title() {
      return this._title;
    }
  
    get ratings() {
      return this._ratings
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get getAverageRating() {
      return (this._ratings.reduce((previousValue, currentValue) => (previousValue + currentValue))) / this._ratings.length;
    }
  
    set addRating(newRating) {
      this._ratings.push(newRating);
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut ? this._isCheckedOut = false : this._isCheckedOut = true;
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages){
      super(title, 'Book');
      this._author = author;
      this._pages = pages;
    }
    get getAuthor() {
      return this._author;
    }
  
    get numberOfPages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime){
      super(title, 'Movie');
      this._director = director;
      this._runTime = runTime;
    }
    get getDirector() {
      return this._director;
    }
  
    get getRunTime() {
      return this._runTime;
    }
  }
  
  class CD extends Media {
    constructor(artist, title, songs) {
      super(title, 'CD');
      this._artist = artist;
      this._songs = songs;
    }
  
    get getArtist() {
      return this._artist;
    }
  
    get getSongs() {
      return this._songs;
    }
  
    shuffle() {
        const songs = this.getSongs, tracks = [], previousTracks = [];

        //Generate random number between zero and array length
        const trackNo = function() {
            return Math.floor(Math.random() * songs.length);
        };
            
        // Recursive function, check if track has already been added
        function checkAddTrack(num) {
            let trackAlreadyAdded = false;

            //loop over pervious tracks, if 'i' and 'num' variables match, set trackAlreadyed to true
            for(let i = 0; i <= previousTracks.length; i++){
                if(previousTracks[i] === num) { trackAlreadyAdded = true }
            }
            //If Track already added is false, add num to previousTracks array(to keep track of added tracks), and add track song to tracks array
            if(!trackAlreadyAdded){ 
                previousTracks.push(num); 
                tracks.push(songs[num])
            }
            //If both arrays are not the same length then more tracks need to be added 
            if (tracks.length !== songs.length) {
                checkAddTrack( trackNo() )
            }
        }
        checkAddTrack(trackNo())
        return tracks;
    }
  }
  
  const catalogue = new Catalogue();
  
  const theBrain = new Book('David Eagleman', 'The Brain', 226);
  console.log(theBrain);
  console.log(theBrain.title);
  console.log(theBrain.ratings);
  console.log(theBrain.isCheckedOut);
  console.log(theBrain.getAuthor);
  console.log(theBrain.numberOfPages);
  theBrain.addRating = 100;
  theBrain.addRating = 80;
  theBrain.toggleCheckOutStatus();
  console.log(theBrain.getAverageRating);
  
  console.log('-----')
  const dieTrying = new Book('Lee Child', 'Die Trying', 557)
  console.log(dieTrying);
  console.log(dieTrying.title);
  console.log(dieTrying.ratings);
  console.log(dieTrying.isCheckedOut);
  console.log(dieTrying.getAuthor);
  console.log(dieTrying.numberOfPages);
  dieTrying.addRating = 93;
  dieTrying.addRating = 94;
  dieTrying.toggleCheckOutStatus()
  console.log(dieTrying.isCheckedOut);
  console.log(dieTrying.getAverageRating);
  
  console.log('-----')
  const bloodDimond = new Movie('Edward Zwick', 'Blood Dimond', 137);
  console.log(bloodDimond);
  bloodDimond.toggleCheckOutStatus();
  bloodDimond.addRating = 65;
  console.log(bloodDimond.title);
  console.log(bloodDimond.ratings);
  console.log(bloodDimond.isCheckedOut);
  console.log(bloodDimond.getAverageRating)
  console.log(bloodDimond.getDirector);
  console.log(bloodDimond.getRunTime);
  
  console.log('-----')
  const powerslave = new CD('Iron Maiden', 'Powerslave', ['a song', 'another song', 'rhyme of the ancient mariner', 'powerslave', 'Aces High']);
  console.log(powerslave);
  powerslave.toggleCheckOutStatus();
  powerslave.addRating = 1000000;
  powerslave.addRating = 3000000;
  console.log(powerslave.title);
  console.log(powerslave.ratings);
  console.log(powerslave.isCheckedOut);
  console.log(powerslave.getAverageRating);
  console.log(powerslave.getArtist);
  console.log(powerslave.getSongs);
  console.log(powerslave.shuffle())
  
  console.log('-----')
  console.log(Catalogue.showCatalogue())

  console.log('-----');
  const watershed = new CD('Opeth', 'Watershed', ['Coil', 'Heir Apparent', 'The Lotus Eater', 'Burden', 'Porcelain Heart', 'Hex Omega']); 